import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
  }
  
  .clr {
    clear: both;
  }
  
  img {
    border: 0px none;
  }
  
  body {
    -webkit-font-smoothing: subpixel-antialiased !important;
  }
  
  a:focus,
  a:active,
  button,
  input[type="reset"]::-moz-focus-inner,
  input[type="button"]::-moz-focus-inner,
  input[type="submit"]::-moz-focus-inner,
  select::-moz-focus-inner,
  input[type="file"] > input[type="button"]::-moz-focus-inner {
    outline: none !important;
  }
  
  li {
    list-style: none;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    background-color: transparent;
  }
  
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  nav,
  section {
    display: block;
  }
  
  audio,
  canvas,
  video {
    display: inline;
    *zoom: 1;
  }
  
  audio:not([controls]) {
    display: none;
  }
  
  html {
    font-size: 100%;
    height: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  
  a:focus {
    outline: 0;
  }
  
  a:hover,
  a:active {
    outline: 0;
  }
  
  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }
  
  sup {
    top: -0.5em;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  img {
    height: auto;
    border: 0;
    -ms-interpolation-mode: bicubic;
  }
  
  //vertical-align: middle;
  button,
  input,
  select,
  textarea {
    margin: 0;
    font-size: 100%;
    vertical-align: middle;
  }
  
  button,
  input {
    *overflow: visible;
    line-height: normal;
  }
  
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  
  button,
  input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    cursor: pointer;
    -webkit-appearance: button;
  }
  
  input[type="search"] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  
  textarea {
    overflow: auto;
    vertical-align: top;
  }
  
  .clearfix {
    *zoom: 1;
  }
  
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  
  .clearfix:after {
    clear: both;
  }
  
  input[type="submit"],
  input[type="search"],
  button[type="button"] {
    &:focus {
      outline: 0 none;
    }
  }
  
  a:hover {
    text-decoration: none !important;
  }
  
  *,
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  :focus {
    outline: none;
  }
    
  a {
    color: inherit;
    text-decoration: none;
  }
  
  body {
    color: #000000;
    font-family: "ProximaNova", sans-serif;
    background: #ffffff;
    padding: 0 !important;
    height: 100%;
    font-size: 14px;
  }
  
  #root {
    position: relative;
    min-width: 768px;
    height: 100%;
  }
  
  button {
    border: none;
    font-family: inherit;
  }
  
  /* Скролл бар */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    cursor: pointer;
    position: relative;
  }
  
  ::-webkit-scrollbar-thumb {
    opacity: 0.1;
    background-color: #dde2ec;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #1f367d;
  }
  
  input {
    font-family: ProximaNova, sans-serif;
  }
  
  img {
    max-width: 100%;
  }
`;


export default GlobalStyle;

