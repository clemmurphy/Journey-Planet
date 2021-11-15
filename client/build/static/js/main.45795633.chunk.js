(this["webpackJsonpjourney-planner"]=this["webpackJsonpjourney-planner"]||[]).push([[0],{159:function(e,t,n){},189:function(e,t){},191:function(e,t){},204:function(e,t){},206:function(e,t){},234:function(e,t){},235:function(e,t){},240:function(e,t){},242:function(e,t){},249:function(e,t){},268:function(e,t){},298:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(152),c=n.n(s),r=(n(159),n(6)),i=n(33),o=n.n(i),l=n(13),j=n(8),u=n.p+"static/media/planet.e81a55ef.svg",d=n(0),p=function(){var e=Object(j.f)();return Object(d.jsxs)("div",{id:"homeWrapper",children:[Object(d.jsx)("div",{className:"image-container",children:Object(d.jsx)("img",{src:u,alt:"planet with telescope"})}),Object(d.jsxs)("div",{className:"text-container",children:[Object(d.jsxs)("h1",{children:[Object(d.jsx)("i",{className:"fas fa-globe-europe"})," Journey Planet"]}),Object(d.jsx)("p",{children:"Sometimes traversing London can seem like a mission to Mars. Make your life simpler, quicker and hassle-free by planning your journeys ahead of time using real-time data and up-to-the-minute travel advice."}),Object(d.jsx)("p",{children:"Before you make your journey, planet."}),Object(d.jsxs)("button",{onClick:function(){e.push("/search")},children:["Plan Your Journey ",Object(d.jsx)("i",{className:"fas fa-chevron-right"})]})]})]})},b=function(e){var t=e.loggedIn,n=e.setLoggedIn,s=Object(j.f)();Object(a.useEffect)((function(){localStorage.token&&n(!0)}),[n]);return Object(d.jsxs)("nav",{id:"mainNavbar",children:[Object(d.jsx)("div",{className:"navbar-brand",children:Object(d.jsx)("h2",{children:Object(d.jsxs)(l.b,{to:"/",children:[Object(d.jsx)("i",{className:"fas fa-globe-europe"}),Object(d.jsx)("span",{className:"navbar-text",children:" Journey Planet"})]})})}),Object(d.jsx)("div",{className:"navbar-nav",children:Object(d.jsxs)("ul",{children:[t?Object(d.jsx)("li",{children:Object(d.jsxs)("a",{onClick:function(){localStorage.removeItem("token"),n(!1),s.push("/")},children:[Object(d.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(d.jsx)("span",{className:"navbar-text",children:" Logout"})]})}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{children:Object(d.jsxs)(l.b,{to:"/login",children:[Object(d.jsx)("i",{className:"fas fa-sign-in-alt"}),Object(d.jsx)("span",{className:"navbar-text",children:" Login"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)(l.b,{to:"/register",children:[Object(d.jsx)("i",{className:"fas fa-user-plus"}),Object(d.jsx)("span",{className:"navbar-text",children:" Register"})]})})]}),Object(d.jsx)("li",{children:Object(d.jsxs)(l.b,{to:"/search",children:[Object(d.jsx)("i",{className:"fas fa-map-signs"}),Object(d.jsx)("span",{className:"navbar-text",children:" New Journey"})]})})]})})]})},h=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{id:"footerWrapper",children:[Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/search",children:"New Search"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://github.com/clemmurphy",target:"_blank",rel:"noreferrer",children:"GitHub"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://linkedin.com/in/clemmurphydev",target:"_blank",rel:"noreferrer",children:"LinkedIn"})})]}),Object(d.jsx)("p",{children:"Made with \ud83d\ude80 by Clement Murphy"})]})})},O=n(4),x=n.n(O),m=n(11),f=n(55),g=n(25),v=n.n(g),y=function(e){var t=JSON.parse(e.path.lineString);return function(e){e.map((function(e){var t=e[0];return e[0]=e[1],e[1]=t,e}))}(t),t},N=n(10),k=n.n(N),w=n(53),S=n.n(w);o.a.config();var L=function(e){var t=e.journey,n=Object(a.useRef)(null);v.a.accessToken="pk.eyJ1IjoiY2xlbW11cnBoeSIsImEiOiJja3V6ZXA4NDMycTVxMnVsbnY4M24ydXczIn0.kwbfg0stv5iXHMcTE4hnzw";var s=[51.50853,-.076132],c={walking:"#FF8D2E",tube:"#00554E",bus:"#F478AA","national-rail":"#4677EC",tflrail:"#1BAE81",dlr:"#F478AA"};return Object(a.useEffect)((function(){t.legs&&(s=[],t.legs.forEach((function(e){s.push(y(e))})));var e=new v.a.Map({container:n.current,style:"mapbox://styles/mapbox/streets-v11",center:new v.a.LngLat(-.076132,51.50853),zoom:8.3});return e.on("load",(function(){if(s[0].length>0){s.forEach((function(n,a){e.addSource("".concat(n[0][0]),{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:n}}}),e.addLayer({id:"".concat(n[0][0]),type:"line",source:"".concat(n[0][0]),layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"".concat(c[t.legs[a].mode.id]),"line-width":6,"line-opacity":.8}})}));var n,a=new v.a.LngLatBounds(s[0][0],s[0][0]),r=Object(f.a)(s);try{for(r.s();!(n=r.n()).done;){var i,o=n.value,l=Object(f.a)(o);try{for(l.s();!(i=l.n()).done;){var j=i.value;a.extend(j)}}catch(d){l.e(d)}finally{l.f()}}}catch(d){r.e(d)}finally{r.f()}e.fitBounds(a,{padding:20})}if(localStorage.token){var u=[];(function(){var t=Object(m.a)(x.a.mark((function t(){var n,a,s,c,r,i,o,l,j;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=S.a.decode(localStorage.token),a=n.sub,t.prev=2,t.next=5,k.a.get("api/users/".concat(a));case 5:s=t.sent,c=s.data,u=c.home,r={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:u},properties:{title:"Home",description:"Your saved home"}}]},i=Object(f.a)(r.features);try{for(i.s();!(o=i.n()).done;)l=o.value,(j=document.createElement("div")).className="homeMarker",new v.a.Marker(j).setLngLat(l.geometry.coordinates).setPopup(new v.a.Popup({offset:25}).setHTML("<h3>".concat(l.properties.title,"</h3><p>").concat(l.properties.description,"</p>"))).addTo(e)}catch(d){i.e(d)}finally{i.f()}t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(){return t.apply(this,arguments)}})()()}})),function(){return e.remove()}}),[t]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{ref:n,className:"map-container"})})},I=n(54),C=function(e){var t=e.currentLocation,n=e.setCurrentLocation,a=e.setSearchTerm,s=e.setOrigin;return Object(d.jsx)("div",{id:"CurrentLocationWrapper",children:t.length>0?Object(d.jsx)("div",{className:"location-dot-active",onClick:function(){n([]),a("")},children:Object(d.jsx)("i",{className:"fas fa-map-marker-alt"})}):Object(d.jsx)("div",{className:"location-dot",onClick:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var t={center:[e.coords.longitude,e.coords.latitude],text:"Your Location"};n(t.center),s(t)})):console.log("Geolocation is not supported by this browser.")},children:Object(d.jsx)("i",{className:"fas fa-map-marker-alt"})})})},E=function(e){var t=e.homeLocation,n=e.setHomeLocation,a=e.setSearchTerm,s=e.setOrigin,c=function(){var e=Object(m.a)(x.a.mark((function e(){var t,a,c,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.token){e.next=18;break}return t=S.a.decode(localStorage.token),a=t.sub,e.prev=3,e.next=6,k.a.get("api/users/".concat(a));case 6:c=e.sent,r=c.data,n(r.home),s({center:r.home,text:"Home"}),console.log("Home location:",r.home),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:e.next=19;break;case 18:console.log("Can't find your home location!");case 19:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{id:"HomeLocationWrapper",children:t.length>0?Object(d.jsx)("div",{className:"location-dot-active",onClick:function(){n([]),a("")},children:Object(d.jsx)("i",{className:"fas fa-home"})}):Object(d.jsx)("div",{className:"location-dot",onClick:c,children:Object(d.jsx)("i",{className:"fas fa-home"})})})};o.a.config();var D=function(e){var t=e.origin,n=e.setOrigin,s=e.destination,c=e.setDestination,i=e.setJourneyOptions,o=(e.recentSearches,e.setRecentSearches),l=Object(a.useState)(""),j=Object(r.a)(l,2),u=j[0],p=j[1],b=Object(a.useState)(""),h=Object(r.a)(b,2),O=h[0],f=h[1],g=Object(a.useState)(""),v=Object(r.a)(g,2),y=v[0],N=v[1],w=Object(a.useState)([]),S=Object(r.a)(w,2),L=S[0],D=S[1],F=Object(a.useState)([]),M=Object(r.a)(F,2),J=M[0],_=M[1],T=Object(a.useState)([]),H=Object(r.a)(T,2),P=H[0],R=H[1],Y=Object(a.useState)(""),A=Object(r.a)(Y,2),B=A[0],V=A[1];Object(a.useEffect)((function(){D([]),V(""),n(null),c(null),f(""),N(""),R([]),_([]),o([])}),[D,V,n,c,f,N,o]),Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===u){e.next=6;break}return e.next=3,k.a.get("https://api.mapbox.com/geocoding/v5/mapbox.places/\n          ".concat(u,".json?bbox=-0.489,51.28,0.236,51.686&types=poi,address,place&access_token=").concat("pk.eyJ1IjoiY2xlbW11cnBoeSIsImEiOiJja3V6ZXA4NDMycTVxMnVsbnY4M24ydXczIn0.kwbfg0stv5iXHMcTE4hnzw"));case 3:t=e.sent,n=t.data,D(n.features);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(m.a)(x.a.mark((function e(){var t,n,a,s,c,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://api.postcodes.io/postcodes/".concat(u));case 2:t=e.sent,n=t.data,a=n.result.postcode,s=[n.result.longitude,n.result.latitude],c=n.result.parliamentary_constituency,r={center:s,text:a,properties:{address:c},context:[{text:a}]},D([].concat(Object(I.a)(L),[r]));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),u.length>5&&t()}),[u,D]);var z=function(e){var t=e.target.value;V(e.target.id),p(t),"Origin"===e.target.id?f(t):"Destination"===e.target.id&&N(t)};Object(a.useEffect)((function(){t&&s&&(function(){var e=Object(m.a)(x.a.mark((function e(){var n,a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://api.tfl.gov.uk/Journey/JourneyResults/".concat(t.center[1],",").concat(t.center[0],"/to/").concat(s.center[1],",").concat(s.center[0]));case 3:n=e.sent,a=n.data,i(a.journeys),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error getting journey planner");case 11:if(!localStorage.token){e.next=21;break}return c={origin_string:t.text,destination_string:s.text,origin:t.center,destination:s.center},e.prev=13,e.next=16,k.a.post("api/journeys/",c,{headers:{Authorization:"Bearer ".concat(localStorage.token)}});case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(13),console.log(e.t1.request.responseText);case 21:case"end":return e.stop()}}),e,null,[[0,8],[13,18]])})));return function(){return e.apply(this,arguments)}}()(),o([]))}),[t,s,i,o,J]);var W=function(e){var a=e.target.dataset.key,r=L[a];"Origin"===B?(n(r),t&&f(r.innerHTML)):"Destination"===B&&(c(r),s&&N(r.innerHTML)),p(""),D([])};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{id:"searchContainer",children:[Object(d.jsxs)("div",{className:"search-display",children:[J.length>0?Object(d.jsx)("h3",{children:"Your Location"}):P.length>0?Object(d.jsx)("h3",{children:"Home"}):Object(d.jsx)("h3",{children:t&&t.text?t.text:"-"}),Object(d.jsx)("h3",{id:"to-text",children:"TO"}),Object(d.jsx)("h3",{children:s&&s.text?s.text:"-"})]}),Object(d.jsxs)("div",{className:"search origin-search",children:[J.length>0?Object(d.jsx)("input",{type:"text",placeholder:"Origin",value:"Your Location",disabled:!0}):P.length>0?Object(d.jsx)("input",{type:"text",placeholder:"Origin",value:"Home",disabled:!0}):Object(d.jsx)("input",{type:"text",placeholder:"Origin",onInput:z,id:"Origin",value:O,autoComplete:"off"}),Object(d.jsx)(E,{homeLocation:P,setHomeLocation:R,setSearchTerm:p,setOriginSearchDisplay:f,setOrigin:n}),Object(d.jsx)(C,{currentLocation:J,setCurrentLocation:_,setSearchTerm:p,setOriginSearchDisplay:f,setOrigin:n})]}),Object(d.jsx)("div",{className:"search destination-search",children:Object(d.jsx)("input",{type:"text",placeholder:"Destination",onInput:z,id:"Destination",value:y,autoComplete:"off"})})]}),Object(d.jsxs)("div",{className:"search-results",children:[L.length>0&&Object(d.jsxs)("h2",{children:["Select Your ",B]}),L.length>0?L.map((function(e,t){return Object(d.jsxs)("div",{className:"search-result",onClick:W,"data-key":t,children:[Object(d.jsx)("h3",{children:e.text}),Object(d.jsx)("p",{children:e.properties.address}),Object(d.jsx)("p",{children:e.context[0].text})]},t)})):Object(d.jsx)(d.Fragment,{})]})]})},F=function(e){var t=e.setOrigin,n=e.setDestination,s=e.recentSearches,c=e.setRecentSearches;Object(a.useEffect)((function(){c([]);var e=function(){var e=Object(m.a)(x.a.mark((function e(){var t,n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("api/journeys/owner",{headers:{Authorization:"Bearer ".concat(localStorage.token)}});case 3:t=e.sent,n=t.data,a=n.reverse().slice(0,4),c(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.request.responseText);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();localStorage.token&&e()}),[c]);return Object(d.jsx)(d.Fragment,{children:s&&s.length>0&&Object(d.jsxs)("select",{name:"recent-searches-select",id:"recent-searches-select",onChange:function(e){var a=e.target.options[e.target.selectedIndex];t({origin_string:s[a.dataset.index].origin_string,destination_string:s[a.dataset.index].destination_string,center:s[a.dataset.index].origin}),n({origin_string:s[a.dataset.index].origin_string,destination_string:s[a.dataset.index].destination_string,center:s[a.dataset.index].destination})},defaultValue:"default",children:[Object(d.jsx)("option",{disabled:!0,value:"default",children:"Recent Searches"}),s.map((function(e,t){return Object(d.jsxs)("option",{"data-index":t,children:[e.origin_string," to ",e.destination_string]},e.id)}))]})})},M=function(e){var t=e.setJourneyOptions,n=e.journeyOptions,s=e.setJourney,c=e.origin,r=e.destination,i=e.setDestination,o=e.setOrigin,l=e.recentSearches,j=e.setRecentSearches,u=function(e){for(var t=e.target.dataset.journeyid,a=e.target.parentNode.children,c=0;c<a.length;c++)a[c].classList.remove("selected");e.target.classList.add("selected"),s(n[t])};return Object(a.useEffect)((function(){t([])}),[t]),Object(d.jsxs)(d.Fragment,{children:[0===n.length&&!localStorage.token&&Object(d.jsx)("div",{className:"journey-placeholder",children:Object(d.jsx)("h3",{children:Object(d.jsx)("i",{className:"fas fa-map-marked-alt"})})}),c&&r&&0===n.length?Object(d.jsx)("div",{className:"loader-container",children:Object(d.jsx)("div",{className:"loader"})}):Object(d.jsx)(d.Fragment,{}),Object(d.jsx)(F,{setDestination:i,setOrigin:o,recentSearches:l,setRecentSearches:j}),n.length>0?Object(d.jsx)("div",{className:"journey-options-list",children:n.map((function(e,t){return Object(d.jsxs)("div",{className:"journey-option","data-journeyid":t,onClick:u,children:[Object(d.jsx)("div",{className:"journey-details-container",children:Object(d.jsxs)("div",{className:"journey-details",children:[Object(d.jsxs)("h3",{children:[Object(d.jsx)("i",{className:"fas fa-stopwatch"})," ",e.duration,"mins"]}),Object(d.jsxs)("h3",{children:[Object(d.jsx)("i",{className:"fas fa-map-marked-alt"})," ",e.legs.length," legs"]})]})}),Object(d.jsx)("div",{className:"steps-wrapper",children:e.legs.map((function(e,t){return"walking"===e.mode.id?Object(d.jsxs)("div",{className:"mode-wrapper",children:[Object(d.jsxs)("div",{className:"journey-duration",children:[Object(d.jsx)("p",{className:"leg-names",children:e.departurePoint.commonName}),Object(d.jsx)("i",{className:"fas fa-walking"}),e.distance&&Object(d.jsxs)("p",{children:[(e.distance/1e3).toFixed(1),"km"]})]}),Object(d.jsx)("i",{className:"fas fa-caret-right"})]},t):"bus"===e.mode.id?Object(d.jsxs)("div",{className:"mode-wrapper",children:[Object(d.jsxs)("div",{className:"journey-duration",children:[Object(d.jsx)("p",{className:"leg-names",children:e.departurePoint.commonName}),Object(d.jsx)("i",{className:"fas fa-bus"}),Object(d.jsx)("div",{className:"bus-route-options",children:e.routeOptions.map((function(t,n){return n<e.routeOptions.length-1?Object(d.jsxs)("p",{children:[t.name," /"]},n):Object(d.jsx)("p",{children:t.name},n)}))}),Object(d.jsxs)("p",{children:[e.path.stopPoints.length," stops"]})]}),Object(d.jsx)("i",{className:"fas fa-caret-right"})]},t):"tube"===e.mode.id?Object(d.jsxs)("div",{className:"mode-wrapper",children:[Object(d.jsxs)("div",{className:"journey-duration",children:[Object(d.jsx)("p",{className:"leg-names",children:e.departurePoint.commonName}),Object(d.jsx)("i",{className:"fas fa-subway"}),Object(d.jsxs)("p",{children:[e.path.stopPoints.length," stops"]})]}),Object(d.jsx)("i",{className:"fas fa-caret-right"})]},t):"national-rail"===e.mode.id||"tflrail"===e.mode.id?Object(d.jsxs)("div",{className:"mode-wrapper",children:[Object(d.jsxs)("div",{className:"journey-duration",children:[Object(d.jsx)("p",{className:"leg-names",children:e.departurePoint.commonName}),Object(d.jsx)("i",{className:"fas fa-train"}),Object(d.jsxs)("p",{children:[e.path.stopPoints.length," stops"]})]}),Object(d.jsx)("i",{className:"fas fa-caret-right"})]},t):void 0}))})]},t)}))}):Object(d.jsx)(d.Fragment,{})]})},J=n(34),_=n(20),T=function(e){var t=e.setLoggedIn,n=(e.setUserHome,Object(j.f)()),s=Object(a.useState)({}),c=Object(r.a)(s,2),i=c[0],o=c[1];Object(a.useEffect)((function(){o({})}),[o]);var l=function(e){o(Object(_.a)(Object(_.a)({},i),{},Object(J.a)({},e.target.id,e.target.value)))},u=function(){var e=Object(m.a)(x.a.mark((function e(a){var s,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,k.a.post("api/users/login/",i);case 4:s=e.sent,c=s.data,localStorage.setItem("token",c.token),t(!0),n.push("/search"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.request.responseText;case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{id:"loginWrapper",children:[Object(d.jsx)("h2",{children:"Login"}),Object(d.jsxs)("form",{onSubmit:u,children:[Object(d.jsx)("input",{type:"text",name:"username",id:"username",autoComplete:"username",placeholder:"Username",onInput:l}),Object(d.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Password",autoComplete:"current-password",onInput:l}),Object(d.jsx)("button",{type:"submit",children:"Login"})]})]})},H=function(e){var t=e.formData,n=e.setFormData,s=Object(a.useState)(""),c=Object(r.a)(s,2),i=c[0],o=c[1],l=Object(a.useState)(""),j=Object(r.a)(l,2),u=j[0],p=j[1],b=Object(a.useState)([]),h=Object(r.a)(b,2),O=h[0],f=h[1];Object(a.useEffect)((function(){f([]),o("")}),[]),Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===i){e.next=6;break}return e.next=3,k.a.get("https://api.mapbox.com/geocoding/v5/mapbox.places/\n          ".concat(i,".json?bbox=-0.489,51.28,0.236,51.686&types=poi,address,place&access_token=pk.eyJ1IjoiY2xlbW11cnBoeSIsImEiOiJja3V6ZXA4NDMycTVxMnVsbnY4M24ydXczIn0.kwbfg0stv5iXHMcTE4hnzw"));case 3:t=e.sent,n=t.data,f(n.features);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(m.a)(x.a.mark((function e(){var t,n,a,s,c,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://api.postcodes.io/postcodes/".concat(i));case 2:t=e.sent,n=t.data,a=n.result.postcode,s=[n.result.longitude,n.result.latitude],c=n.result.parliamentary_constituency,r={center:s,text:a,properties:{address:c},context:[{text:a}]},f([].concat(Object(I.a)(O),[r]));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),i.length>5&&t()}),[i,f]);var g=function(e){var a=e.target.dataset.key,s=O[a];n(Object(_.a)(Object(_.a)({},t),{},{home:s.center,homeName:s.text})),o(""),f([])};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{id:"searchContainer",children:Object(d.jsx)("div",{className:"search origin-search",children:Object(d.jsx)("input",{type:"text",placeholder:"Home Location",onInput:function(e){var t=e.target.value;o(t),p(t)},id:"Origin",value:u,autoComplete:"off"})})}),Object(d.jsxs)("div",{className:"search-results",children:[t.home&&Object(d.jsxs)("h3",{children:["Home selected: ",t.homeName]}),O.length>0&&Object(d.jsx)("h3",{children:"Select Your Location"}),O.length>0?O.map((function(e,t){return Object(d.jsxs)("div",{className:"search-result",onClick:g,"data-key":t,children:[Object(d.jsx)("h3",{children:e.text}),Object(d.jsx)("p",{children:e.properties.address}),Object(d.jsx)("p",{children:e.context[0].text})]},t)})):Object(d.jsx)(d.Fragment,{})]})]})},P=function(){var e=Object(j.f)(),t=Object(a.useState)({}),n=Object(r.a)(t,2),s=n[0],c=n[1];Object(a.useEffect)((function(){c({})}),[c]);var i=function(e){c(Object(_.a)(Object(_.a)({},s),{},Object(J.a)({},e.target.id,e.target.value)))},o=function(){var t=Object(m.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),s.homeName&&delete s.homeName,t.prev=2,t.next=5,k.a.post("api/users/register/",s);case 5:console.log("\ud83d\udc4b Registration successful"),e.push("/login"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),t.t0.request.responseText;case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{id:"registerWrapper",children:[Object(d.jsx)("h2",{children:"Register"}),Object(d.jsxs)("form",{onSubmit:o,children:[Object(d.jsx)("input",{type:"text",name:"username",id:"username",autoComplete:"username",placeholder:"Username",onInput:i}),Object(d.jsx)("input",{type:"text",name:"firstName",id:"first_name",autoComplete:"given-name",placeholder:"First Name",onInput:i}),Object(d.jsx)("input",{type:"text",name:"lastName",id:"last_name",autoComplete:"family-name",placeholder:"Last Name",onInput:i}),Object(d.jsx)("input",{type:"email",name:"email",id:"email",autoComplete:"email",placeholder:"Email",onInput:i}),Object(d.jsx)("input",{type:"password",name:"password",id:"password",autoComplete:"new-password",placeholder:"Password",onInput:i}),Object(d.jsx)("input",{type:"password",name:"passwordConfirmation",id:"password_confirmation",placeholder:"Confirm Password",onInput:i}),Object(d.jsx)(H,{setFormData:c,formData:s}),Object(d.jsx)("button",{type:"submit",children:"Register"})]})]})};o.a.config();var R=function(){var e=Object(a.useState)({}),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)([]),i=Object(r.a)(c,2),o=i[0],u=i[1],O=Object(a.useState)(null),x=Object(r.a)(O,2),m=x[0],f=x[1],g=Object(a.useState)(null),v=Object(r.a)(g,2),y=v[0],N=v[1],k=Object(a.useState)([]),w=Object(r.a)(k,2),S=w[0],I=w[1],C=Object(a.useState)(!1),E=Object(r.a)(C,2),F=E[0],J=E[1];return Object(d.jsx)("div",{className:"site-wrapper",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(b,{loggedIn:F,setLoggedIn:J}),Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/",children:Object(d.jsx)(p,{})}),Object(d.jsx)(j.a,{path:"/search",children:Object(d.jsxs)("div",{className:"search-wrapper",children:[Object(d.jsxs)("div",{className:"journey-search",children:[Object(d.jsx)(L,{journey:n,origin:m,destination:y}),Object(d.jsx)(D,{setJourneyOptions:u,origin:m,destination:y,setDestination:N,setOrigin:f,recentSearches:S,setRecentSearches:I})]}),Object(d.jsx)("div",{className:"journey-selector",children:Object(d.jsx)(M,{setJourney:s,setJourneyOptions:u,journey:n,journeyOptions:o,origin:m,destination:y,setDestination:N,setOrigin:f,recentSearches:S,setRecentSearches:I})})]})}),Object(d.jsx)(j.a,{path:"/login",children:Object(d.jsx)(T,{setLoggedIn:J})}),Object(d.jsx)(j.a,{path:"/register",children:Object(d.jsx)(P,{})})]}),Object(d.jsx)(h,{})]})})};c.a.render(Object(d.jsx)(R,{}),document.getElementById("root"))}},[[298,1,2]]]);
//# sourceMappingURL=main.45795633.chunk.js.map