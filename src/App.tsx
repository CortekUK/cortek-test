import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import ChatWidget from "./components/ChatWidget";
import CookieConsent from "./components/CookieConsent";

import Index from "./pages/Index";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import BookConsultation from "./pages/BookConsultation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Insights from "./pages/Insights";
import InsightArticle from "./pages/InsightArticle";
import PadelClubApp from "./pages/PadelClubApp";
import GetStarted from "./pages/GetStarted";
import AuditBooked from "./pages/AuditBooked";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true
            }}
          >
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book-consultation" element={<BookConsultation />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightArticle />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/padel-club-app" element={<PadelClubApp />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/get-started-quiz" element={<GetStarted showQuiz />} />
              <Route path="/audit-booked" element={<AuditBooked />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ChatWidget />
            <CookieConsent />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
