import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'


import { SearchComponent } from '../search//search.component';
import { RepoComponent } from '../repo/repo.component';

const routes: Routes = [

  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: "search", component: SearchComponent },
  { path: "repo", component: RepoComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
