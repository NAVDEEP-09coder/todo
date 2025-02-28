const rev = document.getElementById('revc').getContext('2d');
const revc = new Chart(rev, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Revenue ($)',
            
            data: [10000, 15000, 13000, 20000, 25000],
            borderColor: '#36a2eb',
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
        }],
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Monthly Revenue',
            },
        },
    },
});
const ug = document.getElementById('ugc').getContext('2d');
const ugc = new Chart(ug, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Users',
            data: [5000, 7000, 6000, 9000, 10000],
            backgroundColor: ['#1e3a8a', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fe'],
        }],
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Monthly User Growth',
            },
        },
    },
});

const burn = document.getElementById('burnc').getContext('2d');
const burnc = new Chart(burn, {
    type: 'radar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Burn Rate ($)',
            data: [8000, 9000, 10000, 11000, 10000],
            borderColor: 'blue',
            fill: true,
            backgroundColor: 'rgba(0, 0, 255, 0.2)',
        }],
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Monthly Burn Rate',
            },
        },
    },
});

const cacc = document.getElementById('cac').getContext('2d');
const cac = new Chart(cacc, {
    type: 'pie',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'CAC ($)',
            data: [40, 45, 50, 55, 60],
            backgroundColor: ['#1e3a8a', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'],
        }],
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Monthly Customer Acquisition Cost (CAC)',
            },
        },
    },
});

const compch = document.getElementById('comp').getContext('2d');
const competitorChart = new Chart(compch, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'UNDEFINED SQAUD',
                data: [10000, 12000, 11000, 13000, 14000],
                borderColor: '#36a2eb',
                fill: false,
            },
            {
                label: 'Competitor 1',
                data: [8000, 9000, 8500, 9500, 10000],
                borderColor: '#ff6384',
                fill: false,
            },
            {
                label: 'Competitor 2',
                data: [7000, 7500, 8000, 8500, 9000],
                borderColor: '#4bc0c0',
                fill: false,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Competitor Benchmarking',
            },
        },
    },
});