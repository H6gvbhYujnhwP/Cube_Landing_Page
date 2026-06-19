/*
  Design note: Precision Blueprint Modernism.
  App-level navigation behaviour must feel controlled and dependable.
  Route changes should resolve decisively, with no drifting scroll carry-over between pages.
*/
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./contexts/ThemeContext";
import Compliance from "./pages/Compliance";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Services from "./pages/Services";
// Lead magnet landing pages (self-contained, light theme)
import Funding from "@/leadmagnets/pages/Funding";
import HealthCheck from "@/leadmagnets/pages/HealthCheck";
import CostReview from "@/leadmagnets/pages/CostReview";
import ModernisationMap from "@/leadmagnets/pages/ModernisationMap";

function ScrollManager() {
  const [location] = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alignScroll = () => {
      const hash = window.location.hash.replace(/^#/, "");

      if (hash) {
        document.getElementById(decodeURIComponent(hash))?.scrollIntoView({
          block: "start",
          behavior: "auto",
        });
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    requestAnimationFrame(alignScroll);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollManager />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/compliance" component={Compliance} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        {/* Lead magnet landing pages */}
        <Route path="/funding" component={Funding} />
        <Route path="/it-health-check" component={HealthCheck} />
        <Route path="/it-cost-review" component={CostReview} />
        <Route path="/modernisation-map" component={ModernisationMap} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
