import {createContext, useContext} from "react";
import {BaseWrapperPropsType} from "./index.type";

const BaseContext = createContext<BaseWrapperPropsType>({} as BaseWrapperPropsType);
export default BaseContext

export function useBaseContext(): BaseWrapperPropsType {
    return useContext(BaseContext);
}
