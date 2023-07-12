import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectList = [
    {
      id: 1,
      title: 'Furnix',
      des: 'This website template made for a furniture shop.',
      thumb: 'assets/images/furnix.png',
      language1: 'HTML',
      language: [{ title: 'ANGULAR-JS' }, { title: 'SCSS' }],
      github_link: 'https://github.com/Joydip-Paul/Furnix',
      site_link: 'https://furnix-jd.netlify.app',
    },
    {
      id: 2,
      title: 'Kahnapina',
      des: 'This website template made for a restaurant.',
      thumb: 'assets/images/khanapina.png',
      language: [{ title: 'ANGULAR-JS' }, { title: 'SCSS' }],
      github_link: 'https://github.com/Joydip-Paul/khanapina',
      site_link: 'https://khanapina-bd.netlify.app',
    },
    {
      id: 3,
      title: 'Manate',
      des: 'This website made for a online payment system.',
      thumb: 'assets/images/manate.png',
      language: [{ title: 'ANGULAR-JS' }, { title: 'SCSS' }],
      github_link: 'https://github.com/Joydip-Paul/Angular-Template-Design',
      site_link: 'https://mogo-jd.netlify.app/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
