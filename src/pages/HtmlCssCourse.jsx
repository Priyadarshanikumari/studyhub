function HtmlCssCourse() {
  return (
    <div className="container py-5">

      <h1 className="text-center mb-4">
        HTML & CSS Course
      </h1>

      <p className="lead text-center mb-5">
        Build beautiful, responsive and modern websites using HTML5 and CSS3.
      </p>

      <div className="card shadow p-4">

        <h3>What You Will Learn</h3>

        <ul>
          <li>HTML Structure</li>
          <li>Forms</li>
          <li>Tables</li>
          <li>CSS Selectors</li>
          <li>Flexbox</li>
          <li>Grid</li>
          <li>Responsive Design</li>
          <li>Animations</li>
        </ul>

        <hr />

        <p><strong>Duration:</strong> 5 Weeks</p>

        <p><strong>Level:</strong> Beginner</p>

        <button className="btn btn-danger">
          Join HTML & CSS Course
        </button>

      </div>

    </div>
  );
}

export default HtmlCssCourse;