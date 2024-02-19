const seats = document.getElementsByClassName("seat-button");

let seatsLeft = parseInt(getInnerText("seats-left"));
let seatCount = parseInt(getInnerText("seat-count"));

for (const seat of seats) {
  seat.addEventListener("click", function () {
    seatCount++;

    if (seatCount <= 4) {
      setInnerText("seat-count", seatCount);
      seatsLeft--;
      setInnerText("seats-left", seatsLeft);

      seat.classList.add("bg-lime-600", "text-white", "selected");

      const table = document.getElementById("pricing-table");
      const tr = document.createElement("tr");

      const td1 = document.createElement("td");
      td1.innerText = seat.innerText;
      tr.appendChild(td1);

      const td2 = document.createElement("td");
      td2.innerText = "Economy";
      tr.appendChild(td2);

      const td3 = document.createElement("td");
      td3.innerText = 550;
      tr.appendChild(td3);

      table.appendChild(tr);

      setInnerText("total", 550 * seatCount);
      setInnerText("grand-total", 550 * seatCount);
    } else alert("You can buy 4 tickets at a time");
  });
}

const coupon = document.getElementById("coupon");
coupon.addEventListener("keyup", function () {
  const applyButton = coupon.nextElementSibling;

  if (coupon.value === "NEW15") {
    applyButton.removeAttribute("disabled");
    applyButton.addEventListener("click", function () {
      const total = getInnerText("total");
      convertedTotal = parseInt(total);
      const grandTotal = convertedTotal - convertedTotal * 0.15;
      setInnerText("grand-total", Math.round(grandTotal));
      document.getElementById("coupon-input").classList.add("hidden");
    });
  } else if (coupon.value === "COUPLE 20") {
    applyButton.removeAttribute("disabled");
    applyButton.addEventListener("click", function () {
      const total = getInnerText("total");
      convertedTotal = parseInt(total);
      const grandTotal = convertedTotal - convertedTotal * 0.2;
      setInnerText("grand-total", Math.round(grandTotal));
      document.getElementById("coupon-input").classList.add("hidden");
    });
  } else {
    applyButton.setAttribute("disabled", true);
  }
});

const confirmButton = document.getElementById("confirm-button");
confirmButton.addEventListener("click", function (e) {
  const name = document.getElementById("name").value.trim();
  const number = document.getElementById("number").value.trim();

  if (name && number) {
    document.getElementById("congrats").classList.remove("hidden");
  } else {
    alert("Please fill up the form");
  }
  e.preventDefault();
});

function setInnerText(id, text) {
  document.getElementById(id).innerText = text;
}

function getInnerText(id) {
  return document.getElementById(id).innerText;
}
