import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, doubleincrement } from './counter.actions';

export const initialState: number = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(doubleincrement, (state, payload) => 
        (state +payload.add )* payload.multiply
    ),
    on(reset, (state) => 0)
);



/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/