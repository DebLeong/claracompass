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
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers((prev) => [...prev, answer]);
    setStep((prev) => prev + 1);
  };

  const handleSubmit = () => {
    // TODO: send email + answers somewhere
    console.log("Email:", email);
    console.log("Answers:", answers);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center">
      {!started ? (
        <>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Clara Compass</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
            A clear, confident path to your financial future. Find your compass in just 3 questions.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="bg-black text-white px-6 py-3 rounded-full text-lg hover:opacity-90 transition"
          >
            Start Your Compass
          </button>
        </>
      ) : submitted ? (
        <>
          <h2 className="text-2xl font-semibold mb-2">You're on the waitlist!</h2>
          <p className="text-gray-600">We’ll email you your Clara Compass soon ✨</p>
        </>
      ) : step < questions.length ? (
        <div className="w-full max-w-xl">
          <h2 className="text-xl font-medium mb-6">{questions[step].question}</h2>
          <div className="space-y-3">
            {questions[step].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full border border-gray-300 rounded px-4 py-3 hover:bg-gray-50 text-left"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md">
          <h2 className="text-xl font-medium mb-4">Enter your email to get your personalized compass:</h2>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border px-4 py-3 rounded mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white px-4 py-3 rounded hover:opacity-90"
          >
            Reveal My Clara Compass
          </button>
        </div>
      )}
    </div>
  );
}
