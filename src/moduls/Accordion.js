export default class Accordion
{
    constructor() 
    {   
        $(".faq_toggle").on("click", function () {
            // Close other accordions when opening new one
            if (!$(this).hasClass("open")) {
              $(".faq_toggle.open").click();
            }
            // Save the sibling of the toggle we clicked on
            let sibling = $(this).siblings(".faq_content");
            let animationDuration = 400;
          
            if ($(this).hasClass("open")) {
              // Close the content div if already open
              sibling.animate({ height: "0px" }, animationDuration);
            } else {
              // Open the content div if already closed
              sibling.css("height", "auto");
              let autoHeight = sibling.height();
              sibling.css("height", "0px");
              sibling.animate({ height: autoHeight }, animationDuration, function () {
                sibling.css("height", "auto");
              });
            }
            // Open and close the toggle div
            $(this).toggleClass("open");
          });
    }
}

