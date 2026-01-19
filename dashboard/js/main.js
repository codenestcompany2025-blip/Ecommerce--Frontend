document.addEventListener('DOMContentLoaded', function () {

    /*LINE CHART*/
 
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [{
                label: 'Revenue',
                data: [0,50,80,70,110,95,120,150,90,80,100,140],
                borderColor: '#00bfa5',
                backgroundColor: 'rgba(0,191,165,0.1)',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } }
        }
    });


    /*PIE CHART */

    const ctxPie = document.getElementById('pieChart').getContext('2d');
    new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Paid Ads', 'Direct & Other', 'Organic Search'],
            datasets: [{
                data: [45, 25, 30],
                backgroundColor: ['#9ED4CF5E', '#031E1B', '#085952']
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } }
        }
    });

   
    /* HAMBURGER MENU */
    
    const hamburger = document.querySelector('.hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });

   
    /* DARK MODE */

    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.toggle('dark-mode');
    });

});
