import solid from "solid-start/vite";
import netlify from "solid-start-netlify";
import { defineConfig } from "vite";
import path from "path";
import dotenv from "dotenv";

export default defineConfig(() => {
    dotenv.config();
    return {
        plugins: [
            solid({
                adapter: netlify({ edge: true }),
            }),
        ],
        resolve: {
            alias: {
                utils: path.resolve(__dirname, "../../packages/utils"),
            },
        },
    };
});
