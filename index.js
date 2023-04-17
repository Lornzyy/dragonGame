let xp =0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];


const storeBtn = document.querySelector("#store");
const caveBtn = document.querySelector("#cave");
const fightBtn = document.querySelector("#fight");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");
const text = document.querySelector("#explanation");


// initialize buttons

storeBtn.onclick = goStore;
caveBtn.onclick = goCave;
fightBtn.onclick = fightDragon;

//town function 

function goTown(){
    storeBtn.innerText = "Go to Store";
    caveBtn.innerText = "Go to cave";
    fightBtn.innerText = "Fight Dragon";
    text.innerText = "You are in the town square. You see a sigh that says \"store\" ";

    storeBtn.onclick = buyHealth;
    caveBtn.onclick = buyWeapon;
    fightBtn.onclick = goTown;

}



//store button function

function goStore(){

    storeBtn.innerText = "Buy health (10 gold)";
    caveBtn.innerText = "Buy weapon (30 gold)";
    fightBtn.innerText = "Go to town square";
    text.innerText = "You enter the store"

    storeBtn.onclick = buyHealth;
    caveBtn.onclick = buyWeapon;
    fightBtn.onclick = goTown;

}

function buyHealth(){
    
}

function buyWeapon(){

}



function goCave(){
    console.log("go to cave");
}

function fightDragon(){
    console.log("fight dragon");
}