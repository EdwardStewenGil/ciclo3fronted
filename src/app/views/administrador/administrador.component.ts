import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

import { PostService } from "src/app/services/post.service";
import { TeamService } from "src/app/services/team.service";

import { Observable } from 'rxjs';
import { Post } from "../../modelo/post";
import { team } from "../../modelo/team";

import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage'
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  constructor( private postService: PostService,  private router: Router,private route: ActivatedRoute,
     private auth: AuthService,private afStorage: AngularFireStorage , private http: HttpClient) { }

  ngOnInit(): void {
  console.log( JSON.parse(localStorage.user)) }


miequipo(){
  this.router.navigate(["/usuarios/equipos"]);

}
equipo(){
  this.router.navigate(["/usuarios/miequipo"]);


}
}
