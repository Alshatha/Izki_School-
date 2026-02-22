const users = {
    "9302183": "1234",
    "9294649": "1234",
    "15390968": "1234",
    "1459437": "1234",
    "14545546": "1234",
    "12307034": "1234",
    "15455281": "1234",
    "19175747": "1234",
    "8667752": "1234",
    "14127267": "1234",
    "13713162": "1234",
    "1839321": "1234",
    "13783044": "1234",
    "97857325": "1234",
    "18273993": "1234"
};

function login() {
    let civil = document.getElementById("civil").value;
    let pass = document.getElementById("password").value;

    if (users[civil] === pass) {
        localStorage.setItem("login", "true");
        window.location.href = "home.html";
    } else {
        alert("بيانات الدخول غير صحيحة");
    }
}

function logout() {
    localStorage.removeItem("login");
    window.location.href = "index.html";
}
