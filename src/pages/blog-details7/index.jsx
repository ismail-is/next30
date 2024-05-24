import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";
import PostDetails1 from "../../components/Post-details1";
import PostDetails7 from "../../components/Post-details7";
import PageHeader7 from "../../components/Page-header7";

const BlogDetails = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainLayout>
      <PageHeader7
        title="Shakthi Residential School"
        fullPath={[
        //   { id: 1, name: "home", url: "/" },
        //   { id: 2, name: "blogs", url: "/blogs" },
        //   { id: 3, name: "post details", url: "/blog-details" },
        ]}
      />
      <PostDetails7 />
    </MainLayout>
  );
};

export default BlogDetails;
