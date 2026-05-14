(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={name:`Jordan Keightley`,initials:`JK`,imageUrl:`https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80`,title:`Physiotherapist & NDIS Specialist`,bio:`Evidence-based neurological rehabilitation, structural biomechanics, and comprehensive support coordination.`,email:`hello@example.com`,linkedinUrl:`#`,twitterUrl:`#`,buttonText:`Save Contact`},t=[{degree:`Honours Research Project`,institution:`University of Notre Dame Australia`,date:`2022`,description:`Published a highly detailed scoping review focusing on the management of musculoskeletal shoulder pain.`,icon:`fa-book-medical`},{degree:`Bachelor of Physiotherapy`,institution:`University of Notre Dame Australia`,date:`Alumnus`,description:`Comprehensive focus on advanced musculoskeletal diagnostics, neurological rehabilitation, and patient-centered clinical practice.`,icon:`fa-user-doctor`}],n=[{title:`Physiotherapist & Specialist Support Coordinator`,company:`Private Practice`,date:`Present`,description:`Specializing in neurological rehabilitation and navigating NDIS frameworks to deliver tailored, high-quality patient care.`,bullets:[`Develop comprehensive care plans and funding justifications under NDIS guidelines.`,`Implement structural biomechanics and evidence-based conditioning for complex presentations.`]},{title:`Clinical Presenter`,company:`Australia New Zealand Spinal Cord Society (ANZSCoS)`,date:`2024`,description:`Presented at the Annual Scientific Meeting regarding advanced musculoskeletal interventions.`,bullets:[`Delivered a comprehensive model of care specifically targeting rotator cuff pain.`,`Translated complex research into actionable clinical protocols for spinal cord injury populations.`]}],r=[{title:`Models of care for musculoskeletal shoulder pain in spinal cord injury: A scoping review`,authors:`Keightley JGA, Haagman B, Magner JD, Debenham JR.`,journal:`The Journal of Spinal Cord Medicine`,date:`2024`,url:`https://pmc.ncbi.nlm.nih.gov/articles/PMC11044743/`,description:`A scoping review charting peer-reviewed literature regarding the diagnosis and management of shoulder pain as it relates to Spinal Cord Injury (SCI), identifying gaps to inform future robust models of care.`}],i=[{title:`Excellence in Clinical Research`,issuer:`University of Notre Dame Australia`,date:`2022`,description:`Recognized for outstanding contributions to evidence synthesis and scoping reviews in musculoskeletal pathology.`}],a=document.getElementById(`profile-container`);a&&(a.innerHTML=`
        <div class="relative w-32 h-32 mx-auto -mt-16 mb-5 rounded-md p-1 bg-[#001f30] border border-white/10 shadow-xl flex items-center justify-center bg-slate-800">
            ${e.imageUrl?`<img src="${e.imageUrl}" alt="${e.name}" class="w-full h-full object-cover rounded-sm grayscale-[20%]">`:`<span class="text-4xl font-extrabold text-white">${e.initials}</span>`}
        </div>
        
        <h1 class="text-2xl font-bold text-white mb-1 tracking-tight">${e.name}</h1>
        <p class="text-blue-400 font-semibold text-xs mb-5 uppercase tracking-widest">${e.title}</p>
        <div class="w-10 h-[2px] bg-blue-700 mx-auto mb-5"></div>
        <p class="text-slate-300 text-sm mb-8 leading-relaxed">${e.bio}</p>
        
        <div class="flex justify-center gap-3 mb-8">
            <a href="${e.linkedinUrl}" onclick="showToast('Opening LinkedIn...')" class="w-10 h-10 rounded-md bg-[#00121d] border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="${e.twitterUrl}" onclick="showToast('Opening Twitter...')" class="w-10 h-10 rounded-md bg-[#00121d] border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-white transition-all duration-300"><i class="fa-brands fa-twitter"></i></a>
            <a href="mailto:${e.email}" onclick="showToast('Opening email client...')" class="w-10 h-10 rounded-md bg-[#00121d] border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-700 hover:border-blue-700 hover:text-white transition-all duration-300"><i class="fa-solid fa-envelope"></i></a>
        </div>

        <button onclick="saveContact()" class="w-full py-3 px-4 bg-white hover:bg-slate-200 text-[#001f30] rounded-md font-bold text-sm uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2">
            <i class="fa-solid fa-address-card"></i> ${e.buttonText}
        </button>
    `);var o=document.getElementById(`experience-container`);o&&n.forEach(e=>{let t=e.bullets.map(e=>`<li class="flex gap-2"><i class="fa-solid fa-angle-right text-blue-700 mt-1"></i> ${e}</li>`).join(``);o.innerHTML+=`
            <div class="bg-white p-8 rounded-md shadow-sm border border-slate-300 hover:border-slate-400 transition-colors relative overflow-hidden group mb-6">
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-blue-700 group-hover:w-2 transition-all"></div>
                <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2 pl-4">
                    <div>
                        <h4 class="text-xl font-bold text-slate-900">${e.title}</h4>
                        <p class="text-slate-500 font-medium mt-1">${e.company}</p>
                    </div>
                    <span class="inline-block px-3 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap">${e.date}</span>
                </div>
                <div class="pl-4">
                    <p class="text-slate-600 text-sm mb-4 leading-relaxed">${e.description}</p>
                    <ul class="list-none text-sm text-slate-600 space-y-2">${t}</ul>
                </div>
            </div>
        `});var s=document.getElementById(`education-container`);s&&t.forEach(e=>{s.innerHTML+=`
            <div class="p-8 bg-white border border-slate-200 shadow-sm rounded-md relative group">
                <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <i class="fa-solid ${e.icon} text-6xl text-slate-900"></i>
                </div>
                <div class="mb-4"><span class="text-xs font-bold text-blue-700 uppercase tracking-widest">${e.date}</span></div>
                <h4 class="text-lg font-bold text-slate-900 mb-1">${e.degree}</h4>
                <p class="text-slate-500 text-sm font-semibold mb-4">${e.institution}</p>
                <p class="text-slate-600 text-sm leading-relaxed">${e.description}</p>
            </div>
        `});var c=document.getElementById(`awards-container`);c&&i.forEach(e=>{c.innerHTML+=`
            <div class="flex gap-5 items-start bg-white p-6 rounded-md border border-slate-200 shadow-sm mb-4">
                <div class="w-12 h-12 bg-slate-50 border border-slate-200 rounded flex items-center justify-center flex-shrink-0 text-blue-700">
                    <i class="fa-solid fa-award text-xl"></i>
                </div>
                <div>
                    <h4 class="font-bold text-lg text-slate-900">${e.title}</h4>
                    <p class="text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">${e.issuer} &bull; ${e.date}</p>
                    <p class="text-slate-600 text-sm">${e.description}</p>
                </div>
            </div>
        `});var l=document.getElementById(`publications-container`);l&&r.forEach(e=>{l.innerHTML+=`
            <div class="bg-white p-8 rounded-md shadow-sm border border-slate-300 hover:border-blue-300 transition-colors mb-6">
                <h4 class="text-xl font-bold text-slate-900 mb-2">${e.title}</h4>
                <p class="text-slate-500 text-sm font-medium mb-3">${e.authors}</p>
                <p class="text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">${e.journal} &bull; ${e.date}</p>
                <p class="text-slate-600 text-sm leading-relaxed mb-5">${e.description}</p>
                <a href="${e.url}" target="_blank" class="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors">
                    Read Publication <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                </a>
            </div>
        `}),window.showToast=function(e){let t=document.getElementById(`toast-container`),n=document.createElement(`div`);n.className=`bg-slate-800 border border-slate-700 text-white px-5 py-4 rounded-md shadow-xl flex items-center gap-3 transform translate-y-10 opacity-0 transition-all duration-300`,n.innerHTML=`<i class="fa-solid fa-circle-check text-blue-500"></i><span class="text-sm font-bold tracking-wide">${e}</span>`,t.appendChild(n),setTimeout(()=>n.classList.remove(`translate-y-10`,`opacity-0`),10),setTimeout(()=>{n.classList.add(`translate-y-10`,`opacity-0`),setTimeout(()=>n.remove(),300)},3e3)},window.saveContact=function(){showToast(`vCard generated and downloading.`)};