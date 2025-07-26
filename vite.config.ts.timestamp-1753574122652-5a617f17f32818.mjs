// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 5173,
    host: "0.0.0.0",
    strictPort: false,
    hmr: {
      port: 5173,
      clientPort: 5173
    }
  },
  build: {
    assetsDir: "assets",
    sourcemap: false,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          animations: ["framer-motion", "gsap"],
          icons: ["lucide-react", "react-icons"]
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  publicDir: "public",
  preview: {
    port: 4173,
    host: "0.0.0.0"
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIGJhc2U6ICcvJyxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogNTE3MyxcbiAgICBob3N0OiAnMC4wLjAuMCcsXG4gICAgc3RyaWN0UG9ydDogZmFsc2UsXG4gICAgaG1yOiB7XG4gICAgICBwb3J0OiA1MTczLFxuICAgICAgY2xpZW50UG9ydDogNTE3M1xuICAgIH1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBhc3NldHNEaXI6ICdhc3NldHMnLFxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgbWluaWZ5OiAnZXNidWlsZCcsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIHZlbmRvcjogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgICAgICBhbmltYXRpb25zOiBbJ2ZyYW1lci1tb3Rpb24nLCAnZ3NhcCddLFxuICAgICAgICAgIGljb25zOiBbJ2x1Y2lkZS1yZWFjdCcsICdyZWFjdC1pY29ucyddLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICB9LFxuICBwdWJsaWNEaXI6ICdwdWJsaWMnLFxuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogNDE3MyxcbiAgICBob3N0OiAnMC4wLjAuMCdcbiAgfSxcbiAgZGVmaW5lOiB7XG4gICAgJ3Byb2Nlc3MuZW52Lk5PREVfRU5WJzogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JylcbiAgfVxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLElBQ1gsV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFVBQ1osUUFBUSxDQUFDLFNBQVMsV0FBVztBQUFBLFVBQzdCLFlBQVksQ0FBQyxpQkFBaUIsTUFBTTtBQUFBLFVBQ3BDLE9BQU8sQ0FBQyxnQkFBZ0IsYUFBYTtBQUFBLFFBQ3ZDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsY0FBYztBQUFBLEVBQzFCO0FBQUEsRUFDQSxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sd0JBQXdCLEtBQUssVUFBVSxRQUFRLElBQUksWUFBWSxhQUFhO0FBQUEsRUFDOUU7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
