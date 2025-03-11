function loadSection(section) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(s => s.classList.add('hidden'));
    
    const activeSection = document.getElementById(section);
    activeSection.classList.remove('hidden');
    
    const links = document.querySelectorAll('nav a');
    links.forEach(link => link.style.color = '');
    
    const activeLink = document.querySelector(`nav a[onclick="loadSection('${section}')"]`);
    activeLink.style.color = '#007bff';
}

// По умолчанию показываем главную страницу
loadSection('home');

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        document.querySelector('header').style.backgroundColor = '#333';
        document.querySelector('nav').style.color = '#fff';
        document.querySelector('.theme-toggle').style.color = '#fff';
    } else {
        document.querySelector('header').style.backgroundColor = '#fff';
        document.querySelector('nav').style.color = '#333';
        document.querySelector('.theme-toggle').style.color = '#333';
    }
}
