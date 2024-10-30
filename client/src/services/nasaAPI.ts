export const searchNasaData = async (query: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NASA_SEARCH}?query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data from Django backend');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data from Django backend:', error);
    throw error;
  }
};
