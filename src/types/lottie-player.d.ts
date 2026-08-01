declare module "@lottiefiles/react-lottie-player" {
  import { ComponentPropsWithoutRef } from "react";

  interface PlayerProps extends ComponentPropsWithoutRef<"div"> {
    autoplay?: boolean;
    loop?: boolean;
    src: string;
    speed?: number;
    direction?: 1 | -1;
    background?: string;
    hover?: boolean;
    keepLastFrame?: boolean;
    renderer?: "svg" | "canvas" | "html";
    onEvent?: (event: string) => void;
  }

  export const Player: React.FC<PlayerProps>;
}
