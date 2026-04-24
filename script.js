const welcomeMessage = document.getElementById("welcomeMessage");
const changeTextButton = document.getElementById("changeTextButton");
const dynamicText = document.getElementById("dynamicText");
const contactButton = document.getElementById("contactButton");

if (welcomeMessage) {
  welcomeMessage.textContent =
    "Bienvenido a mi portafolio personal. Gracias por pasar por aqui.";
}

if (changeTextButton && dynamicText) {
  changeTextButton.onclick = function () {
    dynamicText.textContent =
      "Me gusta trabajar en paginas que transmitan una idea clara, se vean bien y mantengan una navegacion sencilla. Este portafolio es una muestra de ese estilo.";
    changeTextButton.textContent = "Gracias por leer";
    changeTextButton.disabled = true;
  };
}

if (contactButton && welcomeMessage) {
  contactButton.onclick = function () {
    var contactSection = document.getElementById("contact");

    welcomeMessage.textContent =
      "Gracias por visitar mi portafolio. Puedes escribirme desde la seccion de contacto.";

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
}
