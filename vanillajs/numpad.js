var fullNum = '';
var maxDigits = 4;
var numKeyStatus = 'enabled';
var numKeys = document.getElementsByClassName('num-key');

function enableNumKeys() {
  numKeyStatus = 'enabled';
  for (var i = 0; i < numKeys.length; i++) {
    var numKey = numKeys[i];
    numKey.classList.remove('disabled');
    numKey.classList.add('enabled');
  }
} 

function disableNumKeys() {
  numKeyStatus = 'disabled';
  for (var i = 0; i < numKeys.length; i++) {
    var numKey = numKeys[i];
    numKey.classList.remove('enabled');
    numKey.classList.add('disabled');
  }  
}

document.addEventListener('DOMContentLoaded', function() {
  var numPad = document.getElementById('num-pad');
  numPad.addEventListener('click', function(event) {
    var key = event.target;
    if (key.classList.contains('num-key')) {
      if (numKeyStatus === 'enabled') {
        fullNum += key.id.slice(0, 1);
        document.getElementById('full-num').innerHTML = fullNum;
        if (fullNum.length >= maxDigits) {
          disableNumKeys();
        }
      }
    }
    else if (key.id === 'back-key') {
      fullNum = fullNum.slice(0, -1);
      document.getElementById('full-num').innerHTML = fullNum;
      enableNumKeys();
    }
    else if (key.id === 'clr-key') {
      fullNum = '';
      document.getElementById('full-num').innerHTML = fullNum;
      enableNumKeys();
    }
  });
});