//so an iife is a function that is automatically invoked, put () around the whole thing and () at the end, so no one has access to it.

const name = (function(){
    return "Devin";
})();

name;

//vs

const name1 = function(){
    return "Devin";
}

const newName = name1();
console.log(newName);

//seems faster

//wrapped in () so it is treated as a function expression rather than a function declaration

(function(){
    const variable = "Devin";
    console.log(variable);
})();
