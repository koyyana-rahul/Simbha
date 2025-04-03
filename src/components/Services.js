import React from "react";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Boost your brand’s online presence with our expert digital marketing strategies.",
    icon: "📈",
  },
  {
    title: "Branding & Identity",
    description:
      "Create a strong and recognizable brand identity with our design expertise.",
    icon: "🎨",
  },
  {
    title: "Social Media Management",
    description:
      "Grow your audience and engagement with our social media management services.",
    icon: "📱",
  },
  {
    title: "Content Creation",
    description:
      "High-quality content tailored to your brand to captivate and engage audiences.",
    icon: "✍️",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your search rankings and increase traffic with our SEO services.",
    icon: "🔍",
  },
  {
    title: "Ad Campaigns",
    description:
      "Maximize ROI with targeted ad campaigns across multiple platforms.",
    icon: "💰",
  },
];

const Services = () => {
  return (
    <div className="mt-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen p-10">
      <h1 className="text-center text-4xl font-bold text-yellow-500 dark:text-yellow-400 mb-10">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400">
              {service.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;