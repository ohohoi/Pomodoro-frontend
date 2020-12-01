import React from 'react'
import './About.css'

const About = () => {
    const descKor = "뽀모도로 기법(Pomodoro Technique)은 시간 관리 방법론으로 1980년대 후반 '프란체스코 시릴로'(Francesco Cirillo)가 제안했다. 타이머를 이용해서 25분간 집중해서 일을 한 다음 5분간 휴식하는 방식이다. '뽀모도로'는 이탈리아어로 토마토를 뜻한다. 프란체스코 시릴로가 대학생 시절 토마토 모양으로 생긴 요리용 타이머를 이용해 25분간 집중 후 휴식하는 일처리 방법을 제안한데서 그 이름이 유래했다. -위키피디아"
    const descEng = "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. -Wikipedia"

    return (
        <div id="about">
            <div className="about-title">뽀모도로 기법</div>
            <div className="about-contents">{ descKor }</div>

            <div className="about-title">Pomodoro Technique</div>
            <div className="about-contents">{ descEng }</div>
        </div>
    );
};

export default About