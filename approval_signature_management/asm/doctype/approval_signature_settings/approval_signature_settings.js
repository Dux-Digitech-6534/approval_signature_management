// Copyright (c) 2026, Nandkishor and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Approval Signature Settings", {
// 	refresh(frm) {

// 	},
// });


frappe.ui.form.on("Approval Signature Settings", {
    approver_user: function(frm) {

        if (frm.doc.approver_user) {

            frappe.db.get_doc("User", frm.doc.approver_user)
                .then(user => {

                    // Full Name
                    frm.set_value(
                        "approver_name",
                        user.full_name || ""
                    );

                    // Default values blank if not found
                    frm.set_value(
                        "designation",
                        user.designation || ""
                    );

                    frm.set_value(
                        "department",
                        user.department || ""
                    );

                    frm.set_value(
                        "company",
                        user.company || ""
                    );

                });
        }
    }
});