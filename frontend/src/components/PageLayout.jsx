import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// ================================================================
// PageLayout.jsx - Universal layout for ALL pages
// Usage: <Layout pageTitle="PAGE NAME HERE">...</Layout>
// Each page MUST pass its own pageTitle prop
// Translations: self-contained, 18 languages, no i18n dependency
// ================================================================

const Layout = ({ children, pageTitle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentLang, setCurrentLang] = useState('English');
  const [showDropdown, setShowDropdown] = useState(false);
  const [liveUsers] = useState(127);

  // ================================================================
  // 18-LANGUAGE TRANSLATION TABLE
  // Keys: companyName, tagline, leftBox (3 lines), rightBox (3 lines),
  //       all 10 nav labels, disclaimer
  // ================================================================
  const TR = useMemo(() => ({
    English: {
      co: '💦 MY ALKALINE VEGAN JOURNEY 💦',
      tl: 'SOVEREIGN HEALTH • VIBRATIONAL HEALING • ANCESTRAL NUTRITION',
      l1:'QUANTUM BASED', l2:'SCIENTIFICALLY BACKED', l3:'FREQUENCY FOCUSED',
      r1:'WHERE QUANTUM PHYSICS', r2:'MEETS ANCIENT WISDOM', r3:'AND NUTRITION',
      n0:'MAVJHome', n1:'The Journey', n2:'MAVJStore', n3:'Journey 2 Enlightenment',
      n4:'Vibrational Intelligence', n5:'Align With Us', n6:'MAVJSearch',
      n7:'Live Broadcast', n8:'PodCast/Vlog', n9:'Contact Us',
      foot:'EDUCATIONAL PURPOSES ONLY • CONSULT HEALTHCARE PROFESSIONAL'
    },
    Spanish: {
      co: '💦 MI VIAJE VEGANO ALCALINO 💦',
      tl: 'SALUD SOBERANA • SANACIÓN VIBRACIONAL • NUTRICIÓN ANCESTRAL',
      l1:'BASADO EN CUÁNTICA', l2:'RESPALDADO CIENTÍFICAMENTE', l3:'ENFOCADO EN FRECUENCIA',
      r1:'FÍSICA CUÁNTICA', r2:'SE ENCUENTRA CON', r3:'SABIDURÍA ANCESTRAL',
      n0:'MAVJInicio', n1:'El Viaje', n2:'MAVJTienda', n3:'Viaje a la Iluminación',
      n4:'Inteligencia Vibratoria', n5:'Alíneate Con Nosotros', n6:'MAVJBúsqueda',
      n7:'Transmisión en Vivo', n8:'PodCast/Vlog', n9:'Contáctenos',
      foot:'SOLO PROPÓSITOS EDUCATIVOS • CONSULTE A UN PROFESIONAL DE SALUD'
    },
    French: {
      co: '💦 MON VOYAGE VÉGÉTALIEN ALCALIN 💦',
      tl: 'SANTÉ SOUVERAINE • GUÉRISON VIBRATOIRE • NUTRITION ANCESTRALE',
      l1:'BASÉ SUR LE QUANTIQUE', l2:'SOUTENU SCIENTIFIQUEMENT', l3:'FOCALISÉ SUR LA FRÉQUENCE',
      r1:'PHYSIQUE QUANTIQUE', r2:'RENCONTRE LA SAGESSE', r3:'ANCIENNE ET NUTRITION',
      n0:'MAVJAccueil', n1:'Le Voyage', n2:'MAVJBoutique', n3:"Voyage vers l'Éveil",
      n4:'Intelligence Vibratoire', n5:'Aligner avec Nous', n6:'MAVJRecherche',
      n7:'Diffusion en Direct', n8:'PodCast/Vlog', n9:'Contactez-Nous',
      foot:'À DES FINS ÉDUCATIVES UNIQUEMENT • CONSULTEZ UN PROFESSIONNEL DE SANTÉ'
    },
    German: {
      co: '💦 MEINE ALKALISCHE VEGANE REISE 💦',
      tl: 'SOUVERÄNE GESUNDHEIT • VIBRATIONSHEILUNG • AHNENERNÄHRUNG',
      l1:'QUANTENBASIERT', l2:'WISSENSCHAFTLICH GESTÜTZT', l3:'FREQUENZFOKUSSIERT',
      r1:'QUANTENPHYSIK TRIFFT', r2:'ALTE WEISHEIT', r3:'UND ERNÄHRUNG',
      n0:'MAVJStartseite', n1:'Die Reise', n2:'MAVJGeschäft', n3:'Reise zur Erleuchtung',
      n4:'Schwingungsintelligenz', n5:'Mit uns ausrichten', n6:'MAVJSuche',
      n7:'Live-Übertragung', n8:'PodCast/Vlog', n9:'Kontaktieren Sie uns',
      foot:'NUR FÜR BILDUNGSZWECKE • FACHMANN KONSULTIEREN'
    },
    Italian: {
      co: '💦 IL MIO VIAGGIO VEGANO ALCALINO 💦',
      tl: 'SALUTE SOVRANA • GUARIGIONE VIBRAZIONALE • NUTRIZIONE ANCESTRALE',
      l1:'BASATO SUL QUANTISTICO', l2:'SCIENTIFICAMENTE SUPPORTATO', l3:'FOCALIZZATO SULLA FREQUENZA',
      r1:'FISICA QUANTISTICA', r2:'INCONTRA LA SAGGEZZA', r3:'ANTICA E NUTRIZIONE',
      n0:'MAVJHome', n1:'Il Viaggio', n2:'MAVJNegozio', n3:"Viaggio verso l'Illuminazione",
      n4:'Intelligenza Vibrazionale', n5:'Allineati con Noi', n6:'MAVJRicerca',
      n7:'Trasmissione in Diretta', n8:'PodCast/Vlog', n9:'Contattaci',
      foot:'SOLO A SCOPO EDUCATIVO • CONSULTARE UN PROFESSIONISTA SANITARIO'
    },
    Chinese: {
      co: '💦 我的碱性纯素旅程 💦',
      tl: '主权健康 • 振动疗愈 • 祖传营养',
      l1:'量子基础', l2:'科学支撑', l3:'频率聚焦',
      r1:'量子物理', r2:'邂逅古老智慧', r3:'与营养学',
      n0:'MAVJ首页', n1:'旅程', n2:'MAVJ商店', n3:'启蒙之旅',
      n4:'振动智能', n5:'与我们结盟', n6:'MAVJ搜索',
      n7:'直播', n8:'播客/视频', n9:'联系我们',
      foot:'仅供教育目的 • 请咨询医疗专业人士'
    },
    Taiwanese: {
      co: '💦 我的鹼性純素旅程 💦',
      tl: '主權健康 • 振動療愈 • 祖傳營養',
      l1:'量子基礎', l2:'科學支撐', l3:'頻率聚焦',
      r1:'量子物理', r2:'邂逅古老智慧', r3:'與營養學',
      n0:'MAVJ首頁', n1:'旅程', n2:'MAVJ商店', n3:'啟蒙之旅',
      n4:'振動智慧', n5:'佮咱結盟', n6:'MAVJ搜尋',
      n7:'現場直播', n8:'播客/影片', n9:'聯絡阮',
      foot:'僅供教育目的 • 請諮詢醫療專業人士'
    },
    Amharic: {
      co: '💦 የአልካሊን ቪጋን ጉዞዬ 💦',
      tl: 'ሉዓላዊ ጤና • ቫይብሬሽን ፈውስ • የቅድመ አባቶች ምግብ',
      l1:'ኳንተም ላይ የተመሠረተ', l2:'ሳይንሳዊ ድጋፍ', l3:'ድግግሞሽ ያማከለ',
      r1:'ኳንተም ፊዚክስ', r2:'ከጥንታዊ ጥበብ ጋር', r3:'እና ምግብ ይገናኛሉ',
      n0:'MAVJቤት', n1:'ጉዞው', n2:'MAVJሱቅ', n3:'ወደ ማብራት ጉዞ',
      n4:'የድምፅ ኢንተለጀንስ', n5:'ከእኛ ጋር ይያዙ', n6:'MAVJፍለጋ',
      n7:'ቀጥታ ስርጭት', n8:'ፖድካስት/ቭሎግ', n9:'አግኙን',
      foot:'ለትምህርታዊ ዓላማ ብቻ • የጤና ባለሙያ ያማክሩ'
    },
    Arabic: {
      co: '💦 رحلتي النباتية القلوية 💦',
      tl: 'صحة سيادية • شفاء ذبذبي • تغذية أجدادية',
      l1:'قائم على الكم', l2:'مدعوم علمياً', l3:'مركّز على التردد',
      r1:'الفيزياء الكمية', r2:'تلتقي الحكمة', r3:'القديمة والتغذية',
      n0:'MAVJالرئيسية', n1:'الرحلة', n2:'MAVJالمتجر', n3:'رحلة إلى التنوير',
      n4:'الذكاء الاهتزازي', n5:'انضم إلينا', n6:'MAVJالبحث',
      n7:'البث المباشر', n8:'بودكاست/فيديو', n9:'اتصل بنا',
      foot:'لأغراض تعليمية فقط • استشر متخصصاً في الرعاية الصحية'
    },
    Swahili: {
      co: '💦 SAFARI YANGU YA VEGAN ALKALI 💦',
      tl: 'AFYA YA UHURU • UPONYAJI WA MTETEMO • LISHE YA MABABU',
      l1:'MSINGI WA QUANTUM', l2:'INAYOUNGWA NA SAYANSI', l3:'INAYOLENGA MZUNGUKO',
      r1:'FIZIKIA YA QUANTUM', r2:'INAKUTANA NA HEKIMA', r3:'YA KALE NA LISHE',
      n0:'MAVJNyumbani', n1:'Safari', n2:'MAVJDuka', n3:'Safari ya Kuelimika',
      n4:'Akili ya Mtetemo', n5:'Oanisha Nasi', n6:'MAVJUtafutaji',
      n7:'Moja kwa Moja', n8:'Podcast/Vlog', n9:'Wasiliana Nasi',
      foot:'KWA MADHUMUNI YA ELIMU TU • WASILIANA NA MTAALAMU WA AFYA'
    },
    Patois: {
      co: '💦 VWAYAJ VEGAN ALKALEN MWEN 💦',
      tl: 'SANTE SOUVERAIN • GERIZON VIBRASYON • NITRISYON ZANSÈT',
      l1:'BAZE SOU QUANTUM', l2:'SIPÒTE SYANTIFIKMAN', l3:'FOKIS SOU FREKANS',
      r1:'FIZIK QUANTUM', r2:'RANKONTRE SAJÈS', r3:'ANSYEN AK NITRISYON',
      n0:'MAVJLakay', n1:'Vwayaj la', n2:'MAVJMagazen', n3:'Vwayaj pou Limyè',
      n4:'Entèlijans Vibwasyon', n5:'Aliyen avèk Nou', n6:'MAVJRéchèch',
      n7:'An dirèk', n8:'Podcast/Vlog', n9:'Kontakte Nou',
      foot:'POU REZON EDIKASYON SÈLMAN • KONSILTE PWOFESYONÈL SANTE'
    },
    BAramaic: {
      co: '💦 ܡܥܒܪܢܘܬܝ ܦܝܓܢܝܬܐ ܩܠܝܐ 💦',
      tl: 'ܚܝܐ ܫܠܝܛܢܝܐ • ܐܣܝܘܬܐ ܕܙܘܥܐ • ܬܪܒܝܬܐ ܕܐܒܗܬܐ',
      l1:'ܡܫܬܠܫ ܥܠ ܩܘܢܛܡ', l2:'ܡܣܬܡܟ ܒܝܕܥܬܐ', l3:'ܡܬܪܟܙ ܥܠ ܬܪܥܐ',
      r1:'ܐܝܟܐ ܕܦܝܙܝܩ ܩܘܢܛܡ', r2:'ܡܬܩܪܒ ܥܡ ܚܟܡܬܐ', r3:'ܥܬܝܩܬܐ ܘܬܪܒܝܬܐ',
      n0:'ܒܝܬܐ ܕܡܐܒܝ', n1:'ܡܥܒܪܢܘܬܐ', n2:'ܚܢܘܬܐ ܕܡܐܒܝ', n3:'ܡܥܒܪܢܘܬܐ ܠܢܘܗܪܐ',
      n4:'ܚܟܡܬܐ ܕܙܘܥܐ', n5:'ܫܘܬܦܘ ܥܡܢ', n6:'ܒܥܝܬܐ ܕܡܐܒܝ',
      n7:'ܦܘܫܩܐ ܓܝܪܐ', n8:'ܩܪܝܢܐ ܥܠ ܢܗܪܐ', n9:'ܡܠܠ ܥܡܢ',
      foot:'ܠܫܘܡܠܝܐ ܕܝܠܦܢܐ ܒܠܚܘܕ • ܫܐܠ ܐܣܝܐ ܡܗܝܡܢܐ'
    },
    NAramaic: {
      co: '💦 ܡܲܥܒܪܵܢܘܼܬܝ ܦܲܝܓܵܢܵܝܬܵܐ ܩܲܠܵܝܬܵܐ 💦',
      tl: 'ܚܲܝܹܐ ܫܠܝܼܛܵܢܵܝܹܐ • ܐܵܣܝܘܼܬܵܐ ܕܙܵܘܥܵܐ • ܬܲܪܒܝܼܬܵܐ ܕܐܲܒ̣ܵܗܵܬܵܐ',
      l1:'ܐܲܣܝܼܣ ܒܩܘܿܢܛܘܿܡ', l2:'ܡܲܣܬܲܡܟܵܢܵܐ ܒܝܼܕܲܥܬܵܐ', l3:'ܛܵܟܹܣܬܵܐ ܥܲܠ ܬܲܪܥܵܐ',
      r1:'ܐܝܼܟܵܐ ܕܦܝܼܙܝܼܩܵܐ', r2:'ܡܲܩܪܸܒ ܥܲܡ ܚܸܟܡܬܵܐ', r3:'ܥܲܬܝܼܩܬܵܐ ܘܬܲܪܒܝܼܬܵܐ',
      n0:'ܒܝܼܬܐ ܕܡܲܝܟܵܐ', n1:'ܡܲܥܒܪܵܢܘܼܬܼܵܐ', n2:'ܚܵܢܘܼܬܼܵܐ ܕܡܲܝܟܵܐ', n3:'ܡܲܥܒܪܵܢܘܼܬܼܵܐ ܠܢܘܼܗܪܵܐ',
      n4:'ܚܸܟܼܡܬܵܐ ܕܙܵܘܥܵܐ', n5:'ܫܘܼܬܵܦܘܼ ܥܲܡܲܢ', n6:'ܒܘܼܨܝܵܐ ܕܡܲܝܟܵܐ',
      n7:'ܦܘܼܫܩܵܐ ܓܲܝܵܐ', n8:'ܦܘܼܕܩܵܣܬܼ', n9:'ܡܲܠܵܠܘܼ ܥܲܡܲܢ',
      foot:'ܠܫܘܼܡܠܵܝܵܐ ܕܝܵܠܦܵܢܵܐ ܒܠܚܘܼܕ̥ • ܫܵܐܠ ܐܵܣܝܵܐ ܡܗܝܼܡܵܢܵܐ'
    },
    SAramaic: {
      co: '💦 ܡܥܰܒܪܢܘܬܝ ܦܝܓܢܝܬܐ ܩܠܝܐ 💦',
      tl: 'ܚܝܐ ܡܠܟܝܐ • ܐܣܝܘܬܐ ܕܬܪܥܐ ܪܘܚܢܐ • ܬܪܒܝܬܐ ܕܐܒܗܬܐ ܩܕܝܫܐ',
      l1:'ܡܫܬܠܫ ܒܩܘܢܛܡ ܪܘܚܢܐ', l2:'ܡܣܬܡܟ ܒܝܕܥܬܐ ܡܫܝܚܝܬܐ', l3:'ܡܬܪܟܙ ܥܠ ܬܪܥܐ ܪܘܚܢܐ',
      r1:'ܦܝܙܝܩ ܩܘܢܛܡ', r2:'ܡܬܩܪܒ ܥܡ ܚܟܡܬܐ ܩܕܝܫܬܐ', r3:'ܘܬܪܒܝܬܐ',
      n0:'ܒܹܝܬܐ ܕܡܵܒܝ', n1:'ܡܥܰܒܪܢܘܬܐ', n2:'ܚܢܘܬܐ ܕܡܵܒܝ', n3:'ܡܥܰܒܪܢܘܬܐ ܠܢܘܗܪܐ ܪܘܚܢܐ',
      n4:'ܚܰܟܡܬܐ ܕܙܘܥܐ ܡܫܝܚܝܐ', n5:'ܫܘܬܦܘ ܥܡܢ ܒܪܘܚܐ', n6:'ܒܘܨܝܐ ܕܡܵܒܝ',
      n7:'ܦܘܫܩܐ ܩܕܝܫܐ', n8:'ܩܪܝܢܐ ܩܕܝܫܐ', n9:'ܩܪܘ ܠܢ',
      foot:'ܠܫܘܡܠܝܐ ܕܝܠܦܢܐ ܩܕܝܫܐ ܒܠܚܘܕ • ܫܐܠ ܐܣܝܐ ܡܗܝܡܢܐ'
    },
    Hebrew: {
      co: '💦 המסע הטבעוני הבסיסי שלי 💦',
      tl: 'בריאות ריבונית • ריפוי תדרי • תזונת אבות',
      l1:'מבוסס קוונטי', l2:'נתמך מדעית', l3:'ממוקד תדר',
      r1:'פיזיקה קוונטית', r2:'פוגשת חוכמה עתיקה', r3:'ותזונה',
      n0:'MAVJבית', n1:'המסע', n2:'MAVJחנות', n3:'מסע להארה',
      n4:'אינטליגנציה ויברציונית', n5:'התיישרו איתנו', n6:'MAVJחיפוש',
      n7:'שידור חי', n8:'פודקאסט/וולוג', n9:'צור קשר',
      foot:'למטרות חינוכיות בלבד • התייעץ עם איש מקצוע בתחום הבריאות'
    },
    Greek: {
      co: '💦 ΤΟ ΑΛΚΑΛΙΚΟ ΒΙΓΚΑΝ ΤΑΞΙΔΙ ΜΟΥ 💦',
      tl: 'ΚΥΡΙΑΡΧΗ ΥΓΕΙΑ • ΔΟΝΗΤΙΚΗ ΘΕΡΑΠΕΙΑ • ΠΡΟΓΟΝΙΚΗ ΔΙΑΤΡΟΦΗ',
      l1:'ΚΒΑΝΤΙΚΗ ΒΑΣΗ', l2:'ΕΠΙΣΤΗΜΟΝΙΚΗ ΥΠΟΣΤΗΡΙΞΗ', l3:'ΕΣΤΙΑΣΗ ΣΥΧΝΟΤΗΤΑΣ',
      r1:'ΚΒΑΝΤΙΚΗ ΦΥΣΙΚΗ', r2:'ΣΥΝΑΝΤΑ ΑΡΧΑΙΑ', r3:'ΣΟΦΙΑ ΚΑΙ ΔΙΑΤΡΟΦΗ',
      n0:'MAVJΑρχική', n1:'Το Ταξίδι', n2:'MAVJΚατάστημα', n3:'Ταξίδι προς Φωτισμό',
      n4:'Δονητική Νοημοσύνη', n5:'Ευθυγραμμιστείτε Μαζί Μας', n6:'MAVJΑναζήτηση',
      n7:'Ζωντανή Μετάδοση', n8:'Podcast/Vlog', n9:'Επικοινωνήστε Μαζί Μας',
      foot:'ΜΟΝΟ ΓΙΑ ΕΚΠΑΙΔΕΥΤΙΚΟΥΣ ΣΚΟΠΟΥΣ • ΣΥΜΒΟΥΛΕΥΤΕΙΤΕ ΕΠΑΓΓΕΛΜΑΤΙΑ ΥΓΕΙΑΣ'
    },
    Latin: {
      co: '💦 ITER MEUM VEGAN ALCALINUM 💦',
      tl: 'SALUS IMPERIALIS • SANATIO VIBRATIONIS • NUTRITIO ANCESTRALIS',
      l1:'FUNDAMENTO QUANTICO', l2:'SCIENTIA SUFFULTUM', l3:'AD FREQUENTIAM INTENTUM',
      r1:'PHYSICA QUANTICA', r2:'SAPIENTIA ANTIQUA', r3:'ET NUTRITIO CONVENIUNT',
      n0:'MAVJDomus', n1:'Iter', n2:'MAVJTaberna', n3:'Iter ad Illuminationem',
      n4:'Intelligentia Vibrationis', n5:'Coniunge te Nobiscum', n6:'MAVJQuaerere',
      n7:'Vivum Iactum', n8:'PodCast/Vlog', n9:'Contactare Nos',
      foot:'AD FINES EDUCATIONIS SOLUM • CONSULERE PROFESSIONALEM SANITATIS'
    },
    Sanskrit: {
      co: '💦 मेरी क्षारीय शाकाहारी यात्रा 💦',
      tl: 'स्वायत्त स्वास्थ्य • कम्पन चिकित्सा • पैतृक पोषण',
      l1:'क्वान्टम आधारित', l2:'वैज्ञानिक रूप से समर्थित', l3:'आवृत्ति केन्द्रित',
      r1:'क्वान्टम भौतिकी', r2:'प्राचीन ज्ञान से', r3:'और पोषण से मिलती है',
      n0:'MAVJगृहम्', n1:'यात्रा', n2:'MAVJविक्रयस्थानम्', n3:'प्रबोधनयात्रा',
      n4:'कम्पनबुद्धि', n5:'अस्माभिः सह संलग्न्यन्ताम्', n6:'MAVJअन्वेषणम्',
      n7:'सजीवप्रसारणम्', n8:'पोड्कास्ट्/व्लॉग्', n9:'सम्पर्क कुरुत',
      foot:'केवल शैक्षिक उद्देश्यों के लिए • स्वास्थ्य पेशेवर से परामर्श करें'
    }
  }), []);

  const LANGS = useMemo(() => [
    { name: 'English', flag: '🇺🇸' }, { name: 'Spanish', flag: '🇪🇸' },
    { name: 'French', flag: '🇫🇷' }, { name: 'German', flag: '🇩🇪' },
    { name: 'Italian', flag: '🇮🇹' }, { name: 'Chinese', flag: '🇨🇳' },
    { name: 'Taiwanese', flag: '🇹🇼' }, { name: 'Amharic', flag: '🇪🇹' },
    { name: 'Arabic', flag: '🇸🇦' }, { name: 'Swahili', flag: '🇰🇪' },
    { name: 'Patois', flag: '🇱🇨' }, { name: 'BAramaic', flag: '📜' },
    { name: 'NAramaic', flag: '📜' }, { name: 'SAramaic', flag: '✝️' },
    { name: 'Hebrew', flag: '🇮🇱' }, { name: 'Greek', flag: '🇬🇷' },
    { name: 'Latin', flag: '🏛️' }, { name: 'Sanskrit', flag: '🕉️' }
  ], []);

  // T = active translation object, updates instantly on language change
  const T = TR[currentLang] || TR.English;
  const activeLangObj = LANGS.find(l => l.name === currentLang) || LANGS[0];

  // Nav items built from active T, so they translate instantly
  const navItems = useMemo(() => [
    { path: '/', icon: '🏠', label: T.n0, type: 'nav' },
    { path: '/TheJourney', icon: '🌱', label: T.n1, type: 'nav' },
    { path: '/MAVJStore', icon: '🛒', label: T.n2, type: 'nav' },
    { path: '/Journey2Enlightenment', icon: '✨', label: T.n3, type: 'nav' },
    { path: '/VibrationalIntelligence', icon: '🔮', label: T.n4, type: 'nav' },
    { path: '/AlignWithUs', icon: '🤝', label: T.n5, type: 'nav' },
    { path: '/MAVJSearch', icon: '🔍', label: T.n6, type: 'nav' },
    { path: '/LiveBroadcast', icon: '📡', label: T.n7, type: 'nav' },
    { path: '/PodcastVlog', icon: '🎙️', label: T.n8, type: 'nav' },
    { path: '/ContactUs', icon: '☎️', label: T.n9, type: 'nav' },
    { icon: '🌐', label: 'Language', type: 'dropdown' }
  ], [T]);

  const handleLangChange = useCallback((name) => {
    setCurrentLang(name);
    setShowDropdown(false);
  }, []);

  const handleNav = useCallback((path) => { navigate(path); }, [navigate]);

  // Page title: each page passes its own prop. Fallback = 'YOU ARE HOME'
  const displayTitle = pageTitle || 'YOU ARE HOME';

  // Shared style for all nav buttons including language button
  const btnStyle = (active) => ({
    color: '#FFD700', fontSize: '0.7rem', padding: '4px 8px',
    border: '2px solid',
    borderImage: 'linear-gradient(135deg, #FFD700, #00d4ff) 1',
    borderRadius: '4px',
    background: active
      ? 'linear-gradient(135deg,rgba(255,215,0,0.3),rgba(0,212,255,0.3))'
      : 'rgba(0,0,0,0.7)',
    fontWeight: '700', whiteSpace: 'nowrap',
    boxShadow: '0 0 6px rgba(255,215,0,0.3)',
    display: 'flex', alignItems: 'center', gap: '3px',
    flexShrink: 0, minHeight: '28px', cursor: 'pointer',
    transition: 'all 0.3s ease'
  });

  return (
    <>
      {/* ============================================================
          CONTAINER 1 — NAVIGATION BAR
          Fixed top, zIndex 2000, height 45px
          ◀ scroll-hint ... [nav buttons] ... [🌐 Language ▼] ... scroll-hint ▶
          Dropdown: position fixed top 46px right 8px, zIndex 99999
          Live counter: floating BOTTOM LEFT (not in nav)
          ============================================================ */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000,
        borderTop: '5px solid #FFD700',
        background: 'linear-gradient(135deg,rgba(26,26,26,0.98),rgba(10,10,10,0.98))',
        padding: '0 6px', borderBottom: '3px solid',
        borderImage: 'linear-gradient(45deg,violet,indigo,blue,green,yellow,orange,red) 1',
        backdropFilter: 'blur(10px)', boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        height: '45px', display: 'flex', alignItems: 'center', gap: '4px'
      }}>

        {/* Left scroll indicator */}
        <span style={{ color:'#FFD700', fontSize:'0.75rem', flexShrink:0, opacity:0.55, userSelect:'none', pointerEvents:'none' }}>◀</span>

        {/* Scrollable nav strip — overflowY visible is critical for dropdown */}
        <div style={{
          display:'flex', overflowX:'auto', overflowY:'visible',
          gap:'5px', flex:1, padding:'0 4px',
          scrollbarWidth:'none', msOverflowStyle:'none',
          WebkitOverflowScrolling:'touch', alignItems:'center'
        }}>
          {navItems.map((item) => {

            /* ---- LANGUAGE DROPDOWN BUTTON (last item) ---- */
            if (item.type === 'dropdown') {
              return (
                <div key="lang" style={{ position:'relative', flexShrink:0 }}>
                  {/* Button — same visual style as nav buttons */}
                  <div
                    style={{ ...btnStyle(false), minWidth:'120px', justifyContent:'space-between', gap:'4px' }}
                    onClick={() => setShowDropdown(p => !p)}
                    onMouseEnter={(e) => { e.currentTarget.style.background='linear-gradient(135deg,rgba(255,215,0,0.5),rgba(0,212,255,0.5))'; e.currentTarget.style.boxShadow='0 0 15px rgba(255,215,0,1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background='rgba(0,0,0,0.7)'; e.currentTarget.style.boxShadow='0 0 6px rgba(255,215,0,0.3)'; }}
                  >
                    <span>🌐 {activeLangObj.flag}</span>
                    <span style={{ flex:1, textAlign:'center' }}>{currentLang}</span>
                    <span style={{ fontSize:'0.5rem' }}>{showDropdown ? '▲' : '▼'}</span>
                  </div>

                  {/* Dropdown — position FIXED escapes all overflow clipping */}
                  {showDropdown && (
                    <div style={{
                      position:'fixed', top:'46px', right:'8px',
                      background:'rgba(5,5,15,0.99)', border:'2px solid',
                      borderImage:'linear-gradient(135deg,#FFD700,#00d4ff,#FF00FF,#FFD700) 1',
                      borderRadius:'6px', minWidth:'175px', maxHeight:'440px',
                      overflowY:'auto', zIndex:99999,
                      boxShadow:'0 10px 40px rgba(0,0,0,0.99)'
                    }}>
                      <div style={{ padding:'8px 14px', borderBottom:'1px solid rgba(255,215,0,0.4)', color:'#FFD700', fontSize:'0.65rem', fontWeight:'900', textTransform:'uppercase', letterSpacing:'1.2px', background:'rgba(255,215,0,0.08)' }}>
                        🌐 Select Language
                      </div>
                      {LANGS.map((lang) => (
                        <div
                          key={lang.name}
                          style={{ background: lang.name===currentLang ? 'rgba(255,215,0,0.22)':'transparent', color:'#FFD700', borderBottom:'1px solid rgba(255,215,0,0.08)', padding:'9px 14px', cursor:'pointer', fontSize:'0.75rem', fontWeight:'700', display:'flex', alignItems:'center', gap:'10px', transition:'background 0.15s ease' }}
                          onClick={() => handleLangChange(lang.name)}
                          onMouseEnter={(e)=>{ e.currentTarget.style.background='rgba(255,215,0,0.38)'; }}
                          onMouseLeave={(e)=>{ e.currentTarget.style.background= lang.name===currentLang ? 'rgba(255,215,0,0.22)':'transparent'; }}
                        >
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

            /* ---- STANDARD NAV BUTTON ---- */
            return (
              <div
                key={item.path}
                style={btnStyle(location.pathname === item.path)}
                onClick={() => handleNav(item.path)}
                onMouseEnter={(e) => { e.currentTarget.style.background='linear-gradient(135deg,rgba(255,215,0,0.5),rgba(0,212,255,0.5))'; e.currentTarget.style.boxShadow='0 0 15px rgba(255,215,0,1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background= location.pathname===item.path ? 'linear-gradient(135deg,rgba(255,215,0,0.3),rgba(0,212,255,0.3))':'rgba(0,0,0,0.7)'; e.currentTarget.style.boxShadow='0 0 6px rgba(255,215,0,0.3)'; }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Right scroll indicator */}
        <span style={{ color:'#FFD700', fontSize:'0.75rem', flexShrink:0, opacity:0.55, userSelect:'none', pointerEvents:'none' }}>▶</span>
      </nav>

      {/* ============================================================
          CONTAINER 2 — BANNER
          Fixed, top 45px, zIndex 1900, height 160px
          Star-pattern tiles full background behind ALL elements

          LAYOUT — single flex row, alignItems flex-end:
            [LEFT BOX]  [LEFT LOGO]  [NAME + TAGLINE]  [RIGHT LOGO]  [RIGHT BOX]
            bottom:-12px  center       flex-start         center       bottom:-12px
            (hangs below border)       (top anchor)                    (hangs below border)

          PAGE TITLE: absolute bottom -20px, centered, larger font
          ============================================================ */}
      <section style={{
        position:'fixed', top:'45px', left:0, right:0, zIndex:1900,
        border:'3px solid',
        borderImage:'linear-gradient(45deg,violet,indigo,blue,green,yellow,orange,red) 1',
        backgroundColor:'rgba(0,0,0,0.82)',
        backgroundImage:'url(/images/star-pattern.png)',
        backgroundSize:'100px', backgroundPosition:'center', backgroundRepeat:'repeat',
        backdropFilter:'blur(6px)', boxShadow:'0 4px 20px rgba(0,0,0,0.8)',
        minHeight:'160px', maxHeight:'160px', overflow:'visible',
        display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'flex-start', padding:0
      }}>

        {/* — MAIN STAIRCASE ROW — */}
        <div style={{
          display:'flex', alignItems:'flex-end', justifyContent:'center',
          width:'100%', padding:'10px 20px 0', gap:'14px', flex:1
        }}>

          {/* LEFT TEXT BOX — hangs below container border */}
          <div style={{
            background:'linear-gradient(135deg,violet,indigo,blue,green,yellow,orange,red)',
            borderRadius:'5px', padding:'2px', flexShrink:0,
            alignSelf:'flex-end', position:'relative', bottom:'-12px'
          }}>
            <div style={{
              background:'rgba(0,0,0,0.95)', borderRadius:'4px',
              padding:'12px 16px', fontSize:'0.75rem', fontWeight:'800',
              color:'#FFD700', lineHeight:'1.7', textAlign:'center', whiteSpace:'nowrap'
            }}>
              {T.l1}<br />{T.l2}<br />{T.l3}
            </div>
          </div>

          {/* LEFT LOGO — middle height, close to company name */}
          <div style={{
            width:'110px', height:'110px', borderRadius:'50%',
            border:'3px solid #FFD700', overflow:'hidden', background:'transparent',
            boxShadow:'0 0 24px rgba(255,215,0,0.95)',
            animation:'heartbeat 1.4s ease-in-out infinite',
            display:'flex', alignItems:'center', justifyContent:'center',
            flexShrink:0, alignSelf:'center'
          }}>
            <img src="/images/MAVJLogo.jpg" alt="MAVJ Logo"
              style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:'50%' }}
              onError={(e)=>{ e.target.onerror=null; e.target.src='/images/star-pattern.png'; }}
            />
          </div>

          {/* CENTER — Company name (anchor) + tagline directly beneath */}
          <div style={{
            display:'flex', flexDirection:'column', alignItems:'center',
            justifyContent:'flex-start', flex:1, alignSelf:'flex-start',
            paddingTop:'8px', gap:'8px'
          }}>
            {/* COMPANY NAME — prominent anchor, full width */}
            <h1 style={{
              fontFamily:"'Georgia','Times New Roman',serif",
              fontSize:'clamp(1.5rem,3vw,2.2rem)', fontWeight:'900',
              color:'#FFD700', textAlign:'center', margin:0,
              letterSpacing:'1.5px', textShadow:'0 0 18px rgba(255,215,0,0.95)',
              lineHeight:'1.1', whiteSpace:'nowrap'
            }}>
              {T.co}
            </h1>
            {/* TAGLINE — one line, same center-axis as company name */}
            <div style={{
              color:'#00d4ff',
              fontSize:'clamp(0.65rem,1.3vw,0.85rem)',
              fontWeight:'800', letterSpacing:'0.7px', textTransform:'uppercase',
              textAlign:'center', textShadow:'0 0 10px rgba(0,212,255,0.85)',
              whiteSpace:'nowrap'
            }}>
              {T.tl}
            </div>
          </div>

          {/* RIGHT LOGO — mirrors left logo */}
          <div style={{
            width:'110px', height:'110px', borderRadius:'50%',
            border:'3px solid #FFD700', overflow:'hidden', background:'transparent',
            boxShadow:'0 0 24px rgba(255,215,0,0.95)',
            animation:'heartbeat 1.4s ease-in-out infinite',
            display:'flex', alignItems:'center', justifyContent:'center',
            flexShrink:0, alignSelf:'center'
          }}>
            <img src="/images/MAVJLogo.jpg" alt="MAVJ Logo"
              style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:'50%' }}
              onError={(e)=>{ e.target.onerror=null; e.target.src='/images/star-pattern.png'; }}
            />
          </div>

          {/* RIGHT TEXT BOX — mirrors left text box */}
          <div style={{
            background:'linear-gradient(135deg,violet,indigo,blue,green,yellow,orange,red)',
            borderRadius:'5px', padding:'2px', flexShrink:0,
            alignSelf:'flex-end', position:'relative', bottom:'-12px'
          }}>
            <div style={{
              background:'rgba(0,0,0,0.95)', borderRadius:'4px',
              padding:'12px 16px', fontSize:'0.75rem', fontWeight:'800',
              color:'#FFD700', lineHeight:'1.7', textAlign:'center', whiteSpace:'nowrap'
            }}>
              {T.r1}<br />{T.r2}<br />{T.r3}
            </div>
          </div>
        </div>

        {/* PAGE TITLE — sits on bottom border, enlarged */}
        <div style={{
          background:'linear-gradient(135deg,violet,indigo,blue,green,yellow,orange,red)',
          borderRadius:'5px', padding:'2px', display:'inline-flex',
          position:'absolute', bottom:'-20px', left:'50%',
          transform:'translateX(-50%)', zIndex:1901, whiteSpace:'nowrap'
        }}>
          <div style={{
            background:'rgba(0,0,0,0.97)', borderRadius:'4px',
            padding:'6px 28px', fontSize:'1.15rem', fontWeight:'900',
            color:'#00d4ff', textAlign:'center', textTransform:'uppercase',
            letterSpacing:'2.5px', textShadow:'0 0 14px rgba(0,212,255,0.9)'
          }}>
            {displayTitle}
          </div>
        </div>
      </section>

      {/* ============================================================
          LIVE COUNTER — floating BOTTOM LEFT
          Q button lives bottom right on individual pages — no conflict
          ============================================================ */}
      <div style={{
        position:'fixed', bottom:'22px', left:'18px', zIndex:9998,
        background:'rgba(0,0,0,0.92)', padding:'6px 14px',
        borderRadius:'20px', border:'2px solid #FFD700',
        color:'#FFD700', fontSize:'0.72rem', fontWeight:'700',
        display:'flex', alignItems:'center', gap:'7px',
        whiteSpace:'nowrap', boxShadow:'0 4px 18px rgba(0,0,0,0.8)'
      }}>
        <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#00ff00', animation:'pulse 2s infinite', flexShrink:0 }}></div>
        🔥 {liveUsers} Live
      </div>

      {/* ============================================================
          Q BUTTON — floating BOTTOM RIGHT
          Opens chat/assistant when clicked
          ============================================================ */}
      <div style={{
        position:'fixed', bottom:'22px', right:'22px', zIndex:9998,
        width:'56px', height:'56px', borderRadius:'50%',
        background:'linear-gradient(135deg, #FFD700, #FFA500)',
        border:'3px solid #FFD700',
        display:'flex', alignItems:'center', justifyContent:'center',
        cursor:'pointer', boxShadow:'0 4px 20px rgba(255,215,0,0.6)',
        transition:'all 0.3s ease'
      }}
      onClick={() => {
        // Add your Q button action here
        console.log('Q button clicked');
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 30px rgba(255,215,0,0.9)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,215,0,0.6)';
      }}
      >
        <span style={{
          fontSize:'2rem', fontWeight:'900',
          color:'#000', textShadow:'0 0 4px rgba(255,215,0,0.5)'
        }}>Q</span>
      </div>

      {/* ============================================================
          MAIN CONTENT
          paddingTop = nav 45 + banner 160 + title overhang 20 + buffer 10 = 235px
          ============================================================ */}
      <div style={{
        paddingTop:'235px', minHeight:'100vh', backgroundColor:'#000',
        color:'#ffffff', display:'flex', flexDirection:'column'
      }}>
        <div style={{ flex:1 }}>{children}</div>

        <footer style={{
          width:'100%',
          background:'linear-gradient(90deg,rgba(255,0,0,0.12),rgba(255,165,0,0.12))',
          borderTop:'2px solid',
          borderImage:'linear-gradient(90deg,#FF0000,#FF7F00,#FFFF00,#00FF00,#0000FF,#4B0082,#9400D3) 1',
          padding:'20px', textAlign:'center', fontSize:'0.7rem',
          color:'#ffccbc', fontWeight:'600'
        }}>
          {T.foot}
        </footer>
      </div>

      <style>{`
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.55; transform:scale(1.18); }
        }
        @keyframes heartbeat {
          0%,100% { transform:scale(1); }
          14%     { transform:scale(1.1); }
          28%     { transform:scale(1); }
          42%     { transform:scale(1.1); }
          56%     { transform:scale(1); }
        }
      `}</style>
    </>
  );
};

export default Layout;