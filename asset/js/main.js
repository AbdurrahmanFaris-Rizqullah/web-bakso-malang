// Include header
fetch('partials/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data);

// Include footer
fetch('partials/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);
