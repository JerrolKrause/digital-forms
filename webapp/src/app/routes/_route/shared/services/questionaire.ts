export const QUESTIONAIRE = [
  // Emergency Action Plan
  {
    type: 'text',
    name: 'date',
    label: 'Date',
    label_s: 'Fecha',
    value: '',
    required: true,
  },
  {
    type: 'number',
    name: 'truck',
    label: 'Truck',
    label_s: 'Camion',
    value: '',
    required: true,
  },
  {
    type: 'number',
    name: 'chipper',
    label: 'Chipper',
    label_s: 'Chipper',
    value: '',
    required: true,
  },
  {
    type: 'number',
    name: 'treeHeight',
    label: 'Tree Height',
    label_s: 'Altura del árbol',
    value: '',
    required: true,
  },
  {
    type: 'text',
    name: 'utility',
    label: 'Utility',
    label_s: 'Utilidad',
    value: '',
    required: true,
  },
  {
    type: 'text',
    name: 'general',
    label: 'General',
    label_s: 'Foreman',
    value: '',
    required: true,
  },
  {
    type: 'text',
    name: 'city',
    label: 'City',
    label_s: 'Ciudad',
    value: '',
    required: true,
  },
  // PLEASE LIST ALL CREW LOCATIONS/ UBICACIONES DE LAS CUADRILLAS
  {
    type: 'text',
    name: 'location1',
    label: 'location',
    label_s: 'ubicación',
    value: '',
    required: true,
  },
  {
    type: 'text',
    name: 'location2',
    label: 'location',
    label_s: 'ubicación',
    value: '',
    required: false,
  },
  {
    type: 'text',
    name: 'location3',
    label: 'location',
    label_s: 'ubicación',
    value: '',
    required: false,
  },
  {
    type: 'text',
    name: 'location4',
    label: 'location',
    label_s: 'ubicación',
    value: '',
    required: false,
  },
  // HAZARDS/PELIGROS
  {
    type: 'text',
    name: 'hazardNotes',
    label: 'Hazard Notes',
    label_s: 'Notasdepeligro',
    value: '',
    required: false,
  },

  // Energy Source Controls
  {
    type: 'text',
    name: 'voltage',
    label: 'Voltage',
    label_s: 'Voltaje',
    value: '',
    required: false,
  },
  {
    type: 'text',
    name: 'minApproachDistance',
    label: 'Minimum Approach Distance',
    label_s: 'Distancia mínima de acercamiento',
    value: '',
    required: false,
  },
  {
    type: 'text',
    name: 'outageScheduled',
    label: 'Outage Scheduled',
    label_s: 'Apagon - Progamado',
    value: '',
    required: false,
  },
  {
    type: 'text',
    name: 'outageEmergency',
    label: 'Outage Emergency',
    label_s: 'Apagon - Emergenica',
    value: '',
    required: false,
  },
  {
    type: 'text',
    name: 'stormWork',
    label: 'Storm Work',
    label_s: 'Trabajoen tormenta',
    value: '',
    required: false,
  },
  {
    type: 'text',
    name: 'Other',
    label: 'Other',
    label_s: 'Otro',
    value: '',
    required: false,
  },
  // Emergency Action Plan
  {
    type: 'text',
    name: '911 Call',
    label: '911 Call',
    label_s: 'Llamador 1',
    value: '',
    required: true,
  },
  {
    type: 'text',
    name: 'CPR 1',
    label: 'CPR 1',
    label_s: 'CPR 1',
    value: '',
    required: true,
  },
  {
    type: 'text',
    name: '911 Call',
    label: '911 Call',
    label_s: 'Llamador 2',
    value: '',
    required: false,
  },
  {
    type: 'text',
    name: 'Hospital location',
    label: 'Hospital location',
    label_s: 'Ubicación del Hospital',
    value: '',
    required: false,
  },
  {
    type: 'text',
    name: 'Immediately notify supervision',
    label: 'Immediately notify supervision',
    label_s: 'Notificar immediatemente a la supervision',
    value: '',
    required: false,
  },
  {
    type: 'text',
    name: 'General Foreman Name',
    label: 'General Foreman Name',
    label_s: 'General Foreman Name',
    value: '',
    required: false,
  },
  // CREW MEMBER NAMES/ SIGNATURES
  {
    type: 'text',
    name: 'Name',
    label: 'Name',
    label_s: 'Nombre',
    value: '',
    required: false,
  },
  {
    type: 'text',
    name: 'Signature',
    label: 'Signature',
    label_s: 'Firmas',
    value: '',
    required: false,
  },
];

export const EMERGENCY_PLAN = {
  labels: {
    title: 'Emergency Action Plan',
    title_s: 'Plan de acción de emergencia',
    subTitle: 'Must Fill Out and Review',
    subTitle_s: 'Debe llenar y revisar',
  },
  data: [
    {
      type: 'text',
      name: 'date',
      label: 'Date',
      label_s: 'Fecha',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'truck',
      label: 'Truck',
      label_s: 'Camion',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'chipper',
      label: 'Chipper',
      label_s: 'Chipper',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'treeHeight',
      label: 'Tree Height',
      label_s: 'Altura del árbol',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'utility',
      label: 'Utility',
      label_s: 'Utilidad',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'general',
      label: 'General',
      label_s: 'Foreman',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'city',
      label: 'City',
      label_s: 'Ciudad',
      value: '',
      required: true,
    },
  ],
};

export const HAZARDS = {
  labels: {
    title: 'HAZARDS',
    title_s: 'PELIGROS',
    subTitle: 'Check All that Apply',
    subTitle_s: 'Marque todo lo que Corresponda',
  },
  data: [
    { id: 1, name: 'electric', label: 'Electricity', selected: false, label_s: 'Electricidad' },
    {
      id: 2,
      name: 'utilityHardwareCondition',
      label: 'Utility Hardware Condition',
      selected: false,
      label_s: 'Condición del Hermienta de la utilidad',
    },
    { id: 3, name: 'treeTouchConductor', label: 'Tree Touching Conductor', selected: false, label_s: 'Árboles tocando conductores' },
    {
      id: 4,
      name: 'treePartInside',
      label: 'Tree Part Inside Minimum Approach',
      selected: false,
      label_s: 'Árbol interfiera con la distancia minima',
    },
    { id: 5, name: 'distance', label: 'Distance', selected: false, label_s: 'Distancia' },
    { id: 6, name: 'treeCondition', label: 'Tree Condition', selected: false, label_s: 'Condición del árbol' },
    { id: 7, name: 'includedBark', label: 'Included Bark', selected: false, label_s: 'Corteza incluida' },
    {
      id: 8,
      name: 'overhangs',
      label: 'Overhangs/ Dead Wood/ Tree',
      selected: false,
      label_s: 'Ramas sobre/ conductores/ tronces secos/ arbol',
    },
    { id: 9, name: 'traffic', label: 'Traffic', selected: false, label_s: 'Tráfico' },
    { id: 10, name: 'groundCondition', label: 'Ground Condition', selected: false, label_s: 'Condición del terreno' },
    {
      id: 11,
      name: 'lighting',
      label: 'Lighting for Night Time Work Migratory',
      selected: false,
      label_s: 'Iluminación para trabajo nocturno Migratorio',
    },
    { id: 12, name: 'birdInspection', label: 'Bird Inspection', selected: false, label_s: 'Inspección de aves' },
    { id: 13, name: 'loadSecurement', label: 'Loan Securement', selected: false, label_s: 'Cargamento seguro' },
    { id: 14, name: 'equipment', label: 'Equipment/ Tools in use', selected: false, label_s: 'Equipo/ herramientas en usa' },
    { id: 15, name: 'weather', label: 'Weather', selected: false, label_s: 'Clima' },
    { id: 16, name: 'wildlife', label: 'Wildlife (bugs, insects, bees)', selected: false, label_s: 'Fauna (bichos, insectos, abejas)' },
    { id: 17, name: 'poisonousPlants', label: 'Poisonous Plants', selected: false, label_s: 'Plantas venenosas' },
    { id: 18, name: 'sunGlare', label: 'Sun Glare', selected: false, label_s: 'Reflejas de sol' },
    { id: 19, name: 'saggingConductors', label: 'Sagging Conductors', selected: false, label_s: 'Conductores colgados' },
    { id: 20, name: 'water', label: 'Water', selected: false, label_s: 'Agua' },
    { id: 21, name: 'dogs', label: 'Dogs', selected: false, label_s: 'Perros' },
    { id: 22, name: 'fences', label: 'Fences', selected: false, label_s: 'Cercas' },
    {
      id: 23,
      name: 'leakingEquipment',
      label: 'Leaking Equipment/ Wood Under Tension',
      selected: false,
      label_s: 'Fugas en equipo/ Madera bajo tensión',
    },
    { id: 24, name: 'other', label: 'Other', selected: false, label_s: ' Otro' },
  ],
};

export const WORK_PROCEDURES = {
  labels: {
    title: 'Work Procedures',
    title_s: 'Procedimientos de trabajo',
    subTitle: 'Check All that Apply',
    subTitle_s: 'Rellena todo lo que corresponda',
  },
  data: [
    { id: 1, name: 'temporaryTrafficControl', label: 'Temporary Traffic Control', selected: false, label_s: 'Control de Tráfico Temporal' },
    { id: 1, name: 'postedroadspeed', label: 'Posted road speed', selected: false, label_s: 'velocidad______mph' },
    { id: 1, name: 'jobSetup', label: 'Job Setup', selected: false, label_s: 'Configuración de trabajo' },
    { id: 1, name: 'routineTrimming', label: 'Routine Trimming', selected: false, label_s: 'Recorte de rutina' },
    { id: 1, name: 'distributionWork', label: 'Distribution Work', selected: false, label_s: 'Trabajo de Distribución' },
    { id: 1, name: 'transmissionWork', label: 'Transmission Work', selected: false, label_s: 'Trabajo de transmisión' },
    { id: 1, name: 'nonConductiveTools', label: 'Non-ConductiveTool(s)', selected: false, label_s: 'Herramientas No Conductivas' },
    { id: 1, name: 'aerialLift', label: 'Aerial Lift', selected: false, label_s: 'Ascensor aéreo' },
    { id: 1, name: 'specializedEquipment', label: 'Specialized Equipment', selected: false, label_s: 'Equipo Especializado' },
    { id: 1, name: 'manualClimbing', label: 'Manual Climbing', selected: false, label_s: 'Escalacion manual' },
    {
      id: 1,
      name: 'buckingandLimbRemoval',
      label: 'Bucking and Limb Removal',
      selected: false,
      label_s: 'Corte de troncos, trozado de ramas',
    },
    { id: 1, name: 'spraying', label: 'Spraying', selected: false, label_s: 'Fumigacion' },
    { id: 1, name: 'draggingBrush', label: 'Dragging Brush', selected: false, label_s: 'Jalado de ramas' },
    { id: 1, name: 'treeFelling', label: 'Tree Felling', selected: false, label_s: 'Derribo de arboles' },
    { id: 1, name: 'stormWork', label: 'StormWork', selected: false, label_s: 'Trabajo de tormenta' },
    { id: 1, name: 'riggingRope', label: 'Rigging/Rope', selected: false, label_s: 'Aparejos y Sogas' },
    { id: 1, name: 'lifting', label: 'Lifting', selected: false, label_s: 'Levantamiento' },
    { id: 1, name: 'chippingBrush', label: 'Chipping Brush', selected: false, label_s: 'Trituracion de ramas' },
    { id: 1, name: 'other', label: 'Other', selected: false, label_s: 'Otro' },
  ],
};

export const SPECIAL_PRECAUTIONS = [
  { id: 1, name: 'equipmentSafety', label: 'Equipment Safety', selected: false, label_s: 'Seguridad del equipo' },
  { id: 1, name: 'keyFromIgnition', label: 'Key from Ignition', selected: false, label_s: 'Llave de Encendido' },
  { id: 1, name: 'fireTools', label: 'Fire Tools', selected: false, label_s: 'Herramientas de fuego' },
  { id: 1, name: 'waterSafety', label: 'Water Safety', selected: false, label_s: 'Seguridad del agua' },
  { id: 1, name: 'railRoadSafety', label: 'Rail Road Safety', selected: false, label_s: 'Seguridad ferrocaril' },
  { id: 1, name: 'chemicalHandling', label: 'Chemical Handling', selected: false, label_s: 'Manejo Químico' },
  { id: 1, name: 'outriggersPlacement', label: 'Outriggers Placement', selected: false, label_s: 'Colocacion de patas de camion' },
  { id: 1, name: 'cribbingForLeaving', label: 'Cribbing for Leaving', selected: false, label_s: 'Uso de suportes para anivelar' },
  {
    id: 1,
    name: 'lightingforNightTimeWork',
    label: 'LightingforNightTimeWork',
    selected: false,
    label_s: 'Iluminaciónparael trabajo nocturno',
  },
  { id: 1, name: 'loadSecurement', label: 'Load Securement', selected: false, label_s: 'Caramento seguro' },
  { id: 1, name: 'weatherPrecautions', label: 'Weather Precautions', selected: false, label_s: 'Precauciones contra el clima' },
  { id: 1, name: 'flashingLights', label: 'Flashing Lights', selected: false, label_s: 'Lues de emergencia' },
  { id: 1, name: 'schoolZones', label: 'School Zones', selected: false, label_s: 'Zonas escolares' },
  { id: 1, name: 'pedestrians', label: 'Pedestrians', selected: false, label_s: 'Peatones' },
  { id: 1, name: 'equipmentInspection', label: 'Equipment Inspection', selected: false, label_s: 'Inspección del equipo' },
  {
    id: 1,
    name: 'climbingGearInspection',
    label: 'Climbing Gear Inspection',
    selected: false,
    label_s: 'Inspección de equipo de escalada',
  },
  {
    id: 1,
    name: 'powerToolInspection',
    label: 'Power Tool Inspection',
    selected: false,
    label_s: 'Inspección de herramientas eléctricas',
  },
  {
    id: 1,
    name: 'migratoryBirdInspection',
    label: 'Migratory Bird Inspection',
    selected: false,
    label_s: 'Inspeccion de aves migratorios',
  },
  {
    id: 1,
    name: 'wildlifeProtectedArea',
    label: 'Wildlife Protected Area',
    selected: false,
    label_s: 'Área Protegida de Vida Silvestre',
  },
  { id: 1, name: 'other', label: 'Other', selected: false, label_s: 'Otro' },
  {
    id: 1,
    name: 'preExistingPropertyDamage',
    label: 'Pre-Existing Property Damage',
    selected: false,
    label_s: 'Daños preexistentes a la propiedad',
  },
];

export const PERSONAL_PROTECTIVE_EQUIPMENT = [
  { id: 1, name: 'hardHat', label: 'Hard Hat', selected: false, label_s: 'Casco de seguridad' },
  { id: 1, name: 'workBoots', label: 'Work Boots', selected: false, label_s: 'Botas de trabajo' },
  { id: 1, name: 'safetyGlasses', label: 'Safety Glasses', selected: false, label_s: 'Lentes de seguridad' },
  { id: 1, name: 'hearingProtection', label: 'Hearing Protection', selected: false, label_s: 'Protección auditivaa' },
  { id: 1, name: 'chaps', label: 'Chaps', selected: false, label_s: 'Grietas' },
  { id: 1, name: 'gloves', label: 'Gloves', selected: false, label_s: 'Guantes' },
  { id: 1, name: 'reflectiveSafetyVests', label: 'Reflective Safety Vests', selected: false, label_s: 'Chaleco de seguridad' },
];

export const CONDITION_OF_TREE = [
  { id: 1, name: 'noFoliage', label: 'No Foliage', selected: false, label_s: 'sin follage' },
  { id: 1, name: 'barkPeeling', label: 'Bark Peeling', selected: false, label_s: 'peladura de corteza' },
  { id: 1, name: 'rootsExposed', label: 'Roots Exposed', selected: false, label_s: 'Raíces expuestas' },
  { id: 1, name: 'fungus', label: 'Fungus', selected: false, label_s: 'hongo' },
  { id: 1, name: 'cracks', label: 'Cracks', selected: false, label_s: 'Grietas' },
  { id: 1, name: 'splitTop', label: 'Split Top', selected: false, label_s: 'parte superior' },
  { id: 1, name: 'rot', label: 'Rot', selected: false, label_s: 'putrefacción' },
  { id: 1, name: 'widowMakers', label: 'Widow Maker’s', selected: false, label_s: 'Extremidades sueltas' },
  { id: 1, name: 'animals', label: 'Animals/Insects', selected: false, label_s: 'animales/insectos' },
  { id: 1, name: 'burntTree', label: 'Burnt Tree', selected: false, label_s: 'arbol quemado' },
  { id: 1, name: 'other', label: 'Other', selected: false, label_s: 'Otro' },
];

export const REMOVAL_METHOD = [
  { id: 1, name: 'chunk', label: 'Chunk', selected: false, label_s: 'pedazo' },
  { id: 1, name: 'section', label: 'Section', selected: false, label_s: 'seccion' },
  { id: 1, name: 'ropeDown', label: 'Rope Down', selected: false, label_s: 'Cuerda hacia abajo' },
  { id: 1, name: 'crane', label: 'Crane', selected: false, label_s: 'grua' },
  { id: 1, name: 'freeFall', label: 'Free Fall', selected: false, label_s: 'caida libre' },
  { id: 1, name: 'other', label: 'Other', selected: false, label_s: 'Otro' },
];

export const CREW_AVAILABLE: object[] = [
  { name: 'Willie Gale', fulltime: true, id: 1 },
  { name: 'Christopher P. Harris', fulltime: true, id: 2 },
  { name: 'Derek M. Westcott', fulltime: true, id: 3 },
  { name: 'Donald C. Archie', fulltime: true, id: 4 },
  { name: 'Douglas B. House', fulltime: true, id: 5 },
];

export const CREW_SELECTED: object[] = [
  { name: 'Devin L. Leslie', fulltime: true, signed: true, id: 6 },
  { name: 'Sean K. Wilson', fulltime: true, signed: true, id: 7 },
  { name: 'Jordon G. Ibarra', fulltime: true, signed: false, id: 8 },
  { name: 'Brian D. Wroblewski', fulltime: true, signed: false, id: 9 },
  { name: 'Leslie A. Hazel', fulltime: true, signed: true, id: 10 },
];
