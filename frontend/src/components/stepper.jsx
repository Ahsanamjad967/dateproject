import { useState } from "react";

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Personal Details", "Address"];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div >
      <div className="flex justify-center w-full items-center  mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center w-full">
            <div
              className={`flex items-center space-x-2 ${
                index + 1 <= currentStep ? "text-green-500" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                  index + 1 <= currentStep
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-white border-gray-300"
                }`}
              >
                {index + 1}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-grow h-1 ">
                <div
                  className={`h-full ${
                    index + 1 < currentStep ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Step {currentStep}: {steps[currentStep - 1]}
        </h2>
        <p className="text-gray-500">
          Fill out the details for "{steps[currentStep - 1]}".
        </p>

        <div className="mt-6 flex justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === steps.length}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentStep === steps.length ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepperForm;
