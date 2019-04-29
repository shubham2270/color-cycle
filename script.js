const box = document.getElementById('box');
const button = document.getElementById('btn');
const message = document.getElementById('message');

const startR = document.getElementById('startR');
const startG = document.getElementById('startG');
const startB = document.getElementById('startB');

const incrR = document.getElementById('incrementR')
const incrG = document.getElementById('incrementG')
const incrB = document.getElementById('incrementB')

//converts Hex value to deciaml value
// let R = parseInt(startR.value, 16);
// let G = parseInt(startG.value, 16);
// let B = parseInt(startB.value, 16);

// console.log('R ', R);
// console.log('G ', G);
// console.log('B ', B);

// let Ri = parseInt(incrR.value, 16);
// let Gi = parseInt(incrG.value, 16);
// let Bi = parseInt(incrB.value, 16);



// console.log(Ri);
// console.log(Gi);
// console.log(Bi);

//Changes the box bg color as per user entered Hex value
const startingUserHexValue = () => {
    let R = startR.value;
    let G = startG.value;
    let B = startB.value;

    let Ri = incrR.value;
    let Gi = incrG.value;
    let Bi = incrB.value;

    // for(let i = R; i <= 255; i += Ri) {
    //     if (i > 255) {
    //         i = R
    //     }
    //     R = R + Ri;
    //     console.log(R)
    // }

    // for(let i = G; i <= 255; i += Gi) {
    //     if (i > 255) {
    //         i = G
    //     }
    //     G = G + Gi;
    //     console.log(G)
    // }

    // for(let i = B; i <= 255; i += Bi) {
    //     if (i > 255) {
    //         i = B
    //     }
    //     B = B + Bi;
    //     console.log(B)
    // }

    //adds increment value to starting value
    //  R = R + Ri;
    //  G = R + Gi;
    //  B = R + Bi;

    //increment starting value with this value
    // Ri += Ri;
    // Gi += Gi;
    // Bi += Bi;
    box.style.background = `#${R}${G}${B}`
     setTimeout(() => {
        box.style.background = `#${Ri}${Gi}${Bi}`
     }, 250)
    // box.style.background = `rgb(${R}, ${G}, ${B})`;

    console.log('runned');

}

//Runs the startingUserHexValue function every 250ms
let cycleColor
const startCycleColor = () => {
    cycleColor = setInterval(() => {
        startingUserHexValue();
    }, 1000)
}

//Clear intervals
const stopCycle = () => {
    clearInterval(cycleColor)
}

//handles when to start and stop on clicking button
let toggle = false;
const toggleHandler = () => {
    if (toggle) {
        button.innerHTML = 'START'
        stopCycle();
        toggle = !toggle;
    } else {
        button.innerHTML = 'STOP'
        startCycleColor();
        toggle = !toggle;
    }

}

// button.addEventListener('click', startCycleColor);
button.addEventListener('click', toggleHandler);


//#C96CFE
//#FE10B7