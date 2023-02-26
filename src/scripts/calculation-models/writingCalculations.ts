// ++ Writing Calculations
const DOMElement: HTMLElement = document.documentElement;

export const charArray: string[] = DOMElement.innerText.split(/\s/);

export const digitArray: string[] = charArray.filter(arg => (/\d/g).test(arg));

export const wordArray: string[] = charArray.filter(arg => arg.length > 3 && (/\D/g).test(arg))
   .map(arg => arg.replace(/([\[\(\"\'\:\.\/\\\{\,\+\-\_\*\،\?\!\@\#\$\%\^\&\<\>/؟]*)(\w+)([\]\)\"\'\:\.\/\\\}\,\+\-\_\*\،\?\!\@\#\$\%\^\&\<\>/؟]*)/g, "$2"));

export const prepositionArray: string[] = charArray.filter(arg => arg.length <= 3 && (/\D/g).test(arg));

export const paragraphArray: string[] = DOMElement.innerText.split(/\n/)
   .filter(arg => (/(.+\.){3,}/g).test(arg) || (/(\s?\b\w+\b){150,}/g).test(arg));