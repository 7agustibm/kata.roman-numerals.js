'use strict';

const assert = require('chai').assert;
const getRomanNumeric = require('../src/romanNumeric');

suite('Roman Numeric', function () {
    test('1 => I', function () {
        assert.equal(getRomanNumeric(1), 'I');
    });

    test('2 => II', function () {
        assert.equal(getRomanNumeric(2), 'II');
    });

    test('3 => III', function () {
        assert.equal(getRomanNumeric(3), 'III');
    });

    test('4 => IV', function () {
        assert.equal(getRomanNumeric(4), 'IV');
    });

    test('5 => V', function () {
        assert.equal(getRomanNumeric(5), 'V');
    });

    test('6 => VI', function () {
        assert.equal(getRomanNumeric(6), 'VI');
    });

    test('7 => VII', function () {
        assert.equal(getRomanNumeric(7), 'VII');
    });

    test('8 => VIII', function () {
        assert.equal(getRomanNumeric(8), 'VIII');
    });

    test('9 => IX', function () {
        assert.equal(getRomanNumeric(9), 'IX');
    });

    test('10 => X', function () {
        assert.equal(getRomanNumeric(10), 'X');
    });

    test('11 => XI', function () {
        assert.equal(getRomanNumeric(11), 'XI');
    });

    test('12 => XII', function () {
        assert.equal(getRomanNumeric(12), 'XII');
    });

    test('13 => XIII', function () {
        assert.equal(getRomanNumeric(13), 'XIII');
    });

    test('14 => XIV', function () {
        assert.equal(getRomanNumeric(14), 'XIV');
    });

    test('15 => XV', function () {
        assert.equal(getRomanNumeric(15), 'XV');
    });

    test('16 => XVI', function () {
        assert.equal(getRomanNumeric(16), 'XVI');
    });

    test('17 => XVII', function () {
        assert.equal(getRomanNumeric(17), 'XVII');
    });

    test('18 => XVIII', function () {
        assert.equal(getRomanNumeric(18), 'XVIII');
    });

    test('19 => XIX', function () {
        assert.equal(getRomanNumeric(19), 'XIX');
    });

    test('20 => XX', function () {
        assert.equal(getRomanNumeric(20), 'XX');
    });

    test('21 => XXI', function () {
        assert.equal(getRomanNumeric(21), 'XXI');
    });

    test('22 => XXII', function () {
        assert.equal(getRomanNumeric(22), 'XXII');
    });

    test('23 => XXIII', function () {
        assert.equal(getRomanNumeric(23), 'XXIII');
    });

    test('24 => XXIV', function () {
        assert.equal(getRomanNumeric(24), 'XXIV');
    });

    test('25 => XXV', function () {
        assert.equal(getRomanNumeric(25), 'XXV');
    });

    test('26 => XXVI', function () {
        assert.equal(getRomanNumeric(26), 'XXVI');
    });

    test('27 => XXVII', function () {
        assert.equal(getRomanNumeric(27), 'XXVII');
    });

    test('28 => XXVIII', function () {
        assert.equal(getRomanNumeric(28), 'XXVIII');
    });

    test('29 => XXIX', function () {
        assert.equal(getRomanNumeric(29), 'XXIX');
    });

    test('30 => XXX', function () {
        assert.equal(getRomanNumeric(30), 'XXX');
    });

    test('31 => XXXI', function () {
        assert.equal(getRomanNumeric(31), 'XXXI');
    });

    test('32 => XXXII', function () {
        assert.equal(getRomanNumeric(32), 'XXXII');
    });

    test('33 => XXXIII', function () {
        assert.equal(getRomanNumeric(33), 'XXXIII');
    });

    test('34 => XXXIV', function () {
        assert.equal(getRomanNumeric(34), 'XXXIV');
    });

    test('35 => XXXV', function () {
        assert.equal(getRomanNumeric(35), 'XXXV');
    });

    test('36 => XXXVI', function () {
        assert.equal(getRomanNumeric(36), 'XXXVI');
    });

    test('37 => XXXVII', function () {
        assert.equal(getRomanNumeric(37), 'XXXVII');
    });

    test('38 => XXXVIII', function () {
        assert.equal(getRomanNumeric(38), 'XXXVIII');
    });

    test('39 => XXXIX', function () {
        assert.equal(getRomanNumeric(39), 'XXXIX');
    });

    test('40 => XL', function () {
        assert.equal(getRomanNumeric(40), 'XL');
    });

    test('41 => XLI', function () {
        assert.equal(getRomanNumeric(41), 'XLI');
    });

    test('42 => XLII', function () {
        assert.equal(getRomanNumeric(42), 'XLII');
    });

    test('43 => XLIII', function () {
        assert.equal(getRomanNumeric(43), 'XLIII');
    });

    test('44 => XLIV', function () {
        assert.equal(getRomanNumeric(44), 'XLIV');
    });

    test('45 => XLV', function () {
        assert.equal(getRomanNumeric(45), 'XLV');
    });

    test('46 => XLVI', function () {
        assert.equal(getRomanNumeric(46), 'XLVI');
    });

    test('47 => XLVII', function () {
        assert.equal(getRomanNumeric(47), 'XLVII');
    });

    test('48 => XLVIII', function () {
        assert.equal(getRomanNumeric(48), 'XLVIII');
    });

    test('48 => XLVIII', function () {
        assert.equal(getRomanNumeric(48), 'XLVIII');
    });

    test('49 => LIX', function () {
        assert.equal(getRomanNumeric(49), 'XLIX');
    });

    test('50 => L', function () {
        assert.equal(getRomanNumeric(50), 'L');
    });

    test('51 => LI', function () {
        assert.equal(getRomanNumeric(51), 'LI');
    });

    test('52 => LII', function () {
        assert.equal(getRomanNumeric(52), 'LII');
    });

    test('53 => LIII', function () {
        assert.equal(getRomanNumeric(53), 'LIII');
    });

    test('54 => LIV', function () {
        assert.equal(getRomanNumeric(54), 'LIV');
    });

    test('55 => LV', function () {
        assert.equal(getRomanNumeric(55), 'LV');
    });

    test('56 => LVI', function () {
        assert.equal(getRomanNumeric(56), 'LVI');
    });

    test('57 => LVII', function () {
        assert.equal(getRomanNumeric(57), 'LVII');
    });

    test('58 => LVIII', function () {
        assert.equal(getRomanNumeric(58), 'LVIII');
    });

    test('59 => LIX', function () {
        assert.equal(getRomanNumeric(59), 'LIX');
    });

    test('60 => LX', function () {
        assert.equal(getRomanNumeric(60), 'LX');
    });

    test('61 => LXI', function () {
        assert.equal(getRomanNumeric(61), 'LXI');
    });

    test('62 => LXII', function () {
        assert.equal(getRomanNumeric(62), 'LXII');
    });

    test('63 => LXIII', function () {
        assert.equal(getRomanNumeric(63), 'LXIII');
    });

    test('64 => LXIV', function () {
        assert.equal(getRomanNumeric(64), 'LXIV');
    });

    test('65 => LXV', function () {
        assert.equal(getRomanNumeric(65), 'LXV');
    });

    test('66 => LXVI', function () {
        assert.equal(getRomanNumeric(66), 'LXVI');
    });

    test('67 => LXVII', function () {
        assert.equal(getRomanNumeric(67), 'LXVII');
    });

    test('68 => LXVIII', function () {
        assert.equal(getRomanNumeric(68), 'LXVIII');
    });

    test('69 => LXIX', function () {
        assert.equal(getRomanNumeric(69), 'LXIX');
    });

    test('70 => LXX', function () {
        assert.equal(getRomanNumeric(70), 'LXX');
    });

    test('71 => LXXI', function () {
        assert.equal(getRomanNumeric(71), 'LXXI');
    });

    test('72 => LXXII', function () {
        assert.equal(getRomanNumeric(72), 'LXXII');
    });

    test('73 => LXXIII', function () {
        assert.equal(getRomanNumeric(73), 'LXXIII');
    });

    test('74 => LXXIV', function () {
        assert.equal(getRomanNumeric(74), 'LXXIV');
    });

    test('75 => LXXV', function () {
        assert.equal(getRomanNumeric(75), 'LXXV');
    });

    test('76 => LXXVI', function () {
        assert.equal(getRomanNumeric(76), 'LXXVI');
    });

    test('77 => LXXVII', function () {
        assert.equal(getRomanNumeric(77), 'LXXVII');
    });

    test('78 => LXXVIII', function () {
        assert.equal(getRomanNumeric(78), 'LXXVIII');
    });

    test('79 => LXXIX', function () {
        assert.equal(getRomanNumeric(79), 'LXXIX');
    });

    test('80 => LXXX', function () {
        assert.equal(getRomanNumeric(80), 'LXXX');
    });

    test('81 => LXXXI', function () {
        assert.equal(getRomanNumeric(81), 'LXXXI');
    });

    test('82 => LXXXII', function () {
        assert.equal(getRomanNumeric(82), 'LXXXII');
    });

    test('83 => LXXXIII', function () {
        assert.equal(getRomanNumeric(83), 'LXXXIII');
    });

    test('84 => LXXXIV', function () {
        assert.equal(getRomanNumeric(84), 'LXXXIV');
    });

    test('85 => LXXXV', function () {
        assert.equal(getRomanNumeric(85), 'LXXXV');
    });

    test('86 => LXXXVI', function () {
        assert.equal(getRomanNumeric(86), 'LXXXVI');
    });

    test('87 => LXXXVII', function () {
        assert.equal(getRomanNumeric(87), 'LXXXVII');
    });

    test('88 => LXXXVIII', function () {
        assert.equal(getRomanNumeric(88), 'LXXXVIII');
    });

    test('89 => LXXXIX', function () {
        assert.equal(getRomanNumeric(89), 'LXXXIX');
    });

    test('90 => XC', function () {
        assert.equal(getRomanNumeric(90), 'XC');
    });

    test('91 => XCI', function () {
        assert.equal(getRomanNumeric(91), 'XCI');
    });

    test('92 => XCII', function () {
        assert.equal(getRomanNumeric(92), 'XCII');
    });

    test('93 => XCIII', function () {
        assert.equal(getRomanNumeric(93), 'XCIII');
    });

    test('94 => XCIV', function () {
        assert.equal(getRomanNumeric(94), 'XCIV');
    });

    test('95 => XCV', function () {
        assert.equal(getRomanNumeric(95), 'XCV');
    });

    test('96 => XCVI', function () {
        assert.equal(getRomanNumeric(96), 'XCVI');
    });

    test('97 => XCVII', function () {
        assert.equal(getRomanNumeric(97), 'XCVII');
    });

    test('98 => XCVIII', function () {
        assert.equal(getRomanNumeric(98), 'XCVIII');
    });

    test('99 => XCIX', function () {
        assert.equal(getRomanNumeric(99), 'XCIX');
    });

    test('100 => C', function () {
        assert.equal(getRomanNumeric(100), 'C');
    });

    test('101 => CI', function () {
        assert.equal(getRomanNumeric(101), 'CI');
    });

    test('102 => CII', function () {
        assert.equal(getRomanNumeric(102), 'CII');
    });

    test('103 => CIII', function () {
        assert.equal(getRomanNumeric(103), 'CIII');
    });

    test('104 => CIV', function () {
        assert.equal(getRomanNumeric(104), 'CIV');
    });

    test('105 => CV', function () {
        assert.equal(getRomanNumeric(105), 'CV');
    });

    test('106 => CVI', function () {
        assert.equal(getRomanNumeric(106), 'CVI');
    });

    test('107 => CVII', function () {
        assert.equal(getRomanNumeric(107), 'CVII');
    });

    test('108 => CVIII', function () {
        assert.equal(getRomanNumeric(108), 'CVIII');
    });

    test('109 => CIX', function () {
        assert.equal(getRomanNumeric(109), 'CIX');
    });

    test('110 => CX', function () {
        assert.equal(getRomanNumeric(110), 'CX');
    });

    test('111 => CXI', function () {
        assert.equal(getRomanNumeric(111), 'CXI');
    });

    test('112 => CXII', function () {
        assert.equal(getRomanNumeric(112), 'CXII');
    });

    test('113 => CXIII', function () {
        assert.equal(getRomanNumeric(113), 'CXIII');
    });

    test('114 => CXIV', function () {
        assert.equal(getRomanNumeric(114), 'CXIV');
    });

    test('115 => CXV', function () {
        assert.equal(getRomanNumeric(115), 'CXV');
    });

    test('116 => CXVI', function () {
        assert.equal(getRomanNumeric(116), 'CXVI');
    });

    test('117 => CXVII', function () {
        assert.equal(getRomanNumeric(117), 'CXVII');
    });

    test('118 => CXVIII', function () {
        assert.equal(getRomanNumeric(118), 'CXVIII');
    });

    test('119 => CXIX', function () {
        assert.equal(getRomanNumeric(119), 'CXIX');
    });

    test('120 => CXX', function () {
        assert.equal(getRomanNumeric(120), 'CXX');
    });

    test('121 => CXXI', function () {
        assert.equal(getRomanNumeric(121), 'CXXI');
    });

    test('122 => CXXII', function () {
        assert.equal(getRomanNumeric(122), 'CXXII');
    });

    test('123 => CXXIII', function () {
        assert.equal(getRomanNumeric(123), 'CXXIII');
    });

    test('124 => CXXIV', function () {
        assert.equal(getRomanNumeric(124), 'CXXIV');
    });

    test('125 => CXXV', function () {
        assert.equal(getRomanNumeric(125), 'CXXV');
    });

    test('126 => CXXVI', function () {
        assert.equal(getRomanNumeric(126), 'CXXVI');
    });

    test('127 => CXXVII', function () {
        assert.equal(getRomanNumeric(127), 'CXXVII');
    });

    test('128 => CXXVIII', function () {
        assert.equal(getRomanNumeric(128), 'CXXVIII');
    });

    test('129 => CXXIX', function () {
        assert.equal(getRomanNumeric(129), 'CXXIX');
    });

    test('130 => CXXX', function () {
        assert.equal(getRomanNumeric(130), 'CXXX');
    });

    test('131 => CXXXI', function () {
        assert.equal(getRomanNumeric(131), 'CXXXI');
    });

    test('132 => CXXXII', function () {
        assert.equal(getRomanNumeric(132), 'CXXXII');
    });

    test('133 => CXXXIII', function () {
        assert.equal(getRomanNumeric(133), 'CXXXIII');
    });

    test('134 => CXXXIV', function () {
        assert.equal(getRomanNumeric(134), 'CXXXIV');
    });

    test('135 => CXXXV', function () {
        assert.equal(getRomanNumeric(135), 'CXXXV');
    });

    test('136 => CXXXVI', function () {
        assert.equal(getRomanNumeric(136), 'CXXXVI');
    });

    test('137 => CXXXVII', function () {
        assert.equal(getRomanNumeric(137), 'CXXXVII');
    });

    test('138 => CXXXVIII', function () {
        assert.equal(getRomanNumeric(138), 'CXXXVIII');
    });

    test('139 => CXXXIX', function () {
        assert.equal(getRomanNumeric(139), 'CXXXIX');
    });

    test('140 => CXL', function () {
        assert.equal(getRomanNumeric(140), 'CXL');
    });

    test('141 => CXLI', function () {
        assert.equal(getRomanNumeric(141), 'CXLI');
    });

    test('142 => CXLII', function () {
        assert.equal(getRomanNumeric(142), 'CXLII');
    });

    test('143 => CXLIII', function () {
        assert.equal(getRomanNumeric(143), 'CXLIII');
    });

    test('144 => CXLIV', function () {
        assert.equal(getRomanNumeric(144), 'CXLIV');
    });

    test('145 => CXLV', function () {
        assert.equal(getRomanNumeric(145), 'CXLV');
    });

    test('146 => CXLVI', function () {
        assert.equal(getRomanNumeric(146), 'CXLVI');
    });

    test('147 => CXLVII', function () {
        assert.equal(getRomanNumeric(147), 'CXLVII');
    });

    test('148 => CXLVIII', function () {
        assert.equal(getRomanNumeric(148), 'CXLVIII');
    });

    test('148 => CXLVIII', function () {
        assert.equal(getRomanNumeric(148), 'CXLVIII');
    });

    test('149 => CLIX', function () {
        assert.equal(getRomanNumeric(149), 'CXLIX');
    });

    test('150 => CL', function () {
        assert.equal(getRomanNumeric(150), 'CL');
    });

    test('151 => CLI', function () {
        assert.equal(getRomanNumeric(151), 'CLI');
    });

    test('152 => CLII', function () {
        assert.equal(getRomanNumeric(152), 'CLII');
    });

    test('153 => CLIII', function () {
        assert.equal(getRomanNumeric(153), 'CLIII');
    });

    test('154 => CLIV', function () {
        assert.equal(getRomanNumeric(154), 'CLIV');
    });

    test('155 => CLV', function () {
        assert.equal(getRomanNumeric(155), 'CLV');
    });

    test('156 => CLVI', function () {
        assert.equal(getRomanNumeric(156), 'CLVI');
    });

    test('157 => CLVII', function () {
        assert.equal(getRomanNumeric(157), 'CLVII');
    });

    test('158 => CLVIII', function () {
        assert.equal(getRomanNumeric(158), 'CLVIII');
    });

    test('159 => CLIX', function () {
        assert.equal(getRomanNumeric(159), 'CLIX');
    });

    test('160 => CLX', function () {
        assert.equal(getRomanNumeric(160), 'CLX');
    });

    test('161 => CLXI', function () {
        assert.equal(getRomanNumeric(161), 'CLXI');
    });

    test('162 => CLXII', function () {
        assert.equal(getRomanNumeric(162), 'CLXII');
    });

    test('163 => CLXIII', function () {
        assert.equal(getRomanNumeric(163), 'CLXIII');
    });

    test('164 => CLXIV', function () {
        assert.equal(getRomanNumeric(164), 'CLXIV');
    });

    test('165 => CLXV', function () {
        assert.equal(getRomanNumeric(165), 'CLXV');
    });

    test('166 => CLXVI', function () {
        assert.equal(getRomanNumeric(166), 'CLXVI');
    });

    test('167 => CLXVII', function () {
        assert.equal(getRomanNumeric(167), 'CLXVII');
    });

    test('168 => CLXVIII', function () {
        assert.equal(getRomanNumeric(168), 'CLXVIII');
    });

    test('169 => CLXIX', function () {
        assert.equal(getRomanNumeric(169), 'CLXIX');
    });

    test('170 => CLXX', function () {
        assert.equal(getRomanNumeric(170), 'CLXX');
    });

    test('171 => CLXXI', function () {
        assert.equal(getRomanNumeric(171), 'CLXXI');
    });

    test('172 => CLXXII', function () {
        assert.equal(getRomanNumeric(172), 'CLXXII');
    });

    test('173 => CLXXIII', function () {
        assert.equal(getRomanNumeric(173), 'CLXXIII');
    });

    test('174 => CLXXIV', function () {
        assert.equal(getRomanNumeric(174), 'CLXXIV');
    });

    test('175 => CLXXV', function () {
        assert.equal(getRomanNumeric(175), 'CLXXV');
    });

    test('176 => CLXXVI', function () {
        assert.equal(getRomanNumeric(176), 'CLXXVI');
    });

    test('177 => CLXXVII', function () {
        assert.equal(getRomanNumeric(177), 'CLXXVII');
    });

    test('178 => CLXXVIII', function () {
        assert.equal(getRomanNumeric(178), 'CLXXVIII');
    });

    test('179 => CLXXIX', function () {
        assert.equal(getRomanNumeric(179), 'CLXXIX');
    });

    test('180 => CLXXX', function () {
        assert.equal(getRomanNumeric(180), 'CLXXX');
    });

    test('181 => CLXXXI', function () {
        assert.equal(getRomanNumeric(181), 'CLXXXI');
    });

    test('182 => CLXXXII', function () {
        assert.equal(getRomanNumeric(182), 'CLXXXII');
    });

    test('183 => CLXXXIII', function () {
        assert.equal(getRomanNumeric(183), 'CLXXXIII');
    });

    test('184 => CLXXXIV', function () {
        assert.equal(getRomanNumeric(184), 'CLXXXIV');
    });

    test('185 => CLXXXV', function () {
        assert.equal(getRomanNumeric(185), 'CLXXXV');
    });

    test('186 => CLXXXVI', function () {
        assert.equal(getRomanNumeric(186), 'CLXXXVI');
    });

    test('187 => CLXXXVII', function () {
        assert.equal(getRomanNumeric(187), 'CLXXXVII');
    });

    test('188 => CLXXXVIII', function () {
        assert.equal(getRomanNumeric(188), 'CLXXXVIII');
    });

    test('189 => CLXXXIX', function () {
        assert.equal(getRomanNumeric(189), 'CLXXXIX');
    });

    test('190 => CXC', function () {
        assert.equal(getRomanNumeric(190), 'CXC');
    });

    test('191 => CXCI', function () {
        assert.equal(getRomanNumeric(191), 'CXCI');
    });

    test('192 => CXCII', function () {
        assert.equal(getRomanNumeric(192), 'CXCII');
    });

    test('193 => CXCIII', function () {
        assert.equal(getRomanNumeric(193), 'CXCIII');
    });

    test('194 => CXCIV', function () {
        assert.equal(getRomanNumeric(194), 'CXCIV');
    });

    test('195 => CXCV', function () {
        assert.equal(getRomanNumeric(195), 'CXCV');
    });

    test('196 => CXCVI', function () {
        assert.equal(getRomanNumeric(196), 'CXCVI');
    });

    test('197 => CXCVII', function () {
        assert.equal(getRomanNumeric(197), 'CXCVII');
    });

    test('198 => CXCVIII', function () {
        assert.equal(getRomanNumeric(198), 'CXCVIII');
    });

    test('199 => CXCIX', function () {
        assert.equal(getRomanNumeric(199), 'CXCIX');
    });

    test('200 => CC', function () {
        assert.equal(getRomanNumeric(200), 'CC');
    });

    test('300 => CCC', function () {
        assert.equal(getRomanNumeric(300), 'CCC');
    });

    test('400 => CD', function () {
        assert.equal(getRomanNumeric(400), 'CD');
    });

    test('500 => D', function () {
        assert.equal(getRomanNumeric(500), 'D');
    });

    test('600 => DC', function () {
        assert.equal(getRomanNumeric(600), 'DC');
    });

    test('700 => DCC', function () {
        assert.equal(getRomanNumeric(700), 'DCC');
    });

    test('800 => DCCC', function () {
        assert.equal(getRomanNumeric(800), 'DCCC');
    });

    test('900 => CM', function () {
        assert.equal(getRomanNumeric(900), 'CM');
    });
});