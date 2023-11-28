function generateMealPlan() {
    // Validate email 
    var email = document.getElementById("email").value;
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Get user input
    var name = document.getElementById("name").value;
    var goal = document.getElementById("goal").value;
    
    // Get selected day
    var selectedDay = document.getElementById("day").value;

    // Get meal inputs for the selected day
    var breakfast = document.getElementById("breakfast").value;
    var snack1 = document.getElementById("snack1").value;
    var lunch = document.getElementById("lunch").value;
    var snack2 = document.getElementById("snack2").value;
    var dinner = document.getElementById("dinner").value;

    // Create HTML content
    var mealPlanContent = `
        <html>
        <head>
            <title>Meal Plan for ${name}</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <h1>Weekly Meal Plan for ${name}</h1>
            <p><strong>Goal for the Week:</strong> ${goal}</p>
            <h2>Monday</h2>
            <ul>
                <li>Breakfast: ${breakfast}</li>
                <li>Snack 1: ${snack1}</li>
                <li>Lunch: ${lunch}</li>
                <li>Snack 2: ${snack2}</li>
                <li>Dinner: ${dinner}</li>
            </ul>
            <!-- Repeat for each day of the week -->
        </body>
        </html>
    `;

    // Open a new window and write the meal plan content
    var mealPlanWindow = window.open('about:blank', 'mealPlanPage', 'width=600,height=800');
    mealPlanWindow.document.write(mealPlanContent);
}

// Clear Weekly Planner
function clearForm() {
    document.getElementById("mealPlanForm").reset();
}

// Print/Download Planner
function printMealPlan() {
    window.print();
}

function validateEmail(email) {
    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
