function BootstrapCourse() {
  return (
    <div className="container py-5">

      <h1 className="text-center mb-4">
        Bootstrap Course
      </h1>

      <p className="lead text-center mb-5">
        Learn Bootstrap to create responsive and attractive websites quickly.
      </p>

      <div className="card shadow p-4">

        <h3>What You Will Learn</h3>

        <ul>
          <li>Bootstrap Grid System</li>
          <li>Navbar</li>
          <li>Cards</li>
          <li>Buttons</li>
          <li>Forms</li>
          <li>Tables</li>
          <li>Responsive Layout</li>
          <li>Utilities</li>
        </ul>

        <hr />

        <p><strong>Duration:</strong> 4 Weeks</p>

        <p><strong>Level:</strong> Beginner</p>

        <button className="btn btn-success">
          Join Bootstrap Course
        </button>

      </div>

    </div>
  );
}

export default BootstrapCourse;