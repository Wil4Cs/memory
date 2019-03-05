import React, { Component } from 'react';
import shuffle from 'lodash.shuffle';

import './App.css';

import Card from './Card';
import GuessCount from './GuessCount';

const SIDE = 6;
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿';

class App extends Component {
    cards = this.generateCards();

    generateCards() {
        const result = [];
        const size = SIDE * SIDE;
        const candidates = shuffle(SYMBOLS);
        while (result.length < size) {
            const card = candidates.pop();
            result.push(card, card);
        }
        return shuffle(result);
    }

    handleCardClick(card) {
        console.log(card, 'clicked');
    }

    render() {
        return (
            <div className="memory">
                <GuessCount guesses={0} />
                <Card
                    card="😀"
                    feedback="hidden"
                    onClick={this.handleCardClick}
                />
                <Card
                    card="🎉"
                    feedback="justMatched"
                    onClick={this.handleCardClick}
                />
                <Card
                    card="💖"
                    feedback="justMismatched"
                    onClick={this.handleCardClick}
                />
                <Card
                    card="🎩"
                    feedback="visible"
                    onClick={this.handleCardClick}
                />
                <Card
                    card="🐶"
                    feedback="hidden"
                    onClick={this.handleCardClick}
                />
                <Card
                    card="🐱"
                    feedback="justMatched"
                    onClick={this.handleCardClick}
                />
            </div>
        );
    }
}

export default App;
