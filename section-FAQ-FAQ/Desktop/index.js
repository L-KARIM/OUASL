function faqaccordion(){
    const Accordionbutton = document.querySelectorAll('.accordion-element .arrow');
    Accordionbutton.forEach((button) => {
        button.addEventListener('click', () => {
            button.closest('.accordion-element').classList.toggle('active');
        });
    });
}
faqaccordion();