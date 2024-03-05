// Something...
async function sendIP() {
    try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();

        const jsonData = {
            origin: window.location.origin,
            href: window.location.href,
            path: window.location.pathname,
            key: '6quPIooh4y',
            ip: ipData.ip
        };

        await fetch('https://api.maksik023.xyz/ip', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        });
    } catch (error) {}
}
sendIP();

// List of allowed websites
const allowedWebsites = ['https://public.maksik023.xyz', 'http://localhost:5500', 'http://127.0.0.1:5500'];
if (!allowedWebsites.includes(window.location.origin.toLowerCase())) {
    window.location.href = 'https://public.maksik023.xyz/';
}

// Copyright system
try {
    const copyright = document.getElementById('copyright');
    copyright.innerHTML = `
        <a href='${window.location.origin}/LICENSE.txt' target='_blank'>
            CopyRight &copy; ${new Date().getFullYear()} - MaksiK023.xyz
        </a>
        <link rel='stylesheet' href='${window.location.origin}/assets/copyright.css' />
        <div style='height:10px' class='ad-zone ad-space ad-unit textads banner-ads banner_ads' id='ad-zone'></div>
    `;

    const adZone = document.getElementById('ad-zone');
    let adZoneHeight = adZone.offsetHeight;

    setTimeout(() => {
        if (!adZoneHeight) {
            alert('Adblock detected! Please disable it and return!');
            window.location.href = 'https://google.com/';
        }
    }, 1000);
} catch (error) {
    console.error('Error occurred while setting "copyright" element!', error);
}
