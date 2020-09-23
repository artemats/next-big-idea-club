document.addEventListener("name-of-event", function(e) {
  const menu = document.querySelector('[data-area="mobile-menu"]');
  menu.classList.toggle('active');
});

const toggle_menu = new CustomEvent("name-of-event");

const toggle_menu_btns = document.querySelectorAll('[data-action="toggle-menu"]');
[].forEach.call(toggle_menu_btns, function(btn) {
  btn.addEventListener('click', ()=>{
    document.dispatchEvent(toggle_menu);
  });
});

const sub_menu_toggle = document.querySelectorAll('[data-action="submenu-toggle"]');
[].forEach.call(sub_menu_toggle, function(btn) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const id = btn.href.split('/')[btn.href.split('/').length - 1].split('#')[1];
    document.querySelector('#' + id).classList.toggle('active');
    document.querySelector('[data-submenu="submenu-'+id+'"]').classList.toggle('active');
  });
});
