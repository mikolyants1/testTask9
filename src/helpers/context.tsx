import { createContext } from "react";
import { IContext } from "../components/types/type";

export const Context = createContext<IContext>({} as IContext);