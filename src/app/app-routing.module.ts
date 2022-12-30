import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { INTERNAL_PATHS } from '@data/constants/routes';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { Pages404Component } from '@modules/server/pages404/pages404.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: INTERNAL_PATHS.SERVER_ERROR_404,
    component: Pages404Component
  },
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'panel',
    component: SkeletonComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('@modules/user/user.module').then((m) => m.UserModule)
      },
      // {
      //   path: '**',
      //   redirectTo: '/panel/user',
      //   pathMatch: 'full'
      // }
    ]
  },
  {
    path: '**',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
