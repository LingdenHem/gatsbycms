import React from "react";
import Header from "./header";
import styled from "styled-components";

const StyledLayout = styled.div`
  background-color: beige;
  font-family: "Roboto", sans-serif;
`;

export default function Layout({ children }) {
  return (
    <>
      <StyledLayout>
        <Header />
        <main>{children}</main>
      </StyledLayout>
    </>
  );
}
