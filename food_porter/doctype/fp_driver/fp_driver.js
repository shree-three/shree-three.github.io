// Copyright (c) 2024, universal@software.com and contributors
// For license information, please see license.txt

frappe.ui.form.on("FP Driver", {
    refresh: function (frm) {
        var address = frm.doc.address;
        if (address) {
            var googleMapsLink = "https://www.google.com/maps?q=" + encodeURIComponent(address);
            var googleMapsButtonHTML = '<button onclick="window.open(\'' + googleMapsLink + '\', \'_blank\')" style="border: 1px solid #ccc; border-radius: 5px; background-color: #f0f0f0; padding: 5px 10px;">Show on Google Maps</button>'

            // var googleMapsLinkHTML = '<a href="' + googleMapsLink + '" target="_blank">Show on Google Maps</a>';
            // var googleMapsLinkHTML = '<a href="' + googleMapsLink + '" target="_blank" style="color: skyblue;">Show on Google Maps</a>';
            frm.set_df_property('google_maps_link', 'options', googleMapsButtonHTML);
            frm.refresh_field('google_maps_link');

        }




    },
    validate: function (frm) {
        var email = frm.doc.email;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate the email address
        if (email && !emailRegex.test(email)) {
            frappe.throw(__("Invalid email address"));
        }

    }
});
