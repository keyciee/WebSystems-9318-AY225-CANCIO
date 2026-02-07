# WebSystems-9318-AY225

# College of Computer Studies - Academic Department Website

## Project Overview
This is a professional academic department website for the College of Computer Studies, built with HTML, CSS, and advanced JavaScript functionalities.

## Features Implemented

### Required Pages (6 Pages)
1. **Home** - Hero section, quick stats, announcements slider, upcoming events
2. **About the College** - Mission, vision, values, history, accreditations
3. **Academic Programs** - Undergraduate and graduate programs with detailed information
4. **Faculty Directory** - Complete faculty listing with search and filter capabilities
5. **Announcements / Academic Events** - Dynamic announcement board with category filtering
6. **Contact / Inquiry Page** - Contact information and inquiry form with validation

### Advanced JavaScript Functionalities

#### 1. Dynamic Content Rendering
- Dynamic faculty directory populated from JavaScript data
- Dynamic announcements board with real-time updates
- Dynamic events calendar
- Auto-rotating announcement slider on homepage
- Tab-based program display (Undergraduate/Graduate)

#### 2. Interactive Forms with Client-Side Validation
- Comprehensive contact/inquiry form
- Real-time validation with error messages
- Email format validation
- Phone number validation
- Name validation (requires first and last name)
- Message length validation
- Visual feedback for errors
- Form data auto-save using SessionStorage

#### 3. Modal Dialogs
- Program details modal with rich content
- Success confirmation modal
- Keyboard navigation (ESC to close)
- Click-outside-to-close functionality
- Smooth animations

#### 4. Filtering and Search Functionality
- **Faculty Directory:**
  - Real-time search by name or specialization
  - Filter by department
  - Filter by academic rank
  - Instant results update
  
- **Announcements:**
  - Filter by category (All, Academic, Events, Deadlines, News)
  - Visual category indicators

#### 5. Tabs and Accordions
- Program tabs (Undergraduate/Graduate programs)
- Smooth transitions between tab contents
- Active state management

#### 6. LocalStorage Implementation
- Save and load last visited page
- Track total visit count
- Store inquiry submissions
- Track program modal views
- Page view analytics
- User preferences storage

#### 7. SessionStorage Implementation
- Auto-save form data while filling
- Restore unsaved form data on page reload
- Clear data on successful submission

#### 8. Dynamic Announcements System
- Auto-rotating announcement slider (5-second intervals)
- Latest announcements displayed on homepage
- Full announcements page with filtering
- Category-based color coding

#### 9. Responsive UI Behavior
- Mobile-friendly navigation menu
- Hamburger menu toggle
- Responsive grid layouts
- Adaptive form layouts
- Touch-friendly interface

#### 10. Advanced Navigation
- Single-page application (SPA) behavior
- Smooth page transitions
- Active state management
- Hash-based routing
- Mobile menu auto-close on navigation

### Additional Features

#### Design & UX
- Professional academic color scheme
- Clean, readable typography
- Smooth animations and transitions
- Hover effects on interactive elements
- Sticky navigation bar
- Scroll-based navbar styling
- Card-based layouts
- Shadow effects for depth
- Gradient backgrounds

#### Accessibility
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states for interactive elements
- Responsive design for all screen sizes

#### Data Management
- Structured faculty data (12 faculty members)
- Comprehensive announcements data (10 announcements)
- Detailed program information (5 programs)
- Event listings
- All data easily maintainable in JavaScript

## File Structure
```
├── index.html          # Main HTML file with all page sections
├── styles.css          # Comprehensive CSS with responsive design
├── script.js           # Advanced JavaScript functionalities
└── README.md           # This documentation file
```

## Technology Stack
- **HTML5** - Semantic markup
- **CSS3** - Modern styling, flexbox, grid, animations
- **JavaScript (ES6+)** - Advanced functionalities, DOM manipulation
- **LocalStorage API** - Persistent data storage
- **SessionStorage API** - Temporary form data storage

## JavaScript Features Breakdown

### Data Storage & State Management
- Faculty directory data array
- Announcements data array
- Program details objects
- Events data array
- State variables for filters and current selections

### Core Functions
1. `initializeApp()` - Main initialization
2. `showPage()` - SPA page switching
3. `filterFaculty()` - Faculty search and filter
4. `filterAnnouncements()` - Announcement filtering
5. `validateForm()` - Form validation
6. `submitForm()` - Form submission handler
7. `openProgramModal()` - Modal display
8. `startAnnouncementSlider()` - Auto-rotating slider
9. `trackVisit()` - Analytics tracking
10. `saveInquiry()` - LocalStorage data persistence

### Event Listeners
- Navigation click handlers
- Mobile menu toggle
- Form input validation
- Search input handlers
- Filter change handlers
- Tab switching handlers
- Modal close handlers
- Keyboard navigation
- Window resize handlers
- Scroll effects

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled
- LocalStorage and SessionStorage support required

## Design Principles
1. **Academic Professionalism** - Appropriate for educational institution
2. **Clean Layout** - Easy navigation and readability
3. **Student-Centered** - Information easily accessible
4. **Responsive** - Works on all device sizes
5. **Interactive** - Engaging user experience

## Testing Checklist
- ✓ All 6 pages functional
- ✓ Navigation works correctly
- ✓ Faculty search returns accurate results
- ✓ Faculty filters work (department, rank)
- ✓ Announcement filters work correctly
- ✓ Contact form validation works
- ✓ Program modals display correctly
- ✓ LocalStorage saves data
- ✓ SessionStorage auto-saves form
- ✓ Mobile menu toggles properly
- ✓ Responsive design works on mobile
- ✓ All JavaScript functions operational

## Deployment Notes
1. Upload all three files to web hosting
2. Ensure files are in the same directory
3. No backend required - fully client-side
4. Works as static website
5. Can be deployed to GitHub Pages, Netlify, Vercel, etc.

## Future Enhancements (Optional)
- Backend API integration for real data
- User authentication system
- Online application processing
- Calendar integration
- News feed from external sources
- Virtual campus tour
- Live chat support
- Email notification system

## Developer Notes
- All data is currently static in JavaScript
- Easy to connect to backend API by replacing data arrays
- Form submissions currently saved to LocalStorage only
- Can integrate with email service or backend for real submissions
- Modular code structure for easy maintenance
- Well-commented for future developers

---

**Developed for:** EXAM SET B - Academic Department Website  
**Focus:** College of Computer Studies  
**Technologies:** HTML5, CSS3, Advanced JavaScript  
**Date:** February 2024
