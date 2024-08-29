// scroll.js
document.getElementById('top').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#top-section').scrollIntoView({ behavior: 'smooth' });
});
