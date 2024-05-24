import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";
import PostDetails1 from "../../components/Post-details1";
import PostDetails5 from "../../components/Post-details5";
import PageHeader5 from "../../components/Page-header5";

const BlogDetails = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainLayout>
      <PageHeader5
        title="Father Muller’s Administration "
        fullPath={[
          // { id: 1, name: "home", url: "/" },
          // { id: 2, name: "blogs", url: "/blogs" },
          // { id: 3, name: "post details", url: "/blog-details" },
        ]}
      />
      <PostDetails5 />
    </MainLayout>
  );
};

export default BlogDetails;
