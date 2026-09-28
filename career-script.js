// CareerReady AI JavaScript Functions

// Initialize Bootstrap components
document.addEventListener('DOMContentLoaded', function() {
    // Setup navigation active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Login Form Submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }

    // Signup Form Submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleSignup();
        });
    }
});

// Handle Login
function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Validation
    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    // Simulate login process
    console.log('Login attempt:', email);

    // Show dashboard
    const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    loginModal.hide();

    // Simulate loading
    const loginBtn = document.querySelector('#loginForm button[type="submit"]');
    const originalText = loginBtn.textContent;
    loginBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Logging in...';

    setTimeout(() => {
        loginBtn.textContent = originalText;
        showDashboard();
    }, 1000);
}

// Handle Signup
function handleSignup() {
    const firstName = document.getElementById('signupFirstName').value;
    const lastName = document.getElementById('signupLastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    // Validation
    if (!firstName || !lastName || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters.');
        return;
    }

    // Simulate signup process
    console.log('Signup attempt:', { firstName, lastName, email });

    // Show success
    alert(`Welcome, ${firstName}! Your account has been created successfully.`);
    document.getElementById('signupForm').reset();

    const signupModal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
    signupModal.hide();
}

// Show Dashboard
function showDashboard() {
    const dashboardModal = new bootstrap.Modal(document.getElementById('dashboardModal'));
    dashboardModal.show();
}

// Notification System
class NotificationSystem {
    constructor() {
        this.container = null;
        this.init();
    }

    init() {
        this.container = document.createElement('div');
        this.container.id = 'notification-container';
        this.container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            width: 350px;
        `;
        document.body.appendChild(this.container);
    }

    show(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} alert-dismissible fade show shadow`;
        notification.innerHTML = `
            <strong>${this.getIcon(type)} ${message}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        this.container.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            this.removeNotification(notification);
        }, 5000);
    }

    getIcon(type) {
        const icons = {
            info: '<i class="fas fa-info-circle"></i>',
            success: '<i class="fas fa-check-circle"></i>',
            warning: '<i class="fas fa-exclamation-triangle"></i>',
            error: '<i class="fas fa-times-circle"></i>'
        };
        return icons[type] || icons.info;
    }

    removeNotification(element) {
        element.remove();
    }
}

// Initialize notification system
const notifications = new NotificationSystem();

// CareerPathAnalyzer
const CareerPathAnalyzer = {
    analyzeProfile(profile) {
        console.log('Analyzing profile:', profile);

        // Simulate AI analysis
        return {
            recommendedPaths: ['Software Developer', 'Data Scientist', 'Product Manager'],
            skillGaps: ['Communication', 'Team Leadership', 'Cloud Computing'],
            confidenceScore: 0.85
        };
    }
};

// ResumeBuilder
const ResumeBuilder = {
    reviewResume(resumeText) {
        console.log('Reviewing resume...');

        // Simulate AI resume review
        return {
            suggestions: [
                'Add quantifiable achievements',
                'Use action verbs consistently',
                'Include relevant keywords for ATS'
            ],
            overallScore: 75,
            improvements: 3
        };
    }
};

// MockInterview
const MockInterview = {
    startInterview(jobTitle) {
        console.log('Starting mock interview for:', jobTitle);

        const questions = [
            'Tell me about yourself',
            'What are your strengths and weaknesses?',
            'Why do you want to work here?',
            'Where do you see yourself in 5 years?'
        ];

        notifications.show('Mock interview started!', 'success');
        return questions;
    },

    provideFeedback(answer, question) {
        console.log('Providing feedback for:', { answer, question });

        return {
            score: Math.floor(Math.random() * (100 - 70 + 1) + 70),
            feedback: 'Good response! Consider adding specific examples.'
        };
    }
};

// JobMatcher
const JobMatcher = {
    findJobs(userProfile) {
        console.log('Finding jobs for:', userProfile);

        // Simulate job matching
        return [
            { title: 'Software Engineer', company: 'Tech Corp', match: 92 },
            { title: 'Junior Developer', company: 'Startup Inc', match: 85 },
            { title: 'Data Analyst', company: 'Analytics Co', match: 78 }
        ];
    }
};

// Event Listeners
document.addEventListener('click', function(e) {
    // Handle resume review
    if (e.target.classList.contains('review-resume-btn')) {
        const resume = "Student with strong technical skills";
        const result = ResumeBuilder.reviewResume(resume);
        notifications.show(`Resume Score: ${result.overallScore}`, 'success');
    }

    // Handle mock interview
    if (e.target.classList.contains('start-interview-btn')) {
        MockInterview.startInterview('Software Engineer');
    }

    // Handle job search
    if (e.target.classList.contains('search-jobs-btn')) {
        const jobs = JobMatcher.findJobs({ skills: ['JavaScript', 'Python'], education: 'B.Tech' });
        console.log('Matched jobs:', jobs);
    }
});

// CareerReadinessIndex Calculator
const CareerReadinessIndex = {
    calculate(profile) {
        const factors = {
            skills: 0.3,
            education: 0.2,
            experience: 0.25,
            certifications: 0.15,
            softSkills: 0.1
        };

        // Calculate weighted score
        return Math.floor(Math.random() * (100 - 40 + 1) + 40);
    }
};

// Export modules
window.CareerReady = {
    CareerPathAnalyzer,
    ResumeBuilder,
    MockInterview,
    JobMatcher,
    CareerReadinessIndex,
    notifications
};

// Initialize on load
window.addEventListener('load', function() {
    console.log('CareerReady AI initialized successfully!');
});
