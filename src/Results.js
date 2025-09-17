// src/Results.js

import React from 'react';

const Results = ({ score, totalQuestions, onRetry }) => {
    const percentage = ((score / totalQuestions) * 100).toFixed(0);
    return (
        <div className="results-container">
            <h2>Torthaí</h2> {/* Results */}
            <p className="score-text">Fuair tú {score} as {totalQuestions} ceart! ({percentage}%)</p> {/* You got X out of Y correct! */}
            <button onClick={onRetry} className="retry-button">Bain triail as arís!</button> {/* Try again! */}
        </div>
    );
};

export default Results;