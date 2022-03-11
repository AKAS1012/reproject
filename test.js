let recipeMap = new Map(['cucumber', 500], ['tomotoes', 350], ['onion', 50]);

for (let vegetable of recipeMap.keys){
    alert(vegetable);
}
for (let amount of recipeMap.values){
    alert(amount);
}
for (let entry of recipeMap){
    alert(entry);
}


let age = prompt("What is your age?", 18)

let welcome = (age<18)?
    () => alert('hello')
    :( ) => alert("greeting!");

welcome();