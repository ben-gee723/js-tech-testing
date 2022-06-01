export const useInitState = (persistState, defaultState) => {
    return persistState ? persistState : defaultState;
};
