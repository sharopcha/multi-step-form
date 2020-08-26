import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = input => e => {
    setUserDetails({ ...userDetails, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          handleChange={handleChange}
          userDetails={userDetails}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          handleChnage={handleChange}
          userDetails={userDetails}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Confirm
          userDetails={userDetails}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return <Success />;
  }

  return <div>form goes here</div>;
};

export default UserForm;
