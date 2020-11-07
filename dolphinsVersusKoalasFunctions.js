'use strict';

const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3);

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage (65, 54, 49);

const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgKoalas} vs ${avgDolphins})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 ${avgDolphins} vs ${avgKoalas}`);
    } else {
        console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);