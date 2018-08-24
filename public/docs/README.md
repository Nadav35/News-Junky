# NewsJunky - A personalized news app

## Background and Overview

NewsJunky is an app that generates news stories and headlines from around the world, based on the user's preference.

A user will have 2 main options. They could either generate live top and breaking headlines, or get everything, meaning breaking news as well as lesser articles from over 30,000 large and small news sources and blogs.

The users can also further define the scope of the articles they want to see. They can search by a keyword, a news source, a specific country, a category, and can also specify the number of articles they want to see.

## Functionality & MVP's

NewsJunky will have the following functionality:
  * Users will be able to get specific articles based on their choices
  * Each new request will give users up-to-date headlines and news stories
  * Users will have the option to sort the stories by relevancy, popularity, or the date they were published at
  * Different news sources will generate different background and sound effects
  * The bubbles\rectangles displaying the stories will be interactive and the users can interact with them in different ways.

## Wireframes

The app will show on a single page. The left side of it will be the dashboard, where the user will be able to interact with the various search options and then submit them.

The main container will be a canvas that will be comprised of rectangular/circular objects that will show the desired news articles.


![wireframe](https://github.com/Nadav35/News-Junky/blob/master/public/assets/wireframe.png)

## Architecture and Technologies

The project will be implemented with the following technologies:
  * `Jquery` and Vanilla JavaScript for the overall structure and DOM manipulation.
  * A basic `node backend` that will make the ajax calls to fetch the news stories. The npm libraries that will be used are `express`, `axios` and `webpack`.
  * `news-api` npm library that will interact with the news-api website to fetch the relevant news stories and send the queries the user asked for.
  * `HTML5 Canvas` for DOM manipulation and rendering.

## Implementation Timeline

### Over the weekend:

  * In the process of completing the main frontend functionality.
  * Did the relevant research to be able to make the right ajax call to fetch the information.
  * Completed a short HTML5 Canvas and node.js tutorials.

#### Day 1:
  Frontend: Completely finish the left side of the App. Code a nice design for the dashboard and have everything ready to allow for a smooth flow of information from the frontend to the backend.

  Backend: Work on figuring out how to correctly parse the different inputs coming in from the user, and then to connect them via node to make the correct api calls to website.

#### Day 2:
  Frontend: Dedicate much of the day to figure out how to create custom canvas objects with different sizes, and having each of them display a different article. I would also want to try and create some animations and interactivity for each article.

  Backend: By today I'm hoping to be pretty much done with configuring the backend. It shouldn't be too complicated as I will be making just one type of call ('GET'), but just need to make sure to account for some edge-cases where the input is invalid. Also, certain input fields are mutually exclusive so will also need to account for that.

#### Day 3:
  Frontend: By the end of the day the main container should be able to display news articles, with the info for each one showing inside a canvas object.

### Day 4:
  Frontend: Last touchups, and given that most things look good, implement some further functionality, like adding audio to different events and different colors and backgrounds to articles, depending on their type.

## Bonus features

  * Allow for the combination of different news articles to be shown on the same screen that were made with different ajax calls. For example, a user will make a selection, be able to filter unwanted results, and then make a new selection that will combine the old results with the new ones.
  * Allow users to create their own news stories and add images to them from urls.
  * Enhance the interactivity of the news articles.
