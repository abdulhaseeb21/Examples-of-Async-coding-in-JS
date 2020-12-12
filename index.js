console.log('All food is not prepared');


function prepareFood(callback) {
    setTimeout(() => {
        console.log('Food is preparing')
        callback('Food is prepared')
    }, 1000)
}

function foodPrepared(value) {
    console.log(value);
    prepareFrenchToast(frenchToastPrepared)
}

function prepareFrenchToast(callback) {
    setTimeout(() => {
        console.log('French toast is preparing');
        callback('French toast is prepared')
    }, 2000)
}

function frenchToastPrepared(value) {
    console.log(value);
    prepareCoffee(coffeePrepared)
}

function prepareCoffee(callback){
    setTimeout(() => {
        console.log('Coffee is preparing');
        callback('Coffee is prepared')
    },1500)
}
function coffeePrepared(value){
    console.log(value);
    foodEated('All food has been eated')
}
prepareFood(foodPrepared)

function foodEated(value){
   console.log(value);
}