const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Example endpoint for user sign up
app.post('/api/signup', (req, res) => {
    const { username, email, password } = req.body;
    // Validate input and save to database
    // Example response
    res.json({ message: 'User signed up successfully!' });
});

// Example endpoint to fetch dashboard data
// Example endpoint to fetch dashboard data
app.get('/api/dashboard', (req, res) => {
    // Fetch data from database or external service
    const dashboardData = {
        ongoingProjects: [
            // Sample data
            { title: 'Project 1', description: 'Project 1 description' },
            { title: 'Project 2', description: 'Project 2 description' }
        ]
    };
    res.json(dashboardData);
});


// Example endpoint for job search
app.get('/api/jobs', (req, res) => {
    const searchQuery = req.query.search;
    // Perform search based on searchQuery
    const jobs = [
        // Sample job data
        { title: 'Job Title 1', description: 'Job description 1', budget: 500 },
        { title: 'Job Title 2', description: 'Job description 2', budget: 1000 }
    ];
    res.json(jobs);
});

// Example endpoint to handle job posting
app.post('/api/jobs', (req, res) => {
    const { title, description, budget, timeline, skillsNeeded } = req.body;
    // Validate input and save job details to database
    // Example response
    res.json({ message: 'Job posted successfully!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
