



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