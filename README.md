# ⚡ genx-react
*Generate React components in seconds—like Angular's `ng generate` but for React.*  

[![npm](https://img.shields.io/npm/v/genx-react)](https://www.npmjs.com/package/genx-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- ![Demo](https://media.giphy.com/media/YOUR_GIF_ID/giphy.gif) -->

### **What gives `genx-react`?**  
- 🚀 **Generate components in seconds** (like Angular's `ng generate`)  
- 📦 **Standardized patterns** (no more folder structure debates)  
- 🔥 **Supports**:  
  - Single-file components (`Component.tsx`)  
  - Container/View pattern (`Component/Container.tsx`)  

<!-- - 📦 **Supports**: TypeScript, JavaScript, Container pattern  
- 🧩 **Extensible**: Add custom templates via `.react-genierc.json`   -->


## **Quick Start**
```bash
npx genx-react
```
Then follow the prompts!

<!-- ### Or Go Pro (Flags Mode):
```bash
npx genx-react Button --template=container --path=src/ui
``` -->

### Templates Included

| Template Name | Description | Files Generated |
| --- | --- | --- |
| `basic` | Generates a single React component file | `Button/Button.tsx` |
| `container` | Generates a pair of files | `Button/Container.tsx`, `Button/Button.tsx`, `Button/index.ts` |

<!-- ## 🎯 What Developers Say  
> *"I used to copy-paste components like a caveman. `genx-react` saved my sanity."*  
> — @devTwitterHandle   -->

<!-- [![Twitter Share](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fyourname%2Freact-genie)](https://twitter.com/intent/tweet?text=Generate%20React%20components%20in%20seconds%20with%20genx-react!%20&url=https%3A%2F%2Fgithub.com%2Fyourname%2Freact-genie)   -->

<!-- ## Contribution
### 💡 How to Add a Template  
1. Create `src/templates/[name].js`  
2. Export a function that returns:  
   - String (single file)  
   - Object `{ filename: content }` (multiple files)  
3. Update `cli.js` choices array. -->

<!-- ## 🙏 Donations
genx-react is a free, open source software developed in my (little) spare time. If you liked the project and would like to support further development, please consider making a small donation, it really helps :) -->

<!-- ### 💖 Founding Sponsors  
- **$10+**: Name immortalized in `CREDITS.md` + priority feature requests.  
- **$50+**: Custom template built for your company.   -->