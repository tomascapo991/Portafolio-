function toggleDescription(projectElement) {
    const description = projectElement.querySelector('.description');
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
}