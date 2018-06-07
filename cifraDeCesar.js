function cifer() {
  var ciferMesage = '';
  var result;
  var initialASCII = 0;
  var mesage = prompt("Digite a mensagem:");
  if (!mesage) {
    alert("Digite corretamente a mensagem!");
    return;
  }

  if (mesage.toUpperCase() === mesage) {
    initialASCII = 65;

  } else {
    initialASCII = 97;
  }

  for (var i = 0; i < mesage.length; i++) {
    if ((mesage[i].charCodeAt() >= 65 && mesage[i].charCodeAt() <= 90) || (mesage[i].charCodeAt() >= 97 && mesage[i].charCodeAt() <= 122)) {
      ciferMesage += String.fromCharCode((mesage[i].charCodeAt() - initialASCII + 7) % 26 + initialASCII);


    } else {
      alert("Digite apenas letras!");
      return;
    }
  }
  document.getElementById("result").innerHTML = ciferMesage;
}
cifer();

function decifer() {
  var mesage = document.getElementById("result").innerHTML;
  var deciferMesage = '';
  var result;
  var initialASCII = 0;
  if (!mesage) {
    alert("Digite corretamente a mensagem!");
    return;
  }

  if (mesage.toUpperCase() === mesage) {
    initialASCII = 65;

  } else {
    initialASCII = 97;
  }

  for (var i = 0; i < mesage.length; i++) {
    if ((mesage[i].charCodeAt() >= 65 && mesage[i].charCodeAt() <= 90) || (mesage[i].charCodeAt() >= 97 && mesage[i].charCodeAt() <= 122)) {
      deciferMesage += String.fromCharCode((mesage[i].charCodeAt() - initialASCII - 7) % 26 + initialASCII);


    } else {
      alert("Digite apenas letras!");
      return;
    }
  }
  document.getElementById("result").innerHTML = deciferMesage;
}

