import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/index.js';
import articleDict from '../article-dictionary.js';
import Articles from '../../components/Articles/index.js';
import CommentsList from '../../components/CommensList/index.js';
import AddCommentForm from '../../components/AddCommentForm/index.js';

export default function Article() {
  const { name } = useParams();
  const article = articleDict.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({comments: []});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`)
      const body = await result.json();
      setArticleInfo(body);
    }
    fetchData();
    console.log("component mounted");
  }, [name]);

  if (!article) return <NotFound />
  
  const otherArticles = articleDict.filter((article) => article.name !== name)
  return (
    <div>
      <h1 className='sm: text-4xl text-2xl font-bold my-6 text-grey-900'>
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p key={index} className="mx-auto leading-relaxed text-base mb-4">
          {paragraph}
        </p>
      ))}
      <CommentsList comments={articleInfo.comments}/>
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
      <h1 className='sm: text-2xl text-1xl font-bold my-4 text-grey-900'>
        other articles
      </h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={otherArticles} />
      </div>
    </div>
  )
}

