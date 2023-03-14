chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
   chrome.tabs.sendMessage(tabs[0].id!, { message: 'getSEO' }, function (response) {
      const result = response.seoResult;
      // define variables
      const expireTime: HTMLElement | null = document.getElementById('expire-time');
      const SEOCountNumbersNum: HTMLElement | null = document.getElementById('count-numbers-num');
      const SEOCountParagraphsNum: HTMLElement | null = document.getElementById('count-paragraphs-num');
      const SEOCountSentencesNum: HTMLElement | null = document.getElementById('count-sentences-num');
      const SEOCountWordsNum: HTMLElement | null = document.getElementById('count-words-num');
      const SEOPrepositionNum: HTMLElement | null = document.getElementById('count-preposition-num');
      const SEOPageLoadTimeNum: HTMLElement | null = document.getElementById('page-load-time-num');
      const SEOLinksNum: HTMLElement | null = document.getElementById('links-num');
      const SEOImagesTagNum: HTMLElement | null = document.getElementById('images-tag-num');
      const SEOVideosTagNum: HTMLElement | null = document.getElementById('videos-tag-num');
      const SEOAudiosTagNum: HTMLElement | null = document.getElementById('audios-tag-num');
      // set writing calculate to SEO tool
      SEOCountNumbersNum!.innerText = result.SEOCountNumbersNum;
      SEOCountParagraphsNum!.innerText = result.SEOCountParagraphsNum;
      SEOCountWordsNum!.innerText = result.SEOCountWordsNum;
      SEOPrepositionNum!.innerText = result.SEOPrepositionArray ?? "-";
      SEOCountSentencesNum!.innerText = result.SEOCountSentencesNum ?? "-";
      // set content calculate to SEO tool
      SEOPageLoadTimeNum!.innerText = result.SEOPageLoadTimeNum;
      SEOLinksNum!.innerText = result.SEOLinksNum;
      SEOImagesTagNum!.innerText = result.SEOImagesTagNum;
      SEOVideosTagNum!.innerText = result.SEOVideosTagNum;
      SEOAudiosTagNum!.innerText = result.SEOAudiosTagNum;
   });
});
