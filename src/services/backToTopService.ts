export function shouldShowBackToTop(
  anchorId: string,
  fallbackScrollY: number
): boolean {
  const anchor = document.getElementById(anchorId);

  if (anchor) {
    const rect = anchor.getBoundingClientRect();
    // mostra quando o topo do anchor passou do topo da tela
    return rect.top <= 0;
  }

  // fallback se não achar o anchor
  return window.scrollY > fallbackScrollY;
}

export function scrollToTopSmooth(): void {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
