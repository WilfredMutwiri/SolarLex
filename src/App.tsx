import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import {About} from "./components/About";
import {StoryCards} from "./components/StoryCards";
import ProgramDetail from "./components/ProgramDetails";
import {ProgramCards} from "./components/ProgramCards";
import {Donations} from "./components/Donations";
import { Header } from "./components/Header";
import {Contact} from "./components/Contact";
import {Signup} from "./components/Signup";
import {Footer} from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs/:id" element={<ProgramDetail/>}/>
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/stories" element={<StoryCards/>} />
          <Route path="/programs" element={<ProgramCards/>} />
          <Route path="/Donate" element={<Donations/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
