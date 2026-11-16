import '../scripts/script.js';

/**
 * Small typed enhancements shared by the portfolio pages.
 * The main site interactions and data rendering live in scripts/script.js.
 */
function initializePortfolioEnhancements(): void {
  const yearTargets: NodeListOf<HTMLElement> =
    document.querySelectorAll<HTMLElement>('[data-current-year]');

  const currentYear: string = String(new Date().getFullYear());
  yearTargets.forEach((element: HTMLElement): void => {
    element.textContent = currentYear;
  });

  // Add a keyboard-friendly focus class for users navigating without a mouse.
  document.addEventListener('keydown', (event: KeyboardEvent): void => {
    if (event.key === 'Tab') {
      document.documentElement.classList.add('keyboard-navigation');
    }
  });

  document.addEventListener('pointerdown', (): void => {
    document.documentElement.classList.remove('keyboard-navigation');
  }, { passive: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePortfolioEnhancements, { once: true });
} else {
  initializePortfolioEnhancements();
}
