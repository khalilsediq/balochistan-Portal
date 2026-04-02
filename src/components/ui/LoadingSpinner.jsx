import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-20 min-h-[400px]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gov-gold/20 border-solid rounded-full"></div>
        <div className="w-16 h-16 border-4 border-gov-gold border-t-transparent border-solid rounded-full animate-spin absolute top-0 left-0"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 flex justify-center items-center">
           <div className="w-2 h-2 bg-gov-green rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
