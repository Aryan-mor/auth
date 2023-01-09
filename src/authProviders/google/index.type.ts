import {ProviderKeyType} from "../index.type";

export const GOOGLE_PROVIDER_VARIABLE = "GOOGLE_PROVIDER"
export type GOOGLE_PROVIDER_Type = typeof GOOGLE_PROVIDER_VARIABLE


export type GoogleProviderType = {
    key: Extract<ProviderKeyType, GOOGLE_PROVIDER_Type>,
    accessToken: string
}
