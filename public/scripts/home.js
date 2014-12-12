window.onload = function() {
  var title = document.getElementById('title'),
    outlinks = document.getElementById('outlinks'),
    emailAddress = document.getElementById('email-address'),
    emailIcon = document.getElementById('email-icon'),
    phoneIcon = document.getElementById('phone-icon'),
    phoneNumber = document.getElementById('phone-number'),
    iconEvents = {
      showEmail: function(event) {
        title.className = 'activated hidden';
        emailAddress.className = 'visible';
        phoneNumber.className = '';
        event.preventDefault();
      },

      hideEmail: function(event) {
        title.className = 'activated';
        emailAddress.className = '';
        event.preventDefault();
      },

      showNumber: function(event) {
        title.className = 'activated hidden';
        phoneNumber.className = 'visible';
        emailAddress.className = '';
        event.preventDefault();
      },

      hideNumber: function(event) {
        title.className = 'activated';
        phoneNumber.className = '';
        event.preventDefault();
      }
    };

  outlinks.className = '';

  emailIcon.addEventListener('mouseenter', iconEvents.showEmail);
  emailIcon.addEventListener('mouseleave', iconEvents.hideEmail);

  phoneIcon.addEventListener('mouseenter', iconEvents.showNumber);
  phoneIcon.addEventListener('mouseleave', iconEvents.hideNumber);
  phoneIcon.addEventListener('click', iconEvents.showNumber);

  var a = document.getElementById('home');

  setInterval(function() {
    console.log(a.height);
  }, 100);
};