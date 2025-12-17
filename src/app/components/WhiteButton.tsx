interface childrenProps {
    icon: React.ReactNode,
    text: string
}

export default function WhiteButton({ icon, text }: childrenProps) {
    return (
        <div className="bg-[#d8d8d8] w-full lg:w-fit font-semibold dark:bg-linear-to-b from-[#1b1a1a] to-[#181616] dark:shadow-xl py-3 px-6 rounded-md text-gray-800 dark:text-white flex justify-center gap-2 items-center">
            {icon && (
                <span>{icon}</span>
            )}
            {text}
        </div>
    )
}