// ===== HOME PAGE JAVASCRIPT =====

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
    }
];

// Events Data
const upcomingEvents = [
    {
        title: "Career Fair 2024",
        date: "March 20, 2024",
        description: "Connect with top tech companies and explore career opportunities."
    },
    {
        title: "Research Symposium",
        date: "April 5, 2024",
        description: "Annual showcase of student and faculty research projects."
    },
    {
        title: "Alumni Homecoming",
        date: "April 15, 2024",
        description: "Reconnect with fellow alumni and share your success stories."
    }
];

// ===== ANNOUNCEMENTS SLIDER =====

let currentSlideIndex = 0;

function initializeAnnouncementsSlider() {
    const slider = document.getElementById('homeAnnouncementsSlider');
    if (!slider) return;
    
    // Get latest 3 announcements
    const latestAnnouncements = announcementsData.slice(0, 3);
    
    latestAnnouncements.forEach((announcement, index) => {
        const slide = document.createElement('div');
        slide.className = `announcement-slide${index === 0 ? ' active' : ''}`;
        slide.innerHTML = `
            <span class="category">${announcement.category}</span>
            <h3>${announcement.title}</h3>
            <p class="date">${formatDate(announcement.date)}</p>
            <p>${announcement.content}</p>
        `;
        slider.appendChild(slide);
    });
    
    // Auto-rotate announcements
    if (latestAnnouncements.length > 1) {
        setInterval(rotateAnnouncements, 5000);
    }
}

function rotateAnnouncements() {
    const slides = document.querySelectorAll('.announcement-slide');
    if (slides.length === 0) return;
    
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add('active');
}

// ===== UPCOMING EVENTS =====

function initializeUpcomingEvents() {
    const eventsContainer = document.getElementById('upcomingEvents');
    if (!eventsContainer) return;
    
    upcomingEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-header">
                <h3>${event.title}</h3>
                <div class="event-date">${event.date}</div>
            </div>
            <div class="event-body">
                <p>${event.description}</p>
            </div>
        `;
        eventsContainer.appendChild(eventCard);
    });
}

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', function() {
    initializeAnnouncementsSlider();
    initializeUpcomingEvents();
    trackPageView('home');
    
    console.log('Home page initialized');
});
