import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  playlist_courses: { [key: string]: string[] } = {
    angular: [
      '1. Pengenalan Angular & Setup CLI',
      '2. Components, Templates & Data Binding',
      '3. Directives (*ngIf, *ngFor, ngClass)',
      '4. Services & Dependency Injection',
      '5. Angular Routing & Navigation',
      '6. RxJS Basics & Observables',
      '7. Template-Driven & Reactive Forms',
      '8. HTTP Client & API Integration'
    ],
    vue: [
      '1. Pengenalan Vue 3 & Composition API',
      '2. Reactivity System (ref & reactive)',
      '3. Template Directives (v-if, v-for, v-model)',
      '4. Component Props & Custom Events',
      '5. Vue Router & SPA Navigation',
      '6. State Management dengan Pinia',
      '7. Custom Composables',
      '8. Handling HTTP Request (Axios / Fetch)'
    ],
    react: [
      '1. Pengenalan React & JSX Syntax',
      '2. Functional Components & Props',
      '3. State Management dengan useState',
      '4. Side Effects dengan useEffect',
      '5. Building Custom Hooks',
      '6. React Router DOM Navigation',
      '7. Global State dengan Context API',
      '8. Fetching Data & API Integration'
    ]
  };
  selectedCourse: string = 'All';
  filteredCourse = ()=>{
    // Cara Pertama Men-Looping didalam object nya
    // return this.playlist_courses[this.selectedCourse]
    // Cara Kedua Men-Looping object nya dan menggunakan filter (Changing object to array directly in html used "keyvalue pipe")
  //   if(this.selectedCourse === 'All'){
  //     return this.playlist_courses;
  //   }
  //  else{
  //   return {
  //     [this.selectedCourse]: this.playlist_courses[this.selectedCourse]
  //   }
  //  }
  // Cara Ketiga (Reccomended, cause using pure function & avoid changing object to array directly in html)
    if(this.selectedCourse === 'All'){
      // Function Object.entries() -> Mengubah object menjadi array
     return Object.entries(this.playlist_courses).map(([key, value])=>({key,value}))
    }
    // Built Function "in" for checking key is exists in object, and return value in boolean (true or false)
    return this.selectedCourse in this.playlist_courses ? [{key:this.selectedCourse, value:this.playlist_courses[this.selectedCourse]}] : []
      
  }

  trackByCourse(id: number, course:{key:string, value: string[]}){
    return course.key
  }

  trackByLesson(id:number, lesson:string){
    return lesson
  }
  // Cara 1: Yang berelasi dengan cara kedua di this.filteredCourse()
  // hasCourses():boolean {
  //   const courses = this.filteredCourse()
  //   if(!courses) return false
  //   return Object.values(courses).some(lessons=> Array.isArray(lessons) && lessons.length > 0)
  // }

  // Cara 2: Yang berelasi dengan cara ketiga di this.filteredCourse()
  hasCourses():boolean{
    const courses = this.filteredCourse();
    if(!courses) return false
    else return courses.some(course => Array.isArray(course.value) && course.value.length > 0)
  }

  // hasCourses(): boolean {
  //   const courses = this.filteredCourse();
  //   if (!courses) return false;
  //   return Object.values(courses).some(lessons => Array.isArray(lessons) && lessons.length > 0);
  // }
}
