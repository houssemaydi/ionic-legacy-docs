/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import 'ionicons';


export namespace Components {

  interface IconExternal {}
  interface IconExternalAttributes extends StencilHTMLAttributes {}

  interface IonicBarChart {
    'color': string;
    'data': string;
  }
  interface IonicBarChartAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'data'?: string;
  }

  interface IonicButton {
    'color': string;
    'disabled': boolean;
    'type': string;
  }
  interface IonicButtonAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'disabled'?: boolean;
    'type'?: string;
  }

  interface IonicNewsletterSignup {
    'arrowMode': boolean;
    'buttonText': string;
    'darkMode': boolean;
    'kind': string;
    'lg': boolean;
    'placeholder': string;
  }
  interface IonicNewsletterSignupAttributes extends StencilHTMLAttributes {
    'arrowMode'?: boolean;
    'buttonText'?: string;
    'darkMode'?: boolean;
    'kind'?: string;
    'lg'?: boolean;
    'placeholder'?: string;
  }

  interface IonicSearch {
    'mobile': boolean;
  }
  interface IonicSearchAttributes extends StencilHTMLAttributes {
    'mobile'?: boolean;
  }

  interface IonicSlider {}
  interface IonicSliderAttributes extends StencilHTMLAttributes {}

  interface IonicSnapBar {}
  interface IonicSnapBarAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'IconExternal': Components.IconExternal;
    'IonicBarChart': Components.IonicBarChart;
    'IonicButton': Components.IonicButton;
    'IonicNewsletterSignup': Components.IonicNewsletterSignup;
    'IonicSearch': Components.IonicSearch;
    'IonicSlider': Components.IonicSlider;
    'IonicSnapBar': Components.IonicSnapBar;
  }

  interface StencilIntrinsicElements {
    'icon-external': Components.IconExternalAttributes;
    'ionic-bar-chart': Components.IonicBarChartAttributes;
    'ionic-button': Components.IonicButtonAttributes;
    'ionic-newsletter-signup': Components.IonicNewsletterSignupAttributes;
    'ionic-search': Components.IonicSearchAttributes;
    'ionic-slider': Components.IonicSliderAttributes;
    'ionic-snap-bar': Components.IonicSnapBarAttributes;
  }


  interface HTMLIconExternalElement extends Components.IconExternal, HTMLStencilElement {}
  var HTMLIconExternalElement: {
    prototype: HTMLIconExternalElement;
    new (): HTMLIconExternalElement;
  };

  interface HTMLIonicBarChartElement extends Components.IonicBarChart, HTMLStencilElement {}
  var HTMLIonicBarChartElement: {
    prototype: HTMLIonicBarChartElement;
    new (): HTMLIonicBarChartElement;
  };

  interface HTMLIonicButtonElement extends Components.IonicButton, HTMLStencilElement {}
  var HTMLIonicButtonElement: {
    prototype: HTMLIonicButtonElement;
    new (): HTMLIonicButtonElement;
  };

  interface HTMLIonicNewsletterSignupElement extends Components.IonicNewsletterSignup, HTMLStencilElement {}
  var HTMLIonicNewsletterSignupElement: {
    prototype: HTMLIonicNewsletterSignupElement;
    new (): HTMLIonicNewsletterSignupElement;
  };

  interface HTMLIonicSearchElement extends Components.IonicSearch, HTMLStencilElement {}
  var HTMLIonicSearchElement: {
    prototype: HTMLIonicSearchElement;
    new (): HTMLIonicSearchElement;
  };

  interface HTMLIonicSliderElement extends Components.IonicSlider, HTMLStencilElement {}
  var HTMLIonicSliderElement: {
    prototype: HTMLIonicSliderElement;
    new (): HTMLIonicSliderElement;
  };

  interface HTMLIonicSnapBarElement extends Components.IonicSnapBar, HTMLStencilElement {}
  var HTMLIonicSnapBarElement: {
    prototype: HTMLIonicSnapBarElement;
    new (): HTMLIonicSnapBarElement;
  };

  interface HTMLElementTagNameMap {
    'icon-external': HTMLIconExternalElement
    'ionic-bar-chart': HTMLIonicBarChartElement
    'ionic-button': HTMLIonicButtonElement
    'ionic-newsletter-signup': HTMLIonicNewsletterSignupElement
    'ionic-search': HTMLIonicSearchElement
    'ionic-slider': HTMLIonicSliderElement
    'ionic-snap-bar': HTMLIonicSnapBarElement
  }

  interface ElementTagNameMap {
    'icon-external': HTMLIconExternalElement;
    'ionic-bar-chart': HTMLIonicBarChartElement;
    'ionic-button': HTMLIonicButtonElement;
    'ionic-newsletter-signup': HTMLIonicNewsletterSignupElement;
    'ionic-search': HTMLIonicSearchElement;
    'ionic-slider': HTMLIonicSliderElement;
    'ionic-snap-bar': HTMLIonicSnapBarElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
