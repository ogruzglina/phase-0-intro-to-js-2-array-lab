// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
console.log(destructivelyAppendCat('Ralph'));

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}
console.log(destructivelyPrependCat("Bob"));

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}
console.log(destructivelyRemoveLastCat());

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}
console.log(destructivelyRemoveFirstCat());

function appendCat(name) {
    const catsCopy = [...cats];
    catsCopy.splice(catsCopy.length, 0, name);
    return catsCopy;
}
console.log(appendCat("Broom"));

function prependCat(name) {
    const catsCopy = [...cats];
    catsCopy.splice(0, 0, name);
    return catsCopy;
}
console.log(prependCat("Arnold"));

function removeLastCat() {
    const catsCopy = cats.slice(0, cats.length - 1);
    return catsCopy;
}
console.log(removeLastCat());
console.log(cats);

function removeFirstCat() {
    const catsCopy = [...cats];
    catsCopy.splice(0, 1);
    return catsCopy;
}
console.log(removeFirstCat());
console.log(cats);
