// ===== ANNOUNCEMENTS PAGE JAVASCRIPT =====

// Announcements Data
const announcementsData = [
    {
        id: 1,
        title: "Enrollment Period for Academic Year 2024-2025",
        category: "Academic",
        date: "2024-02-05",
        content: "Online enrollment for the upcoming academic year will begin on February 15, 2024. Students are advised to prepare their documents and check their student portals for registration schedules."
    },
    {
        id: 2,
        title: "AI & Machine Learning Workshop",
        category: "Event",
        date: "2024-02-10",
        content: "Join us for a three-day intensive workshop on Artificial Intelligence and Machine Learning. Industry experts from leading tech companies will conduct hands-on sessions. Limited slots available. Register now!"
    },
    {
        id: 3,
        title: "Thesis Defense Deadline - Graduate Students",
        category: "Deadline",
        date: "2024-02-12",
        content: "All graduate students scheduled for thesis defense this semester must submit their final manuscripts to the Graduate Studies Office by February 28, 2024."
    },
    {
        id: 4,
        title: "New Research Laboratory Inaugurated",
        category: "News",
        date: "2024-02-03",
        content: "The College proudly announces the opening of our state-of-the-art Cybersecurity Research Laboratory, equipped with advanced tools and technologies for cutting-edge research."
    },
    {
        id: 5,
        title: "Hackathon 2024: Innovation Challenge",
        category: "Event",
        date: "2024-02-15",
        content: "Annual college-wide hackathon scheduled for March 15-17, 2024. Form your teams and develop innovative solutions to real-world problems. Amazing prizes await the winners!"
    },
    {
        id: 6,
        title: "Scholarship Application Deadline Extended",
        category: "Deadline",
        date: "2024-02-08",
        content: "The deadline for scholarship applications has been extended to February 25, 2024. Don't miss this opportunity to apply for academic excellence and financial assistance scholarships."
    },
    {
        id: 7,
        title: "Faculty Research Grants Available",
        category: "Academic",
        date: "2024-02-01",
        content: "Faculty members are invited to submit proposals for research grants. Funding is available for innovative projects in AI, cybersecurity, data science, and software engineering."
    },
    {
        id: 8,
        title: "Alumni Tech Talk Series Begins",
        category: "Event",
        date: "2024-02-20",
        content: "Our successful alumni working at Google, Microsoft, and local tech giants will share their career journeys and industry insights. First session on February 28, 2024."
    },
    {
        id: 9,
        title: "Final Exam Schedule Released",
        category: "Academic",
        date: "2024-02-07",
        content: "The final examination schedule for the current semester is now available on the student portal. Please review your exam dates and venues carefully."
    },
    {
        id: 10,
        title: "CCS Receives International Accreditation",
        category: "News",
        date: "2024-01-30",
        content: "We are proud to announce that our Computer Science program has received ABET accreditation, joining the ranks of internationally recognized institutions."
    }
];

// ===== DISPLAY ANNOUNCEMENTS =====

function displayAnnouncements(announcements) {
    const announcementsList = document.getElementById('announcementsList');
    
    if (!announcementsList) return;
    
    announcementsList.innerHTML = '';
    
    // Sort by date (newest first)
    const sortedAnnouncements = [...announcements].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    
    sortedAnnouncements.forEach(announcement => {
        const item = document.createElement('div');
        item.className = `announcement-item ${announcement.category}`;
        item.innerHTML = `
            <div class="announcement-header">
                <div>
                    <h3>${announcement.title}</h3>
                    <div class="announcement-meta">
                        <span class="category">${announcement.category}</span>
                        <span class="date">${formatDate(announcement.date)}</span>
                    </div>
                </div>
            </div>
            <p>${announcement.content}</p>
        `;
        announcementsList.appendChild(item);
    });
}

// ===== FILTER ANNOUNCEMENTS =====

function filterAnnouncements(category) {
    if (category === 'all') {
        return announcementsData;
    }
    
    return announcementsData.filter(announcement => 
        announcement.category === category
    );
}

// ===== FILTER BUTTONS =====

function initializeAnnouncementFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter category
            const category = this.getAttribute('data-filter');
            
            // Filter and display announcements
            const filtered = filterAnnouncements(category);
            displayAnnouncements(filtered);
        });
    });
}

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', function() {
    displayAnnouncements(announcementsData);
    initializeAnnouncementFilters();
    trackPageView('announcements');
    
    console.log('Announcements page initialized');
});
