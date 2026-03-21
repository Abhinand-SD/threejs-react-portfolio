import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer Intern</h4>
                <h5>Brototype</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built full-stack web applications using the MERN stack. Focused on problem-solving with Data Structures and Algorithms (DSA) and building responsive UIs using Tailwind CSS and TypeScript.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
             Worked independently to build and deploy modern web applications, managing code versioning and collaborative workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN & Python Full Stack Mentor</h4>
                <h5>Corpus Data Hub</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
             Mentoring aspiring developers and guiding them through full-stack web development concepts using the MERN stack and Python.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
