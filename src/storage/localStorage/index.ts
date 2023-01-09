import {AcceptableStorageValue} from "@storage/index.type";
import {convertAcceptableStorageValueToString, convertStringToAcceptableStorageValue} from "@storage/index";

export function setLocalStorage(name: string, value: AcceptableStorageValue, days: number = 5): boolean {
    try {
        const val = convertAcceptableStorageValueToString(value)
        localStorage.setItem(name, val)
        return true
    } catch (e) {
        console.error("setLocalStorage", e)
        return false
    }
}


export function getLocalStorage<T>(name: string): T {
    return convertStringToAcceptableStorageValue(localStorage.get(name)) as T
}
