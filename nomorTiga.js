function getAngkaTerbesarKedua(arr) {
    // Menghapus duplikat dan mengurutkan array secara menurun
    const uniqueSortedArr = Array.from(new Set(arr)).sort((a, b) => b - a);

    // Mengembalikan angka terbesar kedua
    return uniqueSortedArr[1];

}

// Data array yang akan diuji
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka)); // Output: 8

console.log(getAngkaTerbesarKedua(2)); // Error: number 2 is not iterable, Karena angka 0 tidak dapat dirubah menjadi array(tidak dapat membaca simbol pada propertinya)

console.log(getAngkaTerbesarKedua()); // Error: undefined, Karena saat pemanggilan function pada parameternya belum di definisikan/undefined