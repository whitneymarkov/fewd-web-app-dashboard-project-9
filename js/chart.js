//=====================================
// Web Traffic Chart
//=====================================

//global chart options
Chart.defaults.global.defaultFontFamily = 'Rubik';

let globalOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            ticks: {
                display: true,
                fontSize: 9
            },
            gridLines: {
                display: false,
                drawBorder: false
            }
        }],
        yAxes: [{
            ticks: {
                display: true,
                fontSize: 9
            },
            gridLines: {
                display: false,
                drawBorder: false
            }
        }]
    }
}

//hourly traffic chart
const webTrafficHourly = document.getElementById('webTrafficHourly').getContext('2d');
const hourlyTraffic = new Chart(webTrafficHourly, {
    type: 'line',
    data: {
        labels: [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13' ],
        datasets: [{
            label: 'Visits',
            backgroundColor: 'rgba(227, 105, 92, 0)',
            borderColor: 'rgba(227, 105, 92, 1)',
            borderWidth: 2,
            pointHoverBorderColor: 'rgba(227, 105, 92, 1)',
            pointHoverBackgroundColor: 'rgba(227, 105, 92, 1)',
            pointHoverRadius: 5,
            data: [ 640, 865, 320, 430, 320, 470, 240, 464, 360, 580, 830, 490, 568, 800 ],
        },
        {
            label: 'Avg visit duration',
            backgroundColor: 'rgba(227, 105, 92, 0)',
            borderColor: 'rgba(84, 149, 148, 1)',
            borderWidth: 1,
            pointHoverBorderColor: 'rgba(84, 149, 148, 1)',
            pointHoverBackgroundColor: 'rgba(84, 149, 148, 1)',
            pointHoverRadius: 5,
            data: [ 740, 765, 420, 530, 420, 370, 540, 364, 460, 480, 630, 790, 868, 700 ],
        }]
    },
    options: globalOptions,
});

//daily traffic chart
const webTrafficDaily = document.getElementById('webTrafficDaily').getContext('2d');
const dailyTraffic = new Chart(webTrafficDaily, {
    type: 'line',
    data: {
        labels: [ '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th' ],
        datasets: [{
            label: 'Visits',
            backgroundColor: 'rgba(227, 105, 92, 0)',
            borderColor: 'rgba(227, 105, 92, 1)',
            borderWidth: 2,
            pointHoverBorderColor: 'rgba(227, 105, 92, 1)',
            pointHoverBackgroundColor: 'rgba(227, 105, 92, 1)',
            pointHoverRadius: 5,
            data: [ 640, 865, 320, 430, 320, 470, 240, 464, 360, 580, 830, 490, 568, 800 ],
        },
        {
            label: 'Avg visit duration',
            backgroundColor: 'rgba(227, 105, 92, 0)',
            borderColor: 'rgba(84, 149, 148, 1)',
            borderWidth: 1,
            pointHoverBorderColor: 'rgba(84, 149, 148, 1)',
            pointHoverBackgroundColor: 'rgba(84, 149, 148, 1)',
            pointHoverRadius: 5,
            data: [ 740, 765, 420, 530, 420, 370, 540, 364, 460, 480, 630, 790, 500 ],
        }]
    },
    options: globalOptions,
});

//weekly traffic chart
const webTrafficWeekly = document.getElementById('webTrafficWeekly').getContext('2d');
const weeklyTraffic = new Chart(webTrafficWeekly, {
    type: 'line',
    data: {
        labels: [ '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41' ],
        datasets: [{
            label: 'Visits',
            backgroundColor: 'rgba(227, 105, 92, 0)',
            borderColor: 'rgba(227, 105, 92, 1)',
            borderWidth: 2,
            pointHoverBorderColor: 'rgba(227, 105, 92, 1)',
            pointHoverBackgroundColor: 'rgba(227, 105, 92, 1)',
            pointHoverRadius: 5,
            data: [ 280, 739, 350, 540, 500, 860, 340, 649, 467, 856, 600 ],
        },
        {
            label: 'Avg visit duration',
            backgroundColor: 'rgba(227, 105, 92, 0)',
            borderColor: 'rgba(84, 149, 148, 1)',
            borderWidth: 1,
            pointHoverBorderColor: 'rgba(84, 149, 148, 1)',
            pointHoverBackgroundColor: 'rgba(84, 149, 148, 1)',
            pointHoverRadius: 5,
            data: [ 700, 439, 479, 240, 300, 360, 640, 349, 267, 556, 500 ],
        }]
    },
    options: globalOptions,
});

//monthly traffic chart
const webTrafficMonthly = document.getElementById('webTrafficMonthly').getContext('2d');
const monthlyTraffic = new Chart(webTrafficMonthly, {
    type: 'line',
    data: {
        labels: [ 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug' ],
        datasets: [{
            label: 'Visits',
            backgroundColor: 'rgba(227, 105, 92, 0)',
            borderColor: 'rgba(227, 105, 92, 1)',
            borderWidth: 2,
            pointHoverBorderColor: 'rgba(227, 105, 92, 1)',
            pointHoverBackgroundColor: 'rgba(227, 105, 92, 1)',
            pointHoverRadius: 5,
            data: [ 1200, 1400, 1800, 980, 840, 1030, 790, 1276, 820, 1475, 830, 490, 568 ],
        },
        {
            label: 'Avg visit duration',
            backgroundColor: 'rgba(227, 105, 92, 0)',
            borderColor: 'rgba(84, 149, 148, 1)',
            borderWidth: 1,
            pointHoverBorderColor: 'rgba(84, 149, 148, 1)',
            pointHoverBackgroundColor: 'rgba(84, 149, 148, 1)',
            pointHoverRadius: 5,
            data: [ 740, 920, 600, 530, 962, 370, 540, 364, 730, 480, 630, 790, 868, 700 ],
        }]
    },
    options: globalOptions,
});

//hiding all charts except default (Weekly)
document.getElementById('webTrafficHourly').style.display = 'none';
document.getElementById('webTrafficDaily').style.display = 'none';
document.getElementById('webTrafficMonthly').style.display = 'none';

//grabbing all the buttons and charts
const chartBtn = document.querySelectorAll('.chartBtn');
const trafficChart = document.querySelectorAll('.trafficChart');

//highlight current selected chart button
$('.chartBtn').on('click', function() {
    $('.chartBtn').removeClass('active');
    $(this).addClass('active');
});

//show corresponding chart to clicked label, hide all other charts
for (let i = 0; i < chartBtn.length; i++) {
    chartBtn[i].index = i;
    chartBtn[i].addEventListener('click', function(e) {
        for (let j = 0; j < chartBtn.length; j++) {
            trafficChart[j].style.display = 'none';

        }
        trafficChart[this.index].style.display = 'block';
    });
}
