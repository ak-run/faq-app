import React, { useReducer } from "react";
import questions from "./faq.json";

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleShowText":
      return {
        ...state,
        showText: action.questionId === state.showText ? null : action.questionId,
      };
    default:
      return state;
  }
};

export const FaqQuestion = () => {
  const [state, dispatch] = useReducer(reducer, {
    showText: null,
  });

  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <h1
            className={`Faq-question ${question.id === state.showText ? "active" : ""}`}
            onClick={() => {
              dispatch({ type: "toggleShowText", questionId: question.id });
            }}
          >
            {question.question}
          </h1>
          <p className={`Faq-answer ${question.id === state.showText ? "show" : ""}`}>
            {question.answer}
          </p>
        </div>
      ))}
    </div>
  );
};
