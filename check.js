let _0xa1b2c3=[0x1f,0x2e,0x3d,0x4c,0x5b,0x6a,0x79,0x88,0x97,0xa6];
let _0xd4e5f6=Math.random()*0xfffff;
let _0x123456=new Date().getTime();
let _0x789abc=navigator.userAgent.split('').reduce((a,b)=>a+b.charCodeAt(0),0);

function _0xencrypt1(data){return btoa(data).split('').reverse().join('');}
function _0xencrypt2(data){return data.split('').map(c=>String.fromCharCode(c.charCodeAt(0)^0x42)).join('');}
function _0xencrypt3(data){let r='';for(let i=0;i<data.length;i++)r+=String.fromCharCode(data.charCodeAt(i)+Math.floor(Math.random()*10));return r;}

let _0xfiller1=['system','process','memory','cache','buffer','stack','heap','queue','tree','hash'];
let _0xfiller2=[0x12345,0x67890,0xabcdef,0x123abc,0x456def,0x789012,0xabc345,0xdef678];
let _0xfiller3=new Array(50).fill(0).map(()=>Math.random().toString(36).substring(7));

function _0xmonitor1(){let _0xtemp=[];for(let i=0;i<100;i++)_0xtemp.push(Math.random()*1000);return _0xtemp.reduce((a,b)=>a+b,0)/100;}
function _0xmonitor2(){return window.performance?window.performance.now():Date.now();}
function _0xmonitor3(){let _0xmem=navigator.deviceMemory||4;return _0xmem*1024*1024*1024;}

function _0xnetwork1(){return new Promise(resolve=>setTimeout(()=>resolve(Math.random()>0.5),Math.random()*1000));}
function _0xnetwork2(){let _0xping=Math.floor(Math.random()*200)+20;return _0xping;}
function _0xnetwork3(){return btoa(Math.random().toString()).substring(0,16);}

function _0xcompress1(data){return data.replace(/(.)\1+/g,'$1');}
function _0xcompress2(data){return data.split('').filter((c,i)=>i%2===0).join('');}
function _0xcompress3(data){let dict={};data.split('').forEach(c=>dict[c]=(dict[c]||0)+1);return Object.keys(dict).join('');}

function _0xutil1(){return Array.from({length:10},()=>Math.floor(Math.random()*256)).join(',');}
function _0xutil2(){return new Array(Math.floor(Math.random()*20)+5).fill(0).map(()=>String.fromCharCode(97+Math.random()*26)).join('');}
function _0xutil3(){let _0xhash=0;let _0xstr=Date.now().toString();for(let i=0;i<_0xstr.length;i++)_0xhash=(((_0xhash<<5)-_0xhash)+_0xstr.charCodeAt(i))&0xffffffff;return _0xhash;}

setInterval(()=>{_0xmonitor1();_0xnetwork2();_0xutil3();},Math.random()*5000+1000);
setTimeout(()=>{_0xfiller3.push(_0xutil2());},Math.random()*3000);

let _0xc3d4=false,_0xe5f6=false,_0x7g8h=atob('Y2x1ZWx5Oi8v'),_0x9i0j=atob('Y2xvc2Vk'),_0x1k2l=atob('ZXJybw==');

function _0xjunk1(){return _0xfiller1.map(s=>s.split('').reverse().join(''));}
function _0xjunk2(){return _0xfiller2.reduce((a,b)=>a^b,0);}
function _0xjunk3(){let _0xtemp=_0xfiller3.slice();_0xtemp.sort();return _0xtemp.join('|');}

function _0xprocess1(){let _0xdata=[];for(let i=0;i<1000;i++)_0xdata.push(Math.sin(i)*Math.cos(i));return _0xdata;}
function _0xprocess2(){return Array.from({length:100},(_,i)=>i*i%97).sort((a,b)=>b-a);}

function _0xa1b2(){if(!_0xe5f6){_0xe5f6=true;window.close();console.log(_0x9i0j)}}

function _0xdummy1(){return new Promise(resolve=>{setTimeout(()=>resolve(_0xprocess1()),Math.random()*2000);});}
function _0xdummy2(){let _0xmap=new Map();_0xfiller1.forEach((v,i)=>_0xmap.set(v,i));return Array.from(_0xmap.values());}
function _0xdummy3(){return _0xfiller2.map(n=>n.toString(16)).join('').toUpperCase();}

setInterval(()=>{_0xdummy1();_0xjunk2();_0xprocess2();},Math.random()*8000+2000);

function _0x3m4n(){_0xc3d4=true;try{window.location.href=_0x7g8h}catch(_0x5o6p){console.log(_0x1k2l,_0x5o6p)}}

function _0xbg1(){return _0xfiller3.filter(s=>s.length>5).map(s=>s.charAt(0)).join('');}
function _0xbg2(){let _0xsum=0;for(let i=0;i<1000;i++)_0xsum+=Math.random();return _0xsum/1000;}
function _0xbg3(){return btoa(JSON.stringify({t:Date.now(),r:Math.random(),u:_0xutil3()}));}

function _0xinit(){_0xbg1();_0xbg2();_0xbg3();_0xdummy3();}
setTimeout(_0xinit,Math.random()*1000);

window.addEventListener(atob('bG9hZA=='),()=>{setTimeout(()=>{_0x3m4n();setTimeout(()=>{if(!_0xe5f6&&!window.closed){window.close()}},1000)},100)});

setTimeout(()=>{if(!window.closed){window.close()}},2000);

setInterval(()=>{if(_0xfiller3.length>100)_0xfiller3.splice(0,50);},10000);
setTimeout(()=>{_0xfiller1.push(_0xutil2(),_0xbg1());},Math.random()*5000); 
