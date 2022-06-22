"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viteNodeApp = void 0;
const fs = require("fs");
const path = require("path");
const express = require("express");
const serveStatic = require("serve-static");
const api_1 = __importDefault(require("./src/server/routes/api"));
const i18next = require("i18next");
const i18nextMiddleware = require('i18next-http-middleware');
const Backend = require('i18next-fs-backend');
const isTest = process.env.NODE_ENV === "test" || !!process.env.VITE_TEST_BUILD;
const app = express();
async function createServer(root = __dirname, isProd = process.env.NODE_ENV === "production") {
    const resolve = (p) => path.resolve(__dirname, p);
    const requestHandler = serveStatic(resolve("assets"));
    app.use(requestHandler);
    app.use(serveStatic(resolve('public')));
    /*
        i18next
         .use(Backend)
         .use(i18nextMiddleware.LanguageDetector)
         
         
         .init({
         backend: {
            loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json',
         },
         debug: true,
         detection: {
         order: ['querystring', 'cookie'],
         caches: ['cookie']
         },
          saveMissing: true,
          
         fallbackLng: 'en',
         preload: ['en', 'fr']
         });
    
        app.use(
          i18nextMiddleware.handle(i18next, {
              ignoreRoutes: ['/foo'] // or function(req, res, options, i18next) { /* return true to ignore * / }
          })
        )
        */
    /** internationlization end **/
    app.use("/assets", requestHandler);
    /**
     * @type {import('vite').ViteDevServer}
     */
    let vite;
    if (!isProd) {
        vite = await require("vite").createServer({
            root,
            logLevel: isTest ? "error" : "info",
            server: {
                middlewareMode: "ssr",
                watch: {
                    // During tests we edit the files too fast and sometimes chokidar
                    // misses change events, so enforce polling for consistency
                    usePolling: true,
                    interval: 100,
                },
            },
        });
        // use vite's connect instance as middleware
        app.use(vite.middlewares);
    }
    else {
        app.use(require("compression")());
        app.use(serveStatic(resolve("dist/client"), {
            index: false,
        }));
    }
    app.use("/", api_1.default);
    // catch 404 and forward to error handler
    // app.use(function(req, res, next) {
    // next(createError(404));
    // });
    app.use("*", async (req, res) => {
        try {
            const url = req.originalUrl;
            let serveApiOnly = process.env.NODE_ENGINE === 'api';
            let render;
            // if server only or not
            let template = fs.readFileSync(resolve(`${serveApiOnly ? 'views/api.ejs' : 'index.html'}`), "utf-8");
            if (!isProd && process.env.NODE_ENV) {
                // always read fresh template in dev
                template = await vite.transformIndexHtml(url, template);
                // if server only, we don't load the react stuff
                render = (await vite.ssrLoadModule(resolve(`./src/client/entry-${serveApiOnly ? 'empty' : 'server'}.tsx`))).render;
            }
            else {
                render = require(resolve("./server/entry-server.js")).render;
            }
            const context = {};
            // dont serve react content but just a piece of html if on Api only
            const appHtml = serveApiOnly ? '<div style="margin: 10% auto;width: 40%;font-size: 30px;">Welcome to our api</div>' : render(url, context);
            const html = template.replace(`<!--app-html-->`, appHtml);
            res.status(200).set({ "Content-Type": 'text/html' }).end(html);
        }
        catch (e) {
            !isProd && vite.ssrFixStacktrace(e);
            console.log(e.stack);
            res.status(500).end(e.stack);
        }
    });
    return { app, vite };
}
const checkPort = (port, app) => new Promise(resolve => {
    app
        .listen(port, "0.0.0.0", () => {
        console.log(`Start listening application at http://localhost:${port}`);
    })
        .on("error", () => {
        console.log(`App already running at http://localhost:${port}`);
        resolve(false);
    });
});
/* create a server and verify if port is already use :
    catch error  EADDRINUSE and can let the app working instead
*/
createServer().then(({ app: Application }) => {
    const port = process.env.PORT || 7456;
    checkPort(Number(port), app);
});
// export for vite-plugin-node
exports.viteNodeApp = app;
exports.default = app;
//# sourceMappingURL=server.js.map