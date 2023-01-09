import {GOOGLE_PROVIDER_Type, GoogleProviderType} from "./google/index.type";
import {CREDENTIAL_PROVIDER, CredentialProviderType} from "@authProviders/credential/index.type";


export type ProviderKeyType = CREDENTIAL_PROVIDER | GOOGLE_PROVIDER_Type

export type ProviderType = CredentialProviderType | GoogleProviderType



