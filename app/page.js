'use client';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import QuizzesArea from './Components/QuizzesArea';
import useGlobalContextProvider from './ContextApi';

import { Toaster } from 'react-hot-toast';

export default function Home() {
  const { quizToStartObject, selectedQuizObject } = useGlobalContextProvider();
  const { setSelectQuizToStart } = quizToStartObject;
  const { selectedQuiz, setSelectedQuiz } = selectedQuizObject;

  useEffect(() => {
    setSelectQuizToStart(null);
    // set the selectedQuiz back to null
    setSelectedQuiz(null);
  }, [setSelectQuizToStart, setSelectedQuiz]);

  return (
    <main className="min-h-screen w-full bg-gray-50 flex flex-col items-center">
      <Navbar />
      <div className="w-full max-w-5xl px-4 py-8">
        <QuizzesArea />
      </div>
      <Toaster />
    </main>
  );
}
