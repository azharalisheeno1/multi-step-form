"use client";
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { FaArrowLeft } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const StepperForm = () => {
  const [step, setStep] = useState(0);

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleEdit = () => {
    console.log("Edit button clicked");
  };

  return (
    <div>
      {/* Fixed Top Navigation (Progress bar and buttons) */}
      <div className="fixed top-0 left-0 w-full shadow-md z-10 p-0">
        <div className="flex px-10 bg-white py-2 justify-between">
          <button
            type="button"
            className="flex items-center font-semibold gap-4 px-4 py-2 rounded"
            onClick={handleBack}
          >
            <FaArrowLeft size={20} />
            Go Back
          </button>

          <button
            type="button"
            className="flex items-center font-semibold gap-4 px-4 py-2 rounded"
            onClick={handleEdit}
          >
            Edit
            <RxCross1 size={20} />
          </button>
        </div>
        <div className="w-full flex mt-5">
          <div
            className={`flex-1 ${
              step >= 0 ? "bg-green-500 duration-300 transition-all" : "bg-gray-200"
            } h-2`}
          ></div>
          <div
            className={`flex-1 ${
              step >= 1 ? "bg-green-500" : "bg-gray-200"
            } h-2`}
          ></div>
          <div
            className={`flex-1 ${
              step >= 2 ? "bg-green-500" : "bg-gray-200"
            } h-2`}
          ></div>
        </div>
      </div>

      <div className="pt-24 max-w-3xl mx-auto p-6">
        {step === 0 && <Step1 setStep={setStep} />}
        {step === 1 && <Step2 setStep={setStep} />} {/* Pass setStep to Step2 */}
        {step === 2 && <Step3  setStep={setStep} />}
        
      </div>
    </div>
  );
};

export default StepperForm;
