import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {
    handleCardClick(card) {
        console.log(card, 'clicked');
    }
    render() {
        return (
            <div className="memory">
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
                    feedback="justMaonClick={this.handleCardClick}tched"
                />
            </div>
        );
    }
}

export default App;
