import React, { useState } from 'react';
import Spinner from "../spinner/Spinner";

import "./Quiz.css";

function Quiz(props) {
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const baseClass = "quiz";

    const handleAnswer = (e) => {
        e.preventDefault();

        const correctAnswer = e.target.dataset.iscorrect;
        const userAnswer = e.target.dataset.answer;

        if (correctAnswer === userAnswer) {
            setIsAnswerCorrect("CORRECT ANSWER");
            setTimeout(() => {
                props.nextQuestion();
                setIsAnswerCorrect(null);
            }, 2000)
        }

        setIsAnswerCorrect("WRONG ANSWER");
        setTimeout(() => {
            props.nextQuestion();
            setIsAnswerCorrect(null);
        }, 2000)

    }




    return (<>
        {isAnswerCorrect ?
            <div className={`${baseClass}_wrapper`}>
                <div className={`${baseClass}_iscorrect_title`} > {isAnswerCorrect}</div>
                <div className={`${baseClass}_quiz_line`} ></div>
                <div className={`${baseClass}_load_next`} >Loading next answer...</div>
                <Spinner />
            </div>
            :
            <div className={`${baseClass}_wrapper`}>
                <div className={`${baseClass}_question_container`}>
                    <div className={`${baseClass}_question_title`}>Question:</div>
                    <div className={`${baseClass}_question_text`}>{props.quizData && props.quizData.question}</div>
                </div>
                <div className={`${baseClass}_quiz_line`} ></div>
                <div className={`${baseClass}_answer_container`}>
                    <div className={`${baseClass}_answer_title`}>Choose an answer:</div>
                    <div className={`${baseClass}_answer`}>
                        <button onClick={handleAnswer} data-iscorrect={props.quizData.correct_answer} data-answer="True" className={`${baseClass}_true_btn`}>True</button>
                        <button onClick={handleAnswer} data-iscorrect={props.quizData.correct_answer} data-answer="False" className={`${baseClass}_false_btn`}>False</button>
                    </div>
                </div>
            </div>
        }
    </>
    )
}

export default Quiz

