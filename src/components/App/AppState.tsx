export interface AppState { 
    compiler: string; 
    framework: string;
    user?: string;
    dev: boolean;
    history?: any;
}

export interface AppProps { 
    compiler: string; 
    framework: string; 
}

export default AppState