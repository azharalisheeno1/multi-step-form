"use client"
import Image from "next/image";
import ty from '../../public/ty.png'
const Step3 = ({setStep}) => {
    const handleReturnHome = () => {
        setStep(0); 
      };
  return (
    <div className="flex flex-col items-center justify-center  max-w-7xl   mx-auto ">
      {/* Small Image */}
      <div className="w-52 h-52 overflow-hidden rounded-full">
         <Image className="object-cover w-full h-full" alt="loading" width={500} height={400} src={ty} />
          
        </div>

      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-semibold text-center text-gray-800">
        Your Request for a Proposal Has Been Submitted!
      </h1>

      {/* Paragraph */}
      <p className="text-center text-xl pt-5 text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum magni iure
        ad dicta ullam quos aliquam voluptate! Fuga, eos blanditiis! Sint et
        reiciendis, explicabo natus accusantium temporibus eligendi soluta
        corporis!
      </p>

      {/* Back Button */}
      <button onClick={handleReturnHome} className="px-4 text-xl py-2 mt-20 bg-green-600 text-white  hover:bg-green-700 transition duration-200">
        Return Home
      </button>
    </div>
  );
};

export default Step3;
