# Image Generator Frontend

This project provides a React-based interface for generating images through an API. Users can submit prompts and download the resulting images.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure the API endpoint. Copy `.env.example` to `.env` and set `VITE_IMAGE_GENERATOR_API` with the URL of your backend:
   ```bash
   VITE_IMAGE_GENERATOR_API=http://localhost:3005
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Build

Create a production build with:
```bash
npm run build
```
