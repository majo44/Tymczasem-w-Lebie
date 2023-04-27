import liveServer from "live-server";

liveServer.start({
    middleware: [function(req, res, next) {
        if (req.url.endsWith('.wbn')) {
            res.setHeader('Content-Type', 'application/webbundle');
            res.setHeader('X-Content-Type-Options', 'nosniff');
        }
        next();
    }]
});

