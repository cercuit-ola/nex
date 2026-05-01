import { RainbowKitProvider, darkTheme, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { base, baseSepolia } from "wagmi/chains";
import { http } from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import type { ReactNode } from "react";

// ─── Wagmi / RainbowKit config ────────────────────────────────────────────────
// Defined once at module level so it's never re-created on re-render.

const wagmiConfig = getDefaultConfig({
  appName: "NexolPay",
  projectId: "04b988c5b0e42c0e35b465fa15e5f5a4",
  chains: [base, baseSepolia],
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http(),
  },
  ssr: false,
});

const rainbowTheme = darkTheme({
  accentColor: "hsl(156, 100%, 50%)",
  accentColorForeground: "black",
  borderRadius: "medium",
  overlayBlur: "small",
});

// ─── Provider ─────────────────────────────────────────────────────────────────
// NOTE: QueryClient is intentionally NOT created here.
// The single shared QueryClient lives in App.tsx so both React Query
// and RainbowKit share the same cache and devtools instance.

export function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <RainbowKitProvider theme={rainbowTheme}>{children}</RainbowKitProvider>
    </WagmiProvider>
  );
}
