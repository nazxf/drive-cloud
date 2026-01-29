

export const CloudDatabaseIllustration = () => (
    <div className="w-full h-full flex items-center justify-center p-2">
        <svg viewBox="0 0 200 160" className="w-full h-full max-w-[200px]">
            <defs>
                {/* Gradients for 3D effect */}
                <linearGradient id="serverTop" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3f3f46" />
                    <stop offset="100%" stopColor="#27272a" />
                </linearGradient>
                <linearGradient id="serverFront" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#27272a" />
                    <stop offset="100%" stopColor="#18181b" />
                </linearGradient>
                <linearGradient id="serverRight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1f1f23" />
                    <stop offset="100%" stopColor="#0f0f12" />
                </linearGradient>
                <linearGradient id="glowGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.4" />
                </linearGradient>
                {/* Shadow filter */}
                <filter id="serverShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="4" dy="8" stdDeviation="4" floodColor="#000" floodOpacity="0.4" />
                </filter>
            </defs>

            {/* Main 3D Server Stack */}
            <g transform="translate(100, 80)" filter="url(#serverShadow)">

                {/* Server Unit 3 (Bottom) */}
                <g transform="translate(0, 30)">
                    {/* Top face */}
                    <polygon points="-50,-8 0,-20 50,-8 0,4" fill="url(#serverTop)" stroke="#52525b" strokeWidth="0.5" />
                    {/* Front face */}
                    <polygon points="-50,-8 -50,8 0,20 0,4" fill="url(#serverFront)" stroke="#3f3f46" strokeWidth="0.5" />
                    {/* Right face */}
                    <polygon points="0,4 0,20 50,8 50,-8" fill="url(#serverRight)" stroke="#3f3f46" strokeWidth="0.5" />
                    {/* LED lights on front */}
                    <circle cx="-35" cy="2" r="2.5" fill="#10b981">
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="-27" cy="4" r="2.5" fill="#10b981" opacity="0.7">
                        <animate attributeName="opacity" values="0.7;0.4;0.7" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="-19" cy="6" r="2" fill="#fbbf24" opacity="0.5" />
                    {/* Ventilation on right side */}
                    <g stroke="#27272a" strokeWidth="1.5" opacity="0.6">
                        <line x1="15" y1="2" x2="35" y2="-4" />
                        <line x1="15" y1="6" x2="35" y2="0" />
                        <line x1="15" y1="10" x2="35" y2="4" />
                    </g>
                </g>

                {/* Server Unit 2 (Middle) */}
                <g transform="translate(0, 4)">
                    {/* Top face */}
                    <polygon points="-50,-8 0,-20 50,-8 0,4" fill="url(#serverTop)" stroke="#52525b" strokeWidth="0.5" />
                    {/* Front face */}
                    <polygon points="-50,-8 -50,8 0,20 0,4" fill="url(#serverFront)" stroke="#3f3f46" strokeWidth="0.5" />
                    {/* Right face */}
                    <polygon points="0,4 0,20 50,8 50,-8" fill="url(#serverRight)" stroke="#3f3f46" strokeWidth="0.5" />
                    {/* LED lights on front */}
                    <circle cx="-35" cy="2" r="2.5" fill="#10b981">
                        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="-27" cy="4" r="2.5" fill="#10b981">
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="-19" cy="6" r="2" fill="#10b981" opacity="0.6" />
                    {/* Ventilation on right side */}
                    <g stroke="#27272a" strokeWidth="1.5" opacity="0.6">
                        <line x1="15" y1="2" x2="35" y2="-4" />
                        <line x1="15" y1="6" x2="35" y2="0" />
                        <line x1="15" y1="10" x2="35" y2="4" />
                    </g>
                </g>

                {/* Server Unit 1 (Top) */}
                <g transform="translate(0, -22)">
                    {/* Top face */}
                    <polygon points="-50,-8 0,-20 50,-8 0,4" fill="url(#serverTop)" stroke="#52525b" strokeWidth="0.5" />
                    {/* Front face */}
                    <polygon points="-50,-8 -50,8 0,20 0,4" fill="url(#serverFront)" stroke="#3f3f46" strokeWidth="0.5" />
                    {/* Right face */}
                    <polygon points="0,4 0,20 50,8 50,-8" fill="url(#serverRight)" stroke="#3f3f46" strokeWidth="0.5" />
                    {/* LED lights on front */}
                    <circle cx="-35" cy="2" r="2.5" fill="#10b981">
                        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="-27" cy="4" r="2.5" fill="#10b981">
                        <animate attributeName="opacity" values="1;0.6;1" dur="2.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="-19" cy="6" r="2" fill="#10b981" opacity="0.8" />
                    {/* Ventilation on right side */}
                    <g stroke="#27272a" strokeWidth="1.5" opacity="0.6">
                        <line x1="15" y1="2" x2="35" y2="-4" />
                        <line x1="15" y1="6" x2="35" y2="0" />
                        <line x1="15" y1="10" x2="35" y2="4" />
                    </g>
                </g>

                {/* Glow effect behind servers */}
                <ellipse cx="0" cy="60" rx="45" ry="8" fill="#10b981" opacity="0.15">
                    <animate attributeName="opacity" values="0.15;0.25;0.15" dur="3s" repeatCount="indefinite" />
                </ellipse>
            </g>

            {/* Connection dots and lines */}
            <g stroke="#10b981" strokeWidth="1" opacity="0.5">
                {/* Left connection */}
                <line x1="25" y1="90" x2="45" y2="80" strokeDasharray="3,2">
                    <animate attributeName="stroke-dashoffset" values="0;5" dur="1s" repeatCount="indefinite" />
                </line>
                <circle cx="22" cy="92" r="3" fill="#10b981" opacity="0.6" />

                {/* Right connection */}
                <line x1="175" y1="90" x2="155" y2="80" strokeDasharray="3,2">
                    <animate attributeName="stroke-dashoffset" values="0;5" dur="1s" repeatCount="indefinite" />
                </line>
                <circle cx="178" cy="92" r="3" fill="#10b981" opacity="0.6" />
            </g>

            {/* Decorative corner brackets */}
            <g stroke="#10b981" strokeWidth="1" opacity="0.4">
                <path d="M10 10 L22 10 M10 10 L10 22" fill="none" />
                <path d="M190 10 L178 10 M190 10 L190 22" fill="none" />
                <path d="M10 150 L22 150 M10 150 L10 138" fill="none" />
                <path d="M190 150 L178 150 M190 150 L190 138" fill="none" />
            </g>
        </svg>
    </div>
);

export const AuthIllustration = () => {
    // Row data for the security table
    const rows = [
        { id: 1, user: 'alex_dev', data: 'user_profile', access: true, delay: 0 },
        { id: 2, user: 'guest_123', data: 'private_docs', access: false, delay: 0.2 },
        { id: 3, user: 'admin', data: 'all_records', access: true, delay: 0.4 },
        { id: 4, user: 'visitor', data: 'payments', access: false, delay: 0.6 },
    ];

    return (
        <div className="relative w-full h-full p-4 overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/80 pointer-events-none z-10" />

            {/* Decorative glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-red-500/5 rounded-full blur-2xl" />

            {/* Table Header */}
            <div className="flex items-center gap-3 mb-3 px-3 pb-2 border-b border-zinc-800/30">
                <span className="text-[10px] text-zinc-500 font-medium tracking-wider uppercase w-20">User</span>
                <span className="text-[10px] text-zinc-500 font-medium tracking-wider uppercase flex-1">Resource</span>
                <span className="text-[10px] text-zinc-500 font-medium tracking-wider uppercase w-12 text-center">Access</span>
            </div>

            {/* Table Rows */}
            <div className="flex flex-col gap-2 relative">
                {rows.map((row) => (
                    <div
                        key={row.id}
                        className={`
                            flex items-center gap-3 rounded-lg px-3 py-2.5 
                            backdrop-blur-sm transition-all duration-500
                            ${row.access
                                ? 'bg-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/40'
                                : 'bg-red-500/5 border border-red-500/10 hover:border-red-500/30'
                            }
                        `}
                        style={{
                            animation: `slideInFade 0.5s ease-out ${row.delay}s both, rowGlow 4s ease-in-out ${row.delay + 1}s infinite`,
                        }}
                    >
                        {/* User avatar + name */}
                        <div className="flex items-center gap-2 w-20">
                            <div className={`
                                w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold
                                ${row.access
                                    ? 'bg-emerald-500/20 text-emerald-400'
                                    : 'bg-zinc-700/50 text-zinc-400'
                                }
                            `}>
                                {row.user.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-[11px] text-zinc-300 font-mono truncate">
                                {row.user}
                            </span>
                        </div>

                        {/* Data field with icon */}
                        <div className="flex items-center gap-1.5 flex-1">
                            <svg className="w-3 h-3 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
                                <path d="M14 2v5h5" />
                                <path d="M3 15h6" />
                                <path d="M6 12v6" />
                            </svg>
                            <span className="text-[11px] text-zinc-400 font-mono truncate">
                                {row.data}
                            </span>
                        </div>

                        {/* Lock/Unlock Icon with glow */}
                        <div className="w-12 flex justify-center">
                            <div
                                className={`
                                    relative p-1.5 rounded-md transition-all duration-300
                                    ${row.access
                                        ? 'bg-emerald-500/10'
                                        : 'bg-red-500/10'
                                    }
                                `}
                                style={{
                                    animation: row.access
                                        ? `unlockPulse 3s ease-in-out ${row.delay}s infinite`
                                        : `lockPulse 3s ease-in-out ${row.delay}s infinite`,
                                }}
                            >
                                {/* Glow effect */}
                                <div
                                    className={`
                                        absolute inset-0 rounded-md blur-sm
                                        ${row.access ? 'bg-emerald-400/20' : 'bg-red-400/10'}
                                    `}
                                    style={{
                                        animation: `glowPulse 2s ease-in-out ${row.delay}s infinite`,
                                    }}
                                />

                                {row.access ? (
                                    <svg
                                        className="w-4 h-4 text-emerald-400 relative z-10"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-4 h-4 text-red-400/80 relative z-10"
                                        style={{
                                            animation: `lockShake 4s ease-in-out ${row.delay + 1}s infinite`,
                                        }}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes slideInFade {
                    from {
                        opacity: 0;
                        transform: translateX(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes rowGlow {
                    0%, 100% { opacity: 0.85; }
                    50% { opacity: 1; }
                }
                @keyframes unlockPulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                @keyframes lockPulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(0.95); }
                }
                @keyframes glowPulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.6; }
                }
                @keyframes lockShake {
                    0%, 100% { transform: rotate(0deg); }
                    5% { transform: rotate(-3deg); }
                    10% { transform: rotate(3deg); }
                    15% { transform: rotate(-3deg); }
                    20% { transform: rotate(0deg); }
                }
            `}</style>
        </div>
    );
};

export const EdgeFunctionIllustration = () => (
    <div className="relative w-full h-full p-4 flex flex-col">
        <div className="mb-6 bg-zinc-900/80 rounded-lg px-4 py-2.5 border border-emerald-500/40 inline-flex items-center gap-2 self-start">
            <span className="text-emerald-400 text-xs font-bold">$</span>
            <span className="text-xs text-zinc-200 font-mono">teracloud functions deploy</span>
        </div>

        <svg viewBox="0 0 180 80" className="w-full flex-1">
            <g stroke="#10b981" strokeWidth="1" opacity="0.5">
                <line x1="90" y1="15" x2="40" y2="45" />
                <line x1="90" y1="15" x2="90" y2="55" />
                <line x1="90" y1="15" x2="140" y2="45" />
                <line x1="40" y1="45" x2="90" y2="55" />
                <line x1="140" y1="45" x2="90" y2="55" />
                <line x1="40" y1="45" x2="140" y2="45" strokeDasharray="3,3" />
            </g>

            <circle cx="90" cy="15" r="5" fill="#10b981" />
            <circle cx="40" cy="45" r="4" fill="#10b981" opacity="0.7" />
            <circle cx="90" cy="55" r="4" fill="#10b981" opacity="0.7" />
            <circle cx="140" cy="45" r="4" fill="#10b981" opacity="0.7" />

            <circle cx="20" cy="65" r="2" fill="#10b981" opacity="0.3" />
            <circle cx="160" cy="65" r="2" fill="#10b981" opacity="0.3" />
        </svg>
    </div>
);

export const RealtimeIllustration = () => (
    <div className="w-full h-full p-4 flex items-center justify-center relative">
        <svg viewBox="0 0 160 100" className="w-full h-full">
            <g transform="translate(45, 25)">
                <path
                    d="M0 0 L0 24 L6 18 L12 30 L16 28 L10 16 L18 16 Z"
                    fill="#4b5563"
                    stroke="#6b7280"
                    strokeWidth="1"
                />
            </g>
            <g transform="translate(85, 45)">
                <path
                    d="M0 0 L0 24 L6 18 L12 30 L16 28 L10 16 L18 16 Z"
                    fill="#9ca3af"
                    stroke="#d1d5db"
                    strokeWidth="1"
                />
            </g>
            <g transform="translate(120, 50)">
                <circle cx="0" cy="0" r="3" fill="#10b981" />
                <circle cx="10" cy="0" r="3" fill="#10b981" />
                <circle cx="20" cy="0" r="3" fill="#10b981" />
            </g>
        </svg>
    </div>
);

export const VectorIllustration = () => (
    <div className="w-full h-full p-4 flex flex-col items-center justify-center">
        <svg viewBox="0 0 120 100" className="w-full flex-1">
            <g transform="translate(60, 50)">
                <polygon
                    points="0,-35 30,-17 30,17 0,35 -30,17 -30,-17"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1.5"
                />
                <line x1="0" y1="-35" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="30" y1="-17" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="30" y1="17" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="0" y1="35" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="-30" y1="17" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="-30" y1="-17" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />

                <circle cx="0" cy="-35" r="3" fill="#10b981" />
                <circle cx="30" cy="-17" r="3" fill="#10b981" />
                <circle cx="30" cy="17" r="3" fill="#10b981" />
                <circle cx="0" cy="35" r="3" fill="#10b981" />
                <circle cx="-30" cy="17" r="3" fill="#10b981" />
                <circle cx="-30" cy="-17" r="3" fill="#10b981" />
                <circle cx="0" cy="0" r="2" fill="#10b981" opacity="0.6" />
            </g>
        </svg>
    </div>
);

export const DataAPIsIllustration = () => (
    <div className="w-full h-full p-3 flex flex-col gap-1.5 overflow-hidden">
        {[
            { table: 'countries', endpoint: '/v1/countries' },
            { table: 'continents', endpoint: '/v1/continents' },
            { table: 'cities', endpoint: '/v1/cities' },
            { table: 'states', endpoint: '/v1/states' },
            { table: 'country_codes', endpoint: '/v1/country_codes' },
        ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
                <span className="text-[10px] text-zinc-500 font-mono bg-zinc-900/70 px-2 py-1 rounded border border-zinc-800 min-w-[75px] truncate">
                    {item.table}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/30">
                    {item.endpoint}
                </span>
            </div>
        ))}
    </div>
);
