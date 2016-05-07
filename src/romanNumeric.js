var romanNumeric = function(number) {
    var one = 'I';
    var five = 'V';
    var ten = 'X';
    var fifty = 'L';
    var hundred = 'C';
    var five_hundred = 'D';
    var thousand = 'M';
    var five_thousand = '^V';
    var ten_thousand = '^X';
    var roman_numerals_according_unit = [
        [five, ten, one],
        [fifty, hundred, ten],
        [five_hundred, thousand, hundred],
        [five_thousand, ten_thousand, thousand],
    ];
    var result = '';

    if(isNaN(number)||number<1 ||number>10000){
        return result;
    }
    if(number===10000){
        return ten_thousand;
    }

    var digits = number.toString().split('').reverse();

    for (var i = 0, len = digits.length; i < len; i++) {
        var numberToTransform = parseInt(digits[i]);
        var numberRomans = roman_numerals_according_unit[i];
        var nextRomanNumber = getNextRomanNumber(numberToTransform, numberRomans);
        var moduleFive = (numberToTransform) % 5;
        var moduleFourRomanNumber = firstFourNumber(moduleFive, nextRomanNumber, numberRomans[2]);
        var firstCaracter = getPrimaryCaracter(numberToTransform, numberRomans);
        result =  firstCaracter + moduleFourRomanNumber + result;
    }

    return result;

    //////////////////////

    function getPrimaryCaracter(number, options) {
        if (number > 4 && number < 9) {
            return options[0];
        } else {
            return '';
        }
    }
    
    function getNextRomanNumber(number, options) {
        if (number === 9) {
            return options[1];
        } else {
            return options[0];
        }
    }

    function addI(repeat, value) {
        var result = '';
        for (var i = 0; i < repeat; i++) {
            result += value;
        }
        return result;
    }

    function firstFourNumber(number, nextValue, value) {
        if (number < 4) {
            return addI(number, value);
        } else {
            return value + nextValue;
        }
    }

    
};