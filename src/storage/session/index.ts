import {AcceptableStorageValue} from "@storage/index.type";
import {convertAcceptableStorageValueToString, convertStringToAcceptableStorageValue} from "@storage/index";

export function setSession(name: string, value: AcceptableStorageValue, days: number = 5): boolean {
    try {
        const val = convertAcceptableStorageValueToString(value)
        sessionStorage.setItem(name, val)
        return true
    } catch (e) {
        console.error("setSession", e)
        return false
    }
}


export function getSession<T>(name: string): T {
    return convertStringToAcceptableStorageValue(sessionStorage.get(name)) as T
}
