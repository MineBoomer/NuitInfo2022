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

    //Fin
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
    p.innerHTML = "..."; //Texte de l'histoire
}

function a2(){
    var button = document.getElementById("self");
    var newButton = document.createElement("a");
    newButton.setAttribute("href", "#");
    newButton.setAttribute("class", "a-low-button");
    newButton.setAttribute("id", "self");
    newButton.innerHTML = "Non"; //Texte bouton 2
    var parentButton = button.parentElement;
    parentButton.removeChild(button);
    parentButton.appendChild(newButton);

    //Fin
    var button2 = document.getElementById("self2");
    var newButton2 = document.createElement("a");
    newButton.setAttribute("href", "#");
    newButton2.setAttribute("class", "a-low-button");
    newButton2.setAttribute("id", "self2");

    newButton2.innerHTML = "Oui"; //Texte bouton 1

    var parentButton = button2.parentElement;
    parentButton.removeChild(button2);
    parentButton.appendChild(newButton2);

    var p = document.getElementById("text");
    p.innerHTML = "J'ai compris. ;) On va chez moi ?"; //Texte de l'histoire
}