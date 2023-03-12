import * as WritingCalc from "./calculation-models/writingCalculations";
import * as ContentCalc from "./calculation-models/contentCalculations";
import * as WindowCalc from "./calculation-models/windowCalculations";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
   if (request.message === 'getSEO') {
      var seoResult = {
         // set writing calculate to SEO tool
         SEOCountNumbersNum: WritingCalc.digitArray?.length.toString() ?? "0",
         SEOCountParagraphsNum: WritingCalc.paragraphArray?.length.toString() ?? "0",
         SEOCountWordsNum: WritingCalc.wordArray?.length.toString() ?? "0",
         // set content calculate to SEO tool
         SEOPageLoadTimeNum: WindowCalc.windowLoaded?.toString() ?? "0",
         SEOLinksNum: ContentCalc.linkArray?.length.toString() ?? "0",
         SEOImagesTagNum:
            ((ContentCalc.imgTagArry?.length ?? 0) + (ContentCalc.pictureTagArry?.length ?? 0)).toString(),
         SEOVideosTagNum: ContentCalc.videoTagArry.length.toString() ?? "0",
         SEOAudiosTagNum: ContentCalc.audioTagArry.length.toString() ?? "0"
         // WritingCalc, ContentCalc, WindowCalc 
      };
      sendResponse({ seoResult: seoResult });
   }
});
