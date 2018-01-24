import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { Test1Component } from './test1.component';
import { Test1Routes } from './test1.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(Test1Routes),
        FormsModule
    ],
    declarations: [Test1Component]
})

export class Test1Module {}
