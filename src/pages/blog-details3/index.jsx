import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";
import PostDetails1 from "../../components/Post-details1";
import PostDetails3 from "../../components/Post-details3";
import PageHeader3 from "../../components/Page-header3";

const BlogDetails = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainLayout>
      <PageHeader3
        title="Rohan Hills"
        fullPath={[
          // { id: 1, name: "home", url: "/" },
          // { id: 2, name: "blogs", url: "/blogs" },
          // { id: 3, name: "post details", url: "/blog-details" },
        ]}
      />
      <PostDetails3 />
    </MainLayout>
  );
};

export default BlogDetails;
