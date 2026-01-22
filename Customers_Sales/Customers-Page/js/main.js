const selectAll = document.getElementById('select-all');
        const rowCheckboxes = document.querySelectorAll('.row-checkbox');

        selectAll.addEventListener('change', function() {
            rowCheckboxes.forEach(cb => cb.checked = this.checked);
        });

        rowCheckboxes.forEach(cb => {
            cb.addEventListener('change', () => {
                const allChecked = [...rowCheckboxes].every(c => c.checked);
                const someChecked = [...rowCheckboxes].some(c => c.checked);
                selectAll.checked = allChecked;
                selectAll.indeterminate = someChecked && !allChecked;
            });
        });