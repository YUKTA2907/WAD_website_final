import React from 'react';

export default function ProjectIllustration({ id }) {
  switch (id) {
    case 'risc-v-pynq':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="fpgaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <pattern id="fpgaGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 240, 255, 0.1)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="400" height="220" fill="#080e1c" />
          <rect width="400" height="220" fill="url(#fpgaGrid)" />

          {/* FPGA Chip Base */}
          <rect x="50" y="35" width="300" height="150" rx="12" fill="#0c1529" stroke="url(#fpgaGrad)" strokeWidth="2" />
          
          {/* Internal Functional Blocks */}
          <rect x="70" y="55" width="75" height="50" rx="6" fill="#132342" stroke="#00f0ff" strokeWidth="1.2" />
          <text x="107" y="78" fill="#00f0ff" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">RV32I</text>
          <text x="107" y="93" fill="#94a3b8" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">Softcore</text>

          {/* Interconnect Bus */}
          <line x1="145" y1="80" x2="175" y2="80" stroke="#00f0ff" strokeWidth="2.5" strokeDasharray="3 3" />
          <polygon points="175,76 182,80 175,84" fill="#00f0ff" />

          {/* CORDIC Accelerator Block */}
          <rect x="182" y="55" width="85" height="50" rx="6" fill="#132342" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="224" y="77" fill="#38bdf8" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">CORDIC</text>
          <text x="224" y="92" fill="#94a3b8" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">Accelerator</text>

          {/* FOC Controller Block */}
          <rect x="120" y="120" width="160" height="48" rx="6" fill="#172b53" stroke="#818cf8" strokeWidth="1.2" />
          <text x="200" y="140" fill="#c7d2fe" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">Field-Oriented Control</text>
          <text x="200" y="154" fill="#94a3b8" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">Clarke/Park • PI Loops • PWM</text>

          {/* Motor Feedback Connection */}
          <line x1="280" y1="144" x2="320" y2="144" stroke="#818cf8" strokeWidth="2" />
          <circle cx="328" cy="144" r="8" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
          <text x="328" y="147" fill="#818cf8" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">M</text>

          {/* Hardware Stats Badge */}
          <rect x="285" y="45" width="55" height="20" rx="4" fill="#00f0ff" fillOpacity="0.1" stroke="#00f0ff" strokeWidth="0.8" />
          <text x="312" y="58" fill="#00f0ff" fontSize="7.5" fontFamily="JetBrains Mono" textAnchor="middle">PYNQ-Z2</text>
        </svg>
      );

    case 'headlight-control':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="beamGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="#090f1d" />

          {/* ESP32 Controller Card */}
          <rect x="40" y="50" width="130" height="120" rx="10" fill="#0f1c36" stroke="#00f0ff" strokeWidth="1.5" />
          <text x="105" y="78" fill="#00f0ff" fontSize="12" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">ESP32 SoC</text>
          <text x="105" y="96" fill="#94a3b8" fontSize="8.5" fontFamily="JetBrains Mono" textAnchor="middle">Dual-Core Micro</text>
          
          <rect x="55" y="115" width="100" height="35" rx="4" fill="#16294e" />
          <text x="105" y="130" fill="#38bdf8" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">12-bit SAR ADC</text>
          <text x="105" y="142" fill="#cbd5e1" fontSize="7.5" fontFamily="JetBrains Mono" textAnchor="middle">Hysteresis Logic</text>

          {/* LDR Sensor Input */}
          <circle cx="105" cy="22" r="12" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="105" y="26" fill="#f59e0b" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">LDR</text>
          <line x1="105" y1="34" x2="105" y2="50" stroke="#f59e0b" strokeWidth="2" strokeDasharray="2 2" />

          {/* Output Signal Traces */}
          <path d="M 170 90 L 230 90 L 230 110 L 260 110" fill="none" stroke="#00f0ff" strokeWidth="2" />
          <polygon points="260,106 268,110 260,114" fill="#00f0ff" />

          {/* Headlight Luminaire & Beam */}
          <path d="M 270 95 L 300 80 L 300 140 L 270 125 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <polygon points="300,85 380,45 380,175 300,135" fill="url(#beamGrad)" />
          
          <text x="330" y="115" fill="#fef08a" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">AUTO BEAM</text>
          <text x="330" y="130" fill="#fde68a" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">High / Low Switching</text>
        </svg>
      );

    case 'viterbi-encoder':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
          <rect width="400" height="220" fill="#080e1c" />

          {/* Serial Input */}
          <text x="25" y="90" fill="#00f0ff" fontSize="9" fontFamily="JetBrains Mono">Input</text>
          <text x="25" y="103" fill="#64748b" fontSize="8" fontFamily="JetBrains Mono">D_in</text>
          <line x1="55" y1="95" x2="90" y2="95" stroke="#00f0ff" strokeWidth="2" />
          <polygon points="90,92 96,95 90,98" fill="#00f0ff" />

          {/* Shift Registers DFF Stages */}
          <rect x="96" y="70" width="46" height="50" rx="4" fill="#0f1c36" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="119" y="92" fill="#38bdf8" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">S[0]</text>
          <text x="119" y="107" fill="#64748b" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">D-FF</text>

          <line x1="142" y1="95" x2="168" y2="95" stroke="#38bdf8" strokeWidth="2" />

          <rect x="168" y="70" width="46" height="50" rx="4" fill="#0f1c36" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="191" y="92" fill="#38bdf8" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">S[1]</text>
          <text x="191" y="107" fill="#64748b" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">D-FF</text>

          <line x1="214" y1="95" x2="240" y2="95" stroke="#38bdf8" strokeWidth="2" />

          <rect x="240" y="70" width="46" height="50" rx="4" fill="#0f1c36" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="263" y="92" fill="#38bdf8" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">S[2]</text>
          <text x="263" y="107" fill="#64748b" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">D-FF</text>

          {/* XOR Generators */}
          <circle cx="320" cy="55" r="16" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1.5" />
          <text x="320" y="58" fill="#c084fc" fontSize="12" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">⊕</text>
          <text x="355" y="58" fill="#c084fc" fontSize="8" fontFamily="JetBrains Mono">G1(D)</text>

          <circle cx="320" cy="135" r="16" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1.5" />
          <text x="320" y="138" fill="#c084fc" fontSize="12" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">⊕</text>
          <text x="355" y="138" fill="#c084fc" fontSize="8" fontFamily="JetBrains Mono">G2(D)</text>

          {/* Tap lines */}
          <path d="M 75 95 L 75 45 L 304 45" fill="none" stroke="#a78bfa" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M 119 70 L 119 55 L 304 55" fill="none" stroke="#a78bfa" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M 191 120 L 191 135 L 304 135" fill="none" stroke="#a78bfa" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M 263 120 L 263 145 L 304 145" fill="none" stroke="#a78bfa" strokeWidth="1" strokeDasharray="2 2" />

          {/* Clock Pulse Indicator */}
          <path d="M 96 175 L 108 175 L 108 160 L 120 160 L 120 175 L 132 175" fill="none" stroke="#00f0ff" strokeWidth="1.5" />
          <text x="145" y="172" fill="#00f0ff" fontSize="8" fontFamily="JetBrains Mono">CLK_SYNC</text>
          
          <rect x="250" y="175" width="120" height="22" rx="4" fill="#00f0ff" fillOpacity="0.1" stroke="#00f0ff" strokeWidth="0.8" />
          <text x="310" y="190" fill="#00f0ff" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">Rate 1/2 • K=3 Viterbi</text>
        </svg>
      );

    case 'expense-tracker':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
          <rect width="400" height="220" fill="#080e1c" />

          {/* Analytics Dashboard UI representation */}
          <rect x="35" y="30" width="330" height="160" rx="8" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.2" />

          {/* Top Bar */}
          <rect x="35" y="30" width="330" height="25" rx="8" fill="#1e293b" />
          <circle cx="50" cy="42" r="3.5" fill="#ef4444" />
          <circle cx="62" cy="42" r="3.5" fill="#f59e0b" />
          <circle cx="74" cy="42" r="3.5" fill="#10b981" />
          <text x="200" y="46" fill="#94a3b8" fontSize="8.5" fontFamily="JetBrains Mono" textAnchor="middle">Expense Analytics • SQLite DB</text>

          {/* Bar Chart Bars */}
          <rect x="60" y="130" width="22" height="40" rx="3" fill="#3b82f6" />
          <rect x="95" y="100" width="22" height="70" rx="3" fill="#00f0ff" />
          <rect x="130" y="115" width="22" height="55" rx="3" fill="#8b5cf6" />
          <rect x="165" y="85" width="22" height="85" rx="3" fill="#10b981" />
          <rect x="200" y="120" width="22" height="50" rx="3" fill="#f59e0b" />

          {/* Spending Trend Line */}
          <path d="M 71 125 Q 106 90 141 110 T 211 115" fill="none" stroke="#ec4899" strokeWidth="2.5" />

          {/* Pie/Donut Chart */}
          <circle cx="295" cy="120" r="35" fill="none" stroke="#1e293b" strokeWidth="16" />
          <circle cx="295" cy="120" r="35" fill="none" stroke="#00f0ff" strokeWidth="16" strokeDasharray="140 220" />
          <circle cx="295" cy="120" r="35" fill="none" stroke="#8b5cf6" strokeWidth="16" strokeDasharray="60 220" strokeDashoffset="-140" />

          <text x="295" y="123" fill="#f8fafc" fontSize="8.5" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">Pandas</text>
        </svg>
      );

    case 'fashion-mnist-ann':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
          <rect width="400" height="220" fill="#080e1c" />

          {/* Input Layer (28x28) */}
          <rect x="35" y="65" width="45" height="90" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
          <text x="57" y="105" fill="#38bdf8" fontSize="8.5" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">28×28</text>
          <text x="57" y="120" fill="#64748b" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">Input</text>

          {/* Hidden Layer 1 Nodes */}
          {[60, 85, 110, 135, 160].map((y, i) => (
            <circle key={i} cx="150" cy={y} r="8" fill="#1e293b" stroke="#00f0ff" strokeWidth="1.5" />
          ))}
          <text x="150" y="185" fill="#00f0ff" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">Dense (ReLU)</text>

          {/* Hidden Layer 2 Nodes */}
          {[72, 98, 124, 148].map((y, i) => (
            <circle key={i} cx="240" cy={y} r="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
          ))}
          <text x="240" y="185" fill="#8b5cf6" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">Dropout 0.2</text>

          {/* Output Layer 10 Classes */}
          {[80, 105, 130].map((y, i) => (
            <circle key={i} cx="330" cy={y} r="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
          ))}
          <text x="330" y="155" fill="#64748b" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">•••</text>
          <text x="330" y="185" fill="#10b981" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">Softmax (10)</text>

          {/* Connecting Synaptic Weights */}
          <line x1="80" y1="110" x2="142" y2="85" stroke="rgba(0, 240, 255, 0.25)" strokeWidth="0.8" />
          <line x1="80" y1="110" x2="142" y2="110" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="0.8" />
          <line x1="80" y1="110" x2="142" y2="135" stroke="rgba(0, 240, 255, 0.25)" strokeWidth="0.8" />

          <line x1="158" y1="110" x2="232" y2="98" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="0.8" />
          <line x1="158" y1="110" x2="232" y2="124" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="0.8" />

          <line x1="248" y1="124" x2="322" y2="105" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="0.8" />

          {/* Accuracy Metric Badge */}
          <rect x="230" y="25" width="135" height="24" rx="6" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="1" />
          <text x="297" y="41" fill="#34d399" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">Accuracy: 84.58%</text>
        </svg>
      );

    case 'credit-card-fraud':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
          <rect width="400" height="220" fill="#080e1c" />

          {/* ROC-AUC Curve Simulation */}
          <line x1="60" y1="170" x2="340" y2="170" stroke="#475569" strokeWidth="1.5" />
          <line x1="60" y1="170" x2="60" y2="40" stroke="#475569" strokeWidth="1.5" />

          {/* Axis Labels */}
          <text x="200" y="195" fill="#94a3b8" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">False Positive Rate (1 - Specificity)</text>
          <text x="30" y="105" fill="#94a3b8" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle" transform="rotate(-90 30 105)">True Positive Rate</text>

          {/* Diagonal Random Guess line */}
          <line x1="60" y1="170" x2="340" y2="40" stroke="#334155" strokeWidth="1.2" strokeDasharray="4 4" />

          {/* High-Performance ROC Curve */}
          <path d="M 60 170 Q 70 50 340 40" fill="none" stroke="#00f0ff" strokeWidth="2.5" />

          {/* Shaded AUC Area */}
          <path d="M 60 170 Q 70 50 340 40 L 340 170 Z" fill="#00f0ff" fillOpacity="0.08" />

          {/* Anomaly Detection Tag */}
          <rect x="80" y="60" width="130" height="42" rx="6" fill="#0f172a" stroke="#ec4899" strokeWidth="1.2" />
          <text x="145" y="78" fill="#f472b6" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">Class Imbalance</text>
          <text x="145" y="93" fill="#cbd5e1" fontSize="7.5" fontFamily="JetBrains Mono" textAnchor="middle">Precision • Recall • F1</text>
        </svg>
      );

    case 'traffic-light-system':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
          <rect width="400" height="220" fill="#080e1c" />

          {/* Traffic Signal Housing */}
          <rect x="80" y="25" width="60" height="170" rx="14" fill="#0f172a" stroke="#475569" strokeWidth="2" />

          {/* Red Light */}
          <circle cx="110" cy="55" r="18" fill="#ef4444" stroke="#f87171" strokeWidth="2" filter="drop-shadow(0px 0px 8px #ef4444)" />
          {/* Yellow Light */}
          <circle cx="110" cy="110" r="18" fill="#eab308" stroke="#facc15" strokeWidth="1.5" fillOpacity="0.8" />
          {/* Green Light */}
          <circle cx="110" cy="165" r="18" fill="#10b981" stroke="#34d399" strokeWidth="2" filter="drop-shadow(0px 0px 8px #10b981)" />

          {/* Arduino UNO representation */}
          <rect x="180" y="55" width="160" height="110" rx="8" fill="#006699" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="260" y="80" fill="#ffffff" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">ARDUINO UNO</text>
          <text x="260" y="96" fill="#7dd3fc" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">ATmega328P • Timed FSM</text>

          {/* GPIO Pins */}
          <rect x="195" y="115" width="130" height="35" rx="4" fill="#0c4a6e" />
          <text x="260" y="130" fill="#e0f2fe" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">Red: 30s | Yel: 5s | Grn: 25s</text>
          <text x="260" y="142" fill="#38bdf8" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle">Deterministic GPIO Sequencer</text>

          {/* Connecting bus wires */}
          <line x1="140" y1="55" x2="180" y2="75" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="140" y1="110" x2="180" y2="105" stroke="#eab308" strokeWidth="1.5" />
          <line x1="140" y1="165" x2="180" y2="135" stroke="#10b981" strokeWidth="1.5" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover">
          <rect width="400" height="220" fill="#080e1c" />
          <text x="200" y="115" fill="#00f0ff" fontSize="12" fontFamily="JetBrains Mono" textAnchor="middle">Engineering System</text>
        </svg>
      );
  }
}
