// navbar toggling
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
});

// changing search icon image on window resize
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winSize = window.matchMedia("(min-width: 1200px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "images/search-icon.png";
    } else {
        document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
    }
}
changeSearchIcon();

// about section content
const aboutFeatures = [
    {
        icon: 'fa-user-doctor',
        title: 'Specialist Doctors',
        text: 'Access experienced physicians across primary care, cardiology, emergency medicine, and patient support.'
    },
    {
        icon: 'fa-heart-pulse',
        title: 'Modern Care',
        text: 'From diagnosis to follow-up, Revo uses reliable medical tools to make treatment faster and clearer.'
    },
    {
        icon: 'fa-hand-holding-medical',
        title: 'Patient First',
        text: 'Every visit is guided by comfort, communication, and care plans made for each patient.'
    }
];

const aboutStats = [
    {
        number: '24/7',
        label: 'Emergency Support'
    },
    {
        number: '35+',
        label: 'Medical Specialists'
    },
    {
        number: '12k+',
        label: 'Patients Cared For'
    }
];

const aboutFeaturesDiv = document.querySelector('#about-features');
const aboutStatsDiv = document.querySelector('#about-stats');

if(aboutFeaturesDiv){
    aboutFeaturesDiv.innerHTML = aboutFeatures.map(function(feature){
        return `
            <article class = "about-feature">
                <div class = "icon flex">
                    <i class = "fas ${feature.icon}"></i>
                </div>
                <div>
                    <h3>${feature.title}</h3>
                    <p class = "text text-sm">${feature.text}</p>
                </div>
            </article>
        `;
    }).join('');
}

if(aboutStatsDiv){
    aboutStatsDiv.innerHTML = aboutStats.map(function(stat){
        return `
            <article class = "about-stat">
                <strong>${stat.number}</strong>
                <span>${stat.label}</span>
            </article>
        `;
    }).join('');
}

// services section content
const services = [
    {
        icon: 'images/service-icon-1.png',
        title: 'Cardio Monitoring',
        text: 'Continuous heart checks, ECG support, and specialist follow-up for patients who need careful cardiac care.',
        tag: 'Heart Care'
    },
    {
        icon: 'images/service-icon-2.png',
        title: 'Medical Treatment',
        text: 'Personal treatment plans for common and complex health concerns, guided by experienced medical teams.',
        tag: 'General Care'
    },
    {
        icon: 'images/service-icon-3.png',
        title: 'Emergency Help',
        text: 'Fast response care for urgent cases, with trained staff ready to stabilize and support patients quickly.',
        tag: '24/7 Support'
    },
    {
        icon: 'images/service-icon-4.png',
        title: 'First Aid',
        text: 'Immediate support for injuries, minor emergencies, and early treatment before advanced care is needed.',
        tag: 'Quick Care'
    }
];

const servicesListDiv = document.querySelector('#services-list');

if(servicesListDiv){
    servicesListDiv.innerHTML = services.map(function(service, index){
        return `
            <article class = "service-item${index === 0 ? ' service-item-active' : ''}" tabindex = "0">
                <span class = "service-tag">${service.tag}</span>
                <div class = "icon">
                    <img src = "${service.icon}" alt = "${service.title} icon">
                </div>
                <h3>${service.title}</h3>
                <p class = "text text-sm">${service.text}</p>
                <a href = "#contact" class = "service-link">Book Now</a>
            </article>
        `;
    }).join('');

    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(function(item){
        item.addEventListener('click', function(){
            serviceItems.forEach(function(card){
                card.classList.remove('service-item-active');
            });
            item.classList.add('service-item-active');
        });

        item.addEventListener('focus', function(){
            serviceItems.forEach(function(card){
                card.classList.remove('service-item-active');
            });
            item.classList.add('service-item-active');
        });
    });
}

// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});
