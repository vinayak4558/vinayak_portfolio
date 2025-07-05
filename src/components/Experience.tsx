
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      role: "Data Engineering Intern",
      company: "Celebal Technologies",
      location: "Centre of Excellence (COE)",
      duration: "June 2024 - September 2024",
      description: "Worked on enterprise-level data solutions and automation tools.",
      achievements: [
        "Developed Python applications for internal automation tasks, improving workflow efficiency by 30%",
        "Managed and queried structured datasets using MySQL with optimized query performance",
        "Collaborated with team to understand and implement ETL pipelines for enterprise data ingestion",
        "Gained hands-on experience with big data processing and data pipeline architecture"
      ],
      technologies: ["Python", "MySQL", "ETL Pipelines", "Data Processing", "Big Data"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology - Computer Science Engineering",
      institution: "Arya College of Engineering and I.T, Jaipur",
      duration: "2021 - 2025",
      grade: "CGPA: 8.66",
      highlights: [
        "Strong foundation in Data Structures and Algorithms",
        "Coursework in Software Engineering, Database Management, and Web Development",
        "Active participation in technical events and hackathons"
      ]
    },
    {
      degree: "Senior Secondary (Science + Mathematics)",
      institution: "Sr. Sec. Shivam Public School, Jaipur",
      duration: "2019 - 2021",
      grade: "Percentage: 91.60%",
      highlights: [
        "Strong mathematical foundation",
        "Physics and Chemistry with Computer Science",
        "Consistent academic excellence"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background that shaped my technical expertise.
          </p>
        </div>

        <div className="space-y-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center animate-fade-in">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="card-hover animate-slide-in-left">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {exp.company} - {exp.location}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="self-start">{exp.duration}</Badge>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center animate-fade-in">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-hover animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <Badge variant="outline">{edu.duration}</Badge>
                        <Badge variant="secondary">{edu.grade}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
