const checkTypeNumber = (givenNumber) => {
    // Validasi apakah parameter diberikan
    if (typeof givenNumber === 'undefined') {
        return 'Error: Bro where is the parameter';
    }
    // Validasi tipe data parameter
    if (typeof givenNumber !== 'number') {
        return 'Error: Invalid data type';
    } 

    // Mendeteksi apakah angka genap atau ganjil
    if (givenNumber % 2 === 0) {
        return 'GENAP';
    } else {
        return 'GANJIL';
    }
};

console.log(checkTypeNumber(10)); // Output yang keluar => Genap
console.log(checkTypeNumber(3)); // Output yang keluar => Ganjil
console.log(checkTypeNumber("3")); // Output yang keluar => Error: Invalid data type
console.log(checkTypeNumber({})); // Output yang keluar => Error: Invalid data type
console.log(checkTypeNumber([])); // Output yang keluar => Error: Invalid data type
console.log(checkTypeNumber()); // Output yang keluar => Error: Bro where is the parameter