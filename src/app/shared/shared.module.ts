import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as fromComponents from './components';
import * as fromPipes from './pipes';
import { RouterModule } from '@angular/router';
import { SolidButtonComponent } from './components/buttons/solid-button/solid-button.component';
import { FullTableComponent } from './components/tables/full-table/full-table.component';
import { FullTableTheadComponent } from './components/tables/full-table/full-table-thead/full-table-thead.component';
import { FullTableTfooterComponent } from './components/tables/full-table/full-table-tfooter/full-table-tfooter.component';
import { FullTableTbodyComponent } from './components/tables/full-table/full-table-tbody/full-table-tbody.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  declarations: [...fromComponents.components, ...fromPipes.pipes],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    ...fromComponents.components,
    ...fromPipes.pipes
  ]
})
export class SharedModule { }
