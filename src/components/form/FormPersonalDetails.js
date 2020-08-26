import React from 'react';

const FormPersonalDetails = ({
  userDetails,
  handleChnage,
  nextStep,
  prevStep,
}) => {
  return (
    <div className="row mt">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
              value={userDetails.occupation}
              onChange={handleChnage('occupation')}
              type="text"
              id="icon_prefix"
              className="validate"
            />
            <label htmlFor="icon_prefix">Occupation</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              value={userDetails.city}
              onChange={handleChnage('city')}
              type="text"
              id="icon_prefix"
              className="validate"
            />
            <label htmlFor="icon_prefix">City</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              value={userDetails.bio}
              onChange={handleChnage('bio')}
              type="text"
              id="icon_prefix"
              className="validate"
            />
            <label htmlFor="icon_prefix">Bio</label>
          </div>
        </div>
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
      </form>
    </div>
  );
};

export default FormPersonalDetails;
