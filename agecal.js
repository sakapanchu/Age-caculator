const months = [31,28,31,30,31,30,31,31,30,31,30,31];

  function ageCalculate() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthMonth, birthDate, birthYear;
    let birthDetails = {
      date : inputDate.getDate(),
      month : inputDate.getMonth() + 1,
      year : inputDate.getFullYear()   
    };

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    // leapChecker(currentYear); // Assuming leapChecker is not defined in this code

    if (birthDetails.year > currentYear || 
        (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)) {
      alert("Not Born Yet");
      displayResult("-", "-", "-");
      return;
    }

    birthYear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month) {
      birthMonth = currentMonth - birthDetails.month;
    } else {
      birthYear--;
      birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if (currentDate >= birthDetails.date) {
      birthDate = currentDate - birthDetails.date;
    } else {
      birthMonth--;
      let days = months[currentMonth - 2];
      birthDate = days + currentDate - birthDetails.date;
      if (birthMonth < 0) {
        birthMonth = 11;
        birthYear--;
      }
    }

    displayResult(birthDate, birthMonth, birthYear);
  }
  

  function displayResult(birthDate, birthMonth, birthYear) {
    document.getElementById("years").textContent = birthYear;
    document.getElementById("months").textContent = birthMonth;
    document.getElementById("days").textContent = birthDate;
  }
