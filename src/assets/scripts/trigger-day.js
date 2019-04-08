function triggerDay() {
    const whouseList = document.querySelector('.whouse__list');

    whouseList.addEventListener('click', (e) => {
        e.preventDefault();

        const target = event.target;

        if (target.classList.contains('day__trigger')) {
            const parent = target.parentElement;
            const targetSibling = parent.nextElementSibling;

            if (target.classList.contains('is-active')) {
                target.classList.remove('is-active');
                targetSibling.style.height = '0';
            } else {
                target.classList.add('is-active');
                targetSibling.style.height = '100%';
            }
        }
    })
}
triggerDay();