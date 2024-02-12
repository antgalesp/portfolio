document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('nav button');
    const sections = document.querySelectorAll('main section');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            hideAllSections();
            showSection(sections[index]);
        });
    });

    function hideAllSections() {
        sections.forEach(section => {
            section.classList.add('hidden');
        });
    }

    function showSection(section) {
        section.classList.remove('hidden');
    }

    // Display the first section by default
    showSection(sections[0]);
});