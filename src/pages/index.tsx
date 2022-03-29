import * as React from "react";
import Layout from "../components/layout";
import BlogpostsList from "../components/lists-of-blogposts";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className="initial-blog-post">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit officiis consequatur aut, pariatur fugit libero officia repellendus! Molestiae excepturi repudiandae laborum dicta iure maxime itaque amet, nobis aperiam vero dolorem iste dignissimos, non totam neque perspiciatis quisquam accusamus culpa corrupti praesentium reprehenderit corporis? Quod commodi, voluptatem praesentium ducimus hic ut!</p>
        <BlogpostsList/>
      </div>
    </Layout>
    
  );
};

export default IndexPage;
