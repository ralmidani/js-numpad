var fullNum = '';
var maxDigits = 4;
var numKeyStatus = 'enabled';

function enableNumKeys() {
  numKeyStatus = 'enabled';
  $('.num-key').removeClass('disabled').addClass('enabled');
}

function disableNumKeys() {
  numKeyStatus = 'disabled';
  $('.num-key').removeClass('enabled').addClass('disabled');
}

$(document).ready(function() {
  $('#num-pad').on('click', '.num-key', function() {
    if (numKeyStatus === 'enabled') {
      fullNum += parseInt($(this).attr('id').slice(0, 1));
      $('#full-num').text(fullNum);
      if (fullNum.length >= maxDigits) {
        disableNumKeys();
      }
    }
  });
  
  $('#back-key').on('click', function () {
    fullNum = fullNum.slice(0, -1);
    $('#full-num').text(fullNum);
    enableNumKeys();
  });
  
  $('#clr-key').on('click', function() {
    fullNum = '';
    $('#full-num').text(fullNum);
    enableNumKeys();
  });
});