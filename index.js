document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  console.log("day", day);
  const date = new Date(year, month - 1, day);
  const today = new Date();
  console.log(date);
  let year_diff = today.getFullYear() - date.getFullYear();
  let month_diff = today.getMonth() - date.getMonth();
  console.log(month_diff);
  let days_diff = today.getDate() - date.getDate();
  console.log(days_diff);

  // if days are negative values then it calculate prevMonth date
  if (days_diff < 0) {
    let prevDate = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days_diff += prevDate;
    month_diff--;
  }

  // checks month and days diff. any one is satisfies and decrease year
  if (month_diff < 0 || (month_diff === 0 && days_diff < 0)) {
    year_diff--;
  }

  if (month_diff < 0) {
    month_diff += 12;
  }

  document.getElementById("YEAR").innerHTML = year_diff;
  document.getElementById("MONTH").innerHTML = month_diff;
  document.getElementById("DAY").innerHTML = days_diff;
});
