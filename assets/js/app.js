"use strict";

/*
* ----------------------------------------------------------------------------------------
    Template Name: 
    Template URI: 
    Description: 
    Author: 
    Author URI: 
    Version: 

    1.0 Dropdown Menu
    1.01 Sticky Menu  
    1.02 Main Menu 
    1.03 Mobile Men
    1.04 scroll up js
    1.05 progressbar js
    1.06 nice select 
    1.07 tab
    1.08 checkbox price
    1.09 isotop filter
    1.10 tippy active
    1.11 testimonal slider
    1.12 coundown
    1.13 Modal triger
* ----------------------------------------------------------------------------------------
*/

(function ($) {
  /* 1.0 Dropdown Menu  */
  $(".menu-item-has-children > a").on("click", function () {
    var element = $(this).parent("li");

    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
      element.find("ul").slideUp(300);
      element.find(".rt-mega-menu").slideUp(300);
    } else {
      element.addClass("open");
      element.children("ul").slideDown(300);
      element.children(".rt-mega-menu").slideDown(300);
      element.siblings("li").children("ul").slideUp();
      element.siblings("li").removeClass("open");
      element.siblings("li").find("li").removeClass("open");
      element.siblings("li").find("ul").slideUp();
    }
  });

  $(".accrodain-button").on("click", function () {
    var element = $(this).parent("li");

    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
      element.find(".content").slideUp(200);
    } else {
      element.addClass("open");
      element.children(".content").slideDown(200);
      element.siblings("li").children(".content").slideUp();
      element.siblings("li").removeClass("open");
      element.siblings("li").find("li").removeClass("open");
      element.siblings("li").find(".content").slideUp();
    }
  });

  /* 1.01 Sticky Menu  */
  function stickyHeader() {
    var mainheader = $(".rt-sticky"),
        height = mainheader.outerHeight(),
        scroll = $(document).scrollTop();
    $(window).on("load", function () {
      if ($(document).scrollTop() > height) {
        if (mainheader.hasClass("rt-sticky-active")) {
          mainheader.removeClass("rt-sticky-active");
        } else {
          mainheader.addClass("rt-sticky-active");
        }
      }
    });
    $(window).on("scroll", function () {
      var scrolled = $(document).scrollTop(),
          header = $(".rt-sticky-active");

      if (scrolled > scroll) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }

      if (scrolled === 0) {
        mainheader.removeClass("rt-sticky-active");
      } else {
        mainheader.addClass("rt-sticky-active");
      }

      scroll = $(document).scrollTop();
    });
  }

  if ($(window).width() > 991.98) {
    stickyHeader();
  }

  /* 1.02 Main Menu  */
  $(".main-menu ul li").on("click", function () {
    $(".main-menu ul li").removeClass("active");
    $(this).addClass("active");
  });

  /* 1.03 Mobile Menu */
  $(".menu-click").on("click", function () {
    $(".openmobile-menu").toggleClass("active-mobile-menu");
    $(".rt-mobile-menu-overlay").addClass("active");
    return false;
  });
  $(".rt-mobile-menu-close, .rt-mobile-menu-overlay").on("click", function () {
    $(".openmobile-menu").removeClass("active-mobile-menu");
    $(".rt-mobile-menu-overlay").removeClass("active");
    return false;
  });

  /* 1.04 scroll up js */
  $.scrollUp({
    scrollText: '<i class="ph-caret-up-light"></i>'
  });

  /* 1.05 progressbar js */
  $(".progressbar-group .ani").each(function () {
    $(this).animate({
      width: $(this).attr("data-progress") + "%"
    }, 1000);
  });

  var dataWidth = document.querySelectorAll("[data-width]");
  dataWidth.forEach(function (item) {
    item.style.maxWidth = item.getAttribute("data-width");
  });

  /* 1.06 nice select */
  $("select").niceSelect();

  /* 1.07 tab */
  $("#tabs-nav li:first-child").addClass("active");
  $(".tab-content").hide();
  $(".tab-content:first").show();

  $("#tabs-nav li").click(function () {
    $("#tabs-nav li").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").hide();
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });

  /* 1.08 checkbox price */
  $("#pricechnage").on("change", function () {
    $("body").toggleClass("price-toggole");
  });

  /* isotop filter */
  $(".grids").imagesLoaded(function () {
    var $grid = $(".grids").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: 0
      }
    });
  });

  /* 1.09 isotop filter */
  $(".filter-list").on("click", "li", function () {
    $(".filter-list li").removeClass("active");
    $(this).addClass("active");
    var filterValue = $(this).attr("data-filter");
    $(".grids").isotope({
      filter: filterValue
    });
    $(window).trigger("resize");
  });

  /* 1.10 tippy active */
  tippy(".tipy-info", {
    content: "Global content",
    trigger: "mouseenter",
    theme: "primary",
    animation: "scale"
  });

  /* =============================================
     1.11 testimonal slider (اصلاح شده)
  ============================================= */
  
  // بررسی اینکه اسلایدر قبلاً راه‌اندازی نشده باشد
  if (!$('.slider-for').hasClass('slick-initialized')) {
    // اسلایدر تصاویر
    $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider-for',
      rtl: true,
      fade: true,
      speed: 500
    });

    // اسلایدر متن
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
      rtl: true,
      speed: 500
    });
  }

  // دکمه‌های قبلی و بعدی (با event delegation برای اطمینان)
  $(document).on('click', '.prev-btn', function() {
    $('.slider-for').slick('slickPrev');
    $('.slider-nav').slick('slickPrev');
  });

  $(document).on('click', '.next-btn', function() {
    $('.slider-for').slick('slickNext');
    $('.slider-nav').slick('slickNext');
  });

  /* 1.12 coundown */
  if (document.getElementById("timer")) {
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(distance % (1000 * 60) / 1000);

      document.getElementById("timer").innerHTML = "<div class='text-[44px] font-bold'>" + days + "<div class=' text-lg font-medium mt-2 capitalize'>days</div></div>" + "<div class='text-[44px] font-bold'>" + hours + "<div class='text-lg font-medium mt-2 capitalize'>hours</div></div>" + "<div class='text-[44px] font-bold'>" + minutes + "<div class='text-lg font-medium mt-2 capitalize'>minutes</div></div>" + "<div class='text-[44px] font-bold'>" + seconds + "<div class='text-lg font-medium mt-2 capitalize'>seconds</div></div>";

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  /* 1.13 modal triger */
  $(".modal-trigger").on("click", function () {
    $("body").toggleClass("modal-open");
  });

})(jQuery);