import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './not-found-page/not-found.component';
import { FeedComponent } from './feed/feed.component';
//import { AuthGuard } from './core/services/auth-guard.service';

export const routes: Routes = [
    { path: '', component: FeedComponent, /*canActivate: [AuthGuard] */},
    { path: 'auth',  loadChildren: 'app/auth/auth.module#AuthModule' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
