//-Output ["Maria", "Stacey", "Tania", "James", "David", "Sasha", "Mike", "Joe", "Hossam", "Brian"]



var group1 = ["Maria", "Stacey", "Tania", "James", "David"];
var group2 = ["Sasha", "Mike", "Joe", "Hossam", "Brian"];

console.log(group1.concat(group2));
console.log(group1.concat(group2).sort());

// _______

var group3 = "John, James, Mathew";
group3.split(", ");
console.log(group3);
