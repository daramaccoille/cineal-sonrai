// src/App.js

import React, { useState, useMemo } from 'react';
import './App.css';
import { quizData } from './QuizData';
import Quiz from './Quiz';
import Results from './Results';

function App() {
    const [userAnswers, setUserAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    // 1. Randomize questions only once when the component mounts
    const shuffledQuizData = useMemo(() => {
        // Fisher-Yates (aka Knuth) Shuffle algorithm
        const array = [...quizData];
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }, []);

    const totalQuestions = shuffledQuizData.length;

    const handleAnswerChange = (questionIndex, answer) => {
        setUserAnswers({
            ...userAnswers,
            [questionIndex]: answer
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newScore = 0;
        shuffledQuizData.forEach((question, index) => {
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
        // Note: The questions will remain in the same shuffled order for this session.
        // A full page refresh is needed to get a new random order.
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Ceisteanna: Slánuimhir, Réadach, Dáta agus Carachtar</h1>
                <p>Freagair na {totalQuestions} ceist thíos.</p>
            </header>
            <main className="quiz-container">
                {isSubmitted ? (
                    <Results score={score} totalQuestions={totalQuestions} onRetry={handleRetry} />
                ) : null}
                <form onSubmit={handleSubmit}>
                    {shuffledQuizData.map((question, index) => (
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