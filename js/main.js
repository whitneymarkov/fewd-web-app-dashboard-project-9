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

//sidebar nav
const sideBar = document.getElementById('sideBar');
const menuBtn = document.getElementById('menuBtn');

// autocomplete
const searchField = $('.autocomplete > input');
const memberSuggestions = $('.autocomplete > ul');

//form validation elements
const submit = document.querySelector('#submit');
const messageForm = document.getElementById('messageForm')

//remove parent element of closebtn clicked (x)
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

// members name array
let suggestions = [];
$('.name').each(function () {
    suggestions.push(this.innerHTML);
});

// autocomplete
searchField.keyup(function(){
	let search = $(this).val();
    //clear list before rebuilding
	memberSuggestions.empty();
    //loop through suggestions array
	if (search !== '') {
		$.each(suggestions, function(index, item){
            //check if input provides a match to suggestions array
            // append to ul as li
			if (item.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
				memberSuggestions.append('<li>' + item + '</li>');
			}
		});
        //click handler to assign the li content to the input field and clear the list
		$('.autocomplete li').click(function(){
			searchField.val($(this).html());
			memberSuggestions.empty();
		});
	}
});

// form validation pop-up
$('#submit').on('click', function(e) {
    e.preventDefault();

    let userSearch = document.querySelector('#userSearch').value;
    let messageField = document.querySelector('#message').value;

    // if both fields completed return success message
    if (( userSearch.length > 0 ) && ( messageField.length > 0 )) {
        swal({
            title: '',
            text: 'Your message has been sent!',
            type: 'success',
            confirmButtonColor: '#549594',
        })
            .catch(swal.noop)
        messageForm.reset();
    // if one or more fields empty return warning message
    } else {
            swal({
                title: '',
                text: 'You must complete both fields before sending a message',
                type: 'warning',
                confirmButtonColor: '#549594'
            })
            .catch(swal.noop)
    }
});

// store settings local storage
$('#save').on('click', function(e) {
    e.preventDefault();

    let email = $('#emailNotifications').prop('checked');
    let privacy = $('#privacySettings').prop('checked');
    let timezone = $('#timezone').val();

    localStorage.setItem('emailSettings', email);
    localStorage.setItem('privacySettings', privacy);
    localStorage.setItem('userTimezone', timezone);

    // save successful pop-up
    swal({
        title: '',
        text: 'Your settings have been saved',
        type: 'success',
        confirmButtonColor: '#549594'
    })
    .catch(swal.noop)
});

// reset pop-up

$('#reset').click(function(e) {
    swal({
        title: '',
        text: 'Your settings have been reset. If you would like to keep these settings, hit save.',
        type: 'info',
        confirmButtonColor: '#549594'
    })
    .catch(swal.noop)
});

//show saved settings on reload
$('#timezone').val(localStorage.getItem('userTimezone'));
if (localStorage.getItem('emailSettings') == 'true') {
    $('#emailNotifications').prop('checked', true);
} else $('#emailNotifications').prop('checked', false);

if (localStorage.getItem('privacySettings') == 'true') {
    $('#privacySettings').prop('checked', true);
} else {
    $('#privacySettings').prop('checked', false);
}
