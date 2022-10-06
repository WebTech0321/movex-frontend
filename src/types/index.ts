export type TYPE_SIZE = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;

export const variants = {
    DEFAULT: "default",
    PRIMARY: "primary",
    SECONDARY: "secondary",
} as const;

export type VARIANT = typeof variants[keyof typeof variants];

export interface TOKEN {
    name: string,
    icon: JSX.Element
};

export interface TOKENS {
    [key: string]: TOKEN
};
