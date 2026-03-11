import React from "react";
import { assets, feedbacksData } from "../assets/assets";

const Feedback = () => {
  return (
    <div
      className="container mx-auto py-10
    lg:px-32  w-full overflow-hidden"
      id="feedback"
    >
      <h1
        className="text-2xl sm:text-4xl font-bold mb-2
      text-center"
      >
        Customer
        <samp
          className="underline underline-offset-4
       decoration-1 under font-light"
        >
          feedback
        </samp>
      </h1>

      <p
        className="text-center text-gray-500 mb-12
       max-w-80 mx-auto"
      >
        Real Stories from Those Who Found Home with Us
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {feedbacksData.map((feedback, index) => (
          <div
            key={index}
            className="max-w-[340px] border shadow-lg
             rounded px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full
                 mx-auto mb-4"
              src={feedback.image}
              alt={feedback.alt}
            />

            <h2 className="text-xl text-gray-700 font-medium">
              {feedback.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm">{feedback.title}</p>

            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: feedback.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className="text-gray-600">{feedback.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
