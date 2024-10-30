'use client';

import { format, toZonedTime } from 'date-fns-tz';
import { useState } from 'react';

import NasaCard from '../../components/NasaCard';
import Modal from '../../components/NasaCardModal';
import NasaCardSkeleton from '../../components/NasaCardSkeleton';
import SearchBar from '../../components/SearchBar';
import SearchOptions from '../../components/SearchOptions';
import { searchOptions1 } from '../../constants/searchOptions';
import MainLayout from '../../layouts/MainLayout';
import { searchNasaData } from '../../services/nasaAPI';

interface NasaMedia {
  center: string;
  date: string;
  date_created: string;
  description: string;
  keywords: string[];
  media_type: string;
  mediaUrl: string;
  mediaAlt: string;
  nasa_id: string;
  title: string;
  tags: string[];
  badge: string;
}

interface NasaData {
  data: NasaMedia[];
  links: { href: string }[];
}

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<NasaData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<NasaMedia | null>(null);

  const handleSearch = async (query: string) => {
    setError(null);
    setSearchResults([]);
    setIsLoading(true);

    try {
      const results = await searchNasaData(query);
      setSearchResults(results);
      console.log(results);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReadMore = (cardData: NasaMedia) => {
    setSelectedCard(cardData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  const renderSearchBar = () => (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
      <SearchBar onSearch={handleSearch} />
    </div>
  );

  const renderSearchOptions = () => (
    <div className="mt-4 mx-4 md:mx-6 lg:mx-8">
      <SearchOptions items={searchOptions1} onSearch={handleSearch} />
    </div>
  );

  const renderErrorMessage = () =>
    error && <div className="text-red-600">{error}</div>;

  const renderLoadingSkeletons = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(6)].map((_, index) => (
        <NasaCardSkeleton key={index} />
      ))}
    </div>
  );

  const renderSearchResults = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {searchResults.map((item) => {
        const mediaItem = item.data[0] || {};
        const title = mediaItem.title || 'No title';
        const description = mediaItem.description || 'No description';
        const mediaUrl =
          Array.isArray(item.links) && item.links.length > 0
            ? item.links[0]?.href
            : '';
        const mediaAlt = title;
        const badge = mediaItem.media_type || 'Unknown Media Type';
        const date = mediaItem.date_created;

        const estDate = date
          ? format(
              toZonedTime(new Date(date), 'America/New_York'),
              'yyyy-MM-dd HH:mm zzz'
            )
          : '';

        const keywords = mediaItem.keywords || [];

        const nasaMediaData: NasaMedia = {
          center: mediaItem.center || 'Unknown Center',
          date: estDate,
          date_created: date || '',
          description,
          keywords,
          media_type: mediaItem.media_type || 'Unknown Media Type',
          mediaUrl,
          mediaAlt,
          nasa_id: mediaItem.nasa_id || '',
          title,
          tags: keywords,
          badge
        };

        return (
          <NasaCard
            key={mediaItem.nasa_id}
            title={title}
            description={description}
            mediaUrl={mediaUrl}
            mediaAlt={mediaAlt}
            badge={badge}
            date={estDate}
            tags={keywords}
            onReadMore={() => handleReadMore(nasaMediaData)}
          />
        );
      })}
    </div>
  );

  const renderNoResultsMessage = () => (
    <div className="text-gray-300 text-center">No results to display.</div>
  );

  const renderContent = () => {
    if (isLoading) {
      return renderLoadingSkeletons();
    }
    if (error) {
      return renderErrorMessage();
    }
    if (searchResults.length > 0) {
      return renderSearchResults();
    }
    return renderNoResultsMessage();
  };

  const renderModal = () => (
    <Modal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      title={selectedCard?.title as string}
      description={selectedCard?.description as string}
      mediaUrl={selectedCard?.mediaUrl as string}
      mediaAlt={selectedCard?.mediaAlt as string}
      date={selectedCard?.date_created}
      tags={selectedCard?.keywords}
      badge={selectedCard?.media_type}
    />
  );

  return (
    <MainLayout headerTitle="NASA Search">
      {renderSearchBar()}
      {renderSearchOptions()}
      <div className="mt-6">{renderContent()}</div>
      {renderModal()}
    </MainLayout>
  );
};

export default SearchPage;
