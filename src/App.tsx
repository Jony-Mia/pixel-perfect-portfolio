import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Overview from "./dashboard/overview";
import Layout from "./dashboard/Layout";

const queryClient = new QueryClient();

const App = () => (
  <>
    {/* <Navbar/> */}
  <Index />
          {/* <Route path="/admin" element={<Layout />} />
          <Route path="/admin/analyst" element={<Overview />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/* <Route path="*" element={<NotFound />} /> */}
        {/* </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider> */}
  </>
);

export default App;
