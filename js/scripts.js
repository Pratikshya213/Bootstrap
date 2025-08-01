/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$(document).ready(function() {
  // When an accordion item is shown
  $('#accordionExample').on('shown.bs.collapse', function() {
    // Get the active accordion item
    var activeItem = $(this).find('.accordion-collapse.show');
    
    // Change background color of the active question
    activeItem.closest('.accordion-item').css('background-color', '#f8f9fa');
    
    // Add a checkmark icon to the question button
    activeItem.prev().find('.accordion-button').append(
      ' <span class="ms-2 text-success"><i class="fas fa-check"></i></span>'
    );
  });

  // When an accordion item is hidden
  $('#accordionExample').on('hidden.bs.collapse', function() {
    // Reset background color
    $(this).find('.accordion-item').css('background-color', '');
  });
});