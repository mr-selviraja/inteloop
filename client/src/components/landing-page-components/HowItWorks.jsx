import React from 'react';
import collectFeedbackImg from "../../assets/collect-feedback.svg"
import organizeAndTagImg from "../../assets/organize-and-tag.svg"
import aiAnalysisImg from "../../assets/ai-analysis.svg"
import takeActionImg from "../../assets/take-action.svg"

const HowItWorksSteps = [
  {
    id: 1,
    img: collectFeedbackImg,
    title: 'Step-1: Collect Feedback',
    description: 'Gather user input from multiple sources into a single place.',
  },
  {
    id: 2,
    img: organizeAndTagImg,
    title: 'Step-2: Organize & Tag',
    description: 'Categorize and tag feedback for easier analysis.',
  },
  {
    id: 3,
    img: aiAnalysisImg,
    title: 'Step-3: AI Analysis',
    description: 'Identify common themes and insights using AI.',
  },
  {
    id: 4,
    img: takeActionImg,
    title: 'Step-4: Take Action',
    description: 'Use insights to prioritize features and improvements.',
  },
];

function HowItWorks() {
  return (
    <section className="relative max-w-4xl mx-auto px-4 py-28">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">How It Works</h2>
      <p className="text-md text-gray-600 max-w-xl mx-auto mb-12 text-center">
        A powerful workflow to transform scattered feedback into actionable insights
      </p>

      {/* Timeline line (placed behind content properly) */}
      <div className="relative z-0 before:content-[''] before:absolute before:left-1/2 before:-top-4 md:before:top-0 before:h-full before:border-l-2 before:border-dashed before:border-gray-400 before:-z-10">
        {HowItWorksSteps.map((step, index) => (
          <div
            key={step.id}
            className={`mb-12 flex flex-col sm:flex-row sm:items-center relative z-99 ${
              index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse text-right'
            }`}
          >
            {/* Mobile image */}
            <div className="sm:hidden flex items-center justify-center mb-2">
              <img className='w-40' src={step.img} alt="step image" />
            </div>

            {/* Card */}
            <article className="sm:w-1/2 sm:px-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-300 text-center sm:text-left p-10">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            </article>

            {/* Desktop image */}
            <img className='hidden sm:block w-40 mx-10' src={step.img} alt="step image" />

            {/* Mobile-only dot */}
            <div className="sm:hidden w-2 h-2 bg-violet-600 rounded-full absolute left-1/2 transform -translate-x-1/2 mt-[-26px] z-10" />

            {/* Desktop-only dot with number */}
            <div className="hidden sm:flex justify-center items-center w-5 h-5 rounded-full bg-violet-600 text-white font-bold z-10 border-4 border-white shadow-md absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
