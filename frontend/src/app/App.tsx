import { BrowserRouter, Routes, Route } from 'react-router';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { HomePage } from './pages/HomePage';
import { FunctionalityTesting } from './pages/FunctionalityTesting';
import { CompatibilityTesting } from './pages/CompatibilityTesting';
import { UsabilityTesting } from './pages/UsabilityTesting';
import { ApiTesting } from './pages/ApiTesting';
import { PaymentTesting } from './pages/PaymentTesting';
import { TestAutomation } from './pages/TestAutomation';
import { PenetrationTesting } from './pages/PenetrationTesting';
import { AccessibilityTesting } from './pages/AccessibilityTesting';
import { AccessibilityAudit } from './pages/AccessibilityAudit';
import { AccessibilityACR } from './pages/AccessibilityACR';
import { WcagPage } from './pages/WcagPage';
import { SoftwareLicensingServices } from './pages/SoftwareLicensingServices';
import { WebsiteDevelopment } from './pages/WebsiteDevelopment';
import { SoftwareSupport } from './pages/SoftwareSupport';
import { WebsiteTesting } from './pages/WebsiteTesting';
import { MobileTesting } from './pages/MobileTesting';
import { DataCollection } from './pages/DataCollection';
import { EcommerceTesting } from './pages/EcommerceTesting';
import { AboutUs } from './pages/AboutUs';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white scroll-smooth">
        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/qa-services/functionality-testing" element={<FunctionalityTesting />} />
          <Route path="/qa-services/compatibility-testing" element={<CompatibilityTesting />} />
          <Route path="/qa-services/usability-testing" element={<UsabilityTesting />} />
          <Route path="/qa-services/api-testing" element={<ApiTesting />} />
          <Route path="/qa-services/payment-testing" element={<PaymentTesting />} />
          <Route path="/qa-services/test-automation-services" element={<TestAutomation />} />
          <Route path="/qa-services/penetration-testing" element={<PenetrationTesting />} />
          <Route path="/accessibility/accessibility-testing" element={<AccessibilityTesting />} />
          <Route path="/accessibility/accessibility-audit" element={<AccessibilityAudit />} />
          <Route path="/accessibility/accessibility-conformance-report-acr-services" element={<AccessibilityACR />} />
          <Route path="/accessibility/wcag" element={<WcagPage />} />
          <Route path="/software-services/licensing" element={<SoftwareLicensingServices />} />
          <Route path="/software-services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/software-services/support-maintenance" element={<SoftwareSupport />} />
          <Route path="/what-we-test/website-testing" element={<WebsiteTesting />} />
          <Route path="/what-we-test/mobile-app-testing" element={<MobileTesting />} />
          <Route path="/what-we-test/data-collection" element={<DataCollection />} />
          <Route path="/what-we-test/ecommerce-testing" element={<EcommerceTesting />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
