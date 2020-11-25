import React, { useEffect } from 'react'
import './ClockContainer.css'
import ClockRed from '../../presentational/ClockRed/ClockRed'
import ClockWhite from '../../presentational/ClockWhite/ClockWhite'
import store from '../../store/store'
import controlTimer from '../../services/controlTimer'

const ClockCarrier = () => {
    const subscribe = () => {
        store.subscribe(controlTimer)
    }

    useEffect(subscribe)

    return (
        <div id="clock-container">
            <ClockRed/>
            <ClockWhite/>
        </div>
    )
}

export default ClockCarrier