import React from 'react'
import { Link } from 'react-router-dom';

export default function Articles({ articles }) {
  return (
    <>
        {articles.map((article, index) => (
            <div className="p-4 md:w-1/2" key={index}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <Link key={index} to={`/article/${article.name}`}>
                        <img src={article.thumbnail} alt="unknown" className="lg:h-48 md:h-36 w-full object-cover object-center" />
                    </Link>
                    <div className="p-6">
                        <Link key={index} to={`/article/${article.name}`}>
                            <h3 className="text-lg font-medium text-gray-900 mb-3">
                            {article.title}
                            </h3>
                        </Link>
                        <p className="leading-relaxed mb-3">
                            {article.content[0].substring(0, 100)}...
                        </p>
                        <div className="flex item-center flex-wrap">
                            <Link to={`/article/${article.name}`} className="text-indigo-500 inline-flex item-center md:mb-2 lg:mb-0">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </>
  )
}
