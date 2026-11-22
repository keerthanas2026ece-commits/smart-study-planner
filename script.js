// Smart Study Planner - interactive features

const assignmentCheckboxes = document.querySelectorAll(
    '.assignments input[type="checkbox"]'
);

const assignmentCount = document.getElementById('assignment-count');
const progressFill = document.getElementById('progress-fill');
const progressTrack = document.getElementById('progress-track');
const progressMessage = document.getElementById('progress-message');
const greeting = document.getElementById('greeting');

// Show a greeting based on the current time.
function showGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.textContent = 'Good morning, Student!';
    } else if (hour < 17) {
        greeting.textContent = 'Good afternoon, Student!';
    } else {
        greeting.textContent = 'Good evening, Student!';
    }
}

// Update the assignment counter and progress bar.
function updateAssignments() {
    const total = assignmentCheckboxes.length;

    const completed = document.querySelectorAll(
        '.assignments input[type="checkbox"]:checked'
    ).length;

    const remaining = total - completed;
    const percentage = total === 0
        ? 0
        : Math.round((completed / total) * 100);

    assignmentCount.textContent = `${completed} / ${total} done`;
    progressFill.style.width = `${percentage}%`;
    progressTrack.setAttribute('aria-valuenow', percentage);

    if (remaining === 0) {
        progressMessage.textContent = 'Great work! You completed every assignment.';
    } else {
        progressMessage.textContent =
            `You have ${remaining} assignment${remaining === 1 ? '' : 's'} left. Keep going!`;
    }
}

// Listen for checkbox changes.
assignmentCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', updateAssignments);
});

// Set up the page when it loads.
showGreeting();
updateAssignments();
