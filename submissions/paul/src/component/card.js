import { useState } from "react";

import Pagination from './pagination';
import TopicCard from './topic';
import mockData from '../lib/data';
// Mock data for topics

const allPages = [
  ...mockData[0].page1,
  ...mockData[1].page2,
  ...mockData[2].page3,
  ...mockData[3].page4,
  ...mockData[4].page5,
];


export default function Card() {

   // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(allPages.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = allPages.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-blue-600 mb-10 text-left">Explore Topics</h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((topic, i) => (
            <TopicCard key={`normal-${topic.id}-${i}`} topic={topic} />
          ))}
          {[...currentItems].reverse().map((topic, i) => (
            <TopicCard key={`reverse-${topic.id}-${i}`} topic={topic} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
        />
      </div>
    </div>
  );
}



