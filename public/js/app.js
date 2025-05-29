



let myButtons = document.querySelectorAll(".btn-modal");
let myModals = document.querySelectorAll(".backdrop");

myButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); 
        let modalData = btn.getAttribute("modal-data");
        let modal = document.getElementById(modalData);
        if (modal) {
            modal.style.display = "flex";
        }
    });
});

myModals.forEach(modal => {
    const closeBtn = modal.querySelector(".close-modal");
    
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


let btn = document.getElementById("watchVideoBtn");
let modal = document.getElementById("videoModal");
let closeBtn = document.querySelector(".close");
let iframe = document.getElementById("videoFrame");

btn.onclick = () => {
  modal.style.display = "flex";
  iframe.src = "https://www.youtube.com/embed/Y7f98aduVJ8?autoplay=1";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
  iframe.src = "";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    iframe.src = "";
  }
};

let nextBtns = document.querySelectorAll(".next")
let previousBtns = document.querySelectorAll(".previous")
let containers = document.querySelectorAll(".carousel-container")


let currentIndex = 0

const slideImage = (index , myBtn) => {
    let carouselBtnAttribute = myBtn.getAttribute("carouselBtn")

    containers.forEach(container => {
        if (container.id == carouselBtnAttribute) {

            let slides = container.querySelectorAll(".slide")
            let camera = container.querySelector(".carousel")
            let slideWidth = slides[0].clientWidth
            let indicators = container.querySelectorAll('.indicator')


            if (index < 0) {
                index = slides.length - 1
            } else if (index >= slides.length) {
                index = 0
            }

            indicators.forEach(indicator => {
                indicator.classList.remove('activeIndicator')
            });
            indicators[index].classList.add("activeIndicator")


            camera.style.transform = `translateX(-${slideWidth * index}px)`
            currentIndex = index
        }
    })
}

nextBtns.forEach(next => {
    next.addEventListener("click", (event) => { slideImage(currentIndex + 1, event.target) })
    setInterval(() => {
        next.click()
    }, 3000);
});


previousBtns.forEach(previous => {
    previous.addEventListener("click", (event) => { slideImage(currentIndex - 1, event.target) })
});


containers.forEach(container => {
    if (container.getAttribute("autoslide")) {
        let nextBtn = container.querySelector(".next")

        setInterval(() => {
            nextBtn.click()
        }, 3000);
    }
});


containers.forEach(container => {
    let slides = container.querySelectorAll(".slide")
    let indicatorsGrp = document.createElement("div")
    indicatorsGrp.classList.add("indicators-grp")
    container.appendChild(indicatorsGrp)

    slides.forEach(slide => {
        let indicator = document.createElement("div")
        indicator.classList.add("indicator")
        indicatorsGrp.appendChild(indicator)
    });
    indicatorsGrp.querySelector(".indicator").classList.add('activeIndicator')
});