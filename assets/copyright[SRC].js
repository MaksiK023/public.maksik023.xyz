const list = ['public.maksik023.xyz', 'http://localhost:5500', 'http://127.0.0.1:5500'];
if (!list.includes(window.location.origin.toLowerCase())) {
    window.location.href = 'https://public.maksik023.xyz/';
}

try {
    const copyright = document.getElementById('copyright');
    copyright.innerHTML = '';
    copyright.innerHTML += `<a href='${window.location.origin}/LICENSE.txt' target='_blank'>CopyRight &copy; ${new Date().getFullYear()} - ${window.location.origin}</a>`;
    copyright.innerHTML += `<link rel='stylesheet' href='${window.location.origin}/assets/copyright.css' />`;
} catch (e) {
    throw new Error('Error founded, while setting "copyright" element!', e);
}