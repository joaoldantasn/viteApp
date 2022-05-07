import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../img/bug.svg';
import ideaImageUrl from '../../img/idea.svg';
import thoughtImageUrl from '../../img/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedBackTypes = {
  BUG:{
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    },
  },
  IDEA:{
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    },
  },
  OTHER:{
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma nuvem'
    },
  },
};

export type FeedbackType = keyof typeof feedBackTypes;

export function WidgetForm(){
  const [feedbackType, setfeedbackType] = useState<FeedbackType | null>(null)

  function handleRestartFeedback(){
    setfeedbackType(null);
  }

  return (
    <div className = "bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
     

     {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setfeedbackType} />
     ) : (
       <FeedbackContentStep feedbackType={feedbackType} 
       onFeedbackRestartRequested={handleRestartFeedback}
       />
     )
       
     }

      <footer className = "text-xs text-neutral-400">
        Feito por <a className = "underline underline-offset-1" href="https://www.linkedin.com/in/jo%C3%A3o-lucas-dantas/">João Lucas</a>
      </footer>
    </div>
  );
}