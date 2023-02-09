const numbers = [34, 234, 54,46, 546];

// for (let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for (const number of numbers){
//     console.log(number);
// }

const products = [
    {id: 1, name: 'xaomi phone one night', price: 19000},
    {id: 2, name: 'iphone', price: 199000},
    {id: 3, name: 'mac book air', price: 29000},
    {id: 4, name: 'lenovo yoga laptop', price: 19000},
    {id: 5, name: 'dell inspiron', price: 19000},
    {id: 6, name: 'samsung phone note 7', price: 33434},
    {id: 7, name: 'nokia old age phone gone', price: 19000},
    {id: 8, name: 'phone one', price: 19000}
]

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase)){
            matched.push(product);
        }
    }
    return matched;
}
// const result = matchedProducts(products, 'phone');
// console.log(result);

function compare(a, b) {

    if (a === b) {
   
    return true;
   
    } else {
   
    return false;
   
    }
   
   }
   
//    const result = compare(15, "15");
   
//    console.log(result);

function compare(a, b) {

    if (a.toString() === b) {
   
    return true;
   
    } else {
   
    return false;
   
    }
   
   }
   
//    const result = compare(25, 25);
   
//    console.log(result);

console.log("123" + 123);

let a="hi"

let b="there"

console.log(a+b);

for(let i = 5; i <=100; i++ ){
    console.log(i);
}