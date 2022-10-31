// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis
  const select = document.getElementById('voice-select')
  let voices = []
  window.addEventListener('load', (_) => {
    voices = synth.getVoices()
    
    for (let i = 0; i < voices.length; i++) {
      let option = document.createElement('option')
      option.textContent = `${voices[i].name} + (${voices[i].lang})`
      option.value = i
      select.appendChild(option)
    }
  })

  const button = document.getElementsByTagName('button')[0]
  const inputTxt = document.getElementById('text-to-speak')
  button.addEventListener('click', (_) => {
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    if (select.value !== 'select') {
      utterThis.addEventListener('end', (_) => {
        img.alt = 'smiling face'
        img.src = 'assets/images/smiling.png'
      })
      const img = document.getElementsByTagName('img')[0]
      utterThis.voice = voices[select.value]
      img.alt = 'speaking face'
      img.src = 'assets/images/smiling-open.png'
      synth.speak(utterThis)
    }
  })
}