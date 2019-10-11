//Mad Lib
"use strict";

//Event Listener
document.getElementById('btn').addEventListener("click", addResults);

//Event Functions
function addResults() {
    //Input
    let Verb = document.getElementById("ing").value;
    let pluralNoun = document.getElementById("plural").value;
    let Adjective= document.getElementById("adjective").value;
    let presentTenseVerb= document.getElementById("present").value;
    let Noun= document.getElementById("noun").value;

    //Build a Message
    let message = ' “There are too many ' +  Verb + " " + pluralNoun  +  ' on this ' + Adjective  + ' airplane!”, I screamed.  “Somebody has to ' +  presentTenseVerb + ' on the '+ Noun + ' to solve this problem!" ';


    //Output message
    document.getElementById("results").innerHTML=message;
    document.getElementById("results").style.border="1px solid orange";
    document.getElementById("results").style.fontStyle=" italic";
    document.getElementById("results").style.fontSize=" 18px";
}