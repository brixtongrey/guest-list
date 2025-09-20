import { use, useEffect, useState } from "react";
import { getAllGuests, getGuestById } from "./api/guests";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";

function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  // console.log("selectedId", selectedId);
  // console.log("selectedGuest", selectedGuest);

  //fetch all Guests on mount
  useEffect(() => {
    async function loadGuests() {
      try {
        const data = await getAllGuests();
        console.log("data in guests", data);
        setGuests(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadGuests();
  }, []);

  // fetch single guest
  useEffect(() => {

    if (!selectedId) return;

    async function loadSingleGuest() {
      try {
        const data = await getGuestById(selectedId);
        setSelectedGuest(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadSingleGuest();
  }, [selectedId]);

  return (
    <main className="container">
      {selectedId ? (
        <GuestDetails
        guest={selectedGuest}
        onBack={() => {
          setSelectedId(null)
          setSelectedGuest(null)
        }}
        />
      ) : (
        <GuestList guests={guests} 
      setSelectedId={setSelectedId}/>
      )}
    </main>
  );
}

export default App;
