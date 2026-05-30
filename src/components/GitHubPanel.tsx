"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import {LogOut } from "lucide-react";
import { useEffect, useState } from "react";

type Repo = { id: number; name: string; html_url: string; description: string | null; language: string | null; stargazers_count: number };

export default function GitHubPanel() {
  const { data: session, status } = useSession();
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function loadRepos() {
      if (!session?.user?.name) return;
      const res = await fetch("https://api.github.com/user/repos?sort=updated&per_page=6", {
        headers: session?.accessToken ? { Authorization: `Bearer ${session.accessToken}` } : {},
      });
      if (res.ok) setRepos(await res.json());
    }
    loadRepos();
  }, [session]);

  if (status === "loading") return <div className="glass rounded-3xl p-6">Loading GitHub...</div>;

  if (!session) {
    return (
      <div className="glass rounded-3xl p-6">
        <h3 className="text-2xl font-semibold">GitHub Integration</h3>
        <p className="mt-3 text-slate-300">Sign in to preview your latest GitHub repositories inside the portfolio.</p>
        <button onClick={() => signIn("github")} className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950 hover:bg-slate-200">
          <span>GitHub</span>Login with GitHub
        </button>
      </div>
    );
  }

  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold">Connected as {session.user?.name || session.user?.email}</h3>
          <p className="text-slate-300">Latest repositories from your GitHub account.</p>
        </div>
        <button onClick={() => signOut()} className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
          <LogOut size={16} /> Sign out
        </button>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <a key={repo.id} href={repo.html_url} target="_blank" className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition hover:-translate-y-1 hover:bg-slate-800">
            <div className="font-semibold">{repo.name}</div>
            <p className="mt-2 line-clamp-3 text-sm text-slate-300">{repo.description || "Repository description coming soon."}</p>
            <div className="mt-4 flex justify-between text-xs text-slate-400"><span>{repo.language || "Code"}</span><span>★ {repo.stargazers_count}</span></div>
          </a>
        ))}
      </div>
    </div>
  );
}
