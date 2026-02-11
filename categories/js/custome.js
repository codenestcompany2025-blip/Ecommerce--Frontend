document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(el => {
      new bootstrap.Tooltip(el);
    });
  });

 document.getElementById('confirmDelete').addEventListener('click', function () {

    const deleteModal = bootstrap.Modal.getInstance(
      document.getElementById('deleteModal')
    );
    deleteModal.hide();

    // setTimeout(() => {
    //   const successModal = new bootstrap.Modal(
    //     document.getElementById('successModal')
    //   );
    //   successModal.show();
    // }, 300);

  });




  document.getElementById('testBtn').onclick = function () {
    window.location.href = "AddCategories.html";

  };

  const checkboxes = document.querySelectorAll('table tbody input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const row = this.closest('tr'); 
      if (this.checked) {
        row.classList.add('selected-row'); 
      } else {
        row.classList.remove('selected-row'); 
      }
    });
  });


  // لمن اضغط على يس 

  // document.getElementById('saveBtn').addEventListener('click', function () {
  //   const toastEl = document.getElementById('saveToast');
  //   const toast = new bootstrap.Toast(toastEl);
  //   toast.show();
  // });

// مودال
  // document.getElementById('saveBtn').addEventListener('click', function () {
  //   const modal = new bootstrap.Modal(document.getElementById('successModal'));
  //   modal.show();
  // });

  // document.getElementById('testBtn').onclick = function () {
  //   window.location.href = "AddCategories.html";

  // };

