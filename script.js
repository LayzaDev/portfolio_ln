function openWhatsApp() {
  let name = document.querySelector("#inputName").value;
  let occupation = document.querySelector("#inputOccupation").value;
  let message = document.querySelector("#messageField").value;
  let phoneNumber = "+5534988273701";

  let enviar = `${name} | ${occupation} \n\n${message}`;

  let whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(
    enviar
  )}`;

  window.open(whatsappLink);
}

document.getElementById("form").addEventListener("submit", () => {
  openWhatsApp();
});
