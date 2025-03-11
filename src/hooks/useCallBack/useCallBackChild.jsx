export function UseCallBackChild({onClick}) {
    console.log('ChildComponent re-rendered');
    return (
        <div>
               <button onClick={onClick}>Increment</button>
        </div>
    )
}

