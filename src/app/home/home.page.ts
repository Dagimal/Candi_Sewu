import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };

  constructor(
    private alertCtrl: AlertController 
  ) {}

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Tentang',
      subHeader: 'Aplikasi Candi Sewu',
      message: 'Aplikasi Ini membutuhkan akses internet untuk dapat digunakan secara optimal. <br><br><b>Developer :</b><br> Daffa Gifari Akmal, <br>Thoriq Daffa Fakhrurozi<br><br><b>Terimakasih : </b><br>Allah SWT <br><br> https://github.com/habibalmawali/UI-Challenges/tree/master/ionic-restrant-app <br><br> Icon by https://www.flaticon.com/',
      buttons: ['OK']
    });

    await alert.present();
  }

}
