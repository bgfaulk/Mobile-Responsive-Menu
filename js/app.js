//Problem: It looks gross in smaller browser widths and small devices.
//Solution: To hide the text links and swap them out with a more approprite navigation.

//1. Create a select and append to #menu
//2. Cycle over menu links
//4. Option's value is the href of the link
//5. Do the options text is the text of link
//6. Append option to select
//7. Create a button 
//8. Bind click to button to click to go to select's location
//9. Modify CSS to hide links on small widths and show button and select.
//10. Modify CSS to also hide select and button on larger widths and shows links
//11. Deal with selected options depending on current page.

var $select = $("<select></select>");
$("#menu").append($select);


$("#menu a").each(function() {
  var $anchor = $(this);
  var $option = $("<option></option>");
  
  if($anchor.parent().hasClass("selected")){
    $option.prop("selected", true);
  }
  
  $option.val($anchor.attr("href"));
  $option.text($anchor.text());
  $select.append($option);
});

//Bind a change listener to the select


$select.change(function() {
  window.location = $select.val();
});


var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);

//Add an overlay
$("body").append($overlay);

// Capture the click event on a link to an image.
$('#imageGallery a').click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  console.log(imageLocation);
  //Update overlay with the image linked in the link. 
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $overlay.show();
  //Also need to add alt image description.
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  
});

//When overlay is clicked...
//Hide the overlay
$overlay.click(function() {
  $overlay.hide();
})