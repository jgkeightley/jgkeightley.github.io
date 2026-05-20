import './style.css';
import { profileData } from './data/profile.js';
import { educationData } from './data/education.js';
import { experienceData } from './data/experience.js';
import { publicationsData } from './data/publications.js';
import { awardsData } from './data/awards.js';

// 1. Inject Profile (M3 Expressive Card)
const profileContainer = document.getElementById('profile-container');
if (profileContainer) {
    const profileVisual = profileData.imageUrl 
        ? `<img src="${profileData.imageUrl}" alt="${profileData.name}" class="w-full h-full object-cover">`
        : `<span class="text-5xl font-extrabold text-m3-on-primary-container">${profileData.initials}</span>`;

    profileContainer.innerHTML = `
        <div class="bg-m3-primary-container rounded-[48px] p-8 md:p-12 shadow-sm relative overflow-hidden">
            <!-- Decorative organic shape -->
            <div class="absolute -top-10 -right-10 w-48 h-48 bg-white/20 rounded-full blur-2xl"></div>

            <div class="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-m3-surface-container-high border-4 border-m3-surface flex items-center justify-center shadow-md">
                ${profileVisual}
            </div>
            
            <h1 class="text-4xl font-extrabold text-m3-on-primary-container mb-2 tracking-tight">${profileData.name}</h1>
            <p class="text-m3-primary font-bold text-sm mb-6 uppercase tracking-widest">${profileData.title}</p>
            <p class="text-m3-on-primary-container/80 text-base mb-10 leading-relaxed max-w-sm mx-auto">${profileData.bio}</p>
            
            <div class="flex justify-center gap-4 mb-10">
                <a href="${profileData.linkedinUrl}" onclick="showToast('Opening LinkedIn...')" class="w-14 h-14 rounded-[20px] bg-m3-surface border-none flex items-center justify-center text-m3-on-primary-container hover:bg-m3-primary hover:text-white transition-all shadow-sm"><i class="fa-brands fa-linkedin-in text-xl"></i></a>
                <a href="${profileData.orcidUrl}" onclick="showToast('Opening ORCID...')" class="w-14 h-14 rounded-[20px] bg-m3-surface border-none flex items-center justify-center text-m3-on-primary-container hover:bg-[#a6ce39] hover:text-white transition-all shadow-sm"><i class="fa-brands fa-orcid text-xl"></i></a>
                <a href="${profileData.githubUrl}" onclick="showToast('Opening GitHub...')" class="w-14 h-14 rounded-[20px] bg-m3-surface border-none flex items-center justify-center text-m3-on-primary-container hover:bg-[#bdbebf] hover:text-base transition-all shadow-sm"><i class="fa-brands fa-github text-xl"></i></a>
            </div>

            <!-- M3 Extended FAB -->
            <button onclick="saveContact()" class="py-4 px-8 bg-m3-primary hover:bg-blue-800 text-white rounded-full font-bold text-base shadow-md transition-all flex items-center justify-center gap-3 mx-auto active:scale-95">
                <i class="fa-solid fa-address-card text-lg"></i> ${profileData.buttonText}
            </button>
        </div>
    `;
}

// 2. Inject Experience (M3 Tonal Surface Cards)
const expContainer = document.getElementById('experience-container');
if (expContainer) {
    experienceData.forEach(item => {
        const bulletsHtml = item.bullets.map(b => `<li class="flex gap-3"><i class="fa-solid fa-check text-m3-primary mt-1"></i> ${b}</li>`).join('');
        expContainer.innerHTML += `
            <div class="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
                <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2">
                    <div>
                        <h4 class="text-2xl font-bold text-slate-900">${item.title}</h4>
                        <p class="text-m3-primary font-semibold text-lg mt-1">${item.company}</p>
                    </div>
                    <span class="inline-block px-4 py-2 bg-m3-secondary-container text-m3-on-secondary-container rounded-full text-sm font-bold tracking-wide whitespace-nowrap">${item.date}</span>
                </div>
                <p class="text-slate-700 text-base mb-6 leading-relaxed">${item.description}</p>
                <ul class="list-none text-base text-slate-700 space-y-3 font-medium">${bulletsHtml}</ul>
            </div>
        `;
    });
}

// 3. Inject Education (M3 Asymmetric Cards)
const eduContainer = document.getElementById('education-container');
if (eduContainer) {
    educationData.forEach(item => {
        eduContainer.innerHTML += `
            <div class="p-8 bg-m3-secondary-container rounded-[32px] rounded-tr-[100px] relative overflow-hidden transition-all hover:bg-[#D4DAF5]">
                <div class="w-16 h-16 bg-white/50 rounded-2xl flex items-center justify-center mb-6">
                    <i class="fa-solid ${item.icon} text-2xl text-m3-on-secondary-container"></i>
                </div>
                <span class="inline-block px-3 py-1 bg-white/60 text-m3-on-secondary-container rounded-full text-xs font-bold uppercase tracking-widest mb-4">${item.date}</span>
                <h4 class="text-xl font-bold text-m3-on-secondary-container mb-2">${item.degree}</h4>
                <p class="text-m3-primary font-semibold text-sm mb-4">${item.institution}</p>
                <p class="text-m3-on-secondary-container/80 text-sm leading-relaxed">${item.description}</p>
            </div>
        `;
    });
}

// 4. Inject Awards (M3 Tertiary Container)
const awardsContainer = document.getElementById('awards-container');
if (awardsContainer) {
    awardsData.forEach(item => {
        awardsContainer.innerHTML += `
            <div class="flex gap-6 items-center bg-m3-tertiary-container p-6 rounded-[28px]">
                <div class="w-14 h-14 bg-white/40 rounded-full flex items-center justify-center flex-shrink-0 text-m3-tertiary">
                    <i class="fa-solid fa-award text-2xl"></i>
                </div>
                <div>
                    <h4 class="font-bold text-xl text-m3-on-tertiary-container mb-1">${item.title}</h4>
                    <p class="text-m3-tertiary text-sm font-bold uppercase tracking-wider mb-1">${item.issuer} &bull; ${item.date}</p>
                    <p class="text-m3-on-tertiary-container/80 text-sm">${item.description}</p>
                </div>
            </div>
        `;
    });
}

// 5. Inject Publications (M3 Surface High Cards)
const pubContainer = document.getElementById('publications-container');
if (pubContainer) {
    publicationsData.forEach(item => {
        pubContainer.innerHTML += `
            <div class="bg-white p-8 rounded-[32px] shadow-sm">
                <h4 class="text-2xl font-bold text-slate-900 mb-3 leading-snug">${item.title}</h4>
                <p class="text-slate-600 text-base font-medium mb-4">${item.authors}</p>
                <div class="inline-block px-4 py-2 bg-m3-surface-container-high rounded-full text-m3-primary text-sm font-bold mb-6">${item.journal} &bull; ${item.date}</div>
                <p class="text-slate-700 text-base leading-relaxed mb-8">${item.description}</p>
                <a href="${item.url}" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-m3-secondary-container text-m3-on-secondary-container hover:bg-m3-primary hover:text-white rounded-full text-sm font-bold transition-colors">
                    Read Publication <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        `;
    });
}

// Global UI Functions
window.showToast = function(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'bg-slate-900 text-white px-6 py-4 rounded-full shadow-lg flex items-center gap-3 transform translate-y-10 opacity-0 transition-all duration-300';
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-m3-primary-container"></i><span class="text-sm font-bold tracking-wide">${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.classList.remove('translate-y-10', 'opacity-0'), 10);
    setTimeout(() => {
        toast.classList.add('translate-y-10', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

window.saveContact = function() {
    showToast('vCard generated and downloading.');
}