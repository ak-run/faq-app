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
            onClick={() => {
              dispatch({ type: "toggleShowText", questionId: question.id });
            }}
            style={{
              background: question.id === state.showText ? "blue" : "transparent",
            }}
          >
            {question.question}
          </h1>
          {question.id === state.showText && <p>{question.answer}</p>}
        </div>
      ))}
    </div>
  );
};
