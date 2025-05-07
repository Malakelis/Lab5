# Lab 5
Anthony Georgis

[Party Horn Demo (expose.html)](https://malakelis.github.io/Lab5/expose.html)  
[Speech Synthesis Demo (explore.html)](https://malakelis.github.io/Lab5/explore.html)

1. I wouldn't write a unit test for the "message" feature because sending a message touches the UI, network/API layer. It's not a self-contained function but
a workflow spanning multiple components, so it's better tested with an integration or end-to-end test.

2. I would write a unit test for the "max message length" feature, because enforcing an 80-character limit is a simple, isolated piece of logic. This kind of pure validation is ideal for unit testing.