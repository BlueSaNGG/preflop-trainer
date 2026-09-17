import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/)[1];
new vm.Script(script);
const context=vm.createContext({});
vm.runInContext(script.match(/const BANK=[\s\S]*?\n\];/)[0]+script.match(/const RANGES=.*;/)[0]+';this.bank=BANK;this.ranges=RANGES;',context);
const {bank,ranges}=context;
const ranks='AKQJT98765432';
assert.equal(bank.length,73);
const ids=new Set();
for(const q of bank){
 assert.equal(q.hand.length,2);
 assert.notEqual(q.hand[0],q.hand[1]);
 q.hand.forEach(c=>assert.match(c,/^[AKQJT2-9][shdc]$/));
 assert.ok(q.actions.includes(q.correct));
 assert.ok(q.why && q.why_zh && q.facing && q.facing_zh);
 assert.ok(['chart','consensus'].includes(q.src));
 const key=[q.cat,q.pos,q.hand.join(''),q.stack,q.facing].join('|');
 assert.ok(!ids.has(key),`Duplicate: ${key}`); ids.add(key);
 if(q.cat==='squeeze'){
  const m=q.facing.match(/^(\w+) opens to [\d.]+bb, (\w+) calls$/);
  assert.ok(m, q.facing);
  const order=['UTG','MP','CO','BTN','SB','BB'];
  assert.ok(order.indexOf(m[1])<order.indexOf(m[2])&&order.indexOf(m[2])<order.indexOf(q.pos),`Impossible order: ${q.facing}, hero ${q.pos}`);
 }
 if(q.cat==='rfi'&&q.stack===100){
  const a=ranks.indexOf(q.hand[0][0]),b=ranks.indexOf(q.hand[1][0]);
  const suited=q.hand[0][1]===q.hand[1][1];
  const [row,col]=suited?[Math.min(a,b),Math.max(a,b)]:[Math.max(a,b),Math.min(a,b)];
  assert.equal(ranges[q.pos][row*13+col]==='1',q.correct==='Open',`Grid mismatch: ${key}`);
 }
}
for(const grid of Object.values(ranges))assert.match(grid,/^[01]{169}$/);
const oddsQ=bank.find(q=>q.pos==='BB'&&q.hand.join('')==='KcQd');
assert.ok(oddsQ.why.includes(((1.5/(4+1.5))*100).toFixed(1)+'%'));
for(const q of bank.filter(q=>q.cat==='vs3bet'&&q.pos==='CO'&&['AsQs','TsTh','KcQc'].includes(q.hand.join('')))){
 assert.ok(q.why.includes('out of position against BTN'));
 assert.ok(q.why_zh.includes('没有位置'));
}
assert.ok(bank.find(q=>q.pos==='BB'&&q.hand.join('')==='KcJs').why.includes('KJo, not KJs'));
assert.ok(!html.includes('solver consensus'));
assert.ok(!html.includes('chart-verified'));
console.log('PASS: 73 questions; five 169-cell grids; opening answers, squeeze order, position, hand identity and pot-odds regressions.');

// Lightweight DOM adapter exercises application state; this is not visual QA.
function element(){
 const names=new Set();
 return {textContent:'',innerHTML:'',style:{},dataset:{},children:[],
  classList:{add:(...x)=>x.forEach(v=>names.add(v)),remove:(...x)=>x.forEach(v=>names.delete(v)),contains:x=>names.has(x),toggle:(x,on)=>on?names.add(x):names.delete(x)},
  addEventListener(type,fn){this[type]=fn;},appendChild(el){this.children.push(el);},
  getAttribute(){return null;}};
}
const nodes=new Map(),storage=new Map();
const get=id=>{if(!nodes.has(id))nodes.set(id,element());return nodes.get(id);};
const document={getElementById:get,documentElement:{},title:'',
 createElement:element,
 querySelector:()=>null,
 querySelectorAll(selector){
  if(selector==='.view')return ['v-setup','v-drill','v-sum'].map(get);
  if(selector==='.choice')return get('choices').children;
  return [];
 }};
const app=vm.createContext({document,navigator:{language:'en'},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},console});
vm.runInContext(script,app);
vm.runInContext(`
for(const language of ['en','zh']){
 LANG=language;
 for(const q of BANK){
  deck=[q];idx=0;right=0;streak=0;best=0;catStats={};sessionMisses=[];
  renderQ();
  if(!$('spotContext').textContent)throw Error('Missing scenario context');
  answer(q.correct,null);
  if(!locked||right!==1)throw Error('Correct answer not recorded');
  if(!$('feedback').innerHTML.includes('source-note'))throw Error('Missing source note');
  if($('nextBtn').textContent!==T('see_results'))throw Error('Short pool completion label');
 }
}
LANG='en';mode='bvb';drillLen=20;$('startBtn').click();
const total=deck.length;
for(let i=0;i<total;i++){answer(deck[idx].correct,null);$('nextBtn').click();}
if($('stAcc').textContent!=='100%'||$('stQ').textContent!==total)throw Error('Summary mismatch');
const historyBefore=JSON.stringify(getHist());setLang('zh');
if(JSON.stringify(getHist())!==historyBefore)throw Error('Language toggle double-counted history');
mode='rfi';drillLen=10;$('startBtn').click();
const wrong=deck[0].actions.find(a=>a!==deck[0].correct);answer(wrong,null);
setLang('en');
if(!locked||sessionMisses.length!==1)throw Error('Language toggle changed answer state');
`,app);
console.log('PASS: both languages across all questions; feedback, small-pool completion, summary and language-toggle state. Visual browser QA remains separate.');
