import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../service/tokenStorage.service";
import {ShareService} from "../../service/share.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: any;
  role?: string;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService,
              private shareService: ShareService,
            ) {
    this.shareService.getClickEvent().subscribe(() => {
      this.loadHeader();
    });
  }

  ngOnInit(): void {
  }

  logOut() {
    this.tokenStorageService.signOut();
    this.ngOnInit();
  }

  loadHeader(): void {
    if (this.tokenStorageService.getToken()) {
      this.role = this.tokenStorageService.getUser().roles[0];
      this.username = this.tokenStorageService.getUser().username;
    }
    this.isLoggedIn = this.username != null;
    // this.findNameUser();
  }

  // findNameUser(): void {
  //   if (this.role === 'ROLE_ADMIN' || this.role === 'ROLE_TEACHER') {
  //     this.teacherService.findTeacherByEmail(this.username).subscribe(next => {
  //       this.name = next.teacherName;
  //       this.img = next.teacherImg;
  //     });
  //   } else {
  //     this.studentService.findStudentByEmail(this.username).subscribe(next => {
  //       this.name = next.studentName;
  //       this.img = next.studentImg;
  //     });
  //   }
  // }
}
