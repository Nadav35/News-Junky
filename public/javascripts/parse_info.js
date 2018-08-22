
export const parseInfo = ($el, articles) => {
  // debugger
  $el.empty();
  const $ul = $("<ul>");
  // debugger

  // create articles
  for (let i = 0; i < articles.length; i++) {
    const title = articles[i].title;
    const desc= articles[i].description;
    const source = articles[i].source.name;
    const imgUrl = articles[i].urlToImage;
    const url = articles[i].url;
    // console.log(url);
    const $sourceDiv = $("<div class='source-div'>");
    // const $subSourceDiv = $("<div class='sub-source-div'>");


    const $source = $("<span class='source'>").text(source);
    const $title = $("<span class='title'>").text(title);

    const $desc = $("<p class='desc'>").text(desc);
    const $imgUrl = $(`<img src=${imgUrl} alt="image">`);
    const $url = $(`<a href=${url}>`).text(`Go To Article`);

    // $sourceDiv.html("<img src='/assets/fake_news.jpg'>");
    const $img = $("<img src='/assets/fake_news.jpg'>");
    const $newsType = getNewsType(source);
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

};

const getNewsType = (source) => {
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
};

// author: "Morgan Chalfant and Lydia Wheeler"
// description:"The jury in the criminal trial against former Trump campaign chairman Paul Manafort on Tuesday sent a note to the judge asking what they should do if they can't come to a consensus on a single count."
// publishedAt:"2018-08-21T15:44:27Z"
// source: {id: "the-hill", name: "The Hill"}
// title:"Manafort jury asks what happens if they can't come to conclusion on a count"
// url:"http://thehill.com/homenews/news/402837-manafort-jury-asks-what-happens-if-they-cant-come-to-conclusion-on-a-count"
// urlToImage:"http://thehill.com/sites/default/files/manafortpaul_052318gn_lead.jpg"
