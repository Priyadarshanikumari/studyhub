function JavaScriptCourse() {
  return (
    <div className="container py-5">

      <h1 className="text-center mb-4">
        JavaScript Course
      </h1>

      <p className="lead text-center mb-5">
        Master JavaScript with practical examples and become confident in web development.
      </p>

      <div className="card shadow p-4">

        <h3>What You Will Learn</h3>

        <ul>
          <li>Variables</li>
          <li>Data Types</li>
          <li>Functions</li>
          <li>Arrays & Objects</li>
          <li>Loops</li>
          <li>DOM Manipulation</li>
          <li>Events</li>
          <li>ES6 Features</li>
        </ul>

        <hr />

        <p><strong>Duration:</strong> 6 Weeks</p>

        <p><strong>Level:</strong> Beginner</p>

        <button className="btn btn-warning">
          Join JavaScript Course
        </button>

      </div>

    </div>
  );
}

export default JavaScriptCourse;