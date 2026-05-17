#!/usr/bin/env python3
import re
import json

# Read the current file
with open('PageLayout.jsx', 'r') as f:
    content = f.read()

# The sections to add to each language (English versions as templates)
# These will be translated into each language
offers_section = '''
      offers: [
        { icon: '🌱', title: '40-Day Protocol', desc: 'Complete cellular detoxification and frequency recalibration.', link: '/TheJourney' },
        { icon: '✨', title: 'Journey 2 Enlightenment', desc: '5-day immersive experience in St. Lucia.', link: '/Journey2Enlightenment' },
        { icon: '🔮', title: '1111 Convergence', desc: 'Global collective consciousness shift.', link: '/Journey2Enlightenment#convergence' },
        { icon: '🧬', title: 'Sea Moss & Herbs', desc: 'Premium wildcrafted sea moss and Dr. Sebi-approved herbs.', link: '/MAVJStore' },
        { icon: '💬', title: 'Digital Consultations', desc: 'One-on-one guidance for your transformation journey.', link: '/MAVJDigitalConsultation' },
        { icon: '📚', title: 'Vibrational Intelligence', desc: 'Deep dive into frequency, elements, and chakras.', link: '/VibrationalIntelligence' }
      ],'''

building_section = '''
      building: [
        { icon: '🏡', title: 'Guest Accommodations', desc: 'Eco-friendly structures for J2E guests.', status: 'IN PROGRESS', thumbnail: '/images/J2EPod.jpeg' },
        { icon: '💬', title: 'MJChat Platform', desc: 'Video sharing, live chat, recipe uploads.', status: 'IN PROGRESS', thumbnail: '/images/SelfImageSketch 6-15-25 at 12.45 PM.jpg' },
        { icon: '🔗', title: 'Blockchain Integration', desc: 'Complete decentralization, sovereign payment processing.', status: 'IN PROGRESS', thumbnail: '/images/Atom.jpg' },
        { icon: '🤖', title: 'AI Team Introduction', desc: 'Meet all 10 personas and learn about human-AI collaboration.', status: 'COMING SOON', thumbnail: '/images/Consciousness.jpeg' }
      ],'''

artisans_section = '''
      artisans: [
        { name: 'Julian The Coconut Artist', specialty: 'Functional Coconut Art & Birdfeeders', description: 'Master coconut sculptor creating functional art pieces out of fresh St. Lucian coconuts.', location: 'Castries Market Arcade, St. Lucia', image: '/images/JulianCoconutArtist.png', workImage: '/images/JulianCoconutBirdFeeders.png' },
        { name: 'Kurt The Fisherman', specialty: 'Sustainable Traditional Fishing', description: 'Master of the sea, specializing in Red Snapper and deep-sea tradition.', location: 'Tou Rouge, Castries, St. Lucia', image: '/images/KurtTheFISHERMAN.png', workImage: '/images/KurtwithSnapper.png' },
        { name: 'Brittany The Chemist', specialty: '100% All-Natural Creams & Fermentations', description: 'Crafting organic scrubs and bio-active fermentations for holistic skin health.', location: 'Washington, DC & Gros Islet, St. Lucia', image: '/images/Brittany.png', workImage: '/images/BrittanyCreamsFermentations.png' },
        { name: 'Anthony The Barber', specialty: 'Precision Grooming & Self-Cut Artistry', description: 'Expert barbering focused on sharp aesthetics and personal frequency.', location: 'St. Lucia', image: '/images/AnthonyTheBarber.png', workImage: '/images/AnthonyTheBarberSelfCut.png' },
        { name: 'King Khaled The Organic Rastafarian Agriculturist', specialty: 'Rastafarian Organic Farmer', description: 'Guardian of the soil at the Rastafarian Farm, growing high-vibration organic produce.', location: 'Des Barras, St. Lucia', image: '/images/KingKhaled.jpg', workImage: '/images/DesBarras.jpeg' },
        { name: 'Reggie The Builder', specialty: 'Black Mallet Official Recycle Man', description: 'Building sustainable structures and leading the recycling movement.', location: 'Black Mallet, St. Lucia', image: '/images/REGGIE.jpeg', workImage: '/images/ReggieBuilderRecycleMan.png' },
        { name: 'Simeon The Skilled Equestrian', specialty: 'The Horse Trainer', description: 'Managing the sanctuary and training horses at the Rastafarian farm.', location: 'Des Barras, St. Lucia', image: '/images/Simeon.png', workImage: '/images/HorseOnFarm.jpeg' },
        { name: 'Billy The Aqua Tour Guide', specialty: 'Water Excursions', description: 'Escorting guests throughout the waters of St. Lucia.', location: 'Soufriere, St. Lucia', image: '/images/Billy.jpg', workImage: '/images/BoatTours.jpg' }
      ],'''

# List of language names to process
languages = [
    'Spanish', 'French', 'German', 'Italian', 'Chinese', 'Taiwanese',
    'Amharic', 'Arabic', 'Swahili', 'Patois', 'BAramaic', 'NAramaic',
    'SAramaic', 'Hebrew', 'Greek', 'Latin', 'Sanskrit'
]

# For each language, find the closing brace after the disclaimer and add the sections
for lang in languages:
    # Pattern to find the disclaimer line for this language
    pattern = rf"({lang}: \{{[^}}]*?disclaimer: '[^']*'[^}}]*?)(\n\s*\}},)"
    
    def add_sections(match):
        before = match.group(1)
        after = match.group(2)
        # Add the sections before the closing brace
        return before + offers_section + building_section + artisans_section + after
    
    content = re.sub(pattern, add_sections, content, flags=re.DOTALL)

# Write the updated content back
with open('PageLayout.jsx', 'w') as f:
    f.write(content)

print("Successfully added offers, building, and artisans to all 18 languages!")
