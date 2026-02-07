// ===== CONTACT PAGE JAVASCRIPT =====

// ===== FORM VALIDATION =====

function validateField(field) {
    const formGroup = field.closest('.form-group');
    const errorMsg = formGroup.querySelector('.error-message');
    let isValid = true;
    let message = '';
    
    // Check if field is required and empty
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        message = 'This field is required';
    }
    
    // Email validation
    if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            isValid = false;
            message = 'Please enter a valid email address';
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && field.value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(field.value) || field.value.replace(/\D/g, '').length < 10) {
            isValid = false;
            message = 'Please enter a valid phone number (at least 10 digits)';
        }
    }
    
    // Name validation (at least 2 words)
    if (field.id === 'fullName' && field.value) {
        const words = field.value.trim().split(/\s+/);
        if (words.length < 2) {
            isValid = false;
            message = 'Please enter your full name (first and last name)';
        }
    }
    
    // Message length validation
    if (field.id === 'message' && field.value) {
        if (field.value.trim().length < 10) {
            isValid = false;
            message = 'Message must be at least 10 characters long';
        }
    }
    
    if (!isValid) {
        formGroup.classList.add('error');
        errorMsg.textContent = message;
    } else {
        formGroup.classList.remove('error');
        errorMsg.textContent = '';
    }
    
    return isValid;
}

function validateForm() {
    const form = document.getElementById('inquiryForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// ===== FORM SUBMISSION =====

function submitForm() {
    const form = document.getElementById('inquiryForm');
    const formData = new FormData(form);
    
    // Create inquiry object
    const inquiry = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        inquiryType: formData.get('inquiryType'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
    };
    
    // Save to localStorage
    saveInquiry(inquiry);
    
    // Show success modal
    showSuccessModal(`Thank you, ${inquiry.fullName}! Your inquiry has been received. We will contact you at ${inquiry.email} within 24-48 hours.`);
    
    // Reset form
    form.reset();
    
    // Clear sessionStorage
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        sessionStorage.removeItem(`form_${input.name}`);
    });
}

function saveInquiry(inquiry) {
    // Get existing inquiries from localStorage
    let inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    
    // Add new inquiry
    inquiries.push(inquiry);
    
    // Save back to localStorage
    localStorage.setItem('inquiries', JSON.stringify(inquiries));
}

// ===== SUCCESS MODAL =====

function showSuccessModal(message) {
    const modal = document.getElementById('successModal');
    const messageElement = document.getElementById('successMessage');
    
    if (modal && messageElement) {
        messageElement.textContent = message;
        modal.classList.add('active');
    }
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('successModal');
    if (modal && event.target === modal) {
        closeSuccessModal();
    }
});

// ===== FORM AUTO-SAVE =====

function initializeFormAutoSave() {
    const form = document.getElementById('inquiryForm');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, select, textarea');
    
    // Load saved data
    inputs.forEach(input => {
        const savedValue = sessionStorage.getItem(`form_${input.name}`);
        if (savedValue) {
            input.value = savedValue;
        }
        
        // Save on change
        input.addEventListener('input', function() {
            sessionStorage.setItem(`form_${this.name}`, this.value);
        });
    });
}

// ===== FORM EVENT LISTENERS =====

function initializeFormValidation() {
    const form = document.getElementById('inquiryForm');
    if (!form) return;
    
    // Add real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.closest('.form-group').classList.contains('error')) {
                validateField(this);
            }
        });
    });
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
}

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', function() {
    initializeFormValidation();
    initializeFormAutoSave();
    trackPageView('contact');
    
    console.log('Contact page initialized');
});
