'use client';

import Image from 'next/image';
import { useRef } from 'react';

import { Badge } from './ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

type NasaCardProps = {
  title: string;
  description: string;
  mediaUrl: string;
  mediaAlt: string;
  date?: string;
  copyright?: string;
  explanation?: string;
  tags?: string[];
  relatedLink?: string;
  viewCount?: number;
  location?: string;
  badge?: string;
  onReadMore: () => void;
};

const NasaCard = ({
  title,
  description,
  mediaUrl,
  mediaAlt,
  date,
  copyright,
  explanation,
  tags = [],
  relatedLink,
  viewCount,
  location,
  badge,
  onReadMore
}: NasaCardProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const shouldShowReadMore = description.length > 100;
  const isVideo =
    typeof mediaUrl === 'string' &&
    (mediaUrl.endsWith('.mp4') || mediaUrl.endsWith('.mov'));

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const renderMedia = () => {
    return mediaUrl ? (
      isVideo ? (
        <video
          ref={videoRef}
          src={mediaUrl}
          className="object-cover h-48 w-full rounded-t-lg"
          onClick={handleVideoClick}
          controls
          title={mediaAlt}
        />
      ) : (
        <Image
          src={mediaUrl}
          alt={mediaAlt}
          width={400}
          height={300}
          className="object-cover h-48 w-full rounded-t-lg"
        />
      )
    ) : null;
  };

  const renderBadge = () => {
    return (
      badge && (
        <Badge className="text-xs mb-2 px-2 rounded-full bg-white text-black shadow-md w-max">
          {badge}
        </Badge>
      )
    );
  };

  const renderMetaData = () => (
    <div className="flex flex-col">
      <CardTitle className="text-lg font-bold text-white">{title}</CardTitle>
      {date && <span className="text-xs text-gray-400 mb-1">{date}</span>}
      {copyright && (
        <span className="text-xs text-gray-400 mb-1">{copyright}</span>
      )}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              className="mr-1 text-xs bg-gray-700 border border-gray-600"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );

  const renderRelatedLink = () => {
    return (
      relatedLink && (
        <a
          href={relatedLink}
          className="text-blue-400 text-sm mb-1 hover:underline"
        >
          Learn more
        </a>
      )
    );
  };

  const renderAdditionalInfo = () => (
    <div className="flex justify-between text-xs text-gray-400 mb-1">
      {viewCount && <span>Views: {viewCount}</span>}
      {location && <span>Location: {location}</span>}
    </div>
  );

  const renderHeader = () => {
    return (
      <CardHeader className="p-4 flex flex-col border-t-2 border-gray-600">
        {renderBadge()}
        {renderMetaData()}
        {renderRelatedLink()}
        {renderAdditionalInfo()}
      </CardHeader>
    );
  };

  const renderDescription = () => {
    return (
      <CardDescription className="text-sm p-4 text-gray-200 rounded-b-lg">
        <div
          className={`line-clamp-3 ${
            shouldShowReadMore ? 'overflow-hidden' : ''
          }`}
        >
          {description || 'No description'}
        </div>
        {shouldShowReadMore && (
          <div className="flex justify-between items-center mt-2">
            <button
              className="text-blue-400 text-sm hover:underline"
              onClick={onReadMore}
            >
              Read More
            </button>
          </div>
        )}
        {explanation && <div className="text-gray-300 mt-2">{explanation}</div>}
      </CardDescription>
    );
  };

  return (
    <Card className="relative shadow-lg transition-transform transform rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
      {renderMedia()}
      {renderHeader()}
      {renderDescription()}
    </Card>
  );
};

export default NasaCard;
