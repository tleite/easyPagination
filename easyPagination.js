function paginate(currentPage) { 
  
  var userVariables = {
    target: jQuery(".listClassName"),
    perPage: 10
  }
  
  var currentPage = currentPage;  
  var total = userVariables.target.length;
  var totalPages = total/userVariables.perPage;
  var ceiling = currentPage * userVariables.perPage;
  jQuery(".pagination").remove();
  var paginationElement = userVariables.target.parent().append("<div class='pagination'></div>");
  
  for(i=0; i<totalPages; i++) {
     if(currentPage === i+1) {
        jQuery(".pagination").append("<a style='text-none; cursor: pointer' onclick='javascript: goToPage(" + (i+1) + ")'>" + (i+1) + "</a>"); 
     } else {
        jQuery(".pagination").append("<a style='text-decoration:underline; cursor: pointer' onclick='javascript: goToPage(" + (i+1) + ")'>" + (i+1) + "</a>");
     }
  }
  
  userVariables.target.each(function(i,element){
    if(i+1 <= ceiling && i+1 > ceiling-userVariables.perPage) {
        jQuery(element).show();
    } else {
        jQuery(element).hide();
    }
  })
}

function goToPage(page) {    
  paginate(page);
}


goToPage(1);