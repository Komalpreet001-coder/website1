const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sound.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerHTML = sound
    btn.addEventListener('click')


    document.getElementById('buttons').appendChild(btn)

})

function stopSongs () {
    sounds.forEach(sound => {
        document.getElementById(sound).pause()
        document.getElementById(sound).currentTime
    })
}

