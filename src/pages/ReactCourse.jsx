function ReactCourse() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">React JS Course</h1>

      <p className="lead text-center mb-5">
        Learn React JS from scratch and build modern, fast and interactive web
        applications with real-world projects.
      </p>

      <div className="card shadow p-4">
        <h3>What You Will Learn</h3>

        <ul>
          <li>Introduction to React JS</li>
          <li>JSX</li>
          <li>Components</li>
          <li>Props & State</li>
          <li>React Hooks</li>
          <li>React Router</li>
          <li>API Integration</li>
          <li>Project Development</li>
        </ul>

        <hr />

        <p><strong>Duration:</strong> 8 Weeks</p>
        <p><strong>Level:</strong> Beginner to Intermediate</p>

        <button className="btn btn-primary">
          Join React Course
        </button>
      </div>
    </div>
  );
}

export default ReactCourse;