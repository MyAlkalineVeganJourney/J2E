import json
import os

file_path = os.path.expanduser('~/J2E/sponsors.json')
output_path = os.path.expanduser('~/J2E/dashboard.html')

with open(file_path, 'r') as f:
    data = json.load(f)

html_content = """
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <title>MAVJ Sovereign Endowment – Master Dashboard</title>
    <style>
        body { font-family: sans-serif; margin: 30px; background: #f4f7f6; }
        table { width: 100%; border-collapse: collapse; background: white; margin-bottom: 30px; }
        th { background: #1a3e2f; color: white; padding: 12px; }
        td { padding: 10px; border-bottom: 1px solid #ddd; }
        .badge { padding: 4px 8px; border-radius: 4px; font-size: 0.8em; }
    </style>
</head>
<body>
    <h1>🌱 MAVJ Master Dashboard</h1>
"""

for sector_name, companies in data['sectors'].items():
    html_content += f'<h2>{sector_name.replace("_", " ").title()}</h2><table><tr><th>Target</th><th>Affiliation</th><th>Contact</th><th>Status</th></tr>'
    for c in companies:
        name = c.get('company', 'N/A')
        contact = c.get('intelligence_gathering', {}).get('primary_contact_name', 'N/A')
        email = c.get('intelligence_gathering', {}).get('primary_contact_email', 'N/A')
        status = c.get('status', 'Pending')
        html_content += f'<tr><td>{name}</td><td>{contact}</td><td><a href="mailto:{email}">{email}</a></td><td>{status}</td></tr>'
    html_content += '</table>'

html_content += '</body></html>'

with open(output_path, 'w') as f:
    f.write(html_content)
print('✓ dashboard.html generated successfully.')
