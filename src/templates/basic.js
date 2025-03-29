export const basic = (name) => `import React from 'react';

export const ${name} = () => {
  return <div>${name}</div>;
};`;
