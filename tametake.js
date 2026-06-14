document.getElementById('requestMidi').addEventListener('click', async () => {
      try {
        const midiAccess = await navigator.requestMIDIAccess({ sysex: false });
      }
}