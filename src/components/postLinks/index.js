import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => (
  <div className="">
    <div className="">
      <div className="">
        <h2 className="">
          {" "}
          {post.frontmatter.title}
        </h2>
        <small>{post.frontmatter.date}</small>
        <p className="">{post.frontmatter.desc}</p>
        <Link className="" to={post.frontmatter.slug}>
         More ...
        </Link>
      </div>
      <img
        className=""
        src={post.frontmatter.img}
        alt="imagen"
      />
    </div>
  </div>
);
export default PostLink;