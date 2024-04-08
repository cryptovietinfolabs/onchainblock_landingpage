"use client";

import { State } from "wagmi";

import { BrandThemeProvider } from "@/contexts/BrandThemeProvider";
import { PageEffectProvider } from "@/contexts/PageEffectContext";
import QueryClientProviders from "@/contexts/QueryClientProvider";
import { ScrollProvider } from "@/contexts/ScrollProvider";
import { UiProvider } from "@/contexts/UiProvider";
import WagmiProviders from "@/contexts/WagmiProvider";

type ProviderType = {
  children: React.ReactNode;
  initialState: State;
};

export default function Providers({
  children,
  initialState,
}: ProviderType): React.ReactElement {
  return (
    <UiProvider>
      <WagmiProviders initialState={initialState}>
        <QueryClientProviders>
          <BrandThemeProvider cookies={"blastTheme"}>
            <PageEffectProvider>
              <ScrollProvider>{children}</ScrollProvider>
            </PageEffectProvider>
          </BrandThemeProvider>
        </QueryClientProviders>
      </WagmiProviders>
    </UiProvider>
  );
}
