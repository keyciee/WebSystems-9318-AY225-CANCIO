// ===== PROGRAMS PAGE JAVASCRIPT =====

// Program Details Data
const programDetails = {
    bscs: {
        title: "Bachelor of Science in Computer Science",
        duration: "4 years",
        description: "A comprehensive program that provides a strong foundation in computer science theory and practice, preparing students for careers in software development, research, and technology innovation.",
        curriculum: [
            "Programming Fundamentals",
            "Data Structures and Algorithms",
            "Object-Oriented Programming",
            "Database Systems",
            "Software Engineering",
            "Computer Architecture",
            "Operating Systems",
            "Computer Networks",
            "Artificial Intelligence",
            "Machine Learning",
            "Web Technologies",
            "Mobile Application Development",
            "Capstone Project"
        ],
        careers: [
            "Software Developer/Engineer",
            "Systems Analyst",
            "AI/ML Engineer",
            "Research Scientist",
            "Technical Architect",
            "Game Developer"
        ],
        requirements: [
            "High school diploma with strong math background",
            "Entrance examination",
            "Interview",
            "Medical certificate"
        ]
    },
    bsit: {
        title: "Bachelor of Science in Information Technology",
        duration: "4 years",
        description: "Focuses on the practical application of technology in business and organizations, emphasizing system administration, network management, and IT infrastructure.",
        curriculum: [
            "Introduction to Computing",
            "Programming Languages",
            "Web Development",
            "Network Fundamentals",
            "System Administration",
            "Database Management",
            "IT Project Management",
            "Cybersecurity Fundamentals",
            "Cloud Computing",
            "Mobile Technologies",
            "IT Service Management",
            "Practicum/Internship"
        ],
        careers: [
            "IT Support Specialist",
            "Network Administrator",
            "Systems Administrator",
            "Cloud Solutions Architect",
            "IT Project Manager",
            "Cybersecurity Analyst"
        ],
        requirements: [
            "High school diploma",
            "Entrance examination",
            "Basic computer literacy",
            "Interview"
        ]
    },
    bsis: {
        title: "Bachelor of Science in Information Systems",
        duration: "4 years",
        description: "Bridges the gap between business and technology, focusing on enterprise systems, business analytics, and organizational information management.",
        curriculum: [
            "Fundamentals of Information Systems",
            "Business Process Management",
            "Database Design and Management",
            "Systems Analysis and Design",
            "Enterprise Resource Planning",
            "Business Intelligence",
            "Data Analytics",
            "E-Commerce Systems",
            "IT Governance",
            "Strategic Information Systems",
            "Project Management",
            "Capstone Project"
        ],
        careers: [
            "Business Analyst",
            "Systems Analyst",
            "Data Analyst",
            "ERP Consultant",
            "IT Business Partner",
            "Information Systems Manager"
        ],
        requirements: [
            "High school diploma",
            "Entrance examination",
            "Good analytical skills",
            "Interview"
        ]
    },
    mscs: {
        title: "Master of Science in Computer Science",
        duration: "2 years",
        description: "An advanced program designed for professionals seeking to deepen their expertise in computer science, with specializations in cutting-edge areas of technology.",
        curriculum: [
            "Advanced Algorithms",
            "Advanced Database Systems",
            "Advanced Software Engineering",
            "Research Methodology",
            "Artificial Intelligence",
            "Machine Learning",
            "Deep Learning",
            "Computer Vision",
            "Natural Language Processing",
            "Cybersecurity",
            "Cloud Architecture",
            "Thesis or Capstone Project"
        ],
        careers: [
            "Senior Software Engineer",
            "AI/ML Researcher",
            "Data Scientist",
            "Technology Consultant",
            "Research and Development Manager",
            "University Professor"
        ],
        requirements: [
            "Bachelor's degree in Computer Science or related field",
            "Minimum GPA of 2.5",
            "GRE/GMAT scores (for international students)",
            "Letters of recommendation",
            "Statement of purpose"
        ]
    },
    mit: {
        title: "Master in Information Technology",
        duration: "2 years",
        description: "A professional graduate program for IT practitioners and managers, focusing on strategic IT leadership, enterprise architecture, and technology management.",
        curriculum: [
            "Strategic IT Management",
            "Enterprise Architecture",
            "IT Governance and Compliance",
            "Advanced Network Security",
            "Cloud Computing and Virtualization",
            "Big Data Analytics",
            "IT Service Management",
            "Digital Transformation",
            "Innovation and Technology Management",
            "IT Risk Management",
            "Capstone Project"
        ],
        careers: [
            "IT Manager/Director",
            "Chief Information Officer",
            "IT Consultant",
            "Enterprise Architect",
            "IT Governance Manager",
            "Technology Strategist"
        ],
        requirements: [
            "Bachelor's degree in IT or related field",
            "Minimum 2 years work experience",
            "Letters of recommendation",
            "Statement of purpose",
            "Interview"
        ]
    }
};

// ===== PROGRAM TABS =====

function initializeProgramTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// ===== PROGRAM MODAL =====

function openProgramModal(programId) {
    const modal = document.getElementById('programModal');
    const modalContent = document.getElementById('programModalContent');
    const program = programDetails[programId];
    
    if (!program) return;
    
    modalContent.innerHTML = `
        <div class="program-details">
            <h2>${program.title}</h2>
            <p><strong>Duration:</strong> ${program.duration}</p>
            <p>${program.description}</p>
            
            <h3>Curriculum Highlights</h3>
            <ul>
                ${program.curriculum.map(course => `<li>${course}</li>`).join('')}
            </ul>
            
            <h3>Career Opportunities</h3>
            <ul>
                ${program.careers.map(career => `<li>${career}</li>`).join('')}
            </ul>
            
            <h3>Admission Requirements</h3>
            <ul>
                ${program.requirements.map(req => `<li>${req}</li>`).join('')}
            </ul>
        </div>
    `;
    
    modal.classList.add('active');
    trackModalView(programId);
}

function closeProgramModal() {
    const modal = document.getElementById('programModal');
    modal.classList.remove('active');
}

function trackModalView(programId) {
    // Track program modal views
    let modalViews = JSON.parse(localStorage.getItem('modalViews') || '{}');
    modalViews[programId] = (modalViews[programId] || 0) + 1;
    localStorage.setItem('modalViews', JSON.stringify(modalViews));
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('programModal');
    if (modal && event.target === modal) {
        closeProgramModal();
    }
});

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', function() {
    initializeProgramTabs();
    trackPageView('programs');
    
    console.log('Programs page initialized');
});
