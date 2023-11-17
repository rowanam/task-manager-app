$(document).ready(function () {
    // sidenav initialization
    $('.sidenav').sidenav();

    // modal initialization
    $('.modal').modal();

    // datepicker initialization
    let currentDate = new Date();
    $('.datepicker').datepicker({
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"},
        minDate: currentDate
    });

    // select dropdown initialization
    $('select').formSelect();
});