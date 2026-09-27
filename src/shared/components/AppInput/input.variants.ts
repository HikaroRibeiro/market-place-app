import { tv, type VariantProps } from "tailwind-variants";

// No "tv" passa um objeto com as classes css;
export const appInputVariants = tv({
    slots: {
        container: "w-full my-4",
        wrapper: "flex-row items-center border-b border-gray-200 pb-5",
        input: "bg-transparent text-gray-500 placeholder:text-gray-400 text-base flex-1",
        label: "mb-1 text-gray-300 text-xs font-semibold",
        error: "text-red-500 text-sm text-danger mt-1",
    },
    variants: {
        isFocused: {
            true: {},
        },
        isError: {
            true: {},
        },
        isDisabled: {
            true: {},
        }
    },
    defaultVariants: {
        isFocused: false,
        isError: false,
        isDisabled: false
    },
    })