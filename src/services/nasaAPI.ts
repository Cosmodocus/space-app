export const searchNasaData = async (query: string) => {
    try {
      const response = await fetch(`https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}`);

      if (!response.ok) {
        throw new Error('Failed to fetch data from NASA API');
      }

      const data = await response.json();
      return data.collection.items; // Return the items from the response
    } catch (error) {
      console.error('Error fetching NASA data:', error);
      throw error; // Rethrow the error for handling in the calling component
    }
  };
