// Import necessary dependencies
import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";

// Functional component for the Header
export default function Header() {
  // Fetch navigation links data using GraphQL static query
  const queryData = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          navLinks {
            link
            name
          }
        }
      }
    }
  `);

  // Extract navigation links from the query result
  const { navLinks } = queryData.site.siteMetadata;

  // Return JSX for the Header
  return (
    <Navbar>
      <div className="nav-links-container">
        <ul>
          {/* Map through navigation links and create Link components */}
          {navLinks.map((link) => {
            return (
              <Link to={link.link} key={link.name}>
                <li>{link.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </Navbar>
  );
}

// Styled component for styling the Navbar
const Navbar = styled.div`
  background-color: darkgray;
  padding: 4px;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: "Roboto", sans-serif;

  ul {
    display: flex;
    list-style: none;

    li {
      padding: 0 8px;
      color: white;
    }
  }

  a {
    text-decoration: none;
  }
`;
