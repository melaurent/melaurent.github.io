webpackJsonp([1],{"/o5o":function(t,e,n){"use strict";function r(t){n("sEU2")}var i=n("Aqhm"),a=n("7fb6"),s=n("VU/8"),o=r,c=s(i.a,a.a,o,"data-v-f9997fc8",null);e.a=c.exports},"61iF":function(t,e){},"7fb6":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{attrs:{id:t.modalid}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[n("h3",[t._v(" "+t._s(t.title)+" ")])]),t._v(" "),n("div",{staticClass:"modal-body"},[t._t("body")],2),t._v(" "),n("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])])])},i=[],a={render:r,staticRenderFns:i};e.a=a},"9Mdc":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("transition",{attrs:{name:"fade"}},[t.connected?n("p",[t._v("Bonjour "+t._s(t.ID.firstName+" "+t.ID.lastName))]):t._e()]),t._v(" "),t.connected?t._e():n("modal",{attrs:{title:t.modalTitle,modalid:"connectModal"}},[n("div",{slot:"body"},[t.eid?t._e():n("md-button",{staticClass:"md-raised",on:{click:t.onConnect}},[t._v("Select")])],1),t._v(" "),n("div",{slot:"footer"},[t.eid?n("md-progress",{attrs:{"md-progress":t.progress}}):t._e()],1)]),t._v(" "),n("img",{attrs:{src:t.idPhotoUrl}})],1)},i=[],a={render:r,staticRenderFns:i};e.a=a},Aqhm:function(t,e,n){"use strict";e.a={components:{},props:["modalid","title"],name:"modal",data:function(){return{}}}},GEgs:function(t,e,n){"use strict";var r=n("Zrlr"),i=n.n(r),a=function t(){if(i()(this,t),arguments.length>0){var e=arguments[0];if(e instanceof ArrayBuffer){if(1!=arguments.length)throw new Error("APDU",t.SW_GENERALERROR,"Only one argument of type ByteString expected");this.fromBuffer(e)}else{if(arguments.length<4||arguments.length>6)throw new Error("APDU",t.SW_GENERALERROR,"4 to 6 arguments expected");for(var n=0;n<4;n++)if("number"!=typeof arguments[n])throw new Error("APDU",t.SW_GENERALERROR,"Argument must be of type Number");this.cla=arguments[0],this.ins=arguments[1],this.p1=arguments[2],this.p2=arguments[3];var n=4;arguments.length>n&&arguments[n]instanceof ArrayBuffer&&(this.cdata=arguments[n],n++),arguments.length>n&&"number"==typeof arguments[n]&&(this.ne=arguments[n],n++)}}this.rapdu=null,this.SW=t.SW_GENERALERROR};e.a=a,a.INS_DEACTIVATE=4,a.INS_VERIFY=32,a.INS_MANAGE_SE=34,a.INS_CHANGE_REFERENCE_DATA=36,a.INS_PSO=42,a.INS_RESET_RETRY_COUNTER=44,a.INS_ACTIVATE=68,a.INS_GENERATE_KEY_PAIR=70,a.INS_EXTERNAL_AUTHENTICATE=130,a.INS_GET_CHALLENGE=132,a.INS_GENERAL_AUTHENTICATE=134,a.INS_COMPUTE_DIGITAL_SIGN=158,a.INS_SELECT=164,a.INS_READBINARY=176,a.INS_READ_BINARY=176,a.INS_READ_RECORD=178,a.INS_VERIFY_CERTIFICATE=190,a.INS_UPDATE_BINARY=214,a.INS_TERMINATE=230,a.SW_OK=36864,a.SW_TIMEOUT=25601,a.SW_OKMOREDATA=24832,a.SW_WARNING=25088,a.SW_WARNING1=25089,a.SW_DATAINV=25217,a.SW_EOF=25218,a.SW_INVFILE=25219,a.SW_INVFORMAT=25220,a.SW_WARNINGNVCHG=25344,a.SW_WARNINGCOUNT=25536,a.SW_WARNING0LEFT=25536,a.SW_WARNING1LEFT=25537,a.SW_WARNING2LEFT=25538,a.SW_WARNING3LEFT=25539,a.SW_EXECERR=25600,a.SW_MEMERR=25857,a.SW_MEMERRWRITE=25985,a.SW_WRONGLENGTH=26368,a.SW_CLANOTSUPPORTED=26624,a.SW_LCNOTSUPPORTED=26753,a.SW_SMNOTSUPPORTED=26754,a.SW_LASTCMDEXPECTED=26755,a.SW_CHAINNOTSUPPORTED=26756,a.SW_COMNOTALLOWED=26880,a.SW_COMINCOMPATIBLE=27009,a.SW_SECSTATNOTSAT=27010,a.SW_AUTHMETHLOCKED=27011,a.SW_REFDATANOTUSABLE=27012,a.SW_CONDOFUSENOTSAT=27013,a.SW_COMNOTALLOWNOEF=27014,a.SW_SMOBJMISSING=27015,a.SW_INCSMDATAOBJECT=27016,a.SW_INVPARA=27136,a.SW_INVDATA=27264,a.SW_FUNCNOTSUPPORTED=27265,a.SW_NOAPPL=27266,a.SW_FILENOTFOUND=27266,a.SW_RECORDNOTFOUND=27267,a.SW_OUTOFMEMORY=27268,a.SW_INVLCTLV=27269,a.SW_INVACC=27269,a.SW_INCP1P2=27270,a.SW_INVLC=27271,a.SW_RDNOTFOUND=27272,a.SW_FILEEXISTS=27273,a.SW_DFNAMEEXISTS=27274,a.SW_INVP1P2=27392,a.SW_INVLE=27648,a.SW_INVINS=27904,a.SW_INVCLA=28160,a.SW_ACNOTSATISFIED=38916,a.SW_NOMORESTORAGE=37392,a.SW_GENERALERROR=28416,a.prototype.fromBuffer=function(t){if(dv=new DataView(t),dv.byteLength<4)throw new Error("APDU",a.SW_GENERALERROR,"Command APDU must be at least 4 bytes long");if(this.cla=dv.getUint8(0),this.ins=dv.getUint8(1),this.p1=dv.getUint8(2),this.p2=dv.getUint8(3),dv.byteLength>4){var e=!1,n=4,r=dv.byteLength-n,i=dv.getUint8(n++);if(r--,0==i&&r>0){if(e=!0,r<2)throw new Error("APDU",a.SW_WRONGLENGTH,"Extended length APDU too short");i=(dv.getUint8(n)<<8)+dv.getUint8(n+1),n+=2,r-=2}if(r>0){if(r<i)throw new Error("APDU",a.SW_WRONGLENGTH,"Invalid Lc in APDU");if(this.cdata=dv.buffer.slice(n,i),n+=i,(r-=i)>0){if(i=bs.getUint8(n++),r--,e){if(r<1)throw new Error("APDU",a.SW_WRONGLENGTH,"Invalid Le in extended APDU");i=(i<<8)+dv.getUint8(n++),r--}this.ne=e&&0==i?65536:i}}else this.ne=e&&0==i?65536:i;if(r>0)throw new Error("APDU",a.SW_WRONGLENGTH,"Too many bytes in APDU")}},a.prototype.isExtended=function(){var t=void 0!==this.cdata,e=void 0!==this.ne;return t&&this.cdata.byteLength>255||e&&this.ne>256},a.prototype.getCommandAPDU=function(){var t=void 0!==this.cdata,e=void 0!==this.ne,n=t&&this.cdata.byteLength>255||e&&this.ne>256,r=0;r+=4,n?(r+=1,t&&(r+=2,r+=this.cdata.byteLength),e&&(r+=2)):(t&&(r+=1,r+=this.cdata.byteLength),e&&(r+=1));var i=new DataView(new ArrayBuffer(r)),a=0;if(i.setUint8(a++,this.cla),i.setUint8(a++,this.ins),i.setUint8(a++,this.p1),i.setUint8(a++,this.p2),n&&i.setUint8(a++,0),t&&this.cdata.byteLength>0){n&&i.setUint8(a++,this.cdata.byteLength>>8),i.setUint8(a++,255&this.cdata.byteLength);for(var s=new DataView(this.cdata),o=0;o<s.byteLength;o++)i.setUint8(a++,s.getUint8(o))}return e&&(n&&i.setUint8(a++,this.ne>>8),i.setUint8(a++,255&this.ne)),i.buffer},a.prototype.decodeResult=function(t){var e=new DataView(t);2===e.byteLength?(this.SW=e.getUint8(0)<<8,this.SW^=e.getUint8(1)):e.byteLength>2&&(this.rdata=t.slice(0,t.byteLength-2),this.SW=e.getUint8(t.byteLength-2)<<8,this.SW^=e.getUint8(t.byteLength-1))},a.prototype.getResponseAPDU=function(){var t=new ByteBuffer;return this.rdata&&t.append(this.rdata),t.append(this.SW>>8),t.append(255&this.SW),t.toByteString()},a.prototype.getCLA=function(){return this.cla},a.prototype.isISO=function(){return 0==(128&this.cla)},a.prototype.isChained=function(){return 16==(16&this.cla)},a.prototype.isSecureMessaging=function(){return 8==(8&this.cla)},a.prototype.isAuthenticatedHeader=function(){return 12==(12&this.cla)},a.prototype.getINS=function(){return this.ins},a.prototype.getP1=function(){return this.p1},a.prototype.getP2=function(){return this.p2},a.prototype.setCData=function(t){this.cdata=t},a.prototype.getCData=function(){return this.cdata},a.prototype.hasCData=function(){return void 0!==this.cdata&&null!=this.cdata},a.prototype.getCDataAsTLVList=function(){if(void 0===this.cdata)throw new Error("APDU",a.SW_INVDATA,"No data in command APDU");try{var t=new TLVList(this.cdata,TLV.EMV)}catch(t){throw new Error("APDU",a.SW_INVDATA,"Invalid TLV data in command APDU")}return t},a.prototype.getNe=function(){return this.ne},a.prototype.hasLe=function(){return void 0!==this.ne},a.prototype.setSecureChannel=function(t){this.secureChannel=t},a.prototype.getSecureChannel=function(){return this.secureChannel},a.prototype.hasSecureChannel=function(){return void 0!==this.secureChannel&&null!=this.secureChannel},a.prototype.wrap=function(){this.hasSecureChannel()&&this.secureChannel.wrap(this)},a.prototype.unwrap=function(){this.hasSecureChannel()&&this.secureChannel.unwrap(this)},a.prototype.setRData=function(t){this.rdata=t},a.prototype.getRData=function(){return this.rdata},a.prototype.hasRData=function(){return void 0!==this.rdata&&null!=this.rdata},a.prototype.setSW=function(t){this.SW=t},a.prototype.getSW=function(){return this.SW},a.prototype.getSW1=function(){return this.SW>>8},a.prototype.getSW2=function(){return 255&this.SW},a.prototype.toString=function(){return this.getCommandAPDU().toString(HEX)+" : "+this.getResponseAPDU().toString(HEX)},a.test=function(){var t=new a(0,164,0,12);print(t);var e=t.getCommandAPDU();assert("00A4000C"==e.toString(HEX));var n=new a(e);assert(t.toString()==n.toString());var t=new a(0,164,0,12,0);print(t);var e=t.getCommandAPDU();assert("00A4000C00"==e.toString(HEX));var n=new a(e);assert(t.toString()==n.toString());var t=new a(0,164,0,12,65536);print(t);var e=t.getCommandAPDU();assert("00A4000C000000"==e.toString(HEX));var n=new a(e);print(n),assert(t.toString()==n.toString());var t=new a(0,164,0,12,new ByteString("3F00",HEX));print(t);var e=t.getCommandAPDU();assert("00A4000C023F00"==e.toString(HEX));var n=new a(e);assert(t.toString()==n.toString());var r="0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF",t=new a(0,164,0,12,new ByteString(r,HEX));print(t);var e=t.getCommandAPDU();assert(e.toString(HEX)=="00A4000C000100"+r);var n=new a(e);assert(t.toString()==n.toString());var t=new a(0,164,0,12,new ByteString("3F00",HEX),0);print(t);var e=t.getCommandAPDU();assert("00A4000C023F0000"==e.toString(HEX));var n=new a(e);assert(t.toString()==n.toString());var t=new a(0,164,0,12,new ByteString(r,HEX),0);print(t);var e=t.getCommandAPDU();assert(e.toString(HEX)=="00A4000C000100"+r+"0000");var n=new a(e);assert(t.toString()==n.toString());var t=new a(0,164,0,12,new ByteString("3F00",HEX),65536);print(t);var e=t.getCommandAPDU();assert("00A4000C0000023F000000"==e.toString(HEX));var n=new a(e);assert(t.toString()==n.toString())}},IOcd:function(t,e){},M93x:function(t,e,n){"use strict";function r(t){n("IOcd")}var i=n("xJD8"),a=n("s17J"),s=n("VU/8"),o=r,c=s(i.a,a.a,o,null,null);e.a=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i=n("M93x"),a=n("YaEn"),s=n("Lgyv");r.default.use(s),r.default.config.productionTip=!1,console.log(navigator.usb),new r.default({el:"#app",router:a.a,template:"<App/>",components:{App:i.a}})},YaEn:function(t,e,n){"use strict";var r=n("7+uW"),i=n("/ocq"),a=n("qSdX");r.default.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Hello",component:a.a}]})},aUe4:function(t,e,n){"use strict";var r=n("Xxa5"),i=n.n(r),a=n("exGp"),s=n.n(a),o=n("Zrlr"),c=n.n(o),u=n("wxAW"),h=n.n(u),d=n("lRUW"),f=n("GEgs"),l=function(){function t(e){var n=this;c()(this,t),this.device=e,this.events={},this.slot=null,this.card=null,this.CCID=new d.a(e),this.CCID.on("card-inserted",function(t){n.slot||(n.slot=t,console.log("card-inserted"),n.card={},n.fetchCardData().then(function(){n.events["card-inserted"]&&n.events["card-inserted"]()}))}),this.CCID.on("card-removed",function(t){n.slot=null,n.card=null,console.log("card-removed"),n.events["card-removed"]&&n.events["card-removed"]()})}return h()(t,[{key:"Utf8ArrayToStr",value:function(t,e,n){var r,i,a,s,o;for(r="",i=e;i<n;)switch((a=t[i++])>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:r+=String.fromCharCode(a);break;case 12:case 13:s=t[i++],r+=String.fromCharCode((31&a)<<6|63&s);break;case 14:s=t[i++],o=t[i++],r+=String.fromCharCode((15&a)<<12|(63&s)<<6|(63&o)<<0)}return r}},{key:"on",value:function(t,e){this.events[t]=e}},{key:"verifyPin",value:function(){function t(t){return e.apply(this,arguments)}var e=s()(i.a.mark(function t(e){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.CCID.sendApdu(this.slot,0,f.a.INS_VERIFY,0,1,e.encode());case 2:n=t.sent,t.t0=n.getSW(),t.next=t.t0===f.a.SW_OK?6:t.t0===f.a.SW_WARNING2LEFT?8:t.t0===f.a.SW_WARNING1LEFT?10:12;break;case 6:return console.log("ok"),t.abrupt("break",12);case 8:return console.log("Two tries left"),t.abrupt("break",12);case 10:return console.log("Two try left"),t.abrupt("break",12);case 12:case"end":return t.stop()}},t,this)}));return t}()},{key:"selectFile",value:function(){function t(t){return e.apply(this,arguments)}var e=s()(i.a.mark(function t(e){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==this.slot){t.next=2;break}throw new Error("No card inserted");case 2:return t.next=4,this.CCID.sendApdu(this.slot,0,f.a.INS_SELECT,8,12,e.buffer);case 4:if(n=t.sent,n.getSW()===f.a.SW_OK){t.next=8;break}throw console.log(n.getSW()),new Error("Error occured while selecting file");case 8:case"end":return t.stop()}},t,this)}));return t}()},{key:"readFile",value:function(){function e(){return n.apply(this,arguments)}var n=s()(i.a.mark(function e(){var n,r,a,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==this.slot){e.next=2;break}throw new Error("No card inserted");case 2:n=new Uint8Array(0),a=0;case 4:return e.next=7,this.CCID.sendApdu(this.slot,0,f.a.INS_READ_BINARY,(65280&a)>>8,255&a,t.READ_BINARY_MAX_LEN);case 7:if(s=e.sent,s.getSW()===f.a.SW_OK){e.next=25;break}if(108!==s.getSW1()){e.next=23;break}return e.next=12,this.CCID.sendApdu(this.slot,0,f.a.INS_READ_BINARY,(65280&a)>>8,255&a,s.getSW2());case 12:if(s=e.sent,s.getSW()===f.a.SW_OK){e.next=16;break}throw console.log(s.getSW()),new Error("Error reading file");case 16:return r=new Uint8Array(n.byteLength+s.rdata.byteLength),r.set(n),r.set(new Uint8Array(s.rdata),n.byteLength),n=r,e.abrupt("return",n.buffer);case 23:throw console.log(s.getSW()),new Error("Error reading file");case 25:if(r=new Uint8Array(n.byteLength+s.rdata.byteLength),r.set(n),r.set(new Uint8Array(s.rdata),n.byteLength),n=r,a+=t.READ_BINARY_MAX_LEN,!(s.rdata.byteLength<t.READ_BINARY_MAX_LEN)){e.next=32;break}return e.abrupt("return",n.buffer);case 32:e.next=4;break;case 34:case"end":return e.stop()}},e,this)}));return e}()},{key:"fetchCardData",value:function(){function e(){return n.apply(this,arguments)}var n=s()(i.a.mark(function e(){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==this.slot){e.next=2;break}throw new Error("No card inserted");case 2:return e.next=4,this.CCID.sendApdu(this.slot,t.APDU_CLASS,t.INS_GET_CARD_DATA,0,0,28);case 4:if(n=e.sent,n.getSW()===f.a.SW_OK){e.next=7;break}throw new Error("Error fetching card data",n.getSW());case 7:r=new Uint8Array(n.rdata),this.card.serialNr=n.rdata.slice(0,16),this.card.appletVersion=r[21];case 10:case"end":return e.stop()}},e,this)}));return e}()},{key:"getFile",value:function(){function e(t){return n.apply(this,arguments)}var n=s()(i.a.mark(function e(n){var r,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n in t.PATH_TO_FILE_ID){e.next=2;break}throw new Error("File not found");case 2:return r=t.PATH_TO_FILE_ID[n],e.next=5,this.selectFile(r);case 5:return e.next=7,this.readFile();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"idGetPhoto",value:function(){function t(){return e.apply(this,arguments)}var e=s()(i.a.mark(function t(){var e,n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getFile("/id/photo");case 2:return e=t.sent,n=new Uint8Array(e),r=new Blob([n],{type:"image/jpeg"}),t.abrupt("return",r);case 6:case"end":return t.stop()}},t,this)}));return t}()},{key:"parseId",value:function(t,e){for(var n=this.parseInd;t[n]!==e;)n++;for(var r=n+2;t[r]!==e+1;)r++;return this.parseInd=r,this.Utf8ArrayToStr(t,n+2,r)}},{key:"idGetId",value:function(){function t(){return e.apply(this,arguments)}var e=s()(i.a.mark(function t(){var e,n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.parseInd=0,t.next=3,this.getFile("/id/id");case 3:return e=t.sent,n=new Uint8Array(e),r={},r.cardNumber=this.parseId(n,1),r.chipNumber=this.parseId(n,2),r.cardValidityBegin=this.parseId(n,3),r.cardValidityEnd=this.parseId(n,4),r.cardDeliveryMunicipality=this.parseId(n,5),r.nationalNumber=this.parseId(n,6),r.lastName=this.parseId(n,7),r.firstName=this.parseId(n,8),r.thirdName=this.parseId(n,9),r.nationality=this.parseId(n,10),r.birthLocation=this.parseId(n,11),r.birthDate=this.parseId(n,12),r.sex=this.parseId(n,13),r.nobleCondition=this.parseId(n,14),r.documentType=this.parseId(n,15),r.specialStatus=this.parseId(n,16),r.photoHash=this.parseId(n,17),t.abrupt("return",r);case 24:case"end":return t.stop()}},t,this)}));return t}()},{key:"idGetAddress",value:function(){function t(){return e.apply(this,arguments)}var e=s()(i.a.mark(function t(){var e,n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getFile("/id/addr");case 2:return e=t.sent,n=new Uint8Array(e),r=String.fromCharCode.apply(null,n),r=decodeURIComponent(escape(r)),t.abrupt("return",r);case 7:case"end":return t.stop()}},t,this)}));return t}()},{key:"getCertificate",value:function(){function e(t){return n.apply(this,arguments)}var n=s()(i.a.mark(function e(n){var r,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n,e.next=e.t0===t.CERT.AUTH?3:e.t0===t.CERT.SIGN?5:7;break;case 3:return r="/mscp/ksc00",e.abrupt("break",7);case 5:return r="/mscp/ksc01",e.abrupt("break",7);case 7:return e.next=9,this.getFile(r);case 9:return a=e.sent,e.abrupt("return",a);case 11:case"end":return e.stop()}},e,this)}));return e}()},{key:"init",value:function(){function t(){return e.apply(this,arguments)}var e=s()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.device.open();case 2:return t.prev=2,t.next=5,this.CCID.init();case 5:t.next=12;break;case 7:return t.prev=7,t.t0=t.catch(2),t.next=11,this.exit();case 11:throw t.t0;case 12:case"end":return t.stop()}},t,this,[[2,7]])}));return t}()},{key:"exit",value:function(){function t(){return e.apply(this,arguments)}var e=s()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.CCID.exit();case 2:return t.next=4,this.device.close();case 4:case"end":return t.stop()}},t,this)}));return t}()}]),t}();e.a=l,l.READ_BINARY_MAX_LEN=255,l.PATH_TO_FILE_ID={"/id/id":new Uint8Array([63,0,223,1,64,49]),"/id/id_sgn":new Uint8Array([63,0,223,1,64,50]),"/id/addr":new Uint8Array([63,0,223,1,64,51]),"/id/addr_sgn":new Uint8Array([63,0,223,1,64,52]),"/id/photo":new Uint8Array([63,0,223,1,64,53]),"/id/photo_sgn":new Uint8Array([63,0,223,1,64,54]),"/mscp/ksc00":new Uint8Array([63,0,223,0,80,56]),"/mscp/ksc01":new Uint8Array([63,0,223,0,80,57])},l.Pin=function(){function t(e){c()(this,t),this.data=new ArrayBuffer(8);for(var n=new DataView(this.data),r=0;r<8;r++)n.setUint8(r,255);for(n.setUint8(0,32^e.length),r=0;r<e.length;r++){var i=Math.floor(1+r/2);r%2==0?n.setUint8(i,15&n.getUint8(i)^e[r]<<4):n.setUint8(i,240&n.getUint8(i)^e[r])}}return h()(t,[{key:"encode",value:function(){return this.data}}]),t}(),l.APDU_CLASS=128,l.INS_GET_CARD_DATA=228,l.CERT={AUTH:0,SIGN:1,CA:2,ROOTCA:3}},lRUW:function(t,e,n){"use strict";var r=n("Xxa5"),i=n.n(r),a=n("exGp"),s=n.n(a),o=n("Zrlr"),c=n.n(o),u=n("wxAW"),h=n.n(u),d=n("GEgs"),f=function(){function t(e){c()(this,t),this.interfaceNumber=null,this.device=e,this.ctx={},this.ctx.bSeq=0,this.TYPE_TO_CLASS={80:t.NotifySlotChange,81:t.HardwareError},this.events={}}return h()(t,[{key:"on",value:function(t,e){this.events[t]=e}},{key:"init",value:function(){function t(){return e.apply(this,arguments)}var e=s()(i.a.mark(function t(){var e,n,r,a,s,o,c,u,h,d,f,l,p,g,S,v=this;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log(this.device),e=0;case 2:if(!(e<this.device.configurations.length)){t.next=62;break}n=this.device.configurations[e],r=0;case 5:if(!(r<n.interfaces.length)){t.next=59;break}a=n.interfaces[r],s=0;case 8:if(!(s<a.alternates.length)){t.next=56;break}if(o=a.alternates[s],11!==o.interfaceClass){t.next=53;break}return t.prev=11,t.next=14,this.device.reset();case 14:return t.next=16,this.device.selectConfiguration(n.configurationValue);case 16:return t.next=18,this.device.claimInterface(a.interfaceNumber);case 18:return this.interfaceNumber=a.interfaceNumber,t.prev=19,t.next=22,this.device.selectAlternateInterface(a.interfaceNumber,o.alternateSetting);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(19),console.log("Failed to set interface setting",a.interfaceNumber,o.alternateSetting),console.log("Ignore and see");case 28:return c={requestType:"standard",recipient:"device",request:6,value:512,index:n.configurationValue},t.next=31,this.device.controlTransferOut(c);case 31:return t.next=33,this.device.controlTransferIn(c,100);case 33:for(u=t.sent,h=u.data.getUint16(2,!0),d=0,f=0,l=0;33!==d&&l+f<h;)l+=f,f=u.data.getUint8(l),d=u.data.getUint8(l+1);if(33===d){t.next=41;break}throw new Error("No CCID descriptor found");case 41:if(this.parseDescriptor(u.data.buffer.slice(l,l+f)),2===(p=(16711680&this.ctx.desc.features)>>16)||4===p){t.next=45;break}throw new Error("Device not supported");case 45:for(g=0;g<o.endpoints.length;g++)S=o.endpoints[g],"in"===S.direction&&"interrupt"===S.type&&(this.interruptEndpoint=S.endpointNumber,this.device.transferIn(this.interruptEndpoint,5).then(function(t){return v.onInterrupt(t)}).catch(function(t){return console.log(t)})),"in"===S.direction&&"bulk"===S.type&&(this.bulkInEndpoint=S.endpointNumber),"out"===S.direction&&"bulk"===S.type&&(this.bulkOutEndpoint=S.endpointNumber);t.next=52;break;case 48:throw t.prev=48,t.t1=t.catch(11),this.exit(),t.t1;case 52:return t.abrupt("return");case 53:s++,t.next=8;break;case 56:r++,t.next=5;break;case 59:e++,t.next=2;break;case 62:throw new Error("No smartcard interface found");case 63:case"end":return t.stop()}},t,this,[[11,48],[19,24]])}));return t}()},{key:"exit",value:function(){function t(){return e.apply(this,arguments)}var e=s()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.interfaceNumber){t.next=4;break}return t.next=3,this.device.releaseInterface(this.interfaceNumber);case 3:this.interfaceNumber=null;case 4:this.device=null;case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"parseDescriptor",value:function(t){var e=new DataView(t),n={};n.length=e.getUint8(0),n.descriptorType=e.getUint8(1),n.cdCCID=e.getUint16(2,!0),n.maxSlotIndex=e.getUint8(4),n.voltageSupport=e.getUint8(5),n.protocols=e.getUint32(6,!0),n.defaultClock=e.getUint32(10,!0),n.maximumClock=e.getUint32(14,!0),n.numClockSupported=e.getUint8(18),n.dataRate=e.getUint32(19,!0),n.maxDataRate=e.getUint32(23,!0),n.numDataRatesSupported=e.getUint8(27),n.maxIFSD=e.getUint32(28,!0),n.synchProtocols=e.getUint32(32,!0),n.mechanical=e.getUint32(36,!0),n.features=e.getUint32(40,!0),n.maxCCIDMessageLength=e.getUint32(44,!0),n.classGetResponse=e.getUint8(48),n.classEnvelope=e.getUint8(49),n.lcdLayout=e.getUint16(50),n.PINSupport=e.getUint8(52),n.maxCCIDBusySlots=e.getUint8(53),this.ctx.desc=n}},{key:"onInterrupt",value:function(t){var e=this;if(null!=this.device){var n=this.read(t.data);if(n&&80===n.messageType)for(var r=0;r<this.ctx.desc.maxSlotIndex+1;r++){var i=(n.slotICCState&1<<2*r)>>2*r,a=(n.slotICCState&2<<2*r)>>2*r+1;a&&(i&&this.events["card-inserted"]?this.iccPowerOn(r).then(function(){e.events["card-inserted"](r)}):!i&&this.events["card-removed"]&&this.events["card-removed"](r))}this.device.transferIn(this.interruptEndpoint,5).then(function(t){return e.onInterrupt(t)}).catch(function(t){return console.log(t)})}}},{key:"read",value:function(t){var e=t.getUint8();if(e in this.TYPE_TO_CLASS){return new this.TYPE_TO_CLASS[e](t,this.ctx)}return null}},{key:"getParameters",value:function(){function e(t){return n.apply(this,arguments)}var n=s()(i.a.mark(function e(n){var r,a,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=new t.GetParameters(n,this.ctx),a=r.serialize(),e.next=4,this.device.transferOut(this.bulkOutEndpoint,a);case 4:return e.next=6,this.device.transferIn(this.bulkInEndpoint,t.Parameters.MAX_LENGTH);case 6:return s=e.sent,r=new t.Parameters(s.data,this.ctx),e.abrupt("return",r);case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"xfrBlock",value:function(){function e(t,e){return n.apply(this,arguments)}var n=s()(i.a.mark(function e(n,r){var a,s,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.isExtended()){e.next=2;break}throw new Error("Extended APDU not supported");case 2:return a=new t.XfrBlock(n,r,this.ctx),s=a.serialize(),e.next=6,this.device.transferOut(this.bulkOutEndpoint,s);case 6:return o=e.sent,e.next=9,this.device.transferIn(this.bulkInEndpoint,t.DataBlock.MAX_LENGTH);case 9:return o=e.sent,a=new t.DataBlock(o.data,this.ctx),e.abrupt("return",a);case 12:case"end":return e.stop()}},e,this)}));return e}()},{key:"iccPowerOn",value:function(){function e(t){return n.apply(this,arguments)}var n=s()(i.a.mark(function e(n){var r,a,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=new t.IccPowerOn(n,this.ctx),a=r.serialize(),e.next=4,this.device.transferOut(this.bulkOutEndpoint,a);case 4:return s=e.sent,e.next=7,this.device.transferIn(this.bulkInEndpoint,t.DataBlock.MAX_LENGTH);case 7:return s=e.sent,r=new t.DataBlock(s.data,this.ctx),e.abrupt("return",r);case 10:case"end":return e.stop()}},e,this)}));return e}()},{key:"sendApdu",value:function(){function t(t,n,r,i,a,s,o){return e.apply(this,arguments)}var e=s()(i.a.mark(function t(e,n,r,a,s,o,c){var u,h;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u=new d.a(n,r,a,s,o,c),t.next=3,this.xfrBlock(e,u);case 3:return h=t.sent,u.decodeResult(h.abData),t.abrupt("return",u);case 6:case"end":return t.stop()}},t,this)}));return t}()}]),t}();e.a=f,f.NotifySlotChange=function(){function t(e,n){if(c()(this,t),this.messageType=e.getUint8(0),80!==this.messageType)throw new Error("Invalid message type");this.slotICCState=0;for(var r=Math.floor((2*(n.desc.maxSlotIndex+1)+7)/8),i=0;i<r;i++)this.slotICCState=this.slotICCState^e.getUint8(1+i)<<8*i}return t}(),f.HardwareError=function(){function t(e,n){if(c()(this,t),this.messageType=e.getUint8(0),81!==this.messageType)throw new Error("Invalid message type");this.slot=e.getUint8(1),this.seq=e.getUint8(2),this.hardwareErrorCode=e.getUint8(3)}return t}(),f.Parameters=function(){function t(e,n){if(c()(this,t),this.bMessageType=e.getUint8(0),130!==this.bMessageType)throw new Error("Invalid message type");this.dwLength=e.getUint32(1,!0),this.bSlot=e.getUint8(5),this.bSeq=e.getUint8(6),this.bStatus=e.getUint8(7),this.bError=e.getUint8(8),this.bProtocolNum=e.getUint8(9),0===this.bProtocolNum?(this.bmFindexDindex=e.getUint8(10),this.bmTCCKST0=e.getUint8(11),this.bGuardTimeT0=e.getUint8(12),this.bWaitingIntegerT0=e.getUint8(13),this.bClockStop=e.getUint8(14)):1===this.bProtocolNum&&(this.bmFindexDindex=e.getUint8(10),this.bmTCCKST1=e.getUint8(11),this.bGuardTimeT1=e.getUint8(12),this.bWaitingIntegerT1=e.getUint8(13),this.bClockStop=e.getUint8(14),this.bIFSC=e.getUint8(15),this.bNadValue=e.getUint8(16))}return t}(),f.Parameters.MAX_LENGTH=17,f.DataBlock=function(){function t(e,n){if(c()(this,t),this.bMessageType=e.getUint8(0),128!==this.bMessageType)throw new Error("Invalid message type");this.dwLength=e.getUint32(1,!0),this.bSlot=e.getUint8(5),this.bSeq=e.getUint8(6),this.bStatus=e.getUint8(7),this.bError=e.getUint8(8),this.bChainParameter=e.getUint8(8),this.abData=e.buffer.slice(10,10+this.dwLength)}return t}(),f.DataBlock.MAX_LENGTH=267,f.GetParameters=function(){function t(e,n){c()(this,t),this.bMessageType=108,this.dwLength=0,this.bSlot=e,this.bSeq=n.bSeq,this.abRFU=0}return h()(t,[{key:"serialize",value:function(){var t=new DataView(new ArrayBuffer(10));return t.setUint8(0,this.bMessageType),t.setUint32(1,this.dwLength,!0),t.setUint8(5,this.bSlot),t.setUint8(6,this.bSeq),t.setUint16(7,this.abRFU,!0),t.setUint8(9,this.abRFU),t.buffer}}]),t}(),f.XfrBlock=function(){function t(e,n,r){c()(this,t);var i=n.getCommandAPDU();this.bMessageType=111,this.dwLength=i.byteLength,this.bSlot=e,this.bSeq=r.seq++,this.bBWI=10,this.wLevelParameter=0,this.abData=i}return h()(t,[{key:"serialize",value:function(){var t=new DataView(new ArrayBuffer(10+this.abData.byteLength));t.setUint8(0,this.bMessageType),t.setUint32(1,this.dwLength,!0),t.setUint8(5,this.dwSlot),t.setUint8(6,this.bSeq),t.setUint8(7,this.bBWI),t.setUint16(8,this.wLevelParameter,!0);for(var e=10,n=new DataView(this.abData),r=0;r<n.byteLength;r++)t.setUint8(e++,n.getUint8(r));return t.buffer}}]),t}(),f.IccPowerOn=function(){function t(e,n){c()(this,t),this.bMessageType=98,this.dwLength=0,this.bSlot=e,this.bSeq=n.seq++,this.bPowerSelect=0,this.abRFU=0}return h()(t,[{key:"serialize",value:function(){var t=new DataView(new ArrayBuffer(10));return t.setUint8(0,this.bMessageType),t.setUint32(1,this.dwLength,!0),t.setUint8(5,this.bSlot),t.setUint8(6,this.bSeq),t.setUint8(7,this.bPowerSelect),t.setUint16(8,this.abRFU,!0),t.buffer}}]),t}()},pMZz:function(t,e,n){"use strict";var r=n("aUe4"),i=n("qe5d"),a=(n.n(i),n("/o5o"));e.a={components:{modal:a.a},name:"hello",data:function(){return{eid:null,photo:null,name:null,progress:0,connected:!1,modalTitle:"Select a card reader"}},created:function(){console.log("created")},computed:{idPhotoUrl:function(){if(this.photo){return(window.URL||window.webkitURL).createObjectURL(this.photo)}return""}},methods:{onConnect:function(){var t=this;this.eid&&(this.eid.exit(),this.eid=null),console.log(navigator),navigator.usb.requestDevice({filters:[{vendorId:6724}]}).then(function(e){t.eid=new r.a(e),t.eid.on("card-inserted",t.onCardInserted),t.eid.init().then(function(){t.modalTitle="En attente de carte eID"}).catch(function(e){throw t.eid=null,e})})},onCardInserted:function(){var t=this;this.modalTitle="Lecture des données...",this.progress=0,this.eid.idGetId().then(function(e){t.ID=e,t.progress+=25}).then(function(){return t.eid.idGetPhoto()}).then(function(e){t.progress+=25}).then(function(){return t.eid.getCertificate(r.a.CERT.SIGN)}).then(function(e){t.signCert=i.fromBER(e),t.progress+=25}).then(function(){return t.eid.getCertificate(r.a.CERT.AUTH)}).then(function(e){t.authCert=i.fromBER(e),t.progress+=25}).then(function(){console.log("All loaded"),t.progress=100,t.connected=!0})}},watch:{}}},qSdX:function(t,e,n){"use strict";function r(t){n("61iF")}var i=n("pMZz"),a=n("9Mdc"),s=n("VU/8"),o=r,c=s(i.a,a.a,o,"data-v-4932c3c1",null);e.a=c.exports},s17J:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a={render:r,staticRenderFns:i};e.a=a},sEU2:function(t,e){},xJD8:function(t,e,n){"use strict";e.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.6047c1bb18a9e35e6694.js.map