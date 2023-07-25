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
      des: 'This website template made for a furniture shop.You can find elegent wooden and metal furniture products',
      thumb: 'assets/images/furnix.png',
      language1: 'HTML',
      language: [{ title: 'HTML' }, { title: 'SCSS' }, { title: 'BOOTSTRAP' }],
      github_link: 'https://github.com/Joydip-Paul/Furnix',
      site_link: 'https://furnix-jd.netlify.app',
    },
    {
      id: 2,
      title: 'Kahnapina',
      des: 'This website template made for a restaurant.You can cart your item and order food from khanapina.',
      thumb: 'assets/images/khanapina.png',
      language: [
        { title: 'ANGULAR-JS' },
        { title: 'SCSS' },
        { title: 'BOOTSTRAP' },
      ],
      github_link: 'https://github.com/Joydip-Paul/khanapina',
      site_link: 'https://khanapina-bd.netlify.app',
    },
    {
      id: 3,
      title: 'Manate',
      des: 'This is a dashboard.Here you can find various types of element like table,charts,modal,forms etc.',
      thumb: 'assets/images/manate.png',
      language: [
        { title: 'ANGULAR-JS' },
        { title: 'NGZORRO' },
        { title: 'SCSS' },
        { title: 'BOOTSTRAP' },
        { title: 'APEXCHARTA' },
        { title: 'NGXCHARTS' },
      ],
      github_link: 'https://github.com/Joydip-Paul/Dashboard-CRM',
      site_link: 'https://manate-jd.netlify.app/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
