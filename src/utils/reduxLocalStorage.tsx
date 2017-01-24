import config from '../config';


export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(config.localStorageKey);
        if (serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state:any) => {
    try {
        var serialized = JSON.stringify(state);        
        localStorage.setItem(config.localStorageKey, serialized);
    } catch (err) {
        console.log('Failed to save state');
    }
}