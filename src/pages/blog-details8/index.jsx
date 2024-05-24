import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";
import PostDetails1 from "../../components/Post-details1";
import PostDetails8 from "../../components/Post-details8";
import PageHeader8 from "../../components/Page-header8";

const BlogDetails = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainLayout>
      <PageHeader8
        title="Kerala Sheni Farmhouse"
        fullPath={[
          // { id: 1, name: "home", url: "/" },
          // { id: 2, name: "blogs", url: "/blogs" },
          // { id: 3, name: "post details", url: "/blog-details" },
        ]}
      />
      <PostDetails8 />
    </MainLayout>
  );
};

export default BlogDetails;
