
export default function Paper({ className = "", children } : { className?: string, children?: React.ReactNode } ) {
    return (
        <div className={`h-full w-full rounded-xl shadow-xs bg-white border border-gray-200 dark:border dark:border-gray-700 dark:bg-slate-900 ${className}`}>
            {children}
        </div>
    )
}