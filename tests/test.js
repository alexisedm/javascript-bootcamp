const items = [
  { currency: 'usd', amount: 100 },
  { currency: 'gbp', amount: 200 },
  { currency: 'eur', amount: 10 },
  { currency: 'mxn', amount: 10 },
  { currency: 'usd', amount: 25 },
];

//array methods

//Filter - returns true or false is the condition applies, and added to new array
const filteredItems = items.filter((item) => {
  return item.amount <= 100;
});
console.log(filteredItems);

//Map - take one array and extract some value you neeed into new array
const itemsAmounts = items.map((item) => {
  return item.amount;
});
console.log(itemsAmounts);

//find some element in array, returns first element that applies that condition
const foundCurrency = items.find((item) => {
  return item.currency === 'usd';
});
console.log('find just return one element', foundCurrency);

//forEach loop , returns array with matching values
items.forEach((item) => {
  console.log(item.amount);
});

const numbers = [1, 2, 3, 4, 5, 6];

//reduce, accuulator, array,  always return accumulator
const doubledNums = numbers.reduce((acc, num) => {
  acc.push(num * 2);
  return acc;
}, []);

console.log('doubled numbers', doubledNums);
console.log('numbers', numbers);

let data = [
  { id: 1, country: 'Germany', population: 83623528 },
  { id: 2, country: 'Austria', population: 8975552 },
  { id: 3, country: 'Switzerland', population: 8616571 },
];

//array of arrays
const transactions = [
  // [ currency, operation, amount ]
  ['usd', 'buy', 10000],
  ['usd', 'sell', 5000],
  ['gbp', 'buy', 9000],
  ['eur', 'sell', 7000],
  ['mxn', 'buy', 10000],
  ['usd', 'sell', 25000],
];

//array of dictionaries
const output = {
  // currency: [summ for all buys, summ for all sells]
  usd: [10000, 30000],
  gbp: [9000, 0],
  eur: [0, 7000],
  mxn: [10000, 0],
};

console.log(Object.keys(transactions));
console.log(JSON.stringify(transactions));
console.log(Object.values(transactions));


//destructuring
const { usd } = transactions.map((item) => {
    return Object.values(item)
});
console.log(usd);



const trans = [
  // [ currency, operation, amount ]
  { currency: 'usd', operation: 'buy', amount: 10000 },
  { currency: 'usd', operation: 'sell', amount: 5000 },
  { currency: 'gbp', operation: 'buy', amount: 9000 },
  { currency: 'eur', operation: 'sell', amount: 7000 },
  { currency: 'mxn', operation: 'buy', amount: 10000 },
  { currency: 'usd', operation: 'sell', amount: 25000 },
];

let dictionary1 = Object.assign({}, ...data.map((x) => ({ [x.id]: x.country })));
let dict = Object.assign({}, ...trans.map((y) => ({ [y.currency]: y.amount })));

console.log(dictionary);
console.log(dict);

const result = groupBy(trans, tr =>  tr.currency);
console.log(result);
let dictionary2 = data.reduce((a,x) => ({...a, [x.currency]: x.operation}), {})

const groupBy = (x,f) => x.reduce((a,x) => ({...a, [f.currency]: f.operation}), {})
console.log(groupBy(trans));

// Transform the transactions to output

var groupBy = function(list, keyGen) {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGen(item);
        const collection = map.get(key);
        if(!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
            
        }
        
    });
    return map;
   
};

