/* =====================================================================
   DATOS DEL PORTAL FAMILIAS STM
   Este es el único archivo que hay que editar para cambiar el contenido:
   avisos, actividades del calendario, extracurriculares, contactos y enlaces.
   Guarda, sube el cambio a la carpeta /familias del sitio y listo.
   Los textos con { es: ..., en: ... } se muestran según el idioma elegido.
   ===================================================================== */

window.DATOS = {

  colegio: {
    nombre: 'St. Mary School',
    direccion: 'Km 14 Carretera a Masaya',
    direccion2: { es: '800 m hacia Veracruz, Managua', en: '800 m towards Veracruz, Managua' },
    horario: { es: 'Lunes a viernes · 7:00 a.m. – 4:00 p.m.', en: 'Monday to Friday · 7:00 a.m. – 4:00 p.m.' },
    telefono: '+505 2279 8841',
    whatsapp: '+505 8731 9149',
    correo: 'servicioalcliente@stmary.edu.ni',
    web: 'https://stmary.edu.ni',
    horaEntrada: '7:00 a.m.'
  },

  /* Accesos rápidos (desactivados; si se quieren de nuevo, agregar aquí { nombre, url, icono }). */
  enlaces: [],

  /* Tarjeta destacada al inicio (programa Recomienda Amigos). Si url queda vacío, no se muestra. */
  promo: {
    titulo: { es: '¡Recomienda amigos y gánate un bono!', en: 'Refer friends and win a bonus!' },
    texto: { es: 'Programa Recomienda Amigos: si conoces a una familia que busca colegio, recomiéndanos y gana un bono.', en: 'Refer a Friend program: if you know a family looking for a school, refer us and win a bonus.' },
    boton: { es: 'Recomendar ahora', en: 'Refer now' },
    url: 'https://docs.google.com/forms/d/1OreIsTL4pORr7bDCtEM7MI6HjriIQlilAdkEl-srDA8/viewform'
  },

  /* Pestaña "Pagos" (Servicios Educativos): cuentas bancarias y a dónde enviar el comprobante. */
  pagos: {
    titulo: { es: 'Servicios Educativos', en: 'Educational Services' },
    sub: { es: 'Pagos y comprobantes', en: 'Payments and receipts' },
    intro: { es: 'Puedes pagar en Servicios Educativos de lunes a viernes de 7:00 a.m. a 4:00 p.m., o por depósito o transferencia a cualquiera de estas cuentas del colegio.',
             en: 'You can pay at Educational Services Monday to Friday from 7:00 a.m. to 4:00 p.m., or by deposit or transfer to any of these school accounts.' },
    cuentas: [
      { banco: 'BAC', moneda: { es: 'Córdobas', en: 'Córdobas' }, numero: '018029538' },
      { banco: 'BAC', moneda: { es: 'Dólares', en: 'Dollars' }, numero: '358720449' },
      { banco: 'Banpro', moneda: { es: 'Córdobas', en: 'Córdobas' }, numero: '10013906301279' },
      { banco: 'Banpro', moneda: { es: 'Dólares', en: 'Dollars' }, numero: '10023916301285' },
      { banco: 'Ficohsa', moneda: { es: 'Córdobas', en: 'Córdobas' }, numero: '210301000000832' },
      { banco: 'Ficohsa', moneda: { es: 'Dólares', en: 'Dollars' }, numero: '210301010001520' },
      { banco: 'LAFISE', moneda: { es: 'Dólares', en: 'Dollars' }, numero: '106204698' }
    ],
    notaCuentas: { es: 'En el depósito o transferencia, detalla el nombre y el código del estudiante.', en: 'In the deposit or transfer, include the student’s name and code.' },
    comprobante: { es: 'Favor compartir el comprobante de pago a Servicios Educativos por WhatsApp o correo, indicando nombre y código del estudiante.',
                   en: 'Please send the payment receipt to Educational Services by WhatsApp or email, including the student’s name and code.' },
    mensajeWhatsApp: { es: 'Hola, envío el comprobante de pago. Estudiante: ____  Código: ____', en: 'Hello, I am sending the payment receipt. Student: ____  Code: ____' },
    contacto: { nombre: { es: 'Servicios Educativos', en: 'Educational Services' }, whatsapp: '+505 8700 4214', telefono: '+505 8700 4214', correo: 'servicioseducativos@stmary.edu.ni',
                horario: { es: 'Lunes a viernes · 7:00 a.m. – 4:00 p.m.', en: 'Monday to Friday · 7:00 a.m. – 4:00 p.m.' } }
  },

  /* Valor del mes (aparece en el Calendario). Clave: AAAA-MM */
  valores: {
    '2026-09': { es: 'Patriotismo y empatía', en: 'Patriotism and empathy' },
    '2026-10': { es: 'Cooperación y empatía', en: 'Cooperation and empathy' }
  },

  /* Directorio de contactos, por grupos. numerado: true muestra 1, 2, 3 a la izquierda.
     Cada fila puede tener correo, telefono, whatsapp y nota. */
  grupos: [
    { titulo: { es: 'Atención principal', en: 'Main contacts' }, nota: { es: 'Empieza aquí', en: 'Start here' }, numerado: true, filas: [
      { nombre: { es: 'Recepción', en: 'Front desk' }, rol: { es: 'Primer contacto · te dirige al área correcta', en: 'First contact · directs you to the right area' },
        correo: 'servicioalcliente@stmary.edu.ni', telefono: '+505 2279 8841', whatsapp: '+505 8731 9149' },
      { nombre: { es: 'Secretaría Académica', en: 'Academic office' }, rol: { es: 'Constancias, notas, expedientes y matrícula', en: 'Certificates, grades, records and enrollment' },
        correo: 'secretariaacademica@stmary.edu.ni', whatsapp: '+505 8731 9149' },
      { nombre: { es: 'Admisión', en: 'Admissions' }, rol: { es: 'Nuevo ingreso, visitas y proceso de admisión', en: 'New students, visits and admissions process' },
        correo: 'admision@stmary.edu.ni', telefono: '+505 8700 4217' },
      { nombre: { es: 'Servicios Educativos', en: 'Educational Services' }, rol: { es: 'Pagos, comprobantes y trámites', en: 'Payments, receipts and paperwork' },
        correo: 'servicioseducativos@stmary.edu.ni', telefono: '+505 8700 4214' }
    ]},
    { titulo: { es: 'Coordinaciones', en: 'Coordinators' }, nota: { es: 'Por modalidad', en: 'By level' }, filas: [
      { nombre: { es: 'Coordinación de Educación Inicial', en: 'Early childhood coordination' }, rol: { es: 'Prematernal – Kinder', en: 'Pre-nursery – Kinder' },
        correo: 'azamora@stmary.edu.ni', telefono: '+505 8700 4210' },
      { nombre: { es: 'Coordinación de Primaria', en: 'Elementary coordination' }, rol: { es: '1.º a 6.º grado', en: '1st to 6th grade' },
        correo: 'jaguilar@stmary.edu.ni', telefono: '+505 8700 4211' },
      { nombre: { es: 'Coordinación de Secundaria', en: 'High school coordination' }, rol: { es: '7.º a 11.º grado', en: '7th to 11th grade' },
        correo: 'jjoya@stmary.edu.ni', telefono: '+505 8700 4212' }
    ]},
    { titulo: { es: 'Servicios del colegio', en: 'School services' }, nota: { es: 'Día a día', en: 'Day to day' }, filas: [
      { nombre: { es: 'Transporte', en: 'School bus' }, rol: { es: 'Rutas, horarios y reservas de cupo', en: 'Routes, schedules and seat reservations' },
        correo: 'jolivas@stmary.edu.ni', telefono: '+505 8700 4215',
        nota: { es: 'Si necesitas el servicio de recorrido, comunícate con el responsable de transporte a la brevedad para reservar tu cupo.',
                en: 'If you need the bus service, contact the transport lead as soon as possible to reserve a seat.' } },
      { nombre: { es: 'Enfermería', en: 'Nurse’s office' }, rol: { es: 'Salud, medicamentos y emergencias', en: 'Health, medication and emergencies' },
        correo: 'rguerrero@stmary.edu.ni', telefono: '+505 8175 4349' },
      { nombre: { es: 'Deportes', en: 'Sports' }, rol: { es: 'Equipos, ligas y actividades deportivas', en: 'Teams, leagues and sports activities' },
        correo: 'amercado@stmary.edu.ni', telefono: '+505 8818 1630' },
      { nombre: { es: 'Afterschool', en: 'Afterschool' }, rol: { es: 'Programa de la tarde', en: 'Afternoon program' },
        correo: 'cadavila@stmary.edu.ni', telefono: '+505 8906 9020' },
      { nombre: { es: 'Cafetería', en: 'Cafeteria' }, rol: { es: 'Menú y pedidos', en: 'Menu and orders' },
        telefono: '+505 7634 9664' }
    ]}
  ],

  /* Actividades del calendario (tomadas del calendario oficial de septiembre y octubre 2026).
     fecha: AAAA-MM-DD.  hasta: fecha final si dura varios días (opcional).
     tipo: feriado | academico | civico | familias | deporte | artes | pastoral | admin
     niveles: 'preescolar' (Edu. Inicial), 'primaria', 'secundaria' (los tres = todo el colegio). */
  actividades: [
    /* ---- Septiembre 2026 ---- */
    { fecha: '2026-09-01', hasta: '2026-09-04', tipo: 'academico', niveles: ['primaria'],
      titulo: { es: 'Encuentro "Dimensiones de las relaciones sanas"', en: 'Workshop "Dimensions of healthy relationships"' },
      detalle: { es: 'Primaria · del 1 al 4 de septiembre', en: 'Elementary · September 1 to 4' } },
    { fecha: '2026-09-02', hasta: '2026-09-04', tipo: 'academico', niveles: ['secundaria'],
      titulo: { es: 'Encuentros "Las redes sociales: uso, abuso y su realidad"', en: 'Workshops "Social media: use, abuse and reality"' },
      detalle: { es: 'Secundaria · del 2 al 4 de septiembre', en: 'High school · September 2 to 4' } },
    { fecha: '2026-09-03', hasta: '2026-09-04', tipo: 'academico', niveles: ['preescolar'],
      titulo: { es: 'Juego de roles', en: 'Role play' },
      detalle: { es: 'Educación Inicial · 3 y 4 de septiembre', en: 'Early childhood · September 3 and 4' } },
    { fecha: '2026-09-07', hasta: '2026-09-10', tipo: 'academico', niveles: ['secundaria'],
      titulo: { es: 'Encuentros "Uso y abuso de redes sociales"', en: 'Workshops "Social media use and abuse"' },
      detalle: { es: 'Secundaria · del 7 al 10 de septiembre', en: 'High school · September 7 to 10' } },
    { fecha: '2026-09-09', tipo: 'academico', niveles: ['secundaria'],
      titulo: { es: 'Encuentro "¿Cómo canalizo mis emociones?"', en: 'Workshop "How do I channel my emotions?"' },
      detalle: { es: '7.º grado', en: '7th grade' } },
    { fecha: '2026-09-10', tipo: 'civico', niveles: ['preescolar'],
      titulo: { es: 'Celebración de Fiestas Patrias · Festival de comidas típicas', en: 'National Day celebration · Typical meals festival' },
      detalle: { es: 'Educación Inicial · Tarima', en: 'Early childhood · Stage' } },
    { fecha: '2026-09-11', tipo: 'civico', niveles: ['primaria', 'secundaria'],
      titulo: { es: 'Celebración de Fiestas Patrias', en: 'National Day celebration' },
      detalle: { es: 'Primaria y Secundaria', en: 'Elementary and High school' } },
    { fecha: '2026-09-14', hasta: '2026-09-18', tipo: 'feriado', niveles: ['preescolar', 'primaria', 'secundaria'],
      titulo: { es: 'No hay clases · Fiestas Patrias', en: 'No classes · National holidays' },
      detalle: { es: 'Del lunes 14 al viernes 18 de septiembre', en: 'Monday 14 to Friday 18 September' } },
    { fecha: '2026-09-21', tipo: 'civico', niveles: ['preescolar', 'secundaria'],
      titulo: { es: 'Acto cívico · 7B y Kinder', en: 'Civic act · 7B and Kinder' },
      detalle: { es: 'Lunes', en: 'Monday' } },
    { fecha: '2026-09-21', tipo: 'academico', niveles: ['primaria', 'secundaria'],
      titulo: { es: 'Cierre del III trimestre', en: 'Third quarter ends' },
      detalle: { es: 'Último día del tercer trimestre', en: 'Last day of the third quarter' } },
    { fecha: '2026-09-21', tipo: 'academico', niveles: ['secundaria'],
      titulo: { es: 'Encuentro "Impulsos económicos: ¿lo quiero o lo necesito?"', en: 'Workshop "Economic impulses: want or need?"' },
      detalle: { es: '7.º grado', en: '7th grade' } },
    { fecha: '2026-09-21', hasta: '2026-09-25', tipo: 'artes', niveles: ['primaria', 'secundaria'],
      titulo: { es: 'Festival de Teatro', en: 'Theater Festival' },
      detalle: { es: 'Primaria y Secundaria · en tarima, por grado · del 21 al 25', en: 'Elementary and High school · on stage, by grade · 21 to 25' } },
    { fecha: '2026-09-22', tipo: 'academico', niveles: ['primaria', 'secundaria'],
      titulo: { es: 'Inicio del IV trimestre', en: 'Fourth quarter starts' },
      detalle: { es: 'Martes', en: 'Tuesday' } },
    { fecha: '2026-09-22', tipo: 'academico', niveles: ['secundaria'],
      titulo: { es: 'Charla de profesionales a Seniors', en: 'Professionals talk to Seniors' },
      detalle: { es: '11.º grado', en: '11th grade' } },
    { fecha: '2026-09-23', tipo: 'familias', niveles: ['preescolar', 'primaria', 'secundaria'],
      titulo: { es: 'Color Day', en: 'Color Day' },
      detalle: { es: 'Todo el colegio', en: 'Whole school' } },
    { fecha: '2026-09-24', tipo: 'pastoral', niveles: ['preescolar', 'primaria', 'secundaria'],
      titulo: { es: 'Misa en honor a Nuestra Señora de la Merced', en: 'Holy Mass in honor of Our Lady of Mercy' },
      detalle: { es: 'Jueves', en: 'Thursday' } },
    { fecha: '2026-09-24', tipo: 'deporte', niveles: ['primaria', 'secundaria'],
      titulo: { es: 'Inicia la Joy Cup STM 2026', en: 'Joy Cup STM 2026 starts' },
      detalle: { es: 'Torneo deportivo · hasta el 29 de octubre', en: 'Sports tournament · until October 29' } },
    { fecha: '2026-09-24', tipo: 'academico', niveles: ['primaria', 'secundaria'],
      titulo: { es: 'Examen de Language Arts', en: 'Language Arts exam' },
      detalle: { es: 'Jueves', en: 'Thursday' } },
    { fecha: '2026-09-24', hasta: '2026-09-25', tipo: 'academico', niveles: ['primaria', 'secundaria'],
      titulo: { es: 'Evaluaciones', en: 'Evaluations' },
      detalle: { es: 'Jueves 24 y viernes 25', en: 'Thursday 24 and Friday 25' } },
    { fecha: '2026-09-25', tipo: 'academico', niveles: ['primaria', 'secundaria'],
      titulo: { es: 'Examen de Matemáticas', en: 'Mathematics exam' },
      detalle: { es: 'Viernes', en: 'Friday' } },
    { fecha: '2026-09-25', tipo: 'pastoral', niveles: ['primaria'],
      titulo: { es: 'Confesiones 3.º grado · Retiro de Primera Comunión', en: 'Confessions 3rd grade · First Communion retreat' },
      detalle: { es: 'Viernes', en: 'Friday' } },
    { fecha: '2026-09-28', tipo: 'civico', niveles: ['preescolar', 'secundaria'],
      titulo: { es: 'Acto cívico · 7A y Nursery', en: 'Civic act · 7A and Nursery' },
      detalle: { es: 'Lunes', en: 'Monday' } },
    { fecha: '2026-09-30', tipo: 'admin', niveles: ['preescolar', 'primaria', 'secundaria'],
      titulo: { es: 'Último día de matrículas abiertas 2027', en: 'Last day of open enrollment 2027' },
      detalle: { es: 'Último día para reservar cupo con el 10 % de descuento', en: 'Last day to reserve a spot with the 10% discount' } },

    /* ---- Octubre 2026 ---- */
    { fecha: '2026-10-01', tipo: 'pastoral', niveles: ['preescolar'],
      titulo: { es: 'Inician las actividades de Nuestra Señora del Rosario', en: 'Our Lady of the Rosary activities start' },
      detalle: { es: 'Educación Inicial', en: 'Early childhood' } },
    { fecha: '2026-10-01', hasta: '2026-10-09', tipo: 'familias', niveles: ['preescolar', 'primaria', 'secundaria'],
      titulo: { es: 'Jornada de solidaridad · Colecta de alimentos', en: 'Solidarity drive · Food collection' },
      detalle: { es: 'Del 1 al 9 de octubre', en: 'October 1 to 9' } },
    { fecha: '2026-10-02', tipo: 'academico', niveles: ['preescolar', 'primaria', 'secundaria'],
      titulo: { es: 'Entrega de boletines', en: 'Report cards delivery' },
      detalle: { es: 'Viernes', en: 'Friday' } },
    { fecha: '2026-10-02', tipo: 'pastoral', niveles: ['primaria'],
      titulo: { es: 'Confesiones 3.º grado', en: 'Confessions 3rd grade' },
      detalle: { es: 'Viernes', en: 'Friday' } },
    { fecha: '2026-10-02', tipo: 'deporte', niveles: ['secundaria'],
      titulo: { es: 'Torneo de ajedrez 2026', en: 'Chess Tournament 2026' },
      detalle: { es: 'Secundaria', en: 'High school' } },
    { fecha: '2026-10-03', tipo: 'pastoral', niveles: ['primaria'],
      titulo: { es: 'Primera Comunión', en: 'First Holy Communion' },
      detalle: { es: 'Sábado', en: 'Saturday' } },
    { fecha: '2026-10-05', tipo: 'civico', niveles: ['preescolar', 'secundaria'],
      titulo: { es: 'Acto cívico · 7A y Kinder', en: 'Civic act · 7A and Kinder' },
      detalle: { es: 'Lunes', en: 'Monday' } },
    { fecha: '2026-10-05', tipo: 'academico', niveles: ['secundaria'],
      titulo: { es: 'Encuentro "Ensayos y trabajos"', en: 'Workshop "Essays and assignments"' },
      detalle: { es: '7.º grado', en: '7th grade' } },
    { fecha: '2026-10-06', hasta: '2026-10-10', tipo: 'academico', niveles: ['secundaria'],
      titulo: { es: 'Semana de la Salud Mental', en: 'Mental Health Week' },
      detalle: { es: 'Secundaria · del 6 al 10 de octubre', en: 'High school · October 6 to 10' } },
    { fecha: '2026-10-07', tipo: 'pastoral', niveles: ['preescolar', 'primaria', 'secundaria'],
      titulo: { es: 'Misa de Nuestra Señora del Rosario', en: 'Our Lady of the Rosary Mass' },
      detalle: { es: 'Miércoles', en: 'Wednesday' } },
    { fecha: '2026-10-08', tipo: 'pastoral', niveles: ['preescolar', 'primaria', 'secundaria'],
      titulo: { es: 'Rosario misionero', en: 'Mission Rosary' },
      detalle: { es: 'Jueves', en: 'Thursday' } },
    { fecha: '2026-10-09', tipo: 'academico', niveles: ['primaria'],
      titulo: { es: 'Festival "I can read / Ya sé leer"', en: 'Festival "I can read / Ya sé leer"' },
      detalle: { es: 'Viernes', en: 'Friday' } },
    { fecha: '2026-10-09', tipo: 'pastoral', niveles: ['secundaria'],
      titulo: { es: 'Confesiones 10.º grado', en: 'Confessions 10th grade' },
      detalle: { es: 'Viernes', en: 'Friday' } },
    { fecha: '2026-10-10', tipo: 'pastoral', niveles: ['secundaria'],
      titulo: { es: 'Retiro de Confirmación con padrinos', en: 'Confirmation retreat with godparents' },
      detalle: { es: 'Sábado', en: 'Saturday' } },
    { fecha: '2026-10-12', tipo: 'civico', niveles: ['preescolar', 'primaria'],
      titulo: { es: 'Acto cívico · 6A y PK4B', en: 'Civic act · 6A and PK4B' },
      detalle: { es: 'Lunes', en: 'Monday' } },
    { fecha: '2026-10-12', tipo: 'academico', niveles: ['secundaria'],
      titulo: { es: 'Encuentro "DOFA"', en: 'Workshop "SWOT"' },
      detalle: { es: '7.º grado', en: '7th grade' } },
    { fecha: '2026-10-13', hasta: '2026-10-27', tipo: 'academico', niveles: ['primaria', 'secundaria'],
      titulo: { es: 'Olimpiadas de Matemáticas', en: 'Mathematics Olympiads' },
      detalle: { es: 'Del 13 al 27 de octubre', en: 'October 13 to 27' } },
    { fecha: '2026-10-13', tipo: 'academico', niveles: ['secundaria'],
      titulo: { es: 'Redacción de ensayos y debates internos', en: 'Essay writing and internal debates' },
      detalle: { es: '10.º grado', en: '10th grade' } },
    { fecha: '2026-10-13', tipo: 'academico', niveles: ['primaria'],
      titulo: { es: 'Encuentro "Escritura mágica para conocerme"', en: 'Workshop "Magic writing to know myself"' },
      detalle: { es: 'Primaria', en: 'Elementary' } },
    { fecha: '2026-10-14', tipo: 'academico', niveles: ['secundaria'],
      titulo: { es: 'Encuentro "Expectativas para 8.º grado"', en: 'Workshop "Expectations for 8th grade"' },
      detalle: { es: '7.º grado', en: '7th grade' } },
    { fecha: '2026-10-14', tipo: 'familias', niveles: ['preescolar', 'primaria', 'secundaria'],
      titulo: { es: 'Color Day', en: 'Color Day' },
      detalle: { es: 'Todo el colegio', en: 'Whole school' } },
    { fecha: '2026-10-14', tipo: 'academico', niveles: ['secundaria'],
      titulo: { es: 'Debates internos', en: 'Internal debates' },
      detalle: { es: '9.º grado', en: '9th grade' } },
    { fecha: '2026-10-15', tipo: 'familias', niveles: ['secundaria'],
      titulo: { es: 'Servicio comunitario', en: 'Community service' },
      detalle: { es: 'Jueves', en: 'Thursday' } },
    { fecha: '2026-10-15', tipo: 'academico', niveles: ['primaria', 'secundaria'],
      titulo: { es: 'Masterclass de Robótica', en: 'Robotics masterclass' },
      detalle: { es: '1:00 – 4:00 p.m. · Admisión', en: '1:00 – 4:00 p.m. · Admissions' } },
    { fecha: '2026-10-16', tipo: 'pastoral', niveles: ['secundaria'],
      titulo: { es: 'Confesiones 10.º grado', en: 'Confessions 10th grade' },
      detalle: { es: 'Viernes', en: 'Friday' } },
    { fecha: '2026-10-16', tipo: 'familias', niveles: ['preescolar', 'primaria', 'secundaria'],
      titulo: { es: 'Campaña de apoyo · Día de la lucha contra el cáncer de mama', en: 'Support campaign · Breast cancer awareness day' },
      detalle: { es: 'Viernes', en: 'Friday' } },
    { fecha: '2026-10-17', tipo: 'pastoral', niveles: ['secundaria'],
      titulo: { es: 'Confirmación', en: 'Confirmation' },
      detalle: { es: 'Sábado', en: 'Saturday' } },
    { fecha: '2026-10-19', tipo: 'civico', niveles: ['preescolar', 'primaria'],
      titulo: { es: 'Acto cívico · 5B y PKA', en: 'Civic act · 5B and PKA' },
      detalle: { es: 'Lunes', en: 'Monday' } },
    { fecha: '2026-10-20', tipo: 'pastoral', niveles: ['preescolar', 'primaria', 'secundaria'],
      titulo: { es: 'Inicia La Purísima', en: 'La Purísima starts' },
      detalle: { es: 'Martes', en: 'Tuesday' } },
    { fecha: '2026-10-21', tipo: 'familias', niveles: ['primaria'],
      titulo: { es: 'Reunión de padres de 6.º grado', en: '6th grade parents meeting' },
      detalle: { es: 'Miércoles', en: 'Wednesday' } },
    { fecha: '2026-10-21', tipo: 'academico', niveles: ['secundaria'],
      titulo: { es: 'Exposición de investigación documental', en: 'Documentary research exhibition' },
      detalle: { es: '11.º grado', en: '11th grade' } },
    { fecha: '2026-10-22', tipo: 'familias', niveles: ['preescolar', 'primaria'],
      titulo: { es: 'Visita de promoción de nivel · Kinder a 1.º grado', en: 'Level promotion visit · Kinder to 1st grade' },
      detalle: { es: 'Jueves', en: 'Thursday' } },
    { fecha: '2026-10-26', tipo: 'civico', niveles: ['preescolar', 'primaria'],
      titulo: { es: 'Acto cívico · 5A y PK3', en: 'Civic act · 5A and PK3' },
      detalle: { es: 'Lunes', en: 'Monday' } },
    { fecha: '2026-10-28', tipo: 'academico', niveles: ['primaria', 'secundaria'],
      titulo: { es: 'Cierre del Club de Matemáticas', en: 'Math Club ends' },
      detalle: { es: 'Miércoles', en: 'Wednesday' } },
    { fecha: '2026-10-29', tipo: 'deporte', niveles: ['primaria', 'secundaria'],
      titulo: { es: 'Final de la Joy Cup STM 2026', en: 'Joy Cup STM 2026 ends' },
      detalle: { es: 'Jueves', en: 'Thursday' } },
    { fecha: '2026-10-30', tipo: 'academico', niveles: ['preescolar', 'primaria', 'secundaria'],
      titulo: { es: 'Entrega de informes finales · Kinder, 6.º y 11.º grado', en: 'Final reports · Kinder, 6th and 11th grade' },
      detalle: { es: 'Viernes', en: 'Friday' } },

    /* ---- Feriados nacionales posteriores ---- */
    { fecha: '2026-12-08', tipo: 'feriado', niveles: ['preescolar', 'primaria', 'secundaria'],
      titulo: { es: 'Feriado · Inmaculada Concepción', en: 'Holiday · Immaculate Conception' },
      detalle: { es: 'No hay clases', en: 'No classes' } },
    { fecha: '2026-12-25', tipo: 'feriado', niveles: ['preescolar', 'primaria', 'secundaria'],
      titulo: { es: 'Feriado · Navidad', en: 'Holiday · Christmas' },
      detalle: { es: 'No hay clases', en: 'No classes' } }
  ],

  /* Extracurriculares: pasos para inscribirse y actividades con su responsable (sin horarios). */
  extracurriculares: {
    pasos: [
      { es: 'Escribe al responsable de la actividad para confirmar cupo y costo.', en: 'Contact the activity lead to confirm space and cost.' },
      { es: 'Realiza el pago en Servicios Educativos, de lunes a viernes de 7:00 a.m. a 4:00 p.m.', en: 'Make the payment at Educational Services, Monday to Friday 7:00 a.m. to 4:00 p.m.' },
      { es: 'Entrega el comprobante al responsable y tu hijo o hija queda inscrito.', en: 'Hand the receipt to the activity lead and your child is enrolled.' }
    ],
    pago: {
      lugar: { es: 'Pagos · Servicios Educativos', en: 'Payments · Educational Services' },
      detalle: { es: 'Lunes a viernes · 7:00 a.m. – 4:00 p.m.', en: 'Monday to Friday · 7:00 a.m. – 4:00 p.m.' },
      telefono: '+505 8700 4214',
      correo: 'servicioseducativos@stmary.edu.ni'
    },
    actividades: [
      { nombre: { es: 'Fútbol', en: 'Soccer' }, tipo: 'deporte', programa: { es: 'Deportes', en: 'Sports' }, responsable: 'Elyin Cruz',
        inscripcion: { nombre: 'Allan Mercado', correo: 'amercado@stmary.edu.ni', telefono: '+505 8818 1630' } },
      { nombre: { es: 'Baloncesto', en: 'Basketball' }, tipo: 'deporte', programa: { es: 'Deportes', en: 'Sports' }, responsable: 'Allan Mercado',
        inscripcion: { nombre: 'Allan Mercado', correo: 'amercado@stmary.edu.ni', telefono: '+505 8818 1630' } },
      { nombre: { es: 'Volleyball', en: 'Volleyball' }, tipo: 'deporte', programa: { es: 'Deportes', en: 'Sports' }, responsable: 'Allan Mercado',
        inscripcion: { nombre: 'Allan Mercado', correo: 'amercado@stmary.edu.ni', telefono: '+505 8818 1630' } },
      { nombre: { es: 'Robótica', en: 'Robotics' }, tipo: 'academico', programa: { es: 'Afterschool', en: 'Afterschool' }, responsable: 'Cristhian Zúñiga',
        inscripcion: { nombre: 'Candy Dávila', correo: 'cadavila@stmary.edu.ni', telefono: '+505 8906 9020' } },
      { nombre: { es: 'Danza', en: 'Dance' }, tipo: 'artes', programa: { es: 'Afterschool', en: 'Afterschool' }, responsable: 'Jared Alegría',
        inscripcion: { nombre: 'Candy Dávila', correo: 'cadavila@stmary.edu.ni', telefono: '+505 8906 9020' } },
      { nombre: { es: 'Música', en: 'Music' }, tipo: 'artes', programa: { es: 'Afterschool', en: 'Afterschool' }, responsable: 'Jeffer Juárez',
        inscripcion: { nombre: 'Candy Dávila', correo: 'cadavila@stmary.edu.ni', telefono: '+505 8906 9020' } }
    ]
  },

  /* Avisos (tablero de anuncios). El más reciente va primero y es el "anuncio destacado".
     id: único y fijo. tipo: academico | civico | familias | deporte | artes | pastoral | admin
     resumen: una línea corta. pasos: lista opcional de pasos numerados.
     contacto: { nombre, telefono, correo, whatsapp } opcional. adjunto: PDF en /circulares, o null. */
  avisos: [
    { id: 'a-2026-09-matriculas-2027', fecha: '2026-09-08', tipo: 'admin',
      titulo: { es: 'Matrículas 2027: reserva tu cupo', en: 'Enrollment 2027: reserve your spot' },
      resumen: { es: 'En septiembre, 10 % de descuento en matrícula. Matrículas abiertas hasta el 30 de septiembre.', en: 'In September, 10% off enrollment. Enrollment open until September 30.' },
      cuerpo: { es: 'Ya está abierto el proceso de matrícula para el año escolar 2027. Durante septiembre, la matrícula tiene un 10 % de descuento. Sigue estos pasos:',
                en: 'Enrollment for the 2027 school year is now open. During September, enrollment has a 10% discount. Follow these steps:' },
      pasos: [
        { es: 'Reserva tu cupo de matrícula para 2027.', en: 'Reserve your enrollment spot for 2027.' },
        { es: 'Aprovecha el 10 % de descuento en matrícula durante septiembre.', en: 'Take advantage of the 10% enrollment discount during September.' },
        { es: 'Agenda tu cita con Servicios Educativos para realizar el pago, o envíales tu comprobante de transferencia.', en: 'Schedule an appointment with Educational Services to pay, or send them your transfer receipt.' }
      ],
      contacto: { nombre: { es: 'Servicios Educativos', en: 'Educational Services' }, telefono: '+505 8700 4214', correo: 'servicioseducativos@stmary.edu.ni' },
      adjunto: null },
    { id: 'a-2026-09-sin-clases', fecha: '2026-09-07', tipo: 'academico',
      titulo: { es: 'Del 14 al 18 de septiembre no hay clases', en: 'No classes from September 14 to 18' },
      resumen: { es: 'Semana de Fiestas Patrias. Las clases se retoman el lunes 21.', en: 'National holidays week. Classes resume Monday 21.' },
      cuerpo: { es: 'Estimadas familias: según el calendario escolar, del lunes 14 al viernes 18 de septiembre no habrá clases por las Fiestas Patrias. Las clases se retoman con normalidad el lunes 21 de septiembre a las 7:00 a.m.',
                en: 'Dear families: according to the school calendar, there will be no classes from Monday 14 to Friday 18 September for the national holidays. Classes resume as usual on Monday 21 September at 7:00 a.m.' },
      adjunto: null },
    { id: 'a-2026-09-fiestas-patrias', fecha: '2026-09-04', tipo: 'civico',
      titulo: { es: 'Celebración de Fiestas Patrias · 10 y 11 de septiembre', en: 'National Day celebration · September 10 and 11' },
      resumen: { es: 'Jueves 10: Educación Inicial con festival de comidas típicas. Viernes 11: Primaria y Secundaria.', en: 'Thursday 10: Early childhood with typical meals festival. Friday 11: Elementary and High school.' },
      cuerpo: { es: 'El jueves 10 de septiembre celebramos las Fiestas Patrias en Educación Inicial con el festival de comidas típicas en la tarima. El viernes 11 celebran Primaria y Secundaria.',
                en: 'On Thursday 10 September we celebrate National Day in Early childhood with the typical meals festival on stage. On Friday 11 Elementary and High school celebrate.' },
      adjunto: null },
    { id: 'a-2026-09-bienvenida', fecha: '2026-09-01', tipo: 'familias',
      titulo: { es: 'Bienvenidos al Portal Familias STM', en: 'Welcome to the STM Family Portal' },
      resumen: { es: 'Avisos, calendario, extracurriculares y contactos en un solo lugar.', en: 'Notices, calendar, extracurriculars and contacts in one place.' },
      cuerpo: { es: 'Desde esta app podrás ver los avisos oficiales, el calendario de actividades, las extracurriculares y los contactos del colegio. Instálala en tu celular siguiendo los pasos que aparecen al final de la página de Contactos.',
                en: 'From this app you can see official notices, the activity calendar, extracurriculars and school contacts. Install it on your phone by following the steps at the bottom of the Contacts page.' },
      adjunto: null }
  ]
};
