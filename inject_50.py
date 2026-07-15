import json
import os

file_path = os.path.expanduser("~/J2E/sponsors.json")

# The remaining 45 corporate targets to complete the 50-company database
new_targets = {
    "hospitality_and_tourism": [
        "Marriott International", "Hilton Worldwide", "Hyatt Hotels", 
        "Royal Caribbean", "Carnival Corporation", "Disney Cruise Line", 
        "Norwegian Cruise Line", "Virgin Limited Edition", "Windjammer Landing"
    ],
    "local_st_lucian_partners": [
        "Bank of Saint Lucia", "LUCELEC", "St. Lucia Distillers", 
        "1st National Bank St. Lucia", "Digicel St. Lucia", "Flow (Cable & Wireless)", 
        "Goddard Enterprises", "Baron Foods", "Windward & Leeward Brewery"
    ],
    "heavy_infrastructure": [
        "Caterpillar", "Komatsu", "CEMEX", "CRH plc", "Kubota", 
        "JCB", "AGCO", "CNH Industrial", "Trimble"
    ],
    "agriculture_and_processing": [
        "Nestle", "Cargill", "Archer Daniels Midland", "Danone", 
        "Dole plc", "Bayer", "Syngenta", "Tate & Lyle", "Corteva Agriscience"
    ],
    "tech_and_digital": [
        "Microsoft", "Apple", "Amazon", "Salesforce", "Meta", 
        "Cisco", "IBM", "Oracle", "Intel"
    ]
}

def create_template(company_name):
    return {
        "company": company_name,
        "valuation_market_cap": "",
        "stock_ticker": "",
        "ceo": "",
        "philanthropy_director": "",
        "foundation_name": "",
        "submission_intelligence": {
            "application_portal_url": "",
            "foundation_email": "",
            "grant_management_system": "",
            "submission_method": "",
            "gatekeeper_name": "",
            "gatekeeper_email": "",
            "email_pattern": "",
            "email_cloaked": False,
            "notes_on_email_security": ""
        },
        "intelligence_gathering": {
            "investigation_complete": False,
            "investigation_date": None,
            "investigator": "Gemini",
            "primary_contact_name": "",
            "primary_contact_title": "",
            "primary_contact_email": "",
            "alternative_contacts": [],
            "warm_introduction": {
                "needed": True,
                "source": "",
                "status": "Not Initiated",
                "date_initiated": None,
                "notes": ""
            },
            "submission_window": {
                "opens": "",
                "closes": "",
                "is_rolling": False,
                "next_deadline": "",
                "days_until_deadline": None
            },
            "grant_range": {
                "min_usd": None,
                "max_usd": None,
                "currency": "USD"
            },
            "recent_grants": [],
            "relationship_hooks": []
        },
        "status": "Target List - Pending Investigation",
        "notes": "Added via programmatic batch injection."
    }

# Execute the injection
try:
    with open(file_path, 'r') as f:
        data = json.load(f)

    added_count = 0
    for sector, companies in new_targets.items():
        if sector not in data["sectors"]:
            data["sectors"][sector] = []
            
        for company in companies:
            data["sectors"][sector].append(create_template(company))
            added_count += 1

    # Update the reporting dashboard
    data["reporting_dashboard"]["total_sponsors_tracked"] += added_count
    data["reporting_dashboard"]["research_phase"] += added_count

    # Save the updated file
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=2)

    print("")
    print("==================================================")
    print(f"✓ INJECTION COMPLETE: Successfully added {added_count} new targets.")
    print(f"✓ TOTAL DATABASE COUNT: {data['reporting_dashboard']['total_sponsors_tracked']} Companies Tracked")
    print("==================================================")
    print("All 50 targets are now loaded into the JSON architecture.")
    print("")

except Exception as e:
    print(f"Error during injection: {e}")

