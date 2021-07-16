import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'list',
		loadChildren: () => import('./list/list-page.module').then(m => m.ListPageModule)
	}, {
		path: 'board',
		loadChildren: () => import('./board/board-page.module').then(m => m.BoardPageModule)
	},
	{
		path: '',
		redirectTo: 'list',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
