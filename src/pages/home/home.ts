import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

import { Icon } from "../../models/icon";
import { Icons } from "../../providers/icons";
import {IconPage} from "../icon/icon";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  icons: Icon[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private iconsProvider: Icons) {
    // Load icons
    iconsProvider.load().subscribe(icons => {
      this.icons = icons;
    });
  }

  onIconClick(icon) {
    const iconModal = this.modalCtrl.create(IconPage, {
      icon: icon
    });
    iconModal.present();
  }

  onCreatedByClick() {
    this.openUrl('https://www.quentin-stoeckel.fr');
  }

  onGitHubClick() {
    this.openUrl('https://github.com/chteuchteu/MaterialDesignIcons-Picker-Ionic');
  }

  openUrl(url) {
    InAppBrowser.open(url, '_system', 'location=yes');
  }
}
