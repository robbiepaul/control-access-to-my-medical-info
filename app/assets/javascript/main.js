// ES6 or Vanilla JavaScript

$('.context').hide();

$('.nhsuk-radios__input').on('change', function() {
  var checked = $(this).prop('checked')
  $('.context').hide();
  var $context = $(this).parents('.nhsuk-radios__item').find('.context');
  if (checked) {
    $context.show();
  }
})