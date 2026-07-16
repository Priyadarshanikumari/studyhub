import React from "react";
import { useNavigate } from "react-router-dom";

import bannerImg from "../assets/Public/banner.jpg";
import reactCourseImg from "../assets/Public/reactjscourse.jpg";
import javascriptCourseImg from "../assets/Public/javascriptcourse.jpg";
import bootstrapCourseImg from "../assets/Public/bootstrapcourse.jpg";
import htmlCssCourseImg from "../assets/Public/htmlcsscourse.jpg";

function Home() {
  const navigate = useNavigate();

  const courses = [
    {
      title: "React JS",
      image: reactCourseImg,
      desc: "Learn React JS with live projects.",
      btn: "btn-primary",
      path: "/react",
    },
    {
      title: "JavaScript",
      image: javascriptCourseImg,
      desc: "Master JavaScript from beginner to advanced.",
      btn: "btn-warning",
      path: "/javascript",
    },
    {
      title: "Bootstrap",
      image: bootstrapCourseImg,
      desc: "Build responsive websites using Bootstrap.",
      btn: "btn-success",
      path: "/bootstrap",
    },
    {
      title: "HTML & CSS",
      image: htmlCssCourseImg,
      desc: "Create beautiful responsive websites.",
      btn: "btn-danger",
      path: "/html-css",
    },
  ];

  return (
    <>
      {/* Banner */}
      <div className="banner">
        <img src={bannerImg} className="banner-img" alt="Study Hub" />

        <div className="banner-content">
          <h1>Welcome to Study Hub</h1>

          <p>
            Learn React JS, JavaScript, Bootstrap & HTML/CSS with Real Projects
          </p>

          <button className="btn btn-warning btn-lg">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Courses */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-2">
          Our Popular Courses
        </h2>

        <p className="text-center text-muted mb-5">
          Learn the latest technologies with practical examples.
        </p>

        <div className="row g-4">
          {courses.map((course, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="card shadow h-100">
                <img
                  src={course.image}
                  className="card-img-top"
                  alt={course.title}
                />

                <div className="card-body text-center">
                  <h4>{course.title}</h4>

                  <p>{course.desc}</p>

                  <button
                    className={`btn ${course.btn}`}
                    onClick={() => navigate(course.path)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;