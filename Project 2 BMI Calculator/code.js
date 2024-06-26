const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height <= 0 || isNaN(height)) {
    result.innerHTML = `Enter a Valid Height ${height}`;
    return;
  }
  if (weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Enter a Valid Weight ${weight}`;
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi < 18.6) {
    result.innerHTML = `You Are Under Weight as per Your BMI ${bmi}`;
  } else if (bmi > 24.9) {
    result.innerHTML = `You Are Over Weight as per Your BMI ${bmi}`;
  } else {
    result.innerHTML = `You Are Normal as per Your BMI ${bmi}`;
  }
});
