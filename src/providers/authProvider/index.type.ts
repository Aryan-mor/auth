import {BaseWrapperPropsType} from "../baseProvider/index.type";
import {defaultAccessTokenKey, defaultRefreshTokenKey} from "@commons/attribute";


export const defaultProps = {
    storageConfig: {
        accessTokenKey: defaultAccessTokenKey,
        refreshTokenKey: defaultRefreshTokenKey
    }
};


// Partial<Omit<BaseWrapperPropsType, "api">>
// & { api: BaseWrapperPropsType["api"] }


type AuthPropsType = Omit<BaseWrapperPropsType, "storageConfig"> &
    {
        storageConfig: Pick<BaseWrapperPropsType["storageConfig"], "storage"> & Partial<Omit<BaseWrapperPropsType["storageConfig"], "storage">>
    }
export default AuthPropsType
