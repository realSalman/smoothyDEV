# smoothyDEV React Application

This is the React version of the smoothyDEV website, rebuilt from scratch.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd react
   npm install
   ```

2. **Copy Assets**
   Copy all files from the `../assets` directory to `react/public/assets`:
   ```bash
   # On Windows (PowerShell)
   Copy-Item -Path ..\assets\* -Destination public\assets\ -Recurse
   
   # On Mac/Linux
   cp -r ../assets/* public/assets/
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

4. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
react/
├── public/
│   ├── assets/          # All images and static assets
│   └── index.html       # HTML template
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navigation.js
│   │   ├── Footer.js
│   │   └── *.css
│   ├── pages/          # Page components
│   │   ├── Home.js
│   │   ├── Portfolio.js
│   │   ├── Contact.js
│   │   ├── Admin.js
│   │   └── *.css
│   ├── App.js           # Main app component
│   ├── App.css
│   ├── index.js         # Entry point
│   └── index.css        # Global styles
├── package.json
└── README.md
```

## Features

- **React Router** for client-side routing
- **Responsive Design** matching the original site
- **Contact Form** with backend API integration
- **Admin Panel** for managing contact messages
- **Portfolio Showcase** with project details
- **Testimonials** carousel
- **Client Logos** display

## API Configuration

The contact form and admin panel connect to:
- API Base URL: `http://localhost:3000/api`

Make sure your backend server is running before using these features.

## Notes

- All assets should be placed in `public/assets/`
- The app uses React Router for navigation
- Styles are component-scoped where possible
- The design matches the original HTML/CSS/JS version

