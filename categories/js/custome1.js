 document.getElementById('saveBtn').addEventListener('click', function () {
    const modal = new bootstrap.Modal(document.getElementById('successModal'));
    modal.show();
  });


  document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(el => {
      new bootstrap.Tooltip(el);
    });
  });
