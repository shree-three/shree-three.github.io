// Copyright (c) 2024, universal@software.com and contributors
// For license information, please see license.txt

frappe.ui.form.on("FP Hungerspot", {
    before_save: function (frm) {
        if (frm.doc.is_active) {
            frm.set_value('status', "Active");
        } else {
            frm.set_value('status', "Inactive");
        }
    }
});

