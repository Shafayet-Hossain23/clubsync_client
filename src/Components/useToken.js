import { useEffect, useState } from "react"

export const useToken = (email) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data?.accessToken) {
                    localStorage.setItem("accessToken", data?.accessToken)
                    setToken(data?.accessToken)
                }
            })
    }, [email])
    return token
}