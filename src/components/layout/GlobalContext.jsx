import { createContext } from "react";



export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) =>{

    let userinfo={
        username : "Ram",
        email: "Ram@gmail.com",
        msg: "This message is coming from GlobalContext."
    }
    return <GlobalContext.Provider value={userinfo}>
        {children}
    </GlobalContext.Provider>
}