import React from 'react'

function LoginPage() {

    const styles = {
        textAlign: "center"
    }

    return (
        <div style={styles}>
            <h2>Please Login:</h2>

            <form>
            <input 
            type="text" 
            value=""
            name="username" 
            placeholder="username"
            />
            <input 
            type="password" 
            value=""
            name="password"
            placeholder="password"
            />
            <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage;