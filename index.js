
//ffmpeg -i week1.mp4 -filter_complex "color=c=0x000000:r=1:s=8x16,format=rgb24[b];color=c=0xa1b234:r=1:s=8x16,format=rgb24[w];[b][w]hstack=2[bw];[0:V:0][bw]paletteuse" output.mp4

window.onload = ()=>{
  alert("TODO: two layers of dithered video, one for booth, one for harvest")
  harvestPreRender();
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