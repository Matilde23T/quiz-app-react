import { useState } from "react";
import { questions } from "./data";
import { CheckAnswer } from "./CheckAnswer";
import './quiz.css';
import './quiz-media.css';  


export default function DisplayQuiz(){

    const [index, setIndex] = useState(0);
    const [selectAnswer, setSelectedAnswer] = useState(null);
    const [ correctAnswer, setCorrectAnswer] = useState(null);
    const [ quizFinished, setQuizFinished] = useState(false);
    const [score, setScore] = useState(0);
    
//indice della domanda
 let question = questions[index];

function HandleAnswer(option) {
  setSelectedAnswer(option);
  //la risposta corretta deriva dalla funzione esterna con i paramentri opzione e risposta esatta
  const correct = CheckAnswer(option, question.answer);
  setCorrectAnswer(correct);

  if (!correct) {
    // se la risposta è sbagliata allora passa alla prossima 
    setTimeout(() => {
      //manda avanti l'indice delle domande
      const nextIndex = index + 1;
      //se l'indice rimane dentro gli indici massimi allora manda avanti senno il quiz è finito
      if (nextIndex < questions.length) {
        setIndex(nextIndex);
        setSelectedAnswer(null);
        setCorrectAnswer(null);
      } else {
        setQuizFinished(true);
      }
    }, 1000); // 1 secondo di pausa per vedere l'errore
  }
}

function HandleNextQuestion() {
  if (correctAnswer) {
    // Aggiorna punteggio
    setScore(prev => prev + 1);

    // Calcola prossimo indice
    const nextIndex = index + 1;

    if (nextIndex < questions.length) {
      setIndex(nextIndex);
      setSelectedAnswer(null);
      setCorrectAnswer(null);
    } else {
      setQuizFinished(true); 
      
    }
  } 
}
   

   return (
  <div className="body-section">
    <div className="main-section">

      {quizFinished ? (
        <div className="result-section">
          <h1>Quiz completato!</h1>
          <h2>Il tuo punteggio: {score} su {questions.length}</h2>
          <button onClick={() => window.location.reload()} className="Restart-btn">Ricomincia</button>
        </div>
      ) : (
        <div key={question.id}>
          <h1 className="domanda">{question.question}</h1>
          <div className="image-container">
          <img src={question.img} className="image" />
          </div>
          <ul className="list-options">
            {question.options.map((option, i) => {
              let className = 'optionelement';

              if (selectAnswer === option) {
                if (option === question.answer) {
                  className += " option-correct";
                } else {
                  className += " option-wrong";
                }
              }

              return (
                <li key={i}>
                  <button
                    className={className}
                    onClick={() => HandleAnswer(option)}
                    disabled={selectAnswer !== null}
                  >
                    {option}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="end-section">
          <h4>({index + 1} di {questions.length})</h4>
          <button onClick={HandleNextQuestion} disabled={!correctAnswer} className="nextbtn">
            Next
          </button>
          </div>
        </div>
      )}

    </div>
  </div>
);

    

}