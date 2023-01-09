import {useBaseContext} from "@providers/baseProvider";
import {useCallback} from "react";
import {
    AcceptableStorageValue,
    isCookieStorage,
    isLocalStorageStorage,
    isSessionStorageStorage,
    UseStorageReturnType
} from "@storage/index.type";
import {getCookie, setCookie} from "@storage/cookie";
import {getLocalStorage, setLocalStorage} from "@storage/localStorage";
import {getSession, setSession} from "@storage/session";

const useStorage = (): UseStorageReturnType => {
    const {storageConfig: {storage}} = useBaseContext()

    const set = useCallback((key: string, value: AcceptableStorageValue): boolean => {
        if (isCookieStorage(storage)) {
            return setCookie(key, value)
        }
        if (isLocalStorageStorage(storage)) {
            return setLocalStorage(key, value)
        }
        if (isSessionStorageStorage(storage)) {
            return setSession(key, value)
        }
        return false
    }, [storage])

    const get = useCallback((key: string): AcceptableStorageValue | undefined => {
        if (isCookieStorage(storage)) {
            return getCookie(key)
        }
        if (isLocalStorageStorage(storage)) {
            return getLocalStorage(key)
        }
        if (isSessionStorageStorage(storage)) {
            return getSession(key)
        }
        return undefined
    }, [storage])

    return [get, set]
}


export default useStorage


export const convertAcceptableStorageValueToString = (value: AcceptableStorageValue): string => {
    let val = value
    if (typeof val === "boolean") {
        val = {val: val ? "true" : "false", objType: "boolean"};
    }
    if (Array.isArray(val)) {
        val = {val: val, objType: "array"};
    }
    if (typeof val === 'object') {
        val = JSON.stringify(val);
    }
    return val
}

export const convertStringToAcceptableStorageValue = (value: string): AcceptableStorageValue => {
    try {
        const val = JSON.parse(value)
        if (val?.objType === "boolean") {
            return val.val as boolean
        }
        if (val?.objType === "array") {
            return val.val as any[]
        }
        return val
    } catch {
        return value
    }
}
