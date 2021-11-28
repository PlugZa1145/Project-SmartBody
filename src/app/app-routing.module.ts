import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'yoga',
    pathMatch: 'full'
  },
  {
    path: 'loginform',
    loadChildren: () => import('./loginform/loginform.module').then( m => m.LoginformPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'strength',
    loadChildren: () => import('./strength/strength.module').then( m => m.StrengthPageModule)
  },
  {
    path: 'push',
    loadChildren: () => import('./push/push.module').then( m => m.PushPageModule)
  },
  {
    path: 'dumbbell-row',
    loadChildren: () => import('./dumbbell-row/dumbbell-row.module').then( m => m.DumbbellRowPageModule)
  },
  {
    path: 'tricep',
    loadChildren: () => import('./tricep/tricep.module').then( m => m.TricepPageModule)
  },
  {
    path: 'step-ups',
    loadChildren: () => import('./step-ups/step-ups.module').then( m => m.StepUpsPageModule)
  },
  {
    path: 'squats',
    loadChildren: () => import('./squats/squats.module').then( m => m.SquatsPageModule)
  },
  {
    path: 'walking',
    loadChildren: () => import('./walking/walking.module').then( m => m.WalkingPageModule)
  },
  {
    path: 'yoga',
    loadChildren: () => import('./yoga/yoga.module').then( m => m.YogaPageModule)
  },
  {
    path: 'downward',
    loadChildren: () => import('./downward/downward.module').then( m => m.DownwardPageModule)
  },
  {
    path: 'warrior',
    loadChildren: () => import('./warrior/warrior.module').then( m => m.WarriorPageModule)
  },
  {
    path: 'tree',
    loadChildren: () => import('./tree/tree.module').then( m => m.TreePageModule)
  },
  {
    path: 'triangle',
    loadChildren: () => import('./triangle/triangle.module').then( m => m.TrianglePageModule)
  },
  {
    path: 'bridge',
    loadChildren: () => import('./bridge/bridge.module').then( m => m.BridgePageModule)
  },
  {
    path: 'cobra',
    loadChildren: () => import('./cobra/cobra.module').then( m => m.CobraPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
