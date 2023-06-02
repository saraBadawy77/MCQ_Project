import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/sevices/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name = 'Angular';
  public isCollapsed = true;
  user:any = null;
  constructor( private service:AuthService,private toastr: ToastrService){}
  
  
  ngOnInit(): void {
    this .service.user.subscribe((res:any)=>{
      if(res.role){
        this.user = res;
      }
    })
  }
  signout(){
    const model = {}
    this.service.login(model).subscribe(res=>{
      this.user=null
      this.service.user.next(res)
    })}

}
