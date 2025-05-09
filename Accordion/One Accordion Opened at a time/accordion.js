const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');

    title.addEventListener('click', () => {
        accordionItems.forEach(otherItem => {
            
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
            else {
                item.classList.toggle('active');
            }
        });
    });
});