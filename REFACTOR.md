# NexolPay — Refactored Source

## What changed (and why)

### 1. Fixed: Duplicate `QueryClient` (Bug)

**Before** — `App.tsx` and `Web3Provider.tsx` each created their own `QueryClient`.
This silently split the cache between React Query hooks and RainbowKit, causing
stale data and redundant network requests.

**After** — A single `QueryClient` is created in `App.tsx` and passed down.
`Web3Provider` no longer owns one.

---

### 2. Split: `LandingPage.tsx` monolith → section components

**Before** — 330 lines in one file with all sections inline and helper components
(`ToolCard`, `FooterCol`) buried at the bottom.

**After** — `LandingPage.tsx` is now 14 lines that compose:

```
src/components/landing/
  LandingPage.tsx               ← composition only
  sections/
    LandingNavbar.tsx
    HeroSection.tsx
    ToolsSection.tsx            ← owns ToolCard sub-component
    SecuritySection.tsx
    PricingSection.tsx
    LandingFooter.tsx           ← owns FooterCol sub-component
    misc.tsx                    ← RealitySection, DashboardPreviewSection, CtaSection
```

Edit any section in isolation without touching others.

---

### 3. Extracted: `useUserWallet` hook

**Before** — `Dashboard.tsx` and `DashboardOverview.tsx` each fetched
`user_wallets.usdc_balance` independently, making two Supabase calls on every
dashboard load.

**After** — `src/hooks/useUserWallet.ts` is used by both. One fetch, shared state.

---

### 4. Cleaned: `Auth.tsx` state machine

**Before** — Three separate booleans (`isLogin`, `isForgot`) that had to be kept
in sync.

**After** — A single `mode: "login" | "signup" | "forgot"` enum. Labels/headings
are derived from lookup objects instead of ternary chains.

---

### 5. Added: `src/types/index.ts`

Shared TypeScript interfaces (`VaultDeposit`, `Redemption`, `UserWallet`,
`NavItem`, `SidebarItem`) in one place instead of re-declared per file.

---

### 6. Cleaned: `NavLink` component

Typed properly with `NavLinkProps` and uses the `cn()` utility instead of
manual string concatenation.

---

## Project structure

```
src/
  App.tsx                         # provider tree, routes
  main.tsx
  index.css
  vite-env.d.ts
  types/
    index.ts                      # shared TS interfaces
  lib/
    utils.ts                      # cn(), truncateAddress(), formatCurrency()
  config/
    web3.ts                       # contract addresses, ERC20 ABI
  integrations/
    supabase/
      client.ts
      types.ts
  contexts/
    AuthContext.tsx                # useAuth hook + AuthProvider
  providers/
    Web3Provider.tsx              # Wagmi + RainbowKit (no own QueryClient)
  hooks/
    useUserWallet.ts              # shared wallet balance hook
    useVaultPositions.ts
    use-toast.ts
    use-mobile.tsx
  components/
    NavLink.tsx
    ui/                           # shadcn/ui (unchanged)
    landing/
      LandingPage.tsx             # composes sections
      sections/
        LandingNavbar.tsx
        HeroSection.tsx
        ToolsSection.tsx
        SecuritySection.tsx
        PricingSection.tsx
        LandingFooter.tsx
        misc.tsx
    dashboard/
      DashboardSidebar.tsx
      DashboardOverview.tsx
      GiftCardPage.tsx
      PaymentScheduler.tsx
      VaultFeature.tsx
      WalletDashboard.tsx
      YieldCalculator.tsx
  pages/
    Index.tsx
    Auth.tsx
    Dashboard.tsx
    ResetPassword.tsx
    AdminDashboard.tsx
    AdminGiftCards.tsx
    NotFound.tsx
```
