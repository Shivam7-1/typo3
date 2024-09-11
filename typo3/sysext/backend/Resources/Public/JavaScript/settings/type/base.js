/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
var __decorate=function(t,e,r,a){var o,l=arguments.length,n=l<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(l<3?o(n):l>3?o(e,r,n):o(e,r))||n);return l>3&&n&&Object.defineProperty(e,r,n),n};import{LitElement}from"lit";import{defaultConverter}from"@lit/reactive-element";import{property}from"lit/decorators.js";export const internals=Symbol("internals");const privateInternals=Symbol("privateInternals");export const getFormValue=Symbol("getFormValue");export const getFormState=Symbol("getFormState");export class BaseElement extends LitElement{constructor(){super(...arguments),this.readonly=!1}createRenderRoot(){return this}get[internals](){return this[privateInternals]||(this[privateInternals]=this.attachInternals()),this[privateInternals]}get form(){return this[internals].form}get labels(){return this[internals].labels}get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",t)}attributeChangedCallback(t,e,r){if("name"!==t&&"disabled"!==t)super.attributeChangedCallback(t,e,r);else{const r="disabled"===t?null!==e:e;this.requestUpdate(t,r)}}requestUpdate(t,e,r){super.requestUpdate(t,e,r),"value"===t&&(this.dispatchEvent(new CustomEvent("typo3:setting:changed",{detail:{value:this.value}})),this[internals].setFormValue(this[getFormValue](),this[getFormState]()))}formDisabledCallback(t){this.disabled=t}formResetCallback(){const t=this.value,e=this.getAttribute("value");this.attributeChangedCallback("value",this.valueToString(t),null),this.attributeChangedCallback("value",null,e)}formStateRestoreCallback(t){if("string"!=typeof t)throw new Error(`formStateRestoreCallback() needs to be implemented for <${this.localName}> for state type "${typeof t}"`);this.attributeChangedCallback("value",this.valueToString(this.value),null),this.attributeChangedCallback("value",null,t)}[getFormState](){return this[getFormValue]()}[getFormValue](){return this.valueToString(this.value)}valueToString(t){const e=this.constructor.getPropertyOptions("value");return("object"==typeof e.converter&&"function"==typeof e.converter?.toAttribute?e.converter.toAttribute:defaultConverter.toAttribute)(t,e.type)}}BaseElement.formAssociated=!0,__decorate([property({type:String})],BaseElement.prototype,"key",void 0),__decorate([property({type:String})],BaseElement.prototype,"formid",void 0),__decorate([property({type:Boolean})],BaseElement.prototype,"readonly",void 0),__decorate([property({noAccessor:!0})],BaseElement.prototype,"name",null),__decorate([property({type:Boolean,noAccessor:!0})],BaseElement.prototype,"disabled",null);