import { ThinkingModel } from './../../models/thinking.model';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { ThinkingService } from "../service/thinking.service";
import * as formThinkingTypeActions from "./action";

@Injectable()
export class UserEffects {
  constructor(private action$: Actions, private service: ThinkingService) { }

  loadThikings$ = createEffect((): any =>
    this.action$.pipe(
      ofType(formThinkingTypeActions.thinkingTypeAction.LOAD_THINKINGS),
      exhaustMap(() =>
        this.service.findAll().pipe(
          map((payload: any) =>
            formThinkingTypeActions.LoadThinkingsSuccess({ payload })
          ),
          catchError((error) => of(formThinkingTypeActions.LoadThinkingsFail({ payload: error })))
        )
      )
    )
  );

}
