// Задание 1
function sum(e){
    let itog = 0;
    for(let i = 0; i <= e; i++){
        itog += i;
    }
    if (itog === 0){
        itog = 1;
    }
    console.log(itog)
    return itog
};
console.log(sum(5) === 15);
console.log(sum(0) === 1);

// Задание 2

function getWinner(array){
    let points = []
    array.forEach(element => {
        element.split("-", 2)
    });
}

getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
// getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
// getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
