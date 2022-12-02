function a1(){
    var button = document.getElementById("self");
    var newButton = document.createElement("a");
    newButton.setAttribute("onclick", "a2()"); //Prochaine fonction
    newButton.setAttribute("class", "a-low-button");
    newButton.setAttribute("id", "self");
    newButton.innerHTML = "Suivant"; //Texte bouton 2
    var parentButton = button.parentElement;
    parentButton.removeChild(button);
    parentButton.appendChild(newButton);

    var button2 = document.getElementById("self2");
    var newButton2 = document.createElement("a");
    newButton2.setAttribute("onclick", "");
    newButton2.setAttribute("class", "a-low-button");
    newButton2.setAttribute("id", "self2");

    newButton2.innerHTML = ""; //Texte bouton 1

    var parentButton = button2.parentElement;
    parentButton.removeChild(button2);
    parentButton.appendChild(newButton2);

    var p = document.getElementById("text");
    p.innerHTML = "Hey !!! Camille ! Comment ça va ?"; //Texte de l'histoire
}

function a2(){
    var button = document.getElementById("self");
    var newButton = document.createElement("a");
    newButton.setAttribute("onclick", "a3()");
    newButton.setAttribute("class", "a-low-button");
    newButton.setAttribute("id", "self");
    newButton.innerHTML = "Suivant";
    var parentButton = button.parentElement;
    parentButton.removeChild(button);
    parentButton.appendChild(newButton);

    var button2 = document.getElementById("self2");
    var newButton2 = document.createElement("a");
    newButton2.setAttribute("onclick", "");
    newButton2.setAttribute("class", "a-low-button");
    newButton2.setAttribute("id", "self2");
    newButton2.innerHTML = "";
    var parentButton = button2.parentElement;
    parentButton.removeChild(button2);
    parentButton.appendChild(newButton2);

    var p = document.getElementById("text");
    p.innerHTML = "*Vous discutez longtemps avec Camille*";
}

function a3(){
    var button = document.getElementById("self");
    var newButton = document.createElement("a");
    newButton.setAttribute("href", "#");
    newButton.setAttribute("class", "a-low-button");
    newButton.setAttribute("id", "self");
    newButton.innerHTML = "Suivant";
    var parentButton = button.parentElement;
    parentButton.removeChild(button);
    parentButton.appendChild(newButton);

    var button2 = document.getElementById("self2");
    var newButton2 = document.createElement("a");
    newButton2.setAttribute("onclick", "");
    newButton2.setAttribute("class", "a-low-button");
    newButton2.setAttribute("id", "self2");
    newButton2.innerHTML = "";
    var parentButton = button2.parentElement;
    parentButton.removeChild(button2);
    parentButton.appendChild(newButton2);

    var p = document.getElementById("text");
    p.innerHTML = "*Avec tout ce que vous avez bu, vous ressentez l'envie de faire un tour au petit coin...*"; // Rediredction vers le chiottes ^^
}

function b1(){
    var button = document.getElementById("self");
    var newButton = document.createElement("a");
    newButton.setAttribute("onclick", "b4()");
    newButton.setAttribute("class", "a-low-button");
    newButton.setAttribute("id", "self");
    newButton.innerHTML = "Danser avec tout le monde";
    var parentButton = button.parentElement;
    parentButton.removeChild(button);
    parentButton.appendChild(newButton);

    var button2 = document.getElementById("self2");
    var newButton2 = document.createElement("a");
    newButton2.setAttribute("onclick", "b2()");
    newButton2.setAttribute("class", "a-low-button");
    newButton2.setAttribute("id", "self2");
    newButton2.innerHTML = "Danser avec sa crush";
    var parentButton = button2.parentElement;
    parentButton.removeChild(button2);
    parentButton.appendChild(newButton2);

    var p = document.getElementById("text");
    p.innerHTML = "Re !";
}

function b2(){
    var button = document.getElementById("self");
    var newButton = document.createElement("a");
    newButton.setAttribute("onclick", "b3()");
    newButton.setAttribute("class", "a-low-button");
    newButton.setAttribute("id", "self");
    newButton.innerHTML = "Suivant";
    var parentButton = button.parentElement;
    parentButton.removeChild(button);
    parentButton.appendChild(newButton);

    var button2 = document.getElementById("self2");
    var newButton2 = document.createElement("a");
    newButton2.setAttribute("onclick", "");
    newButton2.setAttribute("class", "a-low-button");
    newButton2.setAttribute("id", "self2");
    newButton2.innerHTML = "";
    var parentButton = button2.parentElement;
    parentButton.removeChild(button2);
    parentButton.appendChild(newButton2);

    var p = document.getElementById("text");
    p.innerHTML = "Camille: Tu danse super bien !";
}

function a3(){
    var button = document.getElementById("self");
    var newButton = document.createElement("a");
    newButton.setAttribute("onclick", "a4()");
    newButton.setAttribute("class", "a-low-button");
    newButton.setAttribute("id", "self");
    newButton.innerHTML = "Suivant";
    var parentButton = button.parentElement;
    parentButton.removeChild(button);
    parentButton.appendChild(newButton);

    var button2 = document.getElementById("self2");
    var newButton2 = document.createElement("a");
    newButton2.setAttribute("onclick", "");
    newButton2.setAttribute("class", "a-low-button");
    newButton2.setAttribute("id", "self2");
    newButton2.innerHTML = "";
    var parentButton = button2.parentElement;
    parentButton.removeChild(button2);
    parentButton.appendChild(newButton2);

    var p = document.getElementById("text");
    p.innerHTML = "Oh génial, un slow, c'est partii !!";
}

function a4(){
    var button = document.getElementById("self");
    var newButton = document.createElement("a");
    newButton.setAttribute("onclick", "");
    newButton.setAttribute("class", "a-low-button");
    newButton.setAttribute("id", "self");
    newButton.innerHTML = "Non";
    var parentButton = button.parentElement;
    parentButton.removeChild(button);
    parentButton.appendChild(newButton);

    var button2 = document.getElementById("self2");
    var newButton2 = document.createElement("a");
    newButton2.setAttribute("href", "#");
    newButton2.setAttribute("class", "a-low-button");
    newButton2.setAttribute("id", "self2");
    newButton2.innerHTML = "Oui";
    var parentButton = button2.parentElement;
    parentButton.removeChild(button2);
    parentButton.appendChild(newButton2);

    var p = document.getElementById("text");
    p.innerHTML = "On sort ?";
}