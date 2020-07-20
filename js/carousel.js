$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel();
      
    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#myCarousel").carousel(0);
      console.log("clicked")
    });
    $(".item2").click(function(){
      $("#myCarousel").carousel(1);
      console.log("clicked")
    });
    $(".item3").click(function(){
      $("#myCarousel").carousel(2);
      console.log("clicked")
    });
      
    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
      $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
      $("#myCarousel").carousel("next");
    });
  });

  // Modal
  const modal = document.querySelector('.modal');
  const modalArticle = document.querySelector('.modal-article');
  const modalClose = document.querySelector('.modal-close');
  
  document.querySelectorAll('.promo').forEach(function(item) {
  
    item.addEventListener('click', function() {
      let articleId = item.getAttribute('data-article');
      let articleContainer = document.getElementById(articleId);
      let articleContent = articleContainer.innerHTML;
      modalArticle.innerHTML = articleContent;
      
      modal.style.display = "block";
    });
  
  });
  
  modalClose.addEventListener('click', function() {
    modal.style.display = "none";
  });