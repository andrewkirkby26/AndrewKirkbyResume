import {Component, Input, ViewChild, ViewChildren} from '@angular/core';
import { CommonComponent } from '../common/common.component';
import {Certificate} from "../../interfaces/certificate";
import {doc} from "firebase/firestore";

@Component({
  selector: 'photoSlideShow',
  templateUrl: './photoSlideShow.component.html',
  styleUrls: ['./photoSlideShow.component.css'],
})
export class PhotoSlideShowComponent extends CommonComponent {

  @Input()
  images: string[] = [];

  @Input()
  visibleAtATime = 1;

  selectImage(index: number) {
    this.navigationService.selectSlideShow(this.images, index);
  }
}
