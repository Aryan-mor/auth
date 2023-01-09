import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {AuthContext, CREDENTIAL_PROVIDER_VARIABLE} from "londonist-auth";

const api = "https://apibeta.londonist.co.uk"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthContext
            api={api}
            storageConfig={{
                storage: "cookie",
            }}
            providers={{
                [CREDENTIAL_PROVIDER_VARIABLE]: {
                    key: CREDENTIAL_PROVIDER_VARIABLE,
                    getAccessToken: ["data", "access"],
                    getRefreshToken: (res: any) => res?.data?.refresh || ""
                },
            }}
        >
            <App/>
        </AuthContext>
    </React.StrictMode>,
)
