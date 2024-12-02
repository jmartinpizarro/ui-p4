'use client'

import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../sections/navBar';
import Footer from '../sections/footer';
import RedButton from '@/components/RedButton';
import Header from '@/components/Header';
import Paragraph from '@/components/Paragraph';

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
    setStep((prev) => {
      const nextStep = Math.min(prev + 1, totalSteps);
      return nextStep;
    });
  };

  const handleBack = () => {
    setStep((prev) => {
      const prevStep = Math.max(prev - 1, 1);
      return prevStep;
    });
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

  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save formData to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    // Show success message
    setShowSuccessMessage(true);
    // After 2 seconds, redirect to root page
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
  };

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [step]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Header text="Personal Information" color="red" />
            <div className="flex flex-col gap-3 bg-grey rounded-2xl items-center justify-center py-10 px-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="font-medium text-darkgrey text-center">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.personalInfo.firstName}
                  onChange={handleChange}
                  className="w-full border py-2 px-5 border-darkgrey rounded-2xl"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="font-medium text-darkgrey text-center">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.personalInfo.lastName}
                  onChange={handleChange}
                  className="w-full border py-2 px-5 border-darkgrey rounded-2xl"
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium text-darkgrey text-center">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.personalInfo.email}
                  onChange={handleChange}
                  className="w-full border py-2 px-5 border-darkgrey rounded-2xl"
                  placeholder="Enter Email"
                />
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <Header text="Travel Details" color="red" />
            <div className="flex flex-col gap-3 bg-grey rounded-2xl items-center justify-center py-10 px-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="departureDate" className="font-medium text-darkgrey text-center">Departure Date</label>
                <input
                  id="departureDate"
                  type="date"
                  name="departureDate"
                  value={formData.travelDetails.departureDate}
                  onChange={handleChange}
                  className="w-full border py-2 px-5 border-darkgrey rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="returnDate" className="font-medium text-darkgrey text-center">Return Date</label>
                <input
                  id="returnDate"
                  type="date"
                  name="returnDate"
                  value={formData.travelDetails.returnDate}
                  onChange={handleChange}
                  className="w-full border py-2 px-5 border-darkgrey rounded-2xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="numberOfTravelers" className="font-medium text-darkgrey text-center">Number of Travelers</label>
                <input
                  id="numberOfTravelers"
                  type="number"
                  name="numberOfTravelers"
                  min="1"
                  value={formData.travelDetails.numberOfTravelers}
                  onChange={handleChange}
                  className="w-full border py-2 px-5 border-darkgrey rounded-2xl"
                />
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <Header text="Accommodation" color="red" />
            <div className="flex flex-col gap-3 bg-grey rounded-2xl items-center justify-center py-10 px-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="hotel" className="font-medium text-darkgrey text-center">Hotel Preference</label>
                <input
                  id="hotel"
                  type="text"
                  name="hotel"
                  value={formData.accommodation.hotel}
                  onChange={handleChange}
                  className="w-full border py-2 px-5 border-darkgrey rounded-2xl"
                  placeholder="Enter Hotel Preference"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="roomType" className="font-medium text-darkgrey text-center">Room Type</label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.accommodation.roomType}
                  onChange={handleChange}
                  className="w-full border py-2 px-5 border-darkgrey rounded-2xl"
                >
                  <option value="">Select a room type</option>
                  <option value="single">Single</option>
                  <option value="double">Double</option>
                  <option value="suite">Suite</option>
                </select>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <Header text="Additional Information" color="red" />
            <div className="flex flex-col gap-3 bg-grey rounded-2xl items-center justify-center py-10 px-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="specialRequests" className="font-medium text-darkgrey text-center">Special Requests</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.additionalInfo.specialRequests}
                  onChange={handleChange}
                  className="w-full border py-2 px-5 border-darkgrey rounded-2xl"
                  placeholder="Enter any special requests"
                />
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const progressPercentage = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <>
      <NavBar />
      <div className="flex-grow">
            {showSuccessMessage ? (
              <div className="flex flex-col items-center justify-center mt-10">
                <Header text="Form Submitted Successfully!" color="red" />
                <Paragraph text="Thank you for submitting the form. You will be redirected shortly." />
              </div>
            ) : (
              <div
                ref={formRef}
                className="max-w-xl w-full flex flex-col gap-10 px-5 py-3 mx-auto mt-10"
              >
          {/* Form */}
          <form onSubmit={handleSubmit}>
            {renderStep()}
            {/* Buttons */}
            <div className="flex mt-6">
              {step > 1 && (
                <RedButton text="Back" clicked={handleBack} />
              )}
              <div className="ml-auto">
                {step < totalSteps && (
                  <RedButton text="Next" clicked={handleNext} />
                )}
                {step === totalSteps && (
                  <RedButton text="Submit" type="submit" />
                )}
              </div>
            </div>
          </form>
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="w-full bg-grey rounded-full h-2.5">
              <div
                className="bg-red h-2.5 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
      </div>
      <Footer />
    </>
  );
};
export default ProgressiveForm;
