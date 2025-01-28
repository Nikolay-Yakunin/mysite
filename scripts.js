const avatar = document.querySelector('.avatar');

avatar.addEventListener('mousemove', (e) => {
    const rect = avatar.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    avatar.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
});

avatar.addEventListener('mouseleave', () => {
    avatar.style.transform = 'translate(0, 0)';
});

