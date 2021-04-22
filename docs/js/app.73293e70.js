(function(e){function n(n){for(var r,s,a=n[0],c=n[1],l=n[2],u=0,d=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(n);while(d.length)d.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==i[c]&&(r=!1)}r&&(o.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},i={app:0},o=[];function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/vrf-demo.github.io/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var f=c;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),i=t("7ee5"),o=t.n(i),s=t("ce5b"),a=t.n(s);r["default"].use(a.a);var c={},l=new a.a(c),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e._m(0),t("vue-code-highlight",{attrs:{language:"html"}},[e._v(" "+e._s(e.code)+" ")]),t("p",{staticClass:"header"},[e._v("Select an adapter")]),t("rf-form",{staticClass:"form",attrs:{resource:e.resource}},[t("rf-select-adapter",{attrs:{name:"mode",options:e.engines}})],1),t("v-app",[t("rf-form",{staticClass:"form",attrs:{resource:e.resource}},[t("rf-select",{attrs:{name:"mode",options:e.engines}}),t("rf-input",{attrs:{name:"title"}}),t("rf-checkbox",{attrs:{name:"checked"}}),t("rf-datepicker",{attrs:{name:"date"}}),t("rf-textarea",{attrs:{name:"description"}}),t("rf-submit")],1)],1)],1)},u=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"header"},[t("a",{staticClass:"link",attrs:{href:"https://github.com/dimailn/vrf"}},[e._v("Vrf")]),e._v(" demo of UI-agnostic concept")])}],d=t("5530"),p=(t("159b"),t("a15b"),t("d81d"),t("ac1f"),t("1276"),t("c491")),m=t.n(p),h=(t("5363"),t("13d5"),t("5b53")),v=t.n(h),g=t("2ef0"),y={vuetify:v.a},b={},x=function(e){return{mixins:[i["Resource"]],props:i["descriptors"][e].props,render:function(e){return e(this.component,{props:this.$props})},computed:{component:function(){var n=this.$resource.mode,t="Rf"+Object(g["capitalize"])(Object(g["camelCase"])(e));return"vrf"==n?i["components"][t]:(b[t]||(b[t]=Object(d["a"])({extends:i["descriptors"][e]},y[n].components[t])),b[t])}}}},k=function(e){return e.reduce((function(e,n){return e["Rf"+Object(g["capitalize"])(Object(g["camelCase"])(n))]=x(n),e}),{})},w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{display:"flex"}},e._l(e.$_options,(function(n){return t("div",{key:n.id,staticClass:"rf-select-adapter__image",class:{"rf-select-adapter__image_selected":n.id==e.$value},staticStyle:{width:"200px"},on:{click:function(t){return e.onClick(n.id)}}},[t("img",{attrs:{src:n.image,height:"100"}})])})),0)},C=[],O={extends:i["descriptors"].select,methods:{onClick:function(e){this.$value=e,this.$emit("input",e)}}},_=O,j=(t("ad6f"),t("2877")),S=Object(j["a"])(_,w,C,!1,null,null,null),E=S.exports,F=t("d36c"),P=(t("00e9"),t("0439"),"<template>\n  <div id=\"app\">\n    <p class=\"header\"><a class=\"link\" href=\"https://github.com/dimailn/vrf\">Vrf</a> demo of UI-agnostic concept</p>\n\n    <vue-code-highlight language=\"html\">\n      {{code}}\n    </vue-code-highlight>\n    <p class=\"header\">Select an adapter</p>\n\n    <rf-form :resource=\"resource\" class=\"form\">\n      <rf-select-adapter name=\"mode\" :options=\"engines\" />\n    </rf-form>\n\n    <v-app>\n      <rf-form :resource=\"resource\" class=\"form\">\n        <rf-select name=\"mode\" :options=\"engines\" />\n        <rf-input name=\"title\" />\n        <rf-checkbox name=\"checked\" />\n        <rf-datepicker name=\"date\" />\n        <rf-textarea name=\"description\" />\n        <rf-submit />\n      </rf-form>\n    </v-app>\n\n\n  </div>\n</template>\n\n<script>\n\nimport vuetifyStylesFile from '!file-loader!vuetify/dist/vuetify.min.css'\nimport '@mdi/font/css/materialdesignicons.css'\n\nimport wrapComponents from './utils/wrap-components'\nimport RfSelectAdapter from './components/rf-select-adapter'\nimport { component as VueCodeHighlight } from 'vue-code-highlight';\n\nimport \"vue-code-highlight/themes/duotone-sea.css\";\nimport \"vue-code-highlight/themes/window.css\";\n\nimport thisFile from '!raw-loader!./App.vue'\n\n\n\n\n\nconst styles = {\n  vuetify: vuetifyStylesFile\n}\n\nexport default {\n  name: 'App',\n  components: {\n    ...wrapComponents(\n      [\n        'input',\n        'select',\n        'checkbox',\n        'textarea',\n        'submit',\n        'datepicker'\n      ]\n    ),\n    RfSelectAdapter,\n    VueCodeHighlight\n  },\n  data(){\n    return {\n      resource: {\n        title: '',\n        mode: 'vrf',\n        checked: false\n      },\n    }\n  },\n  watch: {\n    'resource.mode': function() {\n      document.querySelectorAll('#adapter-style').forEach((el) => el.remove())\n\n      if(this.resource.mode == 'vuetify') {\n        const style = styles.vuetify\n\n        var head = document.getElementsByTagName('head')[0]\n        var link = document.createElement('link')\n        link.rel = 'stylesheet'\n        link.href = style\n        link.id = 'adapter-style'\n        head.appendChild(link)\n      }\n    }\n  },\n  computed: {\n    code() {\n      return this.formCodes[1].split(\"\\n\").map((str, i) => i === 0 ? str : str.substr(4)).join(\"\\n\")\n    },\n    formCodes() {\n      const codes = []\n\n      let thisFileCopy = thisFile\n\n      while (thisFileCopy.indexOf('<rf-form') != -1) {\n        const startPosition = thisFileCopy.indexOf('<rf-form')\n        const length = thisFileCopy.indexOf('</rf-form>') - startPosition + 10\n\n        const code = thisFileCopy.substr(startPosition, length)\n\n        thisFileCopy = thisFileCopy.substr(startPosition + length)\n\n        codes.push(code)\n      }\n\n      return codes\n    },\n    engines() {\n      return [\n        {\n          id: 'vrf',\n          title: 'No adapter',\n          image: 'logo.png'\n        },\n        {\n          id: 'vuetify',\n          title: 'vrf-vuetify',\n          image: 'vuetify.svg'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n\n<style>\n.header {\n  font-size: 30px;\n  margin-bottom: 25px;\n}\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n.form {\n  display: flex;\n  flex-direction: column;\n  /*width: 50%;*/\n  margin: 0 auto;\n}\n\n@media screen and (max-width: 900px) {\n  .form {\n    width: 90%;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  .form {\n    width: 40%;\n  }\n}\n\n.link {\n  text-decoration: none;\n}\n\n.link:visited {\n  color: #0000EE;\n}\n</style>\n"),A={vuetify:m.a},$={name:"App",components:Object(d["a"])(Object(d["a"])({},k(["input","select","checkbox","textarea","submit","datepicker"])),{},{RfSelectAdapter:E,VueCodeHighlight:F["a"]}),data:function(){return{resource:{title:"",mode:"vrf",checked:!1}}},watch:{"resource.mode":function(){if(document.querySelectorAll("#adapter-style").forEach((function(e){return e.remove()})),"vuetify"==this.resource.mode){var e=A.vuetify,n=document.getElementsByTagName("head")[0],t=document.createElement("link");t.rel="stylesheet",t.href=e,t.id="adapter-style",n.appendChild(t)}}},computed:{code:function(){return this.formCodes[1].split("\n").map((function(e,n){return 0===n?e:e.substr(4)})).join("\n")},formCodes:function(){var e=[],n=P;while(-1!=n.indexOf("<rf-form")){var t=n.indexOf("<rf-form"),r=n.indexOf("</rf-form>")-t+10,i=n.substr(t,r);n=n.substr(t+r),e.push(i)}return e},engines:function(){return[{id:"vrf",title:"No adapter",image:"logo.png"},{id:"vuetify",title:"vrf-vuetify",image:"vuetify.svg"}]}}},R=$,T=(t("034f"),Object(j["a"])(R,f,u,!1,null,null,null)),V=T.exports;r["default"].use(o.a,{translate:function(e){return e}}),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(V)},vuetify:l}).$mount("#app")},"6d11":function(e,n,t){},"85ec":function(e,n,t){},ad6f:function(e,n,t){"use strict";t("6d11")}});
//# sourceMappingURL=app.73293e70.js.map