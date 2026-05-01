import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Gift, Calendar, Lock, Calculator, TrendingUp, Wallet, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useUserWallet } from "@/hooks/useUserWallet";
import type { SidebarItem } from "@/types";

// ─── Constants ────────────────────────────────────────────────────────────────

const QUICK_ACTIONS: (SidebarItem & { desc: string; color: string })[] = [
  { title: "Redeem Gift Card", url: "/dashboard/redeem", icon: Gift, desc: "Amazon & Apple → USDC", color: "text-secondary" },
  { title: "Schedule Payment", url: "/dashboard/scheduler", icon: Calendar, desc: "One-time or recurring", color: "text-blue-400" },
  { title: "Vault Deposit", url: "/dashboard/vault", icon: Lock, desc: "Earn up to 10% APY", color: "text-primary" },
  { title: "Yield Calculator", url: "/dashboard/calculator", icon: Calculator, desc: "Estimate your earnings", color: "text-yellow-400" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function DashboardOverview() {
  const { user } = useAuth();
  const { usdcBalance } = useUserWallet(); // shared hook — no duplicate fetch

  const [totalLocked, setTotalLocked] = useState(0);
  const [totalEarned, setTotalEarned] = useState(0);
  const [pendingRedemptions, setPendingRedemptions] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    fetchVaultData();
  }, [user]);

  async function fetchVaultData() {
    setLoading(true);
    const [{ data: deposits }, { data: submissions }] = await Promise.all([
      supabase
        .from("vault_deposits")
        .select("amount, apy_rate, locked_at, unlock_at, status")
        .eq("user_id", user!.id),
      supabase
        .from("gift_card_submissions")
        .select("status")
        .eq("user_id", user!.id)
        .eq("status", "pending"),
    ]);

    setPendingRedemptions(submissions?.length ?? 0);

    if (deposits) {
      const locked = deposits
        .filter((d) => d.status === "active")
        .reduce((sum, d) => sum + Number(d.amount), 0);
      setTotalLocked(locked);

      const earned = deposits.reduce((sum, d) => {
        const days = Math.max(0, (Date.now() - new Date(d.locked_at).getTime()) / 86_400_000);
        return sum + (Number(d.amount) * Number(d.apy_rate) / 100) * (days / 365);
      }, 0);
      setTotalEarned(earned);
    }
    setLoading(false);
  }

  const stats = [
    { label: "Wallet Balance", value: `$${usdcBalance.toFixed(2)}`, sub: "USDC", icon: Wallet },
    { label: "Total Locked", value: `$${totalLocked.toFixed(2)}`, sub: "in Vault", icon: Lock },
    { label: "Total Earned", value: `$${totalEarned.toFixed(2)}`, sub: "yield", icon: TrendingUp },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display font-bold text-2xl text-foreground">Welcome back 👋</h2>
        <p className="text-sm text-muted-foreground mt-1">Here's your NexolPay overview</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <>
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <s.icon size={16} className="text-muted-foreground" />
                </div>
                <p className="font-display font-bold text-2xl text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Pending notice */}
          {pendingRedemptions > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl px-4 py-3 text-sm text-yellow-400"
            >
              ⏳ You have {pendingRedemptions} gift card
              {pendingRedemptions > 1 ? "s" : ""} pending review
            </motion.div>
          )}
        </>
      )}

      {/* Quick Actions */}
      <div>
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {QUICK_ACTIONS.map((action, i) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              <Link
                to={action.url}
                className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4 hover:border-muted-foreground/30 transition-colors group block"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0 ${action.color}`}
                >
                  <action.icon size={20} />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground">{action.title}</p>
                  <p className="text-xs text-muted-foreground">{action.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
