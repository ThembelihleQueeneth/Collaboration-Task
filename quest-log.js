//Step 1
const questLog = ["Collect 10 Firefly Wings" ,"Defeat the Goblin King" ,"Find the Lost Sword of Oakhaven"];

for(var i = 0; i<questLog.length; i++){
    console.log(questLog[i]);
}

//Step 2
console.log("The size of the log: "+questLog.length);

//Step 3
for(var j = 0; j<questLog.length; j++){
    console.log(questLog[0]);
    break;
}
//Step 4
questLog.push("Deliver the Royal Scroll");
for(var i = 0; i<questLog.length; i++){
    console.log("\n"+questLog[i]+"\n");
<<<<<<< HEAD
}

//Step 6
questLog.unshift("Rescue the Blacksmith's Cat");
for(var i = 0; i<questLog.length; i++){
    console.log("\n"+questLog[i]+"\n");
=======

}
//Step 5

console.log(questLog.pop());
console.log("updated array");
for(var i = 0; i<questLog.length; i++){
    console.log(questLog[i]);
>>>>>>> 9d4990c90f904d51258f7c3c45951f9fda8bef9c
}
//Step 7

console.log(questLog.shift());
console.log("updated array after shift");
for(var i = 0; i<questLog.length; i++){
    console.log(questLog[i]);
}

