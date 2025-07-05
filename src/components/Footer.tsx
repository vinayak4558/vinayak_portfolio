
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Mail, ArrowUp, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { theme, setTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:vinayak4558sharma@gmail.com",
      label: "Email"
    },
    {
      icon: Github,
      href: "https://github.com/vinayak4558",
      label: "GitHub"
    },
    {
      icon: ArrowUp,
      href: "https://linkedin.com/in/vinayak-sharma-5491a9228",
      label: "LinkedIn",
      className: "transform rotate-45"
    }
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg gradient-text">Vinayak Sharma</h3>
            <p className="text-muted-foreground text-sm">
              Data Engineer
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                onClick={() => window.open(social.href, '_blank')}
                className="hover:scale-110 transition-transform"
              >
                <social.icon className={`h-5 w-5 ${social.className || ''}`} />
                <span className="sr-only">{social.label}</span>
              </Button>
            ))}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hover:scale-110 transition-transform"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vinayak Sharma. All rights reserved.
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="hover:scale-110 transition-transform"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
