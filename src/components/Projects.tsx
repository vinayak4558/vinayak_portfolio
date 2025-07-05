
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ArrowUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Housing Price Prediction",
      description: "Machine learning pipeline using scikit-learn to predict house prices with data preprocessing, feature scaling, and model evaluation achieving 12.5% MAE.",
      technologies: ["Python", "scikit-learn", "pandas", "NumPy", "seaborn", "Matplotlib"],
      github: "https://github.com/vinayak/housing-prediction",
      demo: "#",
      type: "Machine Learning"
    },
    {
      title: "E-Locker System",
      description: "Innovative digital locker solution developed during JKLU Hackathon with secure authentication and real-time monitoring capabilities.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com/vinayak/e-locker",
      demo: "#",
      type: "Full Stack"
    },
    {
      title: "ETL Data Pipeline",
      description: "Enterprise-level data ingestion pipeline built during internship at Celebal Technologies for processing structured datasets efficiently.",
      technologies: ["Python", "MySQL", "ETL", "Data Processing"],
      github: "https://github.com/vinayak/etl-pipeline",
      demo: "#",
      type: "Data Engineering"
    },
    {
      title: "Personal Portfolio",
      description: "Responsive portfolio website showcasing projects and skills with modern design principles and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/vinayak/portfolio",
      demo: "https://vinayak.vercel.app",
      type: "Frontend"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities through various projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="mb-2">{project.type}</Badge>
                  <ArrowUp className="h-5 w-5 transform rotate-45 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" onClick={() => window.open(project.github, '_blank')}>
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  {project.demo !== "#" && (
                    <Button size="sm" onClick={() => window.open(project.demo, '_blank')}>
                      <ArrowUp className="w-4 h-4 mr-2 transform rotate-45" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
