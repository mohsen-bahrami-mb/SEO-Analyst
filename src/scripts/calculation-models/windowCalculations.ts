// ++ Window Calculations
export let windowLoaded: string;
const WINDOWTarget: Window & typeof globalThis = window;

WINDOWTarget.addEventListener("load", async (e) => {
   // start calculate, when page be loaded
   await setTimeLoaded<Event>(e);
});

async function setTimeLoaded<T extends { timeStamp: number }>(e: T): Promise<void> {
   // removing additional decimal & set time to variable
   let timeSplit = (e.timeStamp / 1000).toString().split(".");
   timeSplit[1] = timeSplit[1].replace(/(\b\d{1,3})(\d*)?/, "$1");
   let result = timeSplit.join(".");
   windowLoaded = result;
}