import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListRootComponent } from './root/list-root.component';

const routes: Routes = [
	{
		path: '',
		component: ListRootComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ListRoutingModule {
}
