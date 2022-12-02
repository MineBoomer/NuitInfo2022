function a1(){
    var button = document.getElementById("self");
    var newButton = document.createElement("a");
    newButton.setAttribute("onclick", "a2()"); //Prochaine fonction
    newButton.setAttribute("class", "a-low-button");
    newButton.setAttribute("id", "self");
    newButton.innerHTML = "Non"; //Texte bouton 2
    var parentButton = button.parentElement;
    parentButton.removeChild(button);
    parentButton.appendChild(newButton);

    //Fin
    var button2 = document.getElementById("self2");
    var newButton2 = document.createElement("a");
    newButton2.setAttribute("onclick", "");
    newButton2.setAttribute("class", "a-low-button");
    newButton2.setAttribute("id", "self2");

    newButton2.innerHTML = "Oui"; //Texte bouton 1

    var parentButton = button2.parentElement;
    parentButton.removeChild(button2);
    parentButton.appendChild(newButton2);

    var p = document.getElementById("text");
    p.innerHTML = "Je m'assoie quand même ?"; //Texte de l'histoire
}

function a2(){
    var button = document.getElementById("self");
    var newButton = document.createElement("a");
    newButton.setAttribute("onclick", "a3()"); //Prochaine fonction
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
    p.innerHTML = "Pff...\n*psssss*\n*plic plic*"; //Texte de l'histoire
}

function a3(){
    var button = document.getElementById("self");
    var newButton = document.createElement("a");
    newButton.setAttribute("class", "a-low-button");
    newButton.setAttribute("id", "self");
    newButton.setAttribute("href", "./soiree2.html");
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
    p.innerHTML = "*Se lave les mains*"; //Texte de l'histoire
}
