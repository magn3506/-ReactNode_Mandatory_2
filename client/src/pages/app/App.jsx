import React, { useState, useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import axios from 'axios';
import "./App.css";
import Spinner from "../../components/spinner/Spinner";
import QuizModule from "../../components/quiz/Quiz";


function Home(props) {

    const [quizData, setQuizData] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const URL = 'https://opentdb.com/api.php?amount=1&type=boolean';

    useEffect(() => {
        async function fetchData() {

            setIsLoading(true);
            const result = await axios(
                URL,
            );

            if (result.status === 200) {
                setTimeout(() => {
                    setQuizData(result.data);
                    setIsLoading(false);
                }, 2000);
            }


        }
        fetchData();
    }, []);


    const nextQuestion = () => {
        async function fetchData() {

            setIsLoading(true);
            const result = await axios(
                URL,
            );

            if (result.status === 200) {
                setTimeout(() => {
                    setQuizData(result.data);
                    setIsLoading(false);
                }, 2000);
            }


        }
        fetchData();
    }


    return (
        <Layout history={props.history} userEmail="user.name@email.com" >
            {isLoading ? <Spinner /> : <QuizModule quizData={quizData && quizData.results[0]} nextQuestion={nextQuestion} />}
        </Layout>
    )


}

export default Home
