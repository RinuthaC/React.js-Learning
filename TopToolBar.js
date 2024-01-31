// TopToolbar.js

import React from 'react';

const TopToolbar = () => {
  const handleLabelClick = (label) => {
    // Add your logic to handle label clicks
    console.log(`Label clicked: ${label}`);
  };

  return (
    <div className="top-toolbar">
      <span className="toolbar-label" onClick={() => handleLabelClick('Label 1')}>
        Label 1
      </span>
      <span className="toolbar-label" onClick={() => handleLabelClick('Label 2')}>
        Label 2
      </span>
      <span className="toolbar-label" onClick={() => handleLabelClick('Label 3')}>
        Label 3
      </span>
    </div>
  );
};

export default TopToolbar;
