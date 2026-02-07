// ===== FACULTY PAGE JAVASCRIPT =====

// Faculty Data
const facultyData = [
    {
        name: "Dr. Maria Santos",
        rank: "Professor",
        department: "Computer Science",
        specialization: "Artificial Intelligence, Machine Learning",
        email: "maria.santos@ccs.edu.ph",
        initials: "MS"
    },
    {
        name: "Dr. John Reyes",
        rank: "Associate Professor",
        department: "Computer Science",
        specialization: "Software Engineering, Algorithms",
        email: "john.reyes@ccs.edu.ph",
        initials: "JR"
    },
    {
        name: "Dr. Patricia Cruz",
        rank: "Professor",
        department: "Information Technology",
        specialization: "Network Security, Cybersecurity",
        email: "patricia.cruz@ccs.edu.ph",
        initials: "PC"
    },
    {
        name: "Dr. Robert Gonzales",
        rank: "Assistant Professor",
        department: "Information Technology",
        specialization: "Cloud Computing, DevOps",
        email: "robert.gonzales@ccs.edu.ph",
        initials: "RG"
    },
    {
        name: "Dr. Jennifer Lim",
        rank: "Professor",
        department: "Information Systems",
        specialization: "Data Analytics, Business Intelligence",
        email: "jennifer.lim@ccs.edu.ph",
        initials: "JL"
    },
    {
        name: "Prof. Michael Tan",
        rank: "Assistant Professor",
        department: "Computer Science",
        specialization: "Computer Graphics, Game Development",
        email: "michael.tan@ccs.edu.ph",
        initials: "MT"
    },
    {
        name: "Dr. Sarah Villanueva",
        rank: "Associate Professor",
        department: "Information Systems",
        specialization: "Enterprise Systems, Database Management",
        email: "sarah.villanueva@ccs.edu.ph",
        initials: "SV"
    },
    {
        name: "Prof. David Ramos",
        rank: "Instructor",
        department: "Information Technology",
        specialization: "Web Development, Mobile Applications",
        email: "david.ramos@ccs.edu.ph",
        initials: "DR"
    },
    {
        name: "Dr. Lisa Garcia",
        rank: "Associate Professor",
        department: "Computer Science",
        specialization: "Data Structures, Programming Languages",
        email: "lisa.garcia@ccs.edu.ph",
        initials: "LG"
    },
    {
        name: "Prof. Antonio Bautista",
        rank: "Instructor",
        department: "Information Systems",
        specialization: "Systems Analysis, Project Management",
        email: "antonio.bautista@ccs.edu.ph",
        initials: "AB"
    },
    {
        name: "Dr. Catherine Lee",
        rank: "Professor",
        department: "Computer Science",
        specialization: "Quantum Computing, Cryptography",
        email: "catherine.lee@ccs.edu.ph",
        initials: "CL"
    },
    {
        name: "Prof. Emmanuel Torres",
        rank: "Assistant Professor",
        department: "Information Technology",
        specialization: "IoT, Embedded Systems",
        email: "emmanuel.torres@ccs.edu.ph",
        initials: "ET"
    }
];

// ===== FACULTY DISPLAY =====

function displayFaculty(facultyList) {
    const facultyGrid = document.getElementById('facultyGrid');
    const noResults = document.getElementById('noResults');
    
    if (!facultyGrid) return;
    
    facultyGrid.innerHTML = '';
    
    if (facultyList.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    facultyList.forEach(faculty => {
        const card = document.createElement('div');
        card.className = 'faculty-card';
        card.innerHTML = `
            <div class="faculty-avatar">${faculty.initials}</div>
            <h3>${faculty.name}</h3>
            <div class="faculty-rank">${faculty.rank}</div>
            <div class="faculty-department">${faculty.department}</div>
            <div class="faculty-specialization">${faculty.specialization}</div>
            <div class="faculty-contact">${faculty.email}</div>
        `;
        facultyGrid.appendChild(card);
    });
}

// ===== FACULTY SEARCH =====

function searchFaculty(query) {
    query = query.toLowerCase().trim();
    
    if (!query) {
        return facultyData;
    }
    
    return facultyData.filter(faculty => {
        return faculty.name.toLowerCase().includes(query) ||
               faculty.specialization.toLowerCase().includes(query) ||
               faculty.department.toLowerCase().includes(query) ||
               faculty.rank.toLowerCase().includes(query);
    });
}

// ===== FACULTY FILTER =====

function filterFaculty(department, rank) {
    let filtered = facultyData;
    
    if (department !== 'all') {
        filtered = filtered.filter(faculty => faculty.department === department);
    }
    
    if (rank !== 'all') {
        filtered = filtered.filter(faculty => faculty.rank === rank);
    }
    
    return filtered;
}

// ===== APPLY FILTERS =====

function applyFilters() {
    const searchQuery = document.getElementById('facultySearch').value;
    const department = document.getElementById('departmentFilter').value;
    const rank = document.getElementById('rankFilter').value;
    
    // First apply search
    let results = searchFaculty(searchQuery);
    
    // Then apply filters
    results = results.filter(faculty => {
        const deptMatch = department === 'all' || faculty.department === department;
        const rankMatch = rank === 'all' || faculty.rank === rank;
        return deptMatch && rankMatch;
    });
    
    displayFaculty(results);
}

// ===== EVENT LISTENERS =====

function initializeFacultyFilters() {
    const searchInput = document.getElementById('facultySearch');
    const departmentFilter = document.getElementById('departmentFilter');
    const rankFilter = document.getElementById('rankFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }
    
    if (departmentFilter) {
        departmentFilter.addEventListener('change', applyFilters);
    }
    
    if (rankFilter) {
        rankFilter.addEventListener('change', applyFilters);
    }
}

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', function() {
    displayFaculty(facultyData);
    initializeFacultyFilters();
    trackPageView('faculty');
    
    console.log('Faculty page initialized');
});
