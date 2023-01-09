import {ProviderKeyType, ProviderType} from "../index.type";
import {GetValueFromRequestType} from "@utils/getDataFromRequest/index.type";

export const CREDENTIAL_PROVIDER_VARIABLE = "CREDENTIAL_PROVIDER"

export type CREDENTIAL_PROVIDER = typeof CREDENTIAL_PROVIDER_VARIABLE

export type CredentialProviderType = {
    key: Extract<ProviderKeyType, CREDENTIAL_PROVIDER>,
    getAccessToken: GetValueFromRequestType,
    getRefreshToken: GetValueFromRequestType
}

export const isCredentialProvider = (provider: ProviderType): provider is CredentialProviderType => {
    return provider.key === CREDENTIAL_PROVIDER_VARIABLE
}
