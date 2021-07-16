import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BoardRootComponent } from './root/board-root.component';
import { BoardRoutingModule } from './board.routing-module';
import { ProductsModule } from '@ngrx-with-router/products';

@NgModule({
	imports: [
		CommonModule,
		BoardRoutingModule,
		ProductsModule
	],
	declarations: [
		BoardRootComponent
	],
	providers: [
		{
			provide: 'token',
			useValue: 'board'
		}
	]
})
export class BoardPageModule {
}
