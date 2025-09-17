// src/App.js

import React, { useState } from 'react';
import './App.css';
import { quizData } from './QuizData';
import Quiz from './Quiz';
import Results from './Results';

function App() {
    const [userAnswers, setUserAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerChange = (questionIndex, answer) => {
        setUserAnswers({
            ...userAnswers,
            [questionIndex]: answer
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newScore = 0;
        quizData.forEach((question, index) => {
            if (userAnswers[index] === question.correctAnswer) {
                newScore++;
            }
        });
        setScore(newScore);
        setIsSubmitted(true);
    };

    const handleRetry = () => {
        setUserAnswers({});
        setIsSubmitted(false);
        setScore(0);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Ceisteanna: Slánuimhir, Réadach, Dáta agus Carachtar</h1>
                <p>Freagair na 100 ceist thíos.</p>
            </header>
            <main className="quiz-container">
                {isSubmitted ? (
                    <Results score={score} totalQuestions={quizData.length} onRetry={handleRetry} />
                ) : null}

                <form onSubmit={handleSubmit}>
                    {quizData.map((question, index) => (
                        <Quiz
                            key={index}
                            question={question}
                            onAnswerChange={(e) => handleAnswerChange(index, e.target.value)}
                            selectedAnswer={userAnswers[index]}
                            isSubmitted={isSubmitted}
                        />
                    ))}
                    {!isSubmitted && (
                        <button type="submit" className="submit-button">Cuir Isteach</button> 
                    )}
                    
                </form>
            </main>
        </div>
    );
}

export default App;