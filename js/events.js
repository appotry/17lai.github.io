/* global Matery */

HTMLElement.prototype.wrap = function(wrapper) {
  this.parentNode.insertBefore(wrapper, this);
  this.parentNode.removeChild(this);
  wrapper.appendChild(this);
};

Matery.events = {
  
  registerNavbarEvent: function() {
    var navbar = jQuery('#headNav');
    if (navbar.length === 0) {
      return;
    }

    Matery.utils.listenScroll(function() {

    });

  },
  registerParallaxEvent: function() {
    var ph = jQuery('#banner[parallax="true"]');
    if (ph.length === 0) {
      return;
    }
    var board = jQuery('main.content');
    if (board.length === 0) {
      return;
    }
    var parallax = function() {
      var pxv = jQuery(window).scrollTop() / 5;
      var offset = parseInt(board.css('margin-top'), 10);
      var max = 96 + offset;
      if (pxv > max) {
        pxv = max;
      }
      ph.css({
        transform: 'translate3d(0,' + pxv + 'px,0)'
      });
    };
    Matery.utils.listenScroll(parallax);
  },

  registerScrollDownArrowEvent: function() {
    var scrollbar = jQuery('.cover.scroll-down-bar');
    if (scrollbar.length === 0) {
      return;
    }
    scrollbar.on('click', function() {
      Matery.utils.scrollToElement('main.content', -jQuery('#headNav').height() + 30);
    });
  },

  registerScrollBackCommentEvent: function() {
    var scrollbar = jQuery('#to_comment');
    if (scrollbar.length === 0) {
      return;
    }
    scrollbar.on('click', function() {
      // toc记忆改变了文章宽度，可能导致这里高度计算错误，故调用两次
      Matery.utils.scrollToElement('#comments', -jQuery('#headNav').height());
      Matery.utils.scrollToElement('#comments', -jQuery('#headNav').height());
    });
  },

  registerScrollTopArrowEvent: function() {
    var topArrow = jQuery('#backTop');
    if (topArrow.length === 0) {
      return;
    }
    var board = jQuery('main.content');
    if (board.length === 0) {
      return;
    }
    // Click
    topArrow.on('click', function() {
      jQuery('body,html').animate({
        scrollTop: 0,
        easing   : 'swing'
      });
    });
  },

  registerImageLoadedEvent: function() {
    if (!('NProgress' in window)) { return; }

    var notLazyImages = jQuery('main img:not([lazyload])');
    var total = notLazyImages.length;
    for (const img of notLazyImages) {
      const old = img.onload;
      img.onload = function() {
        old && old();
        window.NProgress && window.NProgress.inc(0.5 / total);
      };
      if (img.complete) { img.onload(); }
    }
  },

  registerRefreshCallback: function(callback) {
    if (!Array.isArray(Matery.events._refreshCallbacks)) {
      Matery.events._refreshCallbacks = [];
    }
    Matery.events._refreshCallbacks.push(callback);
  },

  refresh: function() {
    if (Array.isArray(Matery.events._refreshCallbacks)) {
      for (var callback of Matery.events._refreshCallbacks) {
        if (callback instanceof Function) {
          callback();
        }
      }
    }
  },

  billboard: function() {
    if (!('console' in window)) {
      return;
    }
    // eslint-disable-next-line no-console
    console.log(`
    __       __   ______   ________  ________  _______   __      __ 
    /  \     /  | /      \ /        |/        |/       \ /  \    /  |
    $$  \   /$$ |/$$$$$$  |$$$$$$$$/ $$$$$$$$/ $$$$$$$  |$$  \  /$$/ 
    $$$  \ /$$$ |$$ |__$$ |   $$ |   $$ |__    $$ |__$$ | $$  \/$$/  
    $$$$  /$$$$ |$$    $$ |   $$ |   $$    |   $$    $$<   $$  $$/   
    $$ $$ $$/$$ |$$$$$$$$ |   $$ |   $$$$$/    $$$$$$$  |   $$$$/    
    $$ |$$$/ $$ |$$ |  $$ |   $$ |   $$ |_____ $$ |  $$ |    $$ |    
    $$ | $/  $$ |$$ |  $$ |   $$ |   $$       |$$ |  $$ |    $$ |    
    $$/      $$/ $$/   $$/    $$/    $$$$$$$$/ $$/   $$/     $$/  
                           
                欢迎访问 夜法之书 个人博客！
                  https://blog.17lai.site                                                           
    `);
  }
};
