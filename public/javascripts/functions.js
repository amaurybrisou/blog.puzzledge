window.onload = function () {

  function getTwits() {
    var xmlhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }


    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

        document.getElementById("twits").innerHTML = xmlhttp.responseText;
      }
    }

    xmlhttp.open("GET", "/twits", true);
    xmlhttp.send();
  }

  function getWord() {
    var xmlhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.setRequestHeader("Authorization", "Basic ZXJvbDp0NHAxbiE=");


    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var data = JSON.parse(xmlhttp.responseText);
        document.getElementById("word").innerHTML = data.Wwords.Word;
        document.getElementById("word").setAttribute('href', "https://wordreference.com/" + data.Words.Language.toLowerCase() + "fr/" + data.Words.Word);
      }
    }

    xmlhttp.open("GET", "http://dic.puzzledge.org/words/random", true);
    xmlhttp.send();

  }

  getWord();
  getTwits();
}