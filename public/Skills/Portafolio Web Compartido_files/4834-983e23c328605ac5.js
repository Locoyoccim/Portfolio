"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4834],{20055:function(e,t,n){n.d(t,{I:function(){return i},o:function(){return a}});let r=["xlsx","pptx","docx"],o={"application/vnd.google-apps.spreadsheet":"xlsx","application/vnd.google-apps.presentation":"pptx","application/vnd.google-apps.document":"docx"};function i(e){var t;return e&&null!==(t=o[e.split(";")[0]])&&void 0!==t?t:null}function a(e){return e&&r.includes(e)?e:null}},61457:function(e,t,n){n.d(t,{AJ:function(){return a},XX:function(){return u},xA:function(){return l}});var r,o,i=n(20055);let a=((r={})[r.None=0]="None",r[r.Multimodal=1]="Multimodal",r[r.Interpreter=2]="Interpreter",r[r.Retrieval=3]="Retrieval",r[r.ContextConnector=4]="ContextConnector",r[r.ProfilePicture=5]="ProfilePicture",r);function l(e){if(e)return{contextConnector:e.context_connector,sourceUrl:e.source_url,syntheticExtension:(0,i.o)(e.synthetic_extension),type:e.type}}let u=((o={}).Uploading="uploading",o.Ready="ready",o)},58543:function(e,t,n){n.d(t,{$H:function(){return g},$p:function(){return b},Ad:function(){return B},B:function(){return A},BV:function(){return I},CO:function(){return T},Iy:function(){return p},KL:function(){return k},L8:function(){return m},O6:function(){return x},Tu:function(){return P},VF:function(){return h},Vm:function(){return L},WI:function(){return N},YN:function(){return w},Z8:function(){return F},Zp:function(){return U},_0:function(){return E},kr:function(){return v},p0:function(){return C},s1:function(){return _},ww:function(){return y},xs:function(){return M}});var r=n(21904),o=n(85734),i=n(93223),a=n(50406),l=n(44529),u=n(92379),s=n(26123),d=n(25940),c=n(94982),f=n(61457);function p(e){return e.replace("file-service://","")}function m(e){return"file-service://"+e}function g(e){return e.startsWith("file-service://")}function v(e,t,n){switch(t){case"file_zero_bytes":return e.formatMessage(j.fileZeroBytes,n);case"file_too_large":return e.formatMessage(j.fileTooLarge,n);case"over_user_quota":return e.formatMessage(j.overUserQuota,n);case"file_not_found":case"file_expired":return e.formatMessage(j.fileNotFound,n);case"file_timed_out":return e.formatMessage(j.fileTimedOut,n);case"ace_pod_expired":return e.formatMessage(j.codeInterpreterSessionTimeout,n);case"permission_error":return e.formatMessage(j.permissionError,n);case"default_upload_error":case"file_rejected":return e.formatMessage(j.defaultCreateEntryError,n);case"default_download_link_error":return e.formatMessage(j.defaultDownloadLinkError,n);case"file_empty":return e.formatMessage(j.fileEmpty,n);case"too_many_tokens":return e.formatMessage(j.fileTooManyTokens,n);case"file_encrypted":return e.formatMessage(j.fileEncrypted,n);case"file_corrupted":return e.formatMessage(j.fileCorrupted,n);case"failed_upload_to_blobstore":return e.formatMessage(j.failedUploadToBlobStore,n);default:return e.formatMessage(j.unknownError)}}function h(){let e=(0,s.Z)();return(0,u.useCallback)((t,n)=>v(e,t,n),[e])}function x(){let{session:e}=(0,a.kP)(),t=(0,s.Z)();return async(n,o)=>{if(null==e)return c.m.danger(t.formatMessage(j.fileDownloadFailed)),!1;try{var a;let e=await i.Z.getFileDownloadLink(n);if(e.status!==r.KF.Success)throw Error("File is not ready to download: "+JSON.stringify(e));let t=null===(a=e.metadata)||void 0===a||null===(a=a.context_connector)||void 0===a?void 0:a.url;if(null!=t)window.open(t,"_blank");else{let t=e.download_url,n=document.createElement("a");n.href=t,n.download=o,n.click(),window.open(t,"_blank")}}catch(e){return c.m.danger(t.formatMessage(j.fileDownloadFailed)),!1}return!0}}function y(e,t){if((null==t?void 0:t.kind)===o.OL.GizmoInteraction||(null==t?void 0:t.kind)===o.OL.GizmoTest){var n;return null===(n=t.gizmo)||void 0===n?void 0:n.product_features}return null==e?void 0:e.product_features}function w(e,t){var n,o,i,a;let l=y(e,t);return(null==l||null===(n=l.attachments)||void 0===n?void 0:n.type)===r.Cd.CodeInterpreter?f.AJ.Interpreter:(null==l||null===(o=l.attachments)||void 0===o?void 0:o.type)===r.Cd.Multimodal?f.AJ.Multimodal:(null==l||null===(i=l.attachments)||void 0===i?void 0:i.type)===r.Cd.Retrieval?f.AJ.Retrieval:(null==l||null===(a=l.attachments)||void 0===a?void 0:a.type)===r.Cd.ContextConnector?f.AJ.ContextConnector:f.AJ.None}function _(e){var t;let n=null===(t=e.split(".").pop())||void 0===t?void 0:t.toLowerCase();return({md:"text/markdown",java:"text/x-java",py:"text/x-script.python",c:"text/x-c",cpp:"text/x-c++",h:"text/x-c++",php:"text/x-php",rb:"text/x-ruby",tex:"application/x-latext",ts:"text/x-typescript",cs:"text/x-csharp"})[null!=n?n:""]||""}function M(e,t,n,r,o){if(null==o)return e;let i=_(t);i&&(n=i),r&&(n=function(e){switch(e){case"application/vnd.google-apps.spreadsheet":return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";case"application/vnd.google-apps.document":case"application/vnd.google-apps.presentation":return"text/plain";default:return e}}(n));let{accepted_mime_types:a,can_accept_all_mime_types:l}=o;return null!=a&&0!==a.length&&l?a.includes(n)?e:f.AJ.Interpreter:e}function E(e,t,n){var o,i,a;let l=""!==t?t:_(n),u=null==e||null===(o=e.product_features)||void 0===o?void 0:o.attachments;return null==u?void 0:null!==(i=u.accepted_mime_types)&&void 0!==i&&i.includes(l)?u.type:null!==(a=u.image_mime_types)&&void 0!==a&&a.includes(l)?r.Cd.Multimodal:r.Cd.CodeInterpreter}function U(e,t){var n,r;let o=y(e,t);return null!=o&&null!==(n=o.attachments)&&void 0!==n&&n.can_accept_all_mime_types?void 0:null==o||null===(r=o.attachments)||void 0===r?void 0:r.accepted_mime_types}function C(e,t){let n=y(e,t),{attachments:r}=null!=n?n:{};if(null!=r&&r.image_mime_types)return r.image_mime_types;if((null==r?void 0:r.type)==="multimodal"){var o;return null!==(o=r.accepted_mime_types)&&void 0!==o?o:k}return[]}let k=["image/png","image/jpeg","image/gif","image/webp"];function F(e){return(0,u.useMemo)(()=>{if(void 0===e)return{};let t={"image/jpeg":[".jpg",".jpeg"],"image/svg+xml":[".svg"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[".pptx"]};return{accept:e.reduce((e,n)=>(n in t?e[n]=t[n]:n.includes("/")&&(e[n]=[".".concat(n.split("/")[1])]),e),{})}},[e])}function b(e){var t;return null===(t=e.split(".").pop())||void 0===t?void 0:t.toLowerCase()}function T(e){let t=b(e);return null!=t&&["jpg","jpeg","png","gif","webp"].includes(t)}function L(e){let t=b(e);return null!=t&&["xls","xlsx","csv"].includes(t)}function I(e){let t=b(e);return null!=t&&["xls","xlsx"].includes(t)}function P(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"fit";return new Promise((r,o)=>{let i=new FileReader;i.onerror=e=>{l.U.addError(Error("File reading has failed:",{cause:e})),o(Error("Failed to read the file."))},i.onload=i=>{let a=new Image;a.onerror=e=>{l.U.addError(Error("Image loading has failed:",{cause:e})),o(Error("Failed to load the image."))},a.onload=()=>{let i=document.createElement("canvas"),u,s=0,d=0;switch(n){case"fill":case"square":u=t/Math.min(a.width,a.height);break;case"fit":u=t/Math.max(a.width,a.height)}let c=a.width*u,f=a.height*u;"square"===n?(i.width=t,i.height=t,s=(t-c)/2,d=(t-f)/2):(i.width=c,i.height=f);let p=i.getContext("2d");if(null==p){l.U.addError("Canvas context creation failed. Your environment might not fully support HTML5 canvas."),o(Error("Failed to create canvas context."));return}p.drawImage(a,s,d,c,f);let m=e.type||"image/png";i.toBlob(t=>{t?r(new File([t],e.name,{type:m})):(l.U.addError("Blob creation failed. Blob is null."),o(Error("Failed to create blob from image data.")))},m)},null==i.target?(l.U.addError("Event target is null. Failed to load image."),o("Failed to load image.")):a.src=i.target.result},i.readAsDataURL(e)})}function N(e,t){return P(e,t,"square")}function A(e){var t,n;let r=null!==(t=e.name.split("/"))&&void 0!==t?t:[];return(null!==(n=r[r.length-1])&&void 0!==n?n:"").replace(/[-_]/g," ").split(".")[0]}function B(e,t){return t?e.slice(0,-t.length-1):e}let j=(0,d.vU)({defaultCreateEntryError:{id:"fileUpload.defaultCreateEntryError",defaultMessage:"Unable to upload {fileName}"},defaultDownloadLinkError:{id:"fileUpload.defaultDownloadLinkError",defaultMessage:"Failed to get upload status for {fileName}"},unknownError:{id:"fileUpload.unknownError",defaultMessage:"Unknown error occurred"},fileZeroBytes:{id:"fileUpload.fileZeroBytes",defaultMessage:"File is empty"},fileTooLarge:{id:"fileUpload.fileTooLarge",defaultMessage:"File is too large"},overUserQuota:{id:"fileUpload.overUserQuota",defaultMessage:"User quota exceeded"},fileNotFound:{id:"fileUpload.fileNotFound",defaultMessage:"File not found"},fileTimedOut:{id:"fileUpload.fileTimedOut",defaultMessage:"File upload timed out. Please try again."},fileEmpty:{id:"fileUpload.fileEmpty",defaultMessage:"No text could be extracted from this file."},fileTooManyTokens:{id:"fileUpload.fileTooManyTokens",defaultMessage:"This file contains too much text content. Please try again with a smaller file."},fileEncrypted:{id:"fileUpload.fileEncrypted",defaultMessage:"This file is encrypted/requires a password to access. Please try again with an unencrypted file."},fileCorrupted:{id:"fileUpload.fileCorrupted",defaultMessage:"This file is corrupted. Please ensure the file is not corrupted and try again."},codeInterpreterSessionTimeout:{id:"fileUpload.codeInterpreterSessionTimeout",defaultMessage:"Code interpreter session expired"},permissionError:{id:"fileUpload.permissionError",defaultMessage:"Missing permission to access file"},fileDownloadFailed:{id:"filesModal.fileDownloadFailed",defaultMessage:"File download failed. Please try again."},failedUploadToBlobStore:{id:"fileUpload.failedUploadToBlobStore",defaultMessage:"Failed upload to files.oaiusercontent.com. Please ensure your network settings allow access to this site or contact your network administrator."}})},27860:function(e,t,n){n.d(t,{AA:function(){return l},FH:function(){return d},J8:function(){return s},L7:function(){return a},SX:function(){return f},Uq:function(){return c},ZV:function(){return o},cy:function(){return i},xj:function(){return u}});var r=n(82823);function o(e,t){return t?"/g/".concat((0,r.kX)(t),"/c/").concat(e):"/c/".concat(e)}function i(){return"/gpts"}function a(){return"/gpts/mine"}function l(e){return e?"/gpts/editor/".concat(e):"/gpts/editor"}function u(e){let t=l(void 0);return null==e?t:l(e)}function s(e){return l(e)}function d(e){try{let t=new URL(e);return t.hostname=t.hostname.replace(/^(www\.|web\.|mbasic\.|mobile\.)(secure\.)?/,""),t.pathname="",[...t.searchParams.keys()].forEach(e=>t.searchParams.delete(e)),t.toString()}catch(t){return e}}function c(e){if(!e)return null;try{return new URL(e).hostname}catch(e){return null}}function f(e){let t=c(e);return t?t.replace(/^www\./,""):e}}}]);
//# sourceMappingURL=4834-983e23c328605ac5.js.map