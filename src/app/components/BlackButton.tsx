interface childrenProps {
    icon: React.ReactNode,
    text: string
}

export default function BlackButton({ icon, text }: childrenProps) {
    return (
        <div className="bg-black w-full lg:w-fit dark:bg-linear-to-b from-[#1b1a1a] to-[#181616] dark:shadow-xl py-3 px-6 rounded-md text-white flex justify-center gap-2 items-center">
            {icon && (
                <span>{icon}</span>
            )}
            {text}
        </div>
    )
}