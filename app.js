const pokemon = require(`./data.js`)

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    // difficulty: `Hard`
  }
//   console.dir(pokemon, { maxArrayLength: null })

console.log([pokemon[58].name])
console.log(game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?
// 


// https://www.youtube.com/watch?v=w9078dAjcrY  useed this video to assist me on a few things. I really liked the way some things weree expllained and showed here
Solve Exercise 3 here:

// *added difficulty to the game object then realized that I need to add it in without just typing it in

*/

game.difficulty = `Hard`;// this is actually adding the difficulty to the game object
/*
Exercise 4

1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
const starters = pokemon.filter(pokemon => pokemon.starter === true);//learned the filter methon in the youtube video above
console.log(starters)//used the filter to list all starters available. then I picked one on line 48

const starterPokemon = starters[2]
console.log(starterPokemon);

game.party.push(starterPokemon);
console.log(game)


/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
// game.party.push(pokemon.number[151])//failed attempt

game.party.push(pokemon.find(pokemon => pokemon.number === 151))
game.party.push(pokemon.find(pokemon => pokemon.number === 26))
game.party.push(pokemon.find(pokemon => pokemon.number === 6))
console.log(game.party);


/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

game.gyms.forEach(gym => {
    if (gym.difficulty < 3 && gym.completed === false) {
        gym.completed = true;
    }
})
console.log(game.gyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
game.party.splice(0, 1, pokemon.find(pokemon => pokemon.number === 8)) 
console.log(game.party)

// the slice method worked great for this. it did take me a bit to figure out how to grab the new pokemon but I just ended up using the `find()` method and that worked well.

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

game.party.forEach(pokemon => {
    console.log(pokemon.name)
})


/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

console.log(starters)// filtered the starters in the beginning of the lab. 


/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

// game.catchPokemon = function(pokemonObj) {
//     game.party.push(pokemonObj)
// }
game.catchPokemon = function(pokemonObj) {
    this.party.push(pokemonObj);   ////I learned to use `this` from Microsoft copilot when I was asking it to check over my code. it explained that in this situation, using `game.party.push` would work find, but if I use `this` it can be more flexible and moved to another object in the future.
};

// catchPokemon(pokemon.name[`mewtwo`]) did not work right
console.log(game.catchPokemon)//for me to test that I added the function right

game.catchPokemon(pokemon.find(pokemon => pokemon.number === 150)) /// this took me 30 minutes to figure out that I wasnt spelling Mewtwo with a capital M. and I only found out when I switched up to using the Find by number
console.log(game.party)


/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

game.catchPokemon = function(pokemonObj) {
    this.party.push(pokemonObj)
    const pokeball = this.items.find(item => item.name === `pokeball`);
    // game.items.filter(item => item.name === `pokeball` I dont know why the filter did not wortk. but I got it by using an if statement. 
        // item.pokeball.quantity - 1   
    if (pokeball.quantity > 0) {
        pokeball.quantity -= 1;
    }   
}
console.log(game.items)


game.catchPokemon(pokemon.find(pokemon => pokemon.number === 144))
console.log(game.items);



/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

game.gyms.forEach(gym => {
  if (gym.difficulty < 6 && gym.completed === false) {
    gym.completed = true
  }
})
console.log(game.gyms)


/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
game.gymStatus = function() {
  const gymTally = { completed: 0, incomplete: 0}
  game.gyms.forEach(gym => {
    if (gym.completed === true) {
      gymTally.completed += 1

    }
    if (gym.completed === false) {
      gymTally.incomplete -= 1
    }
    // console.log(gymTally)
  }
)
console.log(gymTally);
}
// console.log(game.gymStatus());



game.gymStatus()


/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
game.partyCount = function() {
  const partySize = (game.party.length)
  console.log(partySize);
  
  return partySize 

}
game.partyCount()

// console.log(game.party);


/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

game.gyms.forEach(gym => {
  if (gym.difficulty < 8 && gym.completed === false) {
    gym.completed = true
  }
  
})
game.gymStatus()



/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game);
console.log(`I am not leaving the game unfinished`);
game.gyms.forEach(gym => {
  if (gym.difficulty === 8) {
    gym.completed = true
  }
})
game.gymStatus()

