import { Inject, Injectable, Optional } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as ProductsActions from './products.actions';

@Injectable()
export class ProductsEffects {
	init$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ProductsActions.init),
			fetch({
				run: (action) => {
					// Your custom service 'load' logic goes here. For now just return a success action...
					return ProductsActions.loadProductsSuccess({ products: [] });
				},
				onError: (action, error) => {
					console.error('Error', error);
					return ProductsActions.loadProductsFailure({ error });
				}
			})
		)
	);

	constructor(private readonly actions$: Actions,
				@Optional() @Inject('token') private readonly token: string) {
		console.log(token)
	}
}
