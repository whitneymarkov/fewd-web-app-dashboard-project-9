//=====================================
// Navigation
//=====================================

//header nav
const headerNav = document.querySelector('.header-nav');
const notificationBtn = document.getElementById('notificationBtn');
const notificationsDropdown = document.getElementById('notificationsDropdown');
const notifications = document.getElementsByClassName('notification-content');

//close buttons
const closeBtn = document.getElementsByClassName('closebtn');
let closeBtnParent = closeBtn.parentNode;

//sidebar nav
const sideBar = document.getElementById('sideBar');
const menuBtn = document.getElementById('menuBtn');

//remove parent element of closebtn clicked
$('.closebtn').on('click', function() {
    this.parentElement.remove();

    //if notification list is empty hide the red indicator
    if($('.notification').length === 0) {
        $('.alert-indicator').removeClass('show');
    }

    if($('.notification').length > 0) {
        $('.alert-indicator').addClass('show');
    }
});

//toggle the notifications and sidebar navigation
headerNav.addEventListener('click', toggleVisibility, false);

function toggleVisibility(e) {
    if (e.target === notificationBtn) {
        notificationsDropdown.classList.toggle('show');
    }
    if (e.target == menuBtn) {
        sideBar.classList.toggle('sidebar-hidden');
    }
}

// Close the notification dropdown menu if clicked outside
window.onclick = (event) => {
  if (!event.target.matches('.notificationBtn') && !event.target.matches('.closebtn')) {

    for (let i = 0; i < notifications.length; i++) {
      let openNotifications = notifications[i];
      if (openNotifications.classList.contains('show')) {
        openNotifications.classList.remove('show');
      }
    }
  }
};
