import React from "react";
import logo from "../Assets/logo.png";
import styled from "styled-components";
import languageicon from "../Assets/languageicon.svg";
import { useNavigate } from "react-router-dom";

export default function Header(props) {

  const navigate = useNavigate();
  return (
    <Container className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="Netflix-logo" />
      </div>

      <div className="flex">
        <div className="language-tab">
          <div className="language-icon">
            <select>
              <option value="2">English</option>
              <option value="2">हिन्दी</option>
            </select>
          </div>
        </div>

        <div>
          <button onClick={()=>navigate(props.login? "/login": "/signup")}>{props.login? "Log In": "Sign In"}</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 4rem;
  color:white;

  .logo {
    img {
      height: 5rem;
    }
  }

  .flex {
    gap: 1.5rem;
  }

  .language-icon::before {
    content: url(${languageicon});
  }

  .language-tab {
    position: relative;
  }

  .language-icon {
    select {
      border-color: rgba(128, 128, 128, 1);
      padding: 0.4rem 0.6rem 0.4rem 2.2rem;
      background-color: transparent;
      border-radius: 0.25rem;
      color:white;
    }
  }

  .language-icon::before {
    content: url(${languageicon});
    position: absolute;
    top: 7px;
    left: 12px;
  }
  button {
      background: rgb(229, 9, 20);
    border: none;
    border-radius: 0.25rem;
    font-weight: 500;
    color:white;font-size: 0.875rem;
    padding: 0.4rem 1rem;
  
  }
`;
