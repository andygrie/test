// KAA: die Schleife ist Code-Redundant!
//      die Fehler und die eigenen Ideen heben sich auf aber für ein Sehr Gut, dann doch ein spur zu wenig 

var options = [
    "Disable",
    "Hide",
    "DelTextAndRemoveEventlistener"
];



function GenerateButtons() {
    var count = document.getElementById("userInput").value;
    document.getElementById("userInput").value = "";
    var headingNode = document.createElement("h2");
    headingNode.setAttribute("id", "Buttons");         // KAA: pupils??
    var headingText;
    // KAA: (+)
    if(isNaN(count))
    {
        headingText = document.createTextNode("Only numbers");
        headingNode.appendChild(headingText);
        document.getElementById("buttonPlaceHolder").appendChild(headingNode);
    }
    else
    {
        headingText = document.createTextNode("Generated buttons show up here");
        headingNode.appendChild(headingText);
        document.getElementById("buttonPlaceHolder").appendChild(headingNode);
        document.getElementById("inputButton").disabled = true;
        document.getElementById("userInput").disabled = true;
        for (var i = 0; i < count; i++) {
            var newBtn = document.createElement("input");
            newBtn.setAttribute("type", "button");
            // KAA: dem Name - Attribute direkt die Funktion zuweisen ist nicht gut
            newBtn.setAttribute("name", options[Math.floor(Math.random() * 3)]);
            newBtn.setAttribute("id", "btn" + i);
            newBtn.setAttribute("class", "PLFButton");
            newBtn.setAttribute("value", "?");
            newBtn.addEventListener("click", function () { doButtonOperation(this) });
            document.getElementById("buttonPlaceHolder").appendChild(newBtn);
        }
    }
    
}

function doButtonOperation(button) {
    var name = button.name;
    var length = document.getElementsByName(name).length;

    // KAA: die Schleife ist Code-Redundant!
    switch (name) {
        case options[0]:
            for (var i = 0; i < length; i++) {
                Disable(document.getElementsByName(name)[i]);
            }
            break;
        case options[1]:
            for (var i = 0; i < length; i++) {
                Hide(document.getElementsByName(name)[i]);
            }
            break;
        case options[2]:
            for (var i = 0; i < length; i++) {
                DelTextAndRemoveEventlistener(document.getElementsByName(name)[i]);
            }
            break;
        default:
            console.log("wrong name");
            break;
    }

}

function Disable(button) {
    button.classList.remove("PLFButton");
}
function Hide(button) {
    button.style.display = "none";
}

function DelTextAndRemoveEventlistener(button) {
    button.removeEventListener("click", doButtonOperation);
    button.value = "!";
}