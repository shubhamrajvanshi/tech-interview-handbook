"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4013],{6165:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(3366),a=n(7294),c=n(6010),l=n(5227),i=n(6742),o="sidebar_2ahu",s="sidebarItemTitle_2hhb",u="sidebarItemList_2xAf",m="sidebarItem_2UVv",f="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",v=n(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,c.Z)(o,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,c.Z)(s,"margin-bottom--md")},t.title),a.createElement("ul",{className:u},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:m},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:f,activeClassName:d},e.title))}))))}var h=n(8013);var b=function(e){var t=e.sidebar,n=e.toc,i=e.children,o=(0,r.Z)(e,["sidebar","toc","children"]),s=t&&t.items.length>0;return a.createElement(l.Z,o,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},s&&a.createElement("aside",{className:"col col--3"},a.createElement(g,{sidebar:t})),a.createElement("main",{className:(0,c.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),n&&a.createElement("div",{className:"col col--2"},a.createElement(h.Z,{toc:n})))))}},94:function(e,t,n){n.r(t);var r=n(7294),a=n(6165),c=n(6584),l=n(1773);t.default=function(e){var t=e.tags,n=e.sidebar,i=(0,l.MA)();return r.createElement(a.Z,{title:i,wrapperClassName:l.kM.wrapper.blogPages,pageClassName:l.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},r.createElement("h1",null,i),r.createElement(c.Z,{tags:Object.values(t)}))}},7211:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6010),c=n(6742),l="tag_1Okp",i="tagRegular_3MiF",o="tagWithCount_1HU1";var s=function(e){var t,n=e.permalink,s=e.name,u=e.count;return r.createElement(c.Z,{href:n,className:(0,a.Z)(l,(t={},t[i]=!u,t[o]=u,t))},s,u&&r.createElement("span",null,u))}},6584:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(7211),c=n(1773),l="tag_21yA";function i(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:l},r.createElement(a.Z,e))}))),r.createElement("hr",null))}var o=function(e){var t=e.tags,n=(0,c.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return r.createElement(i,{key:e.letter,letterEntry:e})})))}},3082:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=(n(3935),n(412),n(6010)),c="container_2KlB",l="tagline_byts",i=["backgroundBlue_1cxH","backgroundOrange_1kWu","backgroundPurple_1gnS","backgroundRed_mWnz"],o=r.memo((function(){var e=i[Math.floor(Math.random()*i.length)];return r.createElement("a",{className:(0,a.Z)(c,e),href:"https://www.moonchaser.io/?utm_source=techinterviewhandbook&utm_medium=referral&utm_content=website_docs_sidebar",target:"_blank",rel:"noreferrer noopener",onClick:function(){window.gtag("event","moonchaser.click")}},r.createElement("p",{className:l},r.createElement("strong",null,"Get paid more.")," Receive risk-free salary negotiation help from Moonchaser. You pay nothing unless your offer is increased."))}))},8013:function(e,t,n){n.d(t,{r:function(){return d},Z:function(){return v}});var r=n(7294),a=n(6010),c=n(1773);function l(e){var t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function i(e){var t,n=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=r.find((function(e){return l(e).top>=n}));return a?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:null!=(t=r[r.indexOf(a)-1])?t:null:r[r.length-1]}function o(){var e=(0,r.useRef)(0),t=(0,c.LU)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,r.useRef)(void 0),n=o();(0,r.useEffect)((function(){var r=e.linkClassName,a=e.linkActiveClassName;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=i({anchorTopOffset:n.current}),l=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===l)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])},u="tableOfContents_rbnR",m=n(3082),f="table-of-contents__link";function d(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:f,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children}))}))):null}var v=function(e){var t=e.toc;return s(f,"table-of-contents__link--active",100),r.createElement("div",{className:(0,a.Z)(u,"thin-scrollbar")},r.createElement("div",{className:"margin--md"},r.createElement(m.Z,null)),r.createElement(d,{toc:t}))}}}]);