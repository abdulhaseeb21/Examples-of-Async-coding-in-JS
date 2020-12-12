console.log('All food is not prepared');

function prepareBiryani(fakeError) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fakeError === 2) {
                console.log('Biryani is preparing')
                resolve('Biryani is prepared')
            }
            else {
                reject('Value is not accepted')
            }
        }, 1000)
    })
    return promise
}
function prepareFrenchToast() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('French toast is preparing');
            resolve('French toast is prepared')
        }, 2000)
    })
    return promise
}
function prepareCoffee() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Coffee is preparing');
            resolve('Coffee is prepared')
        }, 1500)
    })
    return promise
}
function prepareCake() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Cake is preparing');
            resolve('Cake is prepared')
        }, 1000)
    })
    return promise
}

function foodEated() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('All food is ready to eat')
            resolve('All food has been eated')
        }, 1000);
    })
    return promise
}

let startCooking = async () => {
    try {
        let biryani = await prepareBiryani(4)
        console.log(biryani);

        let frenchToast = await prepareFrenchToast()
        console.log(frenchToast);

        let coffee = await prepareCoffee()
        console.log(coffee);

        let cake = await prepareCake()
        console.log(cake);

        let eating = await foodEated()
        console.log(eating);
    }
    catch(error){
        console.log('Error ==', error);
    }
}
startCooking()
// small example of callback hell imagine how does the code looks if we had 50 tasks to perform one after the another
// prepareFood(function (value) {
//     console.log(value);
//     prepareFrenchToast(function (value) {
//         console.log(value);
//         prepareCoffee(function (value) {
//             console.log(value);
//             prepareCake(function (value) {
//                 console.log(value);
//                 foodEated('All food has been eated')
//             })
//         })
//     })
// })

// promises .then example 

// prepareFood()
//     .then((result) => {
//         console.log(result);
//         return prepareFrenchToast()
//     })
//     .then((result) => {
//         console.log(result);
//         return prepareCoffee()
//     })
//     .then((result) => {
//         console.log(result);
//         return prepareCake()
//     })
//     .then((result) => {
//         console.log(result);
//         return foodEated()
//     })
//     .then((result) => {
//         console.log(result);
//     })