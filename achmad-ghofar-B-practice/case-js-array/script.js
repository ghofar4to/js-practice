function bagiDuaAngka(angka1, angka2) {
    // Cek apakah kedua input adalah angka
    if (typeof angka1 !== 'number' || typeof angka2 !== 'number') {
        return "Error: Input harus berupa angka.";
    }

    // Cek apakah angka2 adalah nol
    if (angka2 === 0) {
        return "Error: Tidak bisa membagi dengan nol.";
    }

    try {
        // Lakukan pembagian
        let hasil = angka1 / angka2;
        return hasil;
    } catch (error) {
        // Menangkap kesalahan tidak terduga
        return `Error: Terjadi kesalahan saat melakukan pembagian. Detail: ${error.message}`;
    }
}

// Contoh penggunaan fungsi
console.log(bagiDuaAngka(10, 2));    // Output: 5
console.log(bagiDuaAngka(10, 0));    // Output: Error: Tidak bisa membagi dengan nol.
console.log(bagiDuaAngka(10, "a"));  // Output: Error: Input harus berupa angka.
