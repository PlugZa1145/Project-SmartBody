import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'menu',
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
  {
    path: 'cardio',
    loadChildren: () => import('./cardio/cardio.module').then( m => m.CardioPageModule)
  },
  {
    path: 'burpees',
    loadChildren: () => import('./burpees/burpees.module').then( m => m.BurpeesPageModule)
  },
  {
    path: 'dumbbell-row',
    loadChildren: () => import('./dumbbell-row/dumbbell-row.module').then( m => m.DumbbellRowPageModule)
  },
  {
    path: 'high-intensity',
    loadChildren: () => import('./high-intensity/high-intensity.module').then( m => m.HighIntensityPageModule)
  },
  {
    path: 'russian',
    loadChildren: () => import('./russian/russian.module').then( m => m.RussianPageModule)
  },
  {
    path: 'glute',
    loadChildren: () => import('./glute/glute.module').then( m => m.GlutePageModule)
  },
  {
    path: 'high',
    loadChildren: () => import('./high/high.module').then( m => m.HighPageModule)
  },
  {
    path: 'highkicks',
    loadChildren: () => import('./highkicks/highkicks.module').then( m => m.HighkicksPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'aerobic-anaerobic',
    loadChildren: () => import('./aerobic-anaerobic/aerobic-anaerobic.module').then( m => m.AerobicAnaerobicPageModule)
  },
  {
    path: 'aerobic',
    loadChildren: () => import('./aerobic/aerobic.module').then( m => m.AerobicPageModule)
  },
  {
    path: 'anaerobic',
    loadChildren: () => import('./anaerobic/anaerobic.module').then( m => m.AnaerobicPageModule)
  },
  {
    path: 'end-aerobic-anaerobic',
    loadChildren: () => import('./end-aerobic-anaerobic/end-aerobic-anaerobic.module').then( m => m.EndAerobicAnaerobicPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
