M.app = {
    editAddress: function() {
        var elForm = document.getElementById('address-form');
        elForm.onclick = function(e) {
            if (elForm.address.value === '') return false;
        };
        elForm.address.focus();
    }
};
