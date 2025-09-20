function GuestList({ guests, setSelectedId }) {
  return (
    <>
      <h1 className="title">Guest List</h1>
      {guests.length === 0 ? (
        <p>No Guests yet...</p>
      ) : (
        <>
          <div className="list-header">
            <span>Name</span>
            <span>Email</span>
            <span>Phone</span>
          </div>
          <ul className="list">
            {guests.map((guest) => {
              return (
                <li
                  onClick={() => setSelectedId(guest.id)}
                  className="list-item"
                  key={guest.id}
                >
                  <span>{guest.name}</span>
                  <span>{guest.email}</span>
                  <span>{guest.phone}</span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}

export default GuestList;
