
// Step 1: Create a Context


import { createContext, useContext } from "react";

const MyContext = createContext();  // Creating a Context

// Step 2: Provide the Context in a Parent Component



export const MyProvider = ({ children }) => {
    const [user, setUser] = useState("Naresh");

    // for multiple valiues we could use object 
  
    return (
      <MyContext.Provider value={{ user, setUser }}>
        {children}
      </MyContext.Provider>
    );
  };

 export const dataFromContxt = useContext(MyContext);