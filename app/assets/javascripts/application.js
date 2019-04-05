// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {
  var $forms = document.getElementsByClassName('needs-validation');
  var $contactButton = $('#contact-button');
  var $token = $('meta[name="csrf-token"]').prop('content');
  var $messageForm = $('#message-form');
  var validation = Array.prototype.filter.call($forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
      } else {
        event.preventDefault();
        $contactButton.click(function(event) {
          $.ajax({
            url: "/send_message",
            type: "POST",
            headers: {'X-CSRF-TOKEN': $token},
            data: {
              name: $('#name').prop("value"),
              email: $('#email').prop("value"),
              number: $('#number').prop("value"),
              content: $('#content').prop("value")
            },
            success: function() {
              $messageForm.fadeOut(500, function() {
                $messageForm.html('<h2 class="text-center" style="color: black; padding: 40px 0">Your message has been sent!</h2>');
              }).fadeIn(500);
            }
          })
        });
      }
      form.classList.add('was-validated');
    }, false);
  });
});
