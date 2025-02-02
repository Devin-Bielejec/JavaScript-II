// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const bird = "tweeter";
function myHouse(){
  const cat = "Momo";
  console.log(`my house can acess the ${bird} and ${cat} but not dog`);
  function myRoom(){
    const dog = "Mako";
    console.log(`${dog} says ruff`);
    console.log(`${cat} says meow because the room can access the cat, and the ${bird}`);
  }
  return myRoom;
}

myHouse();

const makoNoise = myHouse();
makoNoise();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 1;
  function storeMyCount(){
    return count++;
  }
  return storeMyCount;
};
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 1;
  console.log(count);
  let counterObj = {
    increment: function(){
      count++;
      return count;
    },
    decrement: function(){
      count--;
      return count;
    }
  };
  return counterObj;
};

const counterStuff = counterFactory();
console.log(counterStuff.increment());
console.log(counterStuff.decrement());
console.log(counterStuff.decrement());
console.log(counterStuff.decrement());
console.log(counterStuff.decrement());
console.log(counterStuff.increment());
