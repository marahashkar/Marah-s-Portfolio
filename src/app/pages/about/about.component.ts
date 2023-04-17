import { CountUpOptions } from 'countup.js';
import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Lightbox } from 'ngx-lightbox';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  endVal = 10;
  endVal2 = 2000;
  opts: CountUpOptions = {
    enableScrollSpy: true,
  };
  public _albums: any = [{
    'src1': "assets/images/about-1.jpg"
  },
  { 'src2': "assets/images/about-1.jpg" }

  ];
  constructor(private wowService: NgwWowService,
    private _lightbox: Lightbox) {
    this.wowService.init();
    // for (let i = 1; i <= 4; i++) {
    //   const src = 'assets/images/project-' + i + '.jpg'; const caption = 'Image ' + i + ' caption here';
    //   const thumb = 'assets/images/project-' + i + '-thumb.jpg';
    //   const album = { src: src, caption: caption, thumb: thumb };
    //   this._albums.push(album);
    // }
  }
  ngOnInit(): void {
  }
  open(index: number): void { // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void { // close lightbox programmatically
    this._lightbox.close();
  }
}
