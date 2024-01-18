// Import necessary dependencies and components
import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";

// Styled components for styling the FullBlogPost component
const StyledBlogPost = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

const StyledTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const StyledDate = styled.p`
  font-size: 14px;
  color: #777;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
`;

const StyledTagList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
`;

const StyledTag = styled.li`
  display: inline-block;
  margin-right: 8px;
  background-color: #e0e0e0;
  padding: 5px;
  border-radius: 5px;
`;

const StyledContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
`;

// Functional component for the FullBlogPost
export default function FullBlogPost({ data }) {
  // Destructure data from GraphQL query
  const { title, date, image, tags } =
    data.contentfulFullBlogPost.postReference;
  const { fullContent } = data.contentfulFullBlogPost.fullContent;

  // Return JSX for the FullBlogPost
  return (
    <Layout>
      <StyledBlogPost>
        {/* Display blog post title */}
        <StyledTitle>{title}</StyledTitle>

        {/* Display blog post date */}
        <StyledDate>{date}</StyledDate>

        {/* Display blog post image, if available */}
        {image && image.url && <StyledImage src={image.url} alt={title} />}

        {/* Display full content of the blog post */}
        <StyledContent>{fullContent}</StyledContent>
      </StyledBlogPost>
    </Layout>
  );
}

// GraphQL query to fetch data for the FullBlogPost
export const query = graphql`
  query ($postId: String!) {
    contentfulFullBlogPost(id: { eq: $postId }) {
      postReference {
        date
        title
        image {
          url
        }
        tags
      }
      fullContent {
        fullContent
      }
    }
  }
`;

// Note: GraphQL query variables, such as $postId, are provided by Gatsby based on the page context.
// In this case, $postId is used to filter the specific blog post based on its ID.
