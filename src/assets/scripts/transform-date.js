
export default function transformDate(date) {
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const newDate = new Date(date);
    const month = newDate.getMonth();
    const day = newDate.getDate();
    const myDate = `${day} ${months[month]}`;

    return myDate;
}


