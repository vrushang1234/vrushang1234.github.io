const square = document.querySelector('.second_container');
// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            square.classList.add('second_container-transition');
            return;
        }
        else {
            square.classList.remove('second_container-transition');
        }
    });
});

observer.observe(document.querySelector('.second_container'));



const boxes1 = document.querySelectorAll(".second-animation")

let check1 = () => {
    triggerTop = window.innerHeight / 5 * 4;
    boxes1.forEach(box => {
        let checkTop = box.getBoundingClientRect().top;
        if (triggerTop > checkTop) {
            box.classList.add("second_icon-animation")
        }
        else {
            box.classList.remove("second_icon-animation")
        }
    })
}
window.addEventListener("scroll", check1)



const boxes = document.querySelectorAll(".skill_box")

let check = () => {
    triggerTop = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        let checkTop = box.getBoundingClientRect().top;
        if (triggerTop > checkTop) {
            box.classList.add("slide")
        }
        else {
            box.classList.remove("slide")
        }
    })
}
window.addEventListener("scroll", check)

window.onload = function() {

    window.addEventListener('scroll', function(e) {
      
      let s = this.scrollY;
      let w = this.outerWidth;
      let h = document.getElementsByClassName('second_container')[0].clientWidth;
      let h_b = document.getElementsByClassName('second_container')[0].clientWidth;
      let p = s/h*100;
      let p_b = s/h_b*100;
      let opas = 1-1/60*p_b;
      let z_1 = 1 + (w / 1000000 * p_b);
      x=document.getElementsByClassName('intro_container')[0].style= `transform: scale(${z_1});opacity: ${opas}`;
      let z_2 = 1+(w/5000000*p);
      //document.getElementsByClassName('bg')[0].style= `transform: scale(${z_2})`;
      let hr = w/2000*p_b;
      let z_3 = 1+(w*0.000025*p_b);
      document.getElementsByClassName('bg')[0].style= `transform: scale(${z_3})`;
      let hr_2 = w/1500*p_b;
      let z_4 = 1+(w*0.00001*p_b);
      //document.getElementsByClassName('bg')[0].style= `transform: translate3d(${hr_2}px,0,0) scale(${z_4})`;
      if (z_3>3.5){
        document.getElementsByClassName('bg')[0].style= `display:none`;
        document.getElementsByClassName('intro_container')[0].style= `display:none`;
      }
      
    })
    
  }
  


