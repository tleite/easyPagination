function paginate(currentPage, perPage, target) { 
  var currentPage = currentPage;
  var perPage = perPage;  
  var total = target.length;
  var totalPages = total/perPage;
  var ceiling = currentPage * perPage;
  jQuery(".pagination").remove();
  var paginationElement = target.parent().append("<div class='pagination'></div>");
  
  for(i=0; i<totalPages; i++) {
     if(currentPage === i+1) {
        jQuery(".pagination").append("<a style='text-none' onclick='javascript: goToPage(" + (i+1) + ")'>" + (i+1) + "</a>"); 
     } else {
        jQuery(".pagination").append("<a style='text-decoration:underline' onclick='javascript: goToPage(" + (i+1) + ")'>" + (i+1) + "</a>");
     }
  }
  
  target.each(function(i,element){
    if(i+1 <= ceiling && i+1 > ceiling-perPage) {
        jQuery(element).show();
    } else {
        jQuery(element).hide();
    }
  })
}

function goToPage(elementTarget, page) {
  var target = jQuery(elementTarget);
  paginate(page, 3, target);
}
