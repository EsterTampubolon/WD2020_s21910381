
//splice()
john.splice();
console.log(john.join(" - "));

//concat()
let john =["john", "doe", 33, true];
let john1 =["john1", "loe", 34, true];
let john2 =["john1", "soe", 35, true];

let Johnnn = john.concat(john1,john2);

john.concat(john1, john2);
console.log(Johnnn.join(" - "));

//slice()
let john =["john", "doe", 33, true];
let john1 = data.slice (0,2);
let john2 = data.slice(2);

john.slice();
console.log(john1(" - "));
console.log(john2(" - "));

//sort()
let bilangan=[1,7,3,5,2,6];

let urutDariTerkecil = function(a, b){
    return a - b;
};

bilangan.sort();
console.log(bilangan.sort(urutDariTerkecil));

//reverse()

let bilangan = [2,3,6,1,5];

bilangan.reserve();
console.log(bilangan(" - "));

//reserse()
let bilangan = [3,6,2,4,1];

bilangan.sort().reserve();
console.log(bilangan(" - "));