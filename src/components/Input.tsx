import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className = '', ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={`
                        w-full px-4 py-3 rounded-lg bg-zinc-900 
                        border border-zinc-800 text-white
                        placeholder:text-zinc-600
                        focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50
                        transition-all duration-200
                        ${error ? 'border-red-500' : ''}
                        ${className}
                    `}
                    {...props}
                />
                {error && (
                    <p className="mt-1 text-sm text-red-400">{error}</p>
                )}
            </div>
        )
    }
)

Input.displayName = 'Input'

export default Input
