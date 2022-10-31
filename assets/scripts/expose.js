// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let select = document.getElementById('horn-select')
  select.addEventListener('change', (event) => {
    let val = event.target.value
    if (val !== 'select') {
      let imgs = document.getElementsByTagName('img')
      for (let img of imgs) {
        if (!img.alt.includes('Volume level')) {
          img.src = 'assets/images/' + val + '.svg'
          img.alt = val
        }
      }

      let audio = document.getElementsByTagName('audio')[0]
      audio.src = 'assets/audio/' + val + '.mp3'
    }
  })

  let volume = document.getElementById('volume')
  volume.addEventListener('input', (event) => {
    let val = Number(event.target.value)
    let src = ''
    let alt = ''

    if (val === 0) {
      src = 'assets/icons/volume-level-0.svg'
      alt = 'Volume level 0'
    } else if (val < 33) {
      src = 'assets/icons/volume-level-1.svg'
      alt = 'Volume level 1'
    } else if (val < 67) {
      src = 'assets/icons/volume-level-2.svg'
      alt = 'Volume level 2'
    } else {
      src = 'assets/icons/volume-level-3.svg'
      alt = 'Volume level 3'
    }


    let imgs = document.getElementsByTagName('img')
    for (let img of imgs) {
      if (img.alt.includes('Volume level')) {
        img.src = src
        img.alt = alt
      }
    }

    let audio = document.getElementsByTagName('audio')[0]
    audio.volume = val / 100
  })

  let playSound = document.getElementsByTagName('button')[0]
  const jsconfetti = new JSConfetti()
  playSound.addEventListener('click', (_) => {
    let audio = document.getElementsByTagName('audio')[0]
    audio.play()

    if (select.value === 'party-horn') {
      jsconfetti.addConfetti()
    }
  })
}