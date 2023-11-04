function menu() {
  const btnmobile = document.getElementById("btn-mobile");
  function togglemenu(event) {
    if (event.type === "touchstart") event.preventDefaul();
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
  }
  btnmobile.addEventListener("click", togglemenu);
  btnmobile.addEventListener("touchstart", togglemenu);
}
menu();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion h2");
  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");

    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
  // console.log(accordionList);
}
initAccordion();

const linkInternos = document.querySelectorAll('.js-menu a[href^"#"]');
