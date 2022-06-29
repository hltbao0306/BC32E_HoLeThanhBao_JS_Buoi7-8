const question = document.querySelectorAll(".question");

for (var i = 0; i < question.length; i++) {
  const element = question[i];
  const title = question[i].querySelector(".question-title");
  title.onclick = function () {
    showText(element);
  };
}

function showText(element) {
  for (var i = 0; i < question.length; i++) {
    if (element !== question[i]) {
      question[i].classList.remove("show-text");
    }
  }
  element.classList.toggle("show-text");
}

//------------Tạo mảng-------------\\
var arrNumber = [];
document.getElementById("btnThemSo").onclick = function () {
  var number = Number(document.getElementById("nhapSo").value);
  var ketQua = "";
  arrNumber.push(number);
  ketQua = "[" + arrNumber + "]";
  document.getElementById("ketQua").innerHTML = '👉' + ketQua;
};

//------------Bài 1-------------\\
document.getElementById("btnTinhTong").onclick = function () {
  tinhTongSoDuong();
};

function tinhTongSoDuong() {
  var tongSoDuong = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    var iSo = arrNumber[i];
    if (iSo >= 0) {
      tongSoDuong += iSo;
    }
    document.getElementById("ketQua1").innerHTML = '👉' + "Tổng: " + tongSoDuong;
  }
}

//------------Bài 2-------------\\
document.getElementById("btnDemSoDuong").onclick = function () {
  demSoDuong();
};

function demSoDuong() {
  var demSoDuong = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    var iSo = arrNumber[i];
    if (iSo > 0) {
      demSoDuong += 1;
    }
    document.getElementById("ketQua2").innerHTML = '👉' + "Số dương: " + demSoDuong;
  }
}

//------------Bài 3-------------\\
document.getElementById("btnSoNhoNhat").onclick = function () {
  soNhoNhat();
};

function soNhoNhat() {
  var soNhoNhat = arrNumber[0];
  for (var i = 0; i < arrNumber.length; i++) {
    var iSo = arrNumber[i];
    if (iSo <= soNhoNhat) {
      soNhoNhat = iSo;
    }
    document.getElementById("ketQua3").innerHTML = '👉' + "Số nhỏ nhất: " + soNhoNhat;
  }
  return soNhoNhat;
}

//------------Bài 4-------------\\
document.getElementById("btnSoDuongNhoNhat").onclick = function () {
  soDuongNhoNhat();
};

function soDuongNhoNhat() {
  var arrSoDuong = [];
  for (var i = 0; i < arrNumber.length; i++) {
    var iSo = arrNumber[i];
    if (iSo > 0) {
      arrSoDuong.push(iSo);
    }
  }
  var soDuongNhoNhat = arrSoDuong[0];
  for (i = 1; i < arrSoDuong.length; i++) {
    var soDuong = arrSoDuong[i];
    if (soDuong <= soDuongNhoNhat) {
      soDuongNhoNhat = soDuong;
    }
  }
  document.getElementById("ketQua4").innerHTML = '👉' + "Số dương nhỏ nhất: " + soDuongNhoNhat;
}

//------------Bài 5-------------\\
document.getElementById("btnTimSoChanCuoiCung").onclick = function () {
  soChanCuoiCung();
};

function soChanCuoiCung() {
  var arrSoChan = [];
  for (var i = arrNumber.length - 1; i >= 0; i--) {
    if (arrNumber[i] % 2 === 0) {
      arrSoChan.push(arrNumber[i]);
      var ketQua = "Số chẵn cuối cùng: " + arrSoChan;
      break;
    } else {
      ketQua = "Không có số chẵn: " + -1;
    }
  }
  document.getElementById("ketQua5").innerHTML = '👉' + ketQua;
}

//------------Bài 6-------------\\
document.getElementById("btnDoiCho").onclick = function () {
  doiCho();
};

function doiCho() {
  var arrNumber2 = arrNumber;
  var so1 = Number(document.getElementById("nhapSo1_6").value);
  var so2 = Number(document.getElementById("nhapSo2_6").value);
  var so3 = arrNumber2[so1];
  arrNumber2[so1] = arrNumber2[so2];
  arrNumber2[so2] = so3;
  document.getElementById("ketQua6").innerHTML = '👉' + "Mảng sau khi đổi: " + arrNumber2;
}

//------------Bài 7-------------\\
document.getElementById("btnSapXepTangDan").onclick = function () {
  sapXepTangDan();
};

function sapXepTangDan() {
  for (var i = 0; i < arrNumber.length; i++) {
    for (var j = i + 1; j < arrNumber.length; j++) {
      if (arrNumber[i] >= arrNumber[j]) {
        var iSo = arrNumber[i];
        arrNumber[i] = arrNumber[j];
        arrNumber[j] = iSo;
      }
    }
  }
  document.getElementById("ketQua7").innerHTML = '👉' + arrNumber;
}

//------------Bài 8-------------\\
document.getElementById("btnTimSoNguyenTo").onclick = function () {
  timSoNguyenToDT();
};

function timSoNguyenToDT() {
  var ketQua = "";
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 2) {
      var kiemTra = kiemTraSoNguyenTo(arrNumber[i]);
      if (kiemTra === true) {
        var soNguyenTo = arrNumber[i];
        ketQua = "Số nguyên tố đầu tiên: " + soNguyenTo;
        break;
      } else {
        ketQua = "Không có số nguyên tố: " + -1;
      }
    }
  }

  document.getElementById("ketQua8").innerHTML = '👉' + ketQua;
}

function kiemTraSoNguyenTo(so) {
  var kiemTra = true;
  for (var uoc = 2; uoc <= so / 2; uoc++) {
    if (so % uoc === 0) {
      kiemTra = false;
      break;
    }
  }
  return kiemTra;
}

//------------Bài 9-------------\\
var arrNumber9 = [];
document.getElementById("btnThemSo_9").onclick = function () {
  var number = Number(document.getElementById("nhapSo_9").value);
  arrNumber9.push(number);
  document.getElementById("themSo_9").innerHTML = "[" + arrNumber9 + "]";
};

document.getElementById("btnDemSoNguyen").onclick = function () {
  kiemTraSoNguyen();
};

function kiemTraSoNguyen() {
  var soNguyen = 0;
  for (var i = 0; i < arrNumber9.length; i++) {
    if (Number.isInteger(arrNumber9[i]) === true) {
      soNguyen += 1;
    }
  }
  document.getElementById("ketQua9").innerHTML = '👉' + "Số nguyên: " + soNguyen;
}

//------------Bài 10-------------\\
document.getElementById("btnSoSanh").onclick = function () {
  kiemTra();
};

function kiemTra() {
  var soDuong = 0;
  var soAm = 0;
  var ketQua = "";
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      soDuong += 1;
    } else if (arrNumber[i] < 0) {
      soAm += 1;
    }
  }
  if (soDuong > soAm) {
    ketQua = "Số dương > Số âm";
  } else if (soAm > soDuong) {
    ketQua = "Số âm > Số dương";
  } else if ((soDuong = soAm)) {
    ketQua = "Số dương = Số âm";
  }
  document.getElementById("ketQua10").innerHTML = '👉' + ketQua;
}