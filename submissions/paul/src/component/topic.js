import React from 'react'
import { Eye, Star, MessageCircle } from "lucide-react";

function TopicCard({ topic }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="aspect-video w-full">
        <img
          src={topic.image}
          alt={topic.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Author & Date */}
        <div className="flex items-center space-x-3 mb-4">
          <img
            src="avatar.jpeg"
            alt={topic.author}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{topic.author}</h3>
            <p className="text-sm text-gray-500">{topic.date}</p>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
          {topic.title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 leading-relaxed">{topic.excerpt}</p>

        {/* Read More Button */}
        <a
          href="https://www.google.com"
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
        >
          Read More
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>

        {/* Stats */}
        <div className="flex items-center space-x-6 mt-4">
          <div className="flex items-center text-sm text-gray-500">
            <Eye className="w-4 h-4 mr-1" />
            <span>{topic.views}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Star className="w-4 h-4 mr-1" />
            <span>{topic.likes}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MessageCircle className="w-4 h-4 mr-1" />
            <span>{topic.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopicCard;