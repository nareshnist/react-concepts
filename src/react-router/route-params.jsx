
import { useParams ,useLocation} from "react-router-dom";


export function UserDyanamicParams(){


    // Parameter access example.
    let params = useParams();
    // console.log(params);
    // {id: '123', code: 'xyz'}

    // QueryParams access example

    const queryParams =  useLocation();
    const searchPrams = new URLSearchParams(queryParams.search);
    console.log(queryParams);
    console.log(searchPrams);
    let name = searchPrams.get("name")
    console.log(searchPrams.get("name"));

    return(
      <>
        <h1>User with Dy params :</h1>
        <h2>User id : {params.id} , code :  {params.code}</h2>

        <hr />
        <br />
        <br />
        <h1>User with Query Params :</h1>
        <h2>User name :  {name}</h2>
      </>
    )
}


// Query parameters
    // ?id=1&name=xyz
    // ex import {useLocation} from "react-router-dom";
    // const location = useLocation()
    // const    QueryParams = new UrlSearchParams(location.search);
    // const page_no =  QueryParams.GET(PARAMS NAME)

// Parameters 
    //proudct/:id/:xyz
    // ex import {useParams} from "react-router-dom";
    //const {de structure} = useParams()