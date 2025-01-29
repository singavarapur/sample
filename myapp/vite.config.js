import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: '0.0.0.0',  // Allow access from any IP
    port: 5173,        // Default Vite port (or change if needed)
    strictPort: true,  // Ensures it uses the defined port
    allowedHosts: [
      'ec2-18-191-189-84.us-east-2.compute.amazonaws.com', // Add your EC2 public hostname
      'localhost'
    ]
  }
});

