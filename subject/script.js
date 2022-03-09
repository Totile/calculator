let operande = "°"; //not mandatory to initialize the variable
/*
Quelques conseils de dev:
- You Ain't Gonna Need It, c'est à dire qu'on fait le plus simple avant de faire de la surconception
- Des espaces un peu partout, c'est pas mal
- On fait attention aux noms des variables, un code il est pas fait pour fonctionner, mais bien pour être relu. Ainsi, si une fonction
- Single Responsability Principe (SRP) pour que tous fonctionne bien
- Don't Repeat Yourself, si on en est à refaire plusieurs fois le même code, on le factorise pour que les changements se propulsent plus vite
- On peut refactoriser un code après l'avoir écrit, pour que le code soit plus efficace et compréhensible une fois que l'on a passé les premières difficultés 
- éviter les lignes super larges
- les commentaires sont sur une ligne séparée juste au dessus du code, pour être plus simple à maintenir
- on met tous dans des fonctions, pour être le plus résilient possible, car c'est comme ça qu'on fait planter des codes
- éviter les variables globales, car ça fait des interférences avec les autres librairies de la page. Pour éviter cela, on met les variables d'états dans une classe, ou bien dans une fonction
*/
let retenue = "0";

function printTargetToConsole(event) {
    console.log(event.target.textContent+"!");
}

function printTargetToCalc(event) {
    let display = document.getElementsByClassName("calculator__display");
    display[0].textContent = event.target.textContent;
}

function changeNumberToDisplay(event) {
    let display = document.getElementsByClassName("calculator__display");
    let entry = display[0].textContent;
    if (display[0].textContent == "0" ) {
        display[0].textContent = event.target.textContent;
    }
    else {
        display[0].textContent = display[0].textContent + event.target.textContent;
    }

    switch(event.target.textContent) {
        case "AC":
            display[0].textContent = 0;
            break;

        case "+":
            retenue = parseFloat(entry);
            operande = "+";
            display[0].textContent = 0;
            console.log(retenue);
            break;

        case "=":
            retenue = parseFloat(entry);
            break;
    }
}

window.addEventListener("load", () => {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        //button.addEventListener("click", printTargetToCalc);
        //button.addEventListener("click", printTargetToConsole);
        button.addEventListener("click", changeNumberToDisplay);
    }
})