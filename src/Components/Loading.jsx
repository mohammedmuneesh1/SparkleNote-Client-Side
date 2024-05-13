
import React from "react";

export default function Loading() {

  return (
    <div className="max-w-screen min-h-screen flex flex-col items-center justify-center">
      <h1 className="max-w-xl text-center">Hosted In Render Hosting Platform. It may take 30-50 second to Loading/submit data. Please Hold on</h1>
      <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  );
}

