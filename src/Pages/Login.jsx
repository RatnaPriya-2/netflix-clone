import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components/Header";
import BackgroundImage from "../Components/BackgroundImage";
import { firebaseAuth } from "../Utils/Firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleLogIn = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate("/");
    }
  });
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="text flex column j-center a-center">
          <div className="form flex column ">
            <h3 className="page-title">Sign In</h3>
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
            <button onClick={handleLogIn}>Log In</button>
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
  }

  .form {
    background-color: #000000b0;
    padding: 4rem;
    gap: 1rem;
    width: 30vw;

    input {
      padding: 1rem 1.5rem;
      background: #333;
      color: rgba(255, 255, 255, 0.7);
      border: 1px solid rgba(128, 128, 128, 0.7);
      border-radius: 0.25rem;
    }
    button {
      margin-top: 1rem;
      font-size: 1rem;
      font-weight: 500;
      border: none;
      padding: 0.65rem 1.5rem;
      background: rgb(229, 9, 20);
      color: rgb(255, 255, 255);
      border-radius: 0.25rem;
    }
  }
`;
