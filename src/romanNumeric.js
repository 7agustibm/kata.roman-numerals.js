'use strict';

const numberOne = 'I';
const numberFive = 'V';
const numberFour = numberOne + numberFive;
const numberTen = 'X';
const numberNine = numberOne + numberTen;
const numberFifty = 'L';
const numberForty = numberTen + numberFifty;
const numberOneHundred = 'C';
const numberNinety = numberTen + numberOneHundred;
const numberFiveHundred = 'D';
const numberFourHundred = numberOneHundred + numberFiveHundred;
const numberOneThunred = 'M';
const numberNineHundred = numberOneHundred + numberOneThunred;

let OneUnit, FourUnit, FiveUnit, NineUnit;

function getFirstThreeNumbers(numberOfRepeat, stringForRepeat) {
    return stringForRepeat.repeat(numberOfRepeat);
}

function setUpUnits(zeros) {
    switch (zeros) {
        case 1:
            OneUnit = numberTen;
            FourUnit = numberForty;
            FiveUnit = numberFifty;
            NineUnit = numberNinety;
            break;
        case 2:
            OneUnit = numberOneHundred;
            FourUnit = numberFourHundred;
            FiveUnit = numberFiveHundred;
            NineUnit = numberNineHundred;
            break;
        default:
            OneUnit = numberOne;
            FourUnit = numberFour;
            FiveUnit = numberFive;
            NineUnit = numberNine;
    }
}
function getValue(unit) {
    let result;
    switch (unit) {
        case 4:
            result = FourUnit;
            break;
        case 9:
            result = NineUnit;
            break;
        default:
            if (unit > 4) {
                let number = unit - 5;
                result = FiveUnit + getFirstThreeNumbers(number, OneUnit);
            } else {
                result = getFirstThreeNumbers(unit, OneUnit);
            }
            break;
    }
    return result;
}

module.exports = function getRomanNumeric(number2transform) {
    const number = number2transform.toString().split('').reverse();
    let result = '';

    number.forEach(function(element, index){
        setUpUnits(index);
        result = getValue(parseInt(element)) + result;
    });

    return result;
};