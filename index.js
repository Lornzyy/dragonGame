let xp =0;
let health = 100;
let gold = 150;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick "];


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

const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button function": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sigh that says \"Store\" ."
    },
    {
        name: "store",
        "button text": ["Buy health(10 gold)", "Buy weapon(30 gold)", "Go to town square"],
        "button function": [buyHealth, buyWeapon, goTown],
        text: `You entered the store.\n Your inventory is now ${inventory}`
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button function": [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters."
    }
];

const weapons = [
    {
        name: "stick",
        power: 5
    },
    {
        name: "dagger",
        power: 30
    },
    {
        name: "claw hammer",
        power: 50
    },
    {
        name: "sword",
        power: 100
    }
];

// initialize buttons

storeBtn.onclick = goStore;
caveBtn.onclick = goCave;
fightBtn.onclick = fightDragon;

//update function

function update(location){
    storeBtn.innerText = location["button text"][0];
    caveBtn.innerText = location["button text"][1];
    fightBtn.innerText = location["button text"][2];
    text.innerText = location.text;

    storeBtn.onclick = location["button function"][0];
    caveBtn.onclick = location["button function"][1];
    fightBtn.onclick = location["button function"][2];

}

//town function 

function goTown(){

    update(locations[0]);

}



//store button function

function goStore(){

    update(locations[1]);
}

function buyHealth(){
    if (gold >= 10){
        gold -= 10;
        health += 10;
    
        goldText.innerText = gold;
        healthText.innerText = health;
    }
    else {
        text.innerText = "You do not have enough gold to buy health."

    }
}

function buyWeapon(){
    if (currentWeapon < (weapons.length - 1)){
        if (gold >= 30){
            gold -= 30;
            currentWeapon++;
        
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon]["name"];
            inventory.push (newWeapon);
            text.innerText = `You now have a ${newWeapon} as a new weapon.\nYour inventory is now ${inventory}`;
    
        }
        else {
            text.innerText = "You do not have enough gold to buy weapons."

        }
    } else {
        text.innerText = "You already have the most powerful weapon";
        caveBtn.innerText = "Sell weapon(15 gold)";
        caveBtn.onclick = sellWeapon;

    }
    
}

function sellWeapon(){
    if (inventory.length > 1){
        gold += 15;

        gold.innerText = gold;
        let currentWeapon = inventory.pop();
        text.innerText = `You have sold ${currentWeapon}. \n You have remained with${inventory}`;
    } else {
        text.innerText = "Don't sell your only weapon"
}

//cave button

function goCave(){
    update(locations[2])
}

function fightSlime(){

}

function fightBeast(){

}

//fight dragon
function fightDragon(){
    console.log("fight dragon");
}