// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Pages
import HomePage from './Pages/HomePage';
import MAVJStore from './Pages/MAVJStore';
import Checkout from './Pages/Checkout';
import Recipes from './Pages/Recipes';
import Herbs from './Pages/Herbs';
import Illnesses from './Pages/Illnesses';
import Oils from './Pages/Oils';
import MAVJDetox from './Pages/MAVJDetox';
import ContactUs from './Pages/ContactUs';
import Journey2Enlightenment from './Pages/Journey2Enlightenment';
import AVSnacks from './Pages/AVSnacks';
import Seeds from './Pages/Seeds';
import MAVJSeaMoss from './Pages/MAVJSeaMoss';
import Consultations from './Pages/Consultations';
import Merchandise from './Pages/Merchandise';
import AboutUs from './Pages/AboutUs';
import AVDrinks from './Pages/AVDrinks';
import J2EAccommodations from './Pages/J2EAccommodations';
import J2EExcursions from './Pages/J2EExcursions';
import J2EAgro from './Pages/J2EAgro';
import J2EAqua from './Pages/J2EAqua';
import J2EWorkshops from './Pages/J2EWorkshops';
import J2EFood from './Pages/J2EFood';
import TheJourney from './Pages/TheJourney';
import PodcastVlog from './Pages/PodcastVlog';
import AlignWithUs from './Pages/AlignWithUs';
import MAVJSearch from './Pages/Search';
import LiveBroadcast from './components/LiveBroadcast';

// Vibrational Intelligence Pages
import VibrationalIntelligence from './Pages/VibrationalIntelligence/index';
import ElementsEnergy from './Pages/VibrationalIntelligence/ElementsEnergy';
import FrequencyRecalibration from './Pages/VibrationalIntelligence/FrequencyRecalibration';
import J2EProtocol from './Pages/VibrationalIntelligence/J2EProtocol';
import ProductCompendium from './Pages/VibrationalIntelligence/ProductCompendium';
import PackagingLabels from './Pages/VibrationalIntelligence/PackagingLabels';
import Chakras from './Pages/VibrationalIntelligence/PackagingLabels/Chakras';
import Fibonacci from './Pages/VibrationalIntelligence/PackagingLabels/Fibonacci';
import FrequencyChart from './Pages/VibrationalIntelligence/PackagingLabels/FrequencyChart';
import Numerology from './Pages/VibrationalIntelligence/PackagingLabels/Numerology';
import PinealGland from './Pages/VibrationalIntelligence/PackagingLabels/PinealGland';
import SacredGeometry from './Pages/VibrationalIntelligence/PackagingLabels/SacredGeometry';
import MasterElements from './Pages/MasterElements';

const stripePromise = loadStripe("pk_test_51Q4w6LA8s1feV7TsMJLPPr3VKj0IlcYkmGCojTDlEXejRTgvsiiI3VSnFUxzbVXwXPRD4xOC30xKq6L13I6JoIXb00GQe5oPCo");

function App() {
  return (
    <CartProvider>
      <Router basename="/J2E">
        <Elements stripe={stripePromise}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/TheJourney" element={<TheJourney />} />
            <Route path="/VibrationalIntelligence" element={<VibrationalIntelligence />} />
            <Route path="/AlignWithUs" element={<AlignWithUs />} />
            <Route path="/Search" element={<MAVJSearch />} />
            <Route path="/LiveBroadcast" element={<LiveBroadcast />} />
            <Route path="/MAVJStore" element={<MAVJStore />} />
            <Route path="/PodcastVlog" element={<PodcastVlog />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/Herbs" element={<Herbs />} />
            <Route path="/Illnesses" element={<Illnesses />} />
            <Route path="/Oils" element={<Oils />} />
            <Route path="/MAVJDetox" element={<MAVJDetox />} />
            <Route path="/Journey2Enlightenment" element={<Journey2Enlightenment />} />
            <Route path="/AVSnacks" element={<AVSnacks />} />
            <Route path="/Seeds" element={<Seeds />} />
            <Route path="/MAVJSeaMoss" element={<MAVJSeaMoss />} />
            <Route path="/Consultations" element={<Consultations />} />
            <Route path="/Merchandise" element={<Merchandise />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/AVDrinks" element={<AVDrinks />} />
            <Route path="/J2EAccommodations" element={<J2EAccommodations />} />
            <Route path="/J2EExcursions" element={<J2EExcursions />} />
            <Route path="/J2EAgro" element={<J2EAgro />} />
            <Route path="/J2EAqua" element={<J2EAqua />} />
            <Route path="/J2EWorkshops" element={<J2EWorkshops />} />
            <Route path="/J2EFood" element={<J2EFood />} />
            {/* Vibrational Intelligence Subpages */}
            <Route path="/VibrationalIntelligence/ElementsEnergy" element={<ElementsEnergy />} />
            <Route path="/VibrationalIntelligence/FrequencyRecalibration" element={<FrequencyRecalibration />} />
            <Route path="/VibrationalIntelligence/J2EProtocol" element={<J2EProtocol />} />
            <Route path="/VibrationalIntelligence/ProductCompendium" element={<ProductCompendium />} />
            <Route path="/VibrationalIntelligence/PackagingLabels" element={<PackagingLabels />} />
            <Route path="/VibrationalIntelligence/PackagingLabels/Chakras" element={<Chakras />} />
            <Route path="/VibrationalIntelligence/PackagingLabels/Fibonacci" element={<Fibonacci />} />
            <Route path="/VibrationalIntelligence/PackagingLabels/FrequencyChart" element={<FrequencyChart />} />
            <Route path="/VibrationalIntelligence/PackagingLabels/Numerology" element={<Numerology />} />
            <Route path="/VibrationalIntelligence/PackagingLabels/PinealGland" element={<PinealGland />} />
            <Route path="/VibrationalIntelligence/PackagingLabels/SacredGeometry" element={<SacredGeometry />} />
            <Route path="/VibrationalIntelligence/MasterElements" element={<MasterElements />} />
          </Routes>
        </Elements>
      </Router>
    </CartProvider>
  );
}

export default App;
