const CookieStorage = "cookie"
type CookieStorageType = typeof CookieStorage
const SessionStorage = "session"
type SessionStorageType = typeof SessionStorage
const LocalStorageStorage = "localStorage"
type LocalStorageStorageType = typeof LocalStorageStorage
export type AcceptableStorageValue = string | boolean | any[] | Record<any, any>;


export type StorageType = CookieStorageType | SessionStorageType | LocalStorageStorageType

export type StorageConfigType = {
    storage: StorageType,
    accessTokenKey: string,
    refreshTokenKey: string,
}

export const isCookieStorage = (storage: StorageType): storage is CookieStorageType => {
    return storage === CookieStorage;
}
export const isSessionStorageStorage = (storage: StorageType): storage is SessionStorageType => {
    return storage === SessionStorage;
}
export const isLocalStorageStorage = (storage: StorageType): storage is LocalStorageStorageType => {
    return storage === LocalStorageStorage;
}

export type UseStorageReturnType = [
    (key: string) => AcceptableStorageValue | undefined,
    (ket: string, value: AcceptableStorageValue) => boolean
]
