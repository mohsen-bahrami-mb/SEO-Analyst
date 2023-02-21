// ++ Content Calculations
const DOMElement: HTMLElement = document.documentElement;

export const LinkArray: RegExpMatchArray | null = DOMElement.innerHTML.match(/\b(href|src)\=[\'\"](http|ftp|smtp|pop|udp|ip|tcp).*?[\'\"]/g);

export const videoTagArry: HTMLCollectionOf<HTMLVideoElement> = DOMElement.getElementsByTagName("video");

export const ausioTagArry: HTMLCollectionOf<HTMLAudioElement> = DOMElement.getElementsByTagName("audio");

export const imgTagArry: HTMLCollectionOf<HTMLImageElement> = DOMElement.getElementsByTagName("img");

export const pictureTagArry: HTMLCollectionOf<HTMLPictureElement> = DOMElement.getElementsByTagName("picture");