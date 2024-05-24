import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";
import PostDetails1 from "../../components/Post-details1";
import PostDetails4 from "../../components/Post-details4";
import PageHeader4 from "../../components/Page-header4/indexx";

const BlogDetails = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainLayout>
      <PageHeader4
        title="Vermont
        Valley"
        fullPath={[
          // { id: 1, name: "home", url: "/" },
          // { id: 2, name: "blogs", url: "/blogs" },
          // { id: 3, name: "post details", url: "/blog-details" },
        ]}
      />
      <PostDetails4/>
    </MainLayout>
  );
};

export default BlogDetails;
