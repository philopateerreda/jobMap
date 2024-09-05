import React, { useState } from 'react';
import styles from './register.module.css';

const Register = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={styles.scene}>
      <div className={styles.monitorSetup}>
        <div className={styles.monitor}>
          <div className={styles.screen}>
            <div className={styles.formContainer}>
              {isSignUp ? (
                <form id="signup-form">
                  <h2>Create Your Account</h2>
                  <div className={styles.formGroup}>
                    <label htmlFor="username" className={styles.labelsN}>Username</label>
                    <input type="text" id="username" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.labelsN}>Email Address</label>
                    <input type="email" id="email" required />
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="password" className={styles.labelsN}>Password</label>
                      <input type="password" id="password" required />
                    </div>
                    <div className={`${styles.formGroup} ${styles.confirm}`}>
                      <label htmlFor="confirm-password" className={styles.labelsN}>Confirm Password</label>
                      <input type="password" id="confirm-password" required />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="birthdate" className={styles.labelsN}>Date of Birth</label>
                      <input type="date" id="birthdate" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="gender" className={styles.labelsN}>Gender</label>
                      <select id="gender">
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className={styles.submitButton}>
                    Create Account
                  </button>
                  <div className={styles.formSwitch}>
                    Already have an account? <a onClick={toggleForm}>Sign in</a>
                  </div>
                </form>
              ) : (
                <form id="signin-form">
                  <h2>Sign In to Your Account</h2>
                  <div className={styles.formGroup}>
                    <label htmlFor="signin-email" className={styles.labelsN}>Email Address</label>
                    <input type="email" id="signin-email" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="signin-password" className={styles.labelsN}>Password</label>
                    <input type="password" id="signin-password" required />
                  </div>
                  <button type="submit" className={styles.submitButton}>
                    Sign In
                  </button>
                  <div className={styles.formSwitch}>
                    Don't have an account? <a onClick={toggleForm}>Sign up</a>
                  </div>
                </form>
              )}
            </div>
            <div className={styles.reflection}></div>
          </div>
          <div className={styles.purpleAccent}></div>
        </div>
        <div className={styles.stand}></div>
      </div>
      <div className={styles.table}></div>
    </div>
  );
};

export default Register;