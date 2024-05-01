import {Component, Inject} from '@angular/core';
import {SectionComponent} from "../../section.component";
import {Constants} from "../../../../constants/constants";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['../../section.component.css', './home.component.css']
})
export class HomeComponent extends SectionComponent {

  override name = Constants.HOME;

  downloadResume() {
    let url = './resources/Resume.pdf';
    let filename = 'Andrew Kirkby Resume.pdf';
    this.navigationService.download(url, filename);
  }
}
