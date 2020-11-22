import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-galeri',
  templateUrl: './galeri.page.html',
  styleUrls: ['./galeri.page.scss'],
})
export class GaleriPage implements OnInit {
  safeUrl;
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/MezdwVCQMrc')
  }

}
