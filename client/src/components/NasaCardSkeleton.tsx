import { Skeleton } from "./ui/skeleton";

const NasaCardSkeleton = () => {
  return (
    <div className="relative shadow-lg transition-transform transform rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
      {/* Skeleton for image with proper aspect ratio */}
      <Skeleton className="h-48 w-full" />
      <div className="p-4 flex flex-col border-t-2 border-gray-600">
        {/* Skeleton for title */}
        <Skeleton className="h-6 w-1/4 mb-2" />
        {/* Skeleton for date */}
        <Skeleton className="h-4 w-3/4 mb-3" />
        {/* Skeleton for badge */}
        <Skeleton className="h-4 w-1/4 mb-2" />

        {/* Skeleton for tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
        </div>

        {/* Skeleton for description */}
        <Skeleton className="h-12 w-full mb-3" />

        {/* Skeleton for read more button */}
        <div className="flex justify-start items-center">
          <Skeleton className="h-8 w-1/3" />
        </div>
      </div>
    </div>
  );
};

export default NasaCardSkeleton;
