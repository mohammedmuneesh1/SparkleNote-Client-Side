import { faqData } from "../../Configs/ApplicationData";
import { useState } from "react";
export default function Faq() {
  const [answersOpen, setAnswersOpen] = useState(
    Array(faqData.length).fill(false)
  );

  const toggleAnswer = (index) => {
    const newAnswersOpen = [...answersOpen];
    newAnswersOpen[index] = !newAnswersOpen[index];
    setAnswersOpen(newAnswersOpen);
  };



  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="500"
            className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
          >
            Explore Common Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqData.map((faq, index) => (
            <div
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-duration="500"
              data-aos-delay="200"
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                onClick={() => toggleAnswer(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transform ${
                    answersOpen[index] ? "rotate-0" : "rotate-180"
                  } transition-transform`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                style={{ display: answersOpen[index] ? "block" : "none" }}
                className="px-4 pb-5 sm:px-6 sm:pb-6"
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?{" "}
          <a
            href="mailto:sparklenotesinfo@example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover:underline"
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
}
