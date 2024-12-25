"use client"

import { useState } from "react";
import Logo from "./Logo";

interface Props {
  onSubmit: (
    email: string,
    password: string,
  ) => void
}

const Login = ({ onSubmit }: Props) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(email, password)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card max-w-sm shadow-lg bg-base-100">
        <div className="card-body space-y-4">
          <Logo />
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">E-mail</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Digite seu e-mail"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Senha</span>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Digite sua senha"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login