/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/

 /*******************
 * QUERY SELECTORS *
 *******************/

let d6Img = document.querySelector("#d6-roll");
let dbl6Img = document.querySelector("#double-d6-buttons");
let dbl_img1 = document.querySelector('#double-d6-roll-1');
let dbl_img2 = document.querySelector('#double-d6-roll-2');
let d12Roll = document.querySelector("#d12-roll");
let d20Roll = document.querySelector("#d20-roll");

let mean_d6 = document.querySelector('#d6-rolls-mean');
let mean_dblD6 = document.querySelector("#double-d6-rolls-mean");
let mean_twelves = document.querySelector("#d12-rolls-mean");
let mean_twenties = document.querySelector("#d20-rolls-mean");

let resetButton = document.querySelector("#reset-button");

/*******************
 * EVENT LISTENERS *
 *******************/
d6Img.addEventListener('click', d6RollFunction);
dbl6Img.addEventListener('click', double6RollFunction);
d12Roll.addEventListener('click', twelveRollFunction)
d20Roll.addEventListener('click', d20RollFunction);

d6Img.addEventListener('click', d6Mean);
dbl6Img.addEventListener('click', dbl6Mean);
d12Roll.addEventListener('click', twelvesMean);
d20Roll.addEventListener('click', d20Mean);

resetButton.addEventListener('click', resetFunction);

/******************
 * RESET FUNCTION *
 ******************/
resetFunction(); // call function so that everything starts at reset 

function resetFunction(){
    console.log("Reset button clicked");
    // Empty all arrays
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];
    // Change dice button back to starting images
    d6Img.src = "./images/start/d6.png";
    dbl_img1.src = "./images/start/d6.png";
    dbl_img2.src = "./images/start/d6.png";
    d12Roll.src = "./images/start/d12.jpeg";
    d20Roll.src = "./images/start/d20.jpg";
    // Change text in mean areas to N/A
    mean_d6.innerText = "N/A"
    mean_dblD6.innerText = "N/A"
    mean_twelves.innerText = "N/A"
    mean_twenties.innerText = "N/A"
};


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function d6RollFunction(){
    let result = getRandomNumber(6);
    console.log(result);

    if (result === 1){
        d6Img.src = "./images/d6/1.png"
    } else if (result === 2){
        d6Img.src = "./images/d6/2.png"
    } else if (result === 3){
        d6Img.src = "./images/d6/3.png"
    } else if (result === 4){
        d6Img.src = "./images/d6/4.png"
    } else if (result === 5){
        d6Img.src = "./images/d6/5.png"
    } else if (result === 6){
        d6Img.src = "./images/d6/6.png"
    } 

    sixes.push(result);
    console.log(sixes);
}
 
function double6RollFunction(){
    let result = getRandomNumber(6);
    let resultB = getRandomNumber(6);
    console.log(result, resultB);

    if (result === 1){
        dbl_img1.src = "./images/d6/1.png"
    } else if (result === 2){
        dbl_img1.src = "./images/d6/2.png"
    } else if (result === 3){
        dbl_img1.src = "./images/d6/3.png"
    } else if (result === 4){
        dbl_img1.src = "./images/d6/4.png"
    } else if (result === 5){
        dbl_img1.src = "./images/d6/5.png"
    } else if (result === 6){
        dbl_img1.src = "./images/d6/6.png"
    } if (resultB === 1){
        dbl_img2.src = "./images/d6/1.png"
    } else if (resultB === 2){
        dbl_img2.src = "./images/d6/2.png"
    } else if (resultB === 3){
        dbl_img2.src = "./images/d6/3.png"
    } else if (resultB === 4){
        dbl_img2.src = "./images/d6/4.png"
    } else if (resultB === 5){
        dbl_img2.src = "./images/d6/5.png"
    } else if (resultB === 6){
        dbl_img2.src = "./images/d6/6.png"
    } 
    
    doubleSixes.push(result + resultB);
    console.log(doubleSixes);
}

function twelveRollFunction(){
    let result = getRandomNumber(12);
    console.log(result);

    if (result === 1){
        d12Roll.src = "./images/numbers/1.png"
    } else if (result === 2){
        d12Roll.src = "./images/numbers/2.png"
    } else if (result === 3){
        d12Roll.src = "./images/numbers/3.png"
    } else if (result === 4){
        d12Roll.src = "./images/numbers/4.png"
    } else if (result === 5){
        d12Roll.src = "./images/numbers/5.png"
    } else if (result === 6){
        d12Roll.src = "./images/numbers/6.png"
    } else if (result === 7){
        d12Roll.src = "./images/numbers/7.png"
    } else if (result === 8){
        d12Roll.src = "./images/numbers/8.png"
    } else if (result === 9){
        d12Roll.src = "./images/numbers/9.png"
    } else if (result === 10){
        d12Roll.src = "./images/numbers/10.png"
    } else if (result === 11){
        d12Roll.src = "./images/numbers/11.png"
    } else if (result === 12){
        d12Roll.src = "./images/numbers/12.png"
    } 

    twelves.push(result);
    console.log(twelves);
}

function d20RollFunction(){
    let result = getRandomNumber(20);
    console.log(result);

    if (result === 1){
        d20Roll.src = "./images/numbers/1.png"
    } else if (result === 2){
        d20Roll.src = "./images/numbers/2.png"
    } else if (result === 3){
        d20Roll.src = "./images/numbers/3.png"
    } else if (result === 4){
        d20Roll.src = "./images/numbers/4.png"
    } else if (result === 5){
        d20Roll.src = "./images/numbers/5.png"
    } else if (result === 6){
        d20Roll.src = "./images/numbers/6.png"
    } else if (result === 7){
        d20Roll.src = "./images/numbers/7.png"
    } else if (result === 8){
        d20Roll.src = "./images/numbers/8.png"
    } else if (result === 9){
        d20Roll.src = "./images/numbers/9.png"
    } else if (result === 10){
        d20Roll.src = "./images/numbers/10.png"
    } else if (result === 11){
        d20Roll.src = "./images/numbers/11.png"
    } else if (result === 12){
        d20Roll.src = "./images/numbers/12.png"
    } else if (result === 13){
        d20Roll.src = "./images/numbers/13.png"
    } else if (result === 14){
        d20Roll.src = "./images/numbers/14.png"
    } else if (result === 15){
        d20Roll.src = "./images/numbers/15.png"
    } else if (result === 16){
        d20Roll.src = "./images/numbers/16.png"
    } else if (result === 17){
        d20Roll.src = "./images/numbers/17.png"
    } else if (result === 18){
        d20Roll.src = "./images/numbers/18.png"
    } else if (result === 19){
        d20Roll.src = "./images/numbers/19.png"
    } else if (result === 20){
        d20Roll.src = "./images/numbers/20.png"
    } 
    twenties.push(result)
    console.log(twenties)
}
/****************
 * MATH SECTION *
 ****************/

function d6Mean(arr){
    let sum = 0
    let mean = 0
    for(let i = 0; i < sixes.length; i++){
        sum += sixes[i];
    }
    mean = sum / sixes.length
    return mean_d6.innerText = mean
 }

function dbl6Mean(arr){
    let sum = 0
    let mean = 0
    for(let i = 0; i < doubleSixes.length; i++){
        sum += doubleSixes[i];
    }
    mean = sum / doubleSixes.length
    return mean_dblD6.innerText = mean
}

function twelvesMean(arr){
    let sum = 0
    let mean = 0
    for(let i = 0; i < twelves.length; i++){
        sum += twelves[i];
    }
    mean = sum / twelves.length
    return mean_twelves.innerText = mean
}

function d20Mean(arr){
    let sum = 0
    let mean = 0
    for(let i = 0; i < twenties.length; i++){
        sum += twenties[i];
    }
    mean = sum / twenties.length
    return mean_twenties.innerText = mean
 }