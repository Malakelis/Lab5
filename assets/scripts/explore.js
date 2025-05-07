// explore.js
window.addEventListener('DOMContentLoaded', init)

function init() {
  // Grab DOM elements
  const synth       = window.speechSynthesis
  const voiceSelect = document.getElementById('voice-select')
  const textInput   = document.getElementById('text-to-speak')
  const talkButton  = document.querySelector('#explore button')
  const faceImage   = document.querySelector('#explore img')

  let voices = []

  // Populate voice list
  function loadVoices() {
    voices = synth.getVoices()
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>'
    voices.forEach((voice, i) => {
      const option = document.createElement('option')
      option.value = i
      option.text  = `${voice.name} (${voice.lang})`
      voiceSelect.appendChild(option)
    })
  }

  // Listen for when voices change
  synth.addEventListener('voiceschanged', loadVoices)

  // Load voices if available immediately
  loadVoices()

  // Speak typed text on button click
  talkButton.addEventListener('click', () => {
    const text      = textInput.value.trim()
    const selection = voiceSelect.value

    if (!text) {
      alert('Please enter some text to speak')
      return
    }
    if (selection === 'select') {
      alert('Please choose a voice')
      return
    }

    // Build and configure utterance
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.voice = voices[Number(selection)]

    // Swap face while speaking
    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png'
      faceImage.alt = 'Speaking face'
    })
    utterance.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png'
      faceImage.alt = 'Smiling face'
    })

    synth.speak(utterance)
  })
}