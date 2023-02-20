// ++ Writing Calculations
const DOMElement: HTMLElement = document.documentElement;

export const charArray: string[] = DOMElement.innerText.split(/\s/);

export const paragraphArray: string[] = DOMElement.innerText.split(/\n/)
   .filter(arg => (/(.+\.){3,}/).test(arg) || (/(\s?\b\w+\b){150,}/).test(arg));

export const wordArray: string[] = charArray.filter(arg => arg.length > 3 && (/\D/).test(arg));

export const digitArray: string[] = charArray.filter(arg => (/\d/).test(arg));

export const prepositionArray: string[] = charArray.filter(arg => arg.length <= 3 && (/\D/).test(arg));