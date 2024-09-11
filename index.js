
const default_video = "videos/harvest_neutral_dither.mp4";
const default_exposition_booth ="images/source_images/harvest_expositionboothgameboy.png"
//ffmpeg -i week1.mp4 -filter_complex "color=c=0x000000:r=1:s=8x16,format=rgb24[b];color=c=0xa1b234:r=1:s=8x16,format=rgb24[w];[b][w]hstack=2[bw];[0:V:0][bw]paletteuse" output.mp4
//warning the above will make a much longer video than needed, it'll be still at the end
window.onload = ()=>{
  theHarvestWakes();
}

const theHarvestWakes  =()=>{
  const body = document.querySelector("body");
  const parent = createElementWithClassAndParent("div", body, "video-parent");
  const shop = createElementWithClassAndParent("div", parent, "shop");

  const video = createElementWithClassAndParent("video", shop);
  video.autoplay = true;
  video.loop = true;
  video.src = default_video;
  body.onclick = ()=>{
    if(video.paused){
      video.play();
    }
  }

  const img = createElementWithClassAndParent("img", shop);
  img.src=default_exposition_booth;


  const dialogParent = createElementWithClassAndParent("div", parent, "dialog-parent");

  const dialog = createElementWithClassAndParent("div", dialogParent, "god-dialog");
  const rant = createElementWithClassAndParent("p", dialog, "inner-dialog");
  rant.innerHTML = "What am I the god of? What can I help you with?";

  const buttonHolder = createElementWithClassAndParent("div", dialog, "god-dialog-button-holder");
  const form = createElementWithClassAndParent("form", buttonHolder, "pray-to-your-unresponsive-god");

  const option1 = createElementWithClassAndParent("input", form, "pray-to-your-unresponsive-god");
  option1.focus();
  option1.placeholder = "Pray to the Harvest?";
  const button = createElementWithClassAndParent("button", form, "option");
  button.innerText = "Submit";
  button.type = "submit";
  form.onsubmit = (e) => {
    alert("!!! todo submit to HB")
  }

}

/*
  renders an image lightly breathing so i can take a video screenshot of it
  then dither it
*/
const harvestPreRender = (img)=>{
  //layered-image-container .god
  const ele = createElementWithClassAndParent("img",document.querySelector(".layered-image-container"),"god");
  ele.src = "images/source_images/rested_harvest_gameboy.png"
}