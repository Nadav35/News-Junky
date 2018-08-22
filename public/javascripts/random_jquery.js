$('#wrapper').css("width", 800);
$('#wrapper').css("margin", "auto");
$('#logo2').css("float", "left");
$('#p_two').css("color", "purple");
$('a').css('color', 'red');
$('#tableData a').css('color', 'green');
$('em + a').css('color', 'orange'); // a immediately after em
$('p > a').css('color', 'gray'); // all a that come after p
$("img[alt^='NTT']").css({
  "border-color": "black",
  "border-width": "1px",
  "border-style": "solid"
});

$("img[alt^='NTT']").width(150).height(150);

$("a:contains(gravida)").css("color", "blue"); // only select elements
  // containing a word(gravida)

$("p:has(i)").hide(); // hide elements (i elements in p paragraphs)
  // put .show()

// alert($("p:has(i)").html()); // alert with the content of the html.
  // showing even though its hidden

$("p:has(i)").html("<i> Some normal text </i>").show(); //change the current
  // text and show it. If we use .html we can add the <i> tag. Can just
  //text but then won't be able to use any html tags

$("p:has(i)").append(" I am Grooth"); // add text before
$("p:has(i)").prepend(" I am Grooth, hi theres"); // add text after

// Add a new element before the targeted one
$("p:has(i)").before("<p id='before_p'>A new paragraph before</p>");

// Add a new element after the targeted one
$("p:has(i)").after("<p id='after_p'>A new paragraph after</p>");

$("#after_p").on("click", (e) => {
  // debugger
  // let $this = $(e.currentTarget);
  $(e.currentTarget).remove();
});

$("#before_p").on("click", (e) => {

  $(e.currentTarget).replaceWith('<p>I\'m the new paragraph</p>');
});
// $("#after_p").click(function() {
//   $(this).remove();
// });
//
// // Replace an element with another on click
// $("#before_p").click((e) => {
//   $(this).replaceWith('<p>I\'m the new paragraph</p>');
// });

$("#oListIndent li").each((idx, el) => {
  let inp = $("#listStuff").val();
  // let $this = $(event.currentTarget);
  // debugger
  // console.log($(this).text());
  // let $el1 = $(el);
  $("#listStuff").val(inp + ", " + $(el).text());
});
// $("#oListIndent li").each(function(index) {
//
//   // Get the value in the input element
//   var inputListStuff = $("#listStuff").val();
//   console.log($(this).text());
//
//
//   // Assign a new value to the input element
//   // $(this).text() gets the value for each individual
//   // li element
//   $("#listStuff").val(inputListStuff + ", " + $(this).text());
//
// });

$("#oListIndent li").addClass("Harry_Potter");
$(".Harry_Potter").css("color", "blue");

$("#oListIndent li").on("click", (e) => {
  $(e.currentTarget).toggleClass("highlight");
  let bgColor = $(e.currentTarget).css("background-color");
  $("input[type=text]#yourName").val(bgColor);
});

$("h2").hover(e => {
  $(e.currentTarget).css("color", "pink");
}, (e) => {
  $(e.currentTarget).css("color", "black");

});

$(document).click(e => {
  $("#mClickXPos").val(e.pageX);
  $("#mClickYPos").val(e.pageY);
});

$(document).mousemove(e => {
  $("#mMoveXPos").val(e.screenX);
  $("#mMoveYPos").val(e.screenY);
});

$(document).keypress(e => {
  let keyP = String.fromCharCode(e.which);
  $("#keyPressed").val(keyP);
});

$("#inputFormEvent").blur( () => {
  $("#formEvent").text("Left input Element");
});
$("#inputFormEvent").change( () => {
  $("#formEvent").text("input Element changed");
});
$("#inputFormEvent").focus( () => {
  $("#formEvent").text("input Element focused");
});
$("#inputFormEvent").select( () => {
  $("#formEvent").text("input Element selected");
});

const show = (e) => {
  alert(e.data.message);
};

let bsMsg = {message: "fook you"};
let mmMsg = {message: "fook me"};

// $("#bestSelling").on("mouseover", bsMsg, show);
// $("#trackEvents").on("mouseover", mmMsg, show);

// $("#p_one").click(e => {
//   $(e.currentTarget).hide();
// });
//
// $("#p_two").click(e => {
//   $(e.currentTarget).fadeOut(2000);
//
//   $("#p_one").fadeToggle(2000);
//  });
//
//  $("#accident").click( e => {
//    $(e.currentTarget).fadeTo("slow", 0.50);
//  });

$("#p_one").click(e => {
  $(e.currentTarget).css("position", "relative");

  $("#p_one").animate(
    {
      left: 300,
      opacity: 0.5,
      "font-size": "22px",
      width: 300
    }, 2000, "easeInOut", () => {
      alert("all done");
    }
  );
});
