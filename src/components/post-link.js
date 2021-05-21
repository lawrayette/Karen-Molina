import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => (
  <div className="w-3/5 flex-grow mx-auto flex flex-col m-8">
    <div className="sm:flex sm:items-center">
      <div className="sm:px-2 mx-auto text-center md:w-3/5 lg:w-1/2">
        <h2 className="px-4 mt-8 text-lg text-center text-teal-700 sm:mt-8 text-2xl ">
          {" "}
          {post.frontmatter.title}
        </h2>
        <small>{post.frontmatter.date}</small>
        <p className="text-center text-gray-800 my-4">{post.frontmatter.desc}</p>
        <Link className="hover:text-teal-800 bg-teal-500 p-2 my-4 rounded-md" to={post.frontmatter.slug}>
         More ...
        </Link>
      </div>
      <img
        className="mb-16 mt-4 mx-auto p-4 sm:w-full sm:mt-10 md:w-3/5 lg:w-1/2"
        src={post.frontmatter.img}
        alt="imagen"
      />
    </div>
  </div>
);
export default PostLink;
