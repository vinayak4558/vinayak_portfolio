
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Vinayak Sharma</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
            Aspiring salesforce developer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Passionate about transforming data into actionable insights with expertise in Python and Data Engineering — including ETL pipelines, data modeling, and big data technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => window.open('https://drive.google.com/file/d/1de2pxOEG2qt5Dfvt7GIEObBk20PE38Q_/view?usp=drivesdk', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View Resume
            </Button>
          </div>

          <div className="animate-bounce">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
              onClick={() => scrollToSection('about')}
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
