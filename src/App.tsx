import { Switch, Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AppProvider } from "@/context/AppContext";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import TestDataService from "@/components/test/TestDataService";
import NotFound from "@/pages/not-found";

// Create a client
const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/product/:slug" component={ProductDetail} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/test-data" component={TestDataService} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
          <Toaster />
        </div>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
