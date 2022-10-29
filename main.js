function main() {
  // BT 1 : Tính ngày tháng năm

  function handleCalculateDateBefore(day, month, year, result) {
    // Kiểm tra giá trị nhập đầu vào
    if (day < 1 || month < 1) {
      alert("Giá trị nhập ko hợp lệ!");
      return;
    }

    if (month === 2 && day >= 30) {
      alert("Giá trị nhập ko hợp lệ!");
      return;
    }

    if (day === 1) {
      switch (month) {
        case 5:
        case 7:
        case 10:
        case 12:
          day = 30;
          month -= 1;

          break;
        case 3:
          if (year % 400 === 0) {
            day = 29;
            month -= 1;
          } else if (year % 400 !== 0) {
            day = 28;
            month -= 1;
          }
          break;
        case 1:
          day = 31;
          year -= year;
          month = 12;

          break;
        case 2:
        case 4:
        case 6:
        case 8:
        case 9:
        case 11:
          day = 1;
          month -= 1;
          break;
      }
      result.textContent = day + "/" + month + "/" + year;
    } else {
      result.textContent = Number((day -= 1)) + "/" + month + "/" + year;
    }
  }

  function handleCalculateDateAfter(day, month, year, result) {
    if (day < 1 || month < 1) {
      alert("Giá trị nhập ko hợp lệ!");
      return;
    }

    if (month === 2 && day >= 30) {
      alert("Giá trị nhập ko hợp lệ!");
      return;
    }

    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if (day === 31) {
          day = 1;
          month += 1;
        } else day += 1;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        if (day === 30) {
          day = 1;
          month += 1;
        } else day += 1;
        break;
      case 2:
        if (year % 400 === 0 && day < 29) {
          day += 1;
        }
        if (year % 400 !== 0 && day === 28) {
          day = 1;
          month += 1;
        }
        break;
    }
    result.textContent = day + "/" + month + "/" + year;
  }

  function calculateDate() {
    var formElement = document.querySelector(".bt-1__form");
    var beforeDateBtn = document.querySelector(".btn-before");
    var afterDateBtn = document.querySelector(".btn-after");
    var result = document.querySelector(".result-bt-1");

    if (!formElement || !beforeDateBtn || !afterDateBtn || !result) return;

    var day = formElement.querySelector("#day");
    var month = formElement.querySelector("#month");
    var year = formElement.querySelector("#year");

    beforeDateBtn.addEventListener("click", () => {
      handleCalculateDateBefore(
        Number(day.value),
        Number(month.value),
        Number(year.value),
        result
      );
    });

    afterDateBtn.addEventListener("click", () => {
      handleCalculateDateAfter(
        Number(day.value),
        Number(month.value),
        Number(year.value),
        result
      );
    });
  }

  // BT 2 : Tính tháng

  function handleCalculateMonth(formElement) {
    var month = Number(formElement.querySelector("#month").value);
    var year = Number(formElement.querySelector("#year").value);

    var result = document.querySelector(".result-bt-2");
    var message;

    if (!month || !year) alert("Thông tin nhập không hợp lệ");

    if (!result) return;

    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        message = "Tháng " + month + " năm " + year + " có 31 ngày";
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        message = "Tháng " + month + " năm " + year + " có 30 ngày";
        break;
      case 2:
        if (year % 400 === 0)
          message = "Tháng " + month + " năm " + year + " có 29 ngày";
        else message = "Tháng " + month + " năm " + year + " có 28 ngày";

        break;
    }

    result.textContent = message;
  }

  function calculateMonth() {
    const formElement = document.querySelector(".bt-2__form");

    if (!formElement) return;

    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      handleCalculateMonth(formElement);
    });
  }

  // BT 3: Đọc số

  function handleDigitNumber(num) {
    if (!num) return;

    switch (num) {
      case 1:
        return "một";
      case 2:
        return "hai";
      case 3:
        return "ba";
      case 4:
        return "bốn";
      case 5:
        return "năm";
      case 6:
        return "sáu";
      case 7:
        return "bảy";
      case 8:
        return "tám";
      case 9:
        return "chín";
    }
  }

  function handleDozenNumber(num) {
    if (!num) return;

    switch (num) {
      case 1:
        return "mười";
      case 2:
        return "hai mươi";
      case 3:
        return "ba mươi";
      case 4:
        return "bốn mươi";
      case 5:
        return "năm mươi";
      case 6:
        return "sáu mươi";
      case 7:
        return "bảy mươi";
      case 8:
        return "tám mươi";
      case 9:
        return "chín mươi";
    }
  }

  function handleHundredNumber(num) {
    if (!num) return;
    switch (num) {
      case 1:
        return "một trăm";
      case 2:
        return "hai trăm";
      case 3:
        return "ba trăm";
      case 4:
        return "bốn mươi";
      case 5:
        return "năm trăm";
      case 6:
        return "sáu trăm";
      case 7:
        return "bảy trăm";
      case 8:
        return "tám trăm";
      case 9:
        return "chín trăm";
    }
  }

  function handleReadNumber(formElement) {
    var num = formElement.querySelector("#num");
    var result = document.querySelector(".result-bt-3");

    if (!num || !result) return;

    if (num.value.length < 3 || num.value.length > 3) {
      alert("Giá trị nhập không hợp lệ!");
      num.focus();
      return;
    }

    var number = Number(num.value);
    var digitNumber = number % 10;
    var dozenNumber = Math.floor((number % 100) / 10);
    var hundredNumber = Math.floor((number % 1000) / 100);

    var digit =
      handleDigitNumber(digitNumber) === undefined
        ? ""
        : handleDigitNumber(digitNumber);
    var dozen =
      handleDozenNumber(dozenNumber) === undefined && digitNumber > 0
        ? "lẻ"
        : handleDozenNumber(dozenNumber) === undefined && digit === ""
        ? ""
        : handleDozenNumber(dozenNumber);
    var hundred = handleHundredNumber(hundredNumber);

    result.textContent = hundred + " " + dozen + " " + digit;
  }

  function readNumber() {
    var formElement = document.querySelector(".bt-3__form");
    if (!formElement) return;

    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      handleReadNumber(formElement);
    });
  }

  // BT 4: Tìm sinh viên xa trường nhất

  function calculateD(x1, x2, y1, y2) {
    return Number(
      Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(2)
    );
  }

  function findTheLongestD(x, y, z) {
    var max = x;

    if (y > max && y > z) max = y;
    else if (z > max && z > y) max = z;

    return max;
  }

  function handleFindStudent(formElement) {
    // First student
    var firstName = formElement.querySelector("#firstName").value;
    var firstX = Number(formElement.querySelector("#firstX").value);
    var firstY = Number(formElement.querySelector("#firstY").value);

    // Second student
    var secondName = formElement.querySelector("#secondName").value;
    var secondX = Number(formElement.querySelector("#secondX").value);
    var secondY = Number(formElement.querySelector("#secondY").value);

    // Third student
    var thirdName = formElement.querySelector("#thirdName").value;
    var thirdX = Number(formElement.querySelector("#thirdX").value);
    var thirdY = Number(formElement.querySelector("#thirdY").value);

    // School
    var schoolX = Number(formElement.querySelector("#schoolX").value);
    var schoolY = Number(formElement.querySelector("#schoolY").value);

    // Result
    var result = document.querySelector(".result-bt-4");
    if (!result) return;

    // Calculate D
    var firstD = calculateD(firstX, schoolX, firstY, schoolY);
    var secondD = calculateD(secondX, schoolX, secondY, schoolY);
    var thirdD = calculateD(thirdX, schoolX, thirdY, schoolY);

    var longestD = findTheLongestD(firstD, secondD, thirdD);

    var final =
      longestD === firstD
        ? firstName
        : longestD === secondD
        ? secondName
        : thirdName;

    result.textContent = "Sinh viên xa trường nhất: " + final;
  }

  function findStudent() {
    var formElement = document.querySelector(".bt-4__form");
    if (!formElement) return;

    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      handleFindStudent(formElement);
    });
  }

  findStudent();
  readNumber();
  calculateDate();
  calculateMonth();
}

main();
