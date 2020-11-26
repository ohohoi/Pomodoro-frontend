import React, { useEffect, useRef } from 'react'
import './ClockWhite.css'
import store from '../../store/store'

const ClockWhite = () => {
    const canvasRef = useRef()

    const clear = (canvas) => {
        var context =  canvas.getContext('2d');
        context.clearRect(0,0, canvas.width, canvas.height);
    }

    const draw = () => {
        const totalSeconds = 1500
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        const radius = canvas.width / 2
        const currSec = store.getState().updateTimerSeconds.seconds
        const startAngle = 1.5*Math.PI
        const endAngle = startAngle + 2 * Math.PI * currSec / totalSeconds

        if (currSec) {
            context.fillStyle = 'white'
            context.beginPath()
            context.moveTo(radius, radius / 2)
            context.arc(radius, radius / 2, radius, startAngle, endAngle, false)
            context.lineTo(radius, radius / 2)
            context.fill()
        }
        else {
            clear(canvas)
        }
    }

    const subscribe = () => {
        store.subscribe(draw)
    }

    useEffect(subscribe)

    return (
        <div>
            <canvas id="clock-white" ref={ canvasRef }></canvas>
        </div>
    )
}

export default ClockWhite