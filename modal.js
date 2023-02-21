// Get all buttons that open modals
const openModalButtons = document.querySelectorAll('[data-modal-open]');

// For each button, add a click event listener
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the ID of the modal to open (based on the button's "data-modal-open" attribute)
    const modalId = button.dataset.modalOpen;
    const modal = document.querySelector(`[data-modal="${modalId}"]`);
    
    // Show the modal by removing the "is-hidden" class
    modal.classList.remove('is-hidden');
    
    // Add a click event listener to the modal's close button
    const closeButton = modal.querySelector('[data-modal-close]');
    closeButton.addEventListener('click', () => {
      // Hide the modal by adding the "is-hidden" class
      modal.classList.add('is-hidden');
    });
    
    // Add a click event listener to the backdrop (i.e. the area outside the modal)
    modal.addEventListener('click', event => {
      if (event.target === modal) {
        // Hide the modal by adding the "is-hidden" class
        modal.classList.add('is-hidden');
      }
    });
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
          // Hide the modal by adding the "is-hidden" class
          modal.classList.add('is-hidden');
        }
      });
    });
  });
