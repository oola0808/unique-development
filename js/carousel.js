
// Modal
const modal = document.querySelector('.modal');
const modalArticle = document.querySelector('.modal-article');
const modalClose = document.querySelector('.modal-close');

document.querySelectorAll('.promo').forEach(function (item) {

  item.addEventListener('click', function () {
    let articleId = item.getAttribute('data-article');
    let articleContainer = document.getElementById(articleId);
    let articleContent = articleContainer.innerHTML;
    modalArticle.innerHTML = articleContent;

    modal.style.display = "block";
  });

});

modalClose.addEventListener('click', function () {
  modal.style.display = "none";
});

// Topnav

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}