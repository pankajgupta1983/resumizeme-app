import React, { Fragment, useState } from "react";
import InputElement from "../common/input";
import { ReactComponent as PersonalIcon } from "../../assets/images/personal_info_icon.svg";
import './personalInfo.css'
const PersonalInfoForm = () => {
  const [personalInfo, setPersonalInfo] = useState({});

  return (
    <div className="personal-info-form-wrapper">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log("PersonalInfo -->", personalInfo)
          setPersonalInfo({})
        }}
      >
        <div className="input-group">

          <InputElement
            className="input-wrapper"
            name={"First Name"}
            placeholder={"First Name"}
            is_required={true}
            value={personalInfo.first_name || ""}
            onChange={(value) =>
              setPersonalInfo({ ...personalInfo, first_name: value })
            }
          />
          <InputElement
            className="input-wrapper"
            name={"Last Name"}
            placeholder={"Last Name"}
            is_required={true}
            value={personalInfo.last_name || ""}
            onChange={(value) =>
              setPersonalInfo({ ...personalInfo, last_name: value })
            }
          />

          <InputElement
            className="input-wrapper"
            name={"City"}
            placeholder={"City"}
            is_required={true}
            value={personalInfo.city || ""}
            onChange={(value) =>
              setPersonalInfo({ ...personalInfo, city: value })
            }
          />
          <InputElement
            className="input-wrapper"
            name={"Postal Code"}
            placeholder={"Postal Code"}
            type="number"
            is_required={true}
            value={personalInfo.postal_code || ""}
            onChange={(value) =>
              setPersonalInfo({ ...personalInfo, postal_code: value })
            }
          />

          <InputElement
            className="input-wrapper address-wrapper"
            name={"Address"}
            placeholder={"Address"}
            is_required={true}
            value={personalInfo.address || ""}
            onChange={(value) =>
              setPersonalInfo({ ...personalInfo, address: value })
            }
          />

          <InputElement
            className="input-wrapper"
            name={"Email"}
            placeholder={"Email"}
            is_required={true}
            value={personalInfo.email || ""}
            onChange={(value) =>
              setPersonalInfo({ ...personalInfo, email: value })
            }
          />
          <InputElement
            className="input-wrapper"
            name={"Phone"}
            placeholder={"Phone"}
            type="number"
            is_required={true}
            value={personalInfo.phone || ""}
            onChange={(value) =>
              setPersonalInfo({ ...personalInfo, phone: value })
            }
          />

          <InputElement
            className="input-wrapper"
            name={"Password"}
            placeholder={"Password"}
            is_required={true}
            value={personalInfo.password || ""}
            onChange={(value) =>
              setPersonalInfo({ ...personalInfo, password: value })
            }
          />
        </div>

        <p className="terms-condition">
          Use this email to log in to your  <a href="https://resumedone.co/" target="_blank"> resumedone.io</a> account and receive notifications.
        </p>


        <button type="submit" className="submit-btn">Save</button>


      </form>

      <div className="profile-img">
        <PersonalIcon />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
