
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C++", "C", "SQL", "JavaScript", "TypeScript"],
      color: "bg-blue-500/10 text-blue-700 dark:text-blue-300"
    },
    {
      title: "Frontend",
      skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"],
      color: "bg-green-500/10 text-green-700 dark:text-green-300"
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "JWT Authentication"],
      color: "bg-purple-500/10 text-purple-700 dark:text-purple-300"
    },
    {
      title: "Data & Analytics",
      skills: ["NumPy", "pandas", "scikit-learn", "seaborn", "Matplotlib", "Power BI", "ETL Pipelines"],
      color: "bg-orange-500/10 text-orange-700 dark:text-orange-300"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebooks", "VirtualBox", "Linux"],
      color: "bg-red-500/10 text-red-700 dark:text-red-300"
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Project Management", "Time Management", "Leadership"],
      color: "bg-teal-500/10 text-teal-700 dark:text-teal-300"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className={`${category.color} transition-transform hover:scale-105`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
