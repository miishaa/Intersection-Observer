const sectionOne = document.querySelector('.one');
const sections = document.querySelectorAll('section');

const options = {
    root: null, //it is viewport
    threshold: .7, //if that % -> it fire
    rootMargin: '0px'
};

const observerName = new IntersectionObserver((entries, observerName) => {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){  // do nothing if it is not in viewport
            return;
        }
        entry.target.classList.toggle('inverse');
        observerName.unobserve(entry.target);
    })
}, options)

sections.forEach(section =>{
    observerName.observe(section);
})
// observerName.observe(sectionOne)
