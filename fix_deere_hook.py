import json
import os

filepath = os.path.expanduser('~/J2E/sponsors.json')

with open(filepath, 'r') as f:
    data = json.load(f)

new_hook = "Target focus: Terrestrial smallholder farming and land development. We will position the St. Lucian farm as a premier model for sustainable land agriculture and community infrastructure. We are requesting funding or direct machinery grants (earthmoving equipment, tractors) required to clear land, construct the natural guest accommodations, and cultivate terrestrial crops ahead of the November 11 Convergence."

updated = False
for sector, companies in data.get("sectors", {}).items():
    for company in companies:
        if company.get("company") == "John Deere":
            company["intelligence_gathering"]["relationship_hooks"] = new_hook
            updated = True

if updated:
    with open(filepath, 'w') as f:
        json.dump(data, f, indent=2)
    print("\n✓ JOHN DEERE HOOK CORRECTED: Shifted from aquaculture to heavy infrastructure and land development.")
else:
    print("\n! ERROR: John Deere not found.")
