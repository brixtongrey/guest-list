function GuestDetails({ guest, onBack }) {
    return (
        <>
        <article className="card">
            <button className="btn"
            onClick={onBack}>Back</button>
            <h2>{guest.name}</h2>
            <span>{guest.email}</span>
            <span>{guest.phone}</span>
            <span>{guest.bio}</span>
            <span>{guest.job}</span>
        </article>
        </>
    );
}

export default GuestDetails;