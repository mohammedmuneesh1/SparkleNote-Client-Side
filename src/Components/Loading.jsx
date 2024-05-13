
import React from "react";

export default function Loading() {

  return (
    <div className="max-w-screen min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-base font-semibold mb-4 text-center">It will take 30-50 second to process. Please Hold On.</h1>
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  );
}

