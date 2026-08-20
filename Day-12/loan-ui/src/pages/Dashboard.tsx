import { useState } from "react";

type Status =
  | "DOCUMENTS_PENDING"
  | "PD_PENDING"
  | "SCORE_READY";

function Dashboard() {
  const [status, setStatus] =
    useState<Status>("DOCUMENTS_PENDING");

  function moveToNextStatus() {
    if (status === "DOCUMENTS_PENDING") {
      setStatus("PD_PENDING");
    } else if (status === "PD_PENDING") {
      setStatus("SCORE_READY");
    }
  }

  return (
    <div className="card">
      <h1>Dashboard</h1>

      <p>Application Status</p>

      <div className="status">
        {status}
      </div>

      {status !== "SCORE_READY" && (
        <button onClick={moveToNextStatus}>
          Move to Next Status
        </button>
      )}

      {status === "SCORE_READY" && (
        <p className="success">
          Your application is score ready!
        </p>
      )}
    </div>
  );
}

export default Dashboard;