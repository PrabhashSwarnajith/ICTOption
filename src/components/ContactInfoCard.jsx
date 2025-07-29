import React from 'react';

const ContactInfoCard = ({ icon, title, details }) => (
  <div className="flex items-start space-x-4 transform hover:scale-105 transition-all duration-300">
    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-accent mb-2 font-heading">
        {title}
      </h3>
      {details.map((detail, idx) => (
        <p key={idx} className="text-neutral-300 font-body">
          {detail}
        </p>
      ))}
    </div>
  </div>
);

export default ContactInfoCard;
