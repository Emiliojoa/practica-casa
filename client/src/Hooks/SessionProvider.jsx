import { useState, createContext } from "react"

const SessionContext = createContext({
    user: undefined,
    changeUser: () => { }
}
);
export const SessionProvider = ({ children }) => {

    const [user, setUser] = useState(undefined)

    const changeUser = (newUser) => {
        setUser(newUser)
    }
    return (
        <SessionContext.Provider value={{ user, changeUser }}>
            {children}
        </SessionContext.Provider>
    )

}

