import React, { useState } from 'react'

const questions = [
  {
    question: "What is your current investing style?",
    options: ["Beginner", "Growth", "Value", "Momentum", "Index-only"]
  },
  {
    question: "How much time do you want to spend thinking about investing?",
    options: ["None", "Some", "As little as possible", "A lot"]
  },
  {
    question: "What would make you feel successful financially?",
    options: [
      "Financial freedom",
      "Outperforming the market",
      "Owning meaningful companies",
      "Just not losing money"
    ]
  }
]

export default function Quiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])

  const handleAnswer = (answer) => {
    setAnswers(prev => [...prev, answer])
    setStep(prev => prev + 1)
  }

  if (step >= questions.length) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Your Clara Compass is Ready</h1>
        <p>Thank you! Based on your answers, we’ll guide you toward your personalized financial path.</p>
      </div>
    )
  }

  const current = questions[step]

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">{current.question}</h1>
      <div className="space-y-2">
        {current.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="block w-full text-left border px-4 py-2 rounded hover:bg-gray-100"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
