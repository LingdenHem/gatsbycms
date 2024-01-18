// Import necessary dependencies and components
import { graphql, Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

// Functional component for the ProjectPage
export default function ProjectPage({ data }) {
  // Extract data from GraphQL query
  const queryData = data.allContentfulBlog.nodes;

  // State variables for tags
  const [allTags, setAllTags] = React.useState([]);
  const [selectedTags, setSelectedTags] = React.useState([]);

  // Function to handle tag click and update selected tags
  const handleClickUpdateTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
    } else {
      setSelectedTags((prevTags) => [...prevTags, tag]);
    }
  };

  // useEffect to update unique tags when queryData changes
  React.useEffect(() => {
    const uniqueTags = Array.from(
      new Set(queryData.flatMap((node) => node.tags))
    );
    setAllTags(uniqueTags);
  }, [queryData]);

  // Return JSX for the ProjectPage
  return (
    <Layout>
      <StyledContainer>
        {/* Display all available tags */}
        <StyledTags>
          {allTags.map((tag, index) => (
            <StyledTag
              key={index}
              onClick={() => handleClickUpdateTag(tag)}
              selected={selectedTags.includes(tag)}
              inFilter={true}>
              {tag}
            </StyledTag>
          ))}
        </StyledTags>

        {/* Display filtered posts based on selected tags */}
        {queryData
          .filter((node) => {
            if (selectedTags.length === 0) {
              return true;
            } else {
              return selectedTags.some((tag) => node.tags.includes(tag));
            }
          })
          .map((node) => (
            <StyledPostContainer key={node.id}>
              <StyledTitle>{node.title}</StyledTitle>
              <StyledImageContainer>
                <img src={node.image.url} alt={node.title} />
              </StyledImageContainer>
              <StyledDescription>
                {node.description.description}
              </StyledDescription>
              {/* Display tags associated with each post */}
              <StyledTags>
                {node.tags.map((tag, index) => (
                  <StyledTag
                    key={index}
                    onClick={() => handleClickUpdateTag(tag)}
                    selected={selectedTags.includes(tag)}
                    inFilter={false}>
                    {tag}
                  </StyledTag>
                ))}
              </StyledTags>

              {/* Display a link to the full blog post */}
              <StyledLink>
                Link to post: <Link to={node.full_blog_post[0].id}>here</Link>
              </StyledLink>
            </StyledPostContainer>
          ))}
      </StyledContainer>
    </Layout>
  );
}

// GraphQL query to fetch data for the ProjectPage
export const pageQuery = graphql`
  query {
    allContentfulBlog {
      nodes {
        image {
          url
        }
        tags
        title
        description {
          description
        }
        date
        full_blog_post {
          id
        }
      }
    }
  }
`;

// Set the title of the page
export const Head = () => <title>Projects</title>;

// Styled components for styling the ProjectPage
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 10px;
`;

const StyledPostContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  background-color: white;
`;

const StyledTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif;
`;

const StyledImageContainer = styled.div`
  margin-bottom: 10px;

  img {
    width: 299px;
  }
`;

const StyledDescription = styled.p`
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
`;

const StyledTags = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

const StyledTag = styled.li`
  display: inline-block;
  margin-right: 8px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.selected ? (props.inFilter ? "green" : "#e0e0e0") : "inherit"};
  color: ${(props) => (props.selected ? "#fff" : "inherit")};
  padding: 5px;
  cursor: pointer;
`;

const StyledLink = styled.span`
  display: block;
  margin-top: 10px;
  font-family: "Roboto", sans-serif;

  a {
    font-family: "Roboto", sans-serif;
    color: #007acc;
    text-decoration: none;
    font-weight: bold;
  }
`;
