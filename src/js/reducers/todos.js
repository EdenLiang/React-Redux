/**
 * Created by EdenLiang on 2016/3/4.
 */
'use strict';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../constants/actionType';
const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                text: action.text,
                completed: false
            }];
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
};

export default todos;