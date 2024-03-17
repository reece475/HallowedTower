  //Long page, so this lets you jump back to the top
function backToTop(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera    
}

// Allows Nav and Aside to be toggled in Mobile View
function hideMenu(){
  if (document.getElementById("navSidebar").style.display === "block"){
      document.getElementById("navSidebar").style.display = "none";
      document.getElementById("asideSidebar").style.display = "none";
  }else{
    document.getElementById("navSidebar").style.display = "block";
    document.getElementById("asideSidebar").style.display = "block";
  }
}
