import { useEffect, useState } from "react";
import { getAllGuests } from "./api/guests";

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
  <>
  <h1>Guests</h1>
  </>
);
}

export default App;