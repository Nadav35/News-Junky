# NewsJunky
[NewsJunky live](https://nadav35.github.io/News-Junky/)

NewsJunky is an app that generates news stories and headlines from around the world, based on the user's preference.

![intro-page](https://github.com/Nadav35/News-Junky/blob/master/public/assets/1.png)



## Features
  * Users can get specific articles based on their choices
  * Each new request will give users up-to-date headlines and news stories
  * Users will have the option to sort the stories by relevancy, popularity, or the date they were published at
  * Different news sources will generate custom text inside the article
  
![search-page](https://github.com/Nadav35/News-Junky/blob/master/public/assets/2.png)

![results-page](https://github.com/Nadav35/News-Junky/blob/master/public/assets/3.png)


## Architecture and Technologies
  * `Jquery` and Vanilla JavaScript for the overall structure and DOM manipulation.
  * `news-api` npm library that will interact with the news-api website to fetch the relevant news stories and send the queries the user asked for.
  * `webpack` to bundle the files.
