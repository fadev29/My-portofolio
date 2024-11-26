function sendEmail() {
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  let emailReceuver = "fachridjohar71@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceuver}?subject=${subject}&body=${message}`;
  a.target = "_blank";
  a.click();
}
