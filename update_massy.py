import json
import os

filepath = os.path.expanduser('~/J2E/sponsors.json')

with open(filepath, 'r') as f:
    data = json.load(f)

massy_data = {
    "company": "Massy Stores (Saint Lucia)",
    "valuation_market_cap": "Part of Massy Group (Regional Conglomerate)",
    "ceo": "Martin Dorville (Managing Director, SLU)",
    "philanthropy_director": "Perishables Management Team",
    "submission_intelligence": {
        "submission_method": "Direct Commercial Supply Chain Proposal",
        "gatekeeper_name": "Martin Dorville & Perishables Department",
        "gatekeeper_email": "customercare.slu@massystores.com",
        "email_pattern": "{First}.{Last}@massystores.com"
    },
    "intelligence_gathering": {
        "primary_contact_name": "Martin Dorville",
        "primary_contact_title": "Managing Director",
        "warm_introduction": "Target: Local agricultural networks or Ministry of Agriculture to introduce the farm as a premium supplier.",
        "submission_window": "Rolling (Commercial Supplier Onboarding)",
        "grant_range": "Commercial Supply Contract",
        "recent_grants": "Premium Corners (Love Saint Lucia Campaign), Guru MarketPlace pilot, Because We Care Campaign",
        "relationship_hooks": "Target focus: Commercial supply chain integration. Leverage their 'Love Saint Lucia' buy-local mandate and 'Premium Corners' initiative. We will pitch the farm's sea moss and mangoes as high-quality, sustainable local produce ready to supply their 13 supermarket locations, reducing reliance on imports and supporting local food security.",
        "investigation_complete": True
    }
}

updated = False
found_name = None

for sector, companies in data.get("sectors", {}).items():
    for i, company in enumerate(companies):
        current_name = company.get("company", "")
        if "massy" in current_name.lower():
            found_name = current_name
            data["sectors"][sector][i].update(massy_data)
            updated = True
            break
    if updated:
        break

if updated:
    data['reporting_dashboard']['research_phase'] -= 1
    with open(filepath, 'w') as f:
        json.dump(data, f, indent=2)
    print(f"\n✓ MASSY STORES INTELLIGENCE LOCKED (Updated entry: '{found_name}')")
    print("✓ Note: Dunstan Demille has passed away. Target pivoted to MD Martin Dorville and the Perishables Team.")
else:
    print("\n! ERROR: Could not find Massy Stores in the database.")
