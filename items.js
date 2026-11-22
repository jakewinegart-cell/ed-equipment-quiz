// ED equipment deck. level: 1 basic, 2 intermediate, 3 advanced. sim = look-alike items preferred as distractors.
window.CATS = {
  airway: 'Airway', respiratory: 'Respiratory', vascular: 'IV, Vascular & Lab', monitoring: 'Monitoring',
  resus: 'Resuscitation', trauma: 'Trauma', ortho: 'Ortho & Splinting', wound: 'Wound Care',
  gugi: 'GU / GI', enteye: 'ENT & Eye', ob: 'OB & Newborn', ppe: 'PPE & Safety', misc: 'Room & Misc'
};
window.ITEMS = [
// ---------------- AIRWAY ----------------
{id:'bvm',name:'Bag-valve-mask (BVM)',cat:'airway',level:1,sim:['nrb','cpap','simplemask'],why:[
 'Self-inflating bag + one-way valve + face mask used to give positive-pressure breaths by hand.',
 'For apnea, inadequate breathing, pre-oxygenation before intubation, and ventilating through an ET tube or supraglottic airway.',
 'Hook to O2 at 15 L/min with the reservoir attached; two-person "E-C" seal ventilates better than one.',
 'Give 1 breath every 6 seconds with an advanced airway; squeeze just enough for visible chest rise.']},
{id:'nrb',name:'Non-rebreather mask',cat:'airway',level:1,sim:['simplemask','venturi','neb'],why:[
 'Face mask with a reservoir bag and one-way valves that delivers high-concentration oxygen (roughly 60–90%).',
 'Used for spontaneously breathing patients who are hypoxic or critically ill: trauma, CO poisoning, sepsis, shock.',
 'Run at 10–15 L/min and fill the bag before putting it on; the bag should never fully collapse.',
 'It does NOT breathe for the patient: switch to BVM if breathing is inadequate.']},
{id:'nc',name:'Nasal cannula',cat:'airway',level:1,sim:['hfnc','simplemask','npa'],why:[
 'Two soft prongs in the nostrils for low-flow supplemental oxygen.',
 'For mild hypoxia or comfort: typically 1–6 L/min, about 24–44% FiO2 (each L/min adds roughly 4%).',
 'Can be paired with capnography-sampling cannulas for procedural sedation monitoring.',
 'Above ~6 L/min it dries mucosa without adding much: move to a mask or high-flow system.']},
{id:'simplemask',name:'Simple face mask',cat:'airway',level:1,sim:['nrb','venturi','neb'],why:[
 'Plain oxygen mask with side ports and no reservoir bag.',
 'Moderate oxygen delivery, about 35–55% FiO2 at 6–10 L/min.',
 'Must run at least 5–6 L/min to flush exhaled CO2 out of the mask.',
 'Step between nasal cannula and non-rebreather.']},
{id:'opa',name:'Oropharyngeal airway (OPA)',cat:'airway',level:1,sim:['npa','igel','yankauer'],why:[
 'Rigid curved plastic airway that holds the tongue off the back of the throat.',
 'Only for UNCONSCIOUS patients without a gag reflex, often to help BVM ventilation.',
 'Size from the corner of the mouth to the earlobe (or angle of the jaw).',
 'Insert upside-down and rotate 180° in adults, or straight in with a tongue depressor in kids.']},
{id:'npa',name:'Nasopharyngeal airway (NPA)',cat:'airway',level:1,sim:['opa','ng','nc'],why:[
 'Soft flexible tube placed through a nostril to the back of the throat to keep the airway open.',
 'Tolerated by semi-conscious patients who still have a gag reflex (seizing, intoxicated).',
 'Size from the nostril to the earlobe; lubricate and insert bevel toward the septum.',
 'Avoid with suspected basilar skull or major midface fractures.']},
{id:'lscope',name:'Laryngoscope handle',cat:'airway',level:2,sim:['vl','mac','otoscope'],why:[
 'Battery handle that locks onto a laryngoscope blade and powers its light.',
 'Used for direct laryngoscopy during endotracheal intubation.',
 'Check the light before every intubation: snap the blade on and it should be bright and steady.',
 'Hold in the LEFT hand and lift up and away; never rock back on the teeth.']},
{id:'mac',name:'Macintosh (Mac) blade',cat:'airway',level:2,sim:['miller','lscope','vl'],why:[
 'CURVED laryngoscope blade for direct laryngoscopy.',
 'The tip goes into the vallecula and lifts the epiglottis indirectly.',
 'Common adult sizes: Mac 3 and Mac 4.',
 'Wide flange helps sweep the tongue to the left.']},
{id:'miller',name:'Miller blade',cat:'airway',level:2,sim:['mac','lscope','vl'],why:[
 'STRAIGHT laryngoscope blade for direct laryngoscopy.',
 'The tip lifts the epiglottis directly.',
 'Preferred in infants and small children (floppy epiglottis, anterior larynx); also useful for anterior airways in adults.',
 'Common sizes: Miller 0–1 neonates/infants, 2 children, 3–4 adults.']},
{id:'vl',name:'Video laryngoscope',cat:'airway',level:2,sim:['lscope','mac','ett'],why:[
 'Laryngoscope with a camera near the blade tip and a screen, so you see the cords without a direct line of sight.',
 'First-line in many EDs for intubation, especially with difficult airways or C-spine precautions.',
 'Hyperangulated blades need a rigid stylet shaped to match the blade.',
 'Lets the team watch and coach on the screen.']},
{id:'ett',name:'Endotracheal tube',cat:'airway',level:1,sim:['trach','king','ng'],why:[
 'Cuffed tube passed through the vocal cords into the trachea: the definitive airway.',
 'For airway protection, failure to oxygenate or ventilate, or an expected deteriorating course.',
 'Typical adult sizes 7.0–8.0 mm ID; depth is about 3× the tube size at the teeth (e.g., 22 cm for 7.5).',
 'Confirm placement with waveform capnography, not just breath sounds.']},
{id:'stylet',name:'Intubation stylet',cat:'airway',level:2,sim:['bougie','ett','magill'],why:[
 'Malleable metal rod that goes inside the ET tube to give it a shape (often a "hockey stick" bend).',
 'Makes the tube easier to steer through the cords during intubation.',
 'Keep the tip recessed inside the tube so it cannot injure the airway.',
 'Pull it out as soon as the tube passes the cords.']},
{id:'bougie',name:'Bougie (tracheal tube introducer)',cat:'airway',level:2,sim:['stylet','ett','ng'],why:[
 'Long, flexible stick with an angled (coudé) tip that goes through the cords first; the ET tube slides over it.',
 'Rescue and first-pass tool when you see only the epiglottis or arytenoids.',
 'In the trachea you feel tracheal ring "clicks" and it stops (hold-up) at the small airways.',
 'Also used in a scalpel-bougie-tube surgical cric.']},
{id:'lma',name:'Laryngeal mask airway (LMA)',cat:'airway',level:2,sim:['igel','king','ett'],why:[
 'Supraglottic airway: an inflatable cuffed mask that sits over the laryngeal opening.',
 'Rescue airway when intubation or bag-mask ventilation fails; also a bridge to intubation.',
 'Placed blindly without a laryngoscope; size by patient weight.',
 'Does not fully protect against aspiration.']},
{id:'igel',name:'i-gel supraglottic airway',cat:'airway',level:2,sim:['lma','king','opa'],why:[
 'Supraglottic airway with a soft gel-like, non-inflatable cuff that molds over the larynx.',
 'Fast rescue airway in cardiac arrest and failed intubation.',
 'Color-coded sizes by weight (e.g., size 4 for about 50–90 kg); no cuff to inflate.',
 'Has a gastric channel to pass a suction tube.']},
{id:'king',name:'King LT laryngeal tube',cat:'airway',level:3,sim:['lma','igel','ett'],why:[
 'Supraglottic tube with two cuffs inflated through one port: one in the esophagus, one in the pharynx.',
 'Common prehospital rescue airway: you will see patients arrive with one in place.',
 'Sized by patient height; placed blindly.',
 'Usually exchanged for an ET tube in the ED.']},
{id:'cric',name:'Cricothyrotomy kit',cat:'airway',level:3,sim:['trach','scalpel','cvc'],why:[
 'Kit (scalpel, hook, dilator, small cuffed tube) to open the airway through the cricothyroid membrane.',
 'The "can\'t intubate, can\'t oxygenate" last-resort surgical airway.',
 'Find the membrane between the thyroid and cricoid cartilages ("laryngeal handshake").',
 'Many EDs use a scalpel–bougie–6.0 tube technique instead of a commercial kit.']},
{id:'trach',name:'Tracheostomy tube',cat:'airway',level:2,sim:['ett','cric','king'],why:[
 'Curved tube that sits in a surgical opening in the front of the neck (tracheostomy).',
 'ED issues: dislodgement, mucus plugging, bleeding; suction and replace if needed.',
 'Keep the obturator and a same-size and one-size-smaller spare at the bedside.',
 'Patients with a trach can be oxygenated over the stoma.']},
{id:'yankauer',name:'Yankauer suction tip',cat:'airway',level:1,sim:['suction','opa','cathsyringe'],why:[
 'Rigid plastic suction wand that connects to wall or portable suction.',
 'Clears blood, vomit and secretions from the mouth and throat before and during airway management.',
 'Have it on and ready under the right side of the head for every intubation.',
 'Use soft flexible suction catheters for nose, ET tube or trach suctioning instead.']},
{id:'suction',name:'Wall suction regulator & canister',cat:'airway',level:2,sim:['yankauer','flowmeter','pleurevac'],why:[
 'Wall-mounted vacuum regulator connected to a collection canister and tubing.',
 'Powers the Yankauer and suction catheters; also used for NG tubes and some chest drains.',
 'Turn to full/high for airway suctioning; use low intermittent for gastric tubes.',
 'Check it works at the start of every shift and before every intubation.']},
{id:'magill',name:'Magill forceps',cat:'airway',level:2,sim:['hemostat','adson','needledriver'],why:[
 'Angled forceps designed to reach into the mouth and throat.',
 'Remove a visible foreign body from the upper airway under laryngoscopy (choking).',
 'Also used to guide a tube during nasotracheal intubation.',
 'The offset handles keep your hand out of the line of sight.']},
{id:'etco2c',name:'Colorimetric ETCO2 detector',cat:'airway',level:2,sim:['capno','stopcock','neb'],why:[
 'Small disposable device placed between the ET tube and the bag; paper changes color with exhaled CO2.',
 'Quick check of ET tube placement after intubation.',
 'Purple → yellow with each breath suggests tracheal placement ("yellow is mellow"); stays purple = problem.',
 'Can stay purple in cardiac arrest (low CO2 delivery); waveform capnography is preferred.']},
{id:'capno',name:'Capnography (waveform ETCO2)',cat:'airway',level:2,sim:['etco2c','monitor','pulseox'],why:[
 'Continuous measurement and waveform of exhaled CO2, shown on the monitor.',
 'Gold standard to confirm and continuously monitor ET tube placement.',
 'In CPR: ETCO2 below 10 mmHg means poor compressions; a sudden jump suggests ROSC.',
 'Also used during sedation to catch hypoventilation early (normal 35–45 mmHg).']},
// ---------------- RESPIRATORY ----------------
{id:'o2tank',name:'Oxygen cylinder',cat:'respiratory',level:1,sim:['flowmeter','vent','pbag'],why:[
 'Portable compressed oxygen tank with a regulator (green in the US).',
 'Supplies oxygen during transport to CT, radiology, or between rooms.',
 'Check the pressure gauge before you leave: an E-tank at ~2000 psi lasts roughly an hour at 10 L/min.',
 'Secure it upright or in a holder; never leave it standing loose.']},
{id:'flowmeter',name:'Oxygen flowmeter',cat:'respiratory',level:1,sim:['suction','o2tank','peakflow'],why:[
 'Wall-mounted meter with a floating ball that sets oxygen flow in liters per minute.',
 'Controls the oxygen flow to cannulas, masks, BVMs and nebulizers.',
 'Read the flow at the middle of the ball.',
 'Green fitting = oxygen; air outlets are yellow, so don\'t mix them up.']},
{id:'neb',name:'Small-volume nebulizer',cat:'respiratory',level:1,sim:['spacer','simplemask','cpap'],why:[
 'Cup that turns liquid medication into a mist, attached to a mouthpiece or mask and driven by O2 or air.',
 'Delivers albuterol, ipratropium (DuoNeb), racemic epinephrine, and hypertonic saline.',
 'Run at about 6–8 L/min until the mist stops (about 10 minutes).',
 'Continuous nebs are used in severe asthma.']},
{id:'cpap',name:'CPAP / BiPAP mask',cat:'respiratory',level:2,sim:['bvm','nrb','vent'],why:[
 'Tight-fitting mask for non-invasive positive pressure ventilation.',
 'First-line for acute pulmonary edema (CHF) and COPD exacerbations; can avoid intubation.',
 'CPAP = one constant pressure; BiPAP = higher pressure breathing in (IPAP) and lower breathing out (EPAP).',
 'Needs an awake, cooperative patient who can protect the airway; watch for vomiting.']},
{id:'venturi',name:'Venturi mask',cat:'respiratory',level:2,sim:['simplemask','nrb','neb'],why:[
 'Mask with color-coded jet adapters that deliver a precise oxygen percentage (about 24–60%).',
 'Ideal for COPD patients who need controlled, titrated oxygen.',
 'Each adapter lists the FiO2 and the flow rate to set on the flowmeter.',
 'Target SpO2 88–92% in CO2 retainers.']},
{id:'peakflow',name:'Peak flow meter',cat:'respiratory',level:1,sim:['incentive','spacer','flowmeter'],why:[
 'Handheld tube that measures how fast a patient can blow air out (PEFR, L/min).',
 'Objective measure of asthma severity and response to treatment.',
 'Best of 3 attempts, standing, with a hard fast blow; compare to predicted or personal best.',
 'Below 50% of predicted suggests a severe exacerbation.']},
{id:'incentive',name:'Incentive spirometer',cat:'respiratory',level:1,sim:['peakflow','spacer','neb'],why:[
 'Device the patient breathes IN from slowly, raising a piston to a target volume.',
 'Prevents atelectasis and pneumonia after rib fractures, surgery, or with chest pain from splinting.',
 'Coach: 10 slow deep breaths every hour while awake.',
 'Opposite of a peak flow meter: you inhale, not exhale.']},
{id:'vent',name:'Mechanical ventilator',cat:'respiratory',level:2,sim:['cpap','monitor','pump'],why:[
 'Machine that breathes for an intubated patient.',
 'Used after intubation in the ED while awaiting ICU admission.',
 'Typical starting settings: volume control, tidal volume 6–8 mL/kg ideal body weight, rate 14–18, PEEP 5, FiO2 100% then titrate.',
 'If the patient crashes on the vent: DOPE = Displacement, Obstruction, Pneumothorax, Equipment.']},
{id:'spacer',name:'MDI with spacer',cat:'respiratory',level:1,sim:['neb','peakflow','incentive'],why:[
 'Metered-dose inhaler attached to a valved holding chamber.',
 'Delivers albuterol and other inhaled meds as well as a nebulizer in mild–moderate asthma.',
 'The spacer slows the spray so more drug reaches the lungs and less hits the throat.',
 'Kids can use a spacer with a face mask.']},
{id:'hfnc',name:'High-flow nasal cannula',cat:'respiratory',level:3,sim:['nc','cpap','venturi'],why:[
 'Wide-bore heated, humidified nasal cannula delivering up to about 60 L/min with set FiO2 up to 100%.',
 'For hypoxic respiratory failure, bronchiolitis in kids, and pre-oxygenation / apneic oxygenation.',
 'High flow washes out dead space and gives a little PEEP.',
 'Much more comfortable than a mask; the patient can talk and eat.']},
// ---------------- VASCULAR ----------------
{id:'piv',name:'Peripheral IV catheter',cat:'vascular',level:1,sim:['butterfly','cvc','ioneedle'],why:[
 'Short flexible plastic catheter over a needle, placed in a peripheral vein.',
 'Gives fluids, medications, blood products and contrast; draws labs at placement.',
 'Color = gauge: 14G orange, 16G gray, 18G green, 20G pink, 22G blue, 24G yellow.',
 'Trauma and bleeding: two large-bore (18G or bigger) IVs. CT contrast usually needs 20G or bigger in the AC.']},
{id:'vtourn',name:'Venipuncture tourniquet',cat:'vascular',level:1,sim:['cat','ace','bpcuff'],why:[
 'Stretchy latex-free band tied above a vein.',
 'Makes veins bulge for IV starts and blood draws.',
 'Release within about 1 minute to avoid hemolysis and falsely high potassium.',
 'NOT for bleeding control: that is a CAT tourniquet.']},
{id:'ezio',name:'Intraosseous drill (EZ-IO)',cat:'vascular',level:2,sim:['ioneedle','castsaw','piv'],why:[
 'Battery-powered driver that places an IO needle into bone marrow.',
 'Fast vascular access in cardiac arrest, shock, or when an IV can\'t be obtained.',
 'Sites: proximal tibia, proximal humerus (fast flow), distal femur in kids.',
 'Needles by color: pink 15 mm (3–39 kg), blue 25 mm (≥3 kg), yellow 45 mm (large tissue/humerus).']},
{id:'ioneedle',name:'Manual intraosseous needle',cat:'vascular',level:3,sim:['ezio','lpneedle','piv'],why:[
 'Hand-twisted large needle with a removable stylet (e.g., Jamshidi type).',
 'Intraosseous access, especially in infants, when a drill isn\'t available.',
 'Use a firm twisting motion until there\'s a "pop" and loss of resistance.',
 'Confirm by aspirating marrow and flushing without swelling.']},
{id:'pbag',name:'Pressure infusion bag',cat:'vascular',level:2,sim:['bpcuff','ivbag','pump'],why:[
 'Inflatable cuff with a gauge that wraps around an IV bag.',
 'Squeezes fluid or blood in fast during hemorrhage or shock.',
 'Inflate to about 300 mmHg.',
 'Also pressurizes arterial line flush bags.']},
{id:'pump',name:'IV infusion pump',cat:'vascular',level:1,sim:['monitor','vent','pyxis'],why:[
 'Electronic pump that delivers IV fluids or drips at a programmed rate.',
 'Required for titrated drips: pressors, insulin, heparin, nitroglycerin, sedation.',
 'Uses drug libraries with dose limits; double-check high-alert meds with a second nurse.',
 'Alarms for occlusion and air in line.']},
{id:'tubes',name:'Blood collection tubes',cat:'vascular',level:1,sim:['bcx','abg','urinecup'],why:[
 'Vacuum tubes; cap color = additive and test.',
 'Light blue (citrate) coags; red/gold (SST) chemistries; green (heparin) chemistries; lavender (EDTA) CBC; pink/lavender type & screen; gray (fluoride) lactate/alcohol.',
 'Order of draw: blood cultures → light blue → red/gold → green → lavender → gray.',
 'Fill light-blue tubes completely: under-filling ruins coag results.']},
{id:'butterfly',name:'Butterfly needle',cat:'vascular',level:1,sim:['piv','syringe','lpneedle'],why:[
 'Small needle with plastic "wings" and flexible tubing (winged infusion set).',
 'Blood draws from small, fragile, or hand veins; pediatric draws.',
 'Usually 21–23G; the needle stays metal, so it is not left in as an IV.',
 'Hold by the wings for control.']},
{id:'syringe',name:'Luer-lock syringe',cat:'vascular',level:1,sim:['flush','cathsyringe','abg'],why:[
 'Barrel and plunger syringe whose tip screws onto needles and IV ports.',
 'Drawing up and pushing meds, aspirating, and irrigating.',
 'Common sizes 1, 3, 5, 10, 20, 60 mL; the luer lock keeps the needle from popping off.',
 'Use the smallest syringe that holds the dose for accuracy.']},
{id:'flush',name:'Prefilled saline flush',cat:'vascular',level:1,sim:['syringe','ivbag','abg'],why:[
 'Syringe prefilled with sterile 0.9% saline, usually 10 mL.',
 'Checks IV patency before use and flushes lines between medications.',
 'Flush after every IV push so the full dose reaches the patient.',
 'Resistance or swelling at the site means the IV may be infiltrated.']},
{id:'ivbag',name:'IV fluid bag',cat:'vascular',level:1,sim:['ivset','urinebag','pbag'],why:[
 'Sterile bag of IV fluid such as normal saline or lactated Ringer\'s.',
 'Fluid resuscitation, dehydration, carrying medications, keeping lines open.',
 'Sepsis bolus: 30 mL/kg of crystalloid; check lung sounds and volume status.',
 'Spike with an administration set; hang above the patient.']},
{id:'ivset',name:'IV administration set',cat:'vascular',level:1,sim:['ivbag','stopcock','pump'],why:[
 'Tubing with a spike, drip chamber, roller clamp and ports connecting the IV bag to the patient.',
 'Delivers gravity or pump infusions; Y-sites for IV push meds and piggybacks.',
 'Macrodrip (10–20 gtt/mL) for fluids; microdrip (60 gtt/mL) for precise small volumes.',
 'Prime the line to remove all air before connecting.']},
{id:'bcx',name:'Blood culture bottles',cat:'vascular',level:2,sim:['tubes','urinecup','abg'],why:[
 'Paired aerobic and anaerobic broth bottles for growing bacteria from blood.',
 'Drawn in suspected sepsis, bacteremia, endocarditis.',
 'Draw BEFORE antibiotics, but never delay antibiotics in septic shock to get them.',
 'Two sets from two separate sites; scrub the bottle tops; aerobic bottle first with a butterfly.']},
{id:'stopcock',name:'Three-way stopcock',cat:'vascular',level:2,sim:['ivset','etco2c','aline'],why:[
 'Valve with three ports and a handle that directs flow between them.',
 'Lets you draw from or give through a line without disconnecting it; used on arterial lines, chest drain and paracentesis setups.',
 'The handle points to the port that is OFF (closed).',
 'Keep unused ports capped to prevent infection and air entry.']},
{id:'us',name:'Point-of-care ultrasound',cat:'vascular',level:2,sim:['monitor','bladderscan','ekgmachine'],why:[
 'Bedside ultrasound machine used by the ED physician.',
 'FAST exam in trauma, cardiac and lung views, DVT, gallbladder, AAA, pregnancy, procedural guidance.',
 'Guides difficult IVs, central lines, nerve blocks and paracentesis.',
 'Linear probe for vessels and superficial; curvilinear for abdomen; phased array for heart.']},
// ---------------- MONITORING ----------------
{id:'monitor',name:'Cardiac monitor',cat:'monitoring',level:1,sim:['defib','ekgmachine','vent'],why:[
 'Bedside monitor that continuously shows heart rhythm, SpO2, BP, respiratory rate and often ETCO2 and temperature.',
 'Every critically ill ED patient gets one; alarms flag dangerous changes.',
 'Set alarm limits that fit your patient instead of silencing them.',
 'A monitor strip is not a 12-lead; get a 12-lead ECG for chest pain.']},
{id:'electrodes',name:'ECG electrodes',cat:'monitoring',level:1,sim:['pads','tegaderm','steri'],why:[
 'Small sticky gel electrode stickers that pick up the heart\'s electrical signal.',
 'Used for cardiac monitoring (3–5 leads) and 12-lead ECGs (10 electrodes).',
 '"White on right, smoke over fire" (black above red) for monitoring leads.',
 'Dry, clip hair and lightly abrade the skin for a clean tracing.']},
{id:'pulseox',name:'Pulse oximeter',cat:'monitoring',level:1,sim:['gluc','temporal','monitor'],why:[
 'Finger (or ear) probe that estimates oxygen saturation (SpO2) and pulse rate with light.',
 'Rapid check of oxygenation; continuous monitoring.',
 'Inaccurate with poor perfusion, cold fingers, nail polish, motion.',
 'Reads falsely NORMAL in carbon monoxide poisoning; may overestimate in darker skin.']},
{id:'bpcuff',name:'Blood pressure cuff',cat:'monitoring',level:1,sim:['pbag','vtourn','doppler'],why:[
 'Inflatable cuff with a gauge (sphygmomanometer) for measuring blood pressure.',
 'Manual or automated BP measurement.',
 'Cuff bladder should circle about 80% of the arm: too small reads falsely HIGH.',
 'Check BP in both arms if you suspect aortic dissection.']},
{id:'tymp',name:'Tympanic (ear) thermometer',cat:'monitoring',level:1,sim:['temporal','digitherm','otoscope'],why:[
 'Thermometer that reads infrared heat from the eardrum.',
 'Fast, noninvasive temperature screening.',
 'Pull the ear up and back in adults (down and back in young kids) for an accurate reading.',
 'Earwax and poor technique cause errors; use rectal temps in infants.']},
{id:'temporal',name:'Infrared forehead thermometer',cat:'monitoring',level:1,sim:['tymp','digitherm','pulseox'],why:[
 'Non-contact infrared "thermometer gun" aimed at the forehead.',
 'Quick no-touch temperature screening at triage and in kids.',
 'Sweat and drafts can make readings falsely low.',
 'For suspected hypothermia or febrile infants, confirm with a core (rectal) temperature.']},
{id:'digitherm',name:'Digital thermometer',cat:'monitoring',level:1,sim:['tymp','temporal','gluc'],why:[
 'Electronic probe thermometer for oral, axillary or rectal temperatures.',
 'Rectal temperature is the standard for infants and is the most reliable core measure.',
 'Febrile infant under 60 days: 38.0°C (100.4°F) rectal is a big deal.',
 'Use a probe cover; blue probes are often oral, red rectal.']},
{id:'gluc',name:'Glucometer',cat:'monitoring',level:1,sim:['pulseox','digitherm','monitor'],why:[
 'Handheld meter that reads blood sugar from a fingerstick drop on a test strip.',
 'Check on EVERY altered, seizing, stroke-like or unresponsive patient.',
 'Hypoglycemia (< 70 mg/dL) is a fast, fixable cause of altered mental status.',
 'May read "HI" or "LO" outside its range; confirm with a lab glucose.']},
{id:'steth',name:'Stethoscope',cat:'monitoring',level:1,sim:['doppler','otoscope','reflex'],why:[
 'Listening tool for heart, lung, bowel and vascular sounds.',
 'Breath sounds after intubation, wheezes, crackles, murmurs, bruits.',
 'Diaphragm for high-pitched sounds (lungs, normal heart sounds); bell for low-pitched (S3, S4, some murmurs).',
 'Clean between patients.']},
// ---------------- RESUSCITATION ----------------
{id:'defib',name:'Manual defibrillator / monitor',cat:'resus',level:1,sim:['aed','monitor','ekgmachine'],why:[
 'Monitor-defibrillator that shows the rhythm and delivers shocks chosen by the clinician.',
 'Defibrillation for VF/pulseless VT, synchronized cardioversion, and transcutaneous pacing.',
 'Biphasic: typically 120–200 J for defibrillation; press SYNC for cardioversion.',
 'Clear the patient and oxygen before every shock.']},
{id:'aed',name:'AED',cat:'resus',level:1,sim:['defib','monitor','pads'],why:[
 'Automated external defibrillator that analyzes the rhythm and tells you whether to shock.',
 'Used by anyone in public places and hospital areas for sudden cardiac arrest.',
 'Turn it on and follow the voice prompts; don\'t touch the patient during analysis.',
 'Early defibrillation is the biggest factor in surviving VF arrest.']},
{id:'pads',name:'Defibrillator pads',cat:'resus',level:1,sim:['electrodes','tegaderm','chestseal'],why:[
 'Large adhesive electrode pads that connect the patient to a defibrillator.',
 'Deliver shocks, pacing and monitoring hands-free.',
 'Anterior–lateral or anterior–posterior placement; avoid placing over a pacemaker or medication patch.',
 'Use pediatric pads/attenuator for small kids; front–back if pads would touch.']},
{id:'crash',name:'Crash cart',cat:'resus',level:1,sim:['pyxis','stretcher','sharps'],why:[
 'Locked, stocked rolling cart with a defibrillator and code medications and supplies.',
 'Brought to every cardiac arrest or rapid response.',
 'Drawers hold ACLS drugs (epinephrine, amiodarone), airway supplies, IV supplies.',
 'Check it every shift and after every use; the plastic lock number is logged.']},
{id:'epipen',name:'Epinephrine auto-injector',cat:'resus',level:1,sim:['narcan','syringe','flush'],why:[
 'Spring-loaded pen that injects a fixed dose of epinephrine into the thigh.',
 'First-line treatment of anaphylaxis.',
 'Adults 0.3 mg; kids 15–30 kg 0.15 mg. Into the outer thigh, through clothing if needed.',
 'Patients still need ED observation; repeat in 5–15 minutes if not improving.']},
{id:'broselow',name:'Broselow tape',cat:'resus',level:2,sim:['ace','snellen','peakflow'],why:[
 'Color-coded length-based tape laid next to a child to estimate weight.',
 'Each color zone gives drug doses, equipment sizes and defib energy for pediatric resuscitation.',
 'Red end at the head; read the color at the heels.',
 'Reduces dosing errors in stressful pediatric codes.']},
{id:'narcan',name:'Naloxone nasal spray',cat:'resus',level:1,sim:['epipen','spacer','syringe'],why:[
 'Opioid antagonist in a ready-to-use nasal spray (Narcan).',
 'Reverses opioid overdose: respiratory depression and decreased responsiveness.',
 'Spray into one nostril; repeat every 2–3 minutes if needed; support breathing with a BVM.',
 'May cause withdrawal; it can wear off before long-acting opioids do.']},
// ---------------- TRAUMA ----------------
{id:'ccollar',name:'Cervical collar',cat:'trauma',level:1,sim:['sling','kneeimm','ked'],why:[
 'Rigid collar that limits neck movement after possible spine injury.',
 'Used for suspected cervical spine injury until cleared by exam (NEXUS / Canadian C-spine rules) or imaging.',
 'Size by measuring from the shoulder to the jaw line with your fingers.',
 'Open the front and hold manual stabilization for airway procedures.']},
{id:'backboard',name:'Long spine board',cat:'trauma',level:1,sim:['scoop','stretcher','ked'],why:[
 'Rigid board for moving and extricating trauma patients.',
 'Mainly an extrication and transfer tool, not for long-term immobilization.',
 'Remove patients from the board quickly to prevent pressure injury and breathing restriction.',
 'Log-roll with spine precautions.']},
{id:'scoop',name:'Scoop stretcher',cat:'trauma',level:2,sim:['backboard','stretcher','ked'],why:[
 'Stretcher that splits lengthwise so the halves slide under a patient from both sides.',
 'Lifts trauma patients with less movement than log-rolling.',
 'Often preferred over a long board for pelvic and spinal injuries.',
 'Reconnect head and foot latches before lifting.']},
{id:'ked',name:'Kendrick extrication device (KED)',cat:'trauma',level:3,sim:['backboard','ccollar','pelvic'],why:[
 'Semi-rigid vest that wraps the torso and head to immobilize a seated patient.',
 'Used to extricate stable patients from vehicles with suspected spinal injury.',
 'Strap order: middle, bottom, top torso straps, legs, then head (often "My Baby Looks Too Hot").',
 'Seen on arrival from EMS; remove carefully with spinal precautions.']},
{id:'cat',name:'Combat application tourniquet (CAT)',cat:'trauma',level:1,sim:['vtourn','israeli','pelvic'],why:[
 'Windlass tourniquet that stops arterial blood flow to a limb.',
 'Life-threatening extremity hemorrhage that direct pressure won\'t control.',
 'Place 2–3 inches above the wound (not over a joint) and tighten until bleeding stops and the distal pulse is gone.',
 'Write the time applied; don\'t loosen once placed in the field.']},
{id:'chesttube',name:'Chest tube',cat:'trauma',level:2,sim:['pleurevac','ng','cvc'],why:[
 'Plastic tube inserted between the ribs into the pleural space.',
 'Drains a pneumothorax, hemothorax, or effusion.',
 'Placed in the "safe triangle" at the 4th–5th intercostal space, mid-to-anterior axillary line, over the rib.',
 'Trauma hemothorax: >1500 mL immediately or ongoing output suggests surgery.']},
{id:'pleurevac',name:'Chest drainage system (Pleur-evac)',cat:'trauma',level:3,sim:['suction','urinebag','chesttube'],why:[
 'Multi-chamber box (collection, water seal, suction control) that a chest tube connects to.',
 'Collects drainage and stops air from going back into the chest.',
 'Bubbling in the water seal = an air leak; tidaling (rise and fall) = system is patent.',
 'Keep it below chest level and upright; mark output with time.']},
{id:'hemostatic',name:'Hemostatic gauze',cat:'trauma',level:2,sim:['gauze','israeli','chestseal'],why:[
 'Gauze impregnated with a clotting agent (e.g., kaolin in QuikClot Combat Gauze).',
 'Packing deep junctional wounds (groin, armpit, neck) where tourniquets can\'t go.',
 'Pack tightly into the wound, then hold firm pressure for at least 3 minutes.',
 'Leave the gauze in place for the surgeon to remove.']},
{id:'traction',name:'Traction splint',cat:'trauma',level:3,sim:['sam','kneeimm','backboard'],why:[
 'Splint that applies longitudinal pull to the leg (Hare, Sager, Thomas types).',
 'Mid-shaft femur fractures: reduces pain, bleeding and muscle spasm.',
 'Contraindicated with hip, pelvis, knee or ankle injuries on that side.',
 'Check distal pulse, motor and sensation before and after.']},
{id:'chestseal',name:'Chest seal',cat:'trauma',level:2,sim:['tegaderm','pads','hemostatic'],why:[
 'Occlusive adhesive dressing for open (sucking) chest wounds.',
 'Prevents air from entering the chest through the wound.',
 'Vented seals let air escape and lower the risk of tension pneumothorax.',
 'Watch for tension pneumothorax: "burp" or remove the seal and decompress.']},
{id:'shears',name:'Trauma shears',cat:'trauma',level:1,sim:['scissors','hemostat','castsaw'],why:[
 'Heavy, angled blunt-tip scissors.',
 'Cut off clothing quickly in trauma and codes for full exposure.',
 'The blunt lower tip slides along the skin without cutting it.',
 'Strong enough for seat belts, boots and leather.']},
// ---------------- ORTHO ----------------
{id:'sam',name:'SAM splint',cat:'ortho',level:1,sim:['fingersplint','traction','plaster'],why:[
 'Foam-coated, moldable aluminum strip.',
 'Quick temporary splinting of wrist, forearm, ankle, and other suspected fractures.',
 'Bending a curve along its length makes it rigid.',
 'Splint the joint above and below the injury; check circulation after.']},
{id:'sling',name:'Arm sling',cat:'ortho',level:1,sim:['ccollar','ace','kneeimm'],why:[
 'Fabric support that holds the forearm across the chest.',
 'Comfort and support for clavicle, shoulder, humerus and upper-limb injuries; after a shoulder reduction.',
 'Keep the hand slightly above elbow level to reduce swelling.',
 'Encourage gentle movement of fingers and wrist.']},
{id:'crutches',name:'Crutches',cat:'ortho',level:1,sim:['walker','wheelchair','boot'],why:[
 'Supports that take weight off an injured leg.',
 'Non-weight-bearing or partial weight-bearing after ankle, foot, knee or leg injuries.',
 'Fit: 2–3 finger widths between the top pad and the armpit; elbows bent about 15–30°.',
 'Weight goes through the hands, not the armpits. "Up with the good, down with the bad" on stairs.']},
{id:'fiberglass',name:'Fiberglass cast',cat:'ortho',level:2,sim:['plaster','ace','sam'],why:[
 'Cast made from resin-coated fiberglass rolls that harden quickly when wet.',
 'Lighter, stronger, water-resistant casts and prefab splint rolls (e.g., OrthoGlass).',
 'Sets in minutes; wear gloves because the resin is sticky.',
 'ED splints are usually non-circumferential to allow for swelling.']},
{id:'kneeimm',name:'Knee immobilizer',cat:'ortho',level:1,sim:['boot','sling','traction'],why:[
 'Padded brace with rigid stays that holds the knee straight.',
 'For knee sprains, patellar dislocation after reduction, quadriceps or patellar tendon injuries.',
 'Velcro straps; the patella opening goes over the kneecap.',
 'Usually used with crutches.']},
{id:'boot',name:'Walking boot (CAM boot)',cat:'ortho',level:1,sim:['kneeimm','crutches','sam'],why:[
 'Removable rigid boot that immobilizes the ankle and foot.',
 'Stable ankle fractures, severe sprains, metatarsal fractures, Achilles injuries.',
 'Allows protected weight-bearing; tall vs short boots by injury.',
 'Remove for skin checks and sleep as instructed.']},
{id:'castsaw',name:'Cast saw',cat:'ortho',level:2,sim:['ezio','shears','scissors'],why:[
 'Oscillating saw that cuts plaster or fiberglass without slicing skin.',
 'Removes or bivalves casts (e.g., compartment concerns, swelling, check).',
 'The blade vibrates rather than spins; use an up-and-down motion, never drag sideways.',
 'The blade gets hot: move often to avoid burns.']},
{id:'fingersplint',name:'Finger splint',cat:'ortho',level:2,sim:['sam','steri','tongue'],why:[
 'Small padded aluminum or plastic splint for finger injuries (e.g., Stack splint, aluminum foam).',
 'Mallet finger, phalanx fractures, sprains, jammed fingers.',
 'Mallet finger needs the DIP in extension continuously for about 6–8 weeks.',
 'Buddy taping is another option for some stable injuries.']},
{id:'ace',name:'Elastic (ACE) bandage',cat:'ortho',level:1,sim:['israeli','plaster','vtourn'],why:[
 'Stretchy woven bandage roll.',
 'Compression for sprains; holding splints and dressings in place.',
 'Wrap distal to proximal with about 50% overlap; not too tight.',
 'Check toes and fingers for color, warmth and sensation.']},
{id:'walker',name:'Walker',cat:'ortho',level:1,sim:['crutches','wheelchair','ivpole'],why:[
 'Four-legged metal frame for walking support.',
 'Safe discharge for elderly, unsteady patients or those who can\'t manage crutches.',
 'Handles at wrist height; elbows slightly bent.',
 'Fall-risk screening matters for older ED patients.']},
// ---------------- WOUND ----------------
{id:'suture',name:'Suture (needle & thread)',cat:'wound',level:1,sim:['steri','stapler','glue'],why:[
 'Surgical thread swaged onto a curved needle in a sterile pack.',
 'Laceration repair: nonabsorbable (nylon, Prolene) for skin; absorbable (Vicryl, chromic) deep or in kids/mouth.',
 'Bigger number = thinner thread: 6-0 for face, 4-0 to 5-0 for arms/hands, 3-0 to 4-0 for trunk/legs/scalp.',
 'Removal: face 3–5 days, scalp 7–10, trunk/arms 7–10, legs/joints 10–14.']},
{id:'stapler',name:'Skin stapler',cat:'wound',level:1,sim:['stapleremover','suture','glue'],why:[
 'Disposable device that places metal staples across a wound.',
 'Fast closure of straight lacerations on the scalp, trunk and limbs.',
 'Not for the face, hands, or areas needing a fine cosmetic result.',
 'Evert the edges; remove in about 7–10 days with a staple remover.']},
{id:'stapleremover',name:'Staple remover',cat:'wound',level:2,sim:['stapler','scissors','hemostat'],why:[
 'Small tool that bends a skin staple in the middle so its legs lift out.',
 'Removing skin staples at follow-up.',
 'Slide the lower jaw under the staple and squeeze fully.',
 'Different from an office staple remover.']},
{id:'glue',name:'Skin adhesive (Dermabond)',cat:'wound',level:1,sim:['steri','suture','silvernitrate'],why:[
 'Cyanoacrylate tissue glue.',
 'Closes small, clean, low-tension lacerations, especially in kids; no needle and no removal visit.',
 'Hold edges together and apply over the top, never inside the wound; keep out of the eyes.',
 'No ointments on top; it sloughs off in 5–10 days.']},
{id:'steri',name:'Steri-Strips',cat:'wound',level:1,sim:['glue','tegaderm','suture'],why:[
 'Thin adhesive skin-closure strips.',
 'Close small superficial cuts, support wounds after suture or staple removal.',
 'Benzoin (tincture) on the skin helps them stick; place perpendicular across the wound.',
 'Let them fall off on their own in about 1–2 weeks.']},
{id:'needledriver',name:'Needle driver',cat:'wound',level:2,sim:['hemostat','adson','scissors'],why:[
 'Ratcheted clamp with short, strong, cross-hatched jaws for gripping a curved needle.',
 'Holds and drives the needle when suturing; used for instrument ties.',
 'Grasp the needle about 2/3 from the tip.',
 'Shorter jaws than a hemostat.']},
{id:'scalpel',name:'Scalpel blade',cat:'wound',level:1,sim:['lpneedle','scissors','cric'],why:[
 'Very sharp disposable surgical blade on a handle.',
 'Incision and drainage of abscesses, surgical airway, chest tube incisions, foreign body removal.',
 '#11 pointed (stab incisions, I&D); #10 large curved (long incisions, cric); #15 small curved (fine work).',
 'Always pass and dispose of it safely: sharps container.']},
{id:'adson',name:'Adson forceps',cat:'wound',level:2,sim:['hemostat','needledriver','magill'],why:[
 'Small tissue "pickups," often with fine teeth.',
 'Gently hold wound edges while suturing; remove foreign bodies.',
 'Toothed forceps crush tissue less than smooth ones when holding skin.',
 'Hold like a pencil.']},
{id:'hemostat',name:'Hemostat',cat:'wound',level:2,sim:['needledriver','adson','magill'],why:[
 'Ratcheted clamp with longer serrated jaws (e.g., Kelly, mosquito).',
 'Clamping vessels, blunt dissection, breaking up loculations in abscesses, chest tube insertion.',
 'Mosquito = small and fine; Kelly = larger.',
 'Not designed to hold suture needles.']},
{id:'scissors',name:'Surgical (suture) scissors',cat:'wound',level:1,sim:['shears','hemostat','needledriver'],why:[
 'Small surgical scissors.',
 'Cutting suture tails during repair and removing sutures at follow-up.',
 'Suture removal scissors have a hooked lower blade that slides under the stitch.',
 'Leave tails about 3–5 mm long on skin sutures.']},
{id:'gauze',name:'Gauze sponges',cat:'wound',level:1,sim:['hemostatic','tegaderm','plaster'],why:[
 'Woven or non-woven cotton squares (e.g., 4×4s).',
 'Cleaning wounds, absorbing blood, holding pressure, dressing wounds.',
 'Firm direct pressure with gauze is the first step for bleeding.',
 'Sterile vs non-sterile packs; count gauze used in procedures.']},
{id:'tegaderm',name:'Transparent film dressing',cat:'wound',level:1,sim:['steri','chestseal','electrodes'],why:[
 'Clear adhesive film dressing (e.g., Tegaderm).',
 'Securing IVs and central lines, covering small wounds, keeping sites visible.',
 'Lets you see the site for infiltration or infection without removing it.',
 'Waterproof but breathable.']},
{id:'silvernitrate',name:'Silver nitrate stick',cat:'wound',level:3,sim:['tongue','fluor','glue'],why:[
 'Wooden applicators with a silver nitrate tip that chemically cauterizes tissue.',
 'Minor bleeding: anterior nosebleeds, umbilical granulomas, small bleeding wounds, hypergranulation.',
 'Activate with moisture and touch the bleeding spot gently.',
 'Stains skin gray-black; don\'t cauterize both sides of the nasal septum at once.']},
// ---------------- GU / GI ----------------
{id:'foley',name:'Foley catheter',cat:'gugi',level:1,sim:['coude','ng','urinebag'],why:[
 'Indwelling urinary catheter with a balloon that holds it in the bladder.',
 'Urinary retention, accurate urine output in critical illness, some surgeries.',
 'Insert with sterile technique; inflate the balloon (usually 10 mL sterile water) only after urine returns.',
 'Common adult sizes 14–18 Fr; remove as soon as possible to prevent infection.']},
{id:'coude',name:'Coudé catheter',cat:'gugi',level:2,sim:['foley','ng','bougie'],why:[
 'Urinary catheter with a curved, angled tip.',
 'For men with enlarged prostates (BPH) or when a straight Foley won\'t pass.',
 'Keep the tip pointed UP (toward 12 o\'clock) during insertion.',
 'The balloon port lines up with the tip direction.']},
{id:'ng',name:'Nasogastric tube',cat:'gugi',level:1,sim:['salem','npa','foley'],why:[
 'Flexible tube through the nose into the stomach.',
 'Decompression (bowel obstruction), lavage, medications, or feeding.',
 'Measure nose → earlobe → xiphoid; confirm position with X-ray.',
 'Avoid with major facial fractures or basilar skull fracture (use oral route).']},
{id:'salem',name:'Salem sump (double-lumen gastric tube)',cat:'gugi',level:2,sim:['ng','foley','sbtube'],why:[
 'Double-lumen gastric tube: one lumen drains, the other is an air vent (the Salem\'s is a blue "pigtail").',
 'Gastric decompression on continuous suction (e.g., small bowel obstruction).',
 'The vent lumen prevents the tip from sucking against the stomach wall.',
 'Keep the vent above the stomach and never clamp it.']},
{id:'urinebag',name:'Urine drainage bag',cat:'gugi',level:1,sim:['ivbag','pleurevac','urinal'],why:[
 'Collection bag connected to a urinary catheter.',
 'Collects and measures urine output.',
 'Keep it below bladder level and off the floor to prevent backflow and infection.',
 'Leg bags are used for discharge home.']},
{id:'hat',name:'Urine collection hat',cat:'gugi',level:2,sim:['bedpan','urinal','urinecup'],why:[
 'Plastic hat-shaped container placed under a toilet seat.',
 'Collect and measure urine or stool; strain urine for kidney stones.',
 'Used with a strainer for suspected stones.',
 'Label and put in the right spot so others know output is being measured.']},
{id:'bedpan',name:'Bedpan',cat:'gugi',level:1,sim:['urinal','hat','urinebag'],why:[
 'Container placed under a bed-bound patient for urination or bowel movements.',
 'Patients on bed rest, spinal precautions, or too unstable to walk.',
 'Fracture pans are flatter for patients who can\'t raise their hips.',
 'Raise the head of the bed if allowed for comfort.']},
{id:'urinal',name:'Urinal',cat:'gugi',level:1,sim:['bedpan','hat','urinebag'],why:[
 'Handheld bottle for urinating in bed.',
 'Urine samples and measuring output for patients who can\'t walk to the bathroom.',
 'Graduated markings let you measure volume.',
 'Female urinals have a wider opening.']},
{id:'cathsyringe',name:'Catheter-tip (Toomey) syringe',cat:'gugi',level:2,sim:['syringe','bulb','flush'],why:[
 'Large 60 mL syringe with a tapered catheter tip instead of a luer lock.',
 'Flushing NG/feeding tubes, bladder irrigation, checking G-tubes, irrigating wounds.',
 'Tip fits into catheter and tube ports.',
 'Also used with an angiocath for wound irrigation.']},
{id:'anoscope',name:'Anoscope / proctoscope',cat:'gugi',level:3,sim:['speculum','nasalspec','otoscope'],why:[
 'Short tube with an obturator for looking inside the anal canal.',
 'Evaluate hemorrhoids, fissures, bleeding source, abscesses, and foreign bodies.',
 'Lubricate, insert with the obturator, then remove it to look.',
 'Pair with a light source.']},
// ---------------- ENT & EYE ----------------
{id:'otoscope',name:'Otoscope',cat:'enteye',level:1,sim:['ophth','tymp','nasalspec'],why:[
 'Lighted scope with a cone (speculum) for looking into the ear.',
 'Examines the ear canal and eardrum: otitis media, otitis externa, foreign bodies, perforation.',
 'Pull adult ears up and back; children\'s ears down and back.',
 'Can also look into the nose with a larger tip.']},
{id:'ophth',name:'Ophthalmoscope',cat:'enteye',level:2,sim:['otoscope','slitlamp','penlight'],why:[
 'Handheld scope with a light and dial of lenses for looking at the back of the eye.',
 'Fundus exam: papilledema, retinal hemorrhage, central retinal artery occlusion.',
 'Your right eye looks at the patient\'s right eye.',
 'Dark room helps; pupils may need dilating.']},
{id:'slitlamp',name:'Slit lamp',cat:'enteye',level:2,sim:['ophth','snellen','otoscope'],why:[
 'Binocular microscope with an adjustable light slit for eye exams.',
 'Corneal abrasions, foreign bodies, hyphema, cells and flare in iritis.',
 'Use with fluorescein and cobalt blue light for abrasions.',
 'Rust ring removal is done at the slit lamp.']},
{id:'snellen',name:'Snellen chart',cat:'enteye',level:1,sim:['slitlamp','broselow','penlight'],why:[
 'Eye chart with rows of shrinking letters.',
 'Measures visual acuity: "the vital sign of the eye."',
 'Test each eye separately at 20 feet (or a near card), with glasses on.',
 'Document acuity in every eye complaint.']},
{id:'fluor',name:'Fluorescein strip',cat:'enteye',level:2,sim:['silvernitrate','morgan','tongue'],why:[
 'Paper strips with orange dye that is applied to the eye.',
 'Stains corneal abrasions and ulcers bright green under cobalt blue light.',
 'Moisten with saline and touch to the lower lid; patient blinks.',
 'Seidel sign (dye streaming) suggests an open globe.']},
{id:'nasalspec',name:'Nasal speculum',cat:'enteye',level:2,sim:['speculum','anoscope','otoscope'],why:[
 'Small hinged instrument that spreads the nostril open.',
 'Exam for anterior nosebleeds, foreign bodies, septal hematoma.',
 'Open blades vertically (up and down), not against the septum.',
 'Use with a headlamp for both hands free.']},
{id:'eyeshield',name:'Eye shield',cat:'enteye',level:2,sim:['goggles','morgan','faceshield'],why:[
 'Rigid perforated cover taped over the eye (e.g., Fox shield).',
 'Protects a possible ruptured globe from pressure.',
 'Rests on the bony orbit, never on the eye; no patching or pressure.',
 'Keep the patient NPO, give antiemetics, and get ophthalmology.']},
{id:'tongue',name:'Tongue depressor',cat:'enteye',level:1,sim:['fingersplint','silvernitrate','fluor'],why:[
 'Flat wooden stick.',
 'Holds the tongue down to see the throat: pharyngitis, peritonsillar abscess, foreign body.',
 'Press on the front two-thirds of the tongue to avoid gagging.',
 'Also used for buddy splinting and inserting an OPA in kids.']},
{id:'penlight',name:'Penlight',cat:'enteye',level:1,sim:['tonopen','otoscope','woods'],why:[
 'Pen-shaped flashlight.',
 'Pupil exam (size, equal, reactive), throat and mouth exam.',
 'A fixed dilated pupil after head trauma can mean herniation.',
 'Pinpoint pupils suggest opioids or pontine injury.']},
// ---------------- OB ----------------
{id:'fetaldoppler',name:'Fetal Doppler',cat:'ob',level:2,sim:['doppler','bladderscan','steth'],why:[
 'Handheld ultrasound device that detects fetal heart tones.',
 'Checks fetal heart rate in pregnant patients, especially after trauma or bleeding.',
 'Normal fetal heart rate is about 110–160 bpm.',
 'Detectable from about 10–12 weeks; compare with the mother\'s pulse.']},
{id:'cordclamp',name:'Umbilical cord clamp',cat:'ob',level:2,sim:['hemostat','stopcock','bulb'],why:[
 'Plastic clamp that locks on the umbilical cord.',
 'Clamping the cord after delivery in the ED or field.',
 'Clamp in two places and cut between them; delay 30–60 seconds in vigorous babies.',
 'Part of the precipitous delivery (OB) kit.']},
{id:'bulb',name:'Bulb syringe',cat:'ob',level:1,sim:['cathsyringe','yankauer','syringe'],why:[
 'Squeezable rubber bulb for gentle suction.',
 'Clears mouth then nose of newborns and small infants.',
 '"Mouth before nose": nose suction can make the baby gasp and inhale secretions.',
 'Also sent home for congested infants.']},
{id:'speculum',name:'Vaginal speculum',cat:'ob',level:2,sim:['nasalspec','anoscope','otoscope'],why:[
 'Hinged instrument that opens the vaginal walls to see the cervix.',
 'Pelvic exam: bleeding, discharge, foreign body, STI testing, cervical os assessment.',
 'Warm and lubricate (water), insert at a downward angle, then open.',
 'Disposable plastic or reusable metal.']},
{id:'warmer',name:'Infant radiant warmer',cat:'ob',level:3,sim:['bairhugger','stretcher','vent'],why:[
 'Open bed with an overhead heater for newborns.',
 'Neonatal resuscitation after delivery; keeps the baby warm.',
 'Dry, warm, stimulate is the first step of newborn resuscitation.',
 'Skin temperature probe controls the heater.']},
// ---------------- PPE ----------------
{id:'n95',name:'N95 respirator',cat:'ppe',level:1,sim:['surgmask','papr','faceshield'],why:[
 'Fitted respirator that filters at least 95% of airborne particles.',
 'Airborne precautions: TB, measles, chickenpox, COVID aerosol-generating procedures.',
 'Must be fit-tested and seal-checked every time.',
 'A surgical mask does not provide this protection.']},
{id:'surgmask',name:'Surgical mask',cat:'ppe',level:1,sim:['n95','faceshield','goggles'],why:[
 'Loose-fitting fluid-resistant mask.',
 'Droplet precautions (influenza, pertussis), source control, sterile procedures.',
 'Put one on coughing patients in triage.',
 'Not a respirator for airborne diseases.']},
{id:'faceshield',name:'Face shield',cat:'ppe',level:1,sim:['goggles','surgmask','n95'],why:[
 'Clear plastic visor covering the whole face.',
 'Splash protection during airway procedures, irrigation, trauma, childbirth.',
 'Wear with a mask; a shield alone doesn\'t filter air.',
 'Part of standard precautions when splashes are likely.']},
{id:'gloves',name:'Nitrile gloves',cat:'ppe',level:1,sim:['gown','surgmask','biohazard'],why:[
 'Disposable latex-free exam gloves.',
 'Standard precautions with blood and body fluids, and contact precautions.',
 'Change between patients; hand hygiene before and after.',
 'Sterile gloves are separate, for sterile procedures.']},
{id:'gown',name:'Isolation gown',cat:'ppe',level:1,sim:['gloves','papr','faceshield'],why:[
 'Disposable fluid-resistant gown.',
 'Contact precautions (MRSA, C. diff) and splash protection.',
 'Donning order: gown, mask/respirator, eye protection, gloves.',
 'Doffing: gloves and gown first, then eye protection, then mask, then hand hygiene.']},
{id:'papr',name:'PAPR',cat:'ppe',level:2,sim:['n95','faceshield','gown'],why:[
 'Powered air-purifying respirator: battery blower pushes filtered air into a hood.',
 'Airborne isolation for staff who fail N95 fit testing or have beards; high-risk aerosol procedures.',
 'No fit test needed for loose hoods.',
 'Check battery and airflow before use.']},
{id:'goggles',name:'Safety goggles',cat:'ppe',level:1,sim:['faceshield','eyeshield','surgmask'],why:[
 'Sealed eye protection.',
 'Protects eyes from splashes and sprays of blood or body fluids.',
 'Regular glasses are not eye protection.',
 'Required for intubation, suctioning, wound irrigation.']},
{id:'sharps',name:'Sharps container',cat:'ppe',level:1,sim:['biohazard','crash','pyxis'],why:[
 'Puncture-resistant red container for used needles and blades.',
 'Immediate disposal of needles, scalpels, lancets and glass ampules.',
 'Never recap needles; don\'t fill above the fill line (about 3/4).',
 'Needlestick: wash, report immediately, and get post-exposure evaluation.']},
{id:'biohazard',name:'Biohazard bag',cat:'ppe',level:1,sim:['sharps','gloves','urinebag'],why:[
 'Red or orange bag with the biohazard symbol.',
 'Disposal of items soaked with blood or infectious body fluids.',
 'Sharps never go in a bag; use the sharps container.',
 'Lab specimen transport bags also carry the symbol.']},
// ---------------- MISC ----------------
{id:'bairhugger',name:'Forced-air warming blanket',cat:'misc',level:2,sim:['warmer','pbag','stretcher'],why:[
 'Blower that pushes warm air through a disposable blanket over the patient (e.g., Bair Hugger).',
 'Treats or prevents hypothermia in trauma, sepsis, exposure, and after surgery.',
 'Hypothermia worsens bleeding in trauma (part of the "lethal triad").',
 'Never blow the hose directly onto skin without the blanket.']},
{id:'restraints',name:'Soft restraints',cat:'misc',level:2,sim:['sling','vtourn','ace'],why:[
 'Padded wrist or ankle straps that limit movement.',
 'Last resort for violent or agitated patients at imminent risk of harming themselves or staff.',
 'Requires a provider order, frequent checks (circulation, skin, needs), and documentation.',
 'Use the least restrictive option and remove as soon as safe.']},
{id:'stretcher',name:'Stretcher (gurney)',cat:'misc',level:1,sim:['backboard','scoop','wheelchair'],why:[
 'Wheeled bed with adjustable height, back rest and rails.',
 'Transport and treatment space for ED patients.',
 'Lock the wheels during transfers; rails up for fall-risk patients.',
 'Many tilt into Trendelenburg and have an O2 tank holder.']},
{id:'wheelchair',name:'Wheelchair',cat:'misc',level:1,sim:['walker','stretcher','crutches'],why:[
 'Wheeled chair for patients who can\'t walk safely.',
 'Moving patients from triage, to radiology, or at discharge.',
 'Lock the brakes before the patient sits or stands.',
 'Lift the footrests out of the way during transfers.']},
{id:'pyxis',name:'Automated dispensing cabinet',cat:'misc',level:1,sim:['crash','pump','sharps'],why:[
 'Computerized medication cabinet (e.g., Pyxis, Omnicell).',
 'Secure storage and tracked dispensing of medications, including controlled substances.',
 'Removing meds is linked to the patient\'s profile and orders.',
 'Controlled substance waste needs a witness.']},
{id:'lpneedle',name:'Spinal (LP) needle',cat:'misc',level:2,sim:['ioneedle','butterfly','manometer'],why:[
 'Long thin needle with a stylet (e.g., 20–22G, 3.5 inch).',
 'Lumbar puncture for meningitis, subarachnoid hemorrhage, opening pressure.',
 'Insert at L3–L4 or L4–L5 (level of the iliac crests); stylet in while advancing.',
 'Atraumatic (pencil-point) needles reduce post-LP headache.']},
{id:'reflex',name:'Reflex hammer',cat:'misc',level:1,sim:['tuning','steth','tongue'],why:[
 'Rubber-headed hammer for testing deep tendon reflexes.',
 'Neurologic exam: biceps, triceps, patellar, Achilles; checks for clonus.',
 'Hyperreflexia suggests an upper motor neuron problem; absent reflexes in cauda equina or Guillain-Barré.',
 'The patient should be relaxed.']},
{id:'tuning',name:'Tuning fork',cat:'misc',level:2,sim:['reflex','steth','otoscope'],why:[
 'Metal fork that vibrates at a set frequency (often 128 or 512 Hz).',
 'Weber and Rinne hearing tests (512 Hz); vibration sense in neuropathy (128 Hz).',
 'Sometimes used as a bedside fracture screen.',
 'Strike it on your knuckle or palm, not a hard surface.']},
];
