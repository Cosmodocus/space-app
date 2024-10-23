"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"; // Import Shadcn Card components

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
  mediaWidth?: number; // Optional width for media
  mediaHeight?: number; // Optional height for media
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
  mediaWidth = 400, // Default width if not provided
  mediaHeight = 300, // Default height if not provided
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Check if the click is outside the modal content
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={handleOverlayClick}
    >
      <Card
        ref={modalRef}
        className="bg-gray-800 max-h-[80vh] overflow-y-auto w-11/12 md:w-3/4 lg:w-1/2"
      >
        <Image
          src={mediaUrl}
          alt={mediaAlt}
          width={mediaWidth}  // Use mediaWidth here
          height={mediaHeight} // Use mediaHeight here
          className="w-full h-48 object-cover rounded-t-3xl"
        />
        <CardContent className="p-4">
          {badge && (
            <Badge className="text-xs mb-2 px-2 rounded-full bg-white text-black shadow-md w-max">
              {badge}
            </Badge>
          )}
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
            {date && <span className="text-sm text-gray-400">{date}</span>}
          </CardHeader>
          <CardDescription className="text-gray-300">{description}</CardDescription>
          {tags && tags.length > 0 && (
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
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Modal;
