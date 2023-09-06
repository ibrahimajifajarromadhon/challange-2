const dataPenjualanPakAldi = [
  {
    namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Black Brown High',
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Maroon High',
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  {
    namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  }
];

const hitungTotalPenjualan = (dataPenjualanPakAldi) => {

  // Inisialisasi variabel untuk menyimpan total penjualan
  let totalPenjualan = 0;

  // Iterasi melalui array dataPenjualanPakAldi
  for (let i = 0; i < dataPenjualanPakAldi.length; i++) {
    const data = dataPenjualanPakAldi[i];

    // Menambahkan totalTerjual ke totalPenjualan
    totalPenjualan += data.totalTerjual;
  }

  // Mengembalikan totalPenjualan
  return totalPenjualan;
};

console.log(hitungTotalPenjualan(dataPenjualanPakAldi)); //Output: 307, dari setiap value properti 'totalTerjual'