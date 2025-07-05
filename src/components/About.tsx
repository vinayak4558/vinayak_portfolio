
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-10">
           My name is Vinayak sharma and I am an aspiring Data Engineer with a passion for transforming data into actionable insights.
           I have a strong foundation in Python and Data Engineering, including ETL pipelines, data modeling and big data technologies.
           I have completed my Bachelor's in Computer Science Engineering at Arya College of Engineering & IT, Jaipur, where I maintain a CGPA of 8.66.
           I am a quick learner with self learning attitude and always eager to take on new challenges and learn new technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center  mt-20 md:mt-32">
          <div className="animate-slide-in-left">
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <div className="w-44 h-44 bg-background rounded-full flex items-center justify-center">
                   
                    <img src="pfp.png" alt="" className='rounded-full' />
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

          <div className="space-y-10 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Academic Journey</h3>
              <p className="text-muted-foreground mb-4">
                I have completed my Bachelor's in Computer Science Engineering at Arya College of Engineering & IT, Jaipur, 
                maintaining a strong CGPA of 8.66. My academic foundation is built on a solid understanding of programming fundamentals and data structures .
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
