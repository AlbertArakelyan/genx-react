export const container = (name) => ({
  [`${name}Container.tsx`]: `import React from 'react';
import { ${name} } from './${name}';

export const ${name}Container = () => {
  return <${name} />;
};`,
  [`${name}.tsx`]: `import React from 'react';

export const ${name} = () => {
  return <div>${name}</div>;
};`,
  [`index.ts`]: `export { ${name} } from './${name}';`
});
