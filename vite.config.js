import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: '/portfolio/',
    plugins: [React()],
});