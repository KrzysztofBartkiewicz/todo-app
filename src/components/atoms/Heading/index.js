import React from 'react';

const Heading = ({ headingType, children }) => {
  const renderHeading = () => {
    switch (headingType) {
      case 'h1':
        return <h1 className="heading--h1">{children}</h1>;
      case 'h2':
        return <h2 className="heading--h2">{children}</h2>;

      default:
        return <h3 className="heading--h3">{children}</h3>;
    }
  };

  return <>{renderHeading()}</>;
};

export default Heading;
