(() => {
  const COVER = { full_live:1, almost_all_live:.9, selected_games_live:.7, top_games_live:.6, conference_only:.5, one_game_per_round:.3, highlights_only:.15, replay_only:.1, not_available:0 };
  const SPORTS = [{id:'football',label:'Fussball'},{id:'hockey',label:'Eishockey'},{id:'motorsport',label:'Motorsport'},{id:'american_football',label:'American Football'},{id:'basketball',label:'Basketball'},{id:'tennis',label:'Tennis'},{id:'combat',label:'Kampfsport'},{id:'handball',label:'Handball'},{id:'golf',label:'Golf'},{id:'wintersport',label:'Wintersport'}];
  const EVENTS_BY_SPORT = {
    football:[{id:'football_ucl',label:'Champions League'},{id:'football_uel',label:'Europa League'},{id:'football_uecl',label:'Conference League'},{id:'football_sl',label:'Super League'},{id:'football_cl',label:'Challenge League'},{id:'football_swiss_cup',label:'Schweizer Cup'},{id:'football_pl',label:'Premier League'},{id:'football_bundesliga',label:'Bundesliga'},{id:'football_seriea',label:'Serie A'},{id:'football_ligue1',label:'Ligue 1'},{id:'football_laliga',label:'LaLiga'},{id:'football_nat_team',label:'Schweizer Männer Nationalteam'}],
    hockey:[{id:'hockey_nl',label:'National League'},{id:'hockey_sl',label:'Swiss League'},{id:'hockey_nhl',label:'NHL'},{id:'hockey_chl',label:'Champions Hockey League'},{id:'hockey_shl',label:'SHL'},{id:'hockey_nat_team',label:'Schweizer Nationalteam'}],
    motorsport:[{id:'motorsport_f1',label:'Formel 1'},{id:'motorsport_fe',label:'Formel E'},{id:'motorsport_motogp',label:'MotoGP'},{id:'motorsport_wec',label:'WEC'}],
    american_football:[{id:'af_nfl',label:'NFL'},{id:'af_super_bowl',label:'Super Bowl'}],
    basketball:[{id:'basket_nba',label:'NBA'},{id:'basket_euroleague',label:'EuroLeague'}],
    tennis:[{id:'tennis_atp',label:'ATP Tour'},{id:'tennis_wta',label:'WTA Tour'},{id:'tennis_wimbledon',label:'Wimbledon'},{id:'tennis_usopen',label:'US Open'}],
    combat:[{id:'combat_ufc',label:'UFC'},{id:'combat_boxing',label:'Boxen'},{id:'combat_pfl',label:'PFL'}],
    handball:[{id:'handball_ehf_cl',label:'EHF Champions League'},{id:'handball_ehf_el',label:'EHF European League'},{id:'handball_bundesliga',label:'Handball Bundesliga'}],
    golf:[{id:'golf_pga',label:'PGA Tour'},{id:'golf_majors',label:'Majors'}],
    wintersport:[{id:'winter_ski_alpin',label:'Ski Alpin'},{id:'winter_biathlon',label:'Biathlon'},{id:'winter_langlauf',label:'Langlauf'}]
  };
  const FEATURES = [{id:'live',label:'Live ist mir wichtig'},{id:'replay',label:'Replays sind mir wichtig'},{id:'highlights',label:'Highlights genügen oft'},{id:'uhd',label:'UHD oder HDR wäre ein Plus'}];
  const DEVICES = [{id:'smart_tv',label:'Smart TV'},{id:'apple_tv',label:'Apple TV'},{id:'android_tv',label:'Android TV'},{id:'chromecast',label:'Chromecast'},{id:'browser',label:'Laptop Browser'},{id:'mobile',label:'iPhone oder Android'}];
  const SUB_CHOICES = [{id:1,title:'Nur 1 Abo',text:'So simpel wie möglich.'},{id:2,title:'Bis zu 2 Abos',text:'Mehr Passung, noch übersichtlich.'},{id:3,title:'Bis zu 3 Abos',text:'Wenn Passung wichtiger ist als Einfachheit.'}];
  const CONTRACTS = [{id:'flex',label:'Monatlich kündbar'},{id:'12m',label:'12 Monate Laufzeit'}];
  const DATA = {
    last_verified:'2026-03-09',
    packages:[
      {id:'blue_sport_flex',name:'blue Sport Flex',price_12m:49.90,price_flex:49.90,devices:{smart_tv:1,apple_tv:1,android_tv:1,chromecast:1,browser:1,mobile:1},features:{live:1,replay:1,highlights:1,uhd:1}},
      {id:'blue_sport_12m',name:'blue Sport 12M',price_12m:34.90,price_flex:34.90,devices:{smart_tv:1,apple_tv:1,android_tv:1,chromecast:1,browser:1,mobile:1},features:{live:1,replay:1,highlights:1,uhd:1}},
      {id:'srg_ssr_free',name:'SRG SSR',price_12m:0,price_flex:0,devices:{smart_tv:1,browser:1,mobile:1},features:{live:1,replay:0,highlights:1,uhd:0}},
      {id:'sky_sport_pass',name:'Sky Sport Pass',price_12m:24.90,price_flex:24.90,devices:{smart_tv:1,apple_tv:1,android_tv:1,chromecast:1,browser:1,mobile:1},features:{live:1,replay:1,highlights:1,uhd:1}},
      {id:'mysports_12m',name:'MySports 12M',price_12m:29.90,price_flex:29.90,devices:{smart_tv:1,apple_tv:1,android_tv:1,chromecast:1,browser:1,mobile:1},features:{live:1,replay:1,highlights:1,uhd:0}},
      {id:'dazn_super_sports_12m',name:'DAZN Super Sports 12M',price_12m:24.90,price_flex:24.90,devices:{smart_tv:1,apple_tv:1,android_tv:1,chromecast:1,browser:1,mobile:1},features:{live:1,replay:1,highlights:1,uhd:0}},
      {id:'dazn_unlimited_12m',name:'DAZN Unlimited 12M',price_12m:34.90,price_flex:34.90,devices:{smart_tv:1,apple_tv:1,android_tv:1,chromecast:1,browser:1,mobile:1},features:{live:1,replay:1,highlights:1,uhd:0}},
      {id:'sky_mysports_bundle',name:'Sky + MySports Bundle',price_12m:44.80,price_flex:54.80,devices:{smart_tv:1,apple_tv:1,android_tv:1,chromecast:1,browser:1,mobile:1},features:{live:1,replay:1,highlights:1,uhd:1}}
    ],
    rights:{
      blue_sport_flex:{football_ucl:'full_live',football_uel:'full_live',football_uecl:'full_live',football_sl:'full_live',football_cl:'full_live',football_swiss_cup:'full_live',football_laliga:'full_live',motorsport_fe:'full_live'},
      blue_sport_12m:{football_ucl:'full_live',football_uel:'full_live',football_uecl:'full_live',football_sl:'full_live',football_cl:'full_live',football_swiss_cup:'full_live',football_laliga:'full_live',motorsport_fe:'full_live'},
      srg_ssr_free:{football_ucl:'one_game_per_round',football_uel:'one_game_per_round',football_uecl:'one_game_per_round',football_swiss_cup:'top_games_live',football_nat_team:'full_live',winter_ski_alpin:'top_games_live',winter_biathlon:'top_games_live',winter_langlauf:'top_games_live'},
      sky_sport_pass:{football_pl:'full_live',football_bundesliga:'full_live',football_seriea:'full_live',football_ligue1:'top_games_live',motorsport_f1:'full_live',tennis_atp:'top_games_live',tennis_wta:'top_games_live',golf_pga:'top_games_live',golf_majors:'top_games_live',hockey_sl:'full_live',combat_ufc:'selected_games_live',handball_bundesliga:'selected_games_live'},
      mysports_12m:{hockey_nl:'full_live',hockey_nhl:'selected_games_live',hockey_chl:'full_live',hockey_shl:'selected_games_live',hockey_nat_team:'selected_games_live'},
      dazn_super_sports_12m:{football_seriea:'top_games_live',football_ligue1:'top_games_live',football_bundesliga:'top_games_live',af_nfl:'full_live',combat_ufc:'full_live',combat_boxing:'full_live',handball_ehf_cl:'top_games_live',handball_ehf_el:'top_games_live'},
      dazn_unlimited_12m:{football_seriea:'full_live',football_ligue1:'full_live',football_bundesliga:'top_games_live',af_nfl:'full_live',combat_ufc:'full_live',combat_boxing:'full_live',combat_pfl:'full_live',handball_ehf_cl:'top_games_live',handball_ehf_el:'top_games_live'},
      sky_mysports_bundle:{football_pl:'full_live',football_bundesliga:'full_live',football_seriea:'full_live',football_ligue1:'top_games_live',motorsport_f1:'full_live',hockey_nl:'full_live',hockey_nhl:'selected_games_live',hockey_chl:'full_live',hockey_shl:'selected_games_live',golf_pga:'top_games_live'}
    }
  };
  const state = {selectedSports:[],selectedEvents:[],must:{},features:[],budget:40,contract:'flex',subs:2,devices:[],simplicity:7,step:'sports'};
  const qs=(s,r=document)=>r.querySelector(s), qsa=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const dynamicStepsHost=qs('#dynamicSteps'), flow=qs('#flow');
  const progressText=qs('#progressText'), progressPct=qs('#progressPct'), progressFill=qs('#progressFill');
  const previewTitle=qs('#previewTitle'), previewText=qs('#previewText'), previewSports=qs('#previewSports'), previewEvents=qs('#previewEvents'), previewMust=qs('#previewMust'), previewBudget=qs('#previewBudget'), previewContract=qs('#previewContract');
  const budgetRange=qs('#budgetRange'), budgetPill=qs('#budgetPill'), simpRange=qs('#simpRange'), simpPill=qs('#simpPill');
  const mustSummary=qs('#mustSummary'), mustSummaryText=qs('#mustSummaryText'); const resultsStage=qs('#resultsStage'), resultsGrid=qs('#resultsGrid');
  function getAllSteps(){return ['sports',...state.selectedSports.map(id=>`events_${id}`),'importance','viewing','budget','subs','devices','simplicity'];}
  function makeChip(label,active,onClick){const b=document.createElement('button');b.type='button';b.className=`chip${active?' active':''}`;b.textContent=label;b.addEventListener('click',()=>onClick(b));return b;}
  function makeChoice(active,title,text,onClick){const b=document.createElement('button');b.type='button';b.className=`choice${active?' active':''}`;b.innerHTML=`<b>${title}</b><span>${text}</span>`;b.addEventListener('click',()=>onClick(b));return b;}
  function cleanStateAfterSportsChange(){const valid=new Set();state.selectedSports.forEach(id=>(EVENTS_BY_SPORT[id]||[]).forEach(ev=>valid.add(ev.id)));state.selectedEvents=state.selectedEvents.filter(id=>valid.has(id));Object.keys(state.must).forEach(id=>{if(!valid.has(id)) delete state.must[id];});}
  function renderSports(){const root=qs('#sportsChips');root.innerHTML='';SPORTS.forEach(s=>root.appendChild(makeChip(s.label,state.selectedSports.includes(s.id),()=>{if(state.selectedSports.includes(s.id)) state.selectedSports=state.selectedSports.filter(x=>x!==s.id); else state.selectedSports.push(s.id); cleanStateAfterSportsChange(); renderSports(); renderDynamicSteps(); updatePreview(); if(!getAllSteps().includes(state.step)) showStep('sports');})));}
  function renderDynamicSteps(){const current=state.step;dynamicStepsHost.innerHTML='';state.selectedSports.forEach(sportId=>{const sport=SPORTS.find(x=>x.id===sportId);const stepId=`events_${sportId}`;const section=document.createElement('section');section.className='step';section.dataset.step=stepId;section.innerHTML=`<fieldset><legend>Welche Wettbewerbe sind dir bei ${sport.label} wichtig?</legend><p class="help">Wähle nur das aus, was bei deiner Entscheidung wirklich zählen soll.</p><div class="event-stack" id="stack_${sportId}"></div><div class="error" id="err_events_${sportId}"></div><div class="actions"><button type="button" class="btn" data-back>Zurück</button><button type="button" class="btn primary" data-next>Weiter</button></div></fieldset>`;dynamicStepsHost.appendChild(section);const stack=qs(`#stack_${sportId}`);(EVENTS_BY_SPORT[sportId]||[]).forEach(ev=>{const row=document.createElement('div');row.className='event-row';const chip=makeChip(ev.label,state.selectedEvents.includes(ev.id),()=>{if(state.selectedEvents.includes(ev.id)){state.selectedEvents=state.selectedEvents.filter(x=>x!==ev.id);delete state.must[ev.id];} else state.selectedEvents.push(ev.id); renderDynamicSteps(); updatePreview(); showStep(stepId);});const must=document.createElement('button');must.type='button';must.className=`mini-toggle${state.must[ev.id]?' active':''}`;must.textContent='Unbedingt dabei';must.addEventListener('click',()=>{if(!state.selectedEvents.includes(ev.id)) state.selectedEvents.push(ev.id); if(state.must[ev.id]) delete state.must[ev.id]; else state.must[ev.id]=true; renderDynamicSteps(); updatePreview(); showStep(stepId);});row.appendChild(chip);row.appendChild(must);stack.appendChild(row);});}); if(getAllSteps().includes(current)) showStep(current);}
  function renderFeatureChips(){const root=qs('#featureChips');root.innerHTML='';FEATURES.forEach(f=>root.appendChild(makeChip(f.label,state.features.includes(f.id),()=>{if(state.features.includes(f.id)) state.features=state.features.filter(x=>x!==f.id); else state.features.push(f.id); renderFeatureChips();})));}
  function renderDeviceChips(){const root=qs('#deviceChips');root.innerHTML='';DEVICES.forEach(d=>root.appendChild(makeChip(d.label,state.devices.includes(d.id),()=>{if(state.devices.includes(d.id)) state.devices=state.devices.filter(x=>x!==d.id); else if(state.devices.length<5) state.devices.push(d.id); renderDeviceChips(); updatePreview();})));}
  function renderContractChoices(){const root=qs('#contractToggle');root.innerHTML='';CONTRACTS.forEach(c=>root.appendChild(makeChip(c.label,state.contract===c.id,()=>{state.contract=c.id; renderContractChoices(); updatePreview();})));}
  function renderSubsChoices(){const root=qs('#subsChoices');root.innerHTML='';SUB_CHOICES.forEach(c=>root.appendChild(makeChoice(state.subs===c.id,c.title,c.text,()=>{state.subs=c.id; renderSubsChoices();})));}
  function selectedLabels(){const out=[];Object.values(EVENTS_BY_SPORT).forEach(arr=>arr.forEach(ev=>{if(state.selectedEvents.includes(ev.id)) out.push(ev.label);}));return out;}
  function updatePreview(){previewSports.textContent=String(state.selectedSports.length);previewEvents.textContent=String(state.selectedEvents.length);previewMust.textContent=String(Object.keys(state.must).length);previewBudget.textContent=`CHF ${state.budget}`;previewContract.textContent=state.contract==='flex'?'Monatlich kündbar':'12 Monate';const labels=selectedLabels();mustSummary.textContent=labels.length?`${labels.length} Wettbewerbe ausgewählt`:'Noch keine Wettbewerbe gewählt.';mustSummaryText.textContent=labels.length?`${Object.keys(state.must).length} davon als besonders wichtig markiert.`:'Wähle zuerst Wettbewerbe in den Schritten oberhalb.'; if(!labels.length){previewTitle.textContent='Noch keine Wettbewerbe gewählt.';previewText.textContent='Wähle Sportarten und Wettbewerbe – die Vorschau aktualisiert sich automatisch.';return;} previewTitle.textContent=labels.slice(0,3).join(', ')+(labels.length>3?' +':''); previewText.textContent=`${labels.length} Wettbewerbe gewählt, ${Object.keys(state.must).length} davon besonders wichtig.`;}
  function showStep(stepId){state.step=stepId;qsa('.step',flow).forEach(s=>s.classList.toggle('active',s.dataset.step===stepId));const all=getAllSteps();const idx=all.indexOf(stepId);const pos=(idx>=0?idx:0)+1;progressText.textContent=`Frage ${pos} von ${all.length}`;progressPct.textContent=`${Math.round(pos/all.length*100)}%`;progressFill.style.transform=`scaleX(${pos/all.length})`;}
  function validateStep(stepId){if(stepId==='sports') return state.selectedSports.length>0; if(stepId.startsWith('events_')){const sid=stepId.replace('events_','');const ids=(EVENTS_BY_SPORT[sid]||[]).map(e=>e.id);return state.selectedEvents.some(id=>ids.includes(id));} if(stepId==='importance') return state.selectedEvents.length>0; if(stepId==='viewing') return state.features.length>0; if(stepId==='devices') return state.devices.length>0; return true;}
  function goNext(){const all=getAllSteps();const idx=all.indexOf(state.step); if(!validateStep(state.step)) return; const next=all[idx+1]; if(next) showStep(next); else {renderResults(); resultsStage.classList.add('visible'); document.getElementById('results').scrollIntoView({behavior:'smooth',block:'start'});}}
  function goBack(){const all=getAllSteps();const idx=all.indexOf(state.step); if(idx>0) showStep(all[idx-1]);}
  function packagePrice(p){return state.contract==='12m'?p.price_12m:p.price_flex;}
  function mergeRights(a,b){const out={};const keys=new Set([...Object.keys(a||{}),...Object.keys(b||{})]);keys.forEach(k=>{const lv=COVER[a?.[k]||'not_available']||0;const rv=COVER[b?.[k]||'not_available']||0; out[k]=lv>=rv?(a?.[k]||'not_available'):(b?.[k]||'not_available');});return out;}
  function mergeMap(a,b){const out={};const keys=new Set([...Object.keys(a||{}),...Object.keys(b||{})]);keys.forEach(k=>out[k]=(a?.[k]||b?.[k])?1:0);return out;}
  function buildCandidates(){const EXCL=[['blue_sport_flex','blue_sport_12m'],['sky_mysports_bundle','sky_sport_pass'],['sky_mysports_bundle','mysports_12m']];const items=DATA.packages.filter(p=>state.contract==='flex'?p.id!=='blue_sport_12m':p.id!=='blue_sport_flex');const combos=[];function rec(start,current){if(current.length) combos.push([...current]); if(current.length===state.subs) return; for(let i=start;i<items.length;i++){current.push(items[i]);rec(i+1,current);current.pop();}} rec(0,[]); return combos.filter(list=>{const ids=list.map(p=>p.id);return !EXCL.some(pair=>pair.every(id=>ids.includes(id)));}).map(list=>{let price=0, rights={}, devices={}, features={}; list.forEach(pkg=>{price+=packagePrice(pkg); rights=mergeRights(rights,DATA.rights[pkg.id]||{}); devices=mergeMap(devices,pkg.devices||{}); features=mergeMap(features,pkg.features||{});}); return {label:list.map(x=>x.name).join(' + '),packages:list,price:Math.round(price*100)/100,rights,devices,features};});}
  function coverageFor(c){let num=0, den=0; const per={}; state.selectedEvents.forEach(id=>{const level=c.rights[id]||'not_available'; const value=COVER[level]||0; const w=state.must[id]?2:1; num += value*w; den += w; per[id]={level,value};}); return {pct:den?100*num/den:0, per};}
  function humanLevel(level){return ({full_live:'live',almost_all_live:'fast komplett',selected_games_live:'ausgewählte Spiele live',top_games_live:'Topspiele live',conference_only:'Konferenz',one_game_per_round:'1 Spiel pro Runde',highlights_only:'nur Highlights',replay_only:'nur Replay',not_available:'nicht enthalten'})[level]||level;}
  function classify(per){const labels=[];Object.values(EVENTS_BY_SPORT).forEach(arr=>arr.forEach(ev=>{if(state.selectedEvents.includes(ev.id)) labels.push({id:ev.id,label:ev.label});}));const full=[],partial=[],none=[]; labels.forEach(item=>{const level=per[item.id]?.level||'not_available';const value=per[item.id]?.value||0; if(level==='full_live') full.push(item.label); else if(value>0) partial.push(`${item.label} (${humanLevel(level)})`); else none.push(item.label);}); return {full,partial,none};}
  function featureFit(c){if(!state.features.length) return 7; return state.features.reduce((a,id)=>a+(c.features[id]?10:0),0)/state.features.length;} function deviceFit(c){if(!state.devices.length) return 7; return state.devices.reduce((a,id)=>a+(c.devices[id]?10:0),0)/state.devices.length;} function priceScore(price){if(state.budget<=0) return price===0?10:0; const r=price/state.budget; if(r<=.5) return 9.4; if(r<=.75) return 8.3; if(r<=1) return 6.9; if(r<=1.2) return 4.8; return 2.4;} function simplicityScore(c){return Math.max(0,10-((c.packages.length-1)*3))*(state.simplicity/10);}
  function summarize(c){const cov=coverageFor(c);const coveragePct=Math.round(cov.pct);const allIn=((coveragePct/100)*.52+(priceScore(c.price)/10)*.16+(featureFit(c)/10)*.12+(deviceFit(c)/10)*.10+(simplicityScore(c)/10)*.10)*100; return {coveragePct,allIn,classification:classify(cov.per)};}
  function renderList(items){return items.length?items.map(x=>`<li>${x}</li>`).join(''):'<li>Keine</li>';}
  function reason(slot){if(slot==='Meiste passende Spiele') return 'Diese Kombination deckt deine Auswahl am stärksten ab und stellt Reichweite über Einfachheit.'; if(slot==='Bester Gesamtmix') return 'Diese Option trifft die beste Balance aus Passung, Preis, Geräte-Fit und Einfachheit.'; return 'Das günstigste Setup mit noch ausreichender Abdeckung – ideal für ein knappes Budget.';}
  function renderResults(){const candidates=buildCandidates().filter(c=>c.price<=state.budget||c.price===0).map(c=>Object.assign(c,summarize(c))).sort((a,b)=>b.coveragePct-a.coveragePct||b.allIn-a.allIn);const first=candidates[0]||null;const allIn=[...candidates].sort((a,b)=>b.allIn-a.allIn||b.coveragePct-a.coveragePct)[0]||null;const cheap=[...candidates].filter(c=>c.coveragePct>=45).sort((a,b)=>a.price-b.price||b.coveragePct-a.coveragePct)[0]||null;const chosen=[]; if(first) chosen.push({slot:'Meiste passende Spiele',item:first}); if(allIn && !chosen.find(x=>x.item.label===allIn.label)) chosen.push({slot:'Bester Gesamtmix',item:allIn}); if(cheap && !chosen.find(x=>x.item.label===cheap.label)) chosen.push({slot:'Günstigste sinnvolle Option',item:cheap}); while(chosen.length<3 && candidates.length){const f=candidates.find(x=>!chosen.find(c=>c.item.label===x.label)); if(!f) break; chosen.push({slot:'Alternative',item:f});} resultsGrid.innerHTML=''; if(!chosen.length){resultsGrid.innerHTML='<div class="card" style="grid-column:1/-1;text-align:center;padding:40px"><h3>Keine passenden Ergebnisse</h3><p>Versuche dein Budget zu erhöhen oder die maximale Abo-Anzahl anzupassen.</p></div>';return;} chosen.slice(0,3).forEach(({slot,item},i)=>{const card=document.createElement('article'); card.className='result-card'; card.innerHTML=`<div class="result-top"><div><span class="slot">${slot}</span><h4>${item.label}</h4><div class="result-meta">CHF ${item.price.toFixed(2)} / Monat · ${state.contract==='flex'?'monatlich kündbar':'12 Monate'}</div></div><div class="score">${item.coveragePct}%</div></div><div class="badges"><span class="badge">${item.packages.length} Abo${item.packages.length>1?'s':''}</span><span class="badge">All in ${item.allIn.toFixed(0)}%</span><span class="badge">Stand ${DATA.last_verified}</span></div><div><b>Enthalten</b><ul class="list">${renderList(item.classification.full)}</ul></div><div><b>Teilweise</b><ul class="list">${renderList(item.classification.partial)}</ul></div><div><b>Nicht enthalten</b><ul class="list">${renderList(item.classification.none)}</ul></div><p>${reason(slot)}</p>`; resultsGrid.appendChild(card); setTimeout(()=>card.classList.add('in'),120+i*120);}); const oldRestart=qs('#restartWrap');if(oldRestart)oldRestart.remove();const restartWrap=document.createElement('div');restartWrap.id='restartWrap';restartWrap.style.cssText='text-align:center;margin-top:28px';restartWrap.innerHTML='<button type="button" class="btn ghost">Neue Analyse starten</button>';resultsStage.appendChild(restartWrap);restartWrap.querySelector('button').addEventListener('click',()=>{Object.assign(state,{selectedSports:[],selectedEvents:[],must:{},features:[],budget:40,contract:'flex',subs:2,devices:[],simplicity:7});budgetRange.value=40;budgetPill.textContent='CHF 40';simpRange.value=7;simpPill.textContent='7 von 10';renderSports();renderDynamicSteps();renderFeatureChips();renderDeviceChips();renderContractChoices();renderSubsChoices();updatePreview();showStep('sports');resultsStage.classList.remove('visible');document.getElementById('survey')?.scrollIntoView({behavior:'smooth',block:'start'});});}
  function initUi(){
    renderSports(); renderDynamicSteps(); renderFeatureChips(); renderDeviceChips(); renderContractChoices(); renderSubsChoices(); updatePreview(); showStep('sports');
    budgetRange.addEventListener('input',()=>{state.budget=Number(budgetRange.value); budgetPill.textContent=`CHF ${state.budget}`; updatePreview(); resultsStage.classList.remove('visible');});
    simpRange.addEventListener('input',()=>{state.simplicity=Number(simpRange.value); simpPill.textContent=`${state.simplicity} von 10`; resultsStage.classList.remove('visible');});
    flow.addEventListener('click',e=>{const next=e.target.closest('[data-next]'); const back=e.target.closest('[data-back]'); if(next) goNext(); if(back) goBack();});
    const heroStartTop = document.getElementById('heroStartTop');
    if(heroStartTop){
      heroStartTop.addEventListener('click',()=>{
        document.getElementById('survey')?.scrollIntoView({behavior:'smooth',block:'start'});
        document.body.classList.remove('menu-open');
      });
    }
    const goSurveyHero=document.getElementById('goSurveyHero');if(goSurveyHero){goSurveyHero.addEventListener('click',(e)=>{e.preventDefault();document.getElementById('survey')?.scrollIntoView({behavior:'smooth',block:'start'});});}
    qs('#themeToggle').addEventListener('click',()=>document.body.classList.toggle('light'));
    
    const topbarEl = document.getElementById('topbar');
    const navOpenBtn = document.getElementById('navOpenBtn');
    const navBackdrop = document.getElementById('navBackdrop');
    if(navOpenBtn && topbarEl){
      navOpenBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.body.classList.toggle('menu-open');
      });
      if(navBackdrop){
        navBackdrop.addEventListener('click', () => document.body.classList.remove('menu-open'));
      }
      document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') document.body.classList.remove('menu-open');
      });
      document.addEventListener('click', (e) => {
        if(document.body.classList.contains('menu-open') && !topbarEl.contains(e.target) && !navOpenBtn.contains(e.target)){
          document.body.classList.remove('menu-open');
        }
      });
    }

    const compareGroup=qs('#compareGroup');
    const compareToggle=qs('#compareToggle');
    if(compareGroup && compareToggle){
      compareToggle.addEventListener('click',(e)=>{
        e.stopPropagation();
        compareGroup.classList.toggle('open');
        compareToggle.setAttribute('aria-expanded', compareGroup.classList.contains('open') ? 'true' : 'false');
      });
      document.addEventListener('click',e=>{if(!compareGroup.contains(e.target)) compareGroup.classList.remove('open');});
    }
    const modal=qs('#legalModal');
    const closeLegal=qs('#closeLegal');
    if(modal){
      qsa('[data-legal-open]').forEach(el=>el.addEventListener('click',e=>{
        e.preventDefault();
        modal.classList.add('open');
        modal.setAttribute('aria-hidden','false');
        if(compareGroup) compareGroup.classList.remove('open');
      }));
      if(closeLegal){
        closeLegal.addEventListener('click',()=>{
          modal.classList.remove('open');
          modal.setAttribute('aria-hidden','true');
        });
      }
      modal.addEventListener('click',e=>{
        if(e.target===modal) {
          modal.classList.remove('open');
          modal.setAttribute('aria-hidden','true');
        }
      });
    }
    const obs=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('in');}),{threshold:.14}); qsa('.reveal').forEach(el=>obs.observe(el));
    window.addEventListener('scroll',()=>{const art=qs('#heroArt'); if(!art) return; const y=Math.min(window.scrollY,500); art.style.transform=`translateY(${y*0.05}px)`;},{passive:true});
  }
  function runSelfTests(){const lines=[];const assert=(c,m)=>{if(!c) throw new Error(m); lines.push(m);}; const snap=JSON.stringify(state); state.selectedSports=['football','hockey']; state.selectedEvents=['football_ucl','hockey_nl']; state.must={football_ucl:true}; cleanStateAfterSportsChange(); assert(state.selectedEvents.includes('football_ucl'),'football event retained'); renderDynamicSteps(); assert(qsa('[data-step^="events_"]',flow).length===2,'dynamic steps built'); showStep('events_football'); renderDynamicSteps(); assert(state.step==='events_football','active dynamic step preserved'); state.features=['live']; state.devices=['browser']; state.budget=100; const cands=buildCandidates(); assert(cands.length>0,'candidates generated'); renderResults(); assert(resultsGrid.children.length===3,'three result cards'); Object.assign(state, JSON.parse(snap)); renderSports(); renderDynamicSteps(); renderFeatureChips(); renderDeviceChips(); renderContractChoices(); renderSubsChoices(); updatePreview(); showStep('sports'); budgetPill.textContent=`CHF ${state.budget}`; simpPill.textContent=`${state.simplicity} von 10`; qs('#testBadge').textContent=`Self tests passed · ${lines.length} checks`; qs('#testBadge').style.color='var(--ok)';}
  initUi(); runSelfTests();
})();
