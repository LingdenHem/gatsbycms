import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";

export default function ContactPage({ data }) {
  const { heading, info, contactImage } = data.contentfulContact;
  return (
    <StyledContainer>
      <Layout>
        <StyledTitle>{heading}</StyledTitle>
        <StyledInfoList>
          {info.map((infoItem, index) => (
            <StyledInfoItem key={index}>{infoItem}</StyledInfoItem>
          ))}
        </StyledInfoList>
        <StyledImageContainer>
          <img src={contactImage.url} alt="profile" />
        </StyledImageContainer>
      </Layout>
    </StyledContainer>
  );
}

export const Head = () => <title>About Me</title>;

export const pageQuery = graphql`
  query {
    contentfulContact {
      heading
      info
      contactImage {
        url
      }
    }
  }
`;
const StyledContainer = styled.div`
  text-align: center;
  background-color: beige;
`;

const StyledTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bolder;
  font-family: "Roboto", sans-serif;
`;

const StyledImageContainer = styled.div`
  padding: 10px;
`;

const StyledInfoList = styled.div`
  font-weight: bold;
  font-family: "Roboto", sans-serif;
`;

const StyledInfoItem = styled.li`
  border: 5px solid white;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  margin: 0 auto;
`;
