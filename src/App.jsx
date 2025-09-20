import { useEffect, useState } from "react";
import { getAllGuests } from "./api/guests";
import GuestList from "./components/GuestList";

function App() {

  const [guests, setGuests] = useState([]);


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


  return (
  <main className="container">
  <h1>Guests</h1>
  <GuestList guests={guests}/>
  </main>
);
}

export default App;