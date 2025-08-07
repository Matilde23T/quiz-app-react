import { useState } from 'react';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';




export default function App() {

  const [ showQuiz, setShowQuiz] = useState(false)
  return ( 
    <>
     {showQuiz ? (
        <QuizScreen />
      ) : (
        <StartScreen onStart={() => setShowQuiz(true)} />
      )}
     
    </>
  );


}


