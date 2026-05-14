const KEYFRAMES = `
  @keyframes lm-across {
    0%   { left: -90px; }
    100% { left: calc(100% + 20px); }
  }
  @keyframes lm-reveal {
    0%   { clip-path: inset(0 100% 0 0); }
    100% { clip-path: inset(0 0% 0 0); }
  }
  @keyframes lm-flyA {
    0%   { transform: translate(0,0) scale(1); opacity: 1; }
    100% { transform: translate(-18px,-24px) scale(0.2); opacity: 0; }
  }
  @keyframes lm-flyB {
    0%   { transform: translate(0,0) scale(1); opacity: 0.9; }
    100% { transform: translate(-10px,-30px) scale(0.1); opacity: 0; }
  }
  @keyframes lm-flyC {
    0%   { transform: translate(0,0) scale(1); opacity: 0.8; }
    100% { transform: translate(-24px,-18px) scale(0.15); opacity: 0; }
  }
`

const UNCUT = Array.from({ length: 36 }, (_, i) => ({ x: i * 15 + 3, h: 16 + (i * 11 % 10) }))
const CUT   = Array.from({ length: 36 }, (_, i) => ({ x: i * 15 + 3, h: 5  + (i * 7  % 4)  }))

function MowerScene() {
  return (
    <div className="relative w-full" style={{ height: 90, overflow: 'hidden' }}>
      <style>{KEYFRAMES}</style>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: 16, background: '#4ade80' }} />

      {/* Uncut tall grass — always visible */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        height={90}
        viewBox="0 0 540 90"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ overflow: 'visible' }}
      >
        {UNCUT.map((b, i) => (
          <rect key={i} x={b.x} y={74 - b.h} width={4} height={b.h} rx={2} fill="#15803d" />
        ))}
      </svg>

      {/* Cut short grass — revealed left-to-right in sync with mower */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        height={90}
        viewBox="0 0 540 90"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ clipPath: 'inset(0 100% 0 0)', animation: 'lm-reveal 2s linear infinite' }}
      >
        <rect x={0} y={74} width={540} height={16} fill="#86efac" />
        {CUT.map((b, i) => (
          <rect key={i} x={b.x} y={74 - b.h} width={4} height={b.h} rx={2} fill="#4ade80" />
        ))}
      </svg>

      {/* Mower + person */}
      <div
        className="absolute bottom-0"
        style={{ animation: 'lm-across 2s linear infinite', willChange: 'transform' }}
      >
        <svg
          width={88}
          height={90}
          viewBox="0 0 88 90"
          aria-hidden="true"
          style={{ overflow: 'visible' }}
        >
          {/* Person head */}
          <circle cx="14" cy="22" r="9" fill="#1a3a1a" />
          {/* Body */}
          <rect x="8" y="31" width="13" height="18" rx="3" fill="#1a3a1a" />
          {/* Legs */}
          <rect x="8"  y="49" width="5" height="25" rx="2" fill="#1a3a1a" />
          <rect x="15" y="49" width="5" height="25" rx="2" fill="#1a3a1a" />
          {/* Push handle arm */}
          <line x1="21" y1="42" x2="38" y2="56" stroke="#1a3a1a" strokeWidth="4" strokeLinecap="round" />
          {/* Mower deck top */}
          <rect x="30" y="51" width="40" height="9" rx="3" fill="#16a34a" />
          {/* Mower body */}
          <rect x="26" y="58" width="46" height="16" rx="4" fill="#15803d" />
          {/* Exhaust stack */}
          <rect x="60" y="44" width="7" height="10" rx="2" fill="#14532d" />
          {/* Wheel front */}
          <circle cx="34" cy="76" r="8" fill="#111" />
          <circle cx="34" cy="76" r="3" fill="#333" />
          {/* Wheel back */}
          <circle cx="62" cy="76" r="8" fill="#111" />
          <circle cx="62" cy="76" r="3" fill="#333" />
          {/* Grass clippings flying out from behind the mower */}
          <circle cx="6"  cy="68" r="3.5" fill="#22c55e" style={{ animation: 'lm-flyA 0.55s ease-out infinite' }} />
          <circle cx="1"  cy="63" r="2.2" fill="#4ade80" style={{ animation: 'lm-flyB 0.55s ease-out infinite 0.17s' }} />
          <circle cx="11" cy="61" r="2"   fill="#86efac" style={{ animation: 'lm-flyC 0.55s ease-out infinite 0.33s' }} />
        </svg>
      </div>
    </div>
  )
}

export default function LoadingMower({ fullscreen = false, message = 'Loading...' }) {
  if (fullscreen) {
    return (
      <div
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center px-6"
        style={{ background: 'rgba(26,58,26,0.97)' }}
      >
        <div className="w-full max-w-lg">
          <MowerScene />
        </div>
        <p className="text-white font-extrabold text-xl mt-6 tracking-widest">GREENGUARD LONDON</p>
        <p className="text-green-300 text-sm mt-2">{message}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center py-6 w-full">
      <div className="w-full max-w-sm">
        <MowerScene />
      </div>
      <p className="text-green-700 text-sm mt-3 font-semibold">{message}</p>
    </div>
  )
}
