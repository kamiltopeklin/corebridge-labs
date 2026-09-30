export default function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Corebridge Labs home">
      {
        <svg className="brandMark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
          <defs>
            <linearGradient id="ring" x1="90" y1="90" x2="430" y2="410" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#27E7FF" />
              <stop offset=".35" stopColor="#078BFF" />
              <stop offset=".7" stopColor="#2256FF" />
              <stop offset="1" stopColor="#A56BFF" />
            </linearGradient>
            <linearGradient id="bridge" x1="120" y1="300" x2="410" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#20DFFF" />
              <stop offset=".55" stopColor="#3987FF" />
              <stop offset="1" stopColor="#FFE3B0" />
            </linearGradient>
            <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="6" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <path d="M389 119
           A176 176 0 1 0 386 390
           L338 346
           A116 116 0 1 1 341 163
           Z"
            fill="url(#ring)" filter="url(#glow)" />

          <path d="M104 310
           C170 298 226 285 281 270
           C333 256 372 246 414 237
           L418 254
           C372 266 330 277 282 290
           C222 306 166 319 108 329 Z"
            fill="url(#bridge)" filter="url(#glow)" />

          <path d="M294 144 L317 144 L317 305 L294 311 Z"
            fill="url(#bridge)" filter="url(#glow)" />

          <path d="M111 297
           C190 290 248 238 305 162
           C337 207 373 228 416 235"
            fill="none" stroke="url(#bridge)" strokeWidth="9"
            strokeLinecap="round" filter="url(#glow)" />

          <g stroke="#55CFFF" strokeWidth="5" opacity=".92">
            <path d="M165 284 V304" />
            <path d="M198 270 V298" />
            <path d="M230 250 V290" />
            <path d="M260 222 V281" />
            <path d="M339 205 V270" />
            <path d="M367 222 V262" />
            <path d="M393 231 V256" />
          </g>

          <g fill="none" strokeLinecap="round" opacity=".72">
            <path d="M122 344 C194 337 262 326 337 306" stroke="#178DFF" strokeWidth="7" />
            <path d="M132 361 C203 354 257 344 317 328" stroke="#175EFF" strokeWidth="6" />
            <path d="M151 378 C209 373 252 365 295 353" stroke="#373EFF" strokeWidth="5" />
          </g>
        </svg>
      }
      <span className="brandCopy">
        <strong>COREBRIDGE LABS</strong>
        <small>BUILD · SCALE · TOGETHER</small>
      </span>
    </a>
  );
}
