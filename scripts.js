emailjs.init("fns-7ZguFiey7gKAS");

const menu = document.getElementById("menuBtn");
const navbarSmall = document.getElementById("nav-links");
const closeBtn = document.getElementById("closeBtn");
const allLinks = document.querySelectorAll("a");

menu.addEventListener("click", function () {
  navbarSmall.classList.add("is-visible");
  closeBtn.classList.add("is-visible");
});

closeBtn.addEventListener("click", function () {
  navbarSmall.classList.remove("is-visible");
  closeBtn.classList.add("is-visible");
});

allLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navbarSmall.classList.remove("is-visible");
    closeBtn.classList.add("is-visible");
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_df8sy5j", "template_09p4anc", this).then(
      function (response) {
        alert("E-mail enviado com sucesso!");
      },
      function (error) {
        console.error("Erro ao enviar o e-mail:", error);
        alert(
          "Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde."
        );
      }
    );
  });
