// src/Quiz.js

import React from 'react';

const Quiz = ({ question, onAnswerChange, selectedAnswer, isSubmitted }) => {
    const isCorrect = isSubmitted && selectedAnswer === question.correctAnswer;
    const isIncorrect = isSubmitted && selectedAnswer !== question.correctAnswer;

    const selectClassName = () => {
        if (!isSubmitted) return "";
        if (isCorrect) return "correct-answer";
        if (isIncorrect) return "incorrect-answer";
    };

    return (
        <div className="question-container">
            <h3 className="question-text">{question.question}</h3>
            <select
                className={`answer-select ${selectClassName()}`}
                onChange={onAnswerChange}
                value={selectedAnswer || ''}
                disabled={isSubmitted}
            >
                <option value="" disabled>Roghnaigh do fhreagra</option> {/* Choose your answer */}
                {question.options.map((option, index) => (
                    <option
                        key={index}
                        value={option}
                        style={{
                            backgroundColor: isSubmitted && option === question.correctAnswer ? 'lightgreen' :
                                isSubmitted && option === selectedAnswer && option !== question.correctAnswer ? 'salmon' : 'white'
                        }}
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Quiz;