// To restrict the date selection to only upcoming 7 days
document.addEventListener("DOMContentLoaded", function () {
  var dateInput = document.getElementById("date");
  var today = new Date();
  var maxDate = new Date();
  maxDate.setDate(today.getDate() + 7);

  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);
  var maxYear = maxDate.getFullYear();
  var maxMonth = ("0" + (maxDate.getMonth() + 1)).slice(-2);
  var maxDay = ("0" + maxDate.getDate()).slice(-2);

  dateInput.setAttribute("min", `${year}-${month}-${day}`);
  dateInput.setAttribute("max", `${maxYear}-${maxMonth}-${maxDay}`);
});

// to get the value from main.html and populate it into monument field
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const monument = urlParams.get("monument");
  if (monument) {
    document.getElementById("monument").value = monument;
  }
};

// to calculate the total ticket amount
document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const tourists = document.getElementById("tourists").value;
    const monument = document.getElementById("monument");
    const selectedMonument = monument.options[monument.selectedIndex];
    const ticketPrice = selectedMonument.getAttribute("data-price");
    const totalAmount = tourists * ticketPrice;

    const bookingData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      tourists: tourists,
      monument: selectedMonument.text,
      date: document.getElementById("date").value,
      totalAmount: totalAmount,
    };

    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    window.location.href = "summary.html";
  });
