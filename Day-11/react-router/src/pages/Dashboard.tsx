import { useState } from "react";

type Status =
  | "DOCUMENTS_PENDING"
  | "PD_PENDING"
  | "SCORE_READY";

function Dashboard() {
  const [status, setStatus] =
    useState<Status>("DOCUMENTS_PENDING");

  const moveToNextStatus = () => {
    if (status === "DOCUMENTS_PENDING") {
      setStatus("PD_PENDING");
    } else if (status === "PD_PENDING") {
      setStatus("SCORE_READY");
    }
  };

  return (
    <div className="page">
      <h1>Dashboard</h1>

      <h2>Status</h2>

      <div className="status">
        {status}
      </div>

      {status !== "SCORE_READY" && (
        <button onClick={moveToNextStatus}>
          Move to Next Status
        </button>
      )}

      {status === "SCORE_READY" && (
        <p>Application is score ready! 🎉</p>
      )}
    </div>
  );
}

export default Dashboard;