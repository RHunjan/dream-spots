import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';

const EntryPage = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <section className="entry-page">
      <h1 id="entry-title">Dream Spots</h1>

      <div className="entry-content-wrapper">
        <article id="login-wrapper">
          <h2 className="entry-heading">Login</h2>
          <form className="form-group login-form"
            onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="email-login" className="form-label">
                Email:
              </label>
              <input type="text" placeholder="Email" id="email-login" value={formState.email} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="password-login" className="form-label">
                Password:
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password-login"
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            <button
              className="entry-btn"
              type="submit"
            >GO
            </button>
          </form>
        </article>

        {error && <div>Login failed</div>}
{/* 
        <article id="signup-wrapper">
          <h2 className="entry-heading">Signup</h2>
          <form className="form-group signup-form"
          onSubmit={(values) => addUser({
            variables: {
              email: values.email,
              password: values.password,
              username: values.username,
            },
          }).then((res) => {
            if (res.data) {
              localStorage.setItem("id_token", res.data.addUser.token);
              localStorage.setItem("_id", res.data.addUser.user._id);
            //   setUserInfo(res.data);
            //   navigate("/spots");
            }
          })}>
            <div>
              <label htmlFor="username-signup" className="form-label">
                Username:
              </label>
              <input type="text" placeholder="Username" id="username-signup" />
            </div>
            <div>
              <label htmlFor="email-signup" className="form-label">
                Email:
              </label>
              <input type="text" placeholder="Email" id="email-signup" />
            </div>
            <div>
              <label htmlFor="password-signup" className="form-label">
                Password:
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password-signup"
              />
            </div>
            <button
              className="entry-btn"
              type="submit"
              
            >GO
            </button>
          </form>
        </article> */}
      </div>
    </section>
  );
};

export default EntryPage;
