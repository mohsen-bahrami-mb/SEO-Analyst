import * as WritingCalc from "./calculation-models/writingCalculations";
import * as ContentCalc from "./calculation-models/contentCalculations";

const WINDOWTarget: Window & typeof globalThis = window;
let windowLoaded: string;

WINDOWTarget.addEventListener("load", async (e) => {
   // start calculate, when page be loaded
   await setTimeLoaded(e);
   SEOCalculate();
});

async function setTimeLoaded(e: Event) {
   // removing additional decimal & set time to variable
   let timeSplit = (e.timeStamp / 1000).toString().split(".");
   timeSplit[1] = timeSplit[1].replace(/(\b\d{1,3})(\d*)?/, "$1");
   let result = timeSplit.join(".");
   windowLoaded = result;
}

function SEOCalculate() {
   // define variables
   const SEOCountNumbersNum: HTMLElement | null = document.getElementById('count-numbers-num');
   const SEOCountParagraphsNum: HTMLElement | null = document.getElementById('count-paragraphs-num');
   const SEOCountWordsNum: HTMLElement | null = document.getElementById('count-words-num');
   const SEOPageLoadTimeNum: HTMLElement | null = document.getElementById('page-load-time-num');
   const SEOLinksNum: HTMLElement | null = document.getElementById('links-num');
   const SEOImagesTagNum: HTMLElement | null = document.getElementById('images-tag-num');
   const SEOVideosTagNum: HTMLElement | null = document.getElementById('videos-tag-num');
   const SEOAudiosTagNum: HTMLElement | null = document.getElementById('audios-tag-num');
   // set writing calculate to SEO tool
   SEOCountNumbersNum!.innerText = WritingCalc.digitArray.length.toString() ?? "0";
   SEOCountParagraphsNum!.innerText = WritingCalc.paragraphArray.length.toString() ?? "0";
   SEOCountWordsNum!.innerText = WritingCalc.wordArray.length.toString() ?? "0";
   // set content calculate to SEO tool
   SEOPageLoadTimeNum!.innerText = windowLoaded.toString();
   SEOLinksNum!.innerText = ContentCalc.linkArray?.length.toString() ?? "0";
   SEOImagesTagNum!.innerText =
      (ContentCalc.imgTagArry.length + ContentCalc.pictureTagArry.length).toString() ?? "0";
   SEOVideosTagNum!.innerText = ContentCalc.videoTagArry.length.toString();
   SEOAudiosTagNum!.innerText = ContentCalc.audioTagArry.length.toString();
}