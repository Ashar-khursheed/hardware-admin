"use client";
import { useState } from "react";
import { QueryClientProvider, Hydrate, QueryClient } from "@tanstack/react-query";
import SettingProvider from "@/Helper/SettingContext/SettingProvider";
import AccountProvider from "@/Helper/AccountContext/AccountProvider";
import BadgeProvider from "@/Helper/BadgeContext/BadgeProvider";
import CategoryProvider from "@/Helper/CategoryContext/CategoryProvider";
import CartProvider from "@/Helper/CartContext/CartProvider";
import MenuProvider from "@/Helper/MenuContext/MenuProvider";

const TanstackWrapper = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Data is considered fresh for 30 seconds — avoids re-fetching
            // on tab-switch or component re-mount within that window
            staleTime: 30_000,
            // Keep inactive cache entries for 5 minutes before garbage-collecting
            cacheTime: 5 * 60_000,
            // Only retry a failed request once instead of the default 3 times
            retry: 1,
            // Do not refetch on window focus globally (individual queries can override)
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={children.dehydratedState}>
        <SettingProvider>
          <AccountProvider>
            <BadgeProvider>
              <CategoryProvider>
                <CartProvider>
                  <MenuProvider>{children}</MenuProvider>
                </CartProvider>
              </CategoryProvider>
            </BadgeProvider>
          </AccountProvider>
        </SettingProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default TanstackWrapper;
