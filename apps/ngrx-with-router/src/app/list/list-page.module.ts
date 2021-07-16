import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListRootComponent } from './root/list-root.component';
import { ListRoutingModule } from './list.routing-module';
import { ProductsModule } from '@ngrx-with-router/products';

@NgModule({
	imports: [
		CommonModule,
		ListRoutingModule,
		ProductsModule
	],
	declarations: [
		ListRootComponent
	],
	providers: [
		{
			provide: 'token',
			useValue: 'list'
		}
	]
})
export class ListPageModule {
}
