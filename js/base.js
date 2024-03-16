//When the body tag is loaded, bottom of page will display when the page was last updated
function lastUpdated() {
    var x = document.lastModified;
    document.getElementById("lastUpdated").innerHTML = "This page was last modified " + x;
  }

  //Long page, so this lets you jump back to the top
function backToTop(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera    
}
