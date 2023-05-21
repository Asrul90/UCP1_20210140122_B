// Kalimat salam
var today = new Date();
var hour = today.getHours();
var greeting;

if (hour < 12) {
    greeting = "Selamat Pagi, Asrul";
} else if (hour < 18) {
    greeting = "Selamat Siang, Asrul";
} else {
    greeting = "Selamat Malam, Asrul";
}

document.getElementById("greeting").innerHTML = greeting;

// Tanggal dan Jam
function updateDateTime() {
    var now = new Date();
    var date = now.toDateString();
    var time = now.toLocaleTimeString();

    document.getElementById("datetime").innerHTML = date + " " + time;

    setTimeout(updateDateTime, 1000); // Pembaruan setiap detik
}

updateDateTime();