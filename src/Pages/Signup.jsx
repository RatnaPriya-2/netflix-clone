import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components/Header";
import BackgroundImage from "../Components/BackgroundImage";
import { firebaseAuth } from "../Utils/Firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


export default function Signup() {

  
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  
  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser)=>{
   if(currentUser) {
    navigate("/");
   }
  })
  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="text flex j-center a-center">
          <div className="content-hero">
            <h1>Unlimited movies, TV shows and more</h1>
            <h3>Starts at ₹149. Cancel anytime.</h3>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <div className="form">
              <input
                type="email"
                placeholder="Email address"
                name="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              {showPassword && (
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formValues.password}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              )}

              {!showPassword && (
                <button
                  className="a-center j-center"
                  onClick={() => setShowPassword(true)}
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>{" "}
                </button>
              )}
            </div>
            <div className="login flex a-center j-center">
              <button onClick={handleSignIn}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  color: white;

  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    display: grid;
    grid-template-rows: 15vh 85vh;
    // text-align: center;
  }

  .content-hero {
    h1 {
      margin-bottom: 0.5rem;
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 150%;
      max-width: 45vw;
    }
    h3 {
      margin-bottom: 1.4rem;
      font-size: 1.6rem;
      font-weight: 400;
    }
    p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.99rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }
    .form {
      display: grid;
      grid-template-columns: ${({ showPassword }) =>
        showPassword ? "1fr 1fr" : "2fr 1fr"};
      // grid-template-columns: 1fr 1fr;
      input {
        padding: 1rem 1.5rem;
        background: rgba(22, 22, 22, 0.7);
        color: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(128, 128, 128, 0.7);
        border-radius: 0.25rem;
        margin-right: 0.5rem;
      }
      button {
        font-size: 1.45rem;
        font-weight: 500;
        border: none;
        padding: 0.65rem 1.5rem;
        background: rgb(229, 9, 20);
        color: rgb(255, 255, 255);
        border-radius: 0.25rem;
        display: inline-flex;

        svg {
          margin-left: 20px;
        }
      }
    }

    input:focus {
      outline: white solid 0.025rem;
      outline-offset: 0.125rem;
    }
  }

  svg {
    width: 1.5rem;
  }

  .login {
    button {
      margin-top: 1rem;
      font-size: 0.875rem;
      padding: 0.4rem 1rem;
      background: rgb(229, 9, 20);
      border: none;
      border-radius: 0.25rem;
      font-weight: 500;
      color: white;
    }
  }
`;
