import React, { Component,useState,useEffect } from "react";
import ReactDOM from "react-dom";
import App from './App';
import QuestionBox from './components/QuestionBox';

export{ QuestionBox };
//import 'bootstrap/dist/css/bootstrap.css';
//import "./quiz_app.css";

//const API_URL = 'https://opentdb.com/api.php?amount=20&category=10&difficulty=easy&type=multiple';

/*class Quiz_app extends Component {
    state = {
    	qb: []
    }
    render(){
		return(
		<div className="container"> 
            <div className="title">Literature Quiz </div>
             <div className="question">This is the question.</div>
             <div className="row mx-md-n5">
             <div className="col px-md-5"><div className="p-3"><button type="button" className="btn btn-default btn-lg btn-block">Answer-1</button></div></div>
             <div className="col px-md-5"><div className="p-3"><button type="button" className="btn btn-default btn-lg btn-block">Answer-2</button></div></div>
            </div>
            <div className="row mx-md-n5">
             <div className="col px-md-5"><div className="p-3"><button type="button" className="btn btn-default btn-lg btn-block">Answer-3</button></div></div>
             <div className="col px-md-5"><div className="p-3"><button type="button" className="btn btn-default btn-lg btn-block">Answer-4</button></div></div> 
            </div> 
            <div className="row">
            <div className="mx-auto"><button id="nextq" type="button" className="btn btn-default btn-lg">Next Question</button></div>
            </div>
		</div>
		);
	}
}*/

ReactDOM.render(<App />, document.getElementById("root"));