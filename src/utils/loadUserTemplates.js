import path from 'path';
import fs from 'fs';

export const loadUserTemplates = () => {
  const userRcPath = path.join(process.cwd(), '.react-generaterc.json');
  
  if (!fs.existsSync(userRcPath)) return {};
  
  try {
    return JSON.parse(fs.readFileSync(userRcPath)).templates || {};
  } catch (e) {
    console.error('⚠️ Invalid .react-generaterc.json:', e.message);
    return {};
  }
};
