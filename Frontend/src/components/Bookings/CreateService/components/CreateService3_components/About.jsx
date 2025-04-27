import React from 'react';

const About = ({ description }) => (
  <section className="space-y-2 w-36  w-[100%]">
    <h3 className="font-medium">About</h3>
    <p className="text-sm text-gray-600 w-[70%] ">{description}</p>
  </section>
);

export default About;
