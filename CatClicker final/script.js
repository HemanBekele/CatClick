//Variables
let visual = 0;
let amountPurrs = 0;
let upgradeUno = 0;
let fish = 4;

//Functions & if Statements
function clickTheCat() {
    amountPurrs++
    amountPurrs+=upgradeUno
    document.getElementById("visuals").innerHTML = amountPurrs;
}

function clickTheFirstUpgrade() {
    if (amountPurrs < 50) {
        console.log("hi")
    }else {  
        amountPurrs-=50;
        document.getElementById("visuals").innerHTML = amountPurrs;
        upgradeUno++
        if (amountPurrs < 0) {
            amountPurrs = 0;
            document.getElementById("visuals").innerHTML = 0;
        } }
}

function clickTheSecondUpgrade() {
    if (amountPurrs < 50) {
        console.log("hi")
    }else {
amountPurrs-=200;
document.getElementById("visuals").innerHTML = amountPurrs;
setInterval(function (){ 
    amountPurrs+=3
    document.getElementById("visuals").innerHTML = amountPurrs;
}, 5000);
if (amountPurrs < 0) {
    amountPurrs = 0;
    document.getElementById("visuals").innerHTML = 0;
}    
    }
}

function clickTheThirdUpgrade() {
    if (amountPurrs < 50) {
        console.log("hi")
    }else {
    amountPurrs-=50;
    document.getElementById("visuals").innerHTML = amountPurrs;
    document.body.style.backgroundImage = "url('img/back.png')";
    if (amountPurrs < 0) {
        amountPurrs = 0;
        document.getElementById("visuals").innerHTML = 0;
    }    
}
}

function clickTheFourthUpgrade() {
    if (amountPurrs < 50) {
        console.log("hi")
    }else {
    amountPurrs-= 10000;
    document.getElementById("visuals").innerHTML = amountPurrs;
    fish-=1
    document.getElementById("sardines").innerHTML = fish;
    if (fish == 0) {
        var content = '<p style="text-align: center; padding-top: 280px; font-size: 30px;">You win!</p>';
    document.getElementsByTagName('body')[0].innerHTML = content; 
    }
    if (amountPurrs < 0) {
        amountPurrs = 0;
        document.getElementById("visuals").innerHTML = 0;
    }    
}
}

