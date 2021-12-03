function tinhKetQua() {
  var thunhap = document.getElementById("thunhap").value;
  var sotien = document.getElementById("sotien").value;
  var laisuat = document.getElementById("laisuat").value;
  var time = document.getElementById("time").value;

  thunhap = Number(thunhap);
  sotien = Number(sotien);
  laisuat = Number(laisuat);
  time = Number(time);

  var tienCoTheTra = thunhap * 0.6;
  var tienPhaiTra = (sotien * (1 + laisuat)) / time;
  var alertTag = document.getElementById("result");

  alertTag.innerHTML = "";

  var tienCoTheTraP = document.createElement("p");
  tienCoTheTraP.textContent =
    "Số tiền có thể trả trong 1 tháng: " + tienCoTheTra.toFixed(2);
  var tienPhaiTraP = document.createElement("p");
  tienPhaiTraP.textContent =
    "Số tiền phải trả trong 1 tháng: " + tienPhaiTra.toFixed(2);

  alertTag.appendChild(tienCoTheTraP);
  alertTag.appendChild(tienPhaiTraP);

  document.getElementById("result").style.display = "block";
  document.getElementById("dieukien").style.display = "block";

  var number = tienCoTheTra > tienPhaiTra;
  if (number) {
    document.getElementById("dieukien").textContent =
      "Chúc mừng bạn đủ điều kiện vay vốn";
  } else {
    document.getElementById("dieukien").textContent =
      "Không đủ điều kiện vay vốn";
  }
}
