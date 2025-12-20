const PageLoadingSkeletons = () => {
  return (
    <div className="min-h-screen bg-primary text-white animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Title skeleton */}
            <div className="h-12 bg-neutral-800 rounded-lg w-3/4 mx-auto"></div>
            {/* Subtitle skeleton */}
            <div className="h-8 bg-neutral-800 rounded-lg w-1/2 mx-auto"></div>
            {/* Description skeleton */}
            <div className="h-6 bg-neutral-800 rounded-lg w-2/3 mx-auto mt-8"></div>
            {/* Buttons skeleton */}
            <div className="flex gap-4 justify-center mt-12">
              <div className="h-12 bg-secondary rounded-full w-32"></div>
              <div className="h-12 bg-neutral-800 rounded-full w-32"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left column */}
            <div className="space-y-4">
              <div className="h-8 bg-neutral-800 rounded w-3/4"></div>
              <div className="h-6 bg-neutral-800 rounded"></div>
              <div className="h-6 bg-neutral-800 rounded"></div>
              <div className="h-6 bg-neutral-800 rounded w-5/6"></div>
            </div>
            {/* Right column - Image skeleton */}
            <div className="bg-neutral-800 rounded-xl h-80"></div>
          </div>
        </div>
      </section>

      {/* Features Grid Skeleton */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="space-y-4">
                <div className="h-16 bg-neutral-800 rounded-lg"></div>
                <div className="h-4 bg-neutral-800 rounded"></div>
                <div className="h-4 bg-neutral-800 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageLoadingSkeletons;
