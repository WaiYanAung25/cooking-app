import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleRecipeComponent } from "./recipes/single-recipe/single-recipe.component";
import { HomePageComponent } from "./home-page/home-page.component";
const routes: Routes = [

  { path: '',component: HomePageComponent },
  { path: 'single-recipe/:id', component: SingleRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
