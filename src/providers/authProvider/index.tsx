import React from "react"
import BaseContext from "../baseProvider/index";
import AuthPropsType, {defaultProps} from "./index.type";
import {ConnectChildrenType} from "@appTypes/index";
import {BaseWrapperPropsType} from "../baseProvider/index.type";

const AuthContext = (props: ConnectChildrenType<AuthPropsType>) => {
    const {
        children,
        ...pr
    } = props

    pr.storageConfig = {
        ...(defaultProps?.storageConfig || {}),
        ...(pr.storageConfig || {})
    }

    return (
        <BaseContext.Provider
            value={pr as BaseWrapperPropsType}
        >
            {children}
        </BaseContext.Provider>
    )
}

AuthContext.defaultProps = defaultProps;

export default AuthContext
