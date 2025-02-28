import { useEffect,useState } from "react";
import { ProductList } from "./use-effect-example";


export function UseEffectHook(){

    let [timer,setTimer] = useState(0);
    let [counter ,setCounter] = useState(0);



    // Without a Dependency Array (useEffect(() => {...}))
    // Runs on every render (initial and re-renders).
    // Triggers when any state or prop changes.

    // useEffect(() => {
    //     console.log("This runs on every render");
    // });
    

    // With an Empty Dependency Array (useEffect(() => {...}, []))
    // Runs only once (on mount).
    // Equivalent to componentDidMount in class components.
    // Does not run on updates or state changes.

    // useEffect(() => {
    //     console.log("This runs only once on mount");
    //   }, []);


    //   With a Specific Dependency Array (useEffect(() => {...}, [dependency]))
    //   Runs on mount and whenever the specified dependency changes.
    //   Equivalent to componentDidUpdate for that specific dependency.
      
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //   console.log(`Count changed to: ${count}`);
    // }, [count]); // Runs when `count` changes
    

    // Cleanup Function (Unmount Behavior)
    // When you return a function inside useEffect, it runs when the component unmounts or before the effect re-runs due to dependency changes.

    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Component mounted");
      
        return () => {
          console.log("Component unmounted or dependency changed");
        };
      }, [count]);
      

    const handleClick = ()=>{
        setCount(count => count + 1);
    }

    return (
      <>
        {/* <button type="button" onClick={() => {
            setTimer((prev) => prev + 1);
        }}> UpdateTimer</button>

        <button type="button" onClick={() => {
            setCounter((prev) => prev + 1);
        }}> update counter</button>

        <h1>Demo of use effect {console.log("inside component")} </h1>
        <h2>{timer}</h2> */}

        {/* <ProductList></ProductList> */}

        <button type="button" onClick={handleClick}>Use Effect</button>
        {/* <UseFeectExamples /> */}
        {/* < UseEffectWithEventListeners /> */}
        {/* <PageTitleUpdater /> */}
        {/* <AutoSaveInput /> */}
      </>
    );
}



// from version 16 


// use cases : 
    // api call  get data & construct jsx
    // after component load  do  some dom manupulation or adding event listed ,


// Syntax
// useEffect(callback,[dependencies(optinal)])

// how its works :

    // useEffect(callback) :
        // useEffect(() => {cosnole.log(console.log("use effect"))})
        // when second params not provided when ever any state variable changs component will re-render so useEffect will execute.

    // empty :
        //useEffect(callBack, [empty dependencies]) 
        // call back with empty dependencies only execute on mount (only one time).

    // specifix dependencies :
        //useEffect(callBack, [dependencies])
            // onload 
            // anytime its dependencies re execute





// 1. Fetching Data from an API (on Mount)
// Scenario: You need to fetch data when the component loads.
// Solution: Use useEffect with an empty dependency array ([]) so the effect runs only once.
            
function UseFeectExamples(){

    const [resourceType,setresourceType] = useState("posts");
    const [typeOfData, setTypeOfData] = useState([])


    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/${resourceType}`).then(data => data.json()).then(data => setTypeOfData(data));
    },[resourceType])
    
    const handleClick = (resourceType)=>{
        setresourceType(resourceType);
    }


    return (
        <>
            <button type="button" onClick={() => handleClick('posts')}>posts</button>
            <button type="button" onClick={() => handleClick('comments')}>comments</button>
            <button type="button" onClick={() => handleClick('albums')}>albums</button>
            <button type="button" onClick={() => handleClick('photos')}>photos</button>
            <button type="button" onClick={() => handleClick('todos')}>todos</button>
            <button type="button" onClick={() => handleClick('users')}>users</button>


            <div style={{marginTop:'5rem'}}>
                    {
                        typeOfData.map((data,key) => {
                            return (
                                <div style={{marginBottom:"2rem"}}>{JSON.stringify(data)}</div>
                            )
                        })
                    }
            </div>
        </>
    )

}

// 2. Listening to Window Resize Event (on Mount & Unmount)
// Scenario: You want to track the window size and update the component whenever it changes.
// Solution: Use useEffect with an event listener and a cleanup function.


function UseEffectWithEventListeners() {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            console.log("Cleanup before re-executing effect");
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {width}
        </div>
    );
}


// 3. Updating the Page Title Dynamically
// Scenario: You want to update the document title based on component state.
// Solution: Use useEffect with a dependency array containing the state.


function PageTitleUpdater (){
    const [pageTitle, setpageTitle] = useState("react");
    const [count, setCount] = useState(0);

    const counthandleResize = () => {
        setCount(count => count + 1);
    }

    useEffect(() => {
        document.title = `${count} - ${pageTitle} `;
    },[count]);

    return (
        <>
            <h1>Updating the values based on satee changes </h1>

            <button type="button" onClick={() => counthandleResize()}>State Change</button>
        </>
    )
}


// 4. Auto-Saving Input Data (Simulating Debounced API Call)
// Scenario: You want to save user input automatically after a delay instead of on every keystroke.
// Solution: Use useEffect with a delay and cleanup function to debounce the effect


function AutoSaveInput(){
    const [text, setText] = useState("");

    useEffect(() => {

        const timer = setTimeout(() => {
            console.log("Auto-saving:", text);
        }, 500);


        return () => {
            clearTimeout(timer);
        }

    },[text])

    return(
        <input type="text" name="name"value={text}  onChange={(eve) => setText(eve.target.value)} />
    )

}