import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardRootComponent } from './root/board-root.component';

const routes: Routes = [
	{
		path: '',
		component: BoardRootComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BoardRoutingModule {
}
