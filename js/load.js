//When the page is fully loaded, this function will load the contents of the txt files into the assigned IDs
$(function(){
    $("#navSidebar").load("/sidebars/navSidebar.txt");
    $("#asideSidebar").load("/sidebars/asideSidebar.txt");
    $("#footerInfo").load("/sidebars/footerInfo.txt");
    $("#loadHeader").load("/sidebars/header.txt");
  });
