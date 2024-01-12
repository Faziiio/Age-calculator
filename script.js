function calculateAge() {
  var dobInput = document.getElementById("dob");
  var resultElement = document.getElementById("result");

  // Check if a date is selected
  if (!dobInput.value) {
    resultElement.innerText = "Please select a date of birth.😅";
    resultElement.style.color = "red";
    return;
  }

  var dob = new Date(dobInput.value);
  var today = new Date();

  var ageDate = new Date(today - dob);
  var ageYears = ageDate.getUTCFullYear() - 1970;
  var ageMonths = ageDate.getUTCMonth();
  var ageDays = ageDate.getUTCDate() - 1;
  var ageHours = ageDate.getUTCHours();
  var ageMinutes = ageDate.getUTCMinutes();
  var ageSeconds = ageDate.getUTCSeconds();

  resultElement.innerText =
    "You are " +
    ageYears +
    " years, " +
    ageMonths +
    " months, " +
    ageDays +
    " days, " +
    ageHours +
    " hours, " +
    ageMinutes +
    " minutes, and " +
    ageSeconds +
    " seconds old.";

  resultElement.style.color = "green";

  // Update every second
  setTimeout(calculateAge, 1000);
}
