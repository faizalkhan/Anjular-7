import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent} from './user/user.component';
import {FormsComponent} from './forms/forms.component';
import { from } from 'rxjs';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


export const Approute:Routes = [
    {
        path : '',
        component : DashboardComponent
    },
    {
         path : 'user',
         component : UserComponent

    },
    {
        path : 'forms',
        component : FormsComponent

   },
   {
    path : 'parent',
    component : ParentComponent

},

{
    path : 'child',
    component : ChildComponent

}
   
];