// ─── Auth ─────────────────────────────────────────────────────────────────────
export type { User, Session } from "@supabase/supabase-js";

// ─── Vault ────────────────────────────────────────────────────────────────────
export interface VaultDeposit {
  id: string;
  amount: number;
  lock_duration: string;
  apy_rate: number;
  locked_at: string;
  unlock_at: string;
  status: "active" | "unlocked" | "withdrawn";
}

// ─── Gift Card Redemption ─────────────────────────────────────────────────────
export interface Redemption {
  id: string;
  reference_number: string;
  brand: string;
  card_currency: string;
  card_value: number;
  commission_amount: number;
  usdt_payout: number;
  status: "pending" | "approved" | "rejected";
  rejection_reason: string | null;
  submitted_at: string;
  actioned_at: string | null;
  tx_hash: string | null;
}

// ─── Wallet ───────────────────────────────────────────────────────────────────
export interface UserWallet {
  user_id: string;
  usdc_balance: number;
  wallet_address: string | null;
}

// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
}

export interface SidebarItem {
  title: string;
  url: string;
  icon: React.ElementType;
}
