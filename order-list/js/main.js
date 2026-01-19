document.addEventListener("DOMContentLoaded", function () {

  /*Dark Mode */
  const darkToggle = document.getElementById("darkModeToggle");

  if (darkToggle) {
    const icon = darkToggle.querySelector("i");

    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      icon.classList.replace("fa-moon", "fa-sun");
    }

    darkToggle.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "dark");
      } else {
        icon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "light");
      }
    });
  }

  /*  Orders Filter + Search + Pagination*/
  const tabs = document.querySelectorAll(".tab");
  const allRows = Array.from(document.querySelectorAll("#ordersTable tr"));
  const searchInput = document.getElementById("search");
  const pageSelect = document.querySelector(".select");

  let currentStatus = "all";
  let currentPage = 1;
  const rowsPerPage = 5;
  let currentSearch = "";

  function getFilteredRows() {
    return allRows.filter(row => {
      const matchesTab =
        currentStatus === "all" || row.dataset.status === currentStatus;

      const matchesSearch =
        row.textContent.toLowerCase().includes(currentSearch.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }

  function renderTable() {
    const rows = getFilteredRows();
    const totalRows = rows.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage) || 1;

    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    allRows.forEach(row => (row.style.display = "none"));
    rows.slice(start, end).forEach(row => (row.style.display = ""));

    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    pageSelect.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      pageSelect.innerHTML += `<option value="${i}">${i}</option>`;
    }
    pageSelect.value = currentPage;
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      currentStatus = tab.dataset.status;
      currentPage = 1;
      renderTable();
    });
  });

  pageSelect.addEventListener("change", function () {
    currentPage = Number(this.value);
    renderTable();
  });

  document.querySelector(".fa-chevron-left").parentElement.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderTable();
    }
  });

  document.querySelector(".fa-chevron-right").parentElement.addEventListener("click", () => {
    const totalPages = Math.ceil(getFilteredRows().length / rowsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderTable();
    }
  });

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      currentSearch = this.value;
      currentPage = 1;
      renderTable();
    });
  }

  renderTable();

  /* Hamburger */
  const hamburger = document.querySelector(".hamburger-btn");
  const sidebar = document.getElementById("sidebar");

  if (hamburger && sidebar) {
    hamburger.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }

});
