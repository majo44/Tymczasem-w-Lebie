const externalSections = document.querySelectorAll('section[external]');
externalSections.forEach(async e => {
    const f = document.createElement('template');
    f.innerHTML = await fetch(e.getAttribute('external')).then(r => r.blob()).then(b => b.text());
    e.parentElement.insertBefore(f.content, e);
    e.remove();
});
