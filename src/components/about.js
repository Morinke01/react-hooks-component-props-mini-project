import React from "react";
import blogData from "../data/blog";

function About(props) {
    <img src="https://via.placeholder.com/215" alt="" />
    return (
      <div>
        <aside>
          <img src={blogData.image} alt="blog logo" />
          <p>{blogData.about}</p>
        </aside>
      </div>
    )
  
  }
export default About  