/*StockExchenge.js*/
 function chooseWisely(array, share) {
    var buyInfo = bestToBuy(array, share);
    var sellInfo = bestToSell(array, share);
    var profit = sellInfo.earningValue - buyInfo.lossValue;

        if(profit > 0){
            console.log(`The best day for selling is on day ${sellInfo.index} of March of 2024.`);
            console.log(`The best day for buying is on day ${buyInfo.index} of March of 2024`)
            console.log(`You would make a profit of ${profit}`);
        } else {
            console.log("No profit comes from this past. Try the lottery instead")
        }
    }
//note: the smallestIndex = day -1;
function bestToBuy(array, share) {
    var smallestIndex = 0;
    var bestVariationBuy;
    var lossValue;

    for (var i = 1; i < array.length; i++) {
        if (array[i] < array[smallestIndex]) {
            smallestIndex = i;
            bestVariationBuy = array[smallestIndex];
            lossValue = share * bestVariationBuy;
        }
    }
    return { index: smallestIndex, bestVariationBuy: bestVariationBuy, lossValue: lossValue };
}

//note: highestInde = day - 1;
function bestToSell(array, share) {
    var highestIndex = 0;
    var bestVariationSell;
    var earningValue;

    for (var i = 1; i < array.length; i++) {
        if (array[i] > array[highestIndex]) {
            highestIndex = i;
            bestVariationSell = array[highestIndex];
            earningValue = bestVariationSell * share;
        }
    } 
    return { index: highestIndex, bestVariationSell: bestVariationSell, earningValue: earningValue }
}

var stockPricesVariations = [-5, 10, 12, -7, -35, 22, -9, -26, -13, 28, 10, -37, 42, -5, -28, 11, -9, 18];
chooseWisely(stockPricesVariations, 100);

/*
var arrayOfObjsects = stockPricesVariations.map((item, index) => {
    return {
        Day : index + 1,
        month : 'March',
        variation : item
    };
})
*/
