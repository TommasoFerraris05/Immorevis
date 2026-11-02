#!/usr/bin/env python3
"""Configurazione SEO facoltativa. Uso: python configura-seo.py https://URL-REALE/percorso/"""
from pathlib import Path
from urllib.parse import urlparse
import sys,re,json,html
if len(sys.argv)!=2: raise SystemExit(__doc__)
base=sys.argv[1].rstrip('/')+'/'
u=urlparse(base)
if u.scheme!='https' or not u.netloc or u.query or u.fragment or u.username: raise SystemExit('Inserire un URL HTTPS pubblico senza query o frammenti.')
p=Path(__file__).resolve().parent
cfg=p/'assets/js/config.js'
s=cfg.read_text();s=re.sub(r"siteUrl:\s*(['\"]).*?\1",'siteUrl: '+json.dumps(base),s);cfg.write_text(s)
pages=['index','servizi','chi-siamo','realizzazioni','preventivo','contatti','privacy']
ld={'@context':'https://schema.org','@type':'GeneralContractor','name':'Immorevis Sagl','url':base,'email':'info@immorevis.ch','taxID':'CHE-433.299.730','address':{'@type':'PostalAddress','streetAddress':'Via Rivamonte 4','postalCode':'6572','addressLocality':'Quartino','addressRegion':'TI','addressCountry':'CH'}}
for file in p.glob('*.html'):
 text=file.read_text();text=re.sub(r"siteUrl:\s*(['\"]).*?\1",'siteUrl: '+json.dumps(base),text);text=re.sub(r'<!-- SEO START -->.*?<!-- SEO END -->','',text,flags=re.S)
 url=html.escape(base+file.name,quote=True)
 block=f'<!-- SEO START --><link rel="canonical" href="{url}"><meta property="og:url" content="{url}"><meta property="og:image" content="{html.escape(base,quote=True)}assets/img/cantieri/foto-1.webp"><script type="application/ld+json">{json.dumps(ld,ensure_ascii=False).replace("<", chr(92)+"u003c")}</script><!-- SEO END -->'
 file.write_text(text.replace('</head>',block+'</head>'))
(p/'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join('  <url><loc>'+html.escape(base+s+'.html')+'</loc></url>\n' for s in pages)+'</urlset>\n')
(p/'robots.txt').write_text('User-agent: *\nAllow: /\nSitemap: '+base+'sitemap.xml\n')
print('SEO configurata per',base)
