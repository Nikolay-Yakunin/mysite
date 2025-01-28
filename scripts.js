document.addEventListener('DOMContentLoaded', () => {
    const email = 'akuninn52@gmail.com';
    const hashedEmail = CryptoJS.MD5(email.trim().toLowerCase());
    const gravatarUrl = `https://www.gravatar.com/avatar/${hashedEmail}?s=200`;
    document.getElementById('gravatar-image').src = gravatarUrl;
});
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

