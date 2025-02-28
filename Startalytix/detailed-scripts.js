
const ssiCtx = document.getElementById('ssiChart').getContext('2d');
new Chart(ssiCtx, {
  type: 'line',
  data: {
    labels: ['Revenue Growth', 'Burn Rate', 'Churn Rate', 'Profitability'],
    datasets: [{
      label: 'SSI Components',
      data: [25, 4, 1, 10],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: '#36a2eb',
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: { display: true, text: 'Startup Stability Index (SSI)' }
    }
  }
});

const cesCtx = document.getElementById('cesChart').getContext('2d');
new Chart(cesCtx, {
  type: 'bar',
  data: {
    labels: ['Market Share', 'LTV/CAC', 'NPS', 'Churn'],
    datasets: [{
      label: 'CES Components',
      data: [15, 8, 60, 7],
      backgroundColor: ['#4bc0c0', '#ffcd56', '#9966ff', '#ff6384']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: { display: true, text: 'Competitive Edge Score (CES)' }
    }
  }
});

const fueCtx = document.getElementById('fueChart').getContext('2d');
new Chart(fueCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'FUE Trend',
      data: [1.2, 1.5, 1.8, 2.0, 2.3],
      borderColor: '#ff6384',
      fill: false
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: { display: true, text: 'Funding Utilization Efficiency (FUE)' }
    }
  }
});
const irfCtx = document.getElementById('irfChart').getContext('2d');
new Chart(irfCtx, {
  type: 'pie',
  data: {
    labels: ['Risk Score', 'Remaining'],
    datasets: [{
      data: [35, 65], 
      backgroundColor: ['#36a2eb', '#eeeeee'],
      circumference: 180,
      rotation: -90
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: { display: true, text: 'Investment Risk Factor (IRF)' },
      legend: { display: false }
    }
  }
});
