import React from "react";

const Step1 = ({ setStep }) => {
  const handleHeadingClick = (selectedOption) => {
    console.log("Selected:", selectedOption);
    setStep(1); // Navigate to Step 2 on heading click
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">STEP #1</h2>
      <p className="mb-8 text-xl sm:text-2xl font-semibold max-w-xs sm:max-w-md text-center">
        What is your monthly digital marketing budget?
      </p>

      {/* Clickable headings */}
      <div className="w-full max-w-xs sm:max-w-md space-y-4">
        <div
          onClick={() => handleHeadingClick("Option 1")}
          className="cursor-pointer text-md sm:text-lg font-semibold text-gray-500 bg-white hover:bg-gray-700 hover:text-white px-4 py-4 rounded-md transition duration-300"
        >
          &lt; $1,000/mo
        </div>

        <div
          onClick={() => handleHeadingClick("Option 2")}
          className="cursor-pointer text-md sm:text-lg font-semibold text-gray-500 bg-white hover:bg-gray-700 hover:text-white px-4 py-4 rounded-md transition duration-300"
        >
          $1,000 - $2,000
        </div>

        <div
          onClick={() => handleHeadingClick("Option 3")}
          className="cursor-pointer text-md sm:text-lg font-semibold text-gray-500 bg-white hover:bg-gray-700 hover:text-white px-4 py-4 rounded-md transition duration-300"
        >
          $2,000 - $5,000
        </div>

        <div
          onClick={() => handleHeadingClick("Option 4")}
          className="cursor-pointer text-md sm:text-lg font-semibold text-gray-500 bg-white hover:bg-gray-700 hover:text-white px-4 py-4 rounded-md transition duration-300"
        >
          $5,000 - $10,000
        </div>

        <div
          onClick={() => handleHeadingClick("Option 5")}
          className="cursor-pointer text-md sm:text-lg font-semibold text-gray-500 bg-white hover:bg-gray-700 hover:text-white px-4 py-4 rounded-md transition duration-300"
        >
          $10,000 - $25,000
        </div>

        <div
          onClick={() => handleHeadingClick("Option 6")}
          className="cursor-pointer text-md sm:text-lg font-semibold text-gray-500 bg-white hover:bg-gray-700 hover:text-white px-4 py-4 rounded-md transition duration-300"
        >
          $25,000+
        </div>
      </div>
    </div>
  );
};

export default Step1;
