import * as React from "react";
import Layout from "../components/layout";
import BlogpostsList from "../components/lists-of-blogposts";

// markup
const IndexPage = () => {
  return (
    <Layout>
        <BlogpostsList/>
    </Layout>
    
  );
};

export default IndexPage;
