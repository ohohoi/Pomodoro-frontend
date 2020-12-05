import React from 'react'
import ClockContainer from '../container/ClockContainer/ClockContainer'
import BtnContainer from '../container/BtnContainer/BtnContainer'
import SettingsContainer from '../container/SettingsContainer/SettingsContainer'

const Home = () => {
    return (
        <div>
            <ClockContainer/>
            <BtnContainer/>
            <SettingsContainer/>
        </div>
    )
}

export default Home;