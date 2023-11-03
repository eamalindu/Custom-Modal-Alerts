function showCustomModal(msg,variant) {

    // Create the modal element.
    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.setAttribute('id', 'my-modal');
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-labelledby', 'my-modal-title');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('data-bs-backdrop','static');

    // Create the modal dialog element.
    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog','modal-dialog-centered');

    // Create the modal content element.
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Create the modal header element.
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header','bg-custom-white');

    // Create the modal title element.
    const modalTitle = document.createElement('h5');
    modalTitle.classList.add('modal-title');
    modalTitle.id = 'my-modal-title';
    modalTitle.textContent = 'Warning !';
    modalTitle.style.textTransform = 'uppercase';
    modalTitle.style.fontSize = 'medium';
    modalTitle.style.fontWeight = 'bold';
    modalTitle.style.fontFamily = 'Arial, serif';

    modalHeader.appendChild(modalTitle);

    // Create the modal close button element.
    const modalCloseButton = document.createElement('button');
    modalCloseButton.type = 'button';
    modalCloseButton.classList.add('btn','btn-secondary','text-white','mx-auto','d-block');
    modalCloseButton.setAttribute('data-bs-dismiss', 'modal');
    modalCloseButton.setAttribute('aria-label', 'Close');

    modalCloseButton.innerHTML = 'Ok';

    modalHeader.appendChild(modalCloseButton);

    // Create the modal body element.
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');


    //add gif to the modalBody
    const modalBodyGif = document.createElement('img');
    modalBodyGif.classList.add('d-flex','mx-auto');

    //adding different gifs accordingly
    if(variant ==="warning"){
        modalBodyGif.src='customModal/resources/images/warning.gif';
    }
    else if (variant==="error"){
        modalBodyGif.src='customModal/resources/images/error.gif';
        modalBodyGif.classList.add('ps-2');
    }
    else if(variant ==="success"){
        modalBodyGif.src='customModal/resources/images/success.gif';

    }
    else{
        modalBodyGif.src='customModal/resources/images/info.gif';
    }

    modalBodyGif.style.width = '150px';
    modalBody.appendChild(modalBodyGif);

    //add primary text value (msg) to modalBody
    const modalBodyPrimaryText = document.createElement('h5');
    modalBodyPrimaryText.classList.add('text-center','fs-3','text-capitalize','fw-bold');
    modalBodyPrimaryText.innerText = variant+' !';
    modalBody.appendChild(modalBodyPrimaryText);

    //add secondary text to modalBody
    const modalBodySecondaryText = document.createElement('h5');
    modalBodySecondaryText.classList.add('text-center','fs-4','text-capitalize','mb-4','mt-3');
    modalBodySecondaryText.innerText = msg;

    modalBody.appendChild(modalBodySecondaryText);

    modalBody.appendChild(modalCloseButton);


    // Create the modal footer element.
    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');

    // Add the modal content element to the modal dialog element.
    modalDialog.appendChild(modalContent);

    // Add the modal header, body, and footer elements to the modal content element.
    //modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    //modalContent.appendChild(modalFooter);

    // Add the modal dialog element to the modal element.
    modal.appendChild(modalDialog);

    // Append the modal element to the document body.
    document.body.appendChild(modal);

    // Show the modal.
    new bootstrap.Modal(modal).show();

    //Hide the modal if the type is success or info
    if(variant==="success"||variant==="info") {
        setTimeout(function () {
            modalCloseButton.click();
        }, 4900);
    }
}
