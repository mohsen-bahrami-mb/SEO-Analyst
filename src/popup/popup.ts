
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
   chrome.tabs.sendMessage(tabs[0].id!, { message: 'getSEO' }, function (response) {
      const result = response.seoResult;
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
      SEOCountNumbersNum!.innerText = result.SEOCountNumbersNum;
      SEOCountParagraphsNum!.innerText = result.SEOCountParagraphsNum;
      SEOCountWordsNum!.innerText = result.SEOCountWordsNum;
      // set content calculate to SEO tool
      SEOPageLoadTimeNum!.innerText = result.SEOPageLoadTimeNum;
      SEOLinksNum!.innerText = result.SEOLinksNum;
      SEOImagesTagNum!.innerText = result.SEOImagesTagNum;
      SEOVideosTagNum!.innerText = result.SEOVideosTagNum;
      SEOAudiosTagNum!.innerText = result.SEOAudiosTagNum;
   });
});
