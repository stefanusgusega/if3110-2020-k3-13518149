function showRiwayat() {
    var x = document.getElementById("riwayat");
    var y = document.getElementById("Button");
    if (x.style.display === "none") {
        y.style.backgroundColor = "#dfdfdf";
        y.style.color = "#000000";
        x.style.display = "block";
    } else {
        y.style.backgroundColor = "#000000";
        y.style.color = "#dfdfdf";
        x.style.display = "none";
    }
}