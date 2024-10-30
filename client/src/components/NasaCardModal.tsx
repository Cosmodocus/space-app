'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import { Badge } from './ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  mediaUrl: string;
  mediaAlt: string;
  date?: string;
  tags?: string[];
  badge?: string;
  mediaWidth?: number;
  mediaHeight?: number;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  mediaUrl,
  mediaAlt,
  date,
  tags,
  badge,
  mediaWidth = 400,
  mediaHeight = 300
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
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

  const renderHeader = () => {
    return (
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
        {date && <span className="text-sm text-gray-400">{date}</span>}
      </CardHeader>
    );
  };

  const renderTags = () => {
    return (
      tags &&
      tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              className="text-xs bg-gray-700 border border-gray-600"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )
    );
  };

  const renderImage = () => (
    <Image
      src={mediaUrl}
      alt={mediaAlt}
      width={mediaWidth}
      height={mediaHeight}
      className="w-full h-48 object-cover rounded-t-3xl"
    />
  );

  const renderCardContent = () => (
    <CardContent className="p-4">
      {renderBadge()}
      {renderHeader()}
      <CardDescription className="text-gray-300">{description}</CardDescription>
      {renderTags()}
    </CardContent>
  );

  const renderCard = () => (
    <Card
      ref={modalRef}
      className="bg-gray-800 max-h-[80vh] overflow-y-auto w-11/12 md:w-3/4 lg:w-1/2"
    >
      {renderImage()}
      {renderCardContent()}
    </Card>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={handleOverlayClick}
    >
      {renderCard()}
    </div>
  );
};

export default Modal;
