import React from 'react'
import styled from 'styled-components';

export default function NotAvailable() {
  return (
    <Container>
      <h2 className="not-available">No Movies available for selected genre</h2>
    </Container>
  );
}

const Container = styled.div`

margin-left:4rem;
padding-top:4rem;

`
