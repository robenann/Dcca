<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Data Center Critical Systems — Training Academy</title>
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&family=Exo+2:wght@300;400;600;700&display=swap" rel="stylesheet"/>
<style>
:root {
  --bg: #040810;
  --panel: #080f1c;
  --panel2: #0c1628;
  --border: #1a2f55;
  --accent: #00c8ff;
  --accent2: #00ff9d;
  --accent3: #ff6b35;
  --warn: #ffb800;
  --text: #c8deff;
  --text-dim: #5a7aaa;
  --text-bright: #eaf4ff;
  --danger: #ff3366;
  --glow: 0 0 20px rgba(0,200,255,0.3);
  --glow2: 0 0 20px rgba(0,255,157,0.3);
}
*{box-sizing:border-box;margin:0;padding:0;}
body{
  font-family:'Exo 2',sans-serif;
  background:var(--bg);
  color:var(--text);
  min-height:100vh;
  overflow-x:hidden;
}
body::before{
  content:'';
  position:fixed;top:0;left:0;right:0;bottom:0;
  background:
    radial-gradient(ellipse 80% 50% at 20% 0%, rgba(0,60,120,0.18) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 100%, rgba(0,255,157,0.06) 0%, transparent 60%);
  pointer-events:none;z-index:0;
}

/* GRID BG */
body::after{
  content:'';
  position:fixed;top:0;left:0;right:0;bottom:0;
  background-image:
    linear-gradient(rgba(0,200,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,200,255,0.03) 1px, transparent 1px);
  background-size:40px 40px;
  pointer-events:none;z-index:0;
}

.wrap{position:relative;z-index:1;max-width:1100px;margin:0 auto;padding:0 20px;}

/* HEADER */
header{
  border-bottom:1px solid var(--border);
  padding:20px 0 16px;
  position:sticky;top:0;z-index:100;
  background:rgba(4,8,16,0.92);
  backdrop-filter:blur(12px);
}
.header-inner{
  display:flex;align-items:center;justify-content:space-between;
  max-width:1100px;margin:0 auto;padding:0 20px;
}
.logo{
  font-family:'Rajdhani',sans-serif;
  font-size:1.5rem;font-weight:700;
  color:var(--accent);
  text-shadow:0 0 20px rgba(0,200,255,0.5);
  letter-spacing:2px;
}
.logo span{color:var(--accent2);}
.status-bar{
  display:flex;gap:20px;align-items:center;
  font-family:'Share Tech Mono',monospace;
  font-size:0.72rem;color:var(--text-dim);
}
.status-dot{
  width:7px;height:7px;border-radius:50%;
  background:var(--accent2);
  box-shadow:0 0 8px var(--accent2);
  animation:pulse 2s infinite;
}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.4;}}

/* HERO */
.hero{
  padding:60px 0 40px;
  text-align:center;
}
.hero-tag{
  display:inline-block;
  font-family:'Share Tech Mono',monospace;
  font-size:0.72rem;
  color:var(--accent2);
  letter-spacing:4px;
  border:1px solid rgba(0,255,157,0.3);
  padding:5px 16px;
  border-radius:2px;
  margin-bottom:24px;
  text-transform:uppercase;
}
.hero h1{
  font-family:'Rajdhani',sans-serif;
  font-size:clamp(2.2rem,5vw,3.8rem);
  font-weight:700;
  color:var(--text-bright);
  line-height:1.1;
  margin-bottom:16px;
}
.hero h1 span{
  color:var(--accent);
  text-shadow:0 0 30px rgba(0,200,255,0.6);
}
.hero p{
  font-size:1rem;color:var(--text-dim);
  max-width:560px;margin:0 auto 32px;
  line-height:1.7;
  font-weight:300;
}
.progress-overview{
  display:grid;grid-template-columns:repeat(3,1fr);
  gap:16px;max-width:600px;margin:0 auto 40px;
}
.prog-card{
  background:var(--panel);
  border:1px solid var(--border);
  border-radius:4px;
  padding:16px;
  text-align:center;
}
.prog-card .num{
  font-family:'Rajdhani',sans-serif;
  font-size:2.2rem;font-weight:700;
  color:var(--accent);
  line-height:1;
}
.prog-card .lbl{
  font-family:'Share Tech Mono',monospace;
  font-size:0.65rem;color:var(--text-dim);
  letter-spacing:2px;margin-top:4px;
}

/* MODULES GRID */
.section-title{
  font-family:'Rajdhani',sans-serif;
  font-size:1.4rem;font-weight:700;
  color:var(--text-bright);
  letter-spacing:2px;
  margin-bottom:20px;
  padding-bottom:10px;
  border-bottom:1px solid var(--border);
  display:flex;align-items:center;gap:12px;
}
.section-title::before{
  content:'';
  width:4px;height:24px;
  background:linear-gradient(to bottom,var(--accent),var(--accent2));
  border-radius:2px;
}

.modules-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
  gap:16px;
  margin-bottom:40px;
}
.module-card{
  background:var(--panel);
  border:1px solid var(--border);
  border-radius:6px;
  padding:20px;
  cursor:pointer;
  transition:all 0.25s;
  position:relative;
  overflow:hidden;
}
.module-card::before{
  content:'';
  position:absolute;top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,var(--accent),transparent);
  opacity:0;transition:opacity 0.25s;
}
.module-card:hover{
  border-color:var(--accent);
  transform:translateY(-2px);
  box-shadow:0 8px 30px rgba(0,200,255,0.12);
}
.module-card:hover::before{opacity:1;}
.module-card.completed{
  border-color:rgba(0,255,157,0.4);
}
.module-card.completed::before{
  background:linear-gradient(90deg,var(--accent2),transparent);
  opacity:1;
}
.module-card.active{
  border-color:var(--accent);
  box-shadow:var(--glow);
}
.mod-header{display:flex;align-items:flex-start;gap:14px;margin-bottom:12px;}
.mod-icon{
  width:44px;height:44px;
  border-radius:4px;
  display:flex;align-items:center;justify-content:center;
  font-size:1.4rem;
  flex-shrink:0;
}
.mod-meta{flex:1;}
.mod-number{
  font-family:'Share Tech Mono',monospace;
  font-size:0.62rem;color:var(--text-dim);
  letter-spacing:2px;margin-bottom:4px;
}
.mod-title{
  font-family:'Rajdhani',sans-serif;
  font-size:1.1rem;font-weight:700;
  color:var(--text-bright);line-height:1.2;
}
.mod-desc{font-size:0.82rem;color:var(--text-dim);line-height:1.6;margin-bottom:14px;}
.mod-footer{display:flex;align-items:center;justify-content:space-between;}
.mod-tags{display:flex;gap:6px;flex-wrap:wrap;}
.tag{
  font-family:'Share Tech Mono',monospace;
  font-size:0.58rem;
  padding:3px 8px;
  border-radius:2px;
  border:1px solid;
  letter-spacing:1px;
}
.tag-elec{color:#00c8ff;border-color:rgba(0,200,255,0.3);background:rgba(0,200,255,0.06);}
.tag-mech{color:#ff6b35;border-color:rgba(255,107,53,0.3);background:rgba(255,107,53,0.06);}
.tag-cool{color:#00ff9d;border-color:rgba(0,255,157,0.3);background:rgba(0,255,157,0.06);}
.tag-power{color:#ffb800;border-color:rgba(255,184,0,0.3);background:rgba(255,184,0,0.06);}
.mod-status{
  font-family:'Share Tech Mono',monospace;
  font-size:0.6rem;letter-spacing:1px;
}
.status-done{color:var(--accent2);}
.status-ready{color:var(--text-dim);}
.status-locked{color:var(--border);}

/* MODAL */
.modal-overlay{
  position:fixed;inset:0;
  background:rgba(4,8,16,0.92);
  backdrop-filter:blur(8px);
  z-index:200;
  display:none;
  overflow-y:auto;
}
.modal-overlay.open{display:block;}
.modal{
  max-width:820px;margin:40px auto;
  background:var(--panel);
  border:1px solid var(--border);
  border-radius:8px;
  overflow:hidden;
  position:relative;
}
.modal-header{
  background:var(--panel2);
  border-bottom:1px solid var(--border);
  padding:24px 28px;
  display:flex;align-items:center;justify-content:space-between;
}
.modal-title{
  font-family:'Rajdhani',sans-serif;
  font-size:1.5rem;font-weight:700;
  color:var(--text-bright);
}
.modal-close{
  background:none;border:1px solid var(--border);
  color:var(--text-dim);
  width:36px;height:36px;
  border-radius:4px;cursor:pointer;
  font-size:1.1rem;
  transition:all 0.2s;
}
.modal-close:hover{border-color:var(--danger);color:var(--danger);}
.modal-body{padding:28px;}

/* VIDEO SECTION */
.video-section{margin-bottom:28px;}
.video-label{
  font-family:'Share Tech Mono',monospace;
  font-size:0.65rem;letter-spacing:3px;
  color:var(--accent);
  margin-bottom:10px;
  display:flex;align-items:center;gap:8px;
}
.video-label::after{content:'';flex:1;height:1px;background:var(--border);}
.video-wrapper{
  position:relative;width:100%;
  padding-bottom:56.25%;
  border-radius:4px;overflow:hidden;
  border:1px solid var(--border);
  margin-bottom:10px;
}
.video-wrapper iframe{
  position:absolute;inset:0;width:100%;height:100%;
}
.video-title{
  font-size:0.8rem;color:var(--text-dim);
  font-style:italic;
}
.videos-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
@media(max-width:600px){.videos-grid{grid-template-columns:1fr;}}

/* CONTENT */
.content-section{
  background:var(--panel2);
  border:1px solid var(--border);
  border-radius:4px;
  padding:20px;
  margin-bottom:24px;
}
.content-section h3{
  font-family:'Rajdhani',sans-serif;
  font-size:1.1rem;font-weight:700;
  color:var(--accent);
  margin-bottom:14px;
  letter-spacing:1px;
}
.content-section ul{
  list-style:none;
  display:flex;flex-direction:column;gap:8px;
}
.content-section ul li{
  font-size:0.88rem;
  color:var(--text);
  line-height:1.6;
  padding-left:16px;
  position:relative;
}
.content-section ul li::before{
  content:'▸';
  position:absolute;left:0;
  color:var(--accent2);font-size:0.7rem;
  top:2px;
}

/* QUIZ */
.quiz-section{margin-top:24px;}
.quiz-header{
  font-family:'Rajdhani',sans-serif;
  font-size:1.2rem;font-weight:700;
  color:var(--warn);
  margin-bottom:16px;
  display:flex;align-items:center;gap:10px;
}
.quiz-body{
  background:var(--panel2);
  border:1px solid var(--border);
  border-radius:6px;
  padding:24px;
  min-height:200px;
}
.quiz-question{
  font-size:0.95rem;
  color:var(--text-bright);
  line-height:1.7;
  margin-bottom:20px;
  font-weight:400;
}
.quiz-input{
  width:100%;
  background:var(--bg);
  border:1px solid var(--border);
  border-radius:4px;
  padding:14px;
  color:var(--text-bright);
  font-family:'Exo 2',sans-serif;
  font-size:0.9rem;
  resize:vertical;
  min-height:120px;
  transition:border-color 0.2s;
  outline:none;
}
.quiz-input:focus{border-color:var(--accent);}
.btn{
  display:inline-flex;align-items:center;gap:8px;
  padding:12px 24px;
  border-radius:4px;
  border:none;
  cursor:pointer;
  font-family:'Rajdhani',sans-serif;
  font-size:1rem;font-weight:700;
  letter-spacing:1px;
  transition:all 0.2s;
}
.btn-primary{
  background:linear-gradient(135deg,var(--accent),#0080cc);
  color:#fff;
  box-shadow:0 4px 15px rgba(0,200,255,0.3);
}
.btn-primary:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(0,200,255,0.4);}
.btn-success{
  background:linear-gradient(135deg,var(--accent2),#00a060);
  color:#000;
  box-shadow:0 4px 15px rgba(0,255,157,0.3);
}
.btn-warn{
  background:linear-gradient(135deg,var(--warn),#cc8000);
  color:#000;
}
.btn-danger{
  background:linear-gradient(135deg,var(--danger),#990033);
  color:#fff;
}
.btn-ghost{
  background:transparent;
  border:1px solid var(--border);
  color:var(--text-dim);
}
.btn-ghost:hover{border-color:var(--accent);color:var(--accent);}
.btn:disabled{opacity:0.4;cursor:not-allowed;transform:none !important;}
.btn-row{display:flex;gap:12px;margin-top:16px;flex-wrap:wrap;}

/* AI Response */
.ai-response{
  background:linear-gradient(135deg,rgba(0,200,255,0.05),rgba(0,255,157,0.03));
  border:1px solid rgba(0,200,255,0.2);
  border-radius:4px;
  padding:20px;
  margin-top:16px;
}
.ai-response-header{
  font-family:'Share Tech Mono',monospace;
  font-size:0.65rem;letter-spacing:3px;
  color:var(--accent);
  margin-bottom:12px;
  display:flex;align-items:center;gap:8px;
}
.ai-response-body{
  font-size:0.88rem;
  color:var(--text);
  line-height:1.75;
  white-space:pre-wrap;
}
.score-badge{
  display:inline-flex;align-items:center;gap:8px;
  padding:8px 16px;
  border-radius:4px;
  font-family:'Rajdhani',sans-serif;
  font-size:1.1rem;font-weight:700;
  margin-bottom:12px;
}
.score-high{background:rgba(0,255,157,0.15);border:1px solid rgba(0,255,157,0.4);color:var(--accent2);}
.score-mid{background:rgba(255,184,0,0.15);border:1px solid rgba(255,184,0,0.4);color:var(--warn);}
.score-low{background:rgba(255,51,102,0.15);border:1px solid rgba(255,51,102,0.4);color:var(--danger);}

/* INTERVIEW MODE */
.interview-hero{
  text-align:center;padding:40px 28px;
}
.interview-hero .big-icon{font-size:4rem;margin-bottom:16px;}
.interview-hero h2{
  font-family:'Rajdhani',sans-serif;
  font-size:2rem;font-weight:700;
  color:var(--text-bright);
  margin-bottom:12px;
}
.interview-hero p{font-size:0.9rem;color:var(--text-dim);line-height:1.7;max-width:480px;margin:0 auto 24px;}
.interview-chat{
  background:var(--panel2);
  border:1px solid var(--border);
  border-radius:6px;
  overflow:hidden;
}
.chat-messages{
  padding:20px;
  max-height:420px;
  overflow-y:auto;
  display:flex;
  flex-direction:column;
  gap:16px;
}
.chat-messages::-webkit-scrollbar{width:4px;}
.chat-messages::-webkit-scrollbar-track{background:transparent;}
.chat-messages::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px;}
.msg{
  display:flex;gap:12px;align-items:flex-start;
}
.msg-avatar{
  width:36px;height:36px;
  border-radius:4px;
  display:flex;align-items:center;justify-content:center;
  font-size:1rem;
  flex-shrink:0;
}
.msg-ai .msg-avatar{
  background:linear-gradient(135deg,rgba(0,200,255,0.2),rgba(0,80,160,0.3));
  border:1px solid rgba(0,200,255,0.3);
}
.msg-user .msg-avatar{
  background:linear-gradient(135deg,rgba(0,255,157,0.2),rgba(0,100,60,0.3));
  border:1px solid rgba(0,255,157,0.3);
}
.msg-content{
  flex:1;
  font-size:0.88rem;
  color:var(--text);
  line-height:1.7;
  background:var(--panel);
  border:1px solid var(--border);
  border-radius:4px;
  padding:12px 16px;
}
.msg-ai .msg-content{border-color:rgba(0,200,255,0.15);}
.msg-user .msg-content{border-color:rgba(0,255,157,0.15);color:var(--text-bright);}
.msg-name{
  font-family:'Share Tech Mono',monospace;
  font-size:0.6rem;letter-spacing:2px;
  margin-bottom:6px;
}
.msg-ai .msg-name{color:var(--accent);}
.msg-user .msg-name{color:var(--accent2);}
.chat-input-area{
  padding:16px 20px;
  border-top:1px solid var(--border);
  display:flex;gap:12px;
}
.chat-input-area textarea{
  flex:1;
  background:var(--bg);
  border:1px solid var(--border);
  border-radius:4px;
  padding:12px;
  color:var(--text-bright);
  font-family:'Exo 2',sans-serif;
  font-size:0.88rem;
  resize:none;
  outline:none;
  height:80px;
  transition:border-color 0.2s;
}
.chat-input-area textarea:focus{border-color:var(--accent);}

/* LOADING */
.loading{
  display:flex;align-items:center;gap:10px;
  color:var(--text-dim);
  font-family:'Share Tech Mono',monospace;
  font-size:0.75rem;
  padding:12px 0;
}
.loading-dots span{
  display:inline-block;
  width:5px;height:5px;
  border-radius:50%;
  background:var(--accent);
  margin:0 2px;
  animation:bounce 1.2s infinite;
}
.loading-dots span:nth-child(2){animation-delay:0.2s;}
.loading-dots span:nth-child(3){animation-delay:0.4s;}
@keyframes bounce{0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);}}

/* NAV TABS */
.tabs{
  display:flex;gap:2px;
  border-bottom:1px solid var(--border);
  margin-bottom:0;
  overflow-x:auto;
}
.tab{
  padding:12px 20px;
  background:none;border:none;
  font-family:'Rajdhani',sans-serif;
  font-size:0.95rem;font-weight:600;
  letter-spacing:1px;
  color:var(--text-dim);
  cursor:pointer;
  border-bottom:2px solid transparent;
  transition:all 0.2s;
  white-space:nowrap;
}
.tab:hover{color:var(--text);}
.tab.active{color:var(--accent);border-bottom-color:var(--accent);}

/* MODAL TABS CONTENT */
.tab-content{display:none;}
.tab-content.active{display:block;}

/* PROGRESS BAR */
.progress-bar{
  height:4px;
  background:var(--border);
  border-radius:2px;
  margin-bottom:20px;
  overflow:hidden;
}
.progress-fill{
  height:100%;
  background:linear-gradient(90deg,var(--accent),var(--accent2));
  border-radius:2px;
  transition:width 0.5s;
}

/* FOOTER */
footer{
  margin-top:80px;
  border-top:1px solid var(--border);
  padding:32px 0;
  text-align:center;
}
footer p{
  font-family:'Share Tech Mono',monospace;
  font-size:0.65rem;
  color:var(--text-dim);
  letter-spacing:2px;
}

/* QUIZ NAV */
.quiz-nav{
  display:flex;align-items:center;justify-content:space-between;
  margin-bottom:16px;
}
.q-counter{
  font-family:'Share Tech Mono',monospace;
  font-size:0.7rem;color:var(--text-dim);
  letter-spacing:2px;
}
.q-counter span{color:var(--accent);}

/* EXAM RESULT */
.exam-result{
  text-align:center;padding:32px;
}
.exam-score{
  font-family:'Rajdhani',sans-serif;
  font-size:5rem;font-weight:700;
  line-height:1;
  margin-bottom:8px;
}
.exam-grade{
  font-size:1.1rem;
  color:var(--text-dim);
  margin-bottom:24px;
}

/* COMPLETED BANNER */
.completed-banner{
  background:rgba(0,255,157,0.08);
  border:1px solid rgba(0,255,157,0.3);
  border-radius:4px;
  padding:12px 16px;
  display:flex;align-items:center;gap:10px;
  margin-bottom:16px;
  font-family:'Share Tech Mono',monospace;
  font-size:0.72rem;
  color:var(--accent2);
  letter-spacing:1px;
}

@media(max-width:600px){
  .modal{margin:0;}
  .modal{border-radius:0;}
  .progress-overview{grid-template-columns:1fr 1fr;}
  .header-inner{flex-direction:column;gap:12px;text-align:center;}
}
</style>
</head>
<body>

<header>
  <div class="header-inner">
    <div class="logo">DC<span>CORE</span> ACADEMY</div>
    <div class="status-bar">
      <div class="status-dot"></div>
      <span>TRAINING SYSTEM ONLINE</span>
      <span id="overall-progress-label">0/11 MODULES</span>
    </div>
  </div>
</header>

<div class="wrap">
  <div class="hero">
    <div class="hero-tag">⚡ Critical Systems Training Program</div>
    <h1>Data Center<br/><span>Operations Mastery</span></h1>
    <p>Complete all modules, pass the deep-knowledge exams, then face the AI mock interview. Designed to get you hired.</p>
    <div class="progress-overview">
      <div class="prog-card">
        <div class="num" id="stat-complete">0</div>
        <div class="lbl">COMPLETED</div>
      </div>
      <div class="prog-card">
        <div class="num" id="stat-score">—</div>
        <div class="lbl">AVG SCORE</div>
      </div>
      <div class="prog-card">
        <div class="num" id="stat-ready">NO</div>
        <div class="lbl">INTERVIEW READY</div>
      </div>
    </div>
  </div>

  <div class="progress-bar">
    <div class="progress-fill" id="main-progress" style="width:0%"></div>
  </div>

  <div class="section-title">⚡ Electrical Systems</div>
  
  <div style="text-align:center;margin:28px 0 0">
    <button onclick="document.getElementById('elec-grid').closest('.wrap,section,[class*=wrap]') && document.getElementById('elec-grid').scrollIntoView({behavior:'smooth'}) || document.querySelector('.modules-grid,#elec-grid,.tgrid').scrollIntoView({behavior:'smooth'})"
      style="display:inline-flex;align-items:center;gap:10px;padding:16px 42px;border-radius:6px;border:none;cursor:pointer;font-family:'Orbitron',monospace,sans-serif;font-size:.88rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;background:linear-gradient(135deg,#00d4ff,#0096cc);color:#000;box-shadow:0 6px 28px rgba(0,212,255,.4);transition:all .2s;"
      onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 10px 38px rgba(0,212,255,.55)'"
      onmouseout="this.style.transform='';this.style.boxShadow='0 6px 28px rgba(0,212,255,.4)'">
      Start Training Now ↓
    </button>
  </div>
<div class="modules-grid" id="elec-grid"></div>

  <div class="section-title">🔧 Mechanical & Cooling Systems</div>
  <div class="modules-grid" id="mech-grid"></div>

  <div class="section-title">🎤 Interview Preparation</div>
  <div class="modules-grid" id="interview-grid"></div>
</div>

<footer>
  <div class="wrap">
    <p>DCCORE ACADEMY — DATA CENTER CRITICAL SYSTEMS TRAINING PLATFORM — AI-POWERED EXAMINATION ENGINE</p>
  </div>
</footer>

<!-- MODAL -->
<div class="modal-overlay" id="modal-overlay">
  <div class="modal" id="modal">
    <div class="modal-header">
      <div class="modal-title" id="modal-title">Module</div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="tabs" id="modal-tabs">
      <button class="tab active" onclick="switchTab('learn')">📚 LEARN</button>
      <button class="tab" onclick="switchTab('exam')">🧠 EXAM</button>
    </div>
    <div class="modal-body" id="modal-body"></div>
  </div>
</div>

<script>
const MODULES = [
  {
    id:'feeders',
    title:'Electrical Feeders',
    icon:'⚡',
    iconBg:'rgba(0,200,255,0.1)',
    section:'elec',
    tags:['tag-elec','tag-power'],
    tagLabels:['ELECTRICAL','POWER'],
    desc:'High-voltage distribution cables from utility to main switchboard.',
    videos:[
      {id:'jECXpUXVbCE',title:'Electrical Feeders Explained — Utility to Building Distribution'},
      {id:'L4TQbQ26_eA',title:'Medium Voltage Feeder Systems in Data Centers'}
    ],
    content:[
      'Feeders are conductors that carry electrical power from the source (utility, transformer, or generator) to the main distribution panel or switchgear.',
      'Typical data center feeders operate at 13.8kV, 4.16kV, or 480V depending on the voltage class.',
      'Feeder sizing is based on load calculations (NEC Article 220), conductor ampacity, voltage drop, and fault current ratings.',
      'Data centers often use dual-fed configurations for N+1 redundancy — each critical load has two independent feeder paths.',
      'Key inspection points: insulation resistance (Megger testing), connection torque, thermal imaging for hot spots, and phasing.',
      'Protection devices: overcurrent protective devices (OCPDs), fuses, and circuit breakers sized per NEC and NFPA 70E.',
      'Underground feeders use XLPE or EPR insulated cables in conduit or direct-buried duct banks with concrete encasement.',
      'Feeder labeling, arc flash hazard labels, and one-line diagrams are critical documentation maintained by data center ops teams.'
    ]
  },
  {
    id:'transformers',
    title:'Transformers',
    icon:'🔄',
    iconBg:'rgba(255,184,0,0.1)',
    section:'elec',
    tags:['tag-elec','tag-power'],
    tagLabels:['ELECTRICAL','HIGH VOLTAGE'],
    desc:'Step-up/step-down voltage conversion for safe power distribution.',
    videos:[
      {id:'vh_aCAHThTQ',title:'How Transformers Work — Principles & Construction'},
      {id:'MOs2RqQpPuE',title:'Data Center Transformer Systems — Dry Type & Liquid Filled'}
    ],
    content:[
      'Transformers use electromagnetic induction to step voltage up or down between primary and secondary windings.',
      'Data centers commonly use dry-type transformers (cast resin or VPI) due to their fire safety advantage over oil-filled units indoors.',
      'Transformer ratings include kVA capacity, primary/secondary voltage, impedance (%), BIL rating, and temperature class.',
      'Delta-Wye (Δ-Y) configurations are standard in data centers; the Wye neutral provides a reference point and helps with harmonic mitigation.',
      'Transformer losses: no-load (core/iron) losses and load (copper/winding) losses — efficiency matters for PUE.',
      'ANSI/IEEE C57 standards govern transformer testing, ratings, and installation requirements.',
      'Paralleling transformers requires matching voltage ratios, impedance, and phase angles to prevent circulating currents.',
      'Common faults: insulation degradation, winding shorts, overheating — monitored via thermal sensors and oil sampling (for liquid-filled units).',
      'Transformer nameplate reading: kVA, voltage ratio, impedance %, vector group, cooling class (ONAN/ONAF), and weight.'
    ]
  },
  {
    id:'generators',
    title:'Emergency Generators',
    icon:'🏭',
    iconBg:'rgba(255,107,53,0.1)',
    section:'elec',
    tags:['tag-elec','tag-power'],
    tagLabels:['ELECTRICAL','BACKUP'],
    desc:'Diesel/gas gensets providing standby power during utility outages.',
    videos:[
      {id:'GrfOPiGOQN4',title:'How Diesel Generators Work — Data Center Backup Power'},
      {id:'Y7EEkbujYpE',title:'Generator Sizing, Testing & Maintenance for Critical Facilities'}
    ],
    content:[
      'Data center generators are typically diesel-fueled synchronous AC generators (alternators) driven by a diesel engine.',
      'Generator sizing: total connected load + 20-25% growth buffer, accounting for non-linear UPS loads and power factor.',
      'Key generator specs: kW/kVA rating, voltage (480V 3-phase typical), frequency (60Hz), power factor (0.8 lagging standard).',
      'Generator start sequence: engine crank → fuel delivery → combustion → speed ramp-up → voltage buildup → ATS transfer (10-15 seconds typical).',
      'Weekly exercise: 30-minute no-load test minimum; monthly loaded test preferred to prevent wet stacking.',
      'Wet stacking: unburned fuel accumulates in exhaust when generators run underloaded — prevented by load bank testing.',
      'Paralleling multiple generators requires synchronization: match voltage, frequency, and phase angle before closing bus tie breakers.',
      'Fuel systems: day tank (8-hour supply near gen), main tank (72-96 hour supply), fuel polishing to remove water and microbes.',
      'Protection: overcurrent, overvoltage, undervoltage, under/over frequency, reverse power, differential (large units), and coolant/oil shutdowns.'
    ]
  },
  {
    id:'switchgear',
    title:'Switchgear',
    icon:'🔌',
    iconBg:'rgba(0,200,255,0.08)',
    section:'elec',
    tags:['tag-elec'],
    tagLabels:['ELECTRICAL'],
    desc:'High-voltage switching, protection and isolation of electrical circuits.',
    videos:[
      {id:'_EiHIFVqBGo',title:'Electrical Switchgear Explained — MV & LV Systems'},
      {id:'uDNi4ldVSlE',title:'Data Center Switchgear — Architecture & Maintenance'}
    ],
    content:[
      'Switchgear is an assembly of switching devices (circuit breakers, disconnects, fuses) used for protection, isolation, and control of electrical circuits.',
      'Medium voltage (MV) switchgear: 1kV–38kV — handles utility feeds; low voltage (LV) switchgear: <1kV — handles distribution.',
      'Main switchgear topologies in data centers: double-bus, ring bus, and breaker-and-a-half configurations for redundancy.',
      'Circuit breakers in switchgear: air-insulated (ACB), vacuum (VCB), or SF6 insulated — selected by voltage level and interrupting capacity.',
      'Bus bar sizing: copper or aluminum, rated for continuous and fault current levels (kA symmetrical).',
      'Protective relays: overcurrent (50/51), differential (87), under/over voltage (27/59), and bus protection relay schemes.',
      'Arc flash hazard analysis per IEEE 1584 determines required PPE and safety boundaries — critical for operational safety.',
      'Maintenance: annual thermal imaging, contact resistance testing, insulation resistance, and SF6 gas density checks.',
      'Key data center practice: source transfer switchgear allows seamless transfer between utility and generator feeds.'
    ]
  },
  {
    id:'ups',
    title:'UPS Systems',
    icon:'🔋',
    iconBg:'rgba(0,255,157,0.08)',
    section:'elec',
    tags:['tag-elec','tag-power'],
    tagLabels:['ELECTRICAL','CRITICAL'],
    desc:'Uninterruptible Power Supplies bridging utility outages to generator start.',
    videos:[
      {id:'UtKVnq_1tSw',title:'How UPS Systems Work — Double Conversion & Topology Types'},
      {id:'a3RsRYG3sPc',title:'Data Center UPS Selection, Sizing & Maintenance'}
    ],
    content:[
      'UPS systems provide clean, conditioned power and bridge the gap between utility loss and generator assumption (typically 10-20 seconds).',
      'Double-conversion (online) UPS: AC→DC→AC — complete electrical isolation, zero transfer time, best power quality — used in 99% of critical data centers.',
      'Line-interactive UPS: uses autotransformer for voltage regulation; 2-4ms transfer time — used for edge/less-critical loads.',
      'Battery types: VRLA (valve-regulated lead-acid) most common; Li-Ion gaining adoption for lower weight and longer life.',
      'UPS sizing: kVA rating × power factor = kW; include future growth, battery recharge current, and redundancy (N+1 or 2N).',
      'Runtime calculation: battery capacity (Ah) × voltage / load (W) — typically 5-15 minutes at full load in large data centers.',
      'Battery management: equalization charging, temperature compensation, impedance testing, and cell replacement at 80% capacity threshold.',
      'Bypass modes: static bypass (SCR-based, <4ms) for maintenance; manual maintenance bypass for complete UPS isolation.',
      'Key metrics: input/output voltage THD, efficiency (95-97% for modern ECO mode), input power factor, and battery float voltage.'
    ]
  },
  {
    id:'ats',
    title:'ATS Units',
    icon:'⚙️',
    iconBg:'rgba(255,184,0,0.08)',
    section:'elec',
    tags:['tag-elec'],
    tagLabels:['ELECTRICAL','TRANSFER'],
    desc:'Automatic Transfer Switches sensing utility failure and switching to backup.',
    videos:[
      {id:'HDIVL4e43Ow',title:'Automatic Transfer Switch (ATS) — How It Works'},
      {id:'2y8HVKBNQ_8',title:'ATS vs STS — Static vs Mechanical Transfer in Data Centers'}
    ],
    content:[
      'An ATS monitors two power sources and automatically transfers load from the normal (utility) to the emergency (generator) source upon failure.',
      'ATS types: open-transition (break-before-make, 1/6 second gap), closed-transition (make-before-break, <100ms overlap), and soft-loading.',
      'Transfer time: open-transition ATS = ~1-2 seconds; closed-transition = <100ms; static transfer switch (STS) = <4ms.',
      'ATS sensing parameters: voltage window (typically ±10% nominal), frequency deviation (±3Hz), and phase loss detection.',
      'In a typical data center: Utility → Main ATS → UPS → PDU. Generator connects to ATS emergency bus.',
      'Time delays: normal-to-emergency (NTE) delay: 0-30 seconds (avoids unnecessary transfers); emergency-to-normal (ETN) delay: 5-30 minutes (ensures stable utility).',
      'STS (Static Transfer Switch): uses SCRs for sub-cycle transfer; used ahead of critical UPS inputs for source redundancy.',
      'ATS maintenance: exercise switching quarterly, verify control wiring, test under-voltage relay settings, and exercise manual bypass.',
      'Key data center design: two independent ATS feeds (A+B bus) to dual-corded servers ensure zero-interruption path diversity.'
    ]
  },
  {
    id:'pdu',
    title:'PDU Units',
    icon:'🖥️',
    iconBg:'rgba(0,200,255,0.06)',
    section:'elec',
    tags:['tag-elec'],
    tagLabels:['ELECTRICAL','DISTRIBUTION'],
    desc:'Power Distribution Units delivering conditioned power to server racks.',
    videos:[
      {id:'XhcnpUEX0pM',title:'Power Distribution Units (PDU) for Data Centers Explained'},
      {id:'aTqMt8UFSOA',title:'Intelligent PDUs — Remote Monitoring & Branch Circuit Management'}
    ],
    content:[
      'PDUs distribute power from the UPS or switchgear to IT equipment racks. They act as the last power distribution point before servers.',
      'Floor-standing (freestanding) PDUs: typically 100-250kVA, serve multiple racks via branch circuits.',
      'Rack PDUs (rPDU/strip PDUs): mounted inside racks, provide individual outlet monitoring and switching.',
      'Branch circuit protection: MCBs or fuses at each output; GFCI outlets where required.',
      'Intelligent/managed PDUs: measure power per outlet (current, voltage, kW, kWh), enable remote outlet switching, alert on overloads.',
      'PDU input connections: 3-phase 208V or 480V (with step-down transformer inside) in North American data centers.',
      'Phase balancing: critical to distribute load evenly across L1, L2, L3 — imbalanced phases waste capacity and cause neutral current issues.',
      'Busway/overhead PDU systems: plug-in busway reduces floor cabling; popular in high-density deployments.',
      'Data center best practice: dual-corded servers connect to A-side and B-side PDUs fed from independent UPS/ATS paths.'
    ]
  },
  // MECHANICAL
  {
    id:'chillers',
    title:'Chiller Systems',
    icon:'❄️',
    iconBg:'rgba(0,200,255,0.08)',
    section:'mech',
    tags:['tag-cool','tag-mech'],
    tagLabels:['COOLING','MECHANICAL'],
    desc:'Central refrigeration plant removing heat from chilled water loops.',
    videos:[
      {id:'4VVVCBDNLbU',title:'How Chillers Work — Refrigeration Cycle Explained'},
      {id:'3AX3t58VGVM',title:'Data Center Chiller Plant Design & Operation'}
    ],
    content:[
      'Chillers produce chilled water (typically 6-12°C supply / 12-18°C return) used to cool air handling units and CRAC/CRAH units.',
      'Vapor-compression cycle: compressor → condenser → expansion valve → evaporator → back to compressor.',
      'Chiller types: centrifugal (large capacity, high efficiency), screw (mid-size, good part-load), scroll (small units), absorption (waste heat driven).',
      'Chiller COP (Coefficient of Performance): cooling output / electrical input — typically 4.0-7.0 for modern units.',
      'kW/ton (or COP): measures chiller efficiency — lower kW/ton = better. Target <0.4 kW/ton for high-efficiency chillers.',
      'Redundancy: N+1 or 2N chiller configurations. Lead/lag sequencing automates starting and stopping for efficiency.',
      'Condenser heat rejection: cooling towers (evaporative), dry coolers (air-cooled), or fluid coolers.',
      'Free cooling (economizer): when ambient wet-bulb drops low enough, bypass compressor and use cooling tower water directly.',
      'Key alarms: high refrigerant pressure, low oil pressure, evaporator freeze protection, motor overtemperature, and compressor surge (centrifugal).'
    ]
  },
  {
    id:'pumps',
    title:'Chilled Water Pumps',
    icon:'💧',
    iconBg:'rgba(0,200,255,0.06)',
    section:'mech',
    tags:['tag-cool','tag-mech'],
    tagLabels:['MECHANICAL','HYDRAULICS'],
    desc:'Primary and secondary pumping loops circulating chilled water.',
    videos:[
      {id:'7DaFZPafr3k',title:'Centrifugal Pumps — How They Work'},
      {id:'fEH0SBjqLyE',title:'Data Center Chilled Water Pumping Systems — Primary/Secondary Loops'}
    ],
    content:[
      'Centrifugal pumps are the standard for chilled water circulation — convert motor shaft rotation to fluid kinetic energy.',
      'Pump curve: flow (GPM/L/s) vs head (ft/m) — the operating point is where the pump curve intersects the system curve.',
      'Primary-secondary pumping: primary loop at constant flow through chillers; secondary (distribution) loop at variable flow to loads.',
      'Variable speed drives (VSDs/VFDs): vary pump speed to match demand — huge energy savings; follow affinity laws (power ∝ speed³).',
      'Primary-secondary decoupler pipe: allows independent flow rates in primary and secondary loops — critical for chiller protection.',
      'Pump redundancy: N+1 standby pumps with automatic duty/standby rotation to equalize wear.',
      'System components: expansion tank (absorbs thermal expansion), air separator, strainer, balancing valves, flow meters.',
      'Hydronic balancing: ensures each AHU/CRAH coil receives design flow — done with differential pressure (ΔP) setpoint control.',
      'Pump maintenance: check seal condition, bearing temperatures (IR gun), vibration analysis, and impeller wear regularly.'
    ]
  },
  {
    id:'ahu',
    title:'Air Handling Units (AHU)',
    icon:'🌀',
    iconBg:'rgba(0,255,157,0.06)',
    section:'mech',
    tags:['tag-cool','tag-mech'],
    tagLabels:['MECHANICAL','AIR'],
    desc:'Large central units conditioning and distributing cool air to data halls.',
    videos:[
      {id:'gflZ1ybdCZE',title:'How Air Handling Units Work — AHU Explained'},
      {id:'REwUPnNTNgI',title:'Data Center Airflow Management — AHU Design & Best Practices'}
    ],
    content:[
      'AHUs draw in return air (warm exhaust from servers), pass it over chilled water coils, filter it, and supply cool air to the data hall.',
      'Key AHU components: supply fan (centrifugal or axial), chilled water cooling coil, heating coil (optional), filters (MERV 8-11), dampers, humidifier.',
      'Airflow path: hot aisle return → AHU intake → cooling coil → supply fan → supply plenum → cold aisle → servers → hot aisle (repeat).',
      'Hot aisle/cold aisle containment: maximizes AHU efficiency by preventing hot and cold air mixing.',
      'Static pressure control: VFD on supply fan maintains constant duct/plenum static pressure setpoint (e.g., 0.05–0.15 in.w.c.).',
      'Cooling coil control: chilled water valve modulates to maintain supply air temperature (SAT) setpoint (typically 16-18°C).',
      'Economizer operation: when OAT is cool enough, outside air provides free cooling via damper modulation.',
      'Humidification: electrode steam humidifiers or evaporative humidifiers maintain RH 40-60% per ASHRAE A1-A4 classes.',
      'AHU sizing: total heat load / (ΔT × specific heat of air) = required CFM; size for N+1 and future growth.'
    ]
  },
  {
    id:'crac',
    title:'CRAC/CRAH Units',
    icon:'🌡️',
    iconBg:'rgba(0,200,255,0.07)',
    section:'mech',
    tags:['tag-cool'],
    tagLabels:['COOLING','IN-ROW'],
    desc:'Computer Room Air Conditioning/Handling units within data halls.',
    videos:[
      {id:'YJ_vP6PQO7o',title:'CRAC vs CRAH Units — Differences & Data Center Applications'},
      {id:'GCaXNuPBEpg',title:'In-Row Cooling & High-Density Data Center Cooling Strategies'}
    ],
    content:[
      'CRAC (Computer Room Air Conditioning): self-contained unit with built-in DX (direct expansion) refrigeration compressor — independent of chilled water plant.',
      'CRAH (Computer Room Air Handler): uses chilled water from central plant — no compressor, simpler mechanically, higher efficiency at scale.',
      'CRAC units: suited for smaller or edge data centers, or as backup cooling; use HFC refrigerants (R-410A, R-134a).',
      'CRAH units: preferred in large facilities; rely on central chiller plant availability — redundancy must be at the plant level.',
      'Placement: perimeter CRAC/CRAHs (traditional), in-row coolers (close-coupled, between racks), overhead (ceiling-mounted).',
      'In-row cooling: hot air captured directly from server exhaust at the source — reduces mixing, enables higher densities (30kW+/rack).',
      'Sensible heat ratio (SHR): data centers are nearly 100% sensible load (servers generate heat, not moisture) — CRAC coils sized accordingly.',
      'Key controls: supply air temperature, return air temperature (RAT), room temperature setpoint, and fan speed (VFD on CRAH fans).',
      'Economizer CRAH: can use warmer chilled water (18-21°C) to enable more free cooling hours per year, improving energy efficiency.'
    ]
  }
];

const INTERVIEW_MODULE = {
  id:'interview',
  title:'AI Mock Interview',
  icon:'🎤',
  iconBg:'rgba(0,255,157,0.1)',
  section:'interview',
  tags:['tag-elec','tag-cool'],
  tagLabels:['ELECTRICAL','MECHANICAL'],
  desc:'Face a tough technical interviewer. Realistic data center ops questions.',
  isInterview:true
};

const state = {
  completed: {},
  scores: {},
  quizState: {},
  interviewActive: false,
  interviewMessages: [],
  currentModule: null,
  currentTab: 'learn',
  quizQuestion: null,
  quizIndex: 0,
  loadingQuiz: false,
  loadingInterview: false
};

function renderModules(){
  const elecGrid = document.getElementById('elec-grid');
  const mechGrid = document.getElementById('mech-grid');
  const intGrid = document.getElementById('interview-grid');
  
  MODULES.filter(m=>m.section==='elec').forEach(m=>elecGrid.appendChild(buildCard(m)));
  MODULES.filter(m=>m.section==='mech').forEach(m=>mechGrid.appendChild(buildCard(m)));
  intGrid.appendChild(buildCard(INTERVIEW_MODULE));
  
  updateStats();
}

function buildCard(m){
  const div = document.createElement('div');
  div.className = 'module-card' + (state.completed[m.id] ? ' completed' : '');
  div.id = 'card-'+m.id;
  div.onclick = () => openModule(m);
  div.innerHTML = `
    <div class="mod-header">
      <div class="mod-icon" style="background:${m.iconBg}">${m.icon}</div>
      <div class="mod-meta">
        <div class="mod-number">MODULE · ${(MODULES.indexOf(m)+1).toString().padStart(2,'0')}</div>
        <div class="mod-title">${m.title}</div>
      </div>
    </div>
    <div class="mod-desc">${m.desc}</div>
    <div class="mod-footer">
      <div class="mod-tags">${m.tags.map((t,i)=>`<span class="tag ${t}">${m.tagLabels[i]}</span>`).join('')}</div>
      <div class="mod-status ${state.completed[m.id]?'status-done':'status-ready'}">
        ${state.completed[m.id]?'✓ COMPLETE':'→ OPEN'}
      </div>
    </div>
  `;
  return div;
}

function openModule(m){
  state.currentModule = m;
  state.currentTab = 'learn';
  document.getElementById('modal-title').textContent = m.icon + ' ' + m.title;
  
  const tabs = document.getElementById('modal-tabs');
  if(m.isInterview){
    tabs.innerHTML = `<button class="tab active" onclick="switchTab('interview')">🎤 MOCK INTERVIEW</button>`;
  } else {
    tabs.innerHTML = `
      <button class="tab active" onclick="switchTab('learn')">📚 LEARN</button>
      <button class="tab" onclick="switchTab('exam')">🧠 EXAM</button>
    `;
  }
  
  renderModalContent(m);
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function switchTab(tab){
  state.currentTab = tab;
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  event.target.classList.add('active');
  renderModalContent(state.currentModule);
}

function renderModalContent(m){
  const body = document.getElementById('modal-body');
  const tab = state.currentTab;
  
  if(m.isInterview || tab==='interview'){
    renderInterviewMode(body);
    return;
  }
  if(tab==='learn'){
    renderLearnTab(body, m);
  } else {
    renderExamTab(body, m);
  }
}

function renderLearnTab(body, m){
  const completedBanner = state.completed[m.id] ? `
    <div class="completed-banner">✓ MODULE COMPLETED — Score: ${state.scores[m.id]}% — You can retake the exam anytime</div>
  ` : '';
  
  const videosHtml = m.videos.map(v=>`
    <div>
      <div class="video-wrapper">
        <iframe src="https://www.youtube.com/embed/${v.id}?rel=0" frameborder="0" allowfullscreen loading="lazy"></iframe>
      </div>
      <div class="video-title">▶ ${v.title}</div>
    </div>
  `).join('');
  
  const bulletHtml = m.content.map(c=>`<li>${c}</li>`).join('');
  
  body.innerHTML = `
    ${completedBanner}
    <div class="video-section">
      <div class="video-label">TRAINING VIDEOS</div>
      <div class="videos-grid">${videosHtml}</div>
    </div>
    <div class="content-section">
      <h3>📋 Key Technical Concepts</h3>
      <ul>${bulletHtml}</ul>
    </div>
    <div class="btn-row">
      <button class="btn btn-primary" onclick="goToExam()">Take Module Exam →</button>
    </div>
  `;
}

function goToExam(){
  state.currentTab = 'exam';
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab')[1].classList.add('active');
  renderExamTab(document.getElementById('modal-body'), state.currentModule);
}

function renderExamTab(body, m){
  state.quizIndex = 0;
  state.quizQuestion = null;
  body.innerHTML = `
    <div class="quiz-section">
      <div class="quiz-header">🧠 Deep Knowledge Exam — ${m.title}</div>
      <div id="quiz-area">
        <p style="color:var(--text-dim);font-size:0.9rem;line-height:1.7;margin-bottom:20px;">
          You will be asked <strong style="color:var(--accent)">5 deep technical questions</strong> by the AI examiner. Answer thoroughly — you'll be graded on accuracy, depth, and practical understanding.<br/><br/>
          This is not multiple choice. Type your real answers.
        </p>
        <button class="btn btn-primary" onclick="startQuiz()">⚡ Begin Exam</button>
      </div>
    </div>
  `;
}

async function startQuiz(){
  state.quizAnswers = [];
  state.quizIndex = 1;
  await fetchNextQuestion();
}

async function fetchNextQuestion(){
  const m = state.currentModule;
  const area = document.getElementById('quiz-area');
  
  area.innerHTML = `
    <div class="quiz-nav">
      <div class="q-counter">QUESTION <span>${state.quizIndex}</span> OF 5</div>
    </div>
    <div class="quiz-body">
      <div class="loading">Generating question<div class="loading-dots"><span></span><span></span><span></span></div></div>
    </div>
  `;
  
  const previousQAs = state.quizAnswers.map((qa,i)=>`Q${i+1}: ${qa.q}\nA${i+1}: ${qa.a}`).join('\n\n');
  
  const prompt = `You are a strict technical examiner for data center operations hiring. 
The candidate is being examined on: ${m.title}.

Key concepts for this module: ${m.content.join('; ')}

This is question ${state.quizIndex} of 5. ${previousQAs ? `Previous Q&As:\n${previousQAs}\n\nAsk a DIFFERENT, progressively harder question.` : 'Start with a foundational but technical question.'}

Generate ONE deep technical question that tests real operational knowledge — not just definitions. It should require practical understanding to answer well. 

Output ONLY the question text, nothing else.`;

  try {
    const res = await callClaude(prompt);
    const question = res.trim();
    state.quizQuestion = question;
    
    area.innerHTML = `
      <div class="quiz-nav">
        <div class="q-counter">QUESTION <span>${state.quizIndex}</span> OF 5</div>
        <div class="progress-bar" style="width:200px;margin:0"><div class="progress-fill" style="width:${(state.quizIndex/5)*100}%"></div></div>
      </div>
      <div class="quiz-body">
        <div class="quiz-question">${question}</div>
        <textarea class="quiz-input" id="quiz-answer" placeholder="Type your answer here — be thorough and technical..."></textarea>
        <div class="btn-row">
          <button class="btn btn-primary" onclick="submitAnswer()">Submit Answer →</button>
        </div>
      </div>
    `;
  } catch(e){
    area.innerHTML = `<p style="color:var(--danger)">Error loading question. Check API connection.</p>`;
  }
}

async function submitAnswer(){
  const answer = document.getElementById('quiz-answer').value.trim();
  if(!answer){alert('Please write an answer before submitting.');return;}
  
  const q = state.quizQuestion;
  state.quizAnswers.push({q, a:answer});
  
  const area = document.getElementById('quiz-area');
  area.innerHTML = `
    <div class="quiz-nav">
      <div class="q-counter">EVALUATING ANSWER ${state.quizIndex} OF 5</div>
    </div>
    <div class="quiz-body">
      <div class="loading">AI evaluating your answer<div class="loading-dots"><span></span><span></span><span></span></div></div>
    </div>
  `;
  
  const evalPrompt = `You are a strict data center operations technical examiner evaluating an answer.

Topic: ${state.currentModule.title}
Question: ${q}
Candidate's Answer: ${answer}

Evaluate this answer. Be tough but fair. Provide:
1. A score out of 10
2. What was correct
3. What was missing or wrong
4. The complete correct technical answer

Format your response exactly like this:
SCORE: X/10
CORRECT: [what they got right]
MISSING: [what was missing or incorrect]
EXPERT ANSWER: [the full correct answer a data center engineer would give]`;

  try {
    const feedback = await callClaude(evalPrompt);
    
    const scoreMatch = feedback.match(/SCORE:\s*(\d+)\/10/);
    const score = scoreMatch ? parseInt(scoreMatch[1]) : 5;
    const scoreClass = score >= 8 ? 'score-high' : score >= 5 ? 'score-mid' : 'score-low';
    
    state.quizAnswers[state.quizAnswers.length-1].score = score;
    
    area.innerHTML = `
      <div class="quiz-nav">
        <div class="q-counter">RESULT — QUESTION ${state.quizIndex} OF 5</div>
      </div>
      <div class="quiz-body" style="margin-bottom:16px">
        <div class="quiz-question" style="margin-bottom:8px">${q}</div>
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:4px;padding:12px;margin-bottom:16px;font-size:0.85rem;color:var(--text-dim)">
          <em>Your answer: "${answer.substring(0,200)}${answer.length>200?'...':''}"</em>
        </div>
        <div class="ai-response">
          <div class="ai-response-header">⚡ EXAMINER FEEDBACK</div>
          <div class="score-badge ${scoreClass}">★ ${score}/10</div>
          <div class="ai-response-body">${feedback.replace(/SCORE:.*\n?/,'').trim()}</div>
        </div>
      </div>
      <div class="btn-row">
        ${state.quizIndex < 5 
          ? `<button class="btn btn-primary" onclick="nextQuestion()">Next Question →</button>` 
          : `<button class="btn btn-success" onclick="finishExam()">View Final Results ✓</button>`}
      </div>
    `;
  } catch(e){
    area.innerHTML = `<p style="color:var(--danger)">Error evaluating. Try again.</p>`;
  }
}

function nextQuestion(){
  state.quizIndex++;
  fetchNextQuestion();
}

async function finishExam(){
  const area = document.getElementById('quiz-area');
  const scores = state.quizAnswers.map(a=>a.score||5);
  const avg = Math.round(scores.reduce((a,b)=>a+b,0)/scores.length * 10);
  
  area.innerHTML = `<div class="loading">Generating final assessment<div class="loading-dots"><span></span><span></span><span></span></div></div>`;
  
  const summaryPrompt = `You are a senior data center operations manager. A candidate just completed a technical exam on ${state.currentModule.title}.

Their Q&A results:
${state.quizAnswers.map((qa,i)=>`Q${i+1}: ${qa.q}\nAnswer: ${qa.a}\nScore: ${qa.score}/10`).join('\n\n')}

Overall score: ${avg}%

Write a 3-4 sentence professional assessment of their knowledge level, specific strengths shown, gaps to address before the interview, and 2-3 topics they should review. Be direct and actionable.`;

  const assessment = await callClaude(summaryPrompt).catch(()=>'Assessment unavailable.');
  
  const grade = avg >= 80 ? {label:'EXCELLENT',cls:'score-high',msg:'You are ready to discuss this topic in an interview.'} 
               : avg >= 60 ? {label:'GOOD',cls:'score-mid',msg:'Review weak areas before your interview.'} 
               : {label:'NEEDS WORK',cls:'score-low',msg:'Study the module content again before interviewing.'};
  
  state.completed[state.currentModule.id] = true;
  state.scores[state.currentModule.id] = avg;
  updateStats();
  refreshCard(state.currentModule.id);
  
  area.innerHTML = `
    <div class="exam-result">
      <div class="exam-score" style="color:${avg>=80?'var(--accent2)':avg>=60?'var(--warn)':'var(--danger)'}">${avg}%</div>
      <div class="exam-grade"><span class="score-badge ${grade.cls}">${grade.label}</span></div>
      <div class="ai-response" style="text-align:left;margin-bottom:24px">
        <div class="ai-response-header">📋 EXAMINER ASSESSMENT</div>
        <div class="ai-response-body">${assessment}</div>
      </div>
      <div class="btn-row" style="justify-content:center">
        <button class="btn btn-ghost" onclick="renderExamTab(document.getElementById('modal-body'),state.currentModule)">Retake Exam</button>
        <button class="btn btn-primary" onclick="closeModal()">Back to Modules</button>
      </div>
    </div>
  `;
}

function refreshCard(id){
  const card = document.getElementById('card-'+id);
  if(card){
    card.className = 'module-card completed';
    const status = card.querySelector('.mod-status');
    if(status){status.className='mod-status status-done';status.textContent='✓ COMPLETE';}
  }
}

function updateStats(){
  const done = Object.keys(state.completed).filter(k=>state.completed[k]&&k!=='interview').length;
  const total = MODULES.length;
  const scores = Object.values(state.scores).filter(s=>typeof s==='number');
  const avg = scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length) : null;
  const ready = done >= Math.ceil(total * 0.7);
  
  document.getElementById('stat-complete').textContent = `${done}/${total}`;
  document.getElementById('stat-score').textContent = avg ? avg+'%' : '—';
  document.getElementById('stat-ready').textContent = ready ? 'YES' : 'NO';
  document.getElementById('overall-progress-label').textContent = `${done}/${total} MODULES`;
  document.getElementById('main-progress').style.width = `${(done/total)*100}%`;
}

// INTERVIEW MODE
function renderInterviewMode(body){
  if(!state.interviewStarted){
    body.innerHTML = `
      <div class="interview-hero">
        <div class="big-icon">🎤</div>
        <h2>AI Mock Interview</h2>
        <p>Face a realistic technical interviewer for a Data Center Operations role. You'll be graded on technical depth, safety awareness, operational judgment, and communication clarity.</p>
        <button class="btn btn-success" onclick="startInterview()">Start Interview Session</button>
      </div>
    `;
  } else {
    renderInterviewChat(body);
  }
}

async function startInterview(){
  state.interviewStarted = true;
  state.interviewMessages = [];
  
  const body = document.getElementById('modal-body');
  renderInterviewChat(body);
  
  // Get opening question
  const opening = await callClaude(`You are a senior data center operations manager conducting a job interview for a "Critical Facilities Technician" or "Data Center Engineer" role. The role requires knowledge of feeders, transformers, generators, switchgear, UPS systems, ATS units, PDUs, chillers, pumps, AHUs, and CRAC/CRAH units.

Start the interview with a brief professional introduction and your first question. The question should be technical but also assess experience level. Be conversational but rigorous. Output only your message.`);
  
  state.interviewMessages.push({role:'ai',text:opening});
  renderInterviewChat(body);
}

function renderInterviewChat(body){
  const msgs = state.interviewMessages.map(m=>`
    <div class="msg msg-${m.role}">
      <div class="msg-avatar">${m.role==='ai'?'🤖':'👤'}</div>
      <div class="msg-content">
        <div class="msg-name">${m.role==='ai'?'INTERVIEWER':'YOU'}</div>
        ${m.text}
      </div>
    </div>
  `).join('');
  
  const loadingHtml = state.loadingInterview ? `
    <div class="msg msg-ai">
      <div class="msg-avatar">🤖</div>
      <div class="msg-content">
        <div class="msg-name">INTERVIEWER</div>
        <div class="loading">Thinking<div class="loading-dots"><span></span><span></span><span></span></div></div>
      </div>
    </div>
  ` : '';
  
  body.innerHTML = `
    <div class="interview-chat">
      <div class="chat-messages" id="chat-msgs">
        ${msgs}${loadingHtml}
      </div>
      <div class="chat-input-area">
        <textarea id="interview-input" placeholder="Type your answer..." onkeydown="handleInterviewKey(event)"></textarea>
        <button class="btn btn-primary" onclick="sendInterviewMessage()" ${state.loadingInterview?'disabled':''}>Send →</button>
      </div>
    </div>
    <div class="btn-row" style="margin-top:16px">
      <button class="btn btn-warn" onclick="endInterview()">End Interview & Get Feedback</button>
      <button class="btn btn-ghost" onclick="resetInterview()">Restart</button>
    </div>
  `;
  
  // Scroll to bottom
  setTimeout(()=>{
    const msgs = document.getElementById('chat-msgs');
    if(msgs) msgs.scrollTop = msgs.scrollHeight;
  },100);
}

function handleInterviewKey(e){
  if(e.key==='Enter' && !e.shiftKey){e.preventDefault();sendInterviewMessage();}
}

async function sendInterviewMessage(){
  const input = document.getElementById('interview-input');
  const text = input.value.trim();
  if(!text||state.loadingInterview) return;
  
  state.interviewMessages.push({role:'user',text});
  input.value = '';
  state.loadingInterview = true;
  renderInterviewChat(document.getElementById('modal-body'));
  
  const history = state.interviewMessages.map(m=>`${m.role==='ai'?'Interviewer':'Candidate'}: ${m.text}`).join('\n\n');
  
  const prompt = `You are conducting a data center operations job interview. Continue the interview based on the conversation so far.

Conversation history:
${history}

Continue as the interviewer. Ask a follow-up question or probe deeper based on their answer. Cover different technical areas across: electrical (feeders, transformers, generators, switchgear, UPS, ATS, PDU) and mechanical (chillers, pumps, AHUs, CRAC/CRAH). Also probe: safety protocols, troubleshooting approaches, and operational experience. Be rigorous but professional. Output only your next message.`;

  try {
    const reply = await callClaude(prompt);
    state.interviewMessages.push({role:'ai',text:reply});
  } catch(e){
    state.interviewMessages.push({role:'ai',text:'[Error — please try again]'});
  }
  
  state.loadingInterview = false;
  renderInterviewChat(document.getElementById('modal-body'));
}

async function endInterview(){
  state.loadingInterview = true;
  const body = document.getElementById('modal-body');
  body.innerHTML = `<div class="loading" style="padding:40px;justify-content:center">Generating comprehensive interview feedback<div class="loading-dots"><span></span><span></span><span></span></div></div>`;
  
  const history = state.interviewMessages.map(m=>`${m.role==='ai'?'Interviewer':'Candidate'}: ${m.text}`).join('\n\n');
  
  const feedbackPrompt = `You are a senior hiring manager reviewing a data center operations interview. 

Interview transcript:
${history}

Provide a comprehensive interview evaluation with:
1. OVERALL RATING (1-10) and hiring recommendation
2. TECHNICAL KNOWLEDGE: Score each area (electrical systems, mechanical/cooling systems, safety awareness) out of 10
3. STRENGTHS: What they demonstrated well
4. GAPS: Critical technical areas they were weak on
5. COMMUNICATION: How well they explained technical concepts
6. TOP 3 STUDY RECOMMENDATIONS before a real interview
7. SAMPLE STRONG ANSWERS for the 2 weakest questions they answered

Be direct, specific, and actionable.`;
  
  const feedback = await callClaude(feedbackPrompt).catch(()=>'Feedback unavailable.');
  state.loadingInterview = false;
  
  state.completed['interview'] = true;
  refreshCard('interview');
  updateStats();
  
  body.innerHTML = `
    <div class="ai-response" style="margin-bottom:24px">
      <div class="ai-response-header" style="font-size:0.8rem">📋 COMPLETE INTERVIEW ASSESSMENT — CONFIDENTIAL</div>
      <div class="ai-response-body" style="font-size:0.85rem">${feedback}</div>
    </div>
    <div class="btn-row">
      <button class="btn btn-ghost" onclick="resetInterview()">Redo Interview</button>
      <button class="btn btn-primary" onclick="closeModal()">Back to Modules</button>
    </div>
  `;
}

function resetInterview(){
  state.interviewStarted = false;
  state.interviewMessages = [];
  state.loadingInterview = false;
  renderInterviewMode(document.getElementById('modal-body'));
}

// API CALL
async function callClaude(prompt){
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      model:'claude-sonnet-4-20250514',
      max_tokens:1000,
      messages:[{role:'user',content:prompt}]
    })
  });
  const data = await response.json();
  if(data.error) throw new Error(data.error.message);
  return data.content.map(c=>c.text||'').join('\n');
}

// Close on outside click
document.getElementById('modal-overlay').addEventListener('click',function(e){
  if(e.target===this) closeModal();
});

renderModules();
</script>

<div style="position:relative;z-index:1;max-width:820px;margin:0 auto 60px;padding:0 20px;">
  <div style="background:#0d1117;border:1px solid #1f2d44;border-radius:12px;overflow:hidden;">
    <div style="background:#111827;border-bottom:1px solid #1f2d44;padding:18px 22px;display:flex;align-items:center;gap:12px;">
      <span style="font-size:1.4rem;">🐙</span>
      <div>
        <div style="font-family:'Orbitron',monospace,sans-serif;font-size:.82rem;font-weight:700;color:#f0f8ff;">How to Host on GitHub Pages — Free &amp; Permanent</div>
        <div style="font-family:'IBM Plex Mono',monospace,sans-serif;font-size:.5rem;color:#6b82a0;letter-spacing:2px;margin-top:3px;">FREE HOSTING · WORKS ON ANY DEVICE · PERMANENT URL</div>
      </div>
    </div>
    <div style="padding:22px;">
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;gap:13px;">
          <div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#00d4ff,#0096cc);color:#000;font-family:'Orbitron',monospace;font-size:.65rem;font-weight:900;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">1</div>
          <div><div style="font-family:'Orbitron',monospace;font-size:.68rem;font-weight:700;color:#f0f8ff;margin-bottom:4px;">Create a Free GitHub Account</div>
          <div style="font-size:.78rem;color:#6b82a0;font-weight:300;line-height:1.6;">Go to <strong style="color:#00d4ff;">github.com</strong> → Sign up → Confirm your email.</div></div>
        </div>
        <div style="display:flex;gap:13px;">
          <div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#00d4ff,#0096cc);color:#000;font-family:'Orbitron',monospace;font-size:.65rem;font-weight:900;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">2</div>
          <div><div style="font-family:'Orbitron',monospace;font-size:.68rem;font-weight:700;color:#f0f8ff;margin-bottom:4px;">Create a New Repository</div>
          <div style="font-size:.78rem;color:#6b82a0;font-weight:300;line-height:1.6;">Click <strong style="color:#00d4ff;">New</strong> → Name it <strong style="color:#00d4ff;">dcca-training</strong> → Set to <strong style="color:#00d4ff;">Public</strong> → Check <strong style="color:#00d4ff;">Add a README file</strong> → Click <strong style="color:#00d4ff;">Create repository</strong>.</div></div>
        </div>
        <div style="display:flex;gap:13px;">
          <div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#00d4ff,#0096cc);color:#000;font-family:'Orbitron',monospace;font-size:.65rem;font-weight:900;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">3</div>
          <div><div style="font-family:'Orbitron',monospace;font-size:.68rem;font-weight:700;color:#f0f8ff;margin-bottom:4px;">Download This File — Save as index.html</div>
          <div style="font-size:.78rem;color:#6b82a0;font-weight:300;line-height:1.6;">Download from Claude. The filename <strong style="color:#00d4ff;">must be exactly: index.html</strong></div>
          <div style="background:#07090e;border:1px solid #1f2d44;border-radius:4px;padding:8px 13px;font-family:'IBM Plex Mono',monospace;font-size:.7rem;color:#00ffcc;margin:6px 0;">index.html</div></div>
        </div>
        <div style="display:flex;gap:13px;">
          <div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#00d4ff,#0096cc);color:#000;font-family:'Orbitron',monospace;font-size:.65rem;font-weight:900;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">4</div>
          <div><div style="font-family:'Orbitron',monospace;font-size:.68rem;font-weight:700;color:#f0f8ff;margin-bottom:4px;">Upload to GitHub</div>
          <div style="font-size:.78rem;color:#6b82a0;font-weight:300;line-height:1.6;">In your repo → <strong style="color:#00d4ff;">Add file → Upload files</strong> → drag index.html → click <strong style="color:#00d4ff;">Commit changes</strong>.</div></div>
        </div>
        <div style="display:flex;gap:13px;">
          <div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#00d4ff,#0096cc);color:#000;font-family:'Orbitron',monospace;font-size:.65rem;font-weight:900;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">5</div>
          <div><div style="font-family:'Orbitron',monospace;font-size:.68rem;font-weight:700;color:#f0f8ff;margin-bottom:4px;">Enable GitHub Pages</div>
          <div style="font-size:.78rem;color:#6b82a0;font-weight:300;line-height:1.6;">Repo → <strong style="color:#00d4ff;">Settings → Pages</strong> → Source: <strong style="color:#00d4ff;">Deploy from a branch</strong> → Branch: <strong style="color:#00d4ff;">main</strong> → Folder: <strong style="color:#00d4ff;">/ (root)</strong> → click <strong style="color:#00d4ff;">Save</strong>.</div></div>
        </div>
        <div style="display:flex;gap:13px;">
          <div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#00d4ff,#0096cc);color:#000;font-family:'Orbitron',monospace;font-size:.65rem;font-weight:900;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">6</div>
          <div><div style="font-family:'Orbitron',monospace;font-size:.68rem;font-weight:700;color:#f0f8ff;margin-bottom:4px;">Your Live URL — Ready in ~2 Minutes</div>
          <div style="background:#07090e;border:1px solid #1f2d44;border-radius:4px;padding:8px 13px;font-family:'IBM Plex Mono',monospace;font-size:.7rem;color:#00ffcc;margin:6px 0;">https://YOUR-USERNAME.github.io/dcca-training/</div>
          <div style="font-size:.78rem;color:#6b82a0;font-weight:300;line-height:1.6;">Bookmark it — works on any device anywhere in the world.</div></div>
        </div>
        <div style="display:flex;gap:13px;">
          <div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#00d4ff,#0096cc);color:#000;font-family:'Orbitron',monospace;font-size:.65rem;font-weight:900;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">7</div>
          <div><div style="font-family:'Orbitron',monospace;font-size:.68rem;font-weight:700;color:#f0f8ff;margin-bottom:4px;">Enable Permanent Score Saving (On Your GitHub Site)</div>
          <div style="font-size:.78rem;color:#6b82a0;font-weight:300;line-height:1.6;">Open index.html in a text editor. Find <strong style="color:#00d4ff;">const completed = {};</strong> and replace with:</div>
          <div style="background:#07090e;border:1px solid #1f2d44;border-radius:4px;padding:8px 13px;font-family:'IBM Plex Mono',monospace;font-size:.7rem;color:#00ffcc;margin:6px 0;">const completed = JSON.parse(localStorage.getItem('dcca_completed')||'{}');</div>
          <div style="font-size:.78rem;color:#6b82a0;font-weight:300;line-height:1.6;margin-top:6px;">Find <strong style="color:#00d4ff;">// in-memory only</strong> and replace with:</div>
          <div style="background:#07090e;border:1px solid #1f2d44;border-radius:4px;padding:8px 13px;font-family:'IBM Plex Mono',monospace;font-size:.7rem;color:#00ffcc;margin:6px 0;">localStorage.setItem('dcca_completed', JSON.stringify(completed));</div>
          <div style="font-size:.78rem;color:#6b82a0;font-weight:300;line-height:1.6;margin-top:6px;">Upload the updated file. Your scores now save permanently.</div></div>
        </div>
      </div>
      <div style="background:rgba(245,166,35,.05);border:1px solid rgba(245,166,35,.2);border-left:3px solid #f5a623;border-radius:4px;padding:12px 15px;margin-top:16px;">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:.5rem;letter-spacing:3px;color:#f5a623;margin-bottom:6px;text-transform:uppercase;">⚠ About Progress in This Claude Preview</div>
        <p style="font-size:.78rem;color:#6b82a0;font-weight:300;line-height:1.6;">Quiz and exam scores save in memory during your current session only and reset when you close this artifact. Claude's artifact environment blocks browser storage APIs. All training content, AI quizzes, exams, and interview coaching work fully here. Once you host on GitHub Pages and apply the Step 7 fix, progress saves permanently.</p>
      </div>
    </div>
  </div>
</div>

</body>
</html>