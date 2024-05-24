import React from 'react'
import { ReactComponent as BusinessIcon } from '../../assets/images/business_icon.svg';
import './ProfileInfo.css'
import PersonalInfoForm from '../../componets/personal-info-form';

const PersonalInfo = () => {
  return (
    <div className='main-wrapper'>

      <div className='premium-account'>
        <BusinessIcon />
        <div className='premium-detail'>
          <h3>Premium Account</h3>
          <p>
            You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats.
          </p>
        </div>
      </div>

      <div className='personal-info-wrapper'>
        <h2>Personal Information</h2>
        <PersonalInfoForm />
      </div>

      <div className='account-info-wrapper'>
        <div className='conditons-check'>
          <input type="checkbox" />
          <span>
            Show my profile to serious employers on  <a href="https://resumedone.co/" target="_blank"> hirethesbest.io</a> for free
          </span>
        </div>


        <div className='delete-account-wrapper'>
          <h4>Delete account</h4>
          <p>If you delete your account you’ll be permanently removing it from our systems - you can’t undo it.</p>
          <a href='#'>Yes, Delete my account</a>
        </div>
      </div>

      <div className='personal-info-footer'>
        <p>
          <a href=""> Get in touch with our support team </a> if you have any question or want to leave some feedback.
          We’ll be happy to hear from you
        </p>

        <ul className='footer-wrapper'>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#"> Privacy Policy </a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

    </div>
  )
}

export default PersonalInfo;