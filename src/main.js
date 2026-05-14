import './style.css';
import { profileData } from './data/profile.js';
import { educationData } from './data/education.js';
import { experienceData } from './data/experience.js';
import { publicationsData } from './data/publications.js';
import { awardsData } from './data/awards.js';

// 1. Inject Profile (Business Card) Data
const profileContainer = document.getElementById('profile-container');
if (profileContainer) {
    // Check if an image URL exists in the data
    const profileVisual = profileData.imageUrl 
        ? `<img src="${profileData.imageUrl}" alt="${profileData.name}" class="w-full h-full object-cover rounded-sm grayscale-[20%]">`
        : `<span class="text-4xl font-extrabold text-white">${profileData.initials}</span>`;

    profileContainer.innerHTML = `
        <div class="relative w-32 h-32 mx-auto -mt-16 mb-5 rounded-md p-1 bg-[#001f30] border border-white/10 shadow-xl flex items-center justify-center bg-slate-800">
            ${profileVisual}
        </div>
        
        <h1 class="text-2xl font-bold text-white mb-1 tracking-tight">${profileData.name}</h1>
        <p class="text-blue-400 font-semibold text-xs mb-5 uppercase tracking-widest">${profileData.title}</p>
        <div class="w-10 h-[2px] bg-blue-700 mx-auto mb-5"></div>
        <p class="text-slate-300 text-sm mb-8 leading-relaxed">${profileData.bio}</p>
        
        <div class="flex justify-center gap-3 mb-8">
            <a href="${profileData.linkedinUrl}" onclick="showToast('Opening LinkedIn...')" class="w-10 h-10 rounded-md bg-[#00121d] border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="${profileData.twitterUrl}" onclick="showToast('Opening Twitter...')" class="w-10 h-10 rounded-md bg-[#00121d] border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-white transition-all duration-300"><i class="fa-brands fa-twitter"></i></a>
            <a href="mailto:${profileData.email}" onclick="showToast('Opening email client...')" class="w-10 h-10 rounded-md bg-[#00121d] border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-700 hover:border-blue-700 hover:text-white transition-all duration-300"><i class="fa-solid fa-envelope"></i></a>
        </div>

        <button onclick="saveContact()" class="w-full py-3 px-4 bg-white hover:bg-slate-200 text-[#001f30] rounded-md font-bold text-sm uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2">
            <i class="fa-solid fa-address-card"></i> ${profileData.buttonText}
        </button>
    `;
}

// 2. Inject Experience Data
const expContainer = document.getElementById('experience-container');
if (expContainer) {
    experienceData.forEach(item => {
        const bulletsHtml = item.bullets.map(b => `<li class="flex gap-2"><i class="fa-solid fa-angle-right text-blue-700 mt-1"></i> ${b}</li>`).join('');
        expContainer.innerHTML += `
            <div class="bg-white p-8 rounded-md shadow-sm border border-slate-300 hover:border-slate-400 transition-colors relative overflow-hidden group mb-6">
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-blue-700 group-hover:w-2 transition-all"></div>
                <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2 pl-4">
                    <div>
                        <h4 class="text-xl font-bold text-slate-900">${item.title}</h4>
                        <p class="text-slate-500 font-medium mt-1">${item.company}</p>
                    </div>
                    <span class="inline-block px-3 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap">${item.date}</span>
                </div>
                <div class="pl-4">
                    <p class="text-slate-600 text-sm mb-4 leading-relaxed">${item.description}</p>
                    <ul class="list-none text-sm text-slate-600 space-y-2">${bulletsHtml}</ul>
                </div>
            </div>
        `;
    });
}

// 3. Inject Education Data
const eduContainer = document.getElementById('education-container');
if (eduContainer) {
    educationData.forEach(item => {
        eduContainer.innerHTML += `
            <div class="p-8 bg-white border border-slate-200 shadow-sm rounded-md relative group">
                <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <i class="fa-solid ${item.icon} text-6xl text-slate-900"></i>
                </div>
                <div class="mb-4"><span class="text-xs font-bold text-blue-700 uppercase tracking-widest">${item.date}</span></div>
                <h4 class="text-lg font-bold text-slate-900 mb-1">${item.degree}</h4>
                <p class="text-slate-500 text-sm font-semibold mb-4">${item.institution}</p>
                <p class="text-slate-600 text-sm leading-relaxed">${item.description}</p>
            </div>
        `;
    });
}

// 4. Inject Awards Data (Subsection of Education)
const awardsContainer = document.getElementById('awards-container');
if (awardsContainer) {
    awardsData.forEach(item => {
        awardsContainer.innerHTML += `
            <div class="flex gap-5 items-start bg-white p-6 rounded-md border border-slate-200 shadow-sm mb-4">
                <div class="w-12 h-12 bg-slate-50 border border-slate-200 rounded flex items-center justify-center flex-shrink-0 text-blue-700">
                    <i class="fa-solid fa-award text-xl"></i>
                </div>
                <div>
                    <h4 class="font-bold text-lg text-slate-900">${item.title}</h4>
                    <p class="text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">${item.issuer} &bull; ${item.date}</p>
                    <p class="text-slate-600 text-sm">${item.description}</p>
                </div>
            </div>
        `;
    });
}

// 5. Inject Publications Data
const pubContainer = document.getElementById('publications-container');
if (pubContainer) {
    publicationsData.forEach(item => {
        pubContainer.innerHTML += `
            <div class="bg-white p-8 rounded-md shadow-sm border border-slate-300 hover:border-blue-300 transition-colors mb-6">
                <h4 class="text-xl font-bold text-slate-900 mb-2">${item.title}</h4>
                <p class="text-slate-500 text-sm font-medium mb-3">${item.authors}</p>
                <p class="text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">${item.journal} &bull; ${item.date}</p>
                <p class="text-slate-600 text-sm leading-relaxed mb-5">${item.description}</p>
                <a href="${item.url}" target="_blank" class="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors">
                    Read Publication <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                </a>
            </div>
        `;
    });
}

// Global UI Functions
window.showToast = function(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'bg-slate-800 border border-slate-700 text-white px-5 py-4 rounded-md shadow-xl flex items-center gap-3 transform translate-y-10 opacity-0 transition-all duration-300';
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-blue-500"></i><span class="text-sm font-bold tracking-wide">${message}</span>`;
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