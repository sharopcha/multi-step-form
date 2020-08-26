import React from 'react';

const Confirm = ({ userDetails, prevStep, nextStep }) => {
  return (
    <div className="mt">
      <ul class="collection">
        <li class="collection-item">
          First name:{' '}
          <span className="blue-text darken-2">{userDetails.firstName}</span>
        </li>
        <li class="collection-item">
          Last name:{' '}
          <span className="blue-text darken-2">{userDetails.lastName}</span>
        </li>
        <li class="collection-item">
          Email: <span className="blue-text darken-2">{userDetails.email}</span>
        </li>
        <li class="collection-item">
          City: <span className="blue-text darken-2">{userDetails.city}</span>
        </li>
        <li class="collection-item">
          Bio: <span className="blue-text darken-2">{userDetails.bio}</span>
        </li>
      </ul>

      <br />
      <br />
      <button
        onClick={prevStep}
        className="btn waves-effect waves-light red"
        type="submit"
        name="action"
      >
        Back
        <i class="material-icons right">chevron_left</i>
      </button>
      <button
        onClick={nextStep}
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        Continue
        <i class="material-icons right">chevron_right</i>
      </button>
    </div>
  );
};

export default Confirm;
