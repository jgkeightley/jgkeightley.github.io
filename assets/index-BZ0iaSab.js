(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={name:`Jordan Keightley`,initials:`JK`,imageUrl:`https://gravatar.com/avatar/4d9942c0aabcc1f622087a27bbdff67a3148a97a68bbd7023f30132bee11d4bb?v=1733951426000&size=256&d=initials`,title:`Physiotherapist`,bio:`Evidence-based practice, exercise rehsbilitation, and a function first approach.`,githubUrl:`https://github.com/jgkeightley`,linkedinUrl:`www.linkedin.com/in/jordan-keightley-1b297a3a9`,orcidUrl:`https://orcid.org/0000-0003-2753-1154`,buttonText:`Say Hello`},t=[{degree:`Bachelor of Physiotherapy, Hons`,institution:`University of Notre Dame Australia`,date:`2022`,description:`First Class Honours`,icon:`fa-graduation-cap`},{degree:`Diploma of Remedial Massage`,institution:`Australian Institute of Fitness`,date:`2016`,description:``,icon:`fa-graduation-cap`},{degree:`Bachelor of Science`,institution:`Murdoch University`,date:`2013`,description:`Majoring in Internet Software Development. Minoring in Asian Languages (Japanese)`,icon:`fa-graduation-cap`}],n=[{title:`Physiotherapist`,company:`Neuro Logic Phyiotherapy`,date:`2025 - 2026`,description:`Focusing on neurological rehabilitation and navigating NDIS frameworks to deliver tailored, high-quality patient care.`,bullets:[`Develop comprehensive care plans and funding justifications under NDIS guidelines.`,`Implement evidence-based exercise rehabilitation for complex presentations.`]},{title:`Physiotherapist & Specialist Support Coordinator`,company:`ActiveLINC`,date:`2022 - 2024`,description:`Focusing on neurological rehabilitation and navigating NDIS frameworks to deliver tailored, high-quality patient care.`,bullets:[`Develop comprehensive care plans and funding justifications under NDIS guidelines.`,`Implement evidence-based exercise rehabilitation for complex presentations.`]},{title:`Research Assistant`,company:`Majarlin`,date:`2024`,description:`Developed competency of staff in thr area of knowledge synthesis`,bullets:[`Guide academics toward the effective completion of knowledge synthesis works.`,`Translated best practice guidelines into actionable research project goals.`]},{title:`Therapy Assistant`,company:`ActiveLINC`,date:`2022`,description:``,bullets:[`Implement Physiotherapist created treatment programs`,`Effective communication between team, patients, and primary Physiotherapist`]}],r=[{title:`Models of care for musculoskeletal shoulder pain in spinal cord injury: A scoping review`,authors:`Keightley JGA, Haagman B, Magner JD, Debenham JR.`,journal:`The Journal of Spinal Cord Medicine`,date:`2024`,url:`https://pmc.ncbi.nlm.nih.gov/articles/PMC11044743/`,description:`A scoping review charting peer-reviewed literature regarding the diagnosis and management of shoulder pain as it relates to Spinal Cord Injury (SCI), identifying gaps to inform future robust models of care.`},{title:`Conditioned Pain Modulation Does Not Differ Between People With Lower-Limb Tendinopathy and Nontendinopathy Controls: A Systematic Review With Individual Participant Data Meta-analysis`,authors:`Murphy MC, Mkumbuzi N, Keightley JGA, Gibson W, Vallance P, Riel H, Plinsinga M, Rio EK.`,journal:`Journal of Orthopaedic & Sports Physical Therapy`,date:`2024`,url:`https://pubmed.ncbi.nlm.nih.gov/37854011/`,description:`A systematic review and individual participant data (IPD) meta-analysis evaluating central pain processing mechanisms in lower-limb tendinopathy, directly informing clinical guidelines to prioritize peripherally dominant rehabilitation strategies.`}],i=[{title:`The Brian Edwards Memorial Award`,issuer:`University of Notre Dame Australia`,date:`2022`,description:`Awarded to the student who has demonstrated leadership, commitment and contribution within the community and the University whilst maintaining strong academic capability in the Bachelor of Physiotherapy program.`}],a=document.getElementById(`profile-container`);a&&(a.innerHTML=`
        <div class="bg-m3-primary-container rounded-[48px] p-8 md:p-12 shadow-sm relative overflow-hidden">
            <!-- Decorative organic shape -->
            <div class="absolute -top-10 -right-10 w-48 h-48 bg-white/20 rounded-full blur-2xl"></div>

            <div class="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-m3-surface-container-high border-4 border-m3-surface flex items-center justify-center shadow-md">
                ${e.imageUrl?`<img src="${e.imageUrl}" alt="${e.name}" class="w-full h-full object-cover">`:`<span class="text-5xl font-extrabold text-m3-on-primary-container">${e.initials}</span>`}
            </div>
            
            <h1 class="text-4xl font-extrabold text-m3-on-primary-container mb-2 tracking-tight">${e.name}</h1>
            <p class="text-m3-primary font-bold text-sm mb-6 uppercase tracking-widest">${e.title}</p>
            <p class="text-m3-on-primary-container/80 text-base mb-10 leading-relaxed max-w-sm mx-auto">${e.bio}</p>
            
            <div class="flex justify-center gap-4 mb-10">
                <a href="${e.linkedinUrl}" onclick="showToast('Opening LinkedIn...')" class="w-14 h-14 rounded-[20px] bg-m3-surface border-none flex items-center justify-center text-m3-on-primary-container hover:bg-m3-primary hover:text-white transition-all shadow-sm"><i class="fa-brands fa-linkedin-in text-xl"></i></a>
                <a href="${e.orcidUrl}" onclick="showToast('Opening ORCID...')" class="w-14 h-14 rounded-[20px] bg-m3-surface border-none flex items-center justify-center text-m3-on-primary-container hover:bg-[#a6ce39] hover:text-white transition-all shadow-sm"><i class="fa-brands fa-orcid text-xl"></i></a>
                <a href="${e.githubUrl}" onclick="showToast('Opening GitHub...')" class="w-14 h-14 rounded-[20px] bg-m3-surface border-none flex items-center justify-center text-m3-on-primary-container hover:bg-[#bdbebf] hover:text-base transition-all shadow-sm"><i class="fa-brands fa-github text-xl"></i></a>
            </div>

            <!-- M3 Extended FAB -->
            <button onclick="saveContact()" class="py-4 px-8 bg-m3-primary hover:bg-blue-800 text-white rounded-full font-bold text-base shadow-md transition-all flex items-center justify-center gap-3 mx-auto active:scale-95">
                <i class="fa-solid fa-hand text-lg"></i> ${e.buttonText}
            </button>
        </div>
    `);var o=document.getElementById(`experience-container`);o&&n.forEach(e=>{let t=e.bullets.map(e=>`<li class="flex gap-3"><i class="fa-solid fa-check text-m3-primary mt-1"></i> ${e}</li>`).join(``);o.innerHTML+=`
            <div class="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
                <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2">
                    <div>
                        <h4 class="text-2xl font-bold text-slate-900">${e.title}</h4>
                        <p class="text-m3-primary font-semibold text-lg mt-1">${e.company}</p>
                    </div>
                    <span class="inline-block px-4 py-2 bg-m3-secondary-container text-m3-on-secondary-container rounded-full text-sm font-bold tracking-wide whitespace-nowrap">${e.date}</span>
                </div>
                <p class="text-slate-700 text-base mb-6 leading-relaxed">${e.description}</p>
                <ul class="list-none text-base text-slate-700 space-y-3 font-medium">${t}</ul>
            </div>
        `});var s=document.getElementById(`education-container`);s&&t.forEach(e=>{s.innerHTML+=`
            <div class="p-8 bg-m3-secondary-container rounded-[32px] rounded-tr-[100px] relative overflow-hidden transition-all hover:bg-[#D4DAF5]">
                <div class="w-16 h-16 bg-white/50 rounded-2xl flex items-center justify-center mb-6">
                    <i class="fa-solid ${e.icon} text-2xl text-m3-on-secondary-container"></i>
                </div>
                <span class="inline-block px-3 py-1 bg-white/60 text-m3-on-secondary-container rounded-full text-xs font-bold uppercase tracking-widest mb-4">${e.date}</span>
                <h4 class="text-xl font-bold text-m3-on-secondary-container mb-2">${e.degree}</h4>
                <p class="text-m3-primary font-semibold text-sm mb-4">${e.institution}</p>
                <p class="text-m3-on-secondary-container/80 text-sm leading-relaxed">${e.description}</p>
            </div>
        `});var c=document.getElementById(`awards-container`);c&&i.forEach(e=>{c.innerHTML+=`
            <div class="flex gap-6 items-center bg-m3-tertiary-container p-6 rounded-[28px]">
                <div class="w-14 h-14 bg-white/40 rounded-full flex items-center justify-center flex-shrink-0 text-m3-tertiary">
                    <i class="fa-solid fa-award text-2xl"></i>
                </div>
                <div>
                    <h4 class="font-bold text-xl text-m3-on-tertiary-container mb-1">${e.title}</h4>
                    <p class="text-m3-tertiary text-sm font-bold uppercase tracking-wider mb-1">${e.issuer} &bull; ${e.date}</p>
                    <p class="text-m3-on-tertiary-container/80 text-sm">${e.description}</p>
                </div>
            </div>
        `});var l=document.getElementById(`publications-container`);l&&r.forEach(e=>{l.innerHTML+=`
            <div class="bg-white p-8 rounded-[32px] shadow-sm">
                <h4 class="text-2xl font-bold text-slate-900 mb-3 leading-snug">${e.title}</h4>
                <p class="text-slate-600 text-base font-medium mb-4">${e.authors}</p>
                <div class="inline-block px-4 py-2 bg-m3-surface-container-high rounded-full text-m3-primary text-sm font-bold mb-6">${e.journal} &bull; ${e.date}</div>
                <p class="text-slate-700 text-base leading-relaxed mb-8">${e.description}</p>
                <a href="${e.url}" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-m3-secondary-container text-m3-on-secondary-container hover:bg-m3-primary hover:text-white rounded-full text-sm font-bold transition-colors">
                    Read Publication <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        `}),window.showToast=function(e){let t=document.getElementById(`toast-container`),n=document.createElement(`div`);n.className=`bg-slate-900 text-white px-6 py-4 rounded-full shadow-lg flex items-center gap-3 transform translate-y-10 opacity-0 transition-all duration-300`,n.innerHTML=`<i class="fa-solid fa-circle-check text-m3-primary-container"></i><span class="text-sm font-bold tracking-wide">${e}</span>`,t.appendChild(n),setTimeout(()=>n.classList.remove(`translate-y-10`,`opacity-0`),10),setTimeout(()=>{n.classList.add(`translate-y-10`,`opacity-0`),setTimeout(()=>n.remove(),300)},3e3)},window.showHelloToast=function(e){let t=document.getElementById(`toast-container`),n=document.createElement(`div`);n.className=`bg-slate-900 text-white px-6 py-4 rounded-full shadow-lg flex items-center gap-3 transform translate-y-10 opacity-0 transition-all duration-300`,n.innerHTML=`<i class="fa-solid fa-hand text-m3-primary-container"></i><span class="text-sm font-bold tracking-wide">${e}</span>`,t.appendChild(n),setTimeout(()=>n.classList.remove(`translate-y-10`,`opacity-0`),10),setTimeout(()=>{n.classList.add(`translate-y-10`,`opacity-0`),setTimeout(()=>n.remove(),300)},3e3)},window.saveContact=function(){showHelloToast(`Hello!`)};