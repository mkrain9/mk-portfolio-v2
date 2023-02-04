import React from "react";

const Section = ({
  id,
  color,
  size,
  children,
}: {
  id: string;
  size?: string;
  color: string;
  children: any;
}) => {
  size = size || "h-screen";
  return (
    <section
      id={id}
      className={`${size} snap-center flex flex-col items-center ${color}`}
    >
      {children}
    </section>
  );
};

export default Section;
