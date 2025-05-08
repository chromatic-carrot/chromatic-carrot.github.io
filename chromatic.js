function makeSoilTile() {
    let logo_elem = document.getElementById("logo")
    let collection = document.getElementById("image_collection")
    
    // calculate Logo's position
    const targetRect = logo_elem.getBoundingClientRect()
    
    const relativeRight = targetRect.right
    const relativeTop = targetRect.bottom
    
    const img_width = 480;
    const scale = targetRect.width / img_width;
    
    
    const left_nr = Math.ceil((window.innerWidth - targetRect.width)/2/targetRect.width)

    let new_images= [];
    // first add right images
    for(let i = 0; i < left_nr; i++) {
      let img_1 = document.createElement('img');
      img_1.setAttribute('src', 'images/soil_top_seamless_270.png');
      img_1.style=`width:${targetRect.width};`;
      new_images.push(img_1)

      img_1.classList.add("soil_tile")
      img_1.style.left = `${relativeRight -1 + i*targetRect.width}px` // right next to it
      img_1.style.top = `${relativeTop - scale * 122}px`
    }
    // now on the left
    for(let i = 0; i < left_nr; i++) {
      let img_1 = document.createElement('img');
      img_1.setAttribute('src', 'images/soil_top_seamless_270.png');
      img_1.style=`width:${targetRect.width};`;
      new_images.push(img_1)

      img_1.classList.add("soil_tile")
      img_1.style.left = `${targetRect.left + 1 - (1+i)*targetRect.width}px` // right next to it
      img_1.style.top = `${relativeTop - scale * 122}px`
    }
    // now the bottom row
    for(let i = 0; i < left_nr; i++) {
        let img_1 = document.createElement('img');
        img_1.setAttribute('src', 'images/soil_seamless_270.png');
        img_1.style=`width:${targetRect.width};`;
        new_images.push(img_1)
  
        img_1.classList.add("soil_tile")
        img_1.style.left = `${targetRect.left + 1 - (1+i)*targetRect.width}px` // right next to it
        img_1.style.top = `${relativeTop-1}px`  
    }
    for(let i = 0; i < left_nr+1; i++) {
        let img_1 = document.createElement('img');
        img_1.setAttribute('src', 'images/soil_seamless_270.png');
        img_1.style=`width:${targetRect.width};`;
        new_images.push(img_1)
  
        img_1.classList.add("soil_tile")
        img_1.style.left = `${relativeRight -1 + (i-1)*targetRect.width}px` // right next to it
        img_1.style.top = `${relativeTop-1}px`  
    }
    collection.replaceChildren(...new_images);

    let not_button = document.getElementById("not_button");
    not_button.style.height =`${scale * 122}px`
}

document.addEventListener(
  "DOMContentLoaded",
  makeSoilTile,
  false,
)