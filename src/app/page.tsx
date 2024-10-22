"use client";

import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import SearchBar from "@/components/SearchBar";
import { searchNasaData } from "@/services/nasaAPI";
import NasaCard from "@/components/NasaCard";
import { universalItems } from "@/constants/universalItems";
import SearchOptions from "@/components/SearchOptions";
import { format, toZonedTime } from 'date-fns-tz';
import Modal from "@/components/Modal";

interface NasaData {
  data: {
    center: string;
    date_created: string;
    description: string;
    keywords: string[];
    media_type: string;
    nasa_id: string;
    title: string;
  }[];
  links: { href: string }[];
}

const HomePage = () => {
  const [searchResults, setSearchResults] = useState<NasaData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const handleSearch = async (query: string) => {
    setError(null);
    setSearchResults([]);

    try {
      const results = await searchNasaData(query);
      setSearchResults(results);
      console.log(results);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    }
  };

  const handleReadMore = (cardData: any) => {
    setSelectedCard(cardData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <MainLayout>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-4">
        <SearchOptions items={universalItems} onSearch={handleSearch} />
      </div>
      <div className="mt-6">
        {error && <p className="text-red-600">{error}</p>}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {searchResults.map((item, index) => {
              const mediaItem = item.data[0] || {};
              const title = mediaItem.title || 'No title';
              const description = mediaItem.description || 'No description';
              const mediaUrl = item.links && item.links.length > 0 ? item.links[0]?.href : null;
              const mediaAlt = title;
              const badge = mediaItem.media_type || "Unknown Media Type";
              const date = mediaItem.date_created;
              const estDate = date ? format(toZonedTime(new Date(date), 'America/New_York'), 'yyyy-MM-dd HH:mm zzz') : '';
              const keywords = mediaItem.keywords || [];

              return (
                <NasaCard
                  key={index}
                  title={title}
                  description={description}
                  mediaUrl={mediaUrl}
                  mediaAlt={mediaAlt}
                  badge={badge}
                  date={estDate}
                  tags={keywords}
                  onReadMore={() => handleReadMore({ title, description, mediaUrl, mediaAlt, date: estDate, tags: keywords, badge })}
                />
              );
            })}
          </div>
        ) : (
          <p className="text-gray-600 text-center">No results to display.</p>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedCard?.title}
        description={selectedCard?.description}
        mediaUrl={selectedCard?.mediaUrl}
        mediaAlt={selectedCard?.mediaAlt}
        date={selectedCard?.date}
        tags={selectedCard?.tags}
        badge={selectedCard?.badge}
      />
    </MainLayout>
  );
};

export default HomePage;
