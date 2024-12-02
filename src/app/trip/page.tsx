'use client';
// import RedButton from "@/components/RedButton";
// import NavBar from "../sections/navBar"; // Importar el NavBar
// import Footer from "../sections/footer"; // Importar el Footer
// import Header from "@/components/Header";
// import Paragraph from "@/components/Paragraph";
// import Image from "@/components/Image";
import { useState } from 'react';


interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
}

interface TravelDetails {
  departureDate: string;
  returnDate: string;
  numberOfTravelers: number;
}

interface Accommodation {
  hotel: string;
  roomType: string;
}

interface AdditionalInfo {
  specialRequests: string;
}

interface FormData {
  personalInfo: PersonalInfo;
  travelDetails: TravelDetails;
  accommodation: Accommodation;
  additionalInfo: AdditionalInfo;
}

const ProgressiveForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const totalSteps: number = 4;

  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
    },
    travelDetails: {
      departureDate: '',
      returnDate: '',
      numberOfTravelers: 1,
    },
    accommodation: {
      hotel: '',
      roomType: '',
    },
    additionalInfo: {
      specialRequests: '',
    },
  });

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const getCurrentStepData = (): keyof FormData => {
    switch (step) {
      case 1:
        return 'personalInfo';
      case 2:
        return 'travelDetails';
      case 3:
        return 'accommodation';
      case 4:
        return 'additionalInfo';
      default:
        return 'personalInfo';
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const currentStepData = getCurrentStepData();

    setFormData((prevFormData) => ({
      ...prevFormData,
      [currentStepData]: {
        ...prevFormData[currentStepData],
        [name]:
          name === 'numberOfTravelers' ? parseInt(value) || 0 : value,
      },
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="mb-4">
              <label className="block mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.personalInfo.firstName}
                onChange={handleChange}
                className="w-full border px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.personalInfo.lastName}
                onChange={handleChange}
                className="w-full border px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.personalInfo.email}
                onChange={handleChange}
                className="w-full border px-3 py-2"
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">Travel Details</h2>
            <div className="mb-4">
              <label className="block mb-1">Departure Date</label>
              <input
                type="date"
                name="departureDate"
                value={formData.travelDetails.departureDate}
                onChange={handleChange}
                className="w-full border px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Return Date</label>
              <input
                type="date"
                name="returnDate"
                value={formData.travelDetails.returnDate}
                onChange={handleChange}
                className="w-full border px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Number of Travelers</label>
              <input
                type="number"
                name="numberOfTravelers"
                min="1"
                value={formData.travelDetails.numberOfTravelers}
                onChange={handleChange}
                className="w-full border px-3 py-2"
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">Accommodation</h2>
            <div className="mb-4">
              <label className="block mb-1">Hotel Preference</label>
              <input type="text" name="hotel"
                value={formData.accommodation.hotel}
                onChange={handleChange}
                className="w-full border px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Room Type</label>
              <select
                name="roomType"
                value={formData.accommodation.roomType}
                onChange={handleChange}
                className="w-full border px-3 py-2"
              >
                <option value="">Select a room type</option>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="suite">Suite</option>
              </select>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
            <div className="mb-4">
              <label className="block mb-1">Special Requests</label>
              <textarea
                name="specialRequests"
                value={formData.additionalInfo.specialRequests}
                onChange={handleChange}
                className="w-full border px-3 py-2"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded">
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
      <form>
        {renderStep()}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Back
            </button>
          )}
          {step < totalSteps && (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Next
            </button>
          )}
          {step === totalSteps && (
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProgressiveForm;
