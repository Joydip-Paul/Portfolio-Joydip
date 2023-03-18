import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectList = [
    {
      "id": 1,
      "title": "Furnix",
      "des": "This website template made for a furniture shop.",
      "thumb": "assets/images/furnix.png",
      "language": "HTML, CSS, BOOTSTRAP, JAVASCRIPT",
      "site_link": "https://furnix-jd.netlify.app"
    },
    {
      "id": 2,
      "title": "Kahnapina",
      "des": "This website template made for a restaurant.",
      "thumb": "assets/images/khanapina.png",
      "language": "HTML, SCSS, BOOTSTRAP, ANGULAR-JS",
      "site_link": "https://khanapina-bd.netlify.app"
    },
    {
      "id": 3,
      "title": "Homepay",
      "des": "This website made for a online payment system.",
      "thumb": "assets/images/homePay.png",
      "language": "Html, CSS, BOOTSTRAP, JAVASCRIPT",
      "site_link": "https://homepay-bd.netlify.app"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
