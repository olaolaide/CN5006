import { useState, useEffect } from "react";

function CountEmp() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://cautious-meme-5g4gwvgw54pw24vwv-5000.app.github.dev/api/persons/count",
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch employee count");
        }
        return response.json();
      })
      .then((data) => {
        setCount(data.totalDocuments ?? 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load count");
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <div className="stat-card">
        <div className="stat-header">
          <span className="stat-title">Total Employees</span>
          <span className="status-badge">Live</span>
        </div>

        <div className="stat-body">
          {loading ? (
            <div className="skeleton-loader"></div>
          ) : error ? (
            <p className="error-text">{error}</p>
          ) : (
            <h1 className="stat-number">{count.toLocaleString()}</h1>
          )}
        </div>

        <p className="stat-footer">Active records in database</p>
      </div>
    </div>
  );
}

export default CountEmp;
