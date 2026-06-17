
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBackdrop = document.getElementById('modalBackdrop');

openModalBtn.addEventListener('click', () => {
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden'; 
});
const closeModal = () => {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = ''; 
};

closeModalBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', (event) => {
    if (event.target === modalBackdrop) {
        closeModal();
    }
});