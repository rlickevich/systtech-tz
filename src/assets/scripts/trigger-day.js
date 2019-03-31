function triggerDay() {
    const whouseList = document.querySelector('.whouse__list');

    whouseList.addEventListener('click', (e) => {
        e.preventDefault();

        const target = event.target;

        if (target.classList.contains('day__trigger')) {

            if (target.classList.contains('is-active')) {
                target.classList.remove('is-active');
            } else {
                target.classList.add('is-active');
            }
        }
    })
}
export default triggerDay();    
