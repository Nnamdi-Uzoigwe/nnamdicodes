interface LabelProps {
    name: string
}

export default function Label({ name }:LabelProps) { 
    return (
        <div className='bg-white/90 dark:bg-white/10 backdrop-blur-sm rounded-full text-[#808080] dark:text-gray-300 text-xs border border-white dark:border-gray-500 p-2'>
            {name}
        </div>
    )
}