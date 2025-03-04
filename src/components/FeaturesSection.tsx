
import React, { useEffect, useRef } from 'react';
import { Cloud, Shield, Users, FileText, Image, Video } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeaturesSection = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const features = [
    {
      icon: <Cloud className="h-6 w-6 text-white" />,
      title: "Cloud Storage",
      description: "Store your files securely in the cloud and access them from anywhere, on any device."
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Advanced Security",
      description: "Your files are protected with industry-leading encryption and security features."
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Team Collaboration",
      description: "Work together with your team in real-time on shared documents and projects."
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "File Sharing",
      description: "Share files and folders with anyone, even if they don't have an account."
    },
    {
      icon: <Image className="h-6 w-6 text-white" />,
      title: "Photo Storage",
      description: "Automatically back up your photos and videos from your mobile devices."
    },
    {
      icon: <Video className="h-6 w-6 text-white" />,
      title: "Media Playback",
      description: "Stream your music and videos directly from the cloud without downloading."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span 
            ref={(el) => (elementsRef.current[0] = el)}
            className="uppercase text-cloudbox-blue font-semibold tracking-wider animate-on-scroll"
          >
            FEATURES
          </span>
          <h2 
            ref={(el) => (elementsRef.current[1] = el)}
            className="text-3xl md:text-4xl font-bold mt-2 animate-on-scroll stagger-delay-1 text-cloudbox-black"
          >
            Everything you need in one place
          </h2>
          <p 
            ref={(el) => (elementsRef.current[2] = el)}
            className="text-lg text-cloudbox-gray mt-4 max-w-3xl mx-auto animate-on-scroll stagger-delay-2"
          >
            CloudBox provides a complete solution for storing, sharing, and collaborating on your files.
          </p>
        </div>

        <div 
          ref={(el) => (elementsRef.current[3] = el)}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 animate-on-scroll stagger-delay-3"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-cloudbox-blue rounded-lg p-2 mr-4 flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-cloudbox-black">{feature.title}</h3>
                <p className="text-cloudbox-gray">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
