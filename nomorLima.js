// Pembuatan data array dengan nama dataPenjualanNovel
const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

//Arrow function  yang berfungsi untuk memberikan format dengan tanda pemisah angka ribuan yaitu tanda titik
const formatRupiah = (angka) => angka.toLocaleString("id-ID");

// Function yang berisi perhitungan untuk mencari totalKeuntungan, totalModal, persentaseKeuntungan, produkNovelTerlaris, penulisNovelTerlaris dari data array dengan nama dataPenjualanNovel
function getInfoPenjualan(dataPenjualanNovel) {

  // Inisialisasi variabel untuk menyimpan informasi
  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkNovelTerlaris = "";
  let penulisNovelTerlaris = "";
  let keuntungan = 0;

  // Objek untuk melacak penjualan berdasarkan penulis
  const penjualanPenulis = {};

  // Iterasi melalui data penjualan
  for (const penjualan of dataPenjualanNovel) {
    const { hargaBeli, hargaJual, totalTerjual, sisaStok } = penjualan;

    // Menghitung total keuntungan dan total modal
    totalKeuntungan += (hargaJual - hargaBeli) * totalTerjual;
    totalModal += hargaBeli * (totalTerjual + sisaStok);

    // Memeriksa penjualan novel terlaris berdasarkan total terjual
    if (totalTerjual > keuntungan) {
      keuntungan = totalTerjual;
      produkNovelTerlaris = penjualan.namaProduk;
    }

    // Memeriksa penjualan penulis terlaris berdasarkan total keuntungan
    if (penjualan.penulis in penjualanPenulis) {
      penjualanPenulis[penjualan.penulis] += (hargaJual - hargaBeli) * totalTerjual;
    } else {
      penjualanPenulis[penjualan.penulis] = (hargaJual - hargaBeli) * totalTerjual;
    }
  }

  // Menentukan penulis novel terlaris berdasarkan total keuntungan
  for (const penulis in penjualanPenulis) {
    if (penjualanPenulis[penulis] > keuntungan) {
      keuntungan = penjualanPenulis[penulis];
      penulisNovelTerlaris = penulis;
    }
  }

  // Menghitung persentase keuntungan
  const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  // Membuat objek yang berisi informasi penjualan
  const informasiPenjualan = {
    totalKeuntungan,
    totalModal,
    persentaseKeuntungan,
    produkNovelTerlaris,
    penulisNovelTerlaris,
  };

  //Mengatur tampilan output dari objek informasiPenjualan seperti totalKeuntungan, totalModal, persentaseKeuntungan
  informasiPenjualan.totalKeuntungan = "Rp." + formatRupiah(informasiPenjualan.totalKeuntungan);
  informasiPenjualan.totalModal = "Rp." + formatRupiah(informasiPenjualan.totalModal);
  informasiPenjualan.persentaseKeuntungan = informasiPenjualan.persentaseKeuntungan.toFixed(2) + "%";

  // Mengembalikan informasiPenjualan
  return informasiPenjualan;
}

// Memanggil function getInfoPenjualan dengan dataPenjualanNovel
console.log(getInfoPenjualan(dataPenjualanNovel));