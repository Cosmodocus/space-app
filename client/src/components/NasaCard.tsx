"use client";

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { useState, useRef } from "react";

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
    onReadMore,
}: NasaCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);



    const shouldShowReadMore = description.length > 100;
    const isVideo = typeof mediaUrl === 'string' && (mediaUrl.endsWith('.mp4') || mediaUrl.endsWith('.mov'));

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <Card className="relative shadow-lg transition-transform transform rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
            {mediaUrl && (
                isVideo ? (
                    <video
                        ref={videoRef}
                        src={mediaUrl}
                        alt={mediaAlt}
                        className="object-cover h-48 w-full rounded-t-lg"
                        onClick={handleVideoClick}
                        controls
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
            )}
            <CardHeader className="p-4 flex flex-col border-t-2 border-gray-600">
                {badge && (
                    <Badge className="text-xs mb-2 px-2 rounded-full bg-white text-black shadow-md w-max">{badge}</Badge>
                )}
                <CardTitle className="text-lg font-bold text-white">{title}</CardTitle>
                {date && <span className="text-xs text-gray-400 mb-1">{date}</span>}
                {copyright && <span className="text-xs text-gray-400 mb-1">{copyright}</span>}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                        {tags.map((tag) => (
                            <Badge key={tag} className="mr-1 text-xs bg-gray-700 border border-gray-600">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
                {relatedLink && (
                    <a href={relatedLink} className="text-blue-400 text-sm mb-1 hover:underline">
                        Learn more
                    </a>
                )}
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                    {viewCount && <span>Views: {viewCount}</span>}
                    {location && <span>Location: {location}</span>}
                </div>
            </CardHeader>
            <CardDescription className="text-sm p-4 text-gray-200 rounded-b-lg">
                <span
                    className={`block ${isExpanded ? "max-h-full" : "max-h-20 overflow-hidden"} transition-all duration-300`}
                    style={{ WebkitLineClamp: isExpanded ? 'unset' : 3, display: '-webkit-box', WebkitBoxOrient: 'vertical' }}
                >
                    {description || 'No description'}
                </span>
                {shouldShowReadMore && (
                    <div className="flex justify-between items-center mt-2">
                        <button className="text-blue-400 text-sm hover:underline" onClick={onReadMore}>
                            Read More
                        </button>
                    </div>
                )}
                {explanation && <div className="text-gray-300 mt-2">{explanation}</div>}
            </CardDescription>
        </Card>
    );
};

export default NasaCard;
