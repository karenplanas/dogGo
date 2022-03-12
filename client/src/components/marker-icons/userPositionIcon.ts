import { divIcon } from "leaflet";

export const userPositionIcon = divIcon({
  iconSize: [60, 60],
  html: `
  <svg width="60" height="60" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_5_8)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23 10.063C23 16.29 15.879 22.121 14.305 23.333C14.1252 23.4714 13.8748 23.4714 13.695 23.333C12.122 22.122 5 16.29 5 10.063C5 4.817 8.753 0.563 14 0.563C19.247 0.563 23 4.817 23 10.063Z" fill="#069099"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23 10.063C23 16.29 15.879 22.121 14.305 23.333C14.1252 23.4714 13.8748 23.4714 13.695 23.333C12.122 22.122 5 16.29 5 10.063C5 4.817 8.753 0.563 14 0.563C19.247 0.563 23 4.817 23 10.063Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 14.563C16.7614 14.563 19 12.3244 19 9.563C19 6.80158 16.7614 4.563 14 4.563C11.2386 4.563 9 6.80158 9 9.563C9 12.3244 11.2386 14.563 14 14.563Z" fill="#1EC1CB" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <filter id="filter0_d_5_8" x="0.5" y="0.0629997" width="27" height="31.8738" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_8"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_8" result="shape"/>
    </filter>
    </defs>
  </svg>
    `
});

