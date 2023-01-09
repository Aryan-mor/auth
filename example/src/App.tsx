import {useEffect, useState} from 'react';
import './App.css';
import {useLogin} from "londonist-auth";


type LoginRes = {
    data: {
        access: string,
        refresh: string
    }
}

function App() {
    const [count, setCount] = useState(0)
    const {req: loginReq} = useLogin()


    useEffect(() => {
        loginReq<LoginRes>({
            username: "test",
            password: "test"
        }).then((res: any) => {
            console.log("askfjkasjf 2", res)
        })
    }, [])

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
