// Function to load the project in the iframe
function loadProject(projectName) {
    const modal = document.getElementById('project-modal');
    const iframe = document.getElementById('project-frame');
    iframe.src = projectName + '/index.html'; // Load the project page
    modal.style.display = 'block';
}

// Close modal function (handles all modals)
function closeModal() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => modal.style.display = "none");

    // Clear iframe source when closing project modal
    document.getElementById('project-frame').src = '';
}

// Function to handle feedback submission
function submitFeedback() {
    const liked = document.querySelector('input[name="pitch"]:checked');
    const comments = document.getElementById('comments').value;

    if (liked) {
        // Store feedback in localStorage
        localStorage.setItem("feedback", JSON.stringify({ liked: liked.value, comments: comments }));

        // Show feedback confirmation modal
        document.getElementById("feedback-modal").style.display = "block";
    } else {
        alert("Please select if you liked the pitch.");
    }
}

// Function to handle "Hire me" button click--------------------------------------------
// Function to handle feedback submission
function submitFeedback() {
    const liked = document.querySelector('input[name="pitch"]:checked');
    const comments = document.getElementById('comments').value;

    if (liked) {
        // Store feedback in localStorage
        localStorage.setItem("feedback", JSON.stringify({ liked: liked.value, comments: comments }));

        // Show feedback confirmation modal
        document.getElementById("feedback-modal").style.display = "block";
    } else {
        alert("Please select if you liked the pitch.");
    }
}

// Function to handle "Hire me" button click
function hireMe() {
    // Show hire confirmation modal
    document.getElementById("hire-modal").style.display = "block";
}

// Close modal when clicking on "X"
function closeModal() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => modal.style.display = "none");
}

// Close modal when clicking outside of content
window.onclick = function(event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Show stored feedback if available on page load (optional)
window.onload = function() {
    const feedback = JSON.parse(localStorage.getItem("feedback"));
    if (feedback) {
        alert(`Your previous feedback: \nLiked Pitch: ${feedback.liked}\nComments: ${feedback.comments}`);
    }
}




