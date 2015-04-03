window.onload = function() {

  function getTwits() {
    var xmlhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }


    xmlhttp.onreadystatechange = function() {
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


    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

        var data = JSON.parse(xmlhttp.responseText);
        console.log(data);
        document.getElementById("word").innerHTML = data.Words[0].Word;
        document.getElementById("word").setAttribute('href', "https://wordreference.com/" + data.Words[0].Language.toLowerCase() + "fr/" + data.Words.Word);
      }
    }

    xmlhttp.open("GET", "http://localhost:8083/words/random", true);
    xmlhttp.send();

  }

  getWord();
  getTwits();
}