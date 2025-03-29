import fs from 'fs';
import path from 'path';

import * as templates from './templates/index.js';

export function generateComponent(name, templateType, basePath) {
  const templateKey = templateType.includes('Basic') ? 'basic' : 'container';
  const outputDir = path.join(basePath, name);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const template = templates[templateKey](name);

  if (templateKey === 'basic') {
    fs.writeFileSync(
      path.join(outputDir, `${name}.tsx`),
      template
    );
  } else {
    Object.entries(template).forEach(([fileName, content]) => {
      fs.writeFileSync(path.join(outputDir, fileName), content);
    });
  }

  console.log(`✨ ${name} generated at ${outputDir}`);
}
