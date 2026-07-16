import React from "react";
import workshopImg from "../assets/Public/workshop.jpg";

function Workshop() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        <div className="col-lg-6">

          <h1 className="fw-bold mb-4">
            Workshops at Study Hub
          </h1>

          <p className="workshop-text">
            Study Hub workshops are specially designed for students and beginners
            who want to improve their practical skills in web development.
            Every workshop includes live coding sessions, real-world projects,
            and hands-on practice.
          </p>

          <p className="workshop-text">
            Learn React JS, JavaScript, Bootstrap, HTML and CSS from experienced
            mentors with practical assignments and live sessions.
          </p>

          <button className="btn btn-warning px-4">
            Join Workshop
          </button>

        </div>

        <div className="col-lg-6 text-center">

          <img
            src={workshopImg}
            className="workshop-img"
            alt="Workshop"
          />

        </div>

      </div>

    </div>
  );
}

export default Workshop;