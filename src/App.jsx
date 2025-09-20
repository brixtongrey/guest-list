import { use, useEffect, useState } from "react";
import { getAllGuests, getGuestById } from "./api/guests";
import GuestList from "./components/GuestList";

function App() {

  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);



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
useEffect (() => {
  async function loadSingleGuest() {
    try {
      const data = await getGuestById(1365);
      setSelectedGuest(data)
    } catch (error) {
      console.error(error);
    }
  }
  loadSingleGuest();
}, [1365])


  return (
  <main className="container">
  <h1>Guests</h1>
  <GuestList guests={guests}/>
  </main>
);
}

export default App;