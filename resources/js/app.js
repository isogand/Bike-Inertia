import "./bootstrap";
import "./../../vendor/js/jquery.waypoints.min";
import "./Pages/app";

// import './../../vendor/js/gmaps';
import "./scripts";

import React from "react";
import {render} from "react-dom";
import {createInertiaApp} from "@inertiajs/inertia-react";
import {InertiaProgress} from "@inertiajs/progress";
import Layout from "@/Pages/Layout";
const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const page = require(`./Pages/${name}`).default;
        page.layout = page.layout || Layout;
        return page;
    },
    // resolve: (name) => require(`./Pages/${name}`),
    setup({el, App, props}) {
        return render(<App {...props} />, el);
    },
});

InertiaProgress.init({color: "#4B5563"});
