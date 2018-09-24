module.exports = function makeExchange(currency) {
 const currAmount = {};

 const currencyValues = { 'H':50, 'Q':25, 'D':10, 'N':5, 'P':1 };

    if (currency > 10000)

       return { error: "You are rich, my friend! We don't have so much coins for exchange" };

    if (currency <= 0)

       return {};
       Object.keys(currencyValues).sort((a,b) => {

        return currencyValues[b] - currencyValues[a];

    }).forEach(curr => {

        let l = Math.floor(currency / currencyValues[curr]);

        if (l) {

            currAmount[curr] = l;

        }

        currency -= l*currencyValues[curr];

    });

    return currAmount;
}
