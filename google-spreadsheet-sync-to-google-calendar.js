function addToCalendar(event) {
    var range = event.range;
    var name = range.getValues()[0][10];
    var startDate = range.getValues()[0][11];
    var endDate = range.getValues()[0][12];
    endDate.setDate(endDate.getDate() + 1)

    var event = CalendarApp.getCalendarsByName('Hahow')[0].createEvent(name + ' 請假',
        startDate,
        endDate);
}
