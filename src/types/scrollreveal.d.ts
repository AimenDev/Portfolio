declare module "scrollreveal" {
  interface ScrollRevealOptions {
    origin?: string;
    distance?: string;
    duration?: number;
    delay?: number;
    reset?: boolean;
    opacity?: number;
    interval?: number;
    scale?: number;
    easing?: string;
    cleanup?: boolean;
    mobile?: boolean;
    useDelay?: string;
    viewFactor?: number;
    viewOffset?: { top?: number; right?: number; bottom?: number; left?: number };
  }

  interface ScrollRevealObject {
    reveal(selector: string, options?: ScrollRevealOptions): ScrollRevealObject;
    clean(selector: string): void;
    destroy(): void;
    sync(): void;
  }

  export default function scrollreveal(
    options?: ScrollRevealOptions
  ): ScrollRevealObject;
}
