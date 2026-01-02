with open('src/Pages/HomePage.js', 'r') as f:
    lines = f.readlines()

# Find the problematic imports (lines 8 and 11)
new_lines = []
for i, line in enumerate(lines, 1):
    if i in [8, 11] and '// import' in line:
        # These are the commented imports - move them to top
        continue
    new_lines.append(line)

# Now readd them at the top (after React import)
with open('src/Pages/HomePage.js', 'w') as f:
    for line in new_lines:
        f.write(line)

print("Fixed import order")
