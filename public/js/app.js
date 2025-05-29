// let modal = document.getElementById('idmod');
// let loginBtn = document.getElementById('loginBtn');
// let closeBtn = document.getElementById('closeBtn');


// loginBtn.addEventListener('click', () => {
//   modal.style.display = 'block';
// });

// closeBtn.addEventListener('click', () => {
//   modal.style.display = 'none';
// });



// window.addEventListener('click', (event) => {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// });



let myButtons = document.querySelectorAll(".btn-modal");
let myModals = document.querySelectorAll(".backdrop");

myButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // prevent <a href="">
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
