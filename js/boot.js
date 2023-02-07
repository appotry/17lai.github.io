/* global Matery */

Matery.boot = {};

Matery.boot.registerEvents = function() {
  Matery.events.billboard();
  Matery.events.registerParallaxEvent();
  Matery.events.registerScrollDownArrowEvent();
  Matery.events.registerScrollTopArrowEvent();
  Matery.events.registerScrollBackCommentEvent();
  Matery.events.registerImageLoadedEvent();
};

Matery.boot.refresh = function() {
  // Matery.plugins.fancyBox();
  Matery.plugins.codeWidget();
  Matery.events.refresh();
};

document.addEventListener('DOMContentLoaded', function() {
  Matery.boot.registerEvents();
});
