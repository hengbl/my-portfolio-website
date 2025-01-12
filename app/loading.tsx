export default function Loading() {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
        <div className="relative flex flex-col items-center">
          <div className="absolute h-32 w-32 rounded-full border-t-4 border-b-4 border-gray-900 dark:border-gray-100 animate-spin" />
          <div className="mt-40 text-center">
            <span className="text-lg font-medium text-gray-900 dark:text-gray-100 animate-pulse">
              Loading
              {/* three bouncing dots next to loading */}
              <span className="inline-block animate-bounce">.</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
            </span>
          </div>
        </div>
      </div>
    );
}