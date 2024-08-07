import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";

function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleRegister = async () => {
        try {
            await dispatch(registerThunk({ username, password }));
            navigate("/profile");
        } catch (e) {
            alert(e);
        }
    };
    return (
        <div>
            <h1>Register Screen</h1>
            <div>
                <label>Username</label>
                <input className="form-control"
                    type="text" value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>

            <div>
                <label>Password</label>
                <input className="form-control"
                    type="password" value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>

            <button onClick={handleRegister}>
                Register
            </button>
        </div>
    );
}

export default RegisterScreen;