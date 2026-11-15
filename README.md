# Ashish Yadav — Data Engineering & AI Portfolio

## Run locally

1. Install Node.js LTS (Node 20 or newer recommended).
2. Open this folder in VS Code.
3. Open Terminal in this folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite.

## Production build

```bash
npm run build
```

Vite writes the deployable site to `dist/`.

## Deploy to Vercel

1. Push this project folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Use these settings:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Click Deploy.

The app is a frontend portfolio. The hotel analytics/demo data in the source remains illustrative/sample data, not a live external data integration.
