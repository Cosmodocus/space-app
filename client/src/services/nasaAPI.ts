export const searchNasaData = async (query: string) => {
    try {
      const response = await fetch(`https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}`);

      if (!response.ok) {
        throw new Error('Failed to fetch data from NASA API');
      }

      const data = await response.json();
      return data.collection.items;
    } catch (error) {
      console.error('Error fetching NASA data:', error);
      throw error;
    }
  };
