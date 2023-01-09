import LoginRequestProps from "./index.type";
import {defaultPasswordKey, defaultUsernameKey} from "@commons/attribute";
import {useBaseContext} from "@providers/baseProvider";
import {RequestType} from "@requests/index.type";
import {CREDENTIAL_PROVIDER_VARIABLE, CredentialProviderType} from "@authProviders/credential/index.type";
import {getDataFromRequest} from "@utils/getDataFromRequest";
import useStorage from "@storage/index";

const useLogin = (): RequestType<LoginRequestProps> => {
    const {api: baseApi, storageConfig: {accessTokenKey, refreshTokenKey}, providers} = useBaseContext()
    const [getStorage, setStorage] = useStorage()

    const {
        getRefreshToken: baseGetRefreshToken,
        getAccessToken: baseGetAccessToken
    } = (providers[CREDENTIAL_PROVIDER_VARIABLE] as CredentialProviderType)

    const req = <T>({
                        api = baseApi,
                        username,
                        usernameKey = defaultUsernameKey,
                        password,
                        passwordKey = defaultPasswordKey,
                        getRefreshToken = baseGetRefreshToken,
                        getAccessToken = baseGetAccessToken
                    }: LoginRequestProps) => {
        return new Promise<T>((resolve, reject) => {
            const res = {
                data: {
                    access: "access token2",
                    refresh: "refresh token2",
                }
            } as unknown as T;

            const accessToken = getDataFromRequest(res, getAccessToken)
            const refreshToken = getDataFromRequest(res, getRefreshToken)
            if (accessToken)
                setStorage(accessTokenKey, accessToken)
            if (refreshToken)
                setStorage(refreshTokenKey, refreshToken)
            return resolve(res)
        })
    }

    return {req}
}

export default useLogin
