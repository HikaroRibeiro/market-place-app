import { tv, type VariantProps } from "tailwind-variants";

export const appButtonVariants = tv({
    slots: {
        base: "w-full h-[48px] rounded-[10px] border px-4 flex-row items-center"
    },
    variants: {},
    defaultVariants: {}
})

export type AppButtonVariantsProps = VariantProps<typeof appButtonVariants>