import { createBrowserRouter } from "react-router";
import Root from "./Root";

// Direct imports for instant page navigation (no lazy loading delays)
import Home from "./pages/Home";
import BTPPortal from "./pages/solutions/BTPPortal";
import ERCSolution from "./pages/solutions/ERCSolution";
import ProcessFactory from "./pages/solutions/ProcessFactory";
import AboutUs from "./pages/company/AboutUs";
import Careers from "./pages/company/Careers";
import Contact from "./pages/company/Contact";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import CaseStudies from "./pages/resources/CaseStudies";
import Blog from "./pages/resources/Blog";
import Whitepapers from "./pages/resources/Whitepapers";
import Events from "./pages/resources/Events";
import CintasCaseStudy from "./pages/resources/CintasCaseStudy";
import Manufacturing from "./pages/industries/Manufacturing";
import Healthcare from "./pages/industries/Healthcare";
import Retail from "./pages/industries/Retail";
import FinancialServices from "./pages/industries/FinancialServices";

// Direct imports = instant navigation, no loading delays or hiccups
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "solutions/btp-portal", Component: BTPPortal },
      { path: "solutions/erc", Component: ERCSolution },
      { path: "solutions/process-factory", Component: ProcessFactory },
      { path: "company/about", Component: AboutUs },
      { path: "company/careers", Component: Careers },
      { path: "company/contact", Component: Contact },
      { path: "legal/privacy", Component: Privacy },
      { path: "legal/terms", Component: Terms },
      { path: "resources/case-studies", Component: CaseStudies },
      { path: "resources/blog", Component: Blog },
      { path: "resources/whitepapers", Component: Whitepapers },
      { path: "resources/case-studies/cintas", Component: CintasCaseStudy },
      { path: "resources/events", Component: Events },
      { path: "industries/manufacturing", Component: Manufacturing },
      { path: "industries/healthcare", Component: Healthcare },
      { path: "industries/retail", Component: Retail },
      { path: "industries/financial-services", Component: FinancialServices },
    ],
  },
]);