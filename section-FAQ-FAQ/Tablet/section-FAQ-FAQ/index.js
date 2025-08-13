function roomroasAccordion() {
  const accordionsBtns = document.querySelectorAll(".accordion-element .arrow")
  accordionsBtns.forEach(button => {
    button.addEventListener("click", () => {
      button.closest(".accordion-element").classList.toggle("active")
    })
  })
}
roomroasAccordion()