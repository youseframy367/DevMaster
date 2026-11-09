"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LayoutDashboard, LogOut, Menu, X, UserRound } from "lucide-react";
import { clearAccessToken, getCurrentUser } from "../lib/auth";

const navigation = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/about/experience", label: "Experience", icon: UserRound },
  { href: "/dashboard/about/social-media", label: "Social Media", icon: UserRound },
  { href: "/dashboard/about/info", label: "About Info", icon: UserRound },
  { href: "/dashboard/articles", label: "Articles", icon: UserRound },
  { href: "/dashboard/comments", label: "Comments", icon: UserRound },
  { href: "/dashboard/contacts", label: "Contact Messages", icon: UserRound },
  { href: "/dashboard/jobs", label: "Jobs", icon: UserRound },
  { href: "/dashboard/job-applications", label: "Job Applications", icon: UserRound },
  { href: "/dashboard/projects", label: "Projects", icon: UserRound },
  { href: "/dashboard/service-requests", label: "Service Requests", icon: UserRound },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === "/dashboard/login";
  const [checking, setChecking] = useState(!isLogin);
  const [user, setUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (isLogin) return undefined;
    let active = true;
    getCurrentUser()
      .then((currentUser) => {
        if (!active) return;
        if (!currentUser) {
          router.replace("/dashboard/login");
          return;
        }
        setUser(currentUser);
      })
      .catch(() => {
        if (active) router.replace("/dashboard/login");
      })
      .finally(() => {
        if (active) setChecking(false);
      });
    return () => {
      active = false;
    };
  }, [isLogin, router]);

  if (isLogin) return children;

  if (checking) {
    return <main className="flex min-h-screen items-center justify-center text-white">Loading dashboard...</main>;
  }

  const logout = () => {
    clearAccessToken();
    router.replace("/dashboard/login");
  };

  return (
    <div className="min-h-screen text-white">
      <button
        type="button"
        onClick={() => setMobileOpen((current) => !current)}
        className="fixed left-4 top-5 z-50 rounded-lg border border-white/10 bg-[#12121A] p-2 text-white lg:hidden"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <aside className={`fixed inset-y-0 left-0 z-40 w-[260px] border-r border-white/10 bg-[#080812]/95 px-5 py-7 backdrop-blur-xl transition-transform lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="mb-10 pl-2">
          <Link href="/dashboard" className="title-gradient bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)] bg-[length:400%_400%] bg-clip-text text-2xl font-semibold text-transparent">
            DevMaster
          </Link>
          <p className="mt-2 text-xs text-gray-500">Admin Dashboard</p>
        </div>

        <nav className="flex flex-col gap-2">
          {navigation.map(({ href, label, icon: Icon }) => {
            const active = href === "/dashboard" ? pathname === href : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors ${active ? "bg-[#003FCB]/40 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
              >
                <Icon size={18} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-7 left-5 right-5 border-t border-white/10 pt-5">
          <p className="mb-3 truncate text-xs text-gray-500">
            {typeof user === "object" ? user?.email || user?.name || "Authenticated user" : "Authenticated user"}
          </p>
          <button type="button" onClick={logout} className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {mobileOpen && <button type="button" onClick={() => setMobileOpen(false)} className="fixed inset-0 z-30 bg-black/60 lg:hidden" aria-label="Close navigation overlay" />}

      <div className="min-h-screen lg:pl-[260px]">
        <header className="flex h-[78px] items-center justify-between border-b border-white/10 px-6 pl-[72px] lg:px-10 lg:pl-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#9DDBFF]">Dashboard</p>
            <p className="mt-1 text-sm text-gray-400">Manage your website content</p>
          </div>
          <Link href="/" className="text-sm text-gray-400 transition-colors hover:text-white">View website</Link>
        </header>
        <div className="relative min-h-[calc(100vh-78px)] overflow-hidden px-5 py-8 lg:px-10">
          <div className="pointer-events-none absolute right-[-12%] top-[8%] h-[300px] w-[560px] rounded-full bg-[#504CFF22] blur-[110px]" />
          <div className="pointer-events-none absolute bottom-[-12%] left-[-10%] h-[260px] w-[500px] rounded-full bg-[#003FCB44] blur-[110px]" />
          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
