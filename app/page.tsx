"use client";

import { Navigation } from "@/components/navigation";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { ArrowRight, Sparkles, Palette, Zap } from "lucide-react";

export default function Home() {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/40 bg-background/60 backdrop-blur-sm text-sm text-muted-foreground mb-8">
              <Sparkles className="h-4 w-4" />
              <span>Animated Theme Toggler</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Beautiful Theme
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Transitions</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience smooth, animated theme switching with our modern navigation bar. 
              Built with Next.js, Tailwind CSS, and cutting-edge web animations.
            </p>
            
            <div className="flex justify-center">
              <button 
                onClick={scrollToDemo}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary/30 focus:ring-offset-2"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Theme Toggler?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern, accessible, and beautifully animated theme switching for your next project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-background border border-border/40">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Smooth Animations</h3>
              <p className="text-muted-foreground">
                View transitions API powered animations that create seamless theme switching experiences.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-background border border-border/40">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Optimized performance with React 19 and Next.js 15 for the best user experience.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-background border border-border/40">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Modern Design</h3>
              <p className="text-muted-foreground">
                Clean, responsive design that works perfectly on all devices and screen sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo-section" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Try It Yourself
            </h2>
            <p className="text-lg text-muted-foreground">
              Click the theme toggle button to see the magic in action!
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="p-12 rounded-3xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/40 backdrop-blur-sm">
              <AnimatedThemeToggler className="h-20 w-20 p-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              Built with ❤️ using Next.js, Tailwind CSS, and Lucide React
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
