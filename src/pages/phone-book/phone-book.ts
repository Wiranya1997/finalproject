import { PhoneBookDetailPage } from './../phone-book-detail/phone-book-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  //อาเรย์ของออปเจค
  contactArray = [
    {name: 'nana', telephone: '0950159034', imageUrl: 'assets/imgs/4.jpg' }
    ,{name: 'nanno', telephone: '0612542205', imageUrl: 'assets/imgs/5.jpg' }
    ,{name: 'neko', telephone: '0980596914', imageUrl: 'assets/imgs/8.jpg' }
    ,{name: 'nuna', telephone: '0994813642', imageUrl: 'assets/imgs/7.jpg' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage", item);
  }


}//endclass
