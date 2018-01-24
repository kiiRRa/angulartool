import { Routes } from '@angular/router';

import { Test1Component } from './test1.component';

export const Test1Routes: Routes = [
    {

        path: '',
        children: [{
            path: '',
            component: Test1Component
        }]
    }
];