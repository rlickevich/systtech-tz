function triggerProduct() {
    const whouseList = document.querySelector('.whouse__list');

    whouseList.addEventListener('click', (e) => {
        e.preventDefault();

        const target = event.target;

        if (target.classList.contains('product__status__trigger')) {
            const targetSibling = target.nextElementSibling;

            if (target.classList.contains('is-active')) {
                target.classList.remove('is-active');
                targetSibling.style.display = 'none';
            } else {
                target.classList.add('is-active');
                targetSibling.style.display = 'block';
            }
        }
    })
}
export default triggerProduct();