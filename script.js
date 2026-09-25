document.addEventListener('DOMContentLoaded', () => {
    const topicSentence1 = document.getElementById('topicSentence1');
    const concludingSentence1 = document.getElementById('concludingSentence1');
    const topicSentence2 = document.getElementById('topicSentence2');
    const concludingSentence2 = document.getElementById('concludingSentence2');

    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = document.getElementById('resetBtn');
    const showModelBtn = document.getElementById('showModelBtn');

    const feedbackSection = document.getElementById('feedbackSection');
    const feedbackContent = document.getElementById('feedbackContent');
    const modelAnswersSection = document.getElementById('modelAnswersSection');

    const inputs = [
        topicSentence1,
        concludingSentence1,
        topicSentence2,
        concludingSentence2
    ];

    function getTrimmedValue(input) {
        return input.value.trim();
    }

    function isAcceptableSentence(value) {
        return value.length >= 10;
    }

    function showFeedback() {
        const values = inputs.map(getTrimmedValue);
        const missing = values.filter(value => !value).length;
        const short = values.filter(value => value && !isAcceptableSentence(value)).length;

        let message = '';

        if (missing > 0) {
            message += '<p>Please complete all four blank sentences before submitting.</p>';
        }

        if (short > 0) {
            message += '<p>Some entries are very short. Try to write more complete sentences for better practice.</p>';
        }

        if (missing === 0 && short === 0) {
            message += '<p>Great work! Each sentence appears complete and ready for practice.</p>';
        }

        feedbackSection.classList.remove('hidden');
        feedbackContent.innerHTML = message;
    }

    submitBtn.addEventListener('click', showFeedback);

    resetBtn.addEventListener('click', () => {
        inputs.forEach(input => {
            input.value = '';
        });
        feedbackSection.classList.add('hidden');
        modelAnswersSection.classList.add('hidden');
    });

    showModelBtn.addEventListener('click', () => {
        modelAnswersSection.classList.remove('hidden');
        feedbackSection.classList.add('hidden');
    });
});
