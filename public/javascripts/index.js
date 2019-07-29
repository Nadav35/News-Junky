const axios = require('axios');
import {SOURCES,
  CATEGORIES,
  COUNTRIES,
  LANGUAGES,
  SORT_BY} from './constants';
import Main from './main';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('b68bcdc433a443eda7f73bf074ca5dfc');


document.addEventListener('DOMContentLoaded', () => {
  
  const root = $('.wrapper');
  new Main(root);
});
