//array
let names1: string[] = ["Leonanta", "Pramudya", "Kusuma"];
//atau
let names2: Array<string> = ["Leonanta", "Pramudya", "Kusuma"];
let numbers: Array<number> = [1, 2, 3, 4, 5];

console.log(numbers[4]);

//tupple
let student: [string, string, number] = ["1001", "Leonanta", 73];
let product: [string, number] = ["Samsung J5 Prime", 2500000];

console.log(student[1]);
console.log(product[0]);

//mengubah data
names2[0] = "Jupri";

//menambah data
let namesLagi: Array<string> = [];
namesLagi.push("Leonanta");
namesLagi.push("Pramudya Kusuma");
console.log(namesLagi);

//menghapus data
delete namesLagi[0];
console.log(namesLagi);