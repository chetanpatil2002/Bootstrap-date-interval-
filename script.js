$(document).ready(function () {
    //  datepickers
    $('#startDate, #endDate').datepicker({
        format: 'mm/dd/yyyy',
        autoclose: true
    });

    //  click event to calculate button
    $('#calculateBtn').on('click', function () {
        // Get selected dates
        var startDate = $('#startDate').datepicker('getDate');
        var endDate = $('#endDate').datepicker('getDate');

        // Check if both dates are selected
        if (startDate === null || endDate === null) {     
            alert('Please select both start and end dates.');
            return;
        }

        // Calculate the interval in years, months, weeks, and days
        var interval = calculateDateInterval(startDate, endDate);

        // Display the result
        $('#result').html(`
            <p>In years: ${interval.years}</p>
            <p>In months: ${interval.months}</p>
            <p>In weeks: ${interval.weeks}</p>
            <p>In days: ${interval.days}</p>
        `);
    });
});

function calculateDateInterval(startDate, endDate) {
    var years = endDate.getFullYear() - startDate.getFullYear();
    var months = (endDate.getMonth() - startDate.getMonth() + 12) % 12;
    var weeks = Math.floor((endDate - startDate) / (7 * 24 * 60 * 60 * 1000));
    var days = Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000));

    return {
        years: years,
        months: months,
        weeks: weeks,
        days: days
    };
}
