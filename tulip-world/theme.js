jQuery(function($) {
  $('a.show-search-link').click(function(event) {
    event.preventDefault();
    $(this).hide();
    $('form#navbar-search-form').removeClass('hidden');
    $('input#navbar-search-query').focus();
  });

  $('input#navbar-search-query').keyup(function(event) {
    if (event.keyCode !== 27) { // Esc
      return;
    }
    event.preventDefault();
    $('form#navbar-search-form').addClass('hidden');
    $('a.show-search-link').show();
  }).blur(function() {
    $('form#navbar-search-form').addClass('hidden');
    $('a.show-search-link').show();
  });
});
