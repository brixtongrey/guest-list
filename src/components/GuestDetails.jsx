function GuestDetails({ guest, onBack }) {
  return (
    <>
      <article className="card">
        <button className="btn" onClick={onBack}>
          Back
        </button>
        <h2>{guest?.name}</h2>
        <span>Email: {guest?.email}</span>
        <span>Phone: {guest?.phone}</span>
        <span>Bio: {guest?.bio}</span>
        <span>Job: {guest?.job}</span>
      </article>
    </>
  );
}

export default GuestDetails;
