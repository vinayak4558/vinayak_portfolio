
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
  const certifications = [
    {
      title: "Data Engineering",
      issuer: "Celebal Technologies",
      year: "2024",
      type: "Professional"
    },
    {
      title: "Full Stack Web Development using MERN Stack",
      issuer: "Various Platforms",
      year: "2024",
      type: "Development"
    },
    {
      title: "Introduction to MongoDB",
      issuer: "MongoDB",
      year: "2024",
      type: "Database"
    },
    {
      title: "TCS iON Career Edge – Young Professional",
      issuer: "TCS",
      year: "2023",
      type: "Professional"
    },
    {
      title: "Python Fundamentals",
      issuer: "Various Platforms",
      year: "2022",
      type: "Programming"
    }
  ];

  const achievements = [
    {
      title: "JKLU Hackathon",
      description: "Created an innovative E-locker solution",
      type: "Hackathon"
    },
    {
      title: "EXERGIE National Technical Fest",
      description: "Participated in National Level Technical Competition",
      type: "Competition"
    },
    {
      title: "Arya Premier League (APL)",
      description: "Sports participation showcasing teamwork",
      type: "Sports"
    },
    {
      title: "National Pollution Control Day",
      description: "Essay Writing Competition participant",
      type: "Writing"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      "Professional": "bg-blue-500/10 text-blue-700 dark:text-blue-300",
      "Development": "bg-green-500/10 text-green-700 dark:text-green-300",
      "Database": "bg-purple-500/10 text-purple-700 dark:text-purple-300",
      "Programming": "bg-orange-500/10 text-orange-700 dark:text-orange-300",
      "Hackathon": "bg-red-500/10 text-red-700 dark:text-red-300",
      "Competition": "bg-teal-500/10 text-teal-700 dark:text-teal-300",
      "Sports": "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
      "Writing": "bg-pink-500/10 text-pink-700 dark:text-pink-300"
    };
    return colors[type as keyof typeof colors] || "bg-gray-500/10 text-gray-700 dark:text-gray-300";
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition of continuous learning and professional development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 animate-fade-in">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-tight mb-1">{cert.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-2">{cert.year}</Badge>
                        <Badge className={getTypeColor(cert.type)} variant="secondary">
                          {cert.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 animate-fade-in">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${(index + 5) * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-tight mb-2">{achievement.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{achievement.description}</p>
                      </div>
                      <Badge className={getTypeColor(achievement.type)} variant="secondary">
                        {achievement.type}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
