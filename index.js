
// 1. exersice

const getArea = (r) => Math.PI * (r ** 2);
const r = parseInt(prompt('Enter a radius for seeking area of circle'));
if (r === '' || r === null || r === 0) {
    console.log('Enter a radius of circle');
}
if (isNaN(r)) {
    console.log('Enter a number!!!')
} else if (isFinite(r) && r !== 0) {
    console.log(getArea(r));
}

// 2. exersice

const number = -2;
const number = parseInt(prompt('Enter digit'));
const getSqrt = number => {
    if (number === null || number === '') {
        console.log('You forgot to enter number');
    } else if (number <= 0) {
        console.log('Enter a positive digit');
    } else if (isNaN(parseInt(number)) && number !== 0) {
        console.log('You have just written not a numberm, please enter a correct value');
    } else {
        return Math.sqrt(number)
    }
};
const number2 = getSqrt(number)
number2 && console.log(number2)

// 3.
const myMath = {
_checkOnFalse: number => {
        if (number === null || number === '') {
            console.log('You forgot to enter number');

            return false
        } else if (isNaN(parseInt(number)) && number !== 0) {
            console.log('You have just written not a numberm, please enter a correct value');

            return false
        }

        return true
    },
    PI: () => 3.141592653589793,
    pow: function (number, degree) {
        if (!this._checkOnFalse(number) || !this._checkOnFalse(degree)) return 'Error'

        let result = 1;
        for (let i = 0; i <= degree; i++) {
            result *= number;
        }

        return result
    },
    abs: function (number) {
        if (!this._checkOnFalse(number)) return 'Error'

        return number < 0 ? -number : number
    },
    max: function (...digits) {

        return digits.reduce((acc, next) => acc < next ? next : acc, digits[0])
    },

    min: function (...digits) {

        return digits.reduce((acc, next) => next < acc ? next : acc, digits[0])
    },
}

// console.log(myMath.PI());
// console.log(myMath.pow(2, 2));
// console.log(myMath.abs('ssds'));
// console.log(myMath.max(2,-2,-4,22,8))
// console.log(myMath.min(2,-2,-4,22,8))