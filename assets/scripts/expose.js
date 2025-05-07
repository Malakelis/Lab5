// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // grab all the elements needed
  const hornSelect   = document.getElementById('horn-select');
  const hornImage    = document.querySelector('#expose img');
  const audio      = document.querySelector('#expose audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon   = document.querySelector('#volume-controls img');
  const playButton   = document.querySelector('#expose button');

  // set up confetti
  const jsConfetti = new JSConfetti();

  // When you pick a horn, swap image + audio src
  hornSelect.addEventListener('change', () => {
    const choice = hornSelect.value;          // "air‑horn" | "car‑horn" | "party‑horn"
    hornImage.src = `assets/images/${choice}.svg`;
    hornImage.alt = choice.replace('-', ' ') + ' image';
    audio.src   = `assets/audio/${choice}.mp3`;
  });

  // When you move the volume slider:
  volumeSlider.addEventListener('input', () => {
    const vol = Number(volumeSlider.value);  // 0–100
    // set the actual HTMLMediaElement volume (0.0–1.0)
    audio.volume = vol / 100;

    // pick icon level 0–3
    let level;
    if (vol === 0)        level = 0;
    else if (vol < 33)    level = 1;
    else if (vol < 67)    level = 2;
    else                  level = 3;

    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  });

  // Event listener for clicking play sound
  playButton.addEventListener('click', () => {
    // play the chosen sound
    audio.play();

    // Fire confetti for party horn
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}