import React, { useEffect, useState } from "react";
import { FaRegEye, FaRegHeart, FaRegComment } from "react-icons/fa";

const ExploreTopics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("/data.json") 
      .then((res) => res.json())
      .then((data) => setTopics(data));
  }, []);

  return (
    <div className="px-8 py-12">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Explore Topics</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="bg-white rounded-xl shadow border p-4 flex flex-col"
          >
            <img
              src={topic.image}
              alt={topic.title}
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <div className="flex items-center space-x-2 mb-2">
              <img
                src="https://via.placeholder.com/40" 
                alt={topic.author}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">{topic.author}</p>
                <p className="text-xs text-gray-500">{topic.date}</p>
              </div>
            </div>
            <h3 className="font-bold text-gray-800 mb-1">{topic.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{topic.description}</p>
            <a
              href={topic.readMore}
              className="text-blue-600 text-sm font-semibold hover:underline mb-3"
            >
              Read More →
            </a>
            <div className="flex justify-between text-gray-500 text-sm mt-auto">
              <span className="flex items-center gap-1">
                <FaRegEye /> {topic.views}
              </span>
              <span className="flex items-center gap-1">
                <FaRegHeart /> {topic.likes}
              </span>
              <span className="flex items-center gap-1">
                <FaRegComment /> {topic.comments}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreTopics;
