export default function AsyncActionGenerator(asyncBaseActions:any){
    var promiseActions:any = {} 
    for (let asynBaseAction in asyncBaseActions){
        if (typeof(asynBaseAction === 'string')){
            let f = asynBaseAction + '_FULFILLED';
            let p = asynBaseAction + '_PENDING';
            let r = asynBaseAction + '_REJECTED';
            promiseActions[f]=f;
            promiseActions[p]=p;
            promiseActions[r]=r; 
        }
    }
    return Object.assign(promiseActions,promiseActions)
}

export function Pending(actionName:string){ return actionName + '_PENDING'}
export function Fulfilled(actionName:string){ return actionName + '_FULFILLED'}
export function Rejected(actionName:string){ return actionName + '_REJECTED'}