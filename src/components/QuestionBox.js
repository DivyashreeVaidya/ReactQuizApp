import React from 'react';
import "./quiz_app.css";
import 'bootstrap/dist/css/bootstrap.css';



const QuestionBox = ({ handleAnswer, 
                      data: {question, correct_answer, incorrect_answers}, 
}) =>  {

    const shuffledAnswers = [correct_answer, ... incorrect_answers].sort(() => Math.random() - 0.5);

return(
<div>
<div className="question" dangerouslySetInnerHTML={{ __html:question}}></div>
<div className="row mx-md-n5">
<div className="col px-md-5"><div className="p-3">
                           {shuffledAnswers.map(answer =>
                                                           <button id='opt' type='button' 
                                                           className='btn btn-default btn-lg btn-block'
                                                            onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{ __html:answer}}>
                                                           </button>)}</div></div></div>
{/*<div className="col px-md-5"><div className="p-3"><Button className={correct_answer === shuffledAnswers[1] ? "border border-success" : "border border-danger"} onClick={() => handleAnswer(shuffledAnswer[1])} answer={shuffledAnswer[1]}/></div></div>
</div>
<div className="row mx-md-n5">
<div className="col px-md-5"><div className="p-3">{<Button className={correct_answer === shuffledAnswers[2] ? "border border-success" : "border border-danger"} onClick={() => handleAnswer(shuffledAnswer[2])} answer={shuffledAnswer[2]}/></div></div>
<div className="col px-md-5"><div className="p-3">{<Button className={correct_answer === shuffledAnswers[3] ? "border border-success" : "border border-danger"} onClick={() => handleAnswer(shuffledAnswer[3])} answer={shuffledAnswer[3]}/</div></div> 
                           </div>*/}

</div>
);
};

export default QuestionBox;