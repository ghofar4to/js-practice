document.getElementById('cekTipeData').addEventListener('click', function() {
    // Mengambil input dari pengguna
    let inputData = document.getElementById('inputData').value;

    // Memeriksa tipe data
    let tipeData;
    
    // Memeriksa apakah input adalah angka
    if (!isNaN(inputData) && inputData.trim() !== "") {
        tipeData = "Number";
    } 
    // Memeriksa apakah input adalah boolean
    else if (inputData.toLowerCase() === "true" || inputData.toLowerCase() === "false") {
        tipeData = "Boolean";
    } 
    // Memeriksa apakah input adalah null
    else if (inputData.toLowerCase() === "null") {
        tipeData = "Null";
    } 
    // Memeriksa apakah input adalah string
    else if (inputData.trim() !== "") {
        tipeData = "String";
    } 
    // Jika input kosong
    else {
        tipeData = "Undefined";
    }

    // Menampilkan tipe data di alert
    alert("Tipe Data: " + tipeData);
    
    // Menampilkan tipe data di konsol
    console.log("Input: " + inputData);
    console.log("Tipe Data: " + tipeData);
});