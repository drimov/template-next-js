import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/__tests__/setupTest.ts"],
    include: ["**/*.test.{ts,tsx}"],
    alias: {
      "@/*": "./src/*",
    },
  },
})
