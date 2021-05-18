import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent} from './contact/contact.component';
import { MessagesComponent} from './messages/messages.component';
import { DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {path: '', component: ContactComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'message/:id', component: DetailComponent},
  {path: '**', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}