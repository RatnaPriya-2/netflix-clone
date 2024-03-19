import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import backgroundImage from "../Assets/home.jpg";
import MovieLogo from "../Assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../Store";
import Slider from "../Components/Slider";

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const genresLoaded = useSelector((state )=> state.netflix.genresLoaded);
  const movies = useSelector((state)=> state.netflix.movies);

  const dispatch  = useDispatch();

  useEffect(()=>{
    dispatch(getGenres())
  })

  useEffect(() => {
    if(genresLoaded) dispatch( fetchMovies({ type : "all"}))
  });

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img src={backgroundImage} alt="background" className="bg-image" />
      </div>
      <div className="hero-content">
        <img src={MovieLogo} alt="Movie logo" />

        <div className="play-buttons flex a-center ">
          <button
            className="flex a-center j-center"
            onClick={() => navigate("/player")}
          >
            <FaPlay />
            Play
          </button>
          <button className="flex a-center j-center">
            <AiOutlineInfoCircle />
            More Info
          </button>
        </div>
      </div>
      <Slider movies={movies} />
    </Container>
  );
}

const Container = styled.div`
  .hero {
    position: relative;
    .bg-image {
      filter: brightness(70%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }
  }

  .hero-content {
    position: absolute;
    bottom: 5rem;
    padding-left: 5rem;
    .play-buttons {
      padding-top: 3rem;
      gap: 2rem;

      button {
        padding: 0.3rem 2rem;
        gap: 1rem;
        border: none;
        border-radius: 0.2rem;
        font-size: 1rem;
        &:hover {
          opacity: 0.7;
        }
        &:nth-of-type(2) {
          background-color: rgba(109, 109, 110, 0.7);
          color: white;
          svg{
            font-size:1.2rem;
          }
        }
      }
    }
  }
`;
