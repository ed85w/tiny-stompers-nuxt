(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{221:function(t,e,o){var content=o(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("007a9bda",content,!0,{sourceMap:!1})},228:function(t,e,o){"use strict";o(221)},229:function(t,e,o){var n=o(33)(!1);n.push([t.i,".contact-row{padding-bottom:40px}label{font-size:.7rem}.btn{background-color:#302d7e;color:#fff}.gdpr-text{font-size:.5rem;text-align:justify}@media (min-width:576px){label{font-size:.8rem}}@media (min-width:768px){.gdpr-text{font-size:.7rem;margin-top:0}}@media (min-width:992px){.contact-row{padding-bottom:150px}label{font-size:1rem}}",""]),t.exports=n},240:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{children:[{name:"",age:""}],date:""}},methods:{addNewChildForm:function(){this.children.push({name:"",age:""})},deleteForm:function(t){this.children.splice(t,1)}}},r=(o(228),o(28)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row contact-row"},[t._m(0),t._v(" "),o("div",{staticClass:"col-xs-12 col-md-7 animated fadeIn delay-1s",attrs:{id:"vue-form"}},[o("h2",[t._v("Booking/enquiry form")]),t._v(" "),o("form",{attrs:{name:"contactus",action:"/thanks",method:"post",netlify:"","netlify-honeypot":"bot-field"}},[o("input",{attrs:{type:"hidden",name:"form-name",value:"contactus"}}),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._l(t.children,(function(e,n){return o("div",{key:e.id},[n>0?o("span",{staticClass:"float-right",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.deleteForm(n)}}},[t._v("X")]):t._e(),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Child's Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"child.name"}],staticClass:"form-control",attrs:{type:"text",id:"Child_name"+n,name:"Child_name"+n},domProps:{value:e.name},on:{input:function(o){o.target.composing||t.$set(e,"name",o.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Child's Age")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"child.age"}],staticClass:"form-control",attrs:{id:"Child_age"+n,name:"Child_age"+n},on:{change:function(o){var n=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(e,"age",o.target.multiple?n:n[0])}}},[o("option",{attrs:{selected:""}},[t._v("0 - 6 Months")]),t._v(" "),o("option",[t._v("7 - 12 Months")]),t._v(" "),o("option",[t._v("1 Year")]),t._v(" "),o("option",[t._v("2 Years")]),t._v(" "),o("option",[t._v("3 Years")]),t._v(" "),o("option",[t._v("4 Years")]),t._v(" "),o("option",[t._v("5 Years")])])])])})),t._v(" "),o("div",{staticClass:"form-group"},[o("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.addNewChildForm}},[t._v("\n            Add Child\n          ")])]),t._v(" "),t._m(4),t._v(" "),o("button",{staticClass:"btn",attrs:{type:"submit",value:"send"}},[t._v("Send")])],2),t._v(" "),o("br"),t._v(" "),o("p",{staticClass:"gdpr-text"},[t._v("GDPR: Tiny Stompers holds your contact details on a tablet device/mobile for contacting you with information about Tiny Stompers. The hard copies from signing in sheets once transported from the session, are stored in my office at home. I will not share your details with any third parties (unless in child protection instances where the usual policy applies). If at any time you would like to be removed from the distribution list, please let me know through my contact details.")])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-xs-12 col-md-5 animated fadeIn"},[o("h2",[t._v("Contact Us")]),t._v(" "),o("p",[t._v("If you would like to ask us any questions please don’t hesitate to contact Becky...")]),t._v(" "),o("ul",{staticClass:"about-ul"},[o("li",{staticClass:"about-li"},[o("a",{attrs:{href:"tel:07739960910"}},[t._v("mobile: 07739 960910")])]),t._v(" "),o("li",{staticClass:"about-li"},[o("a",{attrs:{href:"mailto:langstaff56@gmx.co.uk"}},[t._v("email: langstaff56@gmx.co.uk")])]),t._v(" "),o("li",{staticClass:"about-li"},[o("a",{attrs:{href:"https://www.facebook.com/TinyStompers/"}},[t._v("visit Tiny Stompers on Facebook")])])]),t._v(" "),o("br"),t._v(" "),o("h2",{staticClass:"d-none d-md-block"},[t._v("Facebook")]),t._v(" "),o("div",{staticClass:"fb-page d-none d-md-block",attrs:{"data-href":"https://www.facebook.com/TinyStompers/","data-tabs":"timeline","data-small-header":"false","data-adapt-container-width":"true","data-hide-cover":"false","data-show-facepile":"true"}},[o("blockquote",{staticClass:"fb-xfbml-parse-ignore",attrs:{cite:"https://www.facebook.com/TinyStompers/"}},[o("a",{attrs:{href:"https://www.facebook.com/TinyStompers/"}},[t._v("Tiny Stompers")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"adult_name"}},[t._v("Adult's Name *")]),t._v(" "),o("input",{staticClass:"form-control",attrs:{type:"text",id:"adult_name",name:"adult_name",required:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"email"}},[t._v("Email address *")]),t._v(" "),o("input",{staticClass:"form-control",attrs:{type:"email",id:"email",name:"email",required:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"phone"}},[t._v("Phone Number")]),t._v(" "),o("input",{staticClass:"form-control",attrs:{type:"text",id:"phone",name:"phone"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"enquiry"}},[t._v("Enquiry")]),t._v(" "),o("textarea",{staticClass:"form-control",attrs:{id:"enquiry",name:"enquiry"}})])}],!1,null,null,null);e.default=component.exports}}]);