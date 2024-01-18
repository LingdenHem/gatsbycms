import React from "react";
import { graphql, useStaticQuery } from "gatsby"; // Import useStaticQuery
import Layout from "../components/layout";
import styled from "styled-components";

const StyledContain = styled.div`
  text-align: center;
`;

export default function IndexPage() {
  // Use useStaticQuery to fetch data from GraphQL
  const data = useStaticQuery(graphql`
    query {
      contentfulHomePage {
        title
        homeimage {
          url
        }
        description {
          description
        }
      }
    }
  `);

  // Extract data from the GraphQL query result
  const { title, homeimage, description } = data.contentfulHomePage;

  return (
    <StyledContain>
      <Layout>
        <h1>{title}</h1>
        <img src={homeimage.url} alt="image" />
        <p>{description.description}</p>
      </Layout>
    </StyledContain>
  );
}
