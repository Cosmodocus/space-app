import { Skeleton } from "./ui/skeleton";

const NasaCardSkeleton = () => {
  const renderImageSkeleton = () => (
    <Skeleton className="h-48 w-full" />
  );

  const renderTitleSkeleton = () => (
    <Skeleton className="h-6 w-1/4 mb-2" />
  );

  const renderDateSkeleton = () => (
    <Skeleton className="h-4 w-3/4 mb-3" />
  );

  const renderBadgeSkeleton = () => (
    <Skeleton className="h-4 w-1/4 mb-2" />
  );

  const renderTagsSkeleton = () => (
    <div className="flex flex-wrap gap-2 mb-3">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-4 w-20" />
    </div>
  );

  const renderDescriptionSkeleton = () => (
    <div className="flex flex-col mb-3">
      <Skeleton className="h-4 w-full mb-1" />
      <Skeleton className="h-4 w-full mb-1" />
      <Skeleton className="h-4 w-full" />
    </div>
  );

  const renderReadMoreButtonSkeleton = () => (
    <div className="flex justify-start items-center">
      <Skeleton className="h-8 w-1/3" />
    </div>
  );

  return (
    <div className="relative shadow-lg transition-transform transform rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
      {renderImageSkeleton()}
      <div className="p-4 flex flex-col border-t-2 border-gray-600">
        {renderTitleSkeleton()}
        {renderDateSkeleton()}
        {renderBadgeSkeleton()}
        {renderTagsSkeleton()}
        {renderDescriptionSkeleton()}
        {renderReadMoreButtonSkeleton()}
      </div>
    </div>
  );
};

export default NasaCardSkeleton;
