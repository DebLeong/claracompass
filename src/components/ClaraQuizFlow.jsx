import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const quizSteps = [
  {
    question: "Who do you want to become?",
    options: [
      { label: "🌱 Grow steadily and safely", value: "steady" },
      { label: "🚀 Aim high—dream big", value: "ambitious" },
      { label: "💖 Invest with love and purpose", value: "purposeful" },
    ],
  },
  {
    question: "Which brands do you love most?",
    options: [
      { label: "Apple", value: "apple" },
      { label: "Nike", value: "nike" },
      { label: "Costco", value: "costco" },
      { label: "Netflix", value: "netflix" },
    ],
  },
  {
    question: "What do you care about most?",
    options: [
      { label: "Growth", value: "growth" },
      { label: "Stability", value: "stability" },
      { label: "Impact", value: "impact" },
      { label: "Independence", value: "independence" },
    ],
  },
  {
    question: "What’s your monthly income/savings?",
    options: [
      { label: "<$1,000", value: "low" },
      { label: "$1,000–$3,000", value: "medium" },
      { label: "$3,000–$7,000", value: "high" },
      { label: "$7,000+", value: "very_high" },
    ],
  },
];

export default function ClaraQuizFlow() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});

  const handleAnswer = (value) => {
    const currentQuestion = quizSteps[step].question;
    setAnswers({ ...answers, [currentQuestion]: value });
    setStep((prev) => prev + 1);
  };

  if (step >= quizSteps.length) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-4">You're a 🌸 Visionary Investor</h2>
        <p className="mb-2">You love {answers["Which brands do you love most?"]} and care deeply about {answers["What do you care about most?"]}.</p>
        <p className="mb-4">Clara recommends starting with companies that reflect your values—like {answers["Which brands do you love most?"]}—and gradually building long-term confidence.</p>
        <Button className="mt-4">Get Your Clara Map</Button>
      </div>
    );
  }

  const currentStep = quizSteps[step];

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">{currentStep.question}</h2>
      <div className="grid gap-4">
        {currentStep.options.map((option) => (
          <Card key={option.value} onClick={() => handleAnswer(option.value)} className="cursor-pointer hover:shadow-xl transition-shadow">
            <CardContent className="p-4 text-center font-medium">{option.label}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
