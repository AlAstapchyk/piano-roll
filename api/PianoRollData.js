export const loadPianoRollData = async () => {
  try {
    const response = await fetch("https://pianoroll.ai/random_notes");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
  } catch (error) {
    console.error("Error loading data:", error);
  }
};
