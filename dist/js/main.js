"use strict";

document.addEventListener("name-of-event", function (e) {
  var menu = document.querySelector('[data-area="mobile-menu"]');
  menu.classList.toggle('active');
});
var toggle_menu = new CustomEvent("name-of-event");
var toggle_menu_btns = document.querySelectorAll('[data-action="toggle-menu"]');
[].forEach.call(toggle_menu_btns, function (btn) {
  btn.addEventListener('click', function () {
    document.dispatchEvent(toggle_menu);
  });
});
var sub_menu_toggle = document.querySelectorAll('[data-action="submenu-toggle"]');
[].forEach.call(sub_menu_toggle, function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    var id = btn.href.split('/')[btn.href.split('/').length - 1].split('#')[1];
    document.querySelector('#' + id).classList.toggle('active');
    document.querySelector('[data-submenu="submenu-' + id + '"]').classList.toggle('active');
  });
});