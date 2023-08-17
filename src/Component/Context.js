
import React, { useState,createContext } from "react";
export const Context = createContext();
export const ContextProvider = ({ children }) => {
	let [user,setUser] =useState(" ");
    
	return (
		<Context.Provider value={{ user,setUser}}>
			{children}
		</Context.Provider>
	);
};
