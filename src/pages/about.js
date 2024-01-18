// Import necessary dependencies and components
import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";

// Functional component for the AboutPage
export default function AboutPage({ data }) {
  // Destructure data from GraphQL query
  const { heading, textBody, work, profileImage } = data.contentfulAboutPage;

  // Return JSX for the AboutPage
  return (
    <StyledContainer>
      {/* Use Layout component for consistent page layout */}
      <Layout>
        {/* Display the page title */}
        <StyledTitle>{heading}</StyledTitle>

        {/* Display the profile image */}
        <StyledImageContainer>
          <img src={profileImage.url} alt="profile" />
        </StyledImageContainer>

        {/* Display the text body */}
        <StyledTextBody>{textBody.textBody}</StyledTextBody>

        {/* Display the list of work items */}
        <StyledWorkList>
          {work.map((workItem, index) => (
            <StyledWorkItem key={index}>{workItem}</StyledWorkItem>
          ))}
        </StyledWorkList>
      </Layout>
    </StyledContainer>
  );
}

// Set the title of the page
export const Head = () => <title>About Me</title>;

// GraphQL query to fetch data for the AboutPage
export const pageQuery = graphql`
  query {
    contentfulAboutPage {
      heading
      textBody {
        textBody
      }
      work
      profileImage {
        url
      }
    }
  }
`;

// Styled components for styling the AboutPage
const StyledContainer = styled.div`
  background-color: beige;
  color: black;
  text-align: center;
  padding: 20px;
`;

const StyledTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bolder;
  font-family: "Roboto", sans-serif;
`;

const StyledImageContainer = styled.div`
  margin-bottom: 20px;
`;

const StyledTextBody = styled.p`
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  white-space: pre-line;
  border: 10px solid white;
  padding: 10px;
`;

const StyledWorkList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-weight: bold;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

const StyledWorkItem = styled.span`
  font-size: 16px;
  margin-bottom: 5px;
  border: 10px solid white;
  padding: 10px;
  margin: 10px;
`;
