import { Card } from '@/components/ui/card';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
              <div>
                <div className="h-6 w-48 mb-1 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>  
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <div className="h-10 w-64 mx-auto bg-gray-200 rounded animate-pulse" />
            <div className="h-6 w-96 mx-auto bg-gray-200 rounded animate-pulse" />
            <div className="flex justify-center space-x-2">
              <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          {/* Access Status */}
          <div className="max-w-2xl mx-auto">
            <div className="h-32 w-full bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto">
            <div className="h-64 w-full bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </main>
    </div>
  );
}
