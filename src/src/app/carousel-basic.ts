import { Component } from '@angular/core';

@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})
export class NgbdCarouselBasic {
  images = [1, 2, 3].map(() => `https://i.imgur.com/3VFThE0.gif?random&t=${Math.random()}`);
  images2 = [1, 2, 3].map(() => `https://www.laguiadelvaron.com/wp-content/uploads/2016/07/tumblr.com-tumblr_o4m7qhEumc1v4u49oo1_500.gif?random&t=${Math.random()}`);
  images3 = [1, 2, 3].map(() => `https://giffiles.alphacoders.com/899/89957.gif?random&t=${Math.random()}`); images4 = [1, 2, 3].map(() => `https://media.giphy.com/media/NvHeuMnxXzJS/giphy.gif?random&t=${Math.random()}`);
  images5 = [1, 2, 3].map(() => `https://media.giphy.com/media/Gac5lzgUbciZy/giphy.gif?random&t=${Math.random()}`);
}
