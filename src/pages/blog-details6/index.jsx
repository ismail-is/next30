import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";
import PostDetails1 from "../../components/Post-details1";
import PostDetails6 from "../../components/Post-details6";
import PageHeader6 from "../../components/Page-header6";

const BlogDetails = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainLayout>
      <PageHeader6
        title="Phasal
        Development"
        fullPath={[
          // { id: 1, name: "home", url: "/" },
          // { id: 2, name: "blogs", url: "/blogs" },
          // { id: 3, name: "post details", url: "/blog-details" },
        ]}
      />
      <PostDetails6 />
    </MainLayout>
  );
};

export default BlogDetails;
