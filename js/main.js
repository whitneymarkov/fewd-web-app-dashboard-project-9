const notifications = document.getElementsByClassName("notification-content");
const indicator = document.getElementsByClassName("alert-indicator");

$(document).ready(function() {

    // Toggle the sidebar navigation
    $('.button').on('click', function() {
        $('.main-nav-sidebar').toggleClass('sidebar-hidden');
    });

    // allow notifications to be opened and closed with enter key
    $('.notificationBtn').keyup(function(event){
        if(event.keyCode == 13){
            $('.notificationBtn').click();
        }
    });
});

//toggle visibility of the notifications dropdown
function notificationsToggle() {
    document.getElementById("notificationsDropdown").classList.toggle("show");
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
}
