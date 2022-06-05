function previous(year, month, day){
    let event = new Date(year, month, day);
    event.setDate(day-1);
    console.log(event.getFullYear() + "-" + event.getMonth() + "-" + event.getDate());
}
previous(2016, 10, 1);