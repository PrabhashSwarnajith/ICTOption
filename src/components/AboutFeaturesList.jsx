import React from 'react';

const AboutFeaturesList = ({ features }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
    {features.map(item => (
      <div className="flex items-start gap-3" key={item.title}>
        <span className="bg-secondary text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">
          ✓
        </span>
        <div>
          <div className="font-bold text-accent font-body text-base">
            {item.title}
          </div>
          <div className="text-neutral-400 text-sm opacity-90 font-body">
            {item.desc}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default AboutFeaturesList;
