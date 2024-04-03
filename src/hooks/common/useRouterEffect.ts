import usePageEffectContext from "@Contexts/PageEffectContext";
import { usePathname, useRouter } from "next/navigation";

export default function useRouterEffect(): {
  routerEffect: ({ url, pageName }: { url: string; pageName?: string }) => void;
} {
  const { pageTransitionIn, setPageUrl, setPageName } = usePageEffectContext();
  const router = useRouter();
  const pathName = usePathname();
  const { isReadyInteractive } = usePageEffectContext();

  const routerEffect = ({
    url,
    pageName,
  }: {
    url: string;
    pageName?: string;
  }): void => {
    if (url === pathName || !isReadyInteractive) return;
    setPageName(pageName || "OnchainBlock");
    router.prefetch(url);
    setPageUrl(url);
    pageTransitionIn();
  };

  return { routerEffect };
}
