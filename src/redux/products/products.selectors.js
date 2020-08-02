import { createSelector } from "reselect";

const selectProducts = (state) => state.sections;

export const selectSectionsProducts = createSelector([selectProducts], (products) => products);
