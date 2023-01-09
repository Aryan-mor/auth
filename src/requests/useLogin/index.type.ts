import {UsernameType} from "@appTypes/attribute.type";
import {RequestBaseType} from "@requests/index.type";
import {CredentialProviderType} from "@authProviders/credential/index.type";

type LoginRequestProps = RequestBaseType &
    Partial<Pick<CredentialProviderType, "getAccessToken" | "getRefreshToken">>
    & {
    username: UsernameType,
    password: string,
    usernameKey?: string,
    passwordKey?: string,

}

export default LoginRequestProps;
