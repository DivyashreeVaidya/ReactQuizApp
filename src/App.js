import React, { useState, useEffect } from 'react';
import "./components/quiz_app.css";
import 'bootstrap/dist/css/bootstrap.css';
import { QuestionBox } from './components';

//import 'bootstrap/dist/js/bootstrap.bundle';

const API_URL = 'https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple';

function App() {
   const [questions, setQuestions] = useState([]);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [score, setScore] = useState(0);  
   const [gameEnded, setGameEnded] = useState(false);
   const [showAnswers, setShowAnswers] = useState(false);
   
   
   useEffect(()=> {
    fetch(API_URL)
    .then((res) => res.json())
    .then((data)=> {
       setQuestions(data.results);
       console.log(data);
    }); 
   }, []);

   const handleAnswer = (answer) => {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex);
    
      if(answer === questions[currentIndex].correct_answer){
         setScore(score + 1);
          
      }
     if(newIndex >= questions.length){
        setGameEnded(true);
     }
       setShowAnswers(true);

   };
   /*const nextQuestion = () =>{
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex);
   }*/




  return gameEnded ? (
     <div>
     <h1 className="score1">Your Score: {score}/10</h1>
     <h2 className="score">Total correct: {score}</h2><h2 className="score">Total incorrect:{10-score}</h2>
     {/*<div className="container"> 
     <div className="row"><div id="title" className="col-sm-5">Literature Quiz</div><div id="progress" className="col-sm-7"> Question {currentIndex+1}/10 </div></div>
     <QuestionBox data={questions[currentIndex]} 
                  //showAnswers={showAnswers}
                  />
  </div>*/}</div>
     
  ) : (questions.length > 0 ? (
    <div className="container"> 
            <div className="row"><div id="title" className="col-sm-5">Literature Quiz</div><div id="progress" className="col-sm-7"> Question {currentIndex+1}/10 </div></div>
            <QuestionBox data={questions[currentIndex]} 
                         showAnswers={showAnswers}
                         handleAnswer={handleAnswer}/>
            
            
            <div className="row">
            <div className="mx-auto"><button id="nextq" type="button" className="btn btn-default btn-lg" 
             >Next Question</button></div>
            </div>
            </div>
             ) : 
        (<h4 className="loading">Loading...</h4>));
  
}


export default App;
