import { NgModule }            from '@angular/core';

import { FeedComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,

  ],
  declarations: [
    FeedComponent
  ]
})
export class FeedModule { }