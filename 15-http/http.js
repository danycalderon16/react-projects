const URL = "http://localhost:3000";

export async function fetchAvailablePlaces() {
  const response = await fetch(`${URL}/places`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fecth places");
  }

  return data.places;
}

export async function fetchUserPlaces() {
  const response = await fetch(`${URL}/user-places`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fecth user places");
  }

  return data.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch(`${URL}/user-places`, {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fecth places");
  }

  return data.message;
}
