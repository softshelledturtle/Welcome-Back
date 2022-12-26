$(document).ready(function() {
  $(".nav-sublist").hide();
$(".nav-item-no-hover").hover(function () {
      if ($(window).width() > 900) { 
          $(this).children(".nav-sublist").slideDown('fast');
      }
  }, function () {
      if ($(window).width() > 900) { 
          $(this).children(".nav-sublist").slideUp('slow');
      }
  });
});

$(document).ready(function(){
  let $ul = $(".nav-list"),
      $menu = $(".nav-menu");
  $($menu).click(function(){
    if ($ul.hasClass("menu-click")) {
      $ul.removeClass("menu-click");
    } else {
      $ul.addClass("menu-click");
    }
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
  
var slideIndex = 0;

// 显示幻燈片函数
function showSlides(classname,n = 1) {
    // 幻燈片
    var slides = document.getElementsByClassName(classname);

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
function plusSlides(classname,n) {
  showSlides(classname,slideIndex += n);
}

//回到頂部
let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

document.addEventListener('DOMContentLoaded', function() {
  const goTopButton = document.querySelector('[data-action="gotop"]');
  const windowViewPortHeight = window.innerHeight; // browser viewport height
  let isRequestingAnimationFrame = false;

  if (!goTopButton) {
    return;
  }

  goTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', function() {
    if (!isRequestingAnimationFrame) {
      requestAnimationFrame(filterGoTopButtonVisibility);
      isRequestingAnimationFrame = true;
    }
  });

  function filterGoTopButtonVisibility(timestamp) {
    let windowPageYOffset = window.pageYOffset || document.documentElement.scrollTop;
    if (windowPageYOffset > windowViewPortHeight) {
      goTopButton.classList.add('show');
      isRequestingAnimationFrame = false;
    } else {
      goTopButton.classList.remove('show');
      requestAnimationFrame(filterGoTopButtonVisibility);
    }
  }
})
  
