import * as React from "react";
import Layout from "../components/layout";
import BlogpostsList from "../components/lists-of-blogposts";

// markup
const IndexPage = ({location}) => {
  return (
    <Layout location={location}>
        <BlogpostsList/>
    </Layout>
    
  );
};

export default IndexPage;
