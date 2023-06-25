const evenOrOdd = () => {
  let input = +document.getElementById("num").value;
  let resultBox = document.getElementById("result")
  if (input === 0) {
    alert("Please Enter any Number");
  } else {
    if (input % 2 === 0) {
        resultBox.style.transform = "scale(100%)"
        resultBox.innerHTML = `
        <h1>${input} is Even</h1>
        `
        setInterval(() => {
            resultBox.style.transform = "scale(0)"
        }, 2000);
    } else {
        resultBox.style.transform = "scale(100%)"
        resultBox.innerHTML = `
        <h1>${input} is Odd</h1>
        `
        setInterval(() => {
            resultBox.style.transform = "scale(0)"
        }, 2000);
    }
  }
};
