'use strict';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menu?.addEventListener('click', () => {const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
document.addEventListener('keydown', e => {if(e.key==='Escape' && nav?.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});
document.querySelector('#year').textContent=new Date().getFullYear();
const cfg=window.IMMOREVIS_CONFIG;
if(cfg.phoneConfirmed) document.querySelectorAll('.phone').forEach(a=>{a.hidden=false;a.textContent=cfg.phone;a.href='tel:'+cfg.phone.replace(/[^+0-9]/g,'');});
if(!document.querySelector('link[rel=canonical]') && cfg.siteUrl && /^https:\/\//.test(cfg.siteUrl)){
 const base=cfg.siteUrl.replace(/\/?$/,'/');const file=location.pathname.split('/').pop()||'index.html';const url=base+file;
 const canonical=document.createElement('link');canonical.rel='canonical';canonical.href=url;document.head.append(canonical);
 for(const [property,content] of [['og:url',url],['og:image',base+'assets/img/cantieri/foto-1.webp']]){const meta=document.createElement('meta');meta.setAttribute('property',property);meta.content=content;document.head.append(meta);}
 const ld=document.createElement('script');ld.type='application/ld+json';ld.textContent=JSON.stringify({'@context':'https://schema.org','@type':'GeneralContractor',name:'Immorevis Sagl',url:base,email:cfg.email,taxID:'CHE-433.299.730',address:{'@type':'PostalAddress',streetAddress:'Via Rivamonte 4',postalCode:'6572',addressLocality:'Quartino',addressRegion:'TI',addressCountry:'CH'}});document.head.append(ld);
}
const receipt=document.querySelector('#receipt');
if(receipt){try{const t=Number(sessionStorage.getItem('immorevis_sent'));if(t && Date.now()-t<300000){receipt.innerHTML='<h2>Richiesta trasmessa.</h2><p>Il servizio di invio ha accettato la tua richiesta. Grazie per averci descritto il progetto.</p>';sessionStorage.removeItem('immorevis_sent');}}catch{}}
