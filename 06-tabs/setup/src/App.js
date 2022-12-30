import React, { useState, useEffect } from "react";
import JobInfo from "./components/JobInfo";
import Loading from "./components/Loading";
import ApiConnector from "./network/api-connector";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const connector = new ApiConnector();
      const newJobs = await connector.fetchJobs();
      setJobs(newJobs);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return <Loading />;
  }

  const buttonsList = jobs.map((item, index) => (
    <button
      key={item.id}
      onClick={() => setValue(index)}
      className={`job-btn ${index === value && "active-btn"}`}
    >
      {item.company}
    </button>
  ));

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">{buttonsList}</div>
        <JobInfo job={jobs[value]} />
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
