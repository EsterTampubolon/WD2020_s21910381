//Array

let nilai =[90, 80, 75, 95, 85];

for(let i=0; i <nilai.length; i++){
    console.log("Nilai =", nilai[i]+5);
}
console.log(nilai);

// nilai[2] = 90;
// console.log(nilai.length - 1);

let john =["john", "doe", 33, true];

console.log(john.length - 1);
console.log(john);

// toString ()
console.log(john.toString());

//join()
console.log(john.join(" - "));

//pop()
john.pop();
console.log(john.join(" - "));

//push()
john.push();
console.log(john.join(" - "));

//shift()
john.shift();
console.log(john.join(" - "));

//unshift()
john.unshift();
console.log(john.join(" - "));

//splice()
let buah = ["pisang", "jeruk", "mangga", "apel"];
buah.splice(2, 0, "lemon", "kiwi");
console.log(buah.join(" - "));

//concat()
let buahh = ["pisang", "mangga", "jeruk"];
let sayur =["kol", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];

let makanan = buahh.concat(sayur, biji);
console.log(makanan.join(" - "));

//slice()
let cemilan = ["keripik singkong", "keripik kentang", "kerupuk ikan", "permen", "coklat", "kue"]

let cemilanGurih= cemilan.slice(0,3);
let cemilanManis= cemilan.slice(3);

console.log(cemilanGurih.join(" - "));
console.log(cemilanManis.join(" - "));

//sort()
let buahhh =["durian", "manggis", "apel"];

buahhh.sort();
console.log(buahhh.join(" - "));

let bilangan =[2,1,4,3,6,7,5];

let urutDariTerkecil = function (a, b){
    return a - b;
}
console.log(bilangan.sort(urutDariTerkecil));

//reverse()
let buahhhh =["jeruk", "apel", "manggis", "durian"];
buahhhh.sort().reverse();
console.log(buahhhh.join(" - "));
