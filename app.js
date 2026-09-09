/* Portal Familias STM · lógica de la app (sin dependencias) */
(function () {
  'use strict';
  const D = window.DATOS;
  const VERSION = '2.4.1';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

  /* ---------- textos de la interfaz ---------- */
  const DIC = {
    es: {
      appNombre: 'Familias STM', inicio: 'Inicio', calendario: 'Calendario', extras: 'Extras', pagos: 'Pagos', contactos: 'Contactos',
      cuentas: 'Cuentas bancarias', tocaCopiar: 'Toca para copiar', copiado: 'Número copiado', comprobanteT: 'Envía tu comprobante', enviarWa: 'Enviar comprobante por WhatsApp',
      hoy: 'Hoy', sinLeer: 'Sin leer', clasesNormales: 'Clases normales · ' + D.colegio.horaEntrada, sinClases: 'No hay clases', finDeSemana: 'Fin de semana',
      todoAlDia: 'Todo al día', avisosNuevos: n => n + (n === 1 ? ' aviso nuevo' : ' avisos nuevos'),
      accesos: 'Accesos rápidos', accesosSub: 'Enlaces del colegio', destacado: 'Anuncio destacado', leerCompleto: 'Leer el aviso completo →',
      tablero: 'Tablero de anuncios', marcarLeidos: 'Marcar leídos', sinCirc: 'No hay avisos en esta categoría.',
      estaSemana: 'Esta semana', proximas: 'Próximas', verCalendario: 'Ver calendario', sinProx: 'No hay actividades próximas.',
      anteriores: 'Anteriores', semanaDel: (a, b) => `Semana del ${a} al ${b}`,
      verAnteriores: n => `Ver ${n} semana${n > 1 ? 's' : ''} anterior${n > 1 ? 'es' : ''}`, ocultarAnteriores: 'Ocultar anteriores',
      verMesCompleto: 'Ver mes completo', verSoloSemana: 'Ver solo esta semana',
      calSub: 'Año escolar', calTitle: 'Calendario', todoElMes: 'Todo el mes', verTodo: 'Ver todo', noAct: 'No hay actividades programadas.',
      todos: 'Todos', todas: 'Todas', todoColegio: 'Todo el colegio', preescolar: 'Edu. Inicial', primaria: 'Primaria', secundaria: 'Secundaria', todosNiveles: 'Todo el colegio', nivelCorto: { preescolar: 'Inicial', primaria: 'Pri', secundaria: 'Sec' },
      feriado: 'Feriado', academico: 'Académico', civico: 'Cívico', familias: 'Familias', deporte: 'Deporte', artes: 'Artes', pastoral: 'Pastoral', admin: 'Administrativo',
      valorMes: 'Valor del mes',
      extSub: 'Vida estudiantil', extTitle: 'Extracurriculares', extPasos: 'Cómo inscribir a tu hijo/a', extActividades: 'Actividades',
      responsable: 'Responsable', inscripcion: 'Inscripción y pago', sinExtras: 'Aún no hay actividades publicadas.', deN: (a, b) => `${a} de ${b}`,
      cupo: { abierto: 'Cupos abiertos', ultimos: 'Últimos cupos', espera: 'Lista de espera' },
      nuevo: 'Nuevo', descargar: 'Descargar', preguntar: 'Preguntar al colegio', entendido: 'Entendido',
      contTitle: 'Contactos', atencion: 'Atención al público', llamar: 'Llamar', correo: 'Correo', waColegio: 'WhatsApp del colegio',
      ayudaT: '¿No sabes a quién escribir?', ayudaP: 'Escribe a Recepción y te dirigimos al área correcta el mismo día hábil.',
      ajustes: 'Ajustes', mWeb: 'Sitio web del colegio', idioma: 'Idioma',
      instalarT: 'Instala la app en tu celular', instalarP: 'Queda con su ícono en la pantalla de inicio y abre a pantalla completa.', instalarBtn: 'Instalar ahora',
      instAndroid: ['Toca el menú ⋮ de Chrome (arriba a la derecha).', 'Elige "Agregar a la pantalla de inicio" o "Instalar app".', 'Confirma con "Instalar".'],
      instIos: ['Abre esta página en Safari.', 'Toca el botón Compartir (el cuadrado con la flecha).', 'Elige "Agregar a inicio" y confirma.'],
      instOk: 'La app ya está instalada en este dispositivo.',
      meses: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
      mesesCorto: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
      dias: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
      dow: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'],
      fechaLarga: d => `${cap(DIC.es.dias[d.getDay()])} ${d.getDate()} de ${DIC.es.meses[d.getMonth()]}, ${d.getFullYear()}`,
      fechaCorta: d => `${d.getDate()} ${DIC.es.mesesCorto[d.getMonth()]}`,
      diaDe: d => `${d.getDate()} de ${DIC.es.meses[d.getMonth()]}`,
      mesTitulo: (y, m) => `${DIC.es.meses[m]} ${y}`,
      version: 'Portal Familias STM · v' + VERSION
    },
    en: {
      appNombre: 'STM Families', inicio: 'Home', calendario: 'Calendar', extras: 'Clubs', pagos: 'Payments', contactos: 'Contacts',
      cuentas: 'Bank accounts', tocaCopiar: 'Tap to copy', copiado: 'Number copied', comprobanteT: 'Send your receipt', enviarWa: 'Send receipt via WhatsApp',
      hoy: 'Today', sinLeer: 'Unread', clasesNormales: 'Regular classes · ' + D.colegio.horaEntrada, sinClases: 'No classes', finDeSemana: 'Weekend',
      todoAlDia: 'All caught up', avisosNuevos: n => n + (n === 1 ? ' new notice' : ' new notices'),
      accesos: 'Quick links', accesosSub: 'School links', destacado: 'Featured notice', leerCompleto: 'Read the full notice →',
      tablero: 'Notice board', marcarLeidos: 'Mark all read', sinCirc: 'No notices in this category.',
      estaSemana: 'This week', proximas: 'Upcoming', verCalendario: 'See calendar', sinProx: 'No upcoming activities.',
      anteriores: 'Earlier', semanaDel: (a, b) => `Week of ${a} to ${b}`,
      verAnteriores: n => `Show ${n} earlier week${n > 1 ? 's' : ''}`, ocultarAnteriores: 'Hide earlier weeks',
      verMesCompleto: 'Show full month', verSoloSemana: 'Show this week only',
      calSub: 'School year', calTitle: 'Calendar', todoElMes: 'Whole month', verTodo: 'See all', noAct: 'No activities scheduled.',
      todos: 'All', todas: 'All', todoColegio: 'Whole school', preescolar: 'Early Ed.', primaria: 'Elementary', secundaria: 'High school', todosNiveles: 'Whole school', nivelCorto: { preescolar: 'Early', primaria: 'Elem', secundaria: 'High' },
      feriado: 'Holiday', academico: 'Academic', civico: 'Civic', familias: 'Families', deporte: 'Sports', artes: 'Arts', pastoral: 'Pastoral', admin: 'Administrative',
      valorMes: 'Value of the month',
      extSub: 'Student life', extTitle: 'Extracurriculars', extPasos: 'How to enroll your child', extActividades: 'Activities',
      responsable: 'Lead', inscripcion: 'Enrollment and payment', sinExtras: 'No activities published yet.', deN: (a, b) => `${a} of ${b}`,
      cupo: { abierto: 'Spots open', ultimos: 'Last spots', espera: 'Waiting list' },
      nuevo: 'New', descargar: 'Download', preguntar: 'Ask the school', entendido: 'Got it',
      contTitle: 'Contacts', atencion: 'Office hours', llamar: 'Call', correo: 'Email', waColegio: 'School WhatsApp',
      ayudaT: 'Not sure who to contact?', ayudaP: 'Write to the front desk and we will direct you to the right area the same business day.',
      ajustes: 'Settings', mWeb: 'School website', idioma: 'Language',
      instalarT: 'Install the app on your phone', instalarP: 'It gets its own icon on the home screen and opens full screen.', instalarBtn: 'Install now',
      instAndroid: ['Tap the ⋮ menu in Chrome (top right).', 'Choose "Add to Home screen" or "Install app".', 'Confirm with "Install".'],
      instIos: ['Open this page in Safari.', 'Tap the Share button (square with an arrow).', 'Choose "Add to Home Screen" and confirm.'],
      instOk: 'The app is already installed on this device.',
      meses: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      mesesCorto: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      dias: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dow: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      fechaLarga: d => `${DIC.en.dias[d.getDay()]}, ${DIC.en.meses[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`,
      fechaCorta: d => `${DIC.en.mesesCorto[d.getMonth()]} ${d.getDate()}`,
      diaDe: d => `${DIC.en.meses[d.getMonth()]} ${d.getDate()}`,
      mesTitulo: (y, m) => `${DIC.en.meses[m]} ${y}`,
      version: 'STM Family Portal · v' + VERSION
    }
  };
  /* tipos de aviso / actividad: color de texto, fondo e ícono (según el diseño) */
  const TIPOS = {
    academico: { fg: '#015BB1', bg: '#E3EEF8', ic: 'book' },
    civico:    { fg: '#16154D', bg: '#E4E4F2', ic: 'flag' },
    familias:  { fg: '#0C6A38', bg: '#DFF2E4', ic: 'people' },
    deporte:   { fg: '#B07E00', bg: '#FCF1D2', ic: 'ball' },
    artes:     { fg: '#7A4DB8', bg: '#EFE9F8', ic: 'music' },
    feriado:   { fg: '#C8402E', bg: '#FBE7E3', ic: 'star' },
    pastoral:  { fg: '#0B7285', bg: '#E0F2F5', ic: 'cross' },
    admin:     { fg: '#4B5A51', bg: '#F1F4F2', ic: 'card' }
  };
  const tipo = k => TIPOS[k] || TIPOS.admin;
  const CATS = ['academico', 'civico', 'familias', 'deporte', 'artes', 'pastoral', 'admin'];
  const tipoIcon = (k, cls = 'tipo') => { const t = tipo(k); return `<span class="${cls}" style="--tipo:${t.fg};--tipo-bg:${t.bg}"><svg class="ic"><use href="#i-${t.ic}"/></svg></span>`; };
  const tag = (k, T) => { const t = tipo(k); return `<span class="tag" style="background:${t.bg};color:${t.fg}">${T[k] || k}</span>`; };
  const monday = d => { const m = new Date(d); m.setDate(m.getDate() - ((m.getDay() + 6) % 7)); m.setHours(0, 0, 0, 0); return m; };
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const telHref = s => 'tel:' + String(s).replace(/[^\d+]/g, '');
  const waHref = s => 'https://wa.me/' + String(s).replace(/\D/g, '');

  /* ---------- estado ---------- */
  const store = {
    get(k, def) { try { const v = localStorage.getItem('stm.' + k); return v === null ? def : JSON.parse(v); } catch (e) { return def; } },
    set(k, v) { try { localStorage.setItem('stm.' + k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } }
  };
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const state = {
    lang: store.get('lang', 'es'),
    screen: 'inicio',
    cat: 'todos', xtipo: 'todos', level: 'todos',
    year: today.getFullYear(), month: today.getMonth(),
    day: null, calOpen: false, showPast: false,
    read: store.get('read', [])
  };
  const t = () => DIC[state.lang];
  const L = v => (v && typeof v === 'object') ? (v[state.lang] ?? v.es) : (v ?? '');
  const parse = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const acts = () => D.actividades.map(a => ({ ...a, date: parse(a.fecha), end: parse(a.hasta || a.fecha) })).sort((a, b) => a.date - b.date);
  const sameDay = (a, b) => a.getTime() === b.getTime();
  const covers = (e, d) => d >= e.date && d <= e.end;
  const avisos = () => D.avisos.slice().sort((a, b) => b.fecha.localeCompare(a.fecha));
  const isRead = id => state.read.includes(id);

  /* ---------- navegación ---------- */
  const SCREENS = ['inicio', 'aviso', 'calendario', 'extras', 'pagos', 'contactos'];
  const TAB_OF = { inicio: 'inicio', aviso: 'inicio', calendario: 'calendario', extras: 'extras', pagos: 'pagos', contactos: 'contactos' };
  function go(screen, push = true) {
    state.screen = screen;
    $$('.screen').forEach(s => s.classList.toggle('on', s.id === 's-' + screen));
    $$('.tabbar button').forEach(b => b.setAttribute('aria-current', b.dataset.tab === TAB_OF[screen] ? 'true' : 'false'));
    const sc = $('#s-' + screen); if (sc) sc.scrollTop = 0;
    if (push) { try { history.pushState({ screen }, '', '#' + screen); } catch (e) { /* sin historial (iframe o vista previa) */ } }
  }
  window.addEventListener('popstate', e => go((e.state && e.state.screen) || 'inicio', false));
  document.addEventListener('click', e => {
    const g = e.target.closest('[data-go]'); if (g) { e.preventDefault(); go(g.dataset.go); return; }
    const tb = e.target.closest('[data-tab]'); if (tb) { go(tb.dataset.tab); }
  });

  /* ---------- textos fijos ---------- */
  function renderStatic() {
    const T = t(); const C = D.colegio;
    document.documentElement.lang = state.lang;
    $$('[data-t]').forEach(el => { const v = T[el.dataset.t]; if (typeof v === 'string') el.textContent = v; });
    $$('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === state.lang ? 'true' : 'false'));
    $('[data-hoy]').textContent = T.fechaLarga(new Date());
    $$('[data-web]').forEach(a => a.href = C.web);
    $$('[data-wa]').forEach(a => a.href = waHref(C.whatsapp));
    $('[data-dir1]').textContent = L(C.direccion);
    $('[data-dir2]').textContent = L(C.direccion2);
    $('[data-horas]').textContent = L(C.horario);
    $('[data-version]').textContent = T.version;
    $('[data-legend]').innerHTML = ['academico', 'civico', 'familias', 'deporte', 'artes', 'pastoral', 'feriado'].map(k => `<span><i style="background:${tipo(k).fg}"></i>${T[k]}</span>`).join('');
    $('[data-cats]').innerHTML = ['todos'].concat(CATS).map(k => `<button class="chip" data-cat="${k}" aria-pressed="${state.cat === k}">${T[k]}</button>`).join('');
    $('[data-xtipos]').innerHTML = ['todos', 'deporte', 'artes', 'academico'].map(k => `<button class="chip" data-xtipo="${k}" aria-pressed="${state.xtipo === k}">${k === 'todos' ? T.todas : T[k]}</button>`).join('');
    renderInstall();
  }

  /* ---------- inicio ---------- */
  function renderInicio() {
    const T = t();
    // estado de hoy
    const hoyActs = acts().filter(a => covers(a, today));
    const dow = today.getDay();
    $('[data-hoy-estado]').textContent = hoyActs.some(a => a.tipo === 'feriado') ? T.sinClases : (dow === 0 || dow === 6 ? T.finDeSemana : T.clasesNormales);
    const unread = D.avisos.filter(a => !isRead(a.id)).length;
    $('[data-sin-leer]').textContent = unread ? T.avisosNuevos(unread) : T.todoAlDia;
    $('[data-unread-dot]').hidden = !unread;
    // accesos rápidos
    const links = (D.enlaces || []).filter(l => l.url);
    $('[data-enlaces]').innerHTML = links.map(l =>
      `<a class="lnk" href="${esc(l.url)}"${/^https?:/.test(l.url) ? ' target="_blank" rel="noopener"' : ''}><span class="lnk-ic"><svg class="ic"><use href="#i-${esc(l.icono || 'doc')}"/></svg></span><span>${esc(L(l.nombre))}</span></a>`).join('');
    $('[data-enlaces-title]').hidden = !links.length;
    $('[data-enlaces]').hidden = !links.length;
    // promo (Recomienda Amigos)
    const P = D.promo;
    $('[data-promo]').innerHTML = (P && P.url)
      ? `<a class="card promo" href="${esc(P.url)}" target="_blank" rel="noopener">
           <div><h4>${esc(L(P.titulo))}</h4><p>${esc(L(P.texto))}</p></div>
           <span class="gift"><svg class="ic"><use href="#i-gift"/></svg></span>
           <span class="btn">${esc(L(P.boton))} <svg class="ic"><use href="#i-open"/></svg></span></a>`
      : '';
    // destacado
    const list = avisos();
    const dest = list[0];
    $('[data-destacado]').innerHTML = dest
      ? `<button class="card featured" data-open-circ="${dest.id}">
           <div class="top"><span class="tag light">${T[dest.tipo] || dest.tipo}</span><time>${T.diaDe(parse(dest.fecha))}</time></div>
           <h4>${esc(L(dest.titulo))}</h4><p>${esc(L(dest.resumen) || L(dest.cuerpo).slice(0, 90))}</p>
           <span class="more">${T.leerCompleto}</span></button>`
      : '';
    // tablero
    const filtered = list.filter(a => state.cat === 'todos' || a.tipo === state.cat);
    $('[data-aviso-list]').innerHTML = filtered.length ? `<div class="card list">${filtered.map(a => {
      const nueva = !isRead(a.id);
      return `<button class="brow" data-open-circ="${a.id}">${tipoIcon(a.tipo)}
        <span class="bcol"><span class="bmeta">${tag(a.tipo, T)}<time>${T.fechaCorta(parse(a.fecha))}</time></span>
        <span class="btit">${esc(L(a.titulo))}</span><span class="bsum">${esc(L(a.resumen) || L(a.cuerpo).slice(0, 90))}</span></span>
        ${nueva ? '<span class="bdot" aria-label="' + T.nuevo + '"></span>' : ''}</button>`;
    }).join('')}</div>` : `<div class="card empty">${T.sinCirc}</div>`;
    // esta semana / próximos
    const prox = acts().filter(a => a.end >= today).slice(0, 3);
    $('[data-proximos]').innerHTML = prox.length ? prox.map(a => `<button class="prox" data-go="calendario" data-jump="${a.fecha}">
        <span class="pdate" style="background:${tipo(a.tipo).bg};color:${tipo(a.tipo).fg}"><small>${T.mesesCorto[a.date.getMonth()]}</small><b class="num">${a.date.getDate()}</b></span>
        <span class="pcol"><span class="ptit">${esc(L(a.titulo))}</span><span class="pdet">${esc(L(a.detalle))}</span></span>
        <span class="tag nivel">${a.niveles.length === 3 ? T.todos : a.niveles.map(n => T.nivelCorto[n]).join(' · ')}</span></button>`).join('')
      : `<div class="empty">${T.sinProx}</div>`;
  }
  function openCirc(id) {
    const T = t();
    const c = D.avisos.find(x => x.id === id); if (!c) return;
    if (!isRead(id)) { state.read.push(id); store.set('read', state.read); }
    $('[data-circ-eyebrow]').textContent = `${T[c.tipo] || c.tipo} · ${T.diaDe(parse(c.fecha))}`;
    $('[data-circ-title]').textContent = L(c.titulo);
    $('[data-circ-body]').textContent = L(c.cuerpo);
    const ps = $('[data-circ-pasos]');
    if (c.pasos && c.pasos.length) { ps.hidden = false; ps.innerHTML = c.pasos.map((p, i) => `<div class="paso"><span class="n num">${i + 1}</span><p>${esc(L(p))}</p></div>`).join(''); } else ps.hidden = true;
    const ct = $('[data-circ-contacto]');
    if (c.contacto) {
      ct.hidden = false;
      $('[data-circ-contacto-nombre]').textContent = L(c.contacto.nombre);
      $('[data-circ-contacto-detalle]').textContent = [c.contacto.telefono, c.contacto.correo].filter(Boolean).join(' · ');
      $('[data-circ-contacto-ways]').innerHTML = [
        c.contacto.whatsapp ? `<a class="wa" href="${waHref(c.contacto.whatsapp)}" target="_blank" rel="noopener" aria-label="WhatsApp"><svg class="ic"><use href="#i-chat"/></svg></a>` : '',
        c.contacto.telefono ? `<a href="${telHref(c.contacto.telefono)}" aria-label="${T.llamar}"><svg class="ic"><use href="#i-phone"/></svg></a>` : '',
        c.contacto.correo ? `<a href="mailto:${esc(c.contacto.correo)}" aria-label="${T.correo}"><svg class="ic"><use href="#i-mail"/></svg></a>` : ''
      ].join('');
    } else ct.hidden = true;
    const f = $('[data-circ-file]');
    if (c.adjunto) { f.hidden = false; f.href = 'circulares/' + c.adjunto; $('[data-circ-file-name]').textContent = c.adjunto; } else f.hidden = true;
    renderInicio();
    go('aviso');
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-open-circ]'); if (b) { openCirc(b.dataset.openCirc); return; }
    const c = e.target.closest('[data-cat]');
    if (c) { state.cat = c.dataset.cat; $$('[data-cat]').forEach(x => x.setAttribute('aria-pressed', x === c ? 'true' : 'false')); renderInicio(); return; }
    if (e.target.closest('[data-marcar-leidos]')) { state.read = D.avisos.map(a => a.id); store.set('read', state.read); renderInicio(); }
  });

  /* ---------- calendario ---------- */
  function visibleEvents() { return acts().filter(a => state.level === 'todos' || a.niveles.includes(state.level)); }
  function renderAgenda() {
    const T = t();
    const { year, month } = state;
    $('[data-month-title]').textContent = T.mesTitulo(year, month);
    const valor = (D.valores || {})[year + '-' + String(month + 1).padStart(2, '0')];
    const vEl = $('[data-valor]'); vEl.hidden = !valor; vEl.textContent = valor ? `${T.valorMes}: ${L(valor)}` : '';
    const mStart = new Date(year, month, 1), mEnd = new Date(year, month + 1, 0);
    const evs = visibleEvents().filter(a => a.date <= mEnd && a.end >= mStart);
    const onDay = d => evs.filter(e => covers(e, new Date(year, month, d)));
    const first = (new Date(year, month, 1).getDay() + 6) % 7;
    const days = new Date(year, month + 1, 0).getDate();
    const inThisMonth = year === today.getFullYear() && month === today.getMonth();
    const focusMonday = state.day ? monday(new Date(year, month, state.day)) : (inThisMonth ? monday(today) : monday(new Date(year, month, 1)));
    let html = T.dow.map(d => `<div class="dow">${d}</div>`).join('');
    const cell = (y, m, d, dim) => {
      const dt = new Date(y, m, d);
      const de = dim ? [] : onDay(d);
      const dow = (dt.getDay() + 6) % 7;
      const isToday = dt.getTime() === today.getTime();
      const cls = ['day', dow >= 5 || dim ? 'off' : '', de.some(e => e.tipo === 'feriado') ? 'hol' : '', isToday ? 'today' : '', de.length ? 'has' : ''].filter(Boolean).join(' ');
      if (dim) return `<div class="${cls}" style="opacity:.35"><span class="num">${d}</span><span class="dots"></span></div>`;
      return `<button class="${cls}" data-day="${d}" aria-pressed="${state.day === d}" aria-label="${d} ${T.meses[m]}"><span class="num">${d}</span><span class="dots">${de.slice(0, 3).map(e => `<i style="background:${tipo(e.tipo).fg}"></i>`).join('')}</span></button>`;
    };
    if (state.calOpen) {
      for (let i = 0; i < first; i++) html += '<div></div>';
      for (let d = 1; d <= days; d++) html += cell(year, month, d, false);
    } else {
      for (let i = 0; i < 7; i++) { const dt = addDays(focusMonday, i); html += cell(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getMonth() !== month); }
    }
    $('[data-cal]').innerHTML = html;
    $('[data-cal-toggle]').innerHTML = `${state.calOpen ? T.verSoloSemana : T.verMesCompleto} <svg class="ic"><use href="#i-chev-${state.calOpen ? 'u' : 'd'}"/></svg>`;

    const row = e => `<div class="ev${e.end < today ? ' past' : ''}">
        <div class="d"><b class="num${e.tipo === 'feriado' ? ' hol' : ''}">${e.date.getDate()}</b><small>${T.dow[(e.date.getDay() + 6) % 7]}</small>${!sameDay(e.date, e.end) ? `<span class="rango">→ ${e.end.getDate()}${e.end.getMonth() !== e.date.getMonth() ? ' ' + T.mesesCorto[e.end.getMonth()] : ''}</span>` : ''}</div>
        <div><h4>${esc(L(e.titulo))}</h4><p>${esc(L(e.detalle))}</p>
          <div class="tags">${tag(e.tipo, T)}${e.niveles.length === 3 ? `<span class="tag nivel">${T.todosNiveles}</span>` : e.niveles.map(l => `<span class="tag nivel">${T[l]}</span>`).join('')}</div>
        </div>${tipoIcon(e.tipo)}</div>`;

    if (state.day) {
      const shown = onDay(state.day);
      $('[data-ev-title]').textContent = T.diaDe(new Date(year, month, state.day));
      $('[data-ev-clear]').hidden = false;
      $('[data-events]').innerHTML = shown.length ? `<div class="card list">${shown.map(row).join('')}</div>` : `<div class="card empty">${T.noAct}</div>`;
      return;
    }
    $('[data-ev-title]').textContent = T.todoElMes;
    $('[data-ev-clear]').hidden = true;
    if (!evs.length) { $('[data-events]').innerHTML = `<div class="card empty">${T.noAct}</div>`; return; }
    const weeks = [];
    evs.forEach(e => {
      const anchor = e.date < mStart ? mStart : e.date;
      const k = monday(anchor).getTime();
      let w = weeks.find(x => x.k === k);
      if (!w) { w = { k, start: monday(anchor), items: [] }; weeks.push(w); }
      w.items.push(e);
    });
    weeks.sort((a, b) => a.k - b.k);
    const thisMon = monday(today).getTime();
    const past = weeks.filter(w => w.k < thisMon);
    const current = weeks.filter(w => w.k >= thisMon);
    const block = w => {
      const isNow = w.k === thisMon, isPast = w.k < thisMon;
      const fri = addDays(w.start, 4);
      const cross = fri.getMonth() !== w.start.getMonth();
      const label = isNow ? T.estaSemana : T.semanaDel(w.start.getDate() + (cross ? ' ' + T.mesesCorto[w.start.getMonth()] : ''), fri.getDate() + (cross ? ' ' + T.mesesCorto[fri.getMonth()] : ''));
      const sub = isNow ? `${w.start.getDate()}–${fri.getDate()} ${T.mesesCorto[fri.getMonth()]}` : `${w.items.length}`;
      return `<div class="week-title"><span class="eyebrow${isPast ? ' pasada' : ''}">${label}</span><small>${sub}</small></div><div class="card list">${w.items.map(row).join('')}</div>`;
    };
    let out = '';
    if (past.length) {
      out += `<div class="ver-anteriores"><button data-toggle-past>${state.showPast ? T.ocultarAnteriores : T.verAnteriores(past.length)}</button></div>`;
      if (state.showPast) out += past.map(block).join('');
    }
    out += current.map(block).join('');
    $('[data-events]').innerHTML = out;
  }
  $('[data-cal]').addEventListener('click', e => {
    const b = e.target.closest('[data-day]'); if (!b) return;
    const d = Number(b.dataset.day); state.day = state.day === d ? null : d; renderAgenda();
  });
  $('[data-cal-toggle]').addEventListener('click', () => { state.calOpen = !state.calOpen; renderAgenda(); });
  $('[data-ev-clear]').addEventListener('click', () => { state.day = null; renderAgenda(); });
  $$('[data-month]').forEach(b => b.addEventListener('click', () => {
    let m = state.month + Number(b.dataset.month), y = state.year;
    if (m < 0) { m = 11; y--; } if (m > 11) { m = 0; y++; }
    state.month = m; state.year = y; state.day = null; state.showPast = false; renderAgenda();
  }));
  $$('[data-level]').forEach(c => c.addEventListener('click', () => {
    state.level = c.dataset.level; state.day = null;
    $$('[data-level]').forEach(x => x.setAttribute('aria-pressed', x === c ? 'true' : 'false'));
    renderAgenda();
  }));
  document.addEventListener('click', e => {
    if (e.target.closest('[data-toggle-past]')) { state.showPast = !state.showPast; renderAgenda(); return; }
    const j = e.target.closest('[data-jump]'); if (!j) return;
    const d = parse(j.dataset.jump); state.year = d.getFullYear(); state.month = d.getMonth(); state.day = d.getDate(); state.calOpen = false; renderAgenda();
  });

  /* ---------- extracurriculares ---------- */
  function renderExtras() {
    const T = t();
    const X = D.extracurriculares || { pasos: [], actividades: [] };
    $('[data-pasos]').innerHTML = X.pasos.map((p, i) => `<div class="paso"><span class="n num">${i + 1}</span><p>${esc(L(p))}</p></div>`).join('');
    if (X.pago) {
      $('[data-pago-lugar]').textContent = L(X.pago.lugar);
      $('[data-pago-detalle]').textContent = L(X.pago.detalle);
      $('[data-pago-ways]').innerHTML = [
        X.pago.telefono ? `<a href="${telHref(X.pago.telefono)}" aria-label="${T.llamar}"><svg class="ic"><use href="#i-phone"/></svg></a>` : '',
        X.pago.correo ? `<a href="mailto:${esc(X.pago.correo)}" aria-label="${T.correo}"><svg class="ic"><use href="#i-mail"/></svg></a>` : ''
      ].join('');
    } else $('[data-pago]').hidden = true;
    const all = X.actividades;
    const list = all.filter(a => state.xtipo === 'todos' || a.tipo === state.xtipo);
    $('[data-ext-count]').textContent = T.deN(list.length, all.length);
    const ways = a => [
      a.whatsapp ? `<a class="wa" href="${waHref(a.whatsapp)}" target="_blank" rel="noopener" aria-label="WhatsApp"><svg class="ic"><use href="#i-chat"/></svg></a>` : '',
      a.telefono ? `<a href="${telHref(a.telefono)}" aria-label="${T.llamar}"><svg class="ic"><use href="#i-phone"/></svg></a>` : '',
      a.correo ? `<a href="mailto:${esc(a.correo)}" aria-label="${T.correo}"><svg class="ic"><use href="#i-mail"/></svg></a>` : ''
    ].join('');
    const cupoCls = { abierto: 'ok', ultimos: 'warn', espera: 'wait' };
    $('[data-extras]').innerHTML = list.length ? list.map(a =>
      `<div class="card extra">
        <div class="top">${tipoIcon(a.tipo)}<div><h4>${esc(L(a.nombre))}</h4>${a.horario ? `<div class="meta">${esc(L(a.horario))}</div>` : ''}
          <div class="tags">${a.programa ? `<span class="tag" style="background:${tipo(a.tipo).bg};color:${tipo(a.tipo).fg}">${esc(L(a.programa))}</span>` : ''}${a.niveles ? `<span class="tag nivel">${esc(L(a.niveles))}</span>` : ''}${a.cupo && T.cupo[a.cupo] ? `<span class="tag cupo ${cupoCls[a.cupo] || ''}">${T.cupo[a.cupo]}</span>` : ''}</div></div></div>
        <div class="resp"><div><b>${T.responsable}</b>${esc(L(a.responsable))}${a.inscripcion ? `<div class="insc">${T.inscripcion}: ${esc(L(a.inscripcion.nombre))}</div>` : ''}</div><div class="ways">${ways(a.inscripcion || a)}</div></div>
      </div>`).join('') : `<div class="card empty">${T.sinExtras}</div>`;
  }
  document.addEventListener('click', e => {
    const c = e.target.closest('[data-xtipo]'); if (!c) return;
    state.xtipo = c.dataset.xtipo; $$('[data-xtipo]').forEach(x => x.setAttribute('aria-pressed', x === c ? 'true' : 'false')); renderExtras();
  });

  /* ---------- contactos ---------- */
  function renderContactos() {
    const T = t();
    $('[data-grupos]').innerHTML = (D.grupos || []).map(g =>
      `<div class="week-title"><span class="eyebrow">${esc(L(g.titulo))}</span><small>${esc(L(g.nota))}</small></div>
       <div class="card list">${g.filas.map((f, i) => {
        const datos = [f.correo ? esc(f.correo) : '', f.telefono ? `<span class="num">${esc(f.telefono)}</span>` : ''].filter(Boolean).join(' · ');
        const ways = [
          f.whatsapp ? `<a class="wa" href="${waHref(f.whatsapp)}" target="_blank" rel="noopener" aria-label="WhatsApp ${esc(L(f.nombre))}"><svg class="ic"><use href="#i-chat"/></svg></a>` : '',
          f.telefono ? `<a href="${telHref(f.telefono)}" aria-label="${T.llamar}: ${esc(L(f.nombre))}"><svg class="ic"><use href="#i-phone"/></svg></a>` : '',
          f.correo ? `<a href="mailto:${esc(f.correo)}" aria-label="${T.correo}: ${esc(L(f.nombre))}"><svg class="ic"><use href="#i-mail"/></svg></a>` : ''
        ].join('');
        return `<div class="contact${g.numerado ? ' numbered' : ''}">${g.numerado ? `<span class="n num">${i + 1}</span>` : ''}
          <div><h4>${esc(L(f.nombre))}</h4>${f.rol ? `<p class="rol">${esc(L(f.rol))}</p>` : ''}<p>${datos}</p>${f.nota ? `<p class="nota">${esc(L(f.nota))}</p>` : ''}</div>
          <div class="ways">${ways}</div></div>`;
      }).join('')}</div>`).join('');
  }

  /* ---------- pagos · servicios educativos ---------- */
  function renderPagos() {
    const T = t(); const P = D.pagos; if (!P) return;
    $('[data-pagos-titulo]').textContent = L(P.titulo);
    $('[data-pagos-sub]').textContent = L(P.sub);
    $('[data-pagos-intro]').textContent = L(P.intro);
    $('[data-pagos-nota]').textContent = L(P.notaCuentas);
    $('[data-pagos-comprobante]').textContent = L(P.comprobante);
    $('[data-cuentas]').innerHTML = (P.cuentas || []).map(c =>
      `<button class="cuenta" data-copy="${esc(c.numero)}" aria-label="${esc(c.banco)} ${esc(L(c.moneda))} ${esc(c.numero)}, ${T.tocaCopiar}">
        <div><span class="banco">${esc(c.banco)}</span><span class="moneda">${esc(L(c.moneda))}</span><div class="numero num">${esc(c.numero)}</div></div>
        <span class="copy"><svg class="ic"><use href="#i-copy"/></svg></span></button>`).join('');
    const C = P.contacto || {};
    const wa = $('[data-pagos-wa]');
    if (C.whatsapp) { wa.hidden = false; wa.href = waHref(C.whatsapp) + '?text=' + encodeURIComponent(L(P.mensajeWhatsApp) || ''); } else wa.hidden = true;
    const m = $('[data-pagos-mail]'); if (C.correo) { m.hidden = false; m.href = 'mailto:' + C.correo; } else m.hidden = true;
    const p = $('[data-pagos-tel]'); if (C.telefono) { p.hidden = false; p.href = telHref(C.telefono); } else p.hidden = true;
    $('[data-pagos-horario]').textContent = [L(C.nombre), C.whatsapp ? 'WhatsApp ' + C.whatsapp : '', C.correo, L(C.horario)].filter(Boolean).join(' · ');
  }
  let toastTimer = null;
  function toast(msg) {
    let el = $('.toast'); if (!el) { el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); }
    el.textContent = msg; el.classList.add('on'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('on'), 1600);
  }
  document.addEventListener('click', async e => {
    const b = e.target.closest('[data-copy]'); if (!b) return;
    const v = b.dataset.copy;
    try { await navigator.clipboard.writeText(v); } catch (err) {
      const ta = document.createElement('textarea'); ta.value = v; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e2) { /* sin portapapeles */ } ta.remove();
    }
    b.classList.add('copied'); setTimeout(() => b.classList.remove('copied'), 1600);
    toast(t().copiado + ': ' + v);
  });

  /* ---------- idioma ---------- */
  $$('[data-lang]').forEach(b => b.addEventListener('click', () => { state.lang = b.dataset.lang; store.set('lang', state.lang); renderAll(); }));

  /* ---------- instalación (PWA) ---------- */
  let deferredInstall = null;
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredInstall = e; renderInstall(); });
  window.addEventListener('appinstalled', () => { deferredInstall = null; renderInstall(); });
  function renderInstall() {
    const T = t();
    const standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const btn = $('[data-install-btn]'); const steps = $('[data-install-steps]'); const p = $('[data-install] p');
    if (standalone) { p.textContent = T.instOk; steps.innerHTML = ''; btn.hidden = true; return; }
    p.textContent = T.instalarP;
    btn.hidden = !deferredInstall;
    steps.innerHTML = (deferredInstall ? [] : (ios ? T.instIos : T.instAndroid)).map(s => `<li>${s}</li>`).join('');
  }
  $('[data-install-btn]').addEventListener('click', async () => {
    if (!deferredInstall) return;
    deferredInstall.prompt(); await deferredInstall.userChoice; deferredInstall = null; renderInstall();
  });
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }

  /* ---------- arranque ---------- */
  function renderAll() { renderStatic(); renderInicio(); renderAgenda(); renderExtras(); renderPagos(); renderContactos(); }
  renderAll();
  const initial = (location.hash || '#inicio').slice(1);
  go(SCREENS.includes(initial) && initial !== 'aviso' ? initial : 'inicio', false);
  try { history.replaceState({ screen: state.screen }, '', '#' + state.screen); } catch (e) { /* sin historial (iframe o vista previa) */ }
})();
