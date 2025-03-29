#!/usr/bin/env node
import inquirer from 'inquirer';
import { generateComponent } from '../src/generator.js';

// if (process.argv.includes('--list-templates')) {
//   const templates = getAvailableTemplates();
//   console.log('📦 Available Templates:');
//   Object.entries(templates).forEach(([name, template]) => {
//     console.log(`- ${name}: ${template.description || 'No description'}`);
//     console.log(`  Files: ${Object.keys(template.files).join(', ')}`);
//   });
//   process.exit(0);
// }

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Component name (PascalCase):',
    validate: input => /^[A-Z][a-zA-Z0-9]*$/.test(input) 
      || 'Name must be PascalCase!'
  },
  {
    type: 'list',
    name: 'template',
    message: 'Choose template:',
    choices: ['Basic (Component.tsx)', 'Container (Component + Container.tsx)']
  },
  {
    type: 'input',
    name: 'path',
    message: 'Path (e.g., src/components):',
    default: 'src/components'
  }
];

inquirer.prompt(questions).then(answers => {
  generateComponent(answers.name, answers.template, answers.path);
});

// add file genx-react-config.json add some configs there such as default path and etc, logic in loadUserConfigs.js file