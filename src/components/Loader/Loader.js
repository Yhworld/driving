import React from 'react';

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex space-x-2">
        {/* Dot 1 */}
        <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce"></div>
        {/* Dot 2 */}
        <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce delay-150"></div>
        {/* Dot 3 */}
        <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
}

export default Loader;
