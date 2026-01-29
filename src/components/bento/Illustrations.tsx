

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

export const AuthIllustration = () => (
    <div className="relative w-full h-full overflow-hidden">
        {/* Content shifted left to create cut-off effect on both sides */}
        <div
            className="absolute inset-0 flex flex-col justify-center gap-4 py-4"
            style={{ left: '-15px', right: '-40px' }}
        >
            {/* User Row 1 */}
            <div className="flex items-stretch gap-8">
                {/* Email - partially cut on left */}
                <div className="bg-zinc-900/70 rounded-lg px-5 py-4 border border-zinc-800/60 flex-shrink-0">
                    <span className="text-[12px] text-zinc-400 font-mono whitespace-nowrap">s160198@gmail.com</span>
                </div>
                {/* Username - partially cut on right */}
                <div className="bg-zinc-900/70 rounded-lg px-5 py-4 border border-zinc-800/60 flex-shrink-0">
                    <span className="text-[12px] text-zinc-300 font-mono whitespace-nowrap">alex160198</span>
                </div>
            </div>

            {/* User Row 2 */}
            <div className="flex items-stretch gap-8">
                {/* Email - partially cut on left */}
                <div className="bg-zinc-900/70 rounded-lg px-5 py-4 border border-zinc-800/60 flex-shrink-0">
                    <span className="text-[12px] text-zinc-400 font-mono whitespace-nowrap">x234567@gmail.com</span>
                </div>
                {/* Username - partially cut on right */}
                <div className="bg-zinc-900/70 rounded-lg px-5 py-4 border border-zinc-800/60 flex-shrink-0">
                    <span className="text-[12px] text-zinc-300 font-mono whitespace-nowrap">mememaster000</span>
                </div>
            </div>
        </div>
    </div>
);

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
