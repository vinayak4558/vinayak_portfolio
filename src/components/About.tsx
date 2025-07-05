
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know me better - my background, interests, and what drives my passion for technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-in-left">
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <div className="w-44 h-44 bg-background rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold gradient-text">VS</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Vinayak Sharma</h3>
                  <p className="text-muted-foreground">Computer Science Student</p>
                  <p className="text-muted-foreground">Arya College of Engineering & IT</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Academic Journey</h3>
              <p className="text-muted-foreground mb-4">
                I'm currently pursuing my Bachelor's in Computer Science Engineering at Arya College of Engineering & IT, Jaipur, 
                maintaining a strong CGPA of 8.66. My academic foundation is built on a solid understanding of programming fundamentals, 
                data structures, and software engineering principles.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Career Vision</h3>
              <p className="text-muted-foreground mb-4">
                My goal is to become a versatile Full-Stack Developer with expertise in modern web technologies and data engineering. 
                I'm passionate about creating user-centric applications that solve real-world problems while leveraging data to drive 
                informed decision-making.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Beyond Code</h3>
              <p className="text-muted-foreground">
                When I'm not coding, you'll find me participating in hackathons, exploring new technologies, or playing cricket. 
                I believe in continuous learning and enjoy contributing to open-source projects and tech communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
