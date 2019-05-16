const functions = {
    id: 'functions',
    title: 'Javascript Functions',
    text: `function anotherNiceFunction() {
    return 'I'm another function!'
}
anotherNiceFunction
function mathyFunction() {
    return 3 * 4;
}
mathyFunction
function anotherMathyFunction() {
    return (3 * 3) - 6;
}
anotherMathyFunction
function functionWithOneParameter(parameter) {
    return parameter
}`
};

const loops = {
    id: 'loops',
    title: 'Javascript Loops',
    text: `for(let i = 0; i < 100; i++) {
    console.log('The number is ', i);

for(let i = 0; i <= 50; i += 2) {
    console.log(i);
}

for(let i = 100; i > 0; i--) {
    console.log(i);
}`
};

const templatePassages = [functions, loops];

export default templatePassages;