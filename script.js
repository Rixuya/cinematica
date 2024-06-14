/* NAVIGATION MANUAL */
const navBtns = document.querySelectorAll('.nav-btn');
const firstSlide = document.querySelector('.first');
const margins = ['-0%','-20%','-40%','-60%','-80%','-100%']

navBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        firstSlide.style.marginLeft = `${margins[index]}`;
        navBtns.forEach(btn => {
            btn.style.opacity = '';
        });
        btn.style.opacity = '1';
        counter = index + 1;
    });
});

/* NAVIGATION AUTOMATIC */
var counter = 1;
navigate();
setInterval(navigate, 2500);
function navigate(){
    document.getElementById('nav-btn' + counter).click();
    counter++;
    if(counter > 5){
        counter = 1;
    }
}

