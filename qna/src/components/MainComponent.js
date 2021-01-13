import React,{ Component } from 'react';
import { QUESTIONS } from '../shared/questions';
import { Button } from 'reactstrap';

class Main extends Component{
    
    constructor(props){
        super(props);

        this.state={
            showScore: false,
            current: 0,
            score : 0
        };

        this.handleAnswer = this.handleAnswer.bind(this);
    }


    handleAnswer(corr){
        if(corr){
            this.setState({
                score: this.state.score + 1
            });
        }

        if(this.state.current + 1 < QUESTIONS.length){
            this.setState({
                current: this.state.current + 1
            });
        }
        else{
            this.setState({
                showScore: true
            });
        }
    }

    render(){

        return(
                (this.state.showScore)?(
                <div className='container justify-items-center'>
                    <div className='row score-display'>
                        <p>You have scored {this.state.score} out of {QUESTIONS.length}</p>
                    </div>
                </div>):(
                <div className='container justify-items-center'>
                    <div className='row'>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {this.state.current + 1}</span>/{QUESTIONS.length}
                            </div>
                            <div className='question-text'>{QUESTIONS[this.state.current].text}</div>
                        </div>
                        <div className='answer-section'>
                            {QUESTIONS[this.state.current].options.map((option) => (
                                <button onClick={() => this.handleAnswer(option.correct)}>{option.text}</button>
                            ))}
                        </div>
                    </div>
                </div>)
        );
    }
}

export default Main;