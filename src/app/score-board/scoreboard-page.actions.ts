import { createAction, props } from "@ngrx/store";
import { Game } from "./game";


export const homeScore = createAction(
    '[Scoreboard Page] Home Score'
);

export const awayScore = createAction(
    '[Scoreboard Page] Away Score'
)

export const resetScore = createAction(
    '[Scoreboard Page] Score Reset'
)

export const setScore = createAction(
    '[Scoreboard Page] Set Scores',
    props<{game: Game}>()
)