import {SOURCES,
  CATEGORIES,
  COUNTRIES,
  LANGUAGES,
  SORT_BY,
  NEWS_TYPE} from './constants';

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
    $("#keyword").button({

    });

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
    // $(".source").hide();

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
    // $(".country").hide();

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

    $(".dashboard").append("<div class='sortby'>");
    $(".sortby").append("<h3>How do you want to sort the articles?");
    $(".sortby").append("<select id='sortby'>");
    $.each(LANGUAGES, (val, text) => {
      $("#sortby").append(new Option(text, val));
      if (text === "-- select an option --") {
        $('#sortby option:last').attr('disabled', 'disabled');
      }
    });
    $("#sortby").selectmenu({
      width: 200
    });

    $(".dashboard").append("<div class='page'>");
    $(".page").append("<h3>How many articles?");
    $(".page").append("<input id='page' type='text'>");
    $("#page").button({

    });

    $(".dashboard").append("<button id='button'>Submit</button>");
    $("#button").button({

    });







  }

  addEvents() {
    $("#news-type").on("selectmenuchange", (event, ui) => {
      if (ui.item.label === "Just the headlines") {
        $(".source").show();
      }
    });
  }
}
