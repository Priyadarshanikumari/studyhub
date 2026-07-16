import { useState } from "react";
import reactImg from "../assets/Public/react.jpg";
import javascriptImg from "../assets/Public/javascript.jpg";
import bootstrapImg from "../assets/Public/bootstrap.jpg";

function Blog() {

  const [blogs] = useState([
    {
      id: 1,
      title: "Why Learn React JS?",
      image: reactImg,
      desc: "React JS is one of the most popular JavaScript libraries. It helps developers build fast, interactive and reusable user interfaces."
    },
    {
      id: 2,
      title: "JavaScript Basics",
      image: javascriptImg,
      desc: "JavaScript is the most popular programming language for web development. Learn variables, functions, loops and DOM with simple examples."
    },
    {
      id: 3,
      title: "Bootstrap for Beginners",
      image: bootstrapImg,
      desc: "Bootstrap is a CSS framework that helps you build responsive and attractive websites quickly using ready-made components."
    }
  ]);

  return (
    <div className="container my-5">

      <h2 className="blog-title">Latest Blogs</h2>

      <div className="row">

        {blogs.map((blog) => (

          <div className="col-md-4 mb-4" key={blog.id}>

            <div className="blog-card">

              <img
                src={blog.image}
                alt={blog.title}
                className="blog-img"
              />

              <div className="blog-body">

                <h4>{blog.title}</h4>

                <p>{blog.desc}</p>

                <button className="btn btn-primary blog-btn">
                  Read More
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Blog;