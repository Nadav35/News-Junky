import {SOURCES,
  CATEGORIES,
  COUNTRIES,
  LANGUAGES,
  SORT_BY,
  NEWS_TYPE} from './constants';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('b68bcdc433a443eda7f73bf074ca5dfc');

export default class Main{
  constructor($el) {
    this.$el = $el;

    this.setupPage();
    this.addEvents();
  }

  setupPage() {
    this.$el.append("<header class='header'>");
    $(".header").append("<h1>Welcome to NewsJunky");
    $(".header").append("<h2>All the news you can handle, personalized just for you!!");

    this.$el.append("<div class='main-container'>");

    $(".main-container").append("<div class='left-side'>");
    $(".main-container").append("<div class ='right-side'>");
    $(".left-side").append("<div class='dashboard'>");
    $(".dashboard").append("<div class='news-selector'>");

    $(".news-selector").append("<h3>How would you like your news today?");
    $(".news-selector").append("<select id='news-type'>");
    $.each(NEWS_TYPE, (val, text) => {
      $("#news-type").append(new Option(text, val));
      if (text === "-- select an option --") {
        $('#news-type option:last').attr('disabled', 'disabled');
      }
    });
    $("#news-type").selectmenu({
      width: 200
    });

    $(".dashboard").append("<div class='keyword'>");
    $(".keyword").append("<h3>Search by keyword");
    $(".keyword").append("<input id='keyword' type='text'>");
    // $("#keyword").button({
    //
    // });
    $(".keyword").hide();

    $(".dashboard").append("<div class='page'>");
    $(".page").append("<h3>How many articles?");
    $(".page").append("<input id='page' type='text'>");
    // $("#page").button({
    //
    // });
    $(".page").hide();

    $(".dashboard").append("<div class='source'>");
    $(".source").append("<h3>Pick your source");
    $(".source").append("<select id='source'>");
    $.each(SOURCES, (val, text) => {
      $("#source").append(new Option(text, val));
      if (text === "-- select an option --") {
        $('#source option:last').attr('disabled', 'disabled');
      }
    });
    $("#source").selectmenu({
      width: 200
    });
    $(".source").hide();

    $(".dashboard").append("<div class='country'>");
    $(".country").append("<h3>What country you want your news from?");
    $(".country").append("<select id='country'>");
    $.each(COUNTRIES, (val, text) => {
      $("#country").append(new Option(text, val));
      if (text === "-- select an option --") {
        $('#country option:last').attr('disabled', 'disabled');
      }
    });
    $("#country").selectmenu({
      width: 200
    });
    $(".country").hide();

    $(".dashboard").append("<div class='category'>");
    $(".category").append("<h3>Pick a category");
    $(".category").append("<select id='category'>");
    $.each(CATEGORIES, (val, text) => {
      $("#category").append(new Option(text, val));
      if (text === "-- select an option --") {
        $('#category option:last').attr('disabled', 'disabled');
      }
    });
    $("#category").selectmenu({
      width: 200
    });
    $(".category").hide();

    $(".dashboard").append("<div class='language'>");
    $(".language").append("<h3>Pick a language");
    $(".language").append("<select id='language'>");
    $.each(LANGUAGES, (val, text) => {
      $("#language").append(new Option(text, val));
      if (text === "-- select an option --") {
        $('#language option:last').attr('disabled', 'disabled');
      }
    });
    $("#language").selectmenu({
      width: 200
    });
    $(".language").hide();

    $(".dashboard").append("<div class='sortby'>");
    $(".sortby").append("<h3>How do you want to sort the articles?");
    $(".sortby").append("<select id='sortby'>");
    $.each(SORT_BY, (val, text) => {
      $("#sortby").append(new Option(text, val));
      if (text === "-- select an option --") {
        $('#sortby option:last').attr('disabled', 'disabled');
      }
    });
    $("#sortby").selectmenu({
      width: 200
    });
    $(".sortby").hide();


    $(".dashboard").append("<div class='button'>");
    $(".button").append("<button id='button'>Submit</button>");
    $("#button").button({

    });
    $(".button").hide();

  }

  addEvents() {
    $("#news-type").on("selectmenuchange", (event, ui) => {
      if (ui.item.label === "Just the headlines") {
        $(".sortby").hide();
        $(".source").show();
        $(".country").show();
        $(".category").show();
        $(".keyword").show();
        $(".page").show();
        $(".language").show();
        $(".button").show();

      } else if (ui.item.label === "Give me everything") {
        $(".sortby").show();
        $(".source").show();
        // $(".country").show();
        // $(".category").show();
        $(".keyword").show();
        $(".page").show();
        $(".language").show();
        $(".button").show();
      }
    });

    $("#source").on("selectmenuchange", (event, ui) => {

      //
      if ($("#news-type").val() === "headlines" || $("#news-type").val() === "everything") {
        $("#country").val("");
        $("#category").val("");
        $("#language").val("");
        $(".country").hide();
        $(".category").hide();
        $(".language").hide();
      } else {
        $(".country").show();
        $(".category").show();
        $(".language").show();
      }
    });

    $("#button").on("click", e => {
      const newsType = $("#news-type").val();
      const keyword = $("#keyword").val();
      const source = $("#source").val();
      const country = $("#country").val();
      const sortBy = $("#sortby").val();
      const category = $("#category").val();
      const language = $("#language").val();
      const pageSize = isNaN(parseInt($("#page").val())) ?
        20 : parseInt($("#page").val());

      // reset values
      $("#country").val("");
      $("#category").val("");
      $("#language").val("");
      $("#keyword").val("");
      $("#sortby").val("");
      $("#source").val("");
      $("#page").val("");

      if (newsType === "headlines") {
        newsapi.v2.topHeadlines({
          q: keyword,
          sources: source,
          category: category,
          country: country,
          language: language,
          pageSize: pageSize
        }).then( response => {
          //
          const rightSide = $('.right-side');
          this.parseInfo(rightSide, response.articles);
        });
      } else if (newsType === "everything") {
        newsapi.v2.everything({
          q: keyword,
          sources: source,
          language: language,
          sortBy: sortBy,
          pageSize: pageSize

        }).then( response => {

          const rightSide = $('.right-side');
          this.parseInfo(rightSide, response.articles);
        });
      }

    });

  }

  parseInfo($el, articles) {
    $el.empty();
    const $ul = $("<ul>");
    //

    // create articles
    for (let i = 0; i < articles.length; i++) {
      const title = articles[i].title;
      const desc= articles[i].description;
      const source = articles[i].source.name;
      console.log(source);
      const imgUrl = articles[i].urlToImage || '/assets/tenor.gif';

      const url = articles[i].url;
      // console.log(url);
      const $sourceDiv = $("<div class='source-div'>");
      // const $subSourceDiv = $("<div class='sub-source-div'>");


      const $source = $(`<a href=${source}>`).text(source);
      const $title = $("<span class='title'>").text(title);

      const $desc = $("<p class='desc'>").text(desc);
      const $imgUrl = $(`<img class='main-pic' src=${imgUrl} alt="image">`);
      const $url = $(`<a href=${url}>`).text(`Go To Article`);

      // $sourceDiv.html("<img src='/assets/fake_news.jpg'>");
      const $img = $("<img class='fake-news' src='/assets/fake_news.jpg'>");
      const $newsType = this.getNewsType(source);
      // $subSourceDiv.append($img);
      // $subSourceDiv.append($newsType);

      // $sourceDiv.append($subSourceDiv);



      $sourceDiv.append($img);
      $sourceDiv.append($newsType);



      // let $title = $("<span id='title'>");
      // $("#title").text(`yo${i}`);

      // console.log();


      let $li = $("<li>");
      $li.append($source);
      $li.append($title);
      $li.append($desc);


      $li.append($imgUrl);
      $li.append($url);
      $li.append($sourceDiv);

      // $li.append($title);
      $ul.append($li);

    }
    $el.append($ul);
  }

  getNewsType(source) {
    let $span;
    switch (source) {
      case 'Breitbart News':
      case 'National Review':
      case 'The American Conservative':
      case 'The Washington Times':
        $span = $("<span class='news-type'>").text("REAL NEWS!!");
        break;
      default:
        $span = $("<span class='news-type'>").text("FAKE NEWS!!");
    }
    return $span;
  }
}
