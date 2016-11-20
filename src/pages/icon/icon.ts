import { Component } from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-icon',
  templateUrl: 'icon.html'
})
export class IconPage {
  icon: {};

  constructor(params: NavParams, public viewCtrl: ViewController) {
    this.icon = params.get('icon');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
