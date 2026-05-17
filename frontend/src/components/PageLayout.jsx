import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const TranslationContext = React.createContext();

// Hook for easy access in children
export const useTranslation = () => React.useContext(TranslationContext);

const Layout = ({ children, pageTitle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentLang, setCurrentLang] = useState('English');
  const [showDropdown, setShowDropdown] = useState(false);
  const [liveUsers] = useState(127);

  // ==================== COMPLETE MASTER LEXICON - ALL 18 LANGUAGES ====================
  const TR = useMemo(() => ({
    // LANGUAGE 1: ENGLISH
    English: {
      co: '💦 MY ALKALINE VEGAN JOURNEY 💦',
      tl: 'SOVEREIGN HEALTH • VIBRATIONAL HEALING • ANCESTRAL NUTRITION',
      l1: 'QUANTUM BASED', l2: 'SCIENTIFICALLY BACKED', l3: 'FREQUENCY FOCUSED',
      r1: 'WHERE QUANTUM PHYSICS', r2: 'MEETS ANCIENT WISDOM', r3: 'AND NUTRITION',
      n0: 'MAVJHome', n1: 'The Journey', n2: 'MAVJStore', n3: 'Journey 2 Enlightenment',
      n4: 'Vibrational Intelligence', n5: 'Align With Us', n6: 'MAVJSearch',
      n7: 'Live Broadcast', n8: 'PodCast/Vlog', n9: 'Contact Us',
      n10: 'Recipes', n11: 'Frequency Misalignment',
      foot: 'EDUCATIONAL PURPOSES ONLY • CONSULT HEALTHCARE PROFESSIONAL',
      pt: 'YOU ARE HOME', live_users: 'Souls',
      announcements: {
        title: '📢 Announcements & Resonance Alignment Portal',
        j2e_title: 'J2E / 11:11 CONVERGENCE', j2e_desc: 'Annual Gala & Global Link.',
        live_title: 'LIVE BROADCAST PORTAL', live_desc: 'Quantum Updates & health recalibration news.',
        portal_title: 'RESONANCE ALIGNMENT PORTAL', portal_desc: 'Align via Amazon gifts.',
        vi_title: 'VIBRATIONAL INTELLIGENCE', vi_desc: 'Latest quantum physics updates.',
        flash_title: 'GLOBAL FLASH MOB', flash_desc: 'Email your 30-sec clip.',
        store_title: 'BIO-MINERAL EXCHANGE', store_desc: 'St. Lucian Sea Moss Gel.'
      },
      quantumJourney: {
        title: 'The Quantum Journey',
        p1: 'My experience during my 40-day Total Reset allowed me to visualize what I call the Godspace—a realm beyond euphoria, beyond bliss. This space combines immense peace and joy with insane clarity and sharp intuition. Scientific community now recognizes the overwhelming benefits of reset detoxification: stem cell activation, growth hormone release for rebuilding damaged cells, and eradication of visceral fat around vital organs.',
        p2: 'This reset makes your immune system bulletproof. I survived living in a home where everyone had COVID, and I never experienced a single symptom.'
      },
      videos: {
        quantum_sleep: { title: 'The Science of Sleep & Quantum Reality', desc: 'Discover how your consciousness operates in quantum states during sleep.' },
        faggin_consciousness: { title: 'Faggin - Consciousness Explained', desc: 'Federico Faggin reveals the quantum nature of consciousness.' },
        you_are_god: { title: 'You Are God - Faggin', desc: 'Understanding your divine nature through quantum physics.' },
        quantum_soul: { title: 'The Quantum Soul', desc: 'Your soul exists in quantum superposition across infinite timelines.' },
        quantum_biology: { title: 'Quantum Biology', desc: 'How quantum mechanics governs your DNA and cellular processes.' },
        yogi_consciousness: { title: 'Consciousness by a Yogi', desc: 'Ancient wisdom meets modern quantum understanding.' }
      },
      artisans: [
        { name: 'Julian The Coconut Artist', specialty: 'Functional Coconut Art & Birdfeeders', description: 'Master coconut sculptor creating functional art pieces from fresh St. Lucian coconuts.' },
        { name: 'Kurt The Fisherman', specialty: 'Sustainable Traditional Fishing', description: 'Master of the sea, specializing in Red Snapper and deep-sea tradition.' },
        { name: 'Brittany The Chemist', specialty: '100% All-Natural Creams & Fermentations', description: 'Crafting organic scrubs and bio-active fermentations for holistic skin health.' },
        { name: 'Anthony The Barber', specialty: 'Precision Grooming & Self-Cut Artistry', description: 'Expert barbering focused on sharp aesthetics and personal frequency.' },
        { name: 'King Khaled', specialty: 'Rastafarian Organic Farmer', description: 'Guardian of the soil, growing high-vibration organic produce.' },
        { name: 'Reggie The Builder', specialty: 'Black Mallet Official Recycle Man', description: 'Building sustainable structures and leading the recycling movement.' },
        { name: 'Simeon', specialty: 'The Horse Trainer', description: 'Managing the sanctuary and training horses at the Rastafarian farm.' },
        { name: 'Billy', specialty: 'Water Excursions', description: 'Escorting guests throughout the waters of St. Lucia.' }
      ],
      coral: { title: 'Coral Reef Restoration & Sea Moss Ecosystems', desc: 'Combining Sea Moss cultivation with active coral reef restoration, creating thriving underwater ecosystems.' },
      ai_academy: { title: 'MAVJ Q Academy', desc: 'Delivering world-class AI education across the OECS region.' },
      word_game: { title: 'Quantum Games', submit: 'SUBMIT', clear: 'CLEAR', scramble: 'SCRAMBLE', hint: 'HINT' }
    },
    // LANGUAGE 2: SPANISH
    Spanish: {
      co: '💦 MI VIAJE VEGANO ALCALINO 💦',
      tl: 'SALUD SOBERANA • SANACIÓN VIBRACIONAL • NUTRICIÓN ANCESTRAL',
      l1: 'BASADO EN CUÁNTICA', l2: 'RESPALDADO CIENTÍFICAMENTE', l3: 'ENFOCADO EN FRECUENCIA',
      r1: 'FÍSICA CUÁNTICA', r2: 'SE ENCUENTRA CON', r3: 'SABIDURÍA ANCESTRAL',
      n0: 'MAVJInicio', n1: 'El Viaje', n2: 'MAVJTienda', n3: 'Viaje a la Iluminación',
      n4: 'Inteligencia Vibratoria', n5: 'Alíneate Con Nosotros', n6: 'MAVJBúsqueda',
      n7: 'Transmisión en Vivo', n8: 'PodCast/Vlog', n9: 'Contáctenos',
      n10: 'Recetas', n11: 'Desalineación de Frecuencia',
      foot: 'SOLO PROPÓSITOS EDUCATIVOS • CONSULTE A UN PROFESIONAL DE SALUD',
      pt: 'ESTÁS EN CASA', live_users: 'Almas',
      announcements: {
        title: '📢 Anuncios y Portal de Alineación de Resonancia',
        j2e_title: 'J2E / 11:11 CONVERGENCIA', j2e_desc: 'Gala Anual y Enlace Global.',
        live_title: 'PORTAL DE TRANSMISIÓN EN VIVO', live_desc: 'Actualizaciones cuánticas y noticias de recalibración.',
        portal_title: 'PORTAL DE ALINEACIÓN DE RESONANCIA', portal_desc: 'Alinear a través de regalos de Amazon.',
        vi_title: 'INTELIGENCIA VIBRACIONAL', vi_desc: 'Últimas actualizaciones de física cuántica.',
        flash_title: 'FLASH MOB GLOBAL', flash_desc: 'Envía tu clip de 30 segundos.',
        store_title: 'INTERCAMBIO BIO-MINERAL', store_desc: 'Gel de Sea Moss de Santa Lucía.'
      },
      quantumJourney: {
        title: 'El Viaje Cuántico',
        p1: 'Mi experiencia durante mi Reinicio Total de 40 días me permitió visualizar lo que llamo el Espacio Divino — un reino más allá de la euforia, más allá de la dicha. Este espacio combina paz inmensa y alegría con claridad increíble e intuición aguda. La comunidad científica reconoce los beneficios abrumadores de la desintoxicación por reinicio: activación de células madre, liberación de hormonas de crecimiento para reconstruir células dañadas y erradicación de la grasa visceral.',
        p2: 'Este reinicio hace que tu sistema inmunológico sea a prueba de balas. Sobreviví viviendo en una casa donde todos tenían COVID, sin un solo síntoma.'
      },
      videos: {
        quantum_sleep: { title: 'La Ciencia del Sueño y la Realidad Cuántica', desc: 'Descubre cómo tu conciencia opera en estados cuánticos durante el sueño.' },
        faggin_consciousness: { title: 'Faggin - La Conciencia Explicada', desc: 'Federico Faggin revela la naturaleza cuántica de la conciencia.' },
        you_are_god: { title: 'Eres Dios - Faggin', desc: 'Comprendiendo tu naturaleza divina a través de la física cuántica.' },
        quantum_soul: { title: 'El Alma Cuántica', desc: 'Tu alma existe en superposición cuántica a través de líneas de tiempo infinitas.' },
        quantum_biology: { title: 'Biología Cuántica', desc: 'Cómo la mecánica cuántica gobierna tu ADN y procesos celulares.' },
        yogi_consciousness: { title: 'Conciencia por un Yogui', desc: 'La sabiduría antigua se encuentra con la comprensión cuántica moderna.' }
      },
      artisans: [
        { name: 'Julian El Artista del Coco', specialty: 'Arte Funcional de Coco y Comederos', description: 'Maestro escultor de coco que crea piezas de arte funcionales con cocos frescos de Santa Lucía.' },
        { name: 'Kurt El Pescador', specialty: 'Pesca Tradicional Sostenible', description: 'Maestro del mar, especializado en pargo rojo y tradición de aguas profundas.' },
        { name: 'Brittany La Química', specialty: 'Cremas y Fermentaciones 100% Naturales', description: 'Creando exfoliantes orgánicos y fermentaciones bioactivas para la salud integral de la piel.' },
        { name: 'Anthony El Barbero', specialty: 'Peluquería de Precisión y Autocorte', description: 'Peluquería experta enfocada en estética nítida y frecuencia personal.' },
        { name: 'Rey Khaled', specialty: 'Agricultor Orgánico Rastafari', description: 'Guardián de la tierra, cultivando productos orgánicos de alta vibración.' },
        { name: 'Reggie El Constructor', specialty: 'Reciclador Oficial de Black Mallet', description: 'Construyendo estructuras sostenibles y liderando el movimiento de reciclaje.' },
        { name: 'Simeon', specialty: 'El Entrenador de Caballos', description: 'Manejando el santuario y entrenando caballos en la granja Rastafari.' },
        { name: 'Billy', specialty: 'Excursiones Acuáticas', description: 'Acompañando a los huéspedes por las aguas de Santa Lucía.' }
      ],
      coral: { title: 'Restauración de Arrecifes de Coral y Ecosistemas de Sea Moss', desc: 'Combinando el cultivo de Sea Moss con la restauración activa de arrecifes de coral.' },
      ai_academy: { title: 'MAVJ Q Academy', desc: 'Ofreciendo educación en IA de clase mundial en toda la región OECS.' },
      word_game: { title: 'Juegos Cuánticos', submit: 'ENVIAR', clear: 'LIMPIAR', scramble: 'MEZCLAR', hint: 'PISTA' }
    },
    // LANGUAGE 3: FRENCH (COMPLETE - NO PLACEHOLDERS)
    French: {
      co: '💦 MON VOYAGE VÉGÉTALIEN ALCALIN 💦',
      tl: 'SANTÉ SOUVERAINE • GUÉRISON VIBRATOIRE • NUTRITION ANCESTRALE',
      l1: 'BASÉ SUR LE QUANTIQUE', l2: 'SOUTENU SCIENTIFIQUEMENT', l3: 'FOCALISÉ SUR LA FRÉQUENCE',
      r1: 'PHYSIQUE QUANTIQUE', r2: 'RENCONTRE LA SAGESSE', r3: 'ANCIENNE ET NUTRITION',
      n0: 'MAVJAccueil', n1: 'Le Voyage', n2: 'MAVJBoutique', n3: 'Voyage vers l\'Éveil',
      n4: 'Intelligence Vibratoire', n5: 'Aligner avec Nous', n6: 'MAVJRecherche',
      n7: 'Diffusion en Direct', n8: 'PodCast/Vlog', n9: 'Contactez-Nous',
      n10: 'Recettes', n11: 'Désalignement de Fréquence',
      foot: 'À DES FINS ÉDUCATIVES UNIQUEMENT • CONSULTEZ UN PROFESSIONNEL DE SANTÉ',
      pt: 'VOUS ÊTES CHEZ VOUS', live_users: 'Âmes',
      announcements: {
        title: '📢 Annonces et Portail d\'Alignement de Résonance',
        j2e_title: 'J2E / CONVERGENCE 11:11', j2e_desc: 'Gala Annuelle et Lien Global.',
        live_title: 'PORTAIL DE DIFFUSION EN DIRECT', live_desc: 'Mises à jour quantiques et actualités de recalibrage.',
        portal_title: 'PORTAIL D\'ALIGNEMENT DE RÉSONANCE', portal_desc: 'Alignez-vous via les cadeaux Amazon.',
        vi_title: 'INTELLIGENCE VIBRATOIRE', vi_desc: 'Dernières mises à jour sur la physique quantique.',
        flash_title: 'FLASH MOB MONDIAL', flash_desc: 'Envoyez votre clip de 30 secondes.',
        store_title: 'ÉCHANGE BIO-MINÉRAL', store_desc: 'Gel de Sea Moss de Sainte-Lucie.'
      },
      quantumJourney: {
        title: 'Le Voyage Quantique',
        p1: 'Mon expérience pendant ma Réinitialisation Totale de 40 jours m\'a permis de visualiser ce que j\'appelle l\'Espace Divin — un royaume au-delà de l\'euphorie, au-delà de la béatitude. Cet espace combine une paix et une joie immenses avec une clarté incroyable et une intuition aiguë. La communauté scientifique reconnaît désormais les bienfaits accablants de la désintoxication par réinitialisation : activation des cellules souches, libération d\'hormones de croissance pour reconstruire les cellules endommagées, et éradication de la graisse viscérale autour des organes vitaux.',
        p2: 'Cette réinitialisation rend votre système immunitaire incassable. J\'ai survécu en vivant dans une maison où tout le monde avait la COVID, sans jamais ressentir un seul symptôme.'
      },
      videos: {
        quantum_sleep: { title: 'La Science du Sommeil et de la Réalité Quantique', desc: 'Découvrez comment votre conscience fonctionne dans les états quantiques pendant le sommeil.' },
        faggin_consciousness: { title: 'Faggin - La Conscience Expliquée', desc: 'Federico Faggin révèle la nature quantique de la conscience.' },
        you_are_god: { title: 'Vous Êtes Dieu - Faggin', desc: 'Comprendre votre nature divine à travers la physique quantique.' },
        quantum_soul: { title: 'L\'Âme Quantique', desc: 'Votre âme existe en superposition quantique à travers des lignes temporelles infinies.' },
        quantum_biology: { title: 'Biologie Quantique', desc: 'Comment la mécanique quantique régit votre ADN et vos processus cellulaires.' },
        yogi_consciousness: { title: 'La Conscience par un Yogi', desc: 'La sagesse ancienne rencontre la compréhension quantique moderne.' }
      },
      artisans: [
        { name: 'Julien L\'Artiste du Coco', specialty: 'Art Fonctionnel du Coco et Mangeoires', description: 'Maître sculpteur de noix de coco créant des pièces d\'art fonctionnelles à partir de noix de coco fraîches de Sainte-Lucie.' },
        { name: 'Kurt Le Pêcheur', specialty: 'Pêche Traditionnelle Durable', description: 'Maître de la mer, spécialisé dans le vivaneau rouge et la tradition de haute mer.' },
        { name: 'Brittany La Chimiste', specialty: 'Crèmes et Fermentations 100% Naturelles', description: 'Création de gommages organiques et de fermentations bioactives pour la santé holistique de la peau.' },
        { name: 'Anthony Le Barbier', specialty: 'Coiffure de Précision et Auto-Coupe', description: 'Coiffure experte axée sur l\'esthétique nette et la fréquence personnelle.' },
        { name: 'Roi Khaled', specialty: 'Agriculteur Biologique Rastafari', description: 'Gardien du sol, cultivant des produits biologiques à haute vibration.' },
        { name: 'Reggie Le Constructeur', specialty: 'Homme de Recyclage Officiel de Black Mallet', description: 'Construction de structures durables et leadership du mouvement de recyclage.' },
        { name: 'Siméon', specialty: 'Le Dresseur de Chevaux', description: 'Gestion du sanctuaire et dressage des chevaux à la ferme Rastafari.' },
        { name: 'Billy', specialty: 'Excursions Aquatiques', description: 'Accompagnement des invités dans les eaux de Sainte-Lucie.' }
      ],
      coral: { title: 'Restauration des Récifs Coralliens et Écosystèmes de Sea Moss', desc: 'Combinant la culture de Sea Moss avec la restauration active des récifs coralliens.' },
      ai_academy: { title: 'MAVJ Q Academy', desc: 'Offrant une éducation en IA de classe mondiale dans toute la région OECS.' },
      word_game: { title: 'Jeux Quantiques', submit: 'SOUMETTRE', clear: 'EFFACER', scramble: 'MÉLANGER', hint: 'INDICE' }
    },
    // LANGUAGE 4: GERMAN
    German: {
      co: '💦 MEINE ALKALISCHE VEGANE REISE 💦',
      tl: 'SOUVERÄNE GESUNDHEIT • VIBRATIONSHEILUNG • AHNENERNÄHRUNG',
      l1: 'QUANTENBASIERT', l2: 'WISSENSCHAFTLICH GESTÜTZT', l3: 'FREQUENZFOKUSSIERT',
      r1: 'QUANTENPHYSIK TRIFFT', r2: 'ALTE WEISHEIT', r3: 'UND ERNÄHRUNG',
      n0: 'MAVJStartseite', n1: 'Die Reise', n2: 'MAVJGeschäft', n3: 'Reise zur Erleuchtung',
      n4: 'Schwingungsintelligenz', n5: 'Mit uns ausrichten', n6: 'MAVJSuche',
      n7: 'Live-Übertragung', n8: 'PodCast/Vlog', n9: 'Kontaktieren Sie uns',
      n10: 'Rezepte', n11: 'Frequenzfehlausrichtung',
      foot: 'NUR FÜR BILDUNGSZWECKE • FACHMANN KONSULTIEREN',
      pt: 'DU BIST ZU HAUSE', live_users: 'Seelen',
      announcements: {
        title: '📢 Ankündigungen und Resonanz-Ausrichtungsportal',
        j2e_title: 'J2E / 11:11 KONVERGENZ', j2e_desc: 'Jährliche Gala und Globale Verbindung.',
        live_title: 'LIVE-ÜBERTRAGUNGS PORTAL', live_desc: 'Quantenaktualisierungen und Gesundheitsnachrichten.',
        portal_title: 'RESONANZ-AUSRICHTUNGS PORTAL', portal_desc: 'Ausrichtung über Amazon-Geschenke.',
        vi_title: 'SCHWINGUNGSINTELLIGENZ', vi_desc: 'Neueste Quantenphysik-Updates.',
        flash_title: 'GLOBALER FLASH MOB', flash_desc: 'Senden Sie Ihren 30-Sekunden-Clip.',
        store_title: 'BIO-MINERALIEN AUSTAUSCH', store_desc: 'St. Lucia Sea Moss Gel.'
      },
      quantumJourney: {
        title: 'Die Quantenreise',
        p1: 'Meine Erfahrung während meines 40-tägigen Total Reset ermöglichte es mir, den Gottraum zu visualisieren — einen Bereich jenseits der Euphorie, jenseits der Glückseligkeit. Dieser Raum vereint immensen Frieden und Freude mit unglaublicher Klarheit und scharfer Intuition. Die wissenschaftliche Gemeinschaft erkennt heute die überwältigenden Vorteile der Reset-Entgiftung an: Aktivierung von Stammzellen, Freisetzung von Wachstumshormonen zum Wiederaufbau geschädigter Zellen und Beseitigung von viszeralem Fett um lebenswichtige Organe.',
        p2: 'Dieser Reset macht Ihr Immunsystem kugelsicher. Ich überlebte in einem Haus, in dem jeder COVID hatte, ohne ein einziges Symptom.'
      },
      videos: {
        quantum_sleep: { title: 'Die Wissenschaft des Schlafes und der Quantenrealität', desc: 'Entdecken Sie, wie Ihr Bewusstsein im Schlaf in Quantenzuständen arbeitet.' },
        faggin_consciousness: { title: 'Faggin - Bewusstsein Erklärt', desc: 'Federico Faggin enthüllt die Quantennatur des Bewusstseins.' },
        you_are_god: { title: 'Du Bist Gott - Faggin', desc: 'Verstehen Sie Ihre göttliche Natur durch die Quantenphysik.' },
        quantum_soul: { title: 'Die Quantenseele', desc: 'Ihre Seele existiert in Quantensuperposition über unendliche Zeitlinien.' },
        quantum_biology: { title: 'Quantenbiologie', desc: 'Wie die Quantenmechanik Ihre DNA und Zellprozesse steuert.' },
        yogi_consciousness: { title: 'Bewusstsein durch einen Yogi', desc: 'Alte Weisheit trifft modernes Quantenverständnis.' }
      },
      artisans: [
        { name: 'Julian Der Kokosnusskünstler', specialty: 'Funktionale Kokoskunst & Vogelfutterhäuschen', description: 'Meisterhafter Kokosnuss-Bildhauer, der funktionale Kunstwerke aus frischen St. Lucia-Kokosnüssen schafft.' },
        { name: 'Kurt Der Fischer', specialty: 'Nachhaltige Traditionelle Fischerei', description: 'Meister des Meeres, spezialisiert auf Rotbarsch und Tiefseetradition.' },
        { name: 'Brittany Die Chemikerin', specialty: '100% Natürliche Cremes & Fermentationen', description: 'Herstellung von Bio-Peelings und bioaktiven Fermentationen für ganzheitliche Hautgesundheit.' },
        { name: 'Anthony Der Barbier', specialty: 'Präzisionspflege & Selbstschnitt-Kunst', description: 'Experten-Friseur mit Fokus auf scharfe Ästhetik und persönliche Frequenz.' },
        { name: 'König Khaled', specialty: 'Rastafarianischer Bio-Landwirt', description: 'Hüter des Bodens, Anbau von hochschwingenden Bio-Produkten.' },
        { name: 'Reggie Der Baumeister', specialty: 'Offizieller Recycling-Mann von Black Mallet', description: 'Bau nachhaltiger Strukturen und Führung der Recycling-Bewegung.' },
        { name: 'Simeon', specialty: 'Der Pferdetrainer', description: 'Verwaltung des Heiligtums und Training von Pferden auf der Rastafari-Farm.' },
        { name: 'Billy', specialty: 'Wasserausflüge', description: 'Begleitung von Gästen durch die Gewässer von St. Lucia.' }
      ],
      coral: { title: 'Korallenriff-Restaurierung und Sea Moss-Ökosysteme', desc: 'Kombination von Sea Moss-Kultivierung mit aktiver Korallenriff-Restaurierung.' },
      ai_academy: { title: 'MAVJ Q Academy', desc: 'Bereitstellung von KI-Bildung auf Weltklasseniveau in der gesamten OECS-Region.' },
      word_game: { title: 'Quantenspiele', submit: 'EINREICHEN', clear: 'LÖSCHEN', scramble: 'MISCHEN', hint: 'HINWEIS' }
    },
    // LANGUAGE 5: ITALIAN
    Italian: {
      co: '💦 IL MIO VIAGGIO VEGANO ALCALINO 💦',
      tl: 'SALUTE SOVRANA • GUARIGIONE VIBRAZIONALE • NUTRIZIONE ANCESTRALE',
      l1: 'BASATO SUL QUANTISTICO', l2: 'SCIENTIFICAMENTE SUPPORTATO', l3: 'FOCALIZZATO SULLA FREQUENZA',
      r1: 'FISICA QUANTISTICA', r2: 'INCONTRA LA SAGGEZZA', r3: 'ANTICA E NUTRIZIONE',
      n0: 'MAVJHome', n1: 'Il Viaggio', n2: 'MAVJNegozio', n3: 'Viaggio verso l\'Illuminazione',
      n4: 'Intelligenza Vibrazionale', n5: 'Allineati con Noi', n6: 'MAVJRicerca',
      n7: 'Trasmissione in Diretta', n8: 'PodCast/Vlog', n9: 'Contattaci',
      n10: 'Ricette', n11: 'Disallineamento di Frequenza',
      foot: 'SOLO A SCOPO EDUCATIVO • CONSULTARE UN PROFESSIONISTA SANITARIO',
      pt: 'SEI A CASA', live_users: 'Anime',
      announcements: {
        title: '📢 Annunci e Portale di Allineamento di Risonanza',
        j2e_title: 'J2E / 11:11 CONVERGENZA', j2e_desc: 'Gala Annuale e Collegamento Globale.',
        live_title: 'PORTALE DI TRASMISSIONE IN DIRETTA', live_desc: 'Aggiornamenti quantistici e notizie di ricallibrazione.',
        portal_title: 'PORTALE DI ALLINEAMENTO DI RISONANZA', portal_desc: 'Allineati tramite regali Amazon.',
        vi_title: 'INTELLIGENZA VIBRAZIONALE', vi_desc: 'Ultimi aggiornamenti sulla fisica quantistica.',
        flash_title: 'FLASH MOB GLOBALE', flash_desc: 'Invia il tuo clip di 30 secondi.',
        store_title: 'SCAMBIO BIO-MINERALE', store_desc: 'Gel di Sea Moss di Santa Lucia.'
      },
      quantumJourney: {
        title: 'Il Viaggio Quantico',
        p1: 'La mia esperienza durante il Reset Totale di 40 giorni mi ha permesso di visualizzare lo Spazio Divino — un regno oltre l\'euforia, oltre la beatitudine. Questo spazio combina pace immensa e gioia con chiarezza incredibile e intuizione acuta. La comunità scientifica riconosce ora i travolgenti benefici della disintossicazione da reset: attivazione delle cellule staminali, rilascio di ormoni della crescita per ricostruire le cellule danneggiate ed eradicazione del grasso viscerale attorno agli organi vitali.',
        p2: 'Questo reset rende il tuo sistema immunitario a prova di proiettile. Sono sopravvissuto vivendo in una casa dove tutti avevano il COVID, senza mai avere un sintomo.'
      },
      videos: {
        quantum_sleep: { title: 'La Scienza del Sonno e della Realtà Quantistica', desc: 'Scopri come la tua coscienza opera in stati quantistici durante il sonno.' },
        faggin_consciousness: { title: 'Faggin - La Coscienza Spiegata', desc: 'Federico Faggin rivela la natura quantistica della coscienza.' },
        you_are_god: { title: 'Tu Sei Dio - Faggin', desc: 'Comprendere la tua natura divina attraverso la fisica quantistica.' },
        quantum_soul: { title: 'L\'Anima Quantistica', desc: 'La tua anima esiste in sovrapposizione quantistica attraverso linee temporali infinite.' },
        quantum_biology: { title: 'Biologia Quantistica', desc: 'Come la meccanica quantistica governa il tuo DNA e i processi cellulari.' },
        yogi_consciousness: { title: 'Coscienza da uno Yogi', desc: 'La saggezza antica incontra la comprensione quantistica moderna.' }
      },
      artisans: [
        { name: 'Julian L\'Artista del Cocco', specialty: 'Arte Funzionale del Cocco e Mangiatoie', description: 'Maestro scultore di cocco che crea opere d\'arte funzionali con cocchi freschi di Santa Lucia.' },
        { name: 'Kurt Il Pescatore', specialty: 'Pesca Tradizionale Sostenibile', description: 'Maestro del mare, specializzato in dentice rosso e tradizione di alto mare.' },
        { name: 'Brittany La Chimica', specialty: 'Creme e Fermentazioni 100% Naturali', description: 'Creazione di scrub organici e fermentazioni bioattive per la salute olistica della pelle.' },
        { name: 'Anthony Il Barbiere', specialty: 'Toelettatura di Precisione e Autotaglio', description: 'Barbiere esperto focalizzato su estetica nitida e frequenza personale.' },
        { name: 'Re Khaled', specialty: 'Agricoltore Biologico Rastafariano', description: 'Guardiano del suolo, coltivando prodotti biologici ad alta vibrazione.' },
        { name: 'Reggie Il Costruttore', specialty: 'Uomo del Riciclaggio Ufficiale di Black Mallet', description: 'Costruzione di strutture sostenibili e guida del movimento di riciclaggio.' },
        { name: 'Simeone', specialty: 'L\'Addestratore di Cavalli', description: 'Gestione del santuario e addestramento dei cavalli presso la fattoria Rastafariana.' },
        { name: 'Billy', specialty: 'Escursioni Acquatiche', description: 'Accompagnamento degli ospiti nelle acque di Santa Lucia.' }
      ],
      coral: { title: 'Restaurazione della Barriera Corallina e Ecosistemi di Sea Moss', desc: 'Combinando la coltivazione di Sea Moss con il ripristino attivo delle barriere coralline.' },
      ai_academy: { title: 'MAVJ Q Academy', desc: 'Offrendo educazione AI di livello mondiale in tutta la regione OECS.' },
      word_game: { title: 'Giochi Quantistici', submit: 'INVIA', clear: 'CANCELLA', scramble: 'MESCOLA', hint: 'SUGGERIMENTO' }
    },
    // LANGUAGE 6: CHINESE (SIMPLIFIED)
    Chinese: {
      co: '💦 我的碱性纯素旅程 💦',
      tl: '主权健康 • 振动疗愈 • 祖传营养',
      l1: '量子基础', l2: '科学支撑', l3: '频率聚焦',
      r1: '量子物理', r2: '邂逅古老智慧', r3: '与营养学',
      n0: 'MAVJ首页', n1: '旅程', n2: 'MAVJ商店', n3: '启蒙之旅',
      n4: '振动智能', n5: '与我们结盟', n6: 'MAVJ搜索',
      n7: '直播', n8: '播客/视频', n9: '联系我们',
      n10: '食谱', n11: '频率失调',
      foot: '仅供教育目的 • 请咨询医疗专业人士',
      pt: '你在家', live_users: '灵魂',
      announcements: {
        title: '📢 公告与共振校准门户',
        j2e_title: 'J2E / 11:11 融合', j2e_desc: '年度盛典与全球链接。',
        live_title: '直播门户', live_desc: '量子更新与健康校准新闻。',
        portal_title: '共振校准门户', portal_desc: '通过亚马逊礼物校准。',
        vi_title: '振动智能', vi_desc: '最新量子物理更新。',
        flash_title: '全球快闪族', flash_desc: '发送您的30秒视频。',
        store_title: '生物矿物交换', store_desc: '圣卢西亚海藻凝胶。'
      },
      quantumJourney: {
        title: '量子旅程',
        p1: '我40天的完全重置让我看到了神域——一个超越狂喜、超越极乐的领域。这个空间结合了巨大的平静和喜悦，以及不可思议的清晰度和敏锐的直觉。科学界现在已经认识到重置排毒的压倒性好处：干细胞活化、释放生长激素以重建受损细胞、以及消除重要器官周围的 visceral fat。',
        p2: '这个重置使免疫系统坚不可摧。我住在一个所有人都感染了新冠病毒的房子里，却从未出现任何症状。'
      },
      videos: {
        quantum_sleep: { title: '睡眠科学与量子现实', desc: '发现你的意识如何在睡眠中以量子状态运作。' },
        faggin_consciousness: { title: '法金 - 意识解析', desc: 'Federico Faggin揭示了意识的量子本质。' },
        you_are_god: { title: '你是神 - 法金', desc: '通过量子物理学理解你的神性本质。' },
        quantum_soul: { title: '量子灵魂', desc: '你的灵魂存在于跨越无限时间线的量子叠加态中。' },
        quantum_biology: { title: '量子生物学', desc: '量子力学如何支配你的DNA和细胞过程。' },
        yogi_consciousness: { title: '瑜伽士的意识', desc: '古老智慧与现代量子理解的交汇。' }
      },
      artisans: [
        { name: '椰子艺术家朱利安', specialty: '功能性椰子艺术与鸟食器', description: '椰子雕刻大师，用新鲜圣卢西亚椰子创作功能性艺术品。' },
        { name: '渔夫库尔特', specialty: '可持续传统捕鱼', description: '海洋大师，专攻红鲷鱼和深海传统。' },
        { name: '化学家布列塔尼', specialty: '100%全天然霜与发酵品', description: '制作有机磨砂膏和生物活性发酵品，促进整体皮肤健康。' },
        { name: '理发师安东尼', specialty: '精准美容与自剪艺术', description: '专注于锐利美学和个人频率的专业理发。' },
        { name: '哈立德国王', specialty: '拉斯塔法里有机农民', description: '土壤守护者，种植高振动有机农产品。' },
        { name: '建造者雷吉', specialty: 'Black Mallet官方回收人', description: '建设可持续结构，引领回收运动。' },
        { name: '西蒙', specialty: '马术训练师', description: '管理保护区，在拉斯塔法里农场训练马匹。' },
        { name: '比利', specialty: '水上游览', description: '陪同客人游览圣卢西亚水域。' }
      ],
      coral: { title: '珊瑚礁恢复与海藻生态系统', desc: '结合海藻养殖与积极的珊瑚礁恢复。' },
      ai_academy: { title: 'MAVJ Q学院', desc: '为OECS地区提供世界级AI教育。' },
      word_game: { title: '量子游戏', submit: '提交', clear: '清除', scramble: '打乱', hint: '提示' }
    },
    // LANGUAGE 7: TAIWANESE
    Taiwanese: {
      co: '💦 我的鹼性純素旅程 💦',
      tl: '主權健康 • 振動療愈 • 祖傳營養',
      l1: '量子基礎', l2: '科學支撐', l3: '頻率聚焦',
      r1: '量子物理', r2: '邂逅古老智慧', r3: '佮營養學',
      n0: 'MAVJ首頁', n1: '旅程', n2: 'MAVJ商店', n3: '啟蒙之旅',
      n4: '振動智慧', n5: '佮咱結盟', n6: 'MAVJ搜尋',
      n7: '現場直播', n8: '播客/影片', n9: '聯絡阮',
      n10: '食譜', n11: '頻率失調',
      foot: '僅供教育目的 • 請諮詢醫療專業人士',
      pt: '你佇厝', live_users: '靈魂',
      announcements: {
        title: '📢 公告佮共振對齊入口',
        j2e_title: 'J2E / 11:11 融合', j2e_desc: '年度盛典佮全球連結。',
        live_title: '直播入口', live_desc: '量子更新佮健康校準新聞。',
        portal_title: '共振對齊入口', portal_desc: '透過亞馬遜禮物對齊。',
        vi_title: '振動智慧', vi_desc: '上新量子物理更新。',
        flash_title: '全球快閃族', flash_desc: '寄出汝的30秒影片。',
        store_title: '生物礦物交換', store_desc: '聖露西亞海藻凝膠。'
      },
      quantumJourney: {
        title: '量子旅程',
        p1: '我40天的完全重置予我看著神域——一个超越狂喜、超越極樂的領域。這个空間結合了巨大的平靜佮歡喜，以及不可思議的清晰度佮敏銳的直覺。科學界已經認識到重置排毒的壓倒性好處：幹細胞活化、釋放生長激素來重建受損細胞、以及消除重要器官周圍的内臟脂肪。',
        p2: '這个重置使免疫系統堅不可摧。我蹛佇一間所有人攏感染新冠病毒的厝，卻從來無出現任何症狀。'
      },
      videos: {
        quantum_sleep: { title: '睡眠科學佮量子現實', desc: '發現汝的意識按怎佇睡眠中以量子狀態運作。' },
        faggin_consciousness: { title: '法金 - 意識解析', desc: 'Federico Faggin揭示了意識的量子本質。' },
        you_are_god: { title: '汝是神 - 法金', desc: '透過量子物理學理解汝的神性本質。' },
        quantum_soul: { title: '量子靈魂', desc: '汝的靈魂存在於跨越無限時間線的量子疊加態中。' },
        quantum_biology: { title: '量子生物學', desc: '量子力學按怎支配汝的DNA佮細胞過程。' },
        yogi_consciousness: { title: '瑜伽士的意識', desc: '古老智慧佮現代量子理解的交匯。' }
      },
      artisans: [
        { name: '椰子藝術家朱利安', specialty: '功能性椰子藝術佮鳥食器', description: '椰子雕刻大師，用新鮮聖露西亞椰子創作功能性藝術品。' },
        { name: '漁夫庫爾特', specialty: '可持續傳統掠魚', description: '海洋大師，專攻紅笛鯛佮深海傳統。' },
        { name: '化學家布列塔尼', specialty: '100%全天然霜佮發酵品', description: '製作有機磨砂膏佮生物活性發酵品，促進整體皮膚健康。' },
        { name: '理髮師安東尼', specialty: '精準美容佮自剪藝術', description: '專注於銳利美學佮個人頻率的專業理髮。' },
        { name: '哈立德國王', specialty: '拉斯塔法里有機農民', description: '土壤守護者，種植高振動有機農產品。' },
        { name: '建造者雷吉', specialty: 'Black Mallet官方回收人', description: '建設可持續結構，引領回收運動。' },
        { name: '西門', specialty: '馬術訓練師', description: '管理保護區，佇拉斯塔法里農場訓練馬匹。' },
        { name: '比利', specialty: '水上遊覽', description: '陪同客人遊覽聖露西亞水域。' }
      ],
      coral: { title: '珊瑚礁恢復佮海藻生態系統', desc: '結合海藻養殖佮積極的珊瑚礁恢復。' },
      ai_academy: { title: 'MAVJ Q學院', desc: '為OECS地區提供世界級AI教育。' },
      word_game: { title: '量子遊戲', submit: '提交', clear: '清除', scramble: '打亂', hint: '提示' }
    },
    // LANGUAGE 8: AMHARIC
    Amharic: {
      co: '💦 የአልካሊን ቪጋን ጉዞዬ 💦',
      tl: 'ሉዓላዊ ጤና • ቫይብሬሽን ፈውስ • የቅድመ አባቶች ምግብ',
      l1: 'ኳንተም ላይ የተመሠረተ', l2: 'ሳይንሳዊ ድጋፍ', l3: 'ድግግሞሽ ያማከለ',
      r1: 'ኳንተም ፊዚክስ', r2: 'ከጥንታዊ ጥበብ ጋር', r3: 'እና ምግብ',
      n0: 'MAVJቤት', n1: 'ጉዞው', n2: 'MAVJሱቅ', n3: 'ወደ ማብራት ጉዞ',
      n4: 'የንዝረት እውቀት', n5: 'ከእኛ ጋር ተሰለፉ', n6: 'MAVJፍለጋ',
      n7: 'ቀጥታ ስርጭት', n8: 'ፖድካስት/ቭሎግ', n9: 'አግኙን',
      n10: 'የምግብ አዘገጃጀት', n11: 'የድግግሞሽ አለመመጣጠን',
      foot: 'ለትምህርታዊ ዓላማ ብቻ • የጤና ባለሙያ ያማክሩ',
      pt: 'ቤት ነህ', live_users: 'ነፍሳት',
      announcements: {
        title: '📢 ማስታወቂያዎች እና የሚዛመደው አሰላለፍ ፖርታል',
        j2e_title: 'J2E / 11:11 ውህደት', j2e_desc: 'ዓመታዊ ጋላ እና ዓለም አቀፍ ትስስር።',
        live_title: 'የቀጥታ ስርጭት ፖርታል', live_desc: 'ኳንተም ዝመናዎች እና የጤና ማስተካከያ ዜናዎች።',
        portal_title: 'የሚዛመደው አሰላለፍ ፖርታል', portal_desc: 'በአማዞን ስጦታዎች አሰልፍ።',
        vi_title: 'የንዝረት እውቀት', vi_desc: 'የቅርብ ጊዜ የኳንተም ፊዚክስ ዝመናዎች።',
        flash_title: 'ዓለም አቀፍ ፍላሽ ሞብ', flash_desc: 'የ30 ሰከንድ ክሊፕዎን ይላኩ።',
        store_title: 'ባዮ-ማዕድን ልውውጥ', store_desc: 'የሴንት ሉቺያ የባህር ሞስ ጄል።'
      },
      quantumJourney: {
        title: 'ኳንተም ጉዞ',
        p1: 'በ40 ቀን አጠቃላይ ዳግም ማስጀመር የእግዚአብሔርን ቦታ አየሁ — ከደስታ በላይ የሆነ ግዛት። ይህ ቦታ ከፍተኛ ሰላም እና ደስታን ከአስደናቂ ግልጽነት እና ስለታም ውስጣዊ ስሜት ጋር ያጣምራል። ሳይንሳዊ ማህበረሰብ አሁን የዳግም ማስጀመር መርዝ ማስወገድ ጥቅሞችን ይገነዘባል፥ ግንድ ሴሎችን ማንቃት፣ የተጎዱ ሴሎችን እንደገና ለመገንባት የእድገት ሆርሞኖችን መልቀቅ እና በቪታል አካላት ዙሪያ ያለውን ቪሰረል ስብ ማጥፋት።',
        p2: 'ይህ ዳግም ማስጀመር በሽታ ተከላካይ ስርዓትን ጠንካራ ያደርገዋል። ሁሉም ሰው ኮቪድ በያዘበት ቤት ውስጥ ኖሬ በህይወት ተረፍኩ፣ አንድም ምልክት አልተሰማኝም።'
      },
      videos: {
        quantum_sleep: { title: 'የእንቅልፍ ሳይንስ እና የኳንተም እውነታ', desc: 'በእንቅልፍ ጊዜ ንቃተ ህሊናዎ በኳንተም ሁኔታዎች እንዴት እንደሚሰራ ይወቁ።' },
        faggin_consciousness: { title: 'ፋጊን - ንቃተ ህሊና ተብራርቷል', desc: 'ፌዴሪኮ ፋጊን የንቃተ ህሊና ኳንተም ተፈጥሮ ይገልጣል።' },
        you_are_god: { title: 'አንተ አምላክ ነህ - ፋጊን', desc: 'በኳንተም ፊዚክስ አማካኝነት መለኮታዊ ተፈጥሮህን መረዳት።' },
        quantum_soul: { title: 'ኳንተም ነፍስ', desc: 'ነፍስህ ማለቂያ በሌላቸው የጊዜ መስመሮች ውስጥ በኳንተም ሱፐርፖዚሽን ውስጥ ትገኛለች።' },
        quantum_biology: { title: 'ኳንተም ባዮሎጂ', desc: 'ኳንተም ሜካኒክስ ዲኤንኤህን እና ሴሉላር ሂደቶችህን እንዴት እንደሚቆጣጠር።' },
        yogi_consciousness: { title: 'በዮጊ ንቃተ ህሊና', desc: 'ጥንታዊ ጥበብ ከዘመናዊ ኳንተም ግንዛቤ ጋር ይገናኛል።' }
      },
      artisans: [
        { name: 'የኮኮናት አርቲስት ጁሊያን', specialty: 'ተግባራዊ የኮኮናት ጥበብ እና የወፍ መጋቢያ', description: 'ከትኩስ ሴንት ሉቺያ ኮኮናት ተግባራዊ የጥበብ ስራዎችን የሚፈጥር የኮኮናት ቅርጻ ቅርጥ ባለሞያ።' },
        { name: 'አሳ አጥማጁ ኩርት', specialty: 'ዘላቂ ባህላዊ አሳ ማጥመድ', description: 'የባህር ጌታ፣ በቀይ ስናፐር እና ጥልቅ ባህር ባህል ላይ ያተኮረ።' },
        { name: 'ኬሚስት ብሪታኒ', specialty: '100% ተፈጥሯዊ ክሬሞች እና ማፍላት', description: 'ለሙሉ የቆዳ ጤና ኦርጋኒክ ስክራቦችን እና ባዮአክቲቭ ማፍላትን መፍጠር።' },
        { name: 'ፀጉር ቆራጁ አንቶኒ', specialty: 'ትክክለኛ እንክብካቤ እና ራስን የመቁረጥ ጥበብ', description: 'ስለታም ውበት እና የግል ድግግሞሽ ላይ ያተኮረ የባለሙያ ፀጉር ቆራጭ።' },
        { name: 'ንጉስ ካሌድ', specialty: 'ራስተፋሪ ኦርጋኒክ ገበሬ', description: 'በራስተፋሪ እርሻ ውስጥ የአፈር ጠባቂ፣ ከፍተኛ ንዝረት ያላቸውን ኦርጋኒክ ምርቶች ያመርታል።' },
        { name: 'ገንቢው ሬጂ', specialty: 'ብላክ ማሌት ኦፊሴላዊ ሪሳይክል ሰው', description: 'ዘላቂ መዋቅሮችን መገንባት እና የሪሳይክል እንቅስቃሴን መምራት።' },
        { name: 'ሲሞን', specialty: 'የፈረስ አሰልጣኝ', description: 'በራስተፋሪ እርሻ ላይ ቅዱስ ቦታን ማስተዳደር እና ፈረሶችን ማሰልጠን።' },
        { name: 'ቢሊ', specialty: 'የውሃ ጉብኝቶች', description: 'እንግዶችን በሴንት ሉቺያ ውሃ ውስጥ ማጀብ።' }
      ],
      coral: { title: 'የኮራል ሪፍ መልሶ ማቋቋም እና የባህር ሞስ ሥነ ምህዳሮች', desc: 'የባህር ሞስ እርሻን ከንቁ የኮራል ሪፍ መልሶ ማቋቋም ጋር ማጣመር።' },
      ai_academy: { title: 'MAVJ Q አካዳሚ', desc: 'በOECS ክልል ውስጥ የዓለም ደረጃ AI ትምህርት መስጠት።' },
      word_game: { title: 'ኳንተም ጨዋታዎች', submit: 'አስገባ', clear: 'አጽዳ', scramble: 'ቀላቅል', hint: 'ፍንጭ' }
    },
    // LANGUAGE 9: ARABIC
    Arabic: {
      co: '💦 رحلتي النباتية القلوية 💦',
      tl: 'صحة سيادية • شفاء ذبذبي • تغذية أجدادية',
      l1: 'قائم على الكم', l2: 'مدعوم علمياً', l3: 'مركّز على التردد',
      r1: 'الفيزياء الكمية', r2: 'تلتقي الحكمة', r3: 'القديمة والتغذية',
      n0: 'MAVJالرئيسية', n1: 'الرحلة', n2: 'MAVJالمتجر', n3: 'رحلة إلى التنوير',
      n4: 'الذكاء الاهتزازي', n5: 'انضم إلينا', n6: 'MAVJالبحث',
      n7: 'البث المباشر', n8: 'بودكاست/فيديو', n9: 'اتصل بنا',
      n10: 'وصفات', n11: 'اختلال التردد',
      foot: 'لأغراض تعليمية فقط • استشر متخصصاً في الرعاية الصحية',
      pt: 'أنت في المنزل', live_users: 'أرواح',
      announcements: {
        title: '📢 الإعلانات وبوابة محاذاة الرنين',
        j2e_title: 'J2E / 11:11 التقارب', j2e_desc: 'احتفالية سنوية واتصال عالمي.',
        live_title: 'بوابة البث المباشر', live_desc: 'تحديثات الكم وأخبار إعادة معايرة الصحة.',
        portal_title: 'بوابة محاذاة الرنين', portal_desc: 'التوافق عبر هدايا أمازون.',
        vi_title: 'الذكاء الاهتزازي', vi_desc: 'آخر تحديثات فيزياء الكم.',
        flash_title: 'الفلاش موب العالمي', flash_desc: 'أرسل مقطع الفيديو الخاص بك لمدة 30 ثانية.',
        store_title: 'التبادل الحيوي المعدني', store_desc: 'جل موس البحر من سانت لوسيا.'
      },
      quantumJourney: {
        title: 'الرحلة الكمومية',
        p1: 'سمحت لي إعادة الضبط الكاملة لمدة 40 يومًا برؤية الفضاء الإلهي — عالم يتجاوز النشوة، يتجاوز النعيم. هذا الفضاء يجمع بين السلام الهائل والفرح مع وضوح لا يصدق وحدس حاد. يعترف المجتمع العلمي الآن بالفوائد الإيجابية الهائلة لإزالة السموم عن طريق إعادة الضبط: تنشيط الخلايا الجذعية، إطلاق هرمونات النمو لإعادة بناء الخلايا التالفة، واستئصال الدهون الحشوية الموجودة حول الأعضاء الحيوية.',
        p2: 'هذه إعادة الضبط تجعل جهاز المناعة لديك مقاومًا للرصاص. لقد نجوت من العيش في منزل حيث أصيب الجميع بفيروس كورونا، ولم أعاني أبدًا من أي أعراض.'
      },
      videos: {
        quantum_sleep: { title: 'علم النوم والواقع الكمي', desc: 'اكتشف كيف يعمل وعيك في الحالات الكمومية أثناء النوم.' },
        faggin_consciousness: { title: 'فاجين - الوعي موضحًا', desc: 'يكشف فيديريكو فاجين عن الطبيعة الكمومية للوعي.' },
        you_are_god: { title: 'أنت الله - فاجين', desc: 'فهم طبيعتك الإلهية من خلال فيزياء الكم.' },
        quantum_soul: { title: 'الروح الكمومية', desc: 'روحك موجودة في تراكب كمومي عبر خطوط زمنية لا حصر لها.' },
        quantum_biology: { title: 'البيولوجيا الكمومية', desc: 'كيف تحكم ميكانيكا الكم حمضك النووي وعملياتك الخلوية.' },
        yogi_consciousness: { title: 'الوعي بواسطة يوجي', desc: 'الحكمة القديمة تلتقي بالفهم الكمي الحديث.' }
      },
      artisans: [
        { name: 'جوليان فنان جوز الهند', specialty: 'فن جوز الهند الوظيفي ومغذيات الطيور', description: 'نحات جوز الهند الرئيسي الذي يصنع قطعًا فنية وظيفية من جوز الهند الطازج من سانت لوسيا.' },
        { name: 'كورت الصياد', specialty: 'الصيد التقليدي المستدام', description: 'سيد البحر، متخصص في سمك النهاش الأحمر وتقليد أعماق البحار.' },
        { name: 'بريتاني الكيميائية', specialty: 'كريمات وتخميرات طبيعية 100%', description: 'صنع مقشرات عضوية وتخميرات نشطة بيولوجيًا لصحة الجلد الشاملة.' },
        { name: 'أنتوني الحلاق', specialty: 'العناية الدقيقة وفن قص الذات', description: 'حلاقة خبراء تركز على الجماليات الحادة والتردد الشخصي.' },
        { name: 'الملك خالد', specialty: 'مزارع عضوي رستفاري', description: 'حارس التربة في مزرعة رستفاري، يزرع منتجات عضوية عالية الاهتزاز.' },
        { name: 'ريجي البناء', specialty: 'رجل إعادة التدوير الرسمي في بلاك ماليت', description: 'بناء هياكل مستدامة وقيادة حركة إعادة التدوير.' },
        { name: 'سيمون', specialty: 'مدرب الخيول', description: 'إدارة الملاذ وتدريب الخيول في مزرعة رستفاري.' },
        { name: 'بيلي', specialty: 'رحلات مائية', description: 'مرافقة الضيوف عبر مياه سانت لوسيا.' }
      ],
      coral: { title: 'ترميم الشعاب المرجانية والنظم البيئية لطحلب البحر', desc: 'الجمع بين زراعة طحلب البحر والترميم النشط للشعاب المرجانية.' },
      ai_academy: { title: 'أكاديمية MAVJ Q', desc: 'تقديم تعليم عالمي المستوى في الذكاء الاصطناعي في جميع أنحاء منطقة OECS.' },
      word_game: { title: 'الألعاب الكمومية', submit: 'إرسال', clear: 'مسح', scramble: 'خلط', hint: 'تلميح' }
    },
    // LANGUAGE 10: SWAHILI
    Swahili: {
      co: '💦 SAFARI YANGU YA VEGAN ALKALI 💦',
      tl: 'AFYA YA UHURU • UPONYAJI WA MTETEMO • LISHE YA MABABU',
      l1: 'MSINGI WA QUANTUM', l2: 'INAYOUNGWA NA SAYANSI', l3: 'INAYOLENGA MZUNGUKO',
      r1: 'FIZIKIA YA QUANTUM', r2: 'INAKUTANA NA HEKIMA', r3: 'YA KALE NA LISHE',
      n0: 'MAVJNyumbani', n1: 'Safari', n2: 'MAVJDuka', n3: 'Safari ya Kuelimika',
      n4: 'Akili ya Mtetemo', n5: 'Oanisha Nasi', n6: 'MAVJUtafutaji',
      n7: 'Moja kwa Moja', n8: 'Podcast/Vlog', n9: 'Wasiliana Nasi',
      n10: 'Mapishi', n11: 'Upotoshaji wa Mzunguko',
      foot: 'KWA MADHUMUNI YA ELIMU TU • WASILIANA NA MTAALAMU WA AFYA',
      pt: 'U KO NYUMBANI', live_users: 'Nafsi',
      announcements: {
        title: '📢 Matangazo na Lango la Mpangano wa Resonansi',
        j2e_title: 'J2E / 11:11 MAKUJUMBANO', j2e_desc: 'Gala ya Mwaka na Uunganisho wa Dunia.',
        live_title: 'LANGO LA UTANGAZISHO MOJA KWA MOJA', live_desc: 'Sasisho za Quantum na habari za kurekebisha afya.',
        portal_title: 'LANGO LA MPANGO WA MWENENDO', portal_desc: 'Panga kupitia zawadi za Amazon.',
        vi_title: 'AKILI YA MTETEMO', vi_desc: 'Sasisho za hivi punde za fizikia ya quantum.',
        flash_title: 'FLASH MOB YA DUNIA', flash_desc: 'Tuma klipu yako ya sekunde 30.',
        store_title: 'BIO-MADINI BADILISHANO', store_desc: 'Geli ya Moss ya Bahari ya St. Lucia.'
      },
      quantumJourney: {
        title: 'Safari ya Quantum',
        p1: 'Uzoefu wangu wakati wa Uanzishaji Kamili wa Siku 40 uliniruhusu kuona Nafasi ya Mungu — ulimwengu ulio zaidi ya furaha kuu, zaidi ya raha. Nafasi hii inachanganya amani kubwa na furaha na uwazi wa ajabu na intuition kali. Jumuiya ya kisayansi sasa inatambua faida kubwa za uondoaji sumu wa uanzishaji: uanzishaji wa seli za shina, kutolewa kwa homoni za ukuaji kwa kujenga upya seli zilizoharibiwa, na kutokomeza mafuta ya visceral ambayo hupatikana karibu na viungo muhimu.',
        p2: 'Uanzishaji huu unaufanya mfumo wako wa kinga usiweze kupenyezwa. Niliishi katika nyumba ambayo kila mtu alikuwa na COVID, na sikuwahi kupata dalili hata moja.'
      },
      videos: {
        quantum_sleep: { title: 'Sayansi ya Usingizi na Ukweli wa Quantum', desc: 'Gundua jinsi fahamu yako inavyofanya kazi katika majimbo ya quantum wakati wa usingizi.' },
        faggin_consciousness: { title: 'Faggin - Fahamu Imefafanuliwa', desc: 'Federico Faggin anafunua asili ya quantum ya fahamu.' },
        you_are_god: { title: 'Wewe Ni Mungu - Faggin', desc: 'Kuelewa asili yako ya kimungu kupitia fizikia ya quantum.' },
        quantum_soul: { title: 'Nafsi ya Quantum', desc: 'Nafsi yako iko katika nafasi ya quantum kwenye nyakati zisizo na mwisho.' },
        quantum_biology: { title: 'Biolojia ya Quantum', desc: 'Jinsi mekanika ya quantum inavyotawala DNA yako na michakato ya seli.' },
        yogi_consciousness: { title: 'Fahamu kwa Yogi', desc: 'Hekima ya kale inakutana na uelewa wa kisasa wa quantum.' }
      },
      artisans: [
        { name: 'Julian Msanii wa Nazi', specialty: 'Sanaa ya Nazi Inayofanya Kazi na Vilisha Ndege', description: 'Mchongaji nazi mkuu anayeunda vipande vya sanaa vinavyofanya kazi kutoka kwa nazi safi za St. Lucia.' },
        { name: 'Kurt Mvuvi', specialty: 'Uvuvi wa Jadi Endelevu', description: 'Bwana wa bahari, aliyebobea katika Red Snapper na mila ya bahari kuu.' },
        { name: 'Brittany Mkemia', specialty: 'Mafuta na Uchachushaji 100% Asili', description: 'Kuunda skrubu za kikaboni na uchachushaji wa bio-amilifu kwa afya ya ngozi kamilifu.' },
        { name: 'Anthony Kinyozi', specialty: 'Urembo wa Usahihi na Sanaa ya Kujikata', description: 'Urembo wa kitaalam unaozingatia uzuri mkali na mzunguko wa kibinafsi.' },
        { name: 'Mfalme Khaled', specialty: 'Mkulima wa Kikaboni wa Rastafari', description: 'Mlinzi wa udongo katika Shamba la Rastafari, anayekuza mazao ya kikaboni yenye mtetemo wa juu.' },
        { name: 'Reggie Mjenzi', specialty: 'Mtu Rasmi wa Kusindika wa Black Mallet', description: 'Kujenga miundo endelevu na kuongoza harakati za kusindika.' },
        { name: 'Simeon', specialty: 'Mkufunzi wa Farasi', description: 'Kusimamia patakatifu na kufundisha farasi kwenye shamba la Rastafari.' },
        { name: 'Billy', specialty: 'Safari za Majini', description: 'Kuandamana na wageni katika maji ya St. Lucia.' }
      ],
      coral: { title: 'Urejeshaji wa Miamba ya Matumbawe na Mifumo ya Mazingira ya Moss wa Bahari', desc: 'Kuchanganya kilimo cha Moss wa Bahari na urejeshaji hai wa miamba ya matumbawe.' },
      ai_academy: { title: 'MAVJ Q Academy', desc: 'Kutoa elimu ya AI ya kiwango cha kimataifa katika eneo lote la OECS.' },
      word_game: { title: 'Michezo ya Quantum', submit: 'WASILISHA', clear: 'FUTA', scramble: 'CHANGANYA', hint: 'KIDOKEZO' }
    },
    // LANGUAGE 11: PATOIS (ST. LUCIAN CREOLE)
    Patois: {
      co: '💦 VWAYAJ VEGAN ALKALEN MWEN 💦',
      tl: 'SANTE SOUVERAIN • GERIZON VIBRASYON • NITRISYON ZANSÈT',
      l1: 'BAZE SOU QUANTUM', l2: 'SIPÒTE SYANTIFIKMAN', l3: 'FOKIS SOU FREKANS',
      r1: 'FIZIK QUANTUM', r2: 'RANKONTRE SAJÈS', r3: 'ANSYEN AK NITRISYON',
      n0: 'MAVJLakay', n1: 'Vwayaj la', n2: 'MAVJMagazen', n3: 'Vwayaj pou Limyè',
      n4: 'Entèlijans Vibwasyon', n5: 'Aliyen avèk Nou', n6: 'MAVJRéchèch',
      n7: 'An dirèk', n8: 'Podcast/Vlog', n9: 'Kontakte Nou',
      n10: 'Resèt', n11: 'Dezaliyman Frekans',
      foot: 'POU REZON EDIKASYON SÈLMAN • KONSILTE PWOFESYONÈL SANTE',
      pt: 'OU LAKAY', live_users: 'Nanm',
      announcements: {
        title: '📢 Anons ak Pòtal Aliyans Rezonans',
        j2e_title: 'J2E / 11:11 KONVÈJANS', j2e_desc: 'Gala Anyèl ak Lyen Mondyal.',
        live_title: 'PÒTAL DIFIZYON AN DIRÈK', live_desc: 'Mizajou Kwantik ak nouvèl rekali brazyon sante.',
        portal_title: 'PÒTAL ALIYMAN REZONANS', portal_desc: 'Aliye atravè kado Amazon.',
        vi_title: 'ENTÈLIJANS VIBRASYON', vi_desc: 'Dènye mizajou sou fizik kwantik.',
        flash_title: 'FLASH MOB MONDIYAL', flash_desc: 'Voye clip 30 segonn ou an.',
        store_title: 'BIO-MINERAL ECHANJ', store_desc: 'Jèl Marenn Lanmè Sent Lisi.'
      },
      quantumJourney: {
        title: 'Vwayaj Kwantik la',
        p1: 'Eksperyans mwen pandan Total Reset 40 jou te pèmèt mwen vizualize sa mwen rele Espas Bondye a — yon wayòm pi lwen pase ekstaz, pi lwen pase kontantman. Espas sa a se yon konbinezon lapè imans ak lajwa ak klète fou ak entwisyon byen file. Kominote syantifik la kounye a rekonèt benefis pozitif akablan nan detoksifikasyon reset la: aktivasyon selil souch yo, lage òmòn kwasans ki dirèkteman gen rapò ak rebati ak ranplase selil domaje yo, ak eradikasyon grès viseral ke yo konnen yo jwenn nan ògàn vital yo.',
        p2: 'Reset sa a fè sistèm iminitè ou a enpénétrab. Mwen te siviv nan yon kay kote tout moun te gen COVID, epi mwen pa janm fè eksperyans yon sèl sentòm.'
      },
      videos: {
        quantum_sleep: { title: 'Syans Dòmi ak Reyaltite Kantik', desc: 'Dekouvri kijan konsyans ou opere nan eta kantik pandan dòmi.' },
        faggin_consciousness: { title: 'Faggin - Konsyans Eksplike', desc: 'Federico Faggin revele nati kantik konsyans.' },
        you_are_god: { title: 'Ou Se Bondye - Faggin', desc: 'Konprann nati divin ou atravè fizik kantik.' },
        quantum_soul: { title: 'Nnanm Kantik', desc: 'Nnanm ou egziste nan sipèpozikyon kantik atravè liy tan enfini.' },
        quantum_biology: { title: 'Byoloji Kantik', desc: 'Kijan mekanik kantik gouvène ADN ou ak pwosesis selilè.' },
        yogi_consciousness: { title: 'Konsyans pa yon Yogi', desc: 'Sajès ansyen rankontre konpreyansyon kantik modèn.' }
      },
      artisans: [
        { name: 'Jilyen Atis Kokoye a', specialty: 'Atizanal Kokoye Fonksyonèl ak Manjè Zwazo', description: 'Mèt skiltè kokoye kreye pyès atizanal fonksyonèl soti nan kokoye fre Sent Lisi.' },
        { name: 'Kèt Pèchè a', specialty: 'Pech Tradisyonèl Dirab', description: 'Mèt lanmè a, espesyalize nan Pwason Wouj ak tradisyon fon lanmè.' },
        { name: 'Britani Chimis la', specialty: 'Krèm ak Fermentasyon 100% Natirèl', description: 'Kreye gomaj òganik ak fermentasyon byo-aktif pou sante po holistic.' },
        { name: 'Antoni Babye a', specialty: 'Jenizon Presizyon ak Atizanal Koup-Tèt', description: 'Jenizon ekspè konsantre sou estetik byen file ak frekans pèsonèl.' },
        { name: 'Wa Khaled', specialty: 'Kiltivatè Òganik Rastafaryen', description: 'Gadyen tè a nan Fèm Rastafaryen an, kiltive pwodwi òganik ki gen gwo vibrasyon.' },
        { name: 'Reji Konstriktè a', specialty: 'Nonm Resiklaj Ofisyèl Black Mallet', description: 'Konstwi estrikti dirab ak dirije mouvman resiklaj la.' },
        { name: 'Simeyon', specialty: 'Dresè Chwal la', description: 'Jere sanctuaire a ak dreste chwal nan fèm Rastafaryen an.' },
        { name: 'Bili', specialty: 'Ekskirsyon Dlo', description: 'Akonpaye envite nan dlo Sent Lisi.' }
      ],
      coral: { title: 'Restorasyon Rèf Coral ak Ekosistèm Marenn Lanmè', desc: 'Konbine kiltivasyon Marenn Lanmè ak restorasyon aktif rèf coral.' },
      ai_academy: { title: 'MAVJ Q Akademi', desc: 'Bay edikasyon AI klas mondyal atravè rejyon OECS la.' },
      word_game: { title: 'Jwèt Kwantik', submit: 'SOUMÈT', clear: 'EFFASE', scramble: 'BRASE', hint: 'SIY' }
    },
    // LANGUAGE 12: BIBLICAL ARAMAIC
    BAramaic: {
      co: '💦 ܡܥܒܪܢܘܬܝ ܦܝܓܢܝܬܐ ܩܠܝܐ 💦',
      tl: 'ܚܝܐ ܫܠܝܛܢܝܐ • ܐܣܝܘܬܐ ܕܙܘܥܐ • ܬܪܒܝܬܐ ܕܐܒܗܬܐ',
      l1: 'ܡܫܬܠܫ ܥܠ ܩܘܢܛܡ', l2: 'ܡܣܬܡܟ ܒܝܕܥܬܐ', l3: 'ܡܬܪܟܙ ܥܠ ܬܪܥܐ',
      r1: 'ܐܝܟܐ ܕܦܝܙܝܩ ܩܘܢܛܡ', r2: 'ܡܬܩܪܒ ܥܡ ܚܟܡܬܐ', r3: 'ܥܬܝܩܬܐ ܘܬܪܒܝܬܐ',
      n0: 'ܒܝܬܐ ܕܡܐܒܝ', n1: 'ܡܥܒܪܢܘܬܐ', n2: 'ܚܢܘܬܐ ܕܡܐܒܝ', n3: 'ܡܥܒܪܢܘܬܐ ܠܢܘܗܪܐ',
      n4: 'ܚܟܡܬܐ ܕܙܘܥܐ', n5: 'ܫܘܬܦܘ ܥܡܢ', n6: 'ܒܥܝܬܐ ܕܡܐܒܝ',
      n7: 'ܦܘܫܩܐ ܓܝܪܐ', n8: 'ܩܪܝܢܐ ܥܠ ܢܗܪܐ', n9: 'ܡܠܠ ܥܡܢ',
      n10: 'ܩܪܝܢܐ ܕܒܘܫܠܐ', n11: 'ܫܘܚܠܦܐ ܕܬܪܥܐ',
      foot: 'ܠܫܘܡܠܝܐ ܕܝܠܦܢܐ ܒܠܚܘܕ • ܫܐܠ ܐܣܝܐ ܡܗܝܡܢܐ',
      pt: 'ܐܢܬ ܒܒܝܬܟ', live_users: 'ܢܦܫܢ',
      announcements: {
        title: '📢 ܟܪܘܙܘܬܐ ܘܬܪܥܐ ܕܫܘܘܝܐ ܙܡܪܢܝܐ',
        j2e_title: 'J2E / 11:11 ܡܬܚܕܢܘܬܐ', j2e_desc: 'ܓܠܐ ܫܢܬܢܝܐ ܘܐܣܪܐ ܥܠܡܝܐ.',
        live_title: 'ܬܪܥܐ ܕܫܘܕܥܐ ܚܝܐ', live_desc: 'ܚܕܬܘܬܐ ܩܘܢܛܝܢܝܬܐ ܘܫܒܥܐ ܕܬܘܒܬܐ ܕܚܠܡܐ.',
        portal_title: 'ܬܪܥܐ ܕܫܘܘܝܐ ܙܡܪܢܝܐ', portal_desc: 'ܐܫܬܘܝ ܒܝܕ ܡܘܗܒܬܐ ܕܐܡܙܘܢ.',
        vi_title: 'ܚܟܡܬܐ ܕܙܘܥܐ', vi_desc: 'ܚܕܬܘܬܐ ܐܚܪܝܬܐ ܕܦܝܣܝܩ ܩܘܢܛܡ.',
        flash_title: 'ܓܠܐ ܥܠܡܝܐ ܕܦܠܫ ܡܘܒ', flash_desc: 'ܐܫܠܡ ܩܠܝܦܐ ܕ30 ܫܢܝ̈ܢ.',
        store_title: 'ܫܘܚܠܦܐ ܒܝܘ-ܡܢܪܐܠܝ', store_desc: 'ܓܠ ܕܚܨܐ ܕܝܡܐ ܕܣܢܬ ܠܘܣܝܐ.'
      },
      quantumJourney: {
        title: 'ܡܥܒܪܢܘܬܐ ܩܘܢܛܝܢܝܬܐ',
        p1: 'ܢܝܫܝ ܒܡܥܒܪܢܘܬܝ ܕ40 ܝܘܡܝܢ ܐܚܙܝ ܕܘܟܬܐ ܕܐܠܗܐ — ܡܠܟܘܬܐ ܕܠܥܠ ܡܢ ܚܕܘܬܐ. ܕܘܟܬܐ ܗܕܐ ܐܝܬܝܗ ܙܘܓܐ ܕܫܠܡܐ ܪܒܐ ܘܚܕܘܬܐ ܥܡ ܓܠܝܘܬܐ ܪܒܬܐ ܘܪܓܫܐ ܚܪܝܦܐ. ܟܢܘܫܬܐ ܕܝܘܠܦܢܐ ܗܫܐ ܝܕܥܐ ܛܒܬܐ ܕܕܟܝܘܬܐ ܕܚܘܕܬܐ: ܡܬܚܠܡܢܘܬܐ ܕܓܪܡܐ ܫܪܫܢܝܐ، ܦܘܩܕܢܐ ܕܗܘܪܡܘܢܐ ܕܪܒܝܬܐ ܠܒܢܝܢܐ ܕܓܪܡܐ ܚܒܝܫܐ، ܘܐܘܒܕܢܐ ܕܚܠܒܐ ܕܫܟܝܚ ܕܢܫܟܚ ܒܚܕܪ ܐܣܘܬܐ ܚܝܢܐ.',
        p2: 'ܚܘܕܬܐ ܗܕܐ ܥܒܕܐ ܠܣܝܒܪܬܐ ܕܠܐ ܡܬܡܗܐ. ܐܬܚܝܬ ܒܒܝܬܐ ܕܟܠܢܫ ܐܝܬ ܗܘܐ ܠܗ ܩܘܪܘܢܐ، ܘܠܐ ܚܫܬ ܐܦܢ ܚܕ ܫܟܝܢܐ.'
      },
      videos: {
        quantum_sleep: { title: 'ܝܘܠܦܢܐ ܕܫܢܬܐ ܘܫܪܝܪܐ ܩܘܢܛܝܢܝܐ', desc: 'ܐܬܕܥ ܕܐܝܟܢܐ ܡܕܥܟ ܦܠܚ ܒܐܘܪܚܬܐ ܩܘܢܛܝܢܝܬܐ ܒܫܢܬܐ.' },
        faggin_consciousness: { title: 'ܦܐܓܝܢ - ܡܕܥܐ ܡܬܦܫܩ', desc: 'ܦܕܪܝܟܘ ܦܐܓܝܢ ܓܠܐ ܟܝܢܐ ܩܘܢܛܝܢܝܐ ܕܡܕܥܐ.' },
        you_are_god: { title: 'ܐܢܬ ܐܠܗܐ - ܦܐܓܝܢ', desc: 'ܐܣܬܟܠ ܟܝܢܟ ܐܠܗܝܐ ܒܝܕ ܦܝܣܝܩ ܩܘܢܛܡ.' },
        quantum_soul: { title: 'ܢܦܫܐ ܩܘܢܛܝܢܝܬܐ', desc: 'ܢܦܫܟ ܐܝܬܝܗ ܒܣܘܦܪܦܘܙܝܨܝܘܢ ܩܘܢܛܝܢܝܐ ܒܟܠܗܝܢ ܙܒܢ̈ܐ.' },
        quantum_biology: { title: 'ܒܝܘܠܘܓܝܐ ܩܘܢܛܝܢܝܬܐ', desc: 'ܐܝܟܢܐ ܡܟܢܝܟܐ ܩܘܢܛܡ ܫܠܛܐ ܥܠ ܕܢܐ ܕܝܠܟ ܘܥܠ ܣܘܥܪܢܐ ܕܚܠܘܠܝܬܐ.' },
        yogi_consciousness: { title: 'ܡܕܥܐ ܕܝܘܓܝ', desc: 'ܚܟܡܬܐ ܥܬܝܩܬܐ ܡܬܩܪܒܐ ܥܡ ܣܘܟܠܐ ܩܘܢܛܝܢܝܐ ܚܕܬܐ.' }
      },
      artisans: [
        { name: 'ܝܘܠܝܢܘܣ ܐܡܢܐ ܕܟܘܟܒܐ', specialty: 'ܐܡܢܐ ܕܟܘܟܒܐ ܘܡܐܟܘܠܬܐ ܕܨܦܪܐ', description: 'ܪܒܐ ܕܓܠܦܐ ܕܟܘܟܒܐ ܕܥܒܕ ܐܡܢܐ ܕܫܡܫܢܐ ܡܢ ܟܘܟܒܐ ܕܣܢܬ ܠܘܣܝܐ.' },
        { name: 'ܩܘܪܛ ܨܝܕܐ', specialty: 'ܨܝܕܘܬܐ ܕܫܒܝܩܬܐ', description: 'ܪܒܐ ܕܝܡܐ، ܕܡܬܝܚ ܒܢܘܢܐ ܣܘܡܩܐ ܘܒܡܫܠܡܢܘܬܐ ܕܥܘܡܩܐ.' },
        { name: 'ܒܪܝܛܢܝ ܟܝܡܝܐܝܬܐ', specialty: '100% ܟܪܡܐ ܘܚܡܝܥܐ ܕܟܝܢܐ', description: 'ܒܢܝܢܐ ܕܡܫܚܐ ܘܚܡܝܥܐ ܕܚܝܐ ܠܚܠܡܐ ܕܓܠܕܐ.' },
        { name: 'ܐܢܛܘܢܝܘܣ ܣܦܪܐ', specialty: 'ܣܦܪܘܬܐ ܕܕܘܩܐ ܘܐܡܢܐ ܕܓܙܙܐ', description: 'ܣܦܪܘܬܐ ܕܝܕܝܥܐ ܕܡܬܝܚܐ ܒܫܦܪܐ ܚܪܝܦܐ ܘܒܬܪܥܐ ܕܢܦܫܐ.' },
        { name: 'ܡܠܟܐ ܟܠܕ', specialty: 'ܦܠܚܐ ܕܐܪܥܐ ܪܣܛܦܪܝ', description: 'ܢܛܪܐ ܕܐܪܥܐ ܒܚܩܠܐ ܕܪܣܛܦܪܝ، ܕܪܒܐ ܦܐܪ̈ܐ ܕܐܪܥܐ ܕܙܘܥܐ ܪܡܐ.' },
        { name: 'ܪܓܝ ܒܢܝܐ', specialty: 'ܓܒܪܐ ܕܚܕܬܘܬܐ ܕܒܠܐܩ ܡܐܠܬ', description: 'ܒܢܝܢܐ ܕܒܢܝܢ̈ܐ ܕܩܝܡܐ ܘܕܒܪܢܘܬܐ ܕܚܕܬܘܬܐ.' },
        { name: 'ܫܡܥܘܢ', specialty: 'ܡܠܦܢܐ ܕܪܟܫܐ', description: 'ܕܒܪܢܘܬܐ ܕܒܝܬ ܩܘܕܫܐ ܘܝܘܠܦܢܐ ܕܪܟܫܐ ܒܚܩܠܐ ܕܪܣܛܦܪܝ.' },
        { name: 'ܒܝܠܝ', specialty: 'ܫܘܛܝܐ ܕܡܝܐ', description: 'ܠܘܝܘܬܐ ܕܐܪ̈ܚܐ ܒܡܝܐ ܕܣܢܬ ܠܘܣܝܐ.' }
      ],
      coral: { title: 'ܚܕܬܘܬܐ ܕܟܘܪܐܠ ܘܒܝܬ ܓܙܐ ܕܚܨܐ', desc: 'ܙܘܓܐ ܕܪܒܝܬܐ ܕܚܨܐ ܥܡ ܚܕܬܘܬܐ ܕܟܘܪܐܠ.' },
      ai_academy: { title: 'MAVJ Q ܐܣܟܘܠܐ', desc: 'ܝܗܒܬܐ ܕܝܘܠܦܢܐ ܕAI ܕܪܡܐ ܕܥܠܡܐ ܒܟܠܗ ܐܬܪܐ ܕOECS.' },
      word_game: { title: 'ܣܥܪܐ ܩܘܢܛܝܢܝܐ', submit: 'ܐܫܠܡ', clear: 'ܐܟܠܝ', scramble: 'ܒܠܒܠ', hint: 'ܪܡܙܐ' }
    },
    // LANGUAGE 13: NEO-ARAMAIC (MODERN)
    NAramaic: {
      co: '💦 ܡܲܥܒܪܵܢܘܼܬܝ ܦܲܝܓܵܢܵܝܬܵܐ ܩܲܠܵܝܬܵܐ 💦',
      tl: 'ܚܲܝܹܐ ܫܠܝܼܛܵܢܵܝܹܐ • ܐܵܣܝܘܼܬܵܐ ܕܙܵܘܥܵܐ • ܬܲܪܒܝܼܬܵܐ ܕܐܲܒ̣ܵܗܵܬܵܐ',
      l1: 'ܐܲܣܝܼܣ ܒܩܘܿܢܛܘܿܡ', l2: 'ܡܲܣܬܲܡܟܵܢܵܐ ܒܝܼܕܲܥܬܵܐ', l3: 'ܛܵܟܹܣܬܵܐ ܥܲܠ ܬܲܪܥܵܐ',
      r1: 'ܐܝܼܟܵܐ ܕܦܝܼܙܝܼܩܵܐ', r2: 'ܡܲܩܪܸܒ ܥܲܡ ܚܸܟܡܬܵܐ', r3: 'ܥܲܬܝܼܩܬܵܐ ܘܬܲܪܒܝܼܬܵܐ',
      n0: 'ܒܝܼܬܐ ܕܡܲܝܟܵܐ', n1: 'ܡܲܥܒܪܵܢܘܼܬܼܵܐ', n2: 'ܚܵܢܘܼܬܼܵܐ ܕܡܲܝܟܵܐ', n3: 'ܡܲܥܒܪܵܢܘܼܬܼܵܐ ܠܢܘܼܗܪܵܐ',
      n4: 'ܚܸܟܼܡܬܵܐ ܕܙܵܘܥܵܐ', n5: 'ܫܘܼܬܵܦܘܼ ܥܲܡܲܢ', n6: 'ܒܘܼܨܝܵܐ ܕܡܲܝܟܵܐ',
      n7: 'ܦܘܼܫܩܵܐ ܓܲܝܵܐ', n8: 'ܦܘܼܕܩܵܣܬܼ', n9: 'ܡܲܠܵܠܘܼ ܥܲܡܲܢ',
      n10: 'ܩܪܵܝܬܵܐ ܕܒܘܼܫܵܠܵܐ', n11: 'ܫܘܼܚܠܵܦܵܐ ܕܬܲܪܥܵܐ',
      foot: 'ܠܫܘܼܡܠܵܝܵܐ ܕܝܵܠܦܵܢܵܐ ܒܠܚܘܼܕ̥ • ܫܵܐܠ ܐܵܣܝܵܐ ܡܗܝܼܡܵܢܵܐ',
      pt: 'ܐܲܢ݇ܬ ܒܒܹܝܬܘܼܟ݂', live_users: 'ܢܲܦܫܵܬܹܐ',
      announcements: {
        title: '📢 ܟܪܘܼܙܝܵܬܹܐ ܘܬܲܪܥܵܐ ܕܡܲܚܕܘܼܬܵܐ ܕܪܹܙܵܢܵܐ',
        j2e_title: 'J2E / 11:11 ܡܬܚܕܢܘܼܬܵܐ', j2e_desc: 'ܓܵܠܵܐ ܫܢܵܝܵܐ ܘܐܲܣܪܵܐ ܥܵܠܡܵܝܵܐ.',
        live_title: 'ܬܲܪܥܵܐ ܕܫܘܼܕܥܵܐ ܚܲܝܵܐ', live_desc: 'ܚܘܼܕܬܵܢܹܐ ܩܘܿܢܛܝܼܢܵܝܹܐ ܘܫܲܒܥܵܐ ܕܬܘܼܒܵܬܵܐ ܕܚܠܵܡܵܐ.',
        portal_title: 'ܬܲܪܥܵܐ ܕܡܲܚܕܘܼܬܵܐ ܕܪܹܙܵܢܵܐ', portal_desc: 'ܐܸܫܬܵܘܝ ܒܝܲܕ ܡܵܘܗܒ݂ܵܬܹܐ ܕܐܵܡܙܘܿܢ.',
        vi_title: 'ܚܸܟܼܡܬܵܐ ܕܙܵܘܥܵܐ', vi_desc: 'ܚܘܼܕܬܵܢܹܐ ܐܲܚܪܵܝܹܐ ܕܦܝܼܙܝܼܩܵܐ ܩܘܿܢܛܘܿܡ.',
        flash_title: 'ܓܵܠܵܐ ܥܵܠܡܵܝܵܐ ܕܦܠܲܫ ܡܘܼܒ', flash_desc: 'ܐܲܫܠܸܡ ܩܠܝܼܦܵܐ ܕ30 ܫܢܝܼ̈ܢ.',
        store_title: 'ܒܝܘܿ-ܡܸܢܪܵܐܠܝ ܫܘܼܚܠܵܦܵܐ', store_desc: 'ܓܹܠ ܕܚܨܵܐ ܕܝܵܡܵܐ ܕܣܹܢܬ ܠܘܼܣܝܼܵܐ.'
      },
      quantumJourney: {
        title: 'ܡܲܥܒܪܵܢܘܼܬܵܐ ܩܘܿܢܛܝܼܢܵܝܬܵܐ',
        p1: 'ܢܝܼܫܝܼ ܒܡܲܥܒܪܵܢܘܼܬܝܼ ܕ40 ܝܵܘܡܵܢܹܐ ܐܲܚܙܝܼ ܕܘܼܟܬܵܐ ܕܐܲܠܵܗܵܐ — ܡܲܠܟܘܼܬܵܐ ܕܠܥܸܠ ܡܸܢ ܚܲܕ݂ܘܼܬ݂ܵܐ، ܠܥܸܠ ܡܸܢ ܛܘܼܒ݂ܵܐ. ܕܘܼܟܬܵܐ ܗܵܕ݂ܹܐ ܐܝܼܬܝܼܗ̇ ܙܵܘܓ݂ܵܐ ܕܫܠܵܡܵܐ ܪܵܒܵܐ ܘܚܲܕ݂ܘܼܬ݂ܵܐ ܥܲܡ ܓܠܝܼܘܼܬ݂ܵܐ ܪܲܒܬܵܐ ܘܪܸܓ݂ܫܵܐ ܚܪܝܼܦܵܐ. ܟܢܘܼܫܬܵܐ ܕܝܘܼܠܦܵܢܵܐ ܗܵܫܵܐ ܝܵܕ݂ܥܵܐ ܛܵܒ݂ܵܬܵܐ ܕܕܸܟ݂ܝܘܼܬܵܐ ܕܚܘܼܕܬܵܐ: ܡܲܬ݂ܚܸܠܡܵܢܘܼܬ݂ܵܐ ܕܓܪܵܡܹܐ ܫܪ̈ܵܫܵܢܹܐ، ܦܘܼܩܕܵܢܵܐ ܕܗܘܿܪܡܘܿܢܹܐ ܕܪܵܒܝܼܬ݂ܵܐ ܠܒܸܢܝܵܢܵܐ ܕܓܪܵܡܹܐ ܚܒ݂ܝܼܫܹܐ، ܘܐܘܼܒ݂ܕܵܢܵܐ ܕܚܲܠܒܵܐ ܕܫܟ݂ܝܼܚ ܕܢܸܫܟܲܚ ܒܚܕ݂ܵܪ ܐܸܣܘܵܬ݂ܵܐ ܚܲܝܵܢܹܐ.',
        p2: 'ܚܘܼܕܬܵܐ ܗܵܕ݂ܹܐ ܥܵܒ݂ܕܵܐ ܠܣܝܼܒ݂ܪܵܬܵܐ ܕܠܵܐ ܡܸܬܡܗܵܐ. ܐܸܬ݂ܚܝܼܬ ܒܒܹܝܬܵܐ ܕܟܠܢܵܫ ܐܝܼܬ ܗ݇ܘܵܐ ܠܹܗ ܩܘܿܪܘܿܢܵܐ، ܘܠܵܐ ܚܫܹܬ ܐܵܦܹܢ ܚܲܕ݂ ܫܸܟ݂ܝܵܢܵܐ.'
      },
      videos: {
        quantum_sleep: { title: 'ܝܘܼܠܦܵܢܵܐ ܕܫܹܢܬܵܐ ܘܫܪܝܼܪܵܐ ܩܘܿܢܛܝܼܢܵܝܵܐ', desc: 'ܐܸܬܕܲܥ ܕܐܲܝܟܵܢܵܐ ܡܲܕܥܘܼܟ݂ ܦܵܠܸܚ ܒܐܘܼܪܚܵܬܹܐ ܩܘܿܢܛܝܼܢܵܝܵܬܹܐ ܒܫܹܢܬܵܐ.' },
        faggin_consciousness: { title: 'ܦܵܓܝܼܢ - ܡܲܕܥܵܐ ܡܸܬܦܫܲܩ', desc: 'ܦܹܕܪܝܼܟܘܿ ܦܵܓܝܼܢ ܓܵܠܹܐ ܟܝܼܢܵܐ ܩܘܿܢܛܝܼܢܵܝܵܐ ܕܡܲܕܥܵܐ.' },
        you_are_god: { title: 'ܐܲܢ݇ܬ ܐܲܠܵܗܵܐ - ܦܵܓܝܼܢ', desc: 'ܐܸܣܬܲܟܲܠ ܟܝܼܢܘܼܟ݂ ܐܲܠܵܗܵܝܵܐ ܒܝܲܕ ܦܝܼܙܝܼܩܵܐ ܩܘܿܢܛܘܿܡ.' },
        quantum_soul: { title: 'ܢܲܦܫܵܐ ܩܘܿܢܛܝܼܢܵܝܬܵܐ', desc: 'ܢܲܦܫܘܼܟ݂ ܐܝܼܬܝܼܗ̇ ܒܣܘܼܦܪܦܘܼܙܝܼܨܝܘܿܢ ܩܘܿܢܛܝܼܢܵܝܵܐ ܒܟܠܗܹܝܢ ܙܲܒ݂ܢܹ̈ܐ.' },
        quantum_biology: { title: 'ܒܝܘܿܠܘܓ݂ܝܵܐ ܩܘܿܢܛܝܼܢܵܝܬܵܐ', desc: 'ܐܲܝܟܵܢܵܐ ܡܲܟܢܝܼܟ݂ܵܐ ܩܘܿܢܛܘܿܡ ܫܲܠܛܵܐ ܥܲܠ ܕܸܢܵܐ ܕܝܼܠܘܼܟ݂ ܘܥܲܠ ܣܘܼܥܪܵܢܹܐ ܕܚܠܘܿܠܝܵܬܹܐ.' },
        yogi_consciousness: { title: 'ܡܲܕܥܵܐ ܕܝܘܿܓ݂ܝ', desc: 'ܚܸܟܡܬܵܐ ܥܲܬܝܼܩܬܵܐ ܡܲܩܪܒܵܐ ܥܲܡ ܣܘܼܟܵܠܵܐ ܩܘܿܢܛܝܼܢܵܝܵܐ ܚܲܕܬܵܐ.' }
      },
      artisans: [
        { name: 'ܝܘܼܠܝܵܢܘܿܣ ܐܵܡܢܵܐ ܕܟܘܼܟܒܵܐ', specialty: 'ܐܵܡܢܵܐ ܕܟܘܼܟܒܵܐ ܘܡܵܐܟܘܼܠܬܵܐ ܕܨܲܦܪܵܐ', description: 'ܪܵܒܵܐ ܕܓܠܵܦܵܐ ܕܟܘܼܟܒܵܐ ܕܥܵܒ݂ܹܕ ܐܵܡܢܵܐ ܕܫܲܡܫܵܢܵܐ ܡܸܢ ܟܘܼܟܒܵܐ ܕܣܹܢܬ ܠܘܼܣܝܼܵܐ.' },
        { name: 'ܩܘܼܪܛ ܨܲܝܵܕ݂ܵܐ', specialty: 'ܨܲܝܵܕ݂ܘܼܬܵܐ ܕܫܒ݂ܝܼܩܬܵܐ', description: 'ܪܵܒܵܐ ܕܝܵܡܵܐ، ܕܡܸܬܝܼܚ ܒܢܘܼܢܵܐ ܣܘܼܡܩܵܐ ܘܒܡܲܫܠܡܵܢܘܼܬ݂ܵܐ ܕܥܘܼܡܩܵܐ.' },
        { name: 'ܒܪܝܼܛܵܢܝ ܟܝܼܡܝܵܐܝܬܵܐ', specialty: '100% ܟܪܵܡܹܐ ܘܚܡܝܼܥܹܐ ܕܟܝܼܢܵܐ', description: 'ܒܸܢܝܵܢܵܐ ܕܡܸܫܚܵܐ ܘܚܡܝܼܥܹܐ ܕܚܲܝܹܐ ܠܚܠܵܡܵܐ ܕܓܠܵܕ݂ܵܐ.' },
        { name: 'ܐܲܢܛܘܿܢܝܘܿܣ ܣܲܦܪܵܐ', specialty: 'ܣܲܦܪܘܼܬܵܐ ܕܕܘܼܩܵܐ ܘܐܵܡܢܵܐ ܕܓܙܵܙܵܐ', description: 'ܣܲܦܪܘܼܬܵܐ ܕܝܼܕ݂ܝܼܥܵܐ ܕܡܸܬܝܼܚܵܐ ܒܫܲܦܪܵܐ ܚܪܝܼܦܵܐ ܘܒܬܲܪܥܵܐ ܕܢܲܦܫܵܐ.' },
        { name: 'ܡܲܠܟܵܐ ܟ݂ܵܠܹܕ', specialty: 'ܦܵܠܚܵܐ ܕܐܲܪܥܵܐ ܪܵܣܛܵܦܪܝ', description: 'ܢܵܛܪܵܐ ܕܐܲܪܥܵܐ ܒܚܲܩܠܵܐ ܕܪܵܣܛܵܦܪܝ، ܕܪܵܒܹܐ ܦܹܐܪܹ̈ܐ ܕܐܲܪܥܵܐ ܕܙܵܘܥܵܐ ܪܵܡܵܐ.' },
        { name: 'ܪܹܓ̰ܝ ܒܵܢܵܝܵܐ', specialty: 'ܓܲܒ݂ܪܵܐ ܕܚܕܬܘܼܬܵܐ ܕܒܠܵܐܩ ܡܵܐܠܸܬ', description: 'ܒܸܢܝܵܢܵܐ ܕܒܸܢܝܵܢܹ̈ܐ ܕܩܵܝܡܵܐ ܘܕܒ݂ܵܪܢܘܼܬܵܐ ܕܚܕܬܘܼܬܵܐ.' },
        { name: 'ܫܸܡܥܘܿܢ', specialty: 'ܡܲܠܦܵܢܵܐ ܕܪܲܟ݂ܫܵܐ', description: 'ܕܒ݂ܵܪܢܘܼܬܵܐ ܕܒܹܝܬ ܩܘܼܕܫܵܐ ܘܝܘܼܠܦܵܢܵܐ ܕܪܲܟ݂ܫܵܐ ܒܚܲܩܠܵܐ ܕܪܵܣܛܵܦܪܝ.' },
        { name: 'ܒܝܼܠܝ', specialty: 'ܫܘܼܛܝܵܐ ܕܡܲܝ̈ܵܐ', description: 'ܠܘܵܝܘܼܬܵܐ ܕܐܵܪ̈ܚܹܐ ܒܡܲܝ̈ܵܐ ܕܣܹܢܬ ܠܘܼܣܝܼܵܐ.' }
      ],
      coral: { title: 'ܚܕܬܘܼܬܵܐ ܕܟܘܿܪܵܐܠ ܘܒܹܝܬ ܓܹܙܵܐ ܕܚܨܵܐ', desc: 'ܙܵܘܓ݂ܵܐ ܕܪܵܒܝܼܬܵܐ ܕܚܨܵܐ ܥܲܡ ܚܕܬܘܼܬܵܐ ܕܟܘܿܪܵܐܠ.' },
      ai_academy: { title: 'MAVJ Q ܐܸܣܟܘܿܠܵܐ', desc: 'ܝܗܵܒ݂ܬܵܐ ܕܝܘܼܠܦܵܢܵܐ ܕAI ܕܪܵܡܵܐ ܕܥܵܠܡܵܐ ܒܟܠܵܗ̇ ܐܲܬܪܵܐ ܕOECS.' },
      word_game: { title: 'ܣܥܵܪܵܐ ܩܘܿܢܛܝܼܢܵܝܵܐ', submit: 'ܐܲܫܠܸܡ', clear: 'ܐܲܟ݂ܠܝ', scramble: 'ܒܲܠܒܸܠ', hint: 'ܪܸܡܙܵܐ' }
    },
    // LANGUAGE 14: SYRIAC ARAMAIC (LITURGICAL)
    SAramaic: {
      co: '💦 ܡܥܰܒܪܢܘܬܝ ܦܝܓܢܝܬܐ ܩܠܝܐ 💦',
      tl: 'ܚܝܐ ܡܠܟܝܐ • ܐܣܝܘܬܐ ܕܬܪܥܐ ܪܘܚܢܐ • ܬܪܒܝܬܐ ܕܐܒܗܬܐ ܩܕܝܫܐ',
      l1: 'ܡܫܬܠܫ ܒܩܘܢܛܡ ܪܘܚܢܐ', l2: 'ܡܣܬܡܟ ܒܝܕܥܬܐ ܡܫܝܚܝܬܐ', l3: 'ܡܬܪܟܙ ܥܠ ܬܪܥܐ ܪܘܚܢܐ',
      r1: 'ܦܝܙܝܩ ܩܘܢܛܡ', r2: 'ܡܬܩܪܒ ܥܡ ܚܟܡܬܐ ܩܕܝܫܬܐ', r3: 'ܘܬܪܒܝܬܐ',
      n0: 'ܒܹܝܬܐ ܕܡܵܒܝ', n1: 'ܡܥܰܒܪܢܘܬܐ', n2: 'ܚܢܘܬܐ ܕܡܵܒܝ', n3: 'ܡܥܰܒܪܢܘܬܐ ܠܢܘܗܪܐ ܪܘܚܢܐ',
      n4: 'ܚܰܟܡܬܐ ܕܙܘܥܐ ܡܫܝܚܝܐ', n5: 'ܫܘܬܦܘ ܥܡܢ ܒܪܘܚܐ', n6: 'ܒܘܨܝܐ ܕܡܵܒܝ',
      n7: 'ܦܘܫܩܐ ܩܕܝܫܐ', n8: 'ܩܪܝܢܐ ܩܕܝܫܐ', n9: 'ܩܪܘ ܠܢ',
      n10: 'ܩܪܝܢܐ ܕܒܘܫܠܐ ܩܕܝܫܐ', n11: 'ܫܘܚܠܦܐ ܕܬܪܥܐ',
      foot: 'ܠܫܘܡܠܝܐ ܕܝܠܦܢܐ ܩܕܝܫܐ ܒܠܚܘܕ • ܫܐܠ ܐܣܝܐ ܡܗܝܡܢܐ',
      pt: 'ܐܢܬ ܒܒܝܬܐ ܩܕܝܫܐ', live_users: 'ܢܦܫܢ',
      announcements: {
        title: '📢 ܟܪܘܙܘܬܐ ܘܬܪܥܐ ܕܫܘܘܝܐ ܙܡܪܢܝܐ',
        j2e_title: 'J2E / 11:11 ܡܬܚܕܢܘܬܐ', j2e_desc: 'ܓܠܐ ܫܢܬܢܝܐ ܘܐܣܪܐ ܥܠܡܝܐ.',
        live_title: 'ܬܪܥܐ ܕܫܘܕܥܐ ܚܝܐ', live_desc: 'ܚܕܬܘܬܐ ܩܘܢܛܝܢܝܬܐ ܘܫܒܥܐ ܕܬܘܒܬܐ ܕܚܠܡܐ.',
        portal_title: 'ܬܪܥܐ ܕܫܘܘܝܐ ܙܡܪܢܝܐ', portal_desc: 'ܐܫܬܘܝ ܒܝܕ ܡܘܗܒܬܐ ܕܐܡܙܘܢ.',
        vi_title: 'ܚܟܡܬܐ ܕܙܘܥܐ', vi_desc: 'ܚܕܬܘܬܐ ܐܚܪܝܬܐ ܕܦܝܣܝܩ ܩܘܢܛܡ.',
        flash_title: 'ܓܠܐ ܥܠܡܝܐ ܕܦܠܫ ܡܘܒ', flash_desc: 'ܐܫܠܡ ܩܠܝܦܐ ܕ30 ܫܢܝ̈ܢ.',
        store_title: 'ܫܘܚܠܦܐ ܒܝܘ-ܡܢܪܐܠܝ', store_desc: 'ܓܠ ܕܚܨܐ ܕܝܡܐ ܕܣܢܬ ܠܘܣܝܐ.'
      },
      quantumJourney: {
        title: 'ܡܥܒܪܢܘܬܐ ܩܘܢܛܝܢܝܬܐ',
        p1: 'ܢܝܫܝ ܒܡܥܒܪܢܘܬܝ ܕ40 ܝܘܡܝܢ ܐܚܙܝ ܕܘܟܬܐ ܕܐܠܗܐ — ܡܠܟܘܬܐ ܕܠܥܠ ܡܢ ܚܕܘܬܐ، ܠܥܠ ܡܢ ܛܘܒܐ. ܕܘܟܬܐ ܗܕܐ ܐܝܬܝܗ ܙܘܓܐ ܕܫܠܡܐ ܪܒܐ ܘܚܕܘܬܐ ܥܡ ܓܠܝܘܬܐ ܪܒܬܐ ܘܪܓܫܐ ܚܪܝܦܐ. ܟܢܘܫܬܐ ܕܝܘܠܦܢܐ ܗܫܐ ܝܕܥܐ ܛܒܬܐ ܕܕܟܝܘܬܐ ܕܚܘܕܬܐ: ܡܬܚܠܡܢܘܬܐ ܕܓܪܡܐ ܫܪܫܢܝܐ، ܦܘܩܕܢܐ ܕܗܘܪܡܘܢܐ ܕܪܒܝܬܐ ܠܒܢܝܢܐ ܕܓܪܡܐ ܚܒܝܫܐ، ܘܐܘܒܕܢܐ ܕܚܠܒܐ ܕܫܟܝܚ ܕܢܫܟܚ ܒܚܕܪ ܐܣܘܬܐ ܚܝܢܐ.',
        p2: 'ܚܘܕܬܐ ܗܕܐ ܥܒܕܐ ܠܣܝܒܪܬܐ ܕܠܐ ܡܬܡܗܐ. ܐܬܚܝܬ ܒܒܝܬܐ ܕܟܠܢܫ ܐܝܬ ܗܘܐ ܠܗ ܩܘܪܘܢܐ، ܘܠܐ ܚܫܬ ܐܦܢ ܚܕ ܫܟܝܢܐ.'
      },
      videos: {
        quantum_sleep: { title: 'ܝܘܠܦܢܐ ܕܫܢܬܐ ܘܫܪܝܪܐ ܩܘܢܛܝܢܝܐ', desc: 'ܐܬܕܥ ܕܐܝܟܢܐ ܡܕܥܟ ܦܠܚ ܒܐܘܪܚܬܐ ܩܘܢܛܝܢܝܬܐ ܒܫܢܬܐ.' },
        faggin_consciousness: { title: 'ܦܐܓܝܢ - ܡܕܥܐ ܡܬܦܫܩ', desc: 'ܦܕܪܝܟܘ ܦܐܓܝܢ ܓܠܐ ܟܝܢܐ ܩܘܢܛܝܢܝܐ ܕܡܕܥܐ.' },
        you_are_god: { title: 'ܐܢܬ ܐܠܗܐ - ܦܐܓܝܢ', desc: 'ܐܣܬܟܠ ܟܝܢܟ ܐܠܗܝܐ ܒܝܕ ܦܝܣܝܩ ܩܘܢܛܡ.' },
        quantum_soul: { title: 'ܢܦܫܐ ܩܘܢܛܝܢܝܬܐ', desc: 'ܢܦܫܟ ܐܝܬܝܗ ܒܣܘܦܪܦܘܙܝܨܝܘܢ ܩܘܢܛܝܢܝܐ ܒܟܠܗܝܢ ܙܒܢ̈ܐ.' },
        quantum_biology: { title: 'ܒܝܘܠܘܓܝܐ ܩܘܢܛܝܢܝܬܐ', desc: 'ܐܝܟܢܐ ܡܟܢܝܟܐ ܩܘܢܛܡ ܫܠܛܐ ܥܠ ܕܢܐ ܕܝܠܟ ܘܥܠ ܣܘܥܪܢܐ ܕܚܠܘܠܝܬܐ.' },
        yogi_consciousness: { title: 'ܡܕܥܐ ܕܝܘܓܝ', desc: 'ܚܟܡܬܐ ܥܬܝܩܬܐ ܡܬܩܪܒܐ ܥܡ ܣܘܟܠܐ ܩܘܢܛܝܢܝܐ ܚܕܬܐ.' }
      },
      artisans: [
        { name: 'ܝܘܠܝܢܘܣ ܐܡܢܐ ܕܩܘܩܒܐ', specialty: 'ܐܡܢܐ ܕܩܘܩܒܐ ܘܡܐܟܘܠܬܐ ܕܨܦܪܐ', description: 'ܪܒܐ ܕܓܠܦܐ ܕܩܘܩܒܐ ܕܥܒܕ ܐܡܢܐ ܕܫܡܫܢܐ ܡܢ ܩܘܩܒܐ ܕܣܢܬ ܠܘܣܝܐ.' },
        { name: 'ܩܘܪܛ ܨܝܕܐ', specialty: 'ܨܝܕܘܬܐ ܕܫܒܝܩܬܐ', description: 'ܪܒܐ ܕܝܡܐ، ܕܡܬܝܚ ܒܢܘܢܐ ܣܘܡܩܐ ܘܒܡܫܠܡܢܘܬܐ ܕܥܘܡܩܐ.' },
        { name: 'ܒܪܝܛܢܝ ܟܝܡܝܐܝܬܐ', specialty: '100% ܟܪܡܐ ܘܚܡܝܥܐ ܕܟܝܢܐ', description: 'ܒܢܝܢܐ ܕܡܫܚܐ ܘܚܡܝܥܐ ܕܚܝܐ ܠܚܠܡܐ ܕܓܠܕܐ.' },
        { name: 'ܐܢܛܘܢܝܘܣ ܣܦܪܐ', specialty: 'ܣܦܪܘܬܐ ܕܕܘܩܐ ܘܐܡܢܐ ܕܓܙܙܐ', description: 'ܣܦܪܘܬܐ ܕܝܕܝܥܐ ܕܡܬܝܚܐ ܒܫܦܪܐ ܚܪܝܦܐ ܘܒܬܪܥܐ ܕܢܦܫܐ.' },
        { name: 'ܡܠܟܐ ܟܠܕ', specialty: 'ܦܠܚܐ ܕܐܪܥܐ ܪܣܛܦܪܝ', description: 'ܢܛܪܐ ܕܐܪܥܐ ܒܚܩܠܐ ܕܪܣܛܦܪܝ، ܕܪܒܐ ܦܐܪ̈ܐ ܕܐܪܥܐ ܕܙܘܥܐ ܪܡܐ.' },
        { name: 'ܪܓܝ ܒܢܝܐ', specialty: 'ܓܒܪܐ ܕܚܕܬܘܬܐ ܕܒܠܐܩ ܡܐܠܬ', description: 'ܒܢܝܢܐ ܕܒܢܝܢ̈ܐ ܕܩܝܡܐ ܘܕܒܪܢܘܬܐ ܕܚܕܬܘܬܐ.' },
        { name: 'ܫܡܥܘܢ', specialty: 'ܡܠܦܢܐ ܕܪܟܫܐ', description: 'ܕܒܪܢܘܬܐ ܕܒܝܬ ܩܘܕܫܐ ܘܝܘܠܦܢܐ ܕܪܟܫܐ ܒܚܩܠܐ ܕܪܣܛܦܪܝ.' },
        { name: 'ܒܝܠܝ', specialty: 'ܫܘܛܝܐ ܕܡܝܐ', description: 'ܠܘܝܘܬܐ ܕܐܪ̈ܚܐ ܒܡܝܐ ܕܣܢܬ ܠܘܣܝܐ.' }
      ],
      coral: { title: 'ܚܕܬܘܬܐ ܕܟܘܪܐܠ ܘܒܝܬ ܓܙܐ ܕܚܨܐ', desc: 'ܙܘܓܐ ܕܪܒܝܬܐ ܕܚܨܐ ܥܡ ܚܕܬܘܬܐ ܕܟܘܪܐܠ.' },
      ai_academy: { title: 'MAVJ Q ܐܣܟܘܠܐ', desc: 'ܝܗܒܬܐ ܕܝܘܠܦܢܐ ܕAI ܕܪܡܐ ܕܥܠܡܐ ܒܟܠܗ ܐܬܪܐ ܕOECS.' },
      word_game: { title: 'ܣܥܪܐ ܩܘܢܛܝܢܝܐ', submit: 'ܐܫܠܡ', clear: 'ܐܟܠܝ', scramble: 'ܒܠܒܠ', hint: 'ܪܡܙܐ' }
    },
    // LANGUAGE 15: HEBREW
    Hebrew: {
      co: '💦 המסע הטבעוני הבסיסי שלי 💦',
      tl: 'בריאות ריבונית • ריפוי תדרי • תזונת אבות',
      l1: 'מבוסס קוונטי', l2: 'נתמך מדעית', l3: 'ממוקד תדר',
      r1: 'פיזיקה קוונטית', r2: 'פוגשת חוכמה עתיקה', r3: 'ותזונה',
      n0: 'MAVJבית', n1: 'המסע', n2: 'MAVJחנות', n3: 'מסע להארה',
      n4: 'אינטליגנציה ויברציונית', n5: 'התיישרו איתנו', n6: 'MAVJחיפוש',
      n7: 'שידור חי', n8: 'פודקאסט/וולוג', n9: 'צור קשר',
      n10: 'מתכונים', n11: 'חוסר איזון תדרי',
      foot: 'למטרות חינוכיות בלבד • התייעץ עם איש מקצוע בתחום הבריאות',
      pt: 'אתה בבית', live_users: 'נשמות',
      announcements: {
        title: '📢 הודעות ופורטל יישור תהודה',
        j2e_title: 'J2E / 11:11 הִתְכַּנְּסוּת', j2e_desc: 'אירוע גאלה שנתי וחיבור גלובלי.',
        live_title: 'פורטל שידור חי', live_desc: 'עדכונים קוונטיים וחדשות כיול בריאות.',
        portal_title: 'פורטל יישור תהודה', portal_desc: 'התיישר באמצעות מתנות אמזון.',
        vi_title: 'אינטליגנציה ויברציונית', vi_desc: 'עדכונים אחרונים בפיזיקה קוונטית.',
        flash_title: 'פלאש מוב גלובלי', flash_desc: 'שלח את קליפ הריקוד שלך ל-30 שניות.',
        store_title: 'ביו-מינרל אקסצ\'נג', store_desc: 'ג\'ל אצות ים מסנט לוסיה.'
      },
      quantumJourney: {
        title: 'המסע הקוונטי',
        p1: 'החוויה שלי במהלך האיפוס הכולל של 40 יום אפשרה לי לדמיין את המרחב האלוהי — ממלכה מעבר לאופוריה, מעבר לאושר. מרחב זה הוא שילוב של שלווה עצומה ושמחה עם בהירות מטורפת ואינטואיציה חדה. הקהילה המדעית מכירה כיום ביתרונות העצומים של ניקוי רעלים באמצעות איפוס: הפעלת תאי גזע, שחרור הורמוני גדילה הקשורים ישירות לבנייה מחדש של תאים פגומים, ומיגור השומן הקרביים המצוי סביב איברים חיוניים.',
        p2: 'איפוס זה הופך את מערכת החיסון שלך לחסינת כדורים. שרדתי מגורים בבית שבו לכולם היה קורונה, ומעולם לא חוויתי סימפטום אחד.'
      },
      videos: {
        quantum_sleep: { title: 'מדע השינה והמציאות הקוונטית', desc: 'גלה כיצד התודעה שלך פועלת במצבים קוונטיים במהלך השינה.' },
        faggin_consciousness: { title: 'פגין - התודעה מוסברת', desc: 'פדריקו פגין חושף את הטבע הקוונטי של התודעה.' },
        you_are_god: { title: 'אתה אלוהים - פגין', desc: 'הבנת הטבע האלוהי שלך באמצעות פיזיקה קוונטית.' },
        quantum_soul: { title: 'הנשמה הקוונטית', desc: 'הנשמה שלך קיימת בסופרפוזיציה קוונטית על פני צירי זמן אינסופיים.' },
        quantum_biology: { title: 'ביולוגיה קוונטית', desc: 'כיצד מכניקת הקוונטים שולטת ב-DNA ובתהליכים התאיים שלך.' },
        yogi_consciousness: { title: 'תודעה מאת יוגי', desc: 'חוכמה עתיקה פוגשת הבנה קוונטית מודרנית.' }
      },
      artisans: [
        { name: 'ג\'וליאן אמן הקוקוס', specialty: 'אמנות קוקוס פונקציונלית ומאכילי ציפורים', description: 'אמן קוקוס ראשי היוצר יצירות אמנות פונקציונליות מקוקוסים טריים של סנט לוסיה.' },
        { name: 'קורט הדייג', specialty: 'דיג מסורתי בר קיימא', description: 'אדון הים, המתמחה בדג סנאפיר אדום ומסורת הים העמוק.' },
        { name: 'בריטני הכימאית', specialty: 'קרמים ותסיסה טבעיים 100%', description: 'יצירת קרצופים אורגניים ותסיסה ביו-אקטיבית לבריאות העור ההוליסטית.' },
        { name: 'אנתוני הספר', specialty: 'טיפוח דיוק ואמנות חיתוך עצמי', description: 'ספרות מומחה המתמקדת באסתטיקה חדה ותדר אישי.' },
        { name: 'המלך ח\'אלד', specialty: 'חקלאי אורגני ראסטפארי', description: 'שומר האדמה בחווה הראסטפארית, מגדל תוצרת אורגנית בתדר גבוה.' },
        { name: 'רג\'י הבנאי', specialty: 'איש המיחזור הרשמי של בלק מאלט', description: 'בניית מבנים ברי קיימא והובלת תנועת המיחזור.' },
        { name: 'שמעון', specialty: 'מאמן הסוסים', description: 'ניהול המקלט ואימון סוסים בחווה הראסטפארית.' },
        { name: 'בילי', specialty: 'טיולי מים', description: 'ליווי אורחים במימיה של סנט לוסיה.' }
      ],
      coral: { title: 'שיקום שוניות אלמוגים ומערכות אקולוגיות של סי מוס', desc: 'שילוב גידול סי מוס עם שיקום פעיל של שוניות אלמוגים.' },
      ai_academy: { title: 'אקדמיית MAVJ Q', desc: 'מתן חינוך AI ברמה עולמית ברחבי אזור OECS.' },
      word_game: { title: 'משחקים קוונטיים', submit: 'שלח', clear: 'נקה', scramble: 'ערבב', hint: 'רמז' }
    },
    // LANGUAGE 16: GREEK
    Greek: {
      co: '💦 ΤΟ ΑΛΚΑΛΙΚΟ ΒΙΓΚΑΝ ΤΑΞΙΔΙ ΜΟΥ 💦',
      tl: 'ΚΥΡΙΑΡΧΗ ΥΓΕΙΑ • ΔΟΝΗΤΙΚΗ ΘΕΡΑΠΕΙΑ • ΠΡΟΓΟΝΙΚΗ ΔΙΑΤΡΟΦΗ',
      l1: 'ΚΒΑΝΤΙΚΗ ΒΑΣΗ', l2: 'ΕΠΙΣΤΗΜΟΝΙΚΗ ΥΠΟΣΤΗΡΙΞΗ', l3: 'ΕΣΤΙΑΣΗ ΣΥΧΝΟΤΗΤΑΣ',
      r1: 'ΚΒΑΝΤΙΚΗ ΦΥΣΙΚΗ', r2: 'ΣΥΝΑΝΤΑ ΑΡΧΑΙΑ', r3: 'ΣΟΦΙΑ ΚΑΙ ΔΙΑΤΡΟΦΗ',
      n0: 'MAVJΑρχική', n1: 'Το Ταξίδι', n2: 'MAVJΚατάστημα', n3: 'Ταξίδι προς Φωτισμό',
      n4: 'Δονητική Νοημοσύνη', n5: 'Ευθυγραμμιστείτε Μαζί Μας', n6: 'MAVJΑναζήτηση',
      n7: 'Ζωντανή Μετάδοση', n8: 'Podcast/Vlog', n9: 'Επικοινωνήστε Μαζί Μας',
      n10: 'Συνταγές', n11: 'Αποευθυγράμμιση Συχνότητας',
      foot: 'ΜΟΝΟ ΓΙΑ ΕΚΠΑΙΔΕΥΤΙΚΟΥΣ ΣΚΟΠΟΥΣ • ΣΥΜΒΟΥΛΕΥΤΕΙΤΕ ΕΠΑΓΓΕΛΜΑΤΙΑ ΥΓΕΙΑΣ',
      pt: 'ΕΙΣΑΙ ΣΠΙΤΙ', live_users: 'Ψυχές',
      announcements: {
        title: '📢 Ανακοινώσεις και Πύλη Ευθυγράμμισης Συντονισμού',
        j2e_title: 'J2E / 11:11 ΣΥΓΚΛΙΣΗ', j2e_desc: 'Ετήσια Γκαλά και Παγκόσμια Σύνδεση.',
        live_title: 'Πύλη Ζωντανής Μετάδοσης', live_desc: 'Κβαντικές ενημερώσεις και ειδήσεις επαναβαθμονόμησης.',
        portal_title: 'Πύλη Ευθυγράμμισης Συντονισμού', portal_desc: 'Ευθυγραμμιστείτε μέσω δώρων Amazon.',
        vi_title: 'Δονητική Νοημοσύνη', vi_desc: 'Τελευταίες ενημερώσεις κβαντικής φυσικής.',
        flash_title: 'Παγκόσμιο Flash Mob', flash_desc: 'Υποβάλετε το κλιπ χορού 30 δευτερολέπτων σας.',
        store_title: 'Βιο-Ορυκτό Ανταλλακτήριο', store_desc: 'Τζελ Sea Moss από την Αγία Λουκία.'
      },
      quantumJourney: {
        title: 'Το Κβαντικό Ταξίδι',
        p1: 'Η εμπειρία μου κατά την Ολική Επαναφορά 40 ημερών μου επέτρεψε να οραματιστώ τον Θείο Χώρο — ένα βασίλειο πέρα από την ευφορία, πέρα από την ευδαιμονία. Αυτός ο χώρος είναι ένας συνδυασμός τεράστιας ειρήνης και χαράς με απίστευτη σαφήνεια και κοφτή διαίσθηση. Η επιστημονική κοινότητα αναγνωρίζει τώρα τα συντριπτικά οφέλη της αποτοξίνωσης επαναφοράς: ενεργοποίηση βλαστοκυττάρων, απελευθέρωση αυξητικών ορμονών που σχετίζονται άμεσα με την ανοικοδόμηση και αντικατάσταση κατεστραμμένων κυττάρων και εξάλειψη του σπλαχνικού λίπους που βρίσκεται γύρω από ζωτικά όργανα.',
        p2: 'Αυτή η επαναφορά κάνει το ανοσοποιητικό σας σύστημα αδιαπέραστο. Επέζησα ζώντας σε ένα σπίτι όπου όλοι είχαν COVID, και δεν βίωσα ποτέ ούτε ένα σύμπτωμα.'
      },
      videos: {
        quantum_sleep: { title: 'Η Επιστήμη του Ύπνου και της Κβαντικής Πραγματικότητας', desc: 'Ανακαλύψτε πώς η συνείδησή σας λειτουργεί σε κβαντικές καταστάσεις κατά τη διάρκεια του ύπνου.' },
        faggin_consciousness: { title: 'Faggin - Η Συνείδηση Εξηγείται', desc: 'Ο Federico Faggin αποκαλύπτει την κβαντική φύση της συνείδησης.' },
        you_are_god: { title: 'Είσαι Θεός - Faggin', desc: 'Κατανοώντας τη θεία σας φύση μέσω της κβαντικής φυσικής.' },
        quantum_soul: { title: 'Η Κβαντική Ψυχή', desc: 'Η ψυχή σας υπάρχει σε κβαντική υπέρθεση σε άπειρες χρονογραμμές.' },
        quantum_biology: { title: 'Κβαντική Βιολογία', desc: 'Πώς η κβαντική μηχανική κυβερνά το DNA και τις κυτταρικές διεργασίες σας.' },
        yogi_consciousness: { title: 'Συνείδηση από έναν Γιόγκι', desc: 'Η αρχαία σοφία συναντά τη σύγχρονη κβαντική κατανόηση.' }
      },
      artisans: [
        { name: 'Τζούλιαν Ο Καλλιτέχνης Καρύδας', specialty: 'Λειτουργική Τέχνη Καρύδας & Ταΐστρες Πουλιών', description: 'Κύριος γλύπτης καρύδας που δημιουργεί λειτουργικά έργα τέχνης από φρέσκες καρύδες της Αγίας Λουκίας.' },
        { name: 'Κερτ Ο Ψαράς', specialty: 'Βιώσιμη Παραδοσιακή Αλιεία', description: 'Κύριος της θάλασσας, ειδικευμένος στον Κόκκινο Σνάπερ και την παράδοση της ανοιχτής θάλασσας.' },
        { name: 'Μπρίταννι Η Χημικός', specialty: '100% Φυσικές Κρέμες & Ζυμώσεις', description: 'Δημιουργία οργανικών τρίψεων και βιο-δραστικών ζυμώσεων για ολιστική υγεία του δέρματος.' },
        { name: 'Άντονι Ο Κουρέας', specialty: 'Ακρίβεια Περιποίησης & Τέχνη Αυτο-Κουρέματος', description: 'Ειδικός κουρέας που επικεντρώνεται σε κοφτερή αισθητική και προσωπική συχνότητα.' },
        { name: 'Βασιλιάς Χάλεντ', specialty: 'Οργανικός Αγρότης Ρασταφαριανός', description: 'Φύλακας του εδάφους στο Ρασταφαριανό Αγρόκτημα, καλλιεργώντας βιολογικά προϊόντα υψηλής δόνησης.' },
        { name: 'Ρέτζι Ο Οικοδόμος', specialty: 'Επίσημος Ανακυκλωτής του Black Mallet', description: 'Χτίζοντας βιώσιμες κατασκευές και ηγούμενος του κινήματος ανακύκλωσης.' },
        { name: 'Συμεών', specialty: 'Ο Εκπαιδευτής Αλόγων', description: 'Διαχείριση του ιερού και εκπαίδευση αλόγων στο Ρασταφαριανό αγρόκτημα.' },
        { name: 'Μπίλυ', specialty: 'Θαλάσσιες Εκδρομές', description: 'Συνοδεύοντας επισκέπτες στα νερά της Αγίας Λουκίας.' }
      ],
      coral: { title: 'Αποκατάσταση Κοραλλιογενών Υφάλων και Οικοσυστημάτων Sea Moss', desc: 'Συνδυασμός καλλιέργειας Sea Moss με ενεργή αποκατάσταση κοραλλιογενών υφάλων.' },
      ai_academy: { title: 'MAVJ Q Ακαδημία', desc: 'Παροχή εκπαίδευσης AI παγκόσμιας κλάσης σε ολόκληρη την περιοχή OECS.' },
      word_game: { title: 'Κβαντικά Παιχνίδια', submit: 'ΥΠΟΒΟΛΗ', clear: 'ΕΚΚΑΘΑΡΙΣΗ', scramble: 'ΑΝΑΚΑΤΕΜΑ', hint: 'ΥΠΟΔΕΙΞΗ' }
    },
    // LANGUAGE 17: LATIN
    Latin: {
      co: '💦 ITER MEUM VEGAN ALCALINUM 💦',
      tl: 'SALUS IMPERIALIS • SANATIO VIBRATIONIS • NUTRITIO ANCESTRALIS',
      l1: 'FUNDAMENTO QUANTICO', l2: 'SCIENTIA SUFFULTUM', l3: 'AD FREQUENTIAM INTENTUM',
      r1: 'PHYSICA QUANTICA', r2: 'SAPIENTIA ANTIQUA', r3: 'ET NUTRITIO CONVENIUNT',
      n0: 'MAVJDomus', n1: 'Iter', n2: 'MAVJTaberna', n3: 'Iter ad Illuminationem',
      n4: 'Intelligentia Vibrationis', n5: 'Coniunge te Nobiscum', n6: 'MAVJQuaerere',
      n7: 'Vivum Iactum', n8: 'PodCast/Vlog', n9: 'Contactare Nos',
      n10: 'Recipes', n11: 'Malae Alignmentis Frequentiae',
      foot: 'AD FINES EDUCATIONIS SOLUM • CONSULERE PROFESSIONALEM SANITATIS',
      pt: 'DOMI ES', live_users: 'Animae',
      announcements: {
        title: '📢 Annuntiationes et Porta Alignmentis Resonantiae',
        j2e_title: 'J2E / 11:11 CONVERGENTIA', j2e_desc: 'Gala Annua et Connexio Globalis.',
        live_title: 'PORTAL VIVAE TRANSMISSIONIS', live_desc: 'Quantum Renovationes et Nuntii Recalibrationis Sanitatis.',
        portal_title: 'PORTAL ALIGNATIONIS RESONANTIAE', portal_desc: 'Aligna per Amazon dona.',
        vi_title: 'INTELLIGENTIA VIBRATIONIS', vi_desc: 'Novissimae Renovationes Physicae Quanticae.',
        flash_title: 'GLOBALIS FLASH MOB', flash_desc: 'Subice tuum 30 secundorum saltationis clip.',
        store_title: 'BIO-MINERALE COMMUTATIO', store_desc: 'Gel de Sea Moss Sanctae Luciae.'
      },
      quantumJourney: {
        title: 'Iter Quantum',
        p1: 'Experientia mea per Totalem Reset 40 dierum permisit mihi visualizare quod voco Spatium Dei — regnum ultra euphoriam, ultra beatitudinem. Hoc spatium est compositio immensae pacis et gaudii cum insana claritate et acuta intuitione. Communitas scientifica nunc cognoscit beneficia positiva superantia reset detoxificationis: activatio cellularum stirpium, emissio hormonum incrementi quae directe ad aedificandum et reponendum cellulas laesas, et evulsio pinguedinis visceralis quae circa organa vitalia invenitur.',
        p2: 'Hoc reset facit systema immune tuum impenetrabile. Supervixi vivens in domo ubi omnes COVID habuerunt, et numquam unum signum expertus sum.'
      },
      videos: {
        quantum_sleep: { title: 'Scientia Somni et Realitatis Quanticae', desc: 'Disce quomodo conscientia tua operatur in statibus quanticis per somnum.' },
        faggin_consciousness: { title: 'Faggin - Conscientia Explicata', desc: 'Federicus Faggin revelat naturam quanticam conscientiae.' },
        you_are_god: { title: 'Tu Es Deus - Faggin', desc: 'Intellectus naturae tuae divinae per physicam quanticam.' },
        quantum_soul: { title: 'Anima Quantica', desc: 'Anima tua existit in superpositione quantica per lineas temporis infinitas.' },
        quantum_biology: { title: 'Biologia Quantica', desc: 'Quomodo mechanica quantica regit DNA et processus cellularis tuos.' },
        yogi_consciousness: { title: 'Conscientia per Yogi', desc: 'Sapientia antiqua convenit cum intellectu quantico moderno.' }
      },
      artisans: [
        { name: 'Iulianus Artifex Cocois', specialty: 'Ars Functionalis Cocois et Escaria Avium', description: 'Magister sculptor cocois creans artis functionalis fragmenta ex cocois recentibus Sanctae Luciae.' },
        { name: 'Kurtus Piscator', specialty: 'Piscatio Traditionalis Sustinebilis', description: 'Magister maris, specializans in Pisce Rubro et traditione profundi maris.' },
        { name: 'Brittania Chemista', specialty: '100% Naturales Cremes et Fermentationes', description: 'Creans scrubas organicas et fermentationes bio-activas pro salute holistica cutis.' },
        { name: 'Antonius Tonsor', specialty: 'Praecisio Grooming et Ars Auto-Tonsurae', description: 'Tonsura perita focus in aesthetica acuta et frequentia personali.' },
        { name: 'Rex Khaled', specialty: 'Agricola Organicus Rastafarianus', description: 'Custos soli apud Fundum Rastafarianum, crescens fructus altae vibrationis.' },
        { name: 'Reggie Aedificator', specialty: 'Recyclator Officialis Black Mallet', description: 'Aedificans structuras sustinebiles et ducens motum redivivi.' },
        { name: 'Simeon', specialty: 'Equorum Domitor', description: 'Administrans sanctuarium et domans equos apud fundum Rastafarianum.' },
        { name: 'Billy', specialty: 'Exhibitiones Aquaticae', description: 'Comitans hospites per aquas Sanctae Luciae.' }
      ],
      coral: { title: 'Restauratio Corallii et Oecosystematum Marinae Musci', desc: 'Combinans culturam Marinae Musci cum restauratione activa scopulorum corallii.' },
      ai_academy: { title: 'MAVJ Q Academia', desc: 'Tradens educationem AI classis mundialis per totam regionem OECS.' },
      word_game: { title: 'Ludi Quantici', submit: 'SUBMITTE', clear: 'MUNDA', scramble: 'MISCE', hint: 'INNUO' }
    },
    // LANGUAGE 18: SANSKRIT
    Sanskrit: {
      co: '💦 मेरी क्षारीय शाकाहारी यात्रा 💦',
      tl: 'स्वायत्त स्वास्थ्य • कम्पन चिकित्सा • पैतृक पोषण',
      l1: 'क्वान्टम आधारित', l2: 'वैज्ञानिक रूप से समर्थित', l3: 'आवृत्ति केन्द्रित',
      r1: 'क्वान्टम भौतिकी', r2: 'प्राचीन ज्ञान से', r3: 'और पोषण से मिलती है',
      n0: 'MAVJगृहम्', n1: 'यात्रा', n2: 'MAVJविक्रयस्थानम्', n3: 'प्रबोधनयात्रा',
      n4: 'कम्पनबुद्धि', n5: 'अस्माभिः सह संलग्न्यन्ताम्', n6: 'MAVJअन्वेषणम्',
      n7: 'सजीवप्रसारणम्', n8: 'पोड्कास्ट्/व्लॉग्', n9: 'सम्पर्क कुरुत',
      n10: 'पाककला', n11: 'आवृत्तिविषमता',
      foot: 'केवल शैक्षिक उद्देश्यों के लिए • स्वास्थ्य पेशेवर से परामर्श करें',
      pt: 'गृहे असि', live_users: 'आत्मानः',
      announcements: {
        title: '📢 घोषणाएँ एवं अनुनाद संरेखण द्वारम्',
        j2e_title: 'J2E / 11:11 संगमः', j2e_desc: 'वार्षिक समारोह एवं वैश्विक संयोजनम्।',
        live_title: 'सजीवप्रसारणद्वारम्', live_desc: 'क्वान्टम अद्यतनानि आरोग्यपुनरंशनवार्ताः च।',
        portal_title: 'अनुरणनसंरेखणद्वारम्', portal_desc: 'अमेजन उपहारैः संरेखय।',
        vi_title: 'कम्पनबुद्धिः', vi_desc: 'नवीनतम क्वान्टमभौतिकी अद्यतनानि।',
        flash_title: 'वैश्विक फ्लैश मॉब', flash_desc: 'भवतः ३० सेकण्ड नृत्यखण्डं प्रेषयत।',
        store_title: 'जैव-खनिज विनिमयः', store_desc: 'सेन्ट लूसिया सी मॉस जेल्।'
      },
      quantumJourney: {
        title: 'क्वान्टमयात्रा',
        p1: 'मम ४०-दिनसम्पूर्णरीसेट् अनुभवः यं देवस्थानम् इति अहं वदामि तस्य दर्शनम् अकरोत् — एकं राज्यम् उत्साहात् परम्, आनन्दात् परम्। एतत् स्थानम् अपारशान्तेः आनन्दस्य च अद्भुतस्पष्टतया तीक्ष्णान्तःप्रज्ञया च संयोजनम् अस्ति। वैज्ञानिकसमुदायः अद्य रीसेट्-विषशोधनस्य अत्यधिकानि लाभानि जानाति: स्टेम-कोशिकानां सक्रियता, क्षतिग्रस्तकोशिकानां पुनर्निर्माणाय वृद्धिहार्मोनानां मुक्तिः, महत्त्वपूर्णाङ्गानां परितः ज्ञातस्य अन्तःस्नेहस्य च उन्मूलनम्।',
        p2: 'एतत् रीसेट् भवतः रोगप्रतिरोधकक्षमताम् सुदृढाम् करोति। अहं तस्मिन् गृहे अजीवम् यत्र सर्वे कोविड-रोगेण पीडिताः आसन्, एकम् अपि लक्षणम् न अनुभवम्।'
      },
      videos: {
        quantum_sleep: { title: 'निद्राविज्ञानं क्वान्टमसत्यं च', desc: 'निद्रायां कथं तव चेतना क्वान्टमावस्थासु कार्यं करोति इति जानीहि।' },
        faggin_consciousness: { title: 'फग्गिन - चेतना स्पष्टीकृता', desc: 'फेदेरिको फग्गिन चेतनायाः क्वान्टमस्वरूपं प्रकटयति।' },
        you_are_god: { title: 'त्वं देवः असि - फग्गिन', desc: 'क्वान्टमभौतिक्या तव दिव्यस्वरूपस्य अवगमनम्।' },
        quantum_soul: { title: 'क्वान्टमात्मा', desc: 'तव आत्मा अनन्तकालरेखासु क्वान्टमअध्यारोपणे विद्यते।' },
        quantum_biology: { title: 'क्वान्टमजीवविज्ञानम्', desc: 'क्वान्टमयन्त्रशास्त्रं कथं तव डीएनए कोशिकाप्रक्रियाश्च नियन्त्रयति।' },
        yogi_consciousness: { title: 'योगिनः चेतना', desc: 'प्राचीनं ज्ञानम् आधुनिकक्वान्टमबोधेन सह मिलति।' }
      },
      artisans: [
        { name: 'जूलियन् नारिकेलकलाकारः', specialty: 'कार्यात्मकनारिकेलकला पक्षिभोजनानि च', description: 'नारिकेलस्य मूर्तिकारः यः ताजैः सेन्टलूसियानारिकेलैः कार्यात्मककलाकृतयः निर्माति।' },
        { name: 'कुर्त् धीवरः', specialty: 'परम्परागतस्थायिमत्स्यग्रहणम्', description: 'समुद्रस्य स्वामी, रक्तस्नैपರ्-मत्स्ये गहनसमुद्रपरम्परायां च विशिष्टः।' },
        { name: 'ब्रिटनी रसायनशास्त्री', specialty: '१००% प्राकृतिकाः क्रीमाः किण्वनानि च', description: 'जैविकस्क्रबानां जैवसक्रियकिण्वनानां च निर्माणं समग्रत्वक्स्वास्थ्याय।' },
        { name: 'एन्थोनी नापितः', specialty: 'सूक्ष्मशृङ्गारस्वयम्कर्तनकला', description: 'तीक्ष्णसौन्दर्ये व्यक्तिगतआवृत्तौ च केन्द्रितं विशिष्टनापित्यम्।' },
        { name: 'राजा खालेद्', specialty: 'रास्टफारीजैविककृषकः', description: 'रास्टफारीफार्मे भूमेः रक्षकः, उच्चस्पन्दनजैविकोत्पादानां वर्धकः।' },
        { name: 'रेगी निर्माता', specialty: 'ब्लैकमाल्लेटस्य आधिकारिकः पुनर्चक्रणमानवः', description: 'स्थायिसंरचनानां निर्माणं पुनर्चक्रणान्दोलनस्य नेतृत्वं च।' },
        { name: 'सिमिओन्', specialty: 'अश्वप्रशिक्षकः', description: 'रास्टफारीफार्मे पवित्रस्थानस्य व्यवस्थापनम् अश्वानां प्रशिक्षणम् च।' },
        { name: 'बिली', specialty: 'जलभ्रमणानि', description: 'सेन्टलूसियायाः जलेषु अतिथीनाम् अनुगमनम्।' }
      ],
      coral: { title: 'प्रवालभित्तिपुनर्स्थापनं समुद्रमोस्पारिस्थितिकीयं च', desc: 'समुद्रमोस्कृषेः सक्रियप्रवालभित्तिपुनर्स्थापनेन सह संयोजनम्।' },
      ai_academy: { title: 'MAVJ Q अकादमी', desc: 'OECS क्षेत्रे विश्वस्तरीयAIशिक्षायाः प्रदानम्।' },
      word_game: { title: 'क्वान्टमक्रीडाः', submit: 'समर्पय', clear: 'शोधय', scramble: 'मिश्रय', hint: 'सूचना' }
    }
  }), []);

  const LANGS = useMemo(() => [
    { name: 'English', flag: '🇺🇸' }, { name: 'Spanish', flag: '🇪🇸' }, { name: 'French', flag: '🇫🇷' },
    { name: 'German', flag: '🇩🇪' }, { name: 'Italian', flag: '🇮🇹' }, { name: 'Chinese', flag: '🇨🇳' },
    { name: 'Taiwanese', flag: '🇹🇼' }, { name: 'Amharic', flag: '🇪🇹' }, { name: 'Arabic', flag: '🇸🇦' },
    { name: 'Swahili', flag: '🇰🇪' }, { name: 'Patois', flag: '🇱🇨' }, { name: 'BAramaic', flag: '📜' },
    { name: 'NAramaic', flag: '📜' }, { name: 'SAramaic', flag: '✝️' }, { name: 'Hebrew', flag: '🇮🇱' },
    { name: 'Greek', flag: '🇬🇷' }, { name: 'Latin', flag: '🏛️' }, { name: 'Sanskrit', flag: '🕉️' }
  ], []);

  const T = TR[currentLang] || TR.English;
  const activeLangObj = LANGS.find(l => l.name === currentLang) || LANGS[0];

  const navItems = useMemo(() => [
    { icon: '🌐', label: 'Language', type: 'dropdown' },
    { path: '/', icon: '🏠', label: T.n0, type: 'nav' },
    { path: '/TheJourney', icon: '🌱', label: T.n1, type: 'nav' },
    { path: '/Recipes', icon: '🥗', label: T.n10, type: 'nav' },
    { path: '/Illnesses', icon: '🩺', label: T.n11, type: 'nav' },
    { path: '/MAVJStore', icon: '🛒', label: T.n2, type: 'nav' },
    { path: '/Journey2Enlightenment', icon: '✨', label: T.n3, type: 'nav' },
    { path: '/VibrationalIntelligence', icon: '🔮', label: T.n4, type: 'nav' },
    { path: '/AlignWithUs', icon: '🤝', label: T.n5, type: 'nav' },
    { path: '/MAVJSearch', icon: '🔍', label: T.n6, type: 'nav' },
    { path: '/LiveBroadcast', icon: '📡', label: T.n7, type: 'nav' },
    { path: '/PodcastVlog', icon: '🎙️', label: T.n8, type: 'nav' },
    { path: '/ContactUs', icon: '☎️', label: T.n9, type: 'nav' }
  ], [T]);

  const handleLangChange = useCallback((name) => {
    setCurrentLang(name);
    setShowDropdown(false);
  }, []);

  const handleNav = useCallback((path) => { navigate(path); }, [navigate]);

  const displayTitle = pageTitle === 'HOME' ? T.pt : pageTitle;

  const btnStyle = (active) => ({
    color: '#FFD700', fontSize: '0.7rem', padding: '4px 8px', minWidth: '110px', maxWidth: '130px',
    textAlign: 'center', justifyContent: 'center', border: '2px solid',
    borderImage: 'linear-gradient(135deg, #FFD700, #00d4ff) 1', borderRadius: '4px',
    background: active ? 'linear-gradient(135deg,rgba(255,215,0,0.3),rgba(0,212,255,0.3))' : 'rgba(0,0,0,0.7)',
    fontWeight: '700', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
    boxShadow: '0 0 6px rgba(255,215,0,0.3)', display: 'flex', alignItems: 'center', gap: '3px',
    flexShrink: 0, minHeight: '28px', cursor: 'pointer', transition: 'all 0.3s ease'
  });

  return (
    <TranslationContext.Provider value={{ currentLang, setCurrentLang, T, LANGS, translations: T }}>
      <>
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000,
          borderTop: '5px solid #FFD700',
          background: 'linear-gradient(135deg,rgba(26,26,26,0.98),rgba(10,10,10,0.98))',
          padding: '0 6px', borderBottom: '3px solid',
          borderImage: 'linear-gradient(45deg,violet,indigo,blue,green,yellow,orange,red) 1',
          backdropFilter: 'blur(10px)', boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          height: '45px', display: 'flex', alignItems: 'center', gap: '4px'
        }}>
          <span style={{ color:'#FFD700', fontSize:'0.75rem', flexShrink:0, opacity:0.55, userSelect:'none', pointerEvents:'none' }}>◀</span>
          <div style={{
            display:'flex', overflowX:'auto', overflowY:'visible', gap:'5px', flex:1, padding:'0 4px',
            scrollbarWidth:'none', msOverflowStyle:'none', WebkitOverflowScrolling:'touch', alignItems:'center'
          }}>
            {navItems.map((item) => {
              if (item.type === 'dropdown') {
                return (
                  <div key="lang" style={{ position:'relative', flexShrink:0 }}>
                    <div style={{ ...btnStyle(false), minWidth:'130px', justifyContent:'space-between', gap:'4px' }}
                      onClick={() => setShowDropdown(p => !p)}
                      onMouseEnter={(e) => { e.currentTarget.style.background='linear-gradient(135deg,rgba(255,215,0,0.5),rgba(0,212,255,0.5))'; e.currentTarget.style.boxShadow='0 0 15px rgba(255,215,0,1)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background='rgba(0,0,0,0.7)'; e.currentTarget.style.boxShadow='0 0 6px rgba(255,215,0,0.3)'; }}>
                      <span>🌐 {activeLangObj.flag}</span>
                      <span style={{ flex:1, textAlign:'center' }}>{currentLang}</span>
                      <span style={{ fontSize:'0.5rem' }}>{showDropdown ? '▲' : '▼'}</span>
                    </div>
                    {showDropdown && (
                      <div style={{
                        position:'fixed', top:'46px', left:'8px', background:'rgba(5,5,15,0.99)', border:'2px solid',
                        borderImage:'linear-gradient(135deg,#FFD700,#00d4ff,#FF00FF,#FFD700) 1',
                        borderRadius:'6px', minWidth:'175px', maxHeight:'440px', overflowY:'auto', zIndex:99999,
                        boxShadow:'0 10px 40px rgba(0,0,0,0.99)'
                      }}>
                        <div style={{ padding:'8px 14px', borderBottom:'1px solid rgba(255,215,0,0.4)', color:'#FFD700', fontSize:'0.65rem', fontWeight:'900', textTransform:'uppercase', letterSpacing:'1.2px', background:'rgba(255,215,0,0.08)' }}>
                          🌐 Select Language
                        </div>
                        {LANGS.map((lang) => (
                          <div key={lang.name} style={{ background: lang.name===currentLang ? 'rgba(255,215,0,0.22)':'transparent', color:'#FFD700', borderBottom:'1px solid rgba(255,215,0,0.08)', padding:'9px 14px', cursor:'pointer', fontSize:'0.75rem', fontWeight:'700', display:'flex', alignItems:'center', gap:'10px', transition:'background 0.15s ease' }}
                            onClick={() => handleLangChange(lang.name)}
                            onMouseEnter={(e)=>{ e.currentTarget.style.background='rgba(255,215,0,0.38)'; }}
                            onMouseLeave={(e)=>{ e.currentTarget.style.background= lang.name===currentLang ? 'rgba(255,215,0,0.22)':'transparent'; }}>
                            <span style={{ fontSize:'1.15rem' }}>{lang.flag}</span>
                            <span style={{ flex:1 }}>{lang.name}</span>
                            {lang.name===currentLang && <span style={{ fontSize:'0.8rem', color:'#00ff88' }}>✓</span>}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <div key={item.path} style={btnStyle(location.pathname === item.path)}
                  onClick={() => handleNav(item.path)}
                  onMouseEnter={(e) => { e.currentTarget.style.background='linear-gradient(135deg,rgba(255,215,0,0.5),rgba(0,212,255,0.5))'; e.currentTarget.style.boxShadow='0 0 15px rgba(255,215,0,1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background= location.pathname===item.path ? 'linear-gradient(135deg,rgba(255,215,0,0.3),rgba(0,212,255,0.3))':'rgba(0,0,0,0.7)'; e.currentTarget.style.boxShadow='0 0 6px rgba(255,215,0,0.3)'; }}>
                  <span>{item.icon}</span>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '90px' }}>{item.label}</span>
                </div>
              );
            })}
          </div>
          <span style={{ color:'#FFD700', fontSize:'0.75rem', flexShrink:0, opacity:0.55, userSelect:'none', pointerEvents:'none' }}>▶</span>
        </nav>

        <section style={{
          position:'fixed', top:'45px', left:0, right:0, zIndex:1900, border:'3px solid',
          borderImage:'linear-gradient(45deg,violet,indigo,blue,green,yellow,orange,red) 1',
          backgroundColor:'rgba(0,0,0,0.82)', backgroundImage:'url(/images/star-pattern.png)',
          backgroundSize:'100px', backgroundPosition:'center', backgroundRepeat:'repeat',
          backdropFilter:'blur(6px)', boxShadow:'0 4px 20px rgba(0,0,0,0.8)',
          minHeight:'160px', maxHeight:'160px', overflow:'visible',
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', padding:0
        }}>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'center', width:'100%', padding:'10px 20px 0', gap:'14px', flex:1 }}>
            <div style={{ background:'linear-gradient(135deg,violet,indigo,blue,green,yellow,orange,red)', borderRadius:'5px', padding:'2px', flexShrink:0, alignSelf:'flex-end', position:'relative', bottom:'-12px' }}>
              <div style={{ background:'rgba(0,0,0,0.95)', borderRadius:'4px', padding:'12px 16px', fontSize:'0.75rem', fontWeight:'800', color:'#FFD700', lineHeight:'1.7', textAlign:'center', whiteSpace:'nowrap' }}>
                {T.l1}<br />{T.l2}<br />{T.l3}
              </div>
            </div>
            <div style={{ width:'110px', height:'110px', borderRadius:'50%', border:'3px solid #FFD700', overflow:'hidden', background:'transparent', boxShadow:'0 0 24px rgba(255,215,0,0.95)', animation:'heartbeat 1.4s ease-in-out infinite', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, alignSelf:'center' }}>
              <img src="/images/MAVJLogo.jpg" alt="MAVJ Logo" style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:'50%' }} onError={(e)=>{ e.target.onerror=null; e.target.src='/images/star-pattern.png'; }} />
            </div>
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', flex:1, alignSelf:'flex-start', paddingTop:'8px', gap:'8px' }}>
              <h1 style={{ fontFamily:"'Georgia','Times New Roman',serif", fontSize:'clamp(1.5rem,3vw,2.2rem)', fontWeight:'900', color:'#FFD700', textAlign:'center', margin:0, letterSpacing:'1.5px', textShadow:'0 0 18px rgba(255,215,0,0.95)', lineHeight:'1.1', whiteSpace:'nowrap' }}>
                {T.co}
              </h1>
              <div style={{ color:'#00d4ff', fontSize:'clamp(0.65rem,1.3vw,0.85rem)', fontWeight:'800', letterSpacing:'0.7px', textTransform:'uppercase', textAlign:'center', textShadow:'0 0 10px rgba(0,212,255,0.85)', whiteSpace:'nowrap' }}>
                {T.tl}
              </div>
            </div>
            <div style={{ width:'110px', height:'110px', borderRadius:'50%', border:'3px solid #FFD700', overflow:'hidden', background:'transparent', boxShadow:'0 0 24px rgba(255,215,0,0.95)', animation:'heartbeat 1.4s ease-in-out infinite', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, alignSelf:'center' }}>
              <img src="/images/MAVJLogo.jpg" alt="MAVJ Logo" style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:'50%' }} onError={(e)=>{ e.target.onerror=null; e.target.src='/images/star-pattern.png'; }} />
            </div>
            <div style={{ background:'linear-gradient(135deg,violet,indigo,blue,green,yellow,orange,red)', borderRadius:'5px', padding:'2px', flexShrink:0, alignSelf:'flex-end', position:'relative', bottom:'-12px' }}>
              <div style={{ background:'rgba(0,0,0,0.95)', borderRadius:'4px', padding:'12px 16px', fontSize:'0.75rem', fontWeight:'800', color:'#FFD700', lineHeight:'1.7', textAlign:'center', whiteSpace:'nowrap' }}>
                {T.r1}<br />{T.r2}<br />{T.r3}
              </div>
            </div>
          </div>
          <div style={{ background:'linear-gradient(135deg,violet,indigo,blue,green,yellow,orange,red)', borderRadius:'5px', padding:'2px', display:'inline-flex', position:'absolute', bottom:'-20px', left:'50%', transform:'translateX(-50%)', zIndex:1901, whiteSpace:'nowrap' }}>
            <div style={{ background:'rgba(0,0,0,0.97)', borderRadius:'4px', padding:'6px 28px', fontSize:'1.15rem', fontWeight:'900', color:'#00d4ff', textAlign:'center', textTransform:'uppercase', letterSpacing:'2.5px', textShadow:'0 0 14px rgba(0,212,255,0.9)' }}>
              {displayTitle}
            </div>
          </div>
        </section>

        <div style={{ position:'fixed', bottom:'22px', left:'18px', zIndex:9998, background:'rgba(0,0,0,0.92)', padding:'6px 14px', borderRadius:'20px', border:'2px solid #FFD700', color:'#FFD700', fontSize:'0.72rem', fontWeight:'700', display:'flex', alignItems:'center', gap:'7px', whiteSpace:'nowrap', boxShadow:'0 4px 18px rgba(0,0,0,0.8)' }}>
          <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#00ff00', animation:'pulse 2s infinite', flexShrink:0 }}></div>
          🔥 {liveUsers} {T.live_users || 'Live'}
        </div>

        <div style={{ position:'fixed', bottom:'22px', right:'22px', zIndex:9998, width:'56px', height:'56px', borderRadius:'50%', background:'linear-gradient(135deg, #FFD700, #FFA500)', border:'3px solid #FFD700', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', boxShadow:'0 4px 20px rgba(255,215,0,0.6)', transition:'all 0.3s ease' }}
          onClick={() => { console.log('Q button clicked'); }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 6px 30px rgba(255,215,0,0.9)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,215,0,0.6)'; }}>
          <span style={{ fontSize:'2rem', fontWeight:'900', color:'#000', textShadow:'0 0 4px rgba(255,215,0,0.5)' }}>Q</span>
        </div>

        <div style={{ paddingTop:'235px', minHeight:'100vh', backgroundColor:'#000', color:'#ffffff', display:'flex', flexDirection:'column' }}>
          <div style={{ flex:1 }}>{children}</div>
          <footer style={{ width:'100%', background:'linear-gradient(90deg,rgba(255,0,0,0.12),rgba(255,165,0,0.12))', borderTop:'2px solid', borderImage:'linear-gradient(90deg,#FF0000,#FF7F00,#FFFF00,#00FF00,#0000FF,#4B0082,#9400D3) 1', padding:'20px', textAlign:'center', fontSize:'0.7rem', color:'#ffccbc', fontWeight:'600' }}>
            {T.foot}
          </footer>
        </div>

        <style>{`
          @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.55; transform:scale(1.18); } }
          @keyframes heartbeat { 0%,100% { transform:scale(1); } 14% { transform:scale(1.1); } 28% { transform:scale(1); } 42% { transform:scale(1.1); } 56% { transform:scale(1); } }
        `}</style>
      </>
    </TranslationContext.Provider>
  );
};

export default Layout;