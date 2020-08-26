import React from 'react';

const FormUserDetails = ({ handleChange, userDetails, nextStep }) => {
  return (
    <div className="row mt">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
              onChange={handleChange('firstName')}
              value={userDetails.firstName}
              type="text"
              id="icon_prefix"
              className="validate"
            />
            <label htmlFor="icon_prefix">First name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              onChange={handleChange('lastName')}
              value={userDetails.lastName}
              type="text"
              id="icon_prefix"
              className="validate"
            />
            <label htmlFor="icon_prefix">Last name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              onChange={handleChange('email')}
              value={userDetails.email}
              type="email"
              id="icon_prefix"
              className="validate"
            />
            <label htmlFor="icon_prefix">Email</label>
          </div>
        </div>
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

export default FormUserDetails;
