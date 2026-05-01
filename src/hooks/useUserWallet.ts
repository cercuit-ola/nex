import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

interface UserWalletState {
  usdcBalance: number;
  loading: boolean;
  refetch: () => void;
}

/**
 * Fetches and subscribes to the current user's USDC wallet balance.
 * Extracted from DashboardOverview, Dashboard header, and other consumers
 * so the data is fetched in one place and not duplicated.
 */
export function useUserWallet(): UserWalletState {
  const { user } = useAuth();
  const [usdcBalance, setUsdcBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchBalance = async () => {
    if (!user) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const { data } = await supabase
      .from("user_wallets")
      .select("usdc_balance")
      .eq("user_id", user.id)
      .maybeSingle();

    setUsdcBalance(data ? Number(data.usdc_balance) : 0);
    setLoading(false);
  };

  useEffect(() => {
    fetchBalance();
  }, [user]);

  return { usdcBalance, loading, refetch: fetchBalance };
}
