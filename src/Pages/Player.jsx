import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import video from "../Assets/trailer8.mp4";
import { useNavigate } from "react-router-dom";

export default function Player() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="player">
        <div className="back-arrow" onClick={() => navigate(-1)}>
          <BsArrowLeft />
        </div>
        <video src={video} autoplay loop controls muted></video>
      </div>
    </Container>
  );
}

const Container = styled.div`

overflow:hidden;

  .player {
    height: 100vh;
    width: 100vw;

    .back-arrow {
      position: absolute;
      z-index:2;
      top:2rem;
      left:2rem;
      cursor: pointer;
      svg {
        font-size: 2.8rem;
      
      }
    }
    video {
      height: 100vh;
      width: 100vw;
    }
  }
`;
