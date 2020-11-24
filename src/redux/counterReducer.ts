export enum ACTIONS_TYPES {
    SET_SCORE = "SET_SCORE",
    SET_MAX_SETTINGS_VALUE = "SET_MAX_SETTINGS_VALUE",
    SET_MIN_SETTINGS_VALUE = "SET_MIN_SETTINGS_VALUE",
    ENTER_SETTINGS = "ENTER_SETTINGS",
    RESET_VALUE = "RESET_VALUE",
    VALUE_FROM_LOCAL_STORAGE = "VALUE_FROM_LOCAL_STORAGE"
}

type StateType = {
    score: number
    maxValue: number
    minValue: number
    maxSettingsValue: number
    minSettingsValue: number
}

let initialState: StateType = {
    score: 0,
    maxValue: 0,
    minValue: 0,
    maxSettingsValue: 1,
    minSettingsValue: 0
}
type ActionsType =
    | IncreaseScoreAC
    | SetMinSettingsValueType
    | SetMaxSettingsValueType
    | EnterSettingsType
    | ResetValueType
    | ValueFromLocalStorageType

export const counterReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case ACTIONS_TYPES.SET_SCORE:
            if (state.score < state.maxValue) {
                return {...state, score: action.newScore}
            }
            return state
        case ACTIONS_TYPES.SET_MAX_SETTINGS_VALUE:
            return {...state, maxSettingsValue: action.newMaxSettingsValue}
        case ACTIONS_TYPES.SET_MIN_SETTINGS_VALUE:
            return {...state, minSettingsValue: action.newMinSettingsValue}
        case ACTIONS_TYPES.ENTER_SETTINGS:
            if (state.maxSettingsValue > state.minSettingsValue) {
                return {
                    ...state,
                    maxValue: state.maxSettingsValue,
                    minValue: state.minSettingsValue,
                    score: state.minSettingsValue
                }
            }
            return state
        case ACTIONS_TYPES.RESET_VALUE:
            return {...state, score: action.minValue}
        case ACTIONS_TYPES.VALUE_FROM_LOCAL_STORAGE:
            return { ...state, maxSettingsValue: action.maxValue, minSettingsValue: action.minValue}
        default:
            return state
    }
}

type IncreaseScoreAC = {
    type: ACTIONS_TYPES.SET_SCORE
    newScore: number
}
export const increaseScoreAC = (newScore: number): IncreaseScoreAC => {
    return {
        type: ACTIONS_TYPES.SET_SCORE,
        newScore
    }
}
type ResetValueType = {
    type: ACTIONS_TYPES.RESET_VALUE
    minValue: number
}
export const resetValueAC = (minValue: number): ResetValueType => {
    return {
        type: ACTIONS_TYPES.RESET_VALUE,
        minValue
    }
}
type SetMinSettingsValueType = {
    type: ACTIONS_TYPES.SET_MIN_SETTINGS_VALUE
    newMinSettingsValue: number
}
export const setMinSettingsValueAC = (newMinSettingsValue: number): SetMinSettingsValueType => {
    return {
        type: ACTIONS_TYPES.SET_MIN_SETTINGS_VALUE,
        newMinSettingsValue
    }
}
type SetMaxSettingsValueType = {
    type: ACTIONS_TYPES.SET_MAX_SETTINGS_VALUE
    newMaxSettingsValue: number
}
export const setMaxSettingsValueAC = (newMaxSettingsValue: number): SetMaxSettingsValueType => {
    return {
        type: ACTIONS_TYPES.SET_MAX_SETTINGS_VALUE,
        newMaxSettingsValue
    }
}
type EnterSettingsType = {
    type: ACTIONS_TYPES.ENTER_SETTINGS
}
export const enterSettingsAC = (): EnterSettingsType => {
    return {
        type: ACTIONS_TYPES.ENTER_SETTINGS,
    }
}
type ValueFromLocalStorageType = {
    type: ACTIONS_TYPES.VALUE_FROM_LOCAL_STORAGE
    maxValue: number
    minValue: number
}
export const valueFromLocalStorageAC = (minValue: number, maxValue: number): ValueFromLocalStorageType => {
    return {
        type: ACTIONS_TYPES.VALUE_FROM_LOCAL_STORAGE,
        maxValue,
        minValue
    }
}