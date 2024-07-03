import frappe
import json
from frappe.utils.password import get_decrypted_password


@frappe.whitelist()
def get_drivers():
    sql_query = """
               SELECT *
               FROM `tabFP Driver`;
                """
    list = frappe.db.sql(
        sql_query, as_dict=1)

    return list


@frappe.whitelist()
def save_driver():
    data = json.loads(frappe.request.data)
    driver_doc = frappe.new_doc("FP Driver")
    driver_doc.name1 = data.get("name1")
    driver_doc.email = data.get("email")
    driver_doc.profile_image = data.get("profile_image")
    driver_doc.contact_no = data.get("contact_no")
    driver_doc.address = data.get("address")
    driver_doc.sun = data.get("sun")
    driver_doc.mon = data.get("mon")
    driver_doc.tue = data.get("tue")
    driver_doc.wed = data.get("wed")
    driver_doc.thurs = data.get("thurs")
    driver_doc.fri = data.get("fri")
    driver_doc.sat = data.get("sat")
    driver_doc.vehicle_type = data.get("vehicle_type")
    driver_doc.rs_per_km = data.get("rs_per_km")
    driver_doc.add_driving_licence = data.get("add_driving_licence")
    
    

    driver_doc.save(ignore_permissions=True)
    driver_doc.submit()
    return "Driver created successfully"
