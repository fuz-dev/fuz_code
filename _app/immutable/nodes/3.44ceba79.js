import{r as et,n as ge,c as se,u as ne,g as ae,d as oe,h as Ze,j as ze,e as Ie}from"../chunks/scheduler.debe1a5d.js";import{d as A,S as ke,i as ve,g as k,s as P,m as S,h as v,j as w,f as u,c as B,C as tt,n as C,k as h,a as V,y as _,p as ie,t as M,b as fe,o as te,l as de,A as H,D as $e,e as je,r as _e,u as ue,v as he,w as pe}from"../chunks/index.d3075d72.js";import{p as xe}from"../chunks/stores.b06b4503.js";import{s as lt,f as Ae,e as me,L as st,p as nt,a as Se}from"../chunks/package.2b4c97f2.js";import{e as at}from"../chunks/singletons.4d5eb1f8.js";function re(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function ot(n,e){n.d(1),e.delete(n.key)}function rt(n,e,l,t,a,s,o,r,i,d,f,p){let c=n.length,b=s.length,E=c;const O={};for(;E--;)O[n[E].key]=E;const N=[],$=new Map,U=new Map,J=[];for(E=b;E--;){const g=p(a,s,E),j=l(g);let I=o.get(j);I?t&&J.push(()=>I.p(g,e)):(I=d(j,g),I.c()),$.set(j,N[E]=I),j in O&&U.set(j,Math.abs(E-O[j]))}const z=new Set,T=new Set;function K(g){A(g,1),g.m(r,f),o.set(g.key,g),f=g.first,b--}for(;c&&b;){const g=N[b-1],j=n[c-1],I=g.key,R=j.key;g===j?(f=g.first,c--,b--):$.has(R)?!o.has(I)||z.has(I)?K(g):T.has(R)?c--:U.get(I)>U.get(R)?(T.add(I),K(g)):(z.add(R),c--):(i(j,o),c--)}for(;c--;){const g=n[c];$.has(g.key)||i(g,o)}for(;b;)K(N[b-1]);return et(J),N}function Ce(n,e,l){var r,i;const t=n.slice();t[22]=e[l],t[27]=l;const a=t[15](t[10],t[22]);t[23]=a;const s=(r=t[3])==null?void 0:r[t[27]];t[24]=s;const o=t[24]&&((i=t[5])==null?void 0:i[t[24]]);return t[25]=o,t}function Oe(n,e,l){const t=n.slice();return t[14]=e[l].name,t[28]=e[l].kind,t}const it=n=>({homepage_url:n&256}),Ne=n=>({homepage_url:n[8]}),ft=n=>({npm_url:n&4096}),Te=n=>({npm_url:n[12]}),ct=n=>({description:n&64}),Ve=n=>({description:n[6]}),_t=n=>({repo_name:n&2048}),Me=n=>({repo_name:n[11]});function ut(n){let e,l;return{c(){e=k("div"),l=S(n[11]),this.h()},l(t){e=v(t,"DIV",{class:!0});var a=w(e);l=C(a,n[11]),a.forEach(u),this.h()},h(){h(e,"class","repo_name svelte-15ke0tz")},m(t,a){V(t,e,a),_(e,l)},p(t,a){a&2048&&te(l,t[11])},d(t){t&&u(e)}}}function Le(n){let e;const l=n[21].description,t=se(l,n,n[20],Ve),a=t||ht(n);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,o){a&&a.m(s,o),e=!0},p(s,o){t?t.p&&(!e||o&1048640)&&ne(t,l,s,s[20],e?oe(l,s[20],o,ct):ae(s[20]),Ve):a&&a.p&&(!e||o&64)&&a.p(s,e?o:-1)},i(s){e||(A(a,s),e=!0)},o(s){M(a,s),e=!1},d(s){a&&a.d(s)}}}function ht(n){let e,l;return{c(){e=k("blockquote"),l=S(n[6]),this.h()},l(t){e=v(t,"BLOCKQUOTE",{class:!0});var a=w(e);l=C(a,n[6]),a.forEach(u),this.h()},h(){h(e,"class","spaced")},m(t,a){V(t,e,a),_(e,l)},p(t,a){a&64&&te(l,t[6])},d(t){t&&u(e)}}}function We(n){let e;const l=n[21].npm_url,t=se(l,n,n[20],Te),a=t||pt(n);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,o){a&&a.m(s,o),e=!0},p(s,o){t?t.p&&(!e||o&1052672)&&ne(t,l,s,s[20],e?oe(l,s[20],o,ft):ae(s[20]),Te):a&&a.p&&(!e||o&16384)&&a.p(s,e?o:-1)},i(s){e||(A(a,s),e=!0)},o(s){M(a,s),e=!1},d(s){a&&a.d(s)}}}function pt(n){let e,l,t;return{c(){e=k("blockquote"),l=S("npm i -D "),t=S(n[14]),this.h()},l(a){e=v(a,"BLOCKQUOTE",{class:!0});var s=w(e);l=C(s,"npm i -D "),t=C(s,n[14]),s.forEach(u),this.h()},h(){h(e,"class","npm_url spaced svelte-15ke0tz")},m(a,s){V(a,e,s),_(e,l),_(e,t)},p(a,s){s&16384&&te(t,a[14])},d(a){a&&u(e)}}}function qe(n){let e;const l=n[21].homepage_url,t=se(l,n,n[20],Ne),a=t||mt(n);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,o){a&&a.m(s,o),e=!0},p(s,o){t?t.p&&(!e||o&1048832)&&ne(t,l,s,s[20],e?oe(l,s[20],o,it):ae(s[20]),Ne):a&&a.p&&(!e||o&8448)&&a.p(s,e?o:-1)},i(s){e||(A(a,s),e=!0)},o(s){M(a,s),e=!1},d(s){a&&a.d(s)}}}function mt(n){let e,l,t,a,s,o,r,i=Ae(n[8])+"",d;return{c(){e=k("div"),l=S(`homepage:
					`),t=k("a"),a=k("img"),r=P(),d=S(i),this.h()},l(f){e=v(f,"DIV",{class:!0});var p=w(e);l=C(p,`homepage:
					`),t=v(p,"A",{class:!0,href:!0});var c=w(t);a=v(c,"IMG",{src:!0,alt:!0}),r=B(c),d=C(c,i),c.forEach(u),p.forEach(u),this.h()},h(){ze(a.src,s=me(n[8],"/")+"favicon.png")||h(a,"src",s),h(a,"alt",o="favicon to homepage at "+n[8]),de(a,"width","16px"),de(a,"height","16px"),de(a,"margin-right","var(--spacing_xs)"),h(t,"class","chip row svelte-15ke0tz"),h(t,"href",n[8]),H(t,"active",n[8]===n[13].url.href),h(e,"class","row svelte-15ke0tz")},m(f,p){V(f,e,p),_(e,l),_(e,t),_(t,a),_(t,r),_(t,d)},p(f,p){p&256&&!ze(a.src,s=me(f[8],"/")+"favicon.png")&&h(a,"src",s),p&256&&o!==(o="favicon to homepage at "+f[8])&&h(a,"alt",o),p&256&&i!==(i=Ae(f[8])+"")&&te(d,i),p&256&&h(t,"href",f[8]),p&8448&&H(t,"active",f[8]===f[13].url.href)},d(f){f&&u(e)}}}function Pe(n){let e,l,t,a;return{c(){e=k("div"),l=S("repo: "),t=k("a"),a=S(n[11]),this.h()},l(s){e=v(s,"DIV",{class:!0});var o=w(e);l=C(o,"repo: "),t=v(o,"A",{class:!0,title:!0,href:!0});var r=w(t);a=C(r,n[11]),r.forEach(u),o.forEach(u),this.h()},h(){h(t,"class","chip svelte-15ke0tz"),h(t,"title","repo"),h(t,"href",n[10]),h(e,"class","row svelte-15ke0tz")},m(s,o){V(s,e,o),_(e,l),_(e,t),_(t,a)},p(s,o){o&2048&&te(a,s[11]),o&1024&&h(t,"href",s[10])},d(s){s&&u(e)}}}function Be(n){let e,l,t,a;return{c(){e=k("div"),l=S("npm: "),t=k("a"),a=S(n[14]),this.h()},l(s){e=v(s,"DIV",{class:!0});var o=w(e);l=C(o,"npm: "),t=v(o,"A",{class:!0,title:!0,href:!0});var r=w(t);a=C(r,n[14]),r.forEach(u),o.forEach(u),this.h()},h(){h(t,"class","chip svelte-15ke0tz"),h(t,"title","npm"),h(t,"href",n[12]),h(e,"class","row svelte-15ke0tz")},m(s,o){V(s,e,o),_(e,l),_(e,t),_(t,a)},p(s,o){o&16384&&te(a,s[14]),o&4096&&h(t,"href",s[12])},d(s){s&&u(e)}}}function He(n){let e,l,t,a;return{c(){e=k("div"),l=S("version: "),t=k("a"),a=S(n[7]),this.h()},l(s){e=v(s,"DIV",{class:!0});var o=w(e);l=C(o,"version: "),t=v(o,"A",{class:!0,title:!0,href:!0});var r=w(t);a=C(r,n[7]),r.forEach(u),o.forEach(u),this.h()},h(){h(t,"class","chip svelte-15ke0tz"),h(t,"title","version"),h(t,"href",n[9]),h(e,"class","row svelte-15ke0tz")},m(s,o){V(s,e,o),_(e,l),_(e,t),_(t,a)},p(s,o){o&128&&te(a,s[7]),o&512&&h(t,"href",s[9])},d(s){s&&u(e)}}}function Ue(n){let e,l,t,a;return{c(){e=k("div"),l=S("license: "),t=k("a"),a=S(n[1]),this.h()},l(s){e=v(s,"DIV",{class:!0});var o=w(e);l=C(o,"license: "),t=v(o,"A",{class:!0,title:!0,href:!0});var r=w(t);a=C(r,n[1]),r.forEach(u),o.forEach(u),this.h()},h(){h(t,"class","chip svelte-15ke0tz"),h(t,"title","license"),h(t,"href",n[4]),h(e,"class","row svelte-15ke0tz")},m(s,o){V(s,e,o),_(e,l),_(e,t),_(t,a)},p(s,o){o&2&&te(a,s[1]),o&16&&h(t,"href",s[4])},d(s){s&&u(e)}}}function Re(n){let e,l,t,a,s;return{c(){e=k("section"),l=S(`data:
				`),t=k("a"),a=S("package.json"),this.h()},l(o){e=v(o,"SECTION",{class:!0});var r=w(e);l=C(r,`data:
				`),t=v(r,"A",{class:!0,title:!0,href:!0});var i=w(t);a=C(i,"package.json"),i.forEach(u),r.forEach(u),this.h()},h(){h(t,"class","chip svelte-15ke0tz"),h(t,"title","data"),h(t,"href",s=me(n[8],"/")+".well-known/package.json"),h(e,"class","row spaced svelte-15ke0tz")},m(o,r){V(o,e,r),_(e,l),_(e,t),_(t,a)},p(o,r){r&256&&s!==(s=me(o[8],"/")+".well-known/package.json")&&h(t,"href",s)},d(o){o&&u(e)}}}function Je(n){let e,l,t=[],a=new Map,s=re(n[2]);const o=r=>r[22];for(let r=0;r<s.length;r+=1){let i=Ce(n,s,r),d=o(i);a.set(d,t[r]=Fe(d,i))}return{c(){e=k("section"),l=k("menu");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=v(r,"SECTION",{class:!0});var i=w(e);l=v(i,"MENU",{});var d=w(l);for(let f=0;f<t.length;f+=1)t[f].l(d);d.forEach(u),i.forEach(u),this.h()},h(){h(e,"class","width_full spaced")},m(r,i){V(r,e,i),_(e,l);for(let d=0;d<t.length;d+=1)t[d]&&t[d].m(l,null)},p(r,i){i&33836&&(s=re(r[2]),t=rt(t,i,o,1,r,s,a,l,ot,Fe,null,Ce))},d(r){r&&u(e);for(let i=0;i<t.length;i+=1)t[i].d()}}}function Ke(n){let e,l=re(n[25].declarations),t=[];for(let a=0;a<l.length;a+=1)t[a]=Qe(Oe(n,l,a));return{c(){e=k("ul");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=v(a,"UL",{class:!0});var s=w(e);for(let o=0;o<t.length;o+=1)t[o].l(s);s.forEach(u),this.h()},h(){h(e,"class","declarations svelte-15ke0tz")},m(a,s){V(a,e,s);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null)},p(a,s){if(s&44){l=re(a[25].declarations);let o;for(o=0;o<l.length;o+=1){const r=Oe(a,l,o);t[o]?t[o].p(r,s):(t[o]=Qe(r),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=l.length}},d(a){a&&u(e),$e(t,a)}}}function Qe(n){let e,l=n[14]+"",t,a;return{c(){e=k("li"),t=S(l),a=P(),this.h()},l(s){e=v(s,"LI",{class:!0});var o=w(e);t=C(o,l),a=B(o),o.forEach(u),this.h()},h(){h(e,"class","declaration chip svelte-15ke0tz"),H(e,"variable_declaration",n[28]==="VariableDeclaration"),H(e,"type_declaration",n[28]==="InterfaceDeclaration"||n[28]==="TypeAliasDeclaration"),H(e,"class_declaration",n[28]==="ClassDeclaration")},m(s,o){V(s,e,o),_(e,t),_(e,a)},p(s,o){o&44&&l!==(l=s[14]+"")&&te(t,l),o&44&&H(e,"variable_declaration",s[28]==="VariableDeclaration"),o&44&&H(e,"type_declaration",s[28]==="InterfaceDeclaration"||s[28]==="TypeAliasDeclaration"),o&44&&H(e,"class_declaration",s[28]==="ClassDeclaration")},d(s){s&&u(e)}}}function Fe(n,e){let l,t,a,s=e[22]+"",o,r,i,d,f=e[25]&&Ke(e);return{key:n,first:null,c(){l=k("li"),t=k("div"),a=k("a"),o=S(s),i=P(),f&&f.c(),d=P(),this.h()},l(p){l=v(p,"LI",{class:!0});var c=w(l);t=v(c,"DIV",{});var b=w(t);a=v(b,"A",{class:!0,href:!0});var E=w(a);o=C(E,s),E.forEach(u),b.forEach(u),i=B(c),f&&f.l(c),d=B(c),c.forEach(u),this.h()},h(){h(a,"class","chip svelte-15ke0tz"),h(a,"href",r=e[23]),h(l,"class","module svelte-15ke0tz"),H(l,"ts",e[22].endsWith(".js")),H(l,"svelte",e[22].endsWith(".svelte")),H(l,"css",e[22].endsWith(".css")),H(l,"json",e[22].endsWith(".json")),this.first=l},m(p,c){V(p,l,c),_(l,t),_(t,a),_(a,o),_(l,i),f&&f.m(l,null),_(l,d)},p(p,c){e=p,c&4&&s!==(s=e[22]+"")&&te(o,s),c&1028&&r!==(r=e[23])&&h(a,"href",r),e[25]?f?f.p(e,c):(f=Ke(e),f.c(),f.m(l,d)):f&&(f.d(1),f=null),c&4&&H(l,"ts",e[22].endsWith(".js")),c&4&&H(l,"svelte",e[22].endsWith(".svelte")),c&4&&H(l,"css",e[22].endsWith(".css")),c&4&&H(l,"json",e[22].endsWith(".json"))},d(p){p&&u(l),f&&f.d()}}}function dt(n){let e,l,t,a,s,o,r,i,d,f,p,c,b,E,O,N,$="view raw data for <code>pkg: PackageMeta</code>",U,J,z,T=JSON.stringify(n[0],null,"	")+"",K,g,j;const I=n[21].repo_name,R=se(I,n,n[20],Me),Q=R||ut(n),le=n[21].default,x=se(le,n,n[20],null);let L=n[6]&&Le(n),W=n[12]&&We(n),q=n[8]&&qe(n),F=n[10]&&Pe(n),G=n[12]&&Be(n),Y=n[9]&&He(n),y=n[4]&&Ue(n),X=n[8]&&Re(n),Z=n[2]&&n[10]&&Je(n);return{c(){e=k("div"),l=k("header"),Q&&Q.c(),t=P(),x&&x.c(),a=P(),L&&L.c(),s=P(),W&&W.c(),o=P(),r=k("section"),q&&q.c(),i=P(),F&&F.c(),d=P(),G&&G.c(),f=P(),Y&&Y.c(),p=P(),y&&y.c(),c=P(),X&&X.c(),b=P(),E=k("section"),O=k("details"),N=k("summary"),N.innerHTML=$,U=P(),J=k("pre"),z=k("code"),K=S(T),g=P(),Z&&Z.c(),this.h()},l(m){e=v(m,"DIV",{class:!0});var D=w(e);l=v(D,"HEADER",{class:!0});var be=w(l);Q&&Q.l(be),be.forEach(u),t=B(D),x&&x.l(D),a=B(D),L&&L.l(D),s=B(D),W&&W.l(D),o=B(D),r=v(D,"SECTION",{class:!0});var ee=w(r);q&&q.l(ee),i=B(ee),F&&F.l(ee),d=B(ee),G&&G.l(ee),f=B(ee),Y&&Y.l(ee),p=B(ee),y&&y.l(ee),c=B(ee),X&&X.l(ee),ee.forEach(u),b=B(D),E=v(D,"SECTION",{class:!0});var Ee=w(E);O=v(Ee,"DETAILS",{});var ce=w(O);N=v(ce,"SUMMARY",{"data-svelte-h":!0}),tt(N)!=="svelte-1ntes9w"&&(N.innerHTML=$),U=B(ce),J=v(ce,"PRE",{class:!0});var we=w(J);z=v(we,"CODE",{});var De=w(z);K=C(De,T),De.forEach(u),we.forEach(u),ce.forEach(u),Ee.forEach(u),g=B(D),Z&&Z.l(D),D.forEach(u),this.h()},h(){h(l,"class","spaced"),h(r,"class","properties width_full spaced svelte-15ke0tz"),h(J,"class","svelte-15ke0tz"),h(E,"class","width_full spaced"),h(e,"class","package_detail svelte-15ke0tz")},m(m,D){V(m,e,D),_(e,l),Q&&Q.m(l,null),_(e,t),x&&x.m(e,null),_(e,a),L&&L.m(e,null),_(e,s),W&&W.m(e,null),_(e,o),_(e,r),q&&q.m(r,null),_(r,i),F&&F.m(r,null),_(r,d),G&&G.m(r,null),_(r,f),Y&&Y.m(r,null),_(r,p),y&&y.m(r,null),_(r,c),X&&X.m(r,null),_(e,b),_(e,E),_(E,O),_(O,N),_(O,U),_(O,J),_(J,z),_(z,K),_(e,g),Z&&Z.m(e,null),j=!0},p(m,[D]){R?R.p&&(!j||D&1050624)&&ne(R,I,m,m[20],j?oe(I,m[20],D,_t):ae(m[20]),Me):Q&&Q.p&&(!j||D&2048)&&Q.p(m,j?D:-1),x&&x.p&&(!j||D&1048576)&&ne(x,le,m,m[20],j?oe(le,m[20],D,null):ae(m[20]),null),m[6]?L?(L.p(m,D),D&64&&A(L,1)):(L=Le(m),L.c(),A(L,1),L.m(e,s)):L&&(ie(),M(L,1,1,()=>{L=null}),fe()),m[12]?W?(W.p(m,D),D&4096&&A(W,1)):(W=We(m),W.c(),A(W,1),W.m(e,o)):W&&(ie(),M(W,1,1,()=>{W=null}),fe()),m[8]?q?(q.p(m,D),D&256&&A(q,1)):(q=qe(m),q.c(),A(q,1),q.m(r,i)):q&&(ie(),M(q,1,1,()=>{q=null}),fe()),m[10]?F?F.p(m,D):(F=Pe(m),F.c(),F.m(r,d)):F&&(F.d(1),F=null),m[12]?G?G.p(m,D):(G=Be(m),G.c(),G.m(r,f)):G&&(G.d(1),G=null),m[9]?Y?Y.p(m,D):(Y=He(m),Y.c(),Y.m(r,p)):Y&&(Y.d(1),Y=null),m[4]?y?y.p(m,D):(y=Ue(m),y.c(),y.m(r,c)):y&&(y.d(1),y=null),m[8]?X?X.p(m,D):(X=Re(m),X.c(),X.m(r,null)):X&&(X.d(1),X=null),(!j||D&1)&&T!==(T=JSON.stringify(m[0],null,"	")+"")&&te(K,T),m[2]&&m[10]?Z?Z.p(m,D):(Z=Je(m),Z.c(),Z.m(e,null)):Z&&(Z.d(1),Z=null)},i(m){j||(A(Q,m),A(x,m),A(L),A(W),A(q),j=!0)},o(m){M(Q,m),M(x,m),M(L),M(W),M(q),j=!1},d(m){m&&u(e),Q&&Q.d(m),x&&x.d(m),L&&L.d(),W&&W.d(),q&&q.d(),F&&F.d(),G&&G.d(),Y&&Y.d(),y&&y.d(),X&&X.d(),Z&&Z.d()}}}function gt(n,e,l){let t,a,s,o,r,i,d,f,p,c,b,E,O,N,$,U,J,z;Ze(n,xe,I=>l(13,z=I));let{$$slots:T={},$$scope:K}=e,{pkg:g}=e;const j=(I,R)=>I+"/blob/main/src/lib/"+(R.endsWith(".js")?R.slice(0,-3)+".ts":R);return n.$$set=I=>{"pkg"in I&&l(0,g=I.pkg),"$$scope"in I&&l(20,K=I.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&l(19,{package_json:t,npm_url:a,repo_name:s,repo_url:o,changelog_url:r,homepage_url:i}=g,t,(l(12,a),l(0,g)),(l(11,s),l(0,g)),(l(10,o),l(0,g)),(l(9,r),l(0,g)),(l(8,i),l(0,g))),n.$$.dirty&524288&&l(14,{name:d,version:f,description:p,license:c,repository:b,exports:E,modules:O}=t,d,(l(7,f),l(19,t),l(0,g)),(l(6,p),l(19,t),l(0,g)),(l(1,c),l(19,t),l(0,g)),(l(18,b),l(19,t),l(0,g)),(l(16,E),l(19,t),l(0,g)),(l(5,O),l(19,t),l(0,g))),n.$$.dirty&262144&&l(17,N=b?typeof b=="string"?b:b.url:null),n.$$.dirty&131074&&l(4,$=c&&N?N+"/blob/main/LICENSE":null),n.$$.dirty&65536&&l(3,U=E&&Object.keys(E)),n.$$.dirty&65536&&l(2,J=E?Object.keys(E).map(I=>{const R=lt(I,"./");return R==="."?"index.js":R}):null)},[g,c,J,U,$,O,p,f,i,r,o,s,a,z,d,j,E,N,b,t,K,T]}class kt extends ke{constructor(e){super(),ve(this,e,gt,dt,ge,{pkg:0})}}const vt=n=>n.split("/").filter(e=>e&&e!=="."&&e!==".."),bt=n=>{const e=[],l=vt(n);l.length&&e.push({type:"separator",path:"/"});let t="";for(let a=0;a<l.length;a++){const s=l[a];t+="/"+s,e.push({type:"piece",name:s,path:t}),a!==l.length-1&&e.push({type:"separator",path:t})}return e};function Ge(n,e,l){const t=n.slice();return t[11]=e[l],t}const Et=n=>({}),Ye=n=>({});function wt(n){let e;return{c(){e=S("•")},l(l){e=C(l,"•")},m(l,t){V(l,e,t)},d(l){l&&u(e)}}}function Dt(n){let e,l;const t=n[10].separator,a=se(t,n,n[9],Ye),s=a||It();return{c(){e=k("span"),s&&s.c(),this.h()},l(o){e=v(o,"SPAN",{class:!0});var r=w(e);s&&s.l(r),r.forEach(u),this.h()},h(){h(e,"class","separator svelte-g6c005")},m(o,r){V(o,e,r),s&&s.m(e,null),l=!0},p(o,r){a&&a.p&&(!l||r&512)&&ne(a,t,o,o[9],l?oe(t,o[9],r,Et):ae(o[9]),Ye)},i(o){l||(A(s,o),l=!0)},o(o){M(s,o),l=!1},d(o){o&&u(e),s&&s.d(o)}}}function zt(n){let e,l=n[11].name+"",t,a;return{c(){e=k("a"),t=S(l),this.h()},l(s){e=v(s,"A",{href:!0,class:!0});var o=w(e);t=C(o,l),o.forEach(u),this.h()},h(){h(e,"href",a=n[0]+n[11].path),h(e,"class","svelte-g6c005"),H(e,"selected",n[11].path===n[3])},m(s,o){V(s,e,o),_(e,t)},p(s,o){o&4&&l!==(l=s[11].name+"")&&te(t,l),o&5&&a!==(a=s[0]+s[11].path)&&h(e,"href",a),o&12&&H(e,"selected",s[11].path===s[3])},i:Ie,o:Ie,d(s){s&&u(e)}}}function It(n){let e;return{c(){e=S("/")},l(l){e=C(l,"/")},m(l,t){V(l,e,t)},d(l){l&&u(e)}}}function ye(n){let e,l,t,a;const s=[zt,Dt],o=[];function r(i,d){return i[11].type==="piece"?0:1}return e=r(n),l=o[e]=s[e](n),{c(){l.c(),t=je()},l(i){l.l(i),t=je()},m(i,d){o[e].m(i,d),V(i,t,d),a=!0},p(i,d){let f=e;e=r(i),e===f?o[e].p(i,d):(ie(),M(o[f],1,1,()=>{o[f]=null}),fe(),l=o[e],l?l.p(i,d):(l=o[e]=s[e](i),l.c()),A(l,1),l.m(t.parentNode,t))},i(i){a||(A(l),a=!0)},o(i){M(l),a=!1},d(i){i&&u(t),o[e].d(i)}}}function jt(n){let e,l,t;const a=n[10].default,s=se(a,n,n[9],null),o=s||wt();let r=re(n[2]),i=[];for(let f=0;f<r.length;f+=1)i[f]=ye(Ge(n,r,f));const d=f=>M(i[f],1,1,()=>{i[f]=null});return{c(){e=k("div"),l=k("a"),o&&o.c();for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=v(f,"DIV",{class:!0});var p=w(e);l=v(p,"A",{href:!0,class:!0});var c=w(l);o&&o.l(c),c.forEach(u);for(let b=0;b<i.length;b+=1)i[b].l(p);p.forEach(u),this.h()},h(){h(l,"href",n[1]),h(l,"class","svelte-g6c005"),H(l,"selected",n[1]===n[3]),h(e,"class","breadcrumb svelte-g6c005")},m(f,p){V(f,e,p),_(e,l),o&&o.m(l,null);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);t=!0},p(f,[p]){if(s&&s.p&&(!t||p&512)&&ne(s,a,f,f[9],t?oe(a,f[9],p,null):ae(f[9]),null),(!t||p&2)&&h(l,"href",f[1]),(!t||p&10)&&H(l,"selected",f[1]===f[3]),p&525){r=re(f[2]);let c;for(c=0;c<r.length;c+=1){const b=Ge(f,r,c);i[c]?(i[c].p(b,p),A(i[c],1)):(i[c]=ye(b),i[c].c(),A(i[c],1),i[c].m(e,null))}for(ie(),c=r.length;c<i.length;c+=1)d(c);fe()}},i(f){if(!t){A(o,f);for(let p=0;p<r.length;p+=1)A(i[p]);t=!0}},o(f){M(o,f),i=i.filter(Boolean);for(let p=0;p<i.length;p+=1)M(i[p]);t=!1},d(f){f&&u(e),o&&o.d(f),$e(i,f)}}}function At(n,e,l){let t,a,s,o,r,i;Ze(n,xe,E=>l(8,i=E));let{$$slots:d={},$$scope:f}=e,{path:p=void 0}=e,{selected_path:c=void 0}=e,{base_path:b=void 0}=e;return n.$$set=E=>{"path"in E&&l(4,p=E.path),"selected_path"in E&&l(5,c=E.selected_path),"base_path"in E&&l(6,b=E.base_path),"$$scope"in E&&l(9,f=E.$$scope)},n.$$.update=()=>{n.$$.dirty&272&&l(7,t=p??i.url.pathname),n.$$.dirty&160&&l(3,a=c===null?null:c===void 0?t:c),n.$$.dirty&64&&l(0,s=b??at),n.$$.dirty&128&&l(2,o=bt(t)),n.$$.dirty&1&&l(1,r=s||"/")},[s,r,o,a,p,c,b,t,i,f,d]}class Xe extends ke{constructor(e){super(),ve(this,e,At,jt,ge,{path:4,selected_path:5,base_path:6})}}function St(n){let e;return{c(){e=S("🧶")},l(l){e=C(l,"🧶")},m(l,t){V(l,e,t)},d(l){l&&u(e)}}}function Ct(n){let e;return{c(){e=S("🧶")},l(l){e=C(l,"🧶")},m(l,t){V(l,e,t)},d(l){l&&u(e)}}}function Ot(n){let e,l,t,a,s,o=n[0].repo_name+"",r,i,d,f,p,c,b,E,O,N,$,U,J;return d=new Xe({props:{$$slots:{default:[St]},$$scope:{ctx:n}}}),b=new kt({props:{pkg:n[0]}}),N=new st({props:{pkg:n[0]}}),U=new Xe({props:{$$slots:{default:[Ct]},$$scope:{ctx:n}}}),{c(){e=k("main"),l=k("div"),t=k("section"),a=k("header"),s=k("h1"),r=S(o),i=P(),_e(d.$$.fragment),f=P(),p=k("section"),c=k("div"),_e(b.$$.fragment),E=P(),O=k("section"),_e(N.$$.fragment),$=P(),_e(U.$$.fragment),this.h()},l(z){e=v(z,"MAIN",{class:!0});var T=w(e);l=v(T,"DIV",{class:!0});var K=w(l);t=v(K,"SECTION",{class:!0});var g=w(t);a=v(g,"HEADER",{});var j=w(a);s=v(j,"H1",{class:!0});var I=w(s);r=C(I,o),I.forEach(u),j.forEach(u),i=B(g),ue(d.$$.fragment,g),g.forEach(u),K.forEach(u),f=B(T),p=v(T,"SECTION",{class:!0});var R=w(p);c=v(R,"DIV",{class:!0});var Q=w(c);ue(b.$$.fragment,Q),Q.forEach(u),R.forEach(u),E=B(T),O=v(T,"SECTION",{class:!0});var le=w(O);ue(N.$$.fragment,le),$=B(le),ue(U.$$.fragment,le),le.forEach(u),T.forEach(u),this.h()},h(){h(s,"class","svelte-1tz8tj3"),h(t,"class","svelte-1tz8tj3"),h(l,"class","prose"),h(c,"class","panel padded_md width_md"),h(p,"class","box width_full spaced svelte-1tz8tj3"),h(O,"class","box svelte-1tz8tj3"),h(e,"class","width_md svelte-1tz8tj3")},m(z,T){V(z,e,T),_(e,l),_(l,t),_(t,a),_(a,s),_(s,r),_(t,i),he(d,t,null),_(e,f),_(e,p),_(p,c),he(b,c,null),_(e,E),_(e,O),he(N,O,null),_(O,$),he(U,O,null),J=!0},p(z,[T]){const K={};T&2&&(K.$$scope={dirty:T,ctx:z}),d.$set(K);const g={};T&2&&(g.$$scope={dirty:T,ctx:z}),U.$set(g)},i(z){J||(A(d.$$.fragment,z),A(b.$$.fragment,z),A(N.$$.fragment,z),A(U.$$.fragment,z),J=!0)},o(z){M(d.$$.fragment,z),M(b.$$.fragment,z),M(N.$$.fragment,z),M(U.$$.fragment,z),J=!1},d(z){z&&u(e),pe(d),pe(b),pe(N),pe(U)}}}function Nt(n){return[nt(Se.homepage,Se)]}class qt extends ke{constructor(e){super(),ve(this,e,Nt,Ot,ge,{})}}export{qt as component};
