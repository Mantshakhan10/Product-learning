function Documents() {
  return (
    <div className="card">
      <h1>Documents</h1>

      <p>
        Upload your required documents.
      </p>

      <label className="file-label">
        Select Document
      </label>

      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
      />

      <p className="note">
        File upload is UI only for this mock project.
      </p>
    </div>
  );
}

export default Documents;