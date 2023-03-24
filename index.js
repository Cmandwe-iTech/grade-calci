const submitbtn = document.getElementById("btn");
submitbtn.addEventListener("click", () => {
  const english = document.getElementById("eng").value;
  const maths = document.getElementById("maths").value;
  const physics = document.getElementById("phy").value;
  const chemistry = document.getElementById("chem").value;
  const computer = document.getElementById("comp").value;
  let total_marks =
    parseInt(english) +
    parseInt(maths) +
    parseInt(physics) +
    parseInt(chemistry) +
    parseInt(computer);
  let avg = total_marks / 5;
  if (
    english > 100 ||
    maths > 100 ||
    physics > 100 ||
    chemistry > 100 ||
    computer > 100
  ) {
    alert("marks should not be greater than 100");
  } else if (
    english < 35 ||
    maths < 35 ||
    physics < 35 ||
    chemistry < 35 ||
    computer < 35
  ) {
    document.getElementById("total").innerText = total_marks;
    document.getElementById("avg").innerText = avg;
    document.getElementById("gr").innerText = "Failed";
  } else {
    if (avg > 90) {
      document.getElementById(
        "total"
      ).innerText = `Total Marks are ${total_marks}`;
      document.getElementById(
        "avg"
      ).innerText = `Your Average marks are ${avg}`;
      document.getElementById("gr").innerText = "You Got A Grade";
    } else if (avg <= 89 && avg >= 80) {
      document.getElementById(
        "total"
      ).innerText = `Total Marks are ${total_marks}`;
      document.getElementById(
        "avg"
      ).innerText = `Your Average marks are ${avg}`;
      document.getElementById("gr").innerText = "You Got B Grade";
    } else if (avg <= 79 && avg >= 70) {
      document.getElementById(
        "total"
      ).innerText = `Total Marks are ${total_marks}`;
      document.getElementById(
        "avg"
      ).innerText = `Your Average marks are ${avg}`;
      document.getElementById("gr").innerText = "You Got C Grade";
    } else if (avg <= 69 && avg >= 60) {
      document.getElementById(
        "total"
      ).innerText = `Total Marks are ${total_marks}`;
      document.getElementById(
        "avg"
      ).innerText = `Your Average marks are ${avg}`;
      document.getElementById("gr").innerText = "You Got D Grade";
    } else {
      document.getElementById(
        "total"
      ).innerText = `Total Marks are ${total_marks}`;
      document.getElementById(
        "avg"
      ).innerText = `Your Average marks are ${avg}`;
      document.getElementById("gr").innerText = "You Got F Grade";
    }
  }
});
