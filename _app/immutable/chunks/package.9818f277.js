import{n as M,i as Q,e as S,c as q,u as D,g as F,d as G}from"./scheduler.debe1a5d.js";import{S as K,i as N,E as T,F as A,j as m,f as p,k as c,G as V,l as y,a as j,y as d,g as b,s as W,h as C,c as B,d as k,t as w,r as U,u as Z,v as J,w as P,m as X,n as Y,o as x}from"./index.d3075d72.js";function $(t,e){const s={},i={},r={$$scope:1};let n=t.length;for(;n--;){const l=t[n],a=e[n];if(a){for(const o in l)o in a||(i[o]=1);for(const o in a)r[o]||(s[o]=a[o],r[o]=1);t[n]=a}else for(const o in l)r[o]=1}for(const l in i)l in s||(s[l]=void 0);return s}const z=(t,e)=>!e||!t.startsWith(e)?t:t.substring(e.length),I=(t,e)=>!e||!t.endsWith(e)?t:t.substring(0,t.length-e.length),fe=(t,e)=>t.endsWith(e)?t:t+e,ce=(t,e)=>{const{name:s}=e,r=(g=>g?I(z(I(g,".git"),"git+"),"/"):null)(e.repository?typeof e.repository=="string"?e.repository:e.repository.url:null),n=e.homepage??null,l=!e.private&&!!e.exports&&e.version!=="0.0.1",a=l?"https://www.npmjs.com/package/"+e.name:null,o=l&&r?r+"/blob/main/CHANGELOG.md":null,v=ee(s),h=r?z(r,"https://github.com/").split("/")[0]:null;return{url:t,package_json:e,name:s,repo_name:v,repo_url:r,owner_name:h,homepage_url:n,npm_url:a,changelog_url:o,published:l}},ee=t=>t[0]==="@"?t.split("/")[1]:t,O=t=>z(new URL(t).host,"www.");function te(t){let e,s,i=[{xmlns:"http://www.w3.org/2000/svg"},{"aria-label":t[2]},{viewBox:"0 0 1024 1024"},{fill:"none"},t[3]],r={};for(let n=0;n<i.length;n+=1)r=Q(r,i[n]);return{c(){e=T("svg"),s=T("path"),this.h()},l(n){e=A(n,"svg",{xmlns:!0,"aria-label":!0,viewBox:!0,fill:!0});var l=m(e);s=A(l,"path",{fill:!0,"fill-rule":!0,"clip-rule":!0,d:!0,transform:!0}),m(s).forEach(p),l.forEach(p),this.h()},h(){c(s,"fill",t[1]),c(s,"fill-rule","evenodd"),c(s,"clip-rule","evenodd"),c(s,"d",`M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02
		15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32
		12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12
		11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33
		11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74
		5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95
		7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31
		12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12
		7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01
		13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71
		14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z`),c(s,"transform","scale(64)"),V(e,r),y(e,"width",t[0]),y(e,"height",t[0])},m(n,l){j(n,e,l),d(e,s)},p(n,[l]){l&2&&c(s,"fill",n[1]),V(e,r=$(i,[{xmlns:"http://www.w3.org/2000/svg"},l&4&&{"aria-label":n[2]},{viewBox:"0 0 1024 1024"},{fill:"none"},l&8&&n[3]])),y(e,"width",n[0]),y(e,"height",n[0])},i:S,o:S,d(n){n&&p(e)}}}function se(t,e,s){let{size:i="var(--spacing_7, 64px)"}=e,{fill:r="var(--color, #000)"}=e,{label:n="GitHub icon"}=e,{attrs:l=void 0}=e;return t.$$set=a=>{"size"in a&&s(0,i=a.size),"fill"in a&&s(1,r=a.fill),"label"in a&&s(2,n=a.label),"attrs"in a&&s(3,l=a.attrs)},[i,r,n,l]}class le extends K{constructor(e){super(),N(this,e,se,te,M,{size:0,fill:1,label:2,attrs:3})}}const ne=t=>({}),R=t=>({});function ie(t){let e,s;return e=new le({}),{c(){U(e.$$.fragment)},l(i){Z(e.$$.fragment,i)},m(i,r){J(e,i,r),s=!0},i(i){s||(k(e.$$.fragment,i),s=!0)},o(i){w(e.$$.fragment,i),s=!1},d(i){P(e,i)}}}function H(t){let e,s,i=O(t[0])+"",r;return{c(){e=b("div"),s=b("a"),r=X(i),this.h()},l(n){e=C(n,"DIV",{class:!0});var l=m(e);s=C(l,"A",{href:!0,rel:!0});var a=m(s);r=Y(a,i),a.forEach(p),l.forEach(p),this.h()},h(){c(s,"href",t[0]),c(s,"rel","me"),c(e,"class","root_url svelte-1o3q16b")},m(n,l){j(n,e,l),d(e,s),d(s,r)},p(n,l){l&1&&i!==(i=O(n[0])+"")&&x(r,i),l&1&&c(s,"href",n[0])},d(n){n&&p(e)}}}function re(t){let e,s,i,r,n,l;const a=t[4].default,o=q(a,t,t[3],null),v=t[4].logo,h=q(v,t,t[3],R),g=h||ie();let f=t[0]&&H(t);return{c(){e=b("footer"),o&&o.c(),s=W(),i=b("div"),r=b("a"),g&&g.c(),n=W(),f&&f.c(),this.h()},l(u){e=C(u,"FOOTER",{class:!0});var _=m(e);o&&o.l(_),s=B(_),i=C(_,"DIV",{class:!0});var E=m(i);r=C(E,"A",{href:!0,rel:!0,class:!0});var L=m(r);g&&g.l(L),L.forEach(p),E.forEach(p),n=B(_),f&&f.l(_),_.forEach(p),this.h()},h(){c(r,"href",t[1]),c(r,"rel","me"),c(r,"class","svelte-1o3q16b"),c(i,"class","logo svelte-1o3q16b"),c(e,"class","panel padded_lg svelte-1o3q16b")},m(u,_){j(u,e,_),o&&o.m(e,null),d(e,s),d(e,i),d(i,r),g&&g.m(r,null),d(e,n),f&&f.m(e,null),l=!0},p(u,[_]){o&&o.p&&(!l||_&8)&&D(o,a,u,u[3],l?G(a,u[3],_,null):F(u[3]),null),h&&h.p&&(!l||_&8)&&D(h,v,u,u[3],l?G(v,u[3],_,ne):F(u[3]),R),(!l||_&2)&&c(r,"href",u[1]),u[0]?f?f.p(u,_):(f=H(u),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},i(u){l||(k(o,u),k(g,u),l=!0)},o(u){w(o,u),w(g,u),l=!1},d(u){u&&p(e),o&&o.d(u),g&&g.d(u),f&&f.d()}}}function oe(t,e,s){let i,{$$slots:r={},$$scope:n}=e,{pkg:l}=e,{root_url:a=null}=e;return t.$$set=o=>{"pkg"in o&&s(2,l=o.pkg),"root_url"in o&&s(0,a=o.root_url),"$$scope"in o&&s(3,n=o.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&s(1,{repo_url:i}=l,i)},[a,i,l,n,r]}class _e extends K{constructor(e){super(),N(this,e,oe,re,M,{pkg:2,root_url:0})}}const ge={name:"@fuz.dev/fuz_code",description:"syntax highlighting using prismjs for Svelte, SvelteKit, TypeScript, and Fuz",version:"0.4.0",license:"MIT",type:"module",homepage:"https://code.fuz.dev/",repository:"https://github.com/fuz-dev/fuz_code",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},engines:{node:">=20.7"},scripts:{start:"gro dev",dev:"gro dev",build:"gro build",test:"gro test",deploy:"gro deploy"},files:["dist"],devDependencies:{"@changesets/changelog-git":"^0.1.14","@feltjs/eslint-config":"^0.4.1","@fuz.dev/fuz":"^0.76.0","@fuz.dev/fuz_library":"^0.16.0","@grogarden/gro":"^0.97.0","@grogarden/util":"^0.15.2","@sveltejs/adapter-static":"^2.0.3","@sveltejs/kit":"^1.27.1","@sveltejs/package":"^2.2.2","@types/prismjs":"^1.26.2","@typescript-eslint/eslint-plugin":"^6.9.0","@typescript-eslint/parser":"^6.9.0",eslint:"^8.52.0","eslint-plugin-svelte":"^2.34.0",prettier:"^3.0.3","prettier-plugin-svelte":"^3.0.3","prism-svelte":"^0.5.0",prismjs:"^1.29.0",svelte:"^4.2.2","svelte-check":"^3.5.2",tslib:"^2.6.2",typescript:"^5.2.2",uvu:"^0.5.6"},eslintConfig:{root:!0,extends:"@feltjs"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},exports:{"./Code.svelte":{svelte:"./dist/Code.svelte",default:"./dist/Code.svelte",types:"./dist/Code.svelte.d.ts"},"./package.gen.js":{default:"./dist/package.gen.js",types:"./dist/package.gen.d.ts"},"./package.js":{default:"./dist/package.js",types:"./dist/package.d.ts"},"./prism.css":{default:"./dist/prism.css"},"./remove_prism_css_vite_plugin.js":{default:"./dist/remove_prism_css_vite_plugin.js",types:"./dist/remove_prism_css_vite_plugin.d.ts"}},modules:{"./package.gen.js":{path:"package.gen.ts",declarations:[]},"./package.js":{path:"package.ts",declarations:[{name:"package_json",kind:"VariableDeclaration"}]},"./remove_prism_css_vite_plugin.js":{path:"remove_prism_css_vite_plugin.ts",declarations:[{name:"remove_prism_css",kind:"VariableDeclaration"}]}}};export{_e as L,ge as a,fe as e,O as f,$ as g,ce as p,z as s};
