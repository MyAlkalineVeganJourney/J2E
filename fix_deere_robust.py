import json
import os

filepath = os.path.expanduser('~/J2E/sponsors.json')

with open(filepath, 'r') as f:
    data = json.load(f)

new_hook = "Target focus: Terrestrial smallholder farming and land development. We will position the St. Lucian farm as a premier model for sustainable land agriculture and community infrastructure. We are requesting funding or direct machinery grants (earthmoving equipment, tractors) required to clear land, construct the natural guest accommodations, and cultivate terrestrial crops ahead of the November 11 Convergence."

updated = False
found_name = None

for sector, companies in data.get("sectors", {}).items():
    for company in companies:
        current_name = company.get("company", "")
        # Search case-insensitively for 'deere'
        if "deere" in current_name.lower():
            found_name = current_name
            # Ensure the key exists before updating
            if "intelligence_gathering" not in company:
                company["intelligence_gathering"] = {}
            company["intelligence_gathering"]["relationship_hooks"] = new_hook
            company["intelligence_gathering"]["investigation_complete"] = True
            updated = True

if updated:
    with open(filepath, 'w') as f:
        json.dump(data, f, indent=2)
    print(f"\n✓ SUCCESS: Found and updated entry matching '{found_name}'")
    print("✓ Shifted hook from aquaculture to terrestrial infrastructure and land development.")
else:
    print("\n! ERROR: Could not find any company containing the name 'Deere' in the database.")
    print("Listing current company names to verify:")
    for sector, companies in data.get("sectors", {}).items():
        print(f"\n[{sector}]:")
        for comp in companies:
            print(f"  - {comp.get('company')}")
