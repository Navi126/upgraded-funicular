// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
    // Select all project summaries
    const projectSummaries = document.querySelectorAll('.project-summary');

    // Initially hide all summaries by default
    projectSummaries.forEach(summary => {
        summary.style.display = 'none';
    });

    // Add event listeners to all portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get the summary div within the clicked portfolio item
            const summary = this.querySelector('.project-summary');

            // Toggle the display property of the summary
            if (summary.style.display === 'none' || summary.style.display === '') {
                summary.style.display = 'block';  // Show the summary
            } else {
                summary.style.display = 'none';  // Hide the summary
            }
        });
    });
});


// Get references to the portfolio items
const project1 = document.getElementById('project1');
const project2 = document.getElementById('project2');
const project3 = document.getElementById('project3');

// Add click event listener to Project 1
project1.addEventListener('click', function() {
    // Toggle visibility of Project 2 and Project 3
    if (project2.style.display === 'none') {
        project2.style.display = 'block';
        project3.style.display = 'block';
    } else {
        project2.style.display = 'none';
        project3.style.display = 'none';
    }

});

project2.addEventListener('click', function() {
    // Toggle visibility of Project 1 and Project 3
    if (project1.style.display === 'none') {
        project1.style.display = 'block';
        project3.style.display = 'block';
    } else {
        project1.style.display = 'none';
        project3.style.display = 'none';
    }

});
project3.addEventListener('click', function() {
    // Toggle visibility of Project 1 and Project 3
    if (project1.style.display === 'none') {
        project1.style.display = 'block';
        project2.style.display = 'block';
    } else {
        project1.style.display = 'none';
        project2.style.display = 'none';
    }

});


