// Model answers for teacher reference
const modelAnswers = {
    topicSentence1: "Solar and wind power offer numerous environmental and economic benefits that make them increasingly attractive alternatives to fossil fuels.",
    conclusion1: "These benefits demonstrate why solar and wind energy are essential components of a sustainable energy future.",
    topicSentence2: "Despite their promise, solar and wind power face significant technical, environmental, and economic limitations that must be overcome.",
    conclusion2: "These challenges highlight the need for continued innovation and investment to fully realize the potential of renewable energy sources."
};

// DOM Elements
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const showAnswersBtn = document.getElementById('showAnswersBtn');
const feedbackBox = document.getElementById('feedbackBox');
const answersContent = document.getElementById('answersContent');
const topicSentence1 = document.getElementById('topicSentence1');
const conclusion1 = document.getElementById('conclusion1');
const topicSentence2 = document.getElementById('topicSentence2');
const conclusion2 = document.getElementById('conclusion2');

// Event Listeners
submitBtn.addEventListener('click', checkAnswers);
resetBtn.addEventListener('click', resetForm);
showAnswersBtn.addEventListener('click', displayModelAnswers);

// Function to check answers
function checkAnswers() {
    const userAnswers = {
        topicSentence1: topicSentence1.value.trim(),
        conclusion1: conclusion1.value.trim(),
        topicSentence2: topicSentence2.value.trim(),
        conclusion2: conclusion2.value.trim()
    };

    // Check if all fields are filled
    const allFilled = Object.values(userAnswers).every(answer => answer.length > 0);

    if (!allFilled) {
        alert('Please fill in all the blank sections before checking your answers.');
        return;
    }

    // Check minimum length for each answer (at least 10 words)
    const feedback = [];
    let allValid = true;

    for (const [key, value] of Object.entries(userAnswers)) {
        const wordCount = value.split(/\s+/).length;
        if (wordCount < 10) {
            allValid = false;
            feedback.push(`${key}: Your answer seems too short. Try to expand your sentence to at least 10 words.`);
        }
    }

    if (!allValid) {
        alert('Some of your answers are too short. Expand them and try again:\n\n' + feedback.join('\n'));
        return;
    }

    // Display positive feedback
    displayPositiveFeedback(userAnswers);
}

// Function to display positive feedback
function displayPositiveFeedback(userAnswers) {
    feedbackBox.classList.remove('hidden');
    answersContent.innerHTML = `
        <div class="answer-item">
            <strong>✓ Excellent Work!</strong>
            <p>You've completed all the blanks with substantial sentences. Here are suggestions for improvement based on the model answers:</p>
        </div>
        
        <div class="answer-item">
            <strong>Topic Sentence 1 (Benefits Paragraph):</strong>
            <p><strong>Your answer:</strong> "${userAnswers.topicSentence1}"</p>
            <p><strong>Model answer:</strong> "${modelAnswers.topicSentence1}"</p>
            <p><strong>Feedback:</strong> Check if your sentence clearly introduces the main benefits of solar and wind power. Does it prepare the reader for the details that follow?</p>
        </div>
        
        <div class="answer-item">
            <strong>Concluding Sentence 1 (Benefits Paragraph):</strong>
            <p><strong>Your answer:</strong> "${userAnswers.conclusion1}"</p>
            <p><strong>Model answer:</strong> "${modelAnswers.conclusion1}"</p>
            <p><strong>Feedback:</strong> Your conclusion should summarize the key benefits discussed. Does it reinforce the paragraph's main idea?</p>
        </div>
        
        <div class="answer-item">
            <strong>Topic Sentence 2 (Limitations Paragraph):</strong>
            <p><strong>Your answer:</strong> "${userAnswers.topicSentence2}"</p>
            <p><strong>Model answer:</strong> "${modelAnswers.topicSentence2}"</p>
            <p><strong>Feedback:</strong> Check if your sentence clearly introduces the limitations of solar and wind power. Does it signal a shift in perspective?</p>
        </div>
        
        <div class="answer-item">
            <strong>Concluding Sentence 2 (Limitations Paragraph):</strong>
            <p><strong>Your answer:</strong> "${userAnswers.conclusion2}"</p>
            <p><strong>Model answer:</strong> "${modelAnswers.conclusion2}"</p>
            <p><strong>Feedback:</strong> Your conclusion should tie together the challenges mentioned. Does it emphasize why these limitations matter?</p>
        </div>
        
        <div class="answer-item">
            <strong>Overall Tips:</strong>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>Topic sentences should be specific and directly relate to the paragraph content</li>
                <li>Concluding sentences should not introduce new information; they should reinforce what was discussed</li>
                <li>Use clear, academic language appropriate for essay writing</li>
                <li>Connect your sentences to the overall thesis of the essay</li>
            </ul>
        </div>
    `;
    
    // Scroll to feedback
    feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Function to display model answers
function displayModelAnswers() {
    feedbackBox.classList.remove('hidden');
    answersContent.innerHTML = `
        <div class="answer-item">
            <strong>Topic Sentence 1 (Benefits Paragraph):</strong>
            <p>"${modelAnswers.topicSentence1}"</p>
        </div>
        
        <div class="answer-item">
            <strong>Concluding Sentence 1 (Benefits Paragraph):</strong>
            <p>"${modelAnswers.conclusion1}"</p>
        </div>
        
        <div class="answer-item">
            <strong>Topic Sentence 2 (Limitations Paragraph):</strong>
            <p>"${modelAnswers.topicSentence2}"</p>
        </div>
        
        <div class="answer-item">
            <strong>Concluding Sentence 2 (Limitations Paragraph):</strong>
            <p>"${modelAnswers.conclusion2}"</p>
        </div>
        
        <div class="answer-item">
            <strong>Key Points to Remember:</strong>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li><strong>Topic Sentences:</strong> Introduce the main idea of the paragraph and guide the reader</li>
                <li><strong>Concluding Sentences:</strong> Summarize the key point and connect it back to the thesis</li>
                <li><strong>Paragraph Coherence:</strong> Make sure your sentences flow logically from introduction to conclusion</li>
                <li><strong>Academic Tone:</strong> Maintain a formal, objective tone appropriate for essays</li>
                <li><strong>Thesis Connection:</strong> Ensure each paragraph supports the main thesis about renewable energy</li>
            </ul>
        </div>
    `;
    
    // Scroll to feedback
    feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Function to reset the form
function resetForm() {
    topicSentence1.value = '';
    conclusion1.value = '';
    topicSentence2.value = '';
    conclusion2.value = '';
    feedbackBox.classList.add('hidden');
    answersContent.innerHTML = '';
    
    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Auto-save functionality (saves to localStorage)
function autoSaveAnswers() {
    const answers = {
        topicSentence1: topicSentence1.value,
        conclusion1: conclusion1.value,
        topicSentence2: topicSentence2.value,
        conclusion2: conclusion2.value
    };
    localStorage.setItem('essayAnswers', JSON.stringify(answers));
}

// Load saved answers from localStorage
function loadSavedAnswers() {
    const saved = localStorage.getItem('essayAnswers');
    if (saved) {
        const answers = JSON.parse(saved);
        topicSentence1.value = answers.topicSentence1 || '';
        conclusion1.value = answers.conclusion1 || '';
        topicSentence2.value = answers.topicSentence2 || '';
        conclusion2.value = answers.conclusion2 || '';
    }
}

// Add auto-save listeners
topicSentence1.addEventListener('input', autoSaveAnswers);
conclusion1.addEventListener('input', autoSaveAnswers);
topicSentence2.addEventListener('input', autoSaveAnswers);
conclusion2.addEventListener('input', autoSaveAnswers);

// Load saved answers on page load
document.addEventListener('DOMContentLoaded', loadSavedAnswers);
