import {AcceptableStorageValue} from "@storage/index.type";
import {convertAcceptableStorageValueToString, convertStringToAcceptableStorageValue} from "@storage/index";

export function setCookie(name: string, value: AcceptableStorageValue, days: number = 5): boolean {
    try {
        const val = convertAcceptableStorageValueToString(value)
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (val || "") + expires + "; path=/";
        return true
    } catch (e) {
        console.error("setCookie " + name, e)
        return false
    }
}


export function getCookie<T>(cname: string): T | undefined {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';').map(element => {
        return element.trim();
    });

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            const val = c.substring(name.length, c.length)
            if (val)
                return convertStringToAcceptableStorageValue(val) as T;
        }
    }
    return undefined;
}
