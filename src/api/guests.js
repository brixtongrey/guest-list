const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/";
const COHORT = "2506-ftb-ct-web-pt";
const API = BASE_URL + COHORT;

// Get all guests - function that returns a promose = async
export async function getAllGuests() {
    try {
        const response = await fetch(`${API}/guests`);
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Error fetching guests", error);
        throw error;
    }
}

// Get a single guest

export async function getGuestById(id) {
    try {
        const response = await fetch(`${API}/guests/${id}`)
        const result = await response.json();
        return result.data
    } catch (error) {
        console.error("Error fetching single guest", error);
        throw error;
    }
}