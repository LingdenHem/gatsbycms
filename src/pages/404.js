import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import styled from "styled-components";

// Define styled components
const Main = styled.main`
  /* Your styles for the main element */
`;

const Heading1 = styled.h1`
  /* Your styles for h1 element */
`;

const Paragraph = styled.p`
  /* Your styles for p element */
`;

const StyledLink = styled(Link)`
  /* Your styles for Link element */
`;

// Component
export default function NotFoundPage() {
  return (
    <Layout>
      <Main>
        <Heading1>404 - Page not found</Heading1>
        <Paragraph>
          <StyledLink to="/">Go back to the homepage</StyledLink>
        </Paragraph>
      </Main>
    </Layout>
  );
}

export const Head = () => <title>Not found</title>;
