"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginRequest } from "../../lib/auth";

const inputClassName =
  "w-full rounded-[10px] border border-[#504CFF66] bg-black/30 px-[18px] py-[14px] text-[15px] text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#01C5FF] max-[480px]:text-[16px]";

export default function DashboardLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    const email = formData.email.trim();
    const password = formData.password;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await loginRequest({ email, password });
      router.replace("/dashboard");
    } catch (requestError) {
      setError(requestError.message || "Unable to log in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-[100px] text-white">
      <div className="pointer-events-none absolute right-[-15%] top-[12%] h-[320px] w-[620px] rounded-full bg-[#504CFF33] blur-[100px] max-[640px]:h-[220px] max-[640px]:w-[360px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-15%] h-[280px] w-[560px] rounded-full bg-[#003FCB66] blur-[110px] max-[640px]:h-[200px] max-[640px]:w-[340px]" />

      <section className="relative z-10 w-full max-w-[470px] rounded-[24px] border border-[#01C5FF] bg-[#1A1A1A66] px-6 py-9 backdrop-blur-[30px] max-[480px]:px-5">
        <div className="mb-8 text-center">
          <h1 className="title-gradient bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)] bg-[length:400%_400%] bg-clip-text text-[42px] font-normal leading-tight text-transparent max-[480px]:text-[32px]">
            Welcome Back
          </h1>
          <p className="mt-3 text-[15px] leading-7 text-[#CCC]">
            Sign in to continue to your dashboard.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          <label className="flex flex-col gap-2 text-[15px]" htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={inputClassName}
              required
            />
          </label>

          <label className="flex flex-col gap-2 text-[15px]" htmlFor="password">
            Password
            <span className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`${inputClassName} pr-[92px]`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded px-1 text-[12px] text-[#9DDBFF] transition-colors hover:text-white"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </span>
          </label>

          {error && (
            <p role="alert" className="m-0 rounded-[10px] border border-red-400/40 bg-red-950/30 px-4 py-3 text-center text-[14px] text-red-300">
              {error}
            </p>
          )}

          <div className="mx-auto mt-2 w-full rounded-[40px] bg-[linear-gradient(90deg,#00f2fe,#003cbe,#00f2fe)] bg-[length:200%_200%] p-[2px] title-gradient">
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center rounded-[40px] border-none bg-black px-6 py-[14px] text-[16px] font-medium text-white outline-none transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Login"}
            </button>
          </div>
        </form>

        <p className="mt-7 text-center text-[13px] text-gray-400">
          <Link href="/" className="transition-colors hover:text-white">
            Return to website
          </Link>
        </p>
      </section>
    </main>
  );
}
