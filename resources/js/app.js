import '../css/app.css'
// import '@radix-ui/themes/styles.css';
import React from 'react'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { createRoot } from 'react-dom/client'

import { Theme } from '@radix-ui/themes';

createInertiaApp({
    resolve: name => require(`./Pages/${name}.tsx`),
    setup({ el, App, props }) {
        createRoot(el).render(
            <App {...props} />
        )
    },
})