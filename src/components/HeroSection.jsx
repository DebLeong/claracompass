import React, { useState } from "react";

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
];

export default function HeroSection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers(prev => [...prev, answer]);
    setStep(prev => prev + 1);
  };

  const handleSubmit = () => {
    // Add your logic here to save the email + answers
    console.log("Email:", email);
    console.log("Answers:", answers);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">You're on the waitlist!</h1>
        <p>We'll reach out with your personalized Clara Compass soon.</p>
      </div>
    );
  }

  if (step >= questions.length) {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-xl font-semibold mb-4">Enter your email to see your Clara Compass:</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full border rounded px-4 py-2 mb-4"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-2 px-4 rounded hover:opacity-90"
        >
          Reveal My Compass & Join the Waitlist
        </button>
      </div>
    );
  }

  const current = questions[step];

  return (
    <div className="p-6 max-w-xl mx-auto">
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
  );
}
