import React from 'react'
import backgroundimage from "../Assets/backgroundimage.jpg"
import styled from 'styled-components'

export default function BackgroundImage() {
  return (
    <Container>

      <div className="bg-image">
        <img src={backgroundimage} alt="background" />
      </div>

    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .bg-image {
    img {
      width: 100vw;
      height: 100vh;
    }
  }
`;
