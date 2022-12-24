$(document).ready(function() {
	$(".nav-item").hover(function () {
        $(this).children(".nav-sublist").slideDown('fast');
    }, function () {
        $(this).children(".nav-sublist").slideUp('slow');
    });
});

// 顯示彈出視窗函數
function openModal(id) {
    var modal = document.getElementById(id); // 彈出視窗
    modal.style.display = "block"; // 顯示
  }
  
// 隱藏彈出視窗函數
function closeModal(id) {
    var modal = document.getElementById(id); // 彈出視窗
    modal.style.display = "none"; // 隱藏
  }
  
  
// 幻燈片索引
var slideIndex = 1;

// 显示幻燈片函数
function showSlides(n) {
  // 幻燈片
  var slides = document.getElementsByClassName("mySlides");
  // 文字容器
  var captions = document.getElementsByClassName("caption-container");
  // 如果幻燈片索引大於最大索引，則设置为 1
  if (n > slides.length) {
    slideIndex = 1;
  }
  // 如果幻燈片索引小於最小索引，則设置为最大索引
  if (n < 1) {
    slideIndex = slides.length;
  }
  // 隐藏所有幻燈片
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // 隐藏所有文字容器
  for (var i = 0; i < captions.length; i++) {
    captions[i].style.display = "none";
  }
  // 显示当前幻燈片
  slides[slideIndex-1].style.display = "block";
  // 显示当前文字容器
  captions[slideIndex-1].style.display = "block";
}

// 切換幻燈片函数
function plusSlides(n) {
  showSlides(slideIndex += n);
}