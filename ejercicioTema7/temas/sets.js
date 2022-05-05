// sets o conjuntos
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 11, 15, 8];

const miSet = new Set(array);

console.log(array);

console.log(miSet);

// .add()

miSet.add(12);
console.log(miSet);


// .delete()
miSet.delete(15);
console.log(miSet);

// .clear()

// miSet.clear();
// console.log(miSet);

// .has()
console.log(miSet.has(12));

// .size

console.log(miSet.size);

// .forEach()

miSet.forEach(element => {
    console.log(element);
});

const it_miSet = miSet.values();
console.log(it_miSet);

const ar_miSet = [ ...miSet ];
console.log(ar_miSet);