function paginate(currentPage, perPage, target) { 
  var currentPage = currentPage;
  var perPage = perPage;  
  var total = target.length;
  var totalPages = total/perPage;
  var ceiling = currentPage * perPage;
  var paginationElement = target.parent().prepend("<div class='pagination'></div>");
  
  jQuery(".pagination").html("");
  
  for(i=0; i<totalPages; i++) {
     paginationElement.append("<a onclick='javascript: goToPage(" + (i+1) + ")'>" + (i+1) + "</a>");
  }
  
  target.each(function(i,element){
    if(i+1 <= ceiling && i+1 > ceiling-perPage) {
        jQuery(element).show();
    } else {
        jQuery(element).hide();
    }
  })
}

function goToPage(page) {
  var target = jQuery(".messages ul ul li");
  paginate(page, 3, target);
}

goToPage(1);
