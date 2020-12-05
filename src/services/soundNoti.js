import audioSrc from '../resources/audio/alarm.mp3'

const audio = new Audio(audioSrc)

const soundNoti = () => {
    console.log(audio.src)
    const playPromise = audio.play()

    if (playPromise !== undefined) {
        playPromise.then().catch(error => {
            console.log(error)
        })
    }
}

export default soundNoti