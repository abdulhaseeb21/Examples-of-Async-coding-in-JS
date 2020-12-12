console.log('All food is not prepared');


function prepareFood(callback) {
    setTimeout(() => {
        console.log('Food is preparing')
        callback('Food is prepared')
    }, 1000)
}



function prepareFrenchToast(callback) {
    setTimeout(() => {
        console.log('French toast is preparing');
        callback('French toast is prepared')
    }, 2000)
}
function prepareCoffee(callback) {
    setTimeout(() => {
        console.log('Coffee is preparing');
        callback('Coffee is prepared')
    }, 1500)
}
function prepareCake(callback) {
    setTimeout(() => {
        console.log('Cake is preparing');
        callback('Cake is prepared')
    }, 1000)
}

function foodEated(value) {
    setTimeout(() => console.log(value), 1000);
}

// small example of callback hell imagine how does the code looks if we had 50 tasks to perform one after the another
prepareFood(function (value) {
    console.log(value);
    prepareFrenchToast(function (value) {
        console.log(value);
        prepareCoffee(function (value) {
            console.log(value);
            prepareCake(function (value) {
                console.log(value);
                foodEated('All food has been eated')
            })
        })
    })
})
