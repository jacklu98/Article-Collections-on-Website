import React, { Component } from 'react';
import articleDict from '../article-dictionary';
import Articles from '../../components/Articles';

export default class ArticleList extends Component {
  render() {
    return (
      <div>
        <h1 className='sm: text-4xl text-2xl font-bold my-6 text-grey-900'>
            Articles
        </h1>
        <div className="container mx-auto py-4">
          <div className="flex flex-wrap -m-4">
            <Articles articles={articleDict} />
          </div>
        </div>
      </div>
    )
  }
}
