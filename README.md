# VTV Trade Global

A modern, responsive website for VTV Trade Global, showcasing their import/export business with a focus on agricultural products.

## Features

- **Static Site Generation**: Fast, SEO-friendly static site built with Vite and React
- **Responsive Design**: Works on all device sizes
- **Contact Form**: EmailJS integration for contact form submissions
- **Product Catalog**: Showcase of import/export products with detailed views
- **Testimonials**: Client testimonials section

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React Query for data fetching and caching
- **UI Components**: Shadcn UI components with Radix UI primitives
- **Icons**: Lucide React
- **Email Service**: EmailJS

## Getting Started

### Prerequisites

- Node.js 16+ and npm 8+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/vtv-trade-global.git
   cd vtv-trade-global
   ```

2. Install dependencies:

   ```bash
   cd client
   npm install
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env`
   - Update the EmailJS credentials in `.env`

### Development

To start the development server:

```bash
cd client
npm run dev
```

This will start the development server at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
cd client
npm run build
```

The build artifacts will be in the `dist` directory.

## Project Structure

```text
client/
├── public/              # Static files
│   ├── assets/          # Images and other assets
│   └── data/            # JSON data files
├── src/
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and services
│   ├── pages/           # Page components
│   └── App.tsx          # Main application component
├── .env                 # Environment variables
├── index.html           # HTML template
├── package.json         # Project dependencies
└── tsconfig.json        # TypeScript configuration
```

## Environment Variables

Create a `.env` file in the client directory with the following variables:

```env
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

## Deployment

This project is set up for static site deployment. You can deploy it to any static hosting service like:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
