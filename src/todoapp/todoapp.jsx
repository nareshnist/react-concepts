import { useState } from "react"

export function Todo() {
    const [listitems ,setlistitems] = useState([]);
    const additems  =() => {
        const inputelement = document.getElementById('input-element').value;
        if(!inputelement)return;
        const object = {
            id: listitems.length === 0 ? 1 : listitems[listitems.length - 1 ].id + 1,
            pname:inputelement
        }
        setlistitems([...listitems,object]);
        document.getElementById('input-element').value= ''
    }

    const removeItem = (id) => {
        setlistitems(listitems.filter(item  => (item.id !== id)));
    }

    const [twowaydata,update] = useState("naresh")

    // two way data binding 
     // BY USING THE ONCHNAGE EVNTYS TYPE ON INPUT ELEMENT .
    return (
        <>
            <div className="container">
                <div className="form-group W-50 d-flex mt-5"> 
                    <input type="text" className="form-control w-25 mr-3" id="input-element" />
                    <button className="btn btn-primary " onClick={additems}> Add</button>
                </div>
                <ul className="list-group  mt-4">
                    {listitems.map((item,idx) => {
                        return  <li className="list-group-item mt-auto" key= {idx} id={item.id}>{item.id}.{item.pname}<button className="btn btn-danger" onClick={() => {
                            removeItem(item.id);
                        }}>X</button></li>
                    })}
                </ul>
                <input type="text"  className="mt-5" value={twowaydata} onChange={(e) => {
                    update(() => {
                        return e.target.value.length > 10 ? 'length exceeded' : e.target.value;
                    });
                }}/>
            </div>
        </>
    )
}






