import { NgModule }      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [
    //CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    MaterialModule
  ]
  
})
export class SharedModule {
}