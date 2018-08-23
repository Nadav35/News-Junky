const axios = require('axios');
import {SOURCES,
  CATEGORIES,
  COUNTRIES,
  LANGUAGES,
  SORT_BY} from './constants';
import { parseInfo } from './parse_info';
import Main from './main';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('b68bcdc433a443eda7f73bf074ca5dfc');


document.addEventListener('DOMContentLoaded', () => {
  const root = $('.wrapper');
  new Main(root);


  // const rootEl = $('.right-side');
  // // let type = "everything";
  // // let q = "obama";
  // // axios.get(`/${type}/${q}`)
  // //   .then((response) => {
  // //     console.log(response);
  // //   })
  // // .catch((error) => {
  // //   console.log(error);
  // // });
  //
  // // $('#source').append('<option value="foo">Foo</option>');
  // $.each(CATEGORIES, (val, text) => {
  //   $('#category').append(new Option(text, val));
  //   if (text === "-- select an option --") {
  //     $('#category option:last').attr('disabled', 'disabled');
  //   }
  // });
  //
  //
  //
  //
  // // let options = $('source').attr('options');
  // // let length = $('#source option').length;
  // // console.log(length);
  //
  // // options[options.length] = new Option('Foo', 'foo');
  // $.each(SOURCES, (val, text) => {
  //   $('#source').append(new Option(text, val));
  //   if (text === "-- select an option --") {
  //     $('#source option:last').attr('disabled', 'disabled');
  //   }
  // });
  //
  // $.each(SOURCES, (val, text) => {
  //   $('#source1').append(new Option(text, val));
  //   if (text === "-- select an option --") {
  //     $('#source1 option:last').attr('disabled', 'disabled');
  //   }
  // });
  //
  // $.each(COUNTRIES, (val, text) => {
  //   $('#country').append(new Option(text, val));
  //   if (text === "-- select an option --") {
  //     $('#country option:last').attr('disabled', 'disabled');
  //   }
  // });
  //
  // $.each(LANGUAGES, (val, text) => {
  //   $('#language').append(new Option(text, val));
  //   if (text === "-- select an option --") {
  //     $('#language option:last').attr('disabled', 'disabled');
  //   }
  // });
  //
  // $.each(SORT_BY, (val, text) => {
  //   $('#sortby').append(new Option(text, val));
  //   if (text === "-- select an option --") {
  //     $('#sortby option:last').attr('disabled', 'disabled');
  //   }
  // });
  //
  // $(".button-hl").on("click", (e) => {
  //   //
  //   // console.log(e);
  //   const keyword = $('.keyword-hlinput').val();
  //   const source = $('#source').val() === "" ?
  //     null : $('#source').val();
  //   const category = source ?
  //     null : $('#category').val();
  //   const country = source ?
  //     null : $('#country').val();
  //   const numResults = isNaN(parseInt($('.page-hlinput').val())) ?
  //     20 : parseInt($('.page-hlinput').val());
  //   //
  //   // axios.get(`/everything/?keyword=${keyword}&
  //   //   source=${source}`)
  //   //   .then(response => {
  //   //     console.log(response);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });
  //   newsapi.v2.topHeadlines({
  //     q: keyword,
  //     sources: source,
  //     category: category,
  //     country: country,
  //     pageSize: numResults
  //   }).then( response => {
  //     parseInfo(rootEl, response.articles);
  //   });
  //
  //
  //
  // });
  //
  // $(".button-ev").on("click", (e) => {
  //   //
  //   // console.log(e);
  //   const keyword = $('.keyword-evinput').val() || "the-new-york-times";
  //   const source = $('#source1').val();
  //   const language = $('#language').val();
  //   const sortBy = $('#sortby').val();
  //
  //
  //   const numResults = parseInt($('.page-evinput').val());
  //   //
  //   // axios.get(`/everything/?keyword=${keyword}&
  //   //   source=${source}`)
  //   //   .then(response => {
  //   //     console.log(response);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });
  //   newsapi.v2.everything({
  //     q: keyword,
  //     sources: null
  //   }).then( response => {
  //     console.log(response);
  //   });
  //
  //
  //
  // });

  // let type = "everything";
  // let q = "obama";
  // axios.get(`/${type}/${q}`)
  //   .then((response) => {
  //     console.log(response);
  //   })
  // .catch((error) => {
  //   console.log(error);
  // });







});
