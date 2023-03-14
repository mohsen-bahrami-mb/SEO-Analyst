// ++ Writing Calculations
const DOMElement: HTMLElement = document.documentElement;

const beforeMark = /[\[\(\"\'\:\.\/\\\{\,\+\-\_\*\،\?\!\@\#\$\%\^\&\<\>\؟]*/g
const afterMark = /[\]\)\"\'\:\.\/\\\}\,\+\-\_\*\،\?\!\@\#\$\%\^\&\<\>\؟]*/g

export const charArray: string[] = DOMElement.innerText.split(/\s/)
   .map(arg => arg.replace(/([\[\(\"\'\:\.\/\\\{\,\+\-\_\*\،\?\!\@\#\$\%\^\&\<\>\؟]*)(\w+)([\]\)\"\'\:\.\/\\\}\,\+\-\_\*\،\?\!\@\#\$\%\^\&\<\>\؟]*)/g, "$2"))
   .filter(arg => (arg != "") && (arg != "-") && (arg != "/") && (beforeMark.test(arg)) && (afterMark.test(arg)));

export const digitArray: string[] = charArray.filter(arg => (/\d/g).test(arg));

export const wordArray: string[] = charArray.filter(arg => arg.length > 3 && (/\D/g).test(arg));

export const paragraphArray: string[] = DOMElement.innerText.split(/\n/).filter(arg => (/(.+\.){3,}.*/g).test(arg));