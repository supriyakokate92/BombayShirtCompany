import { NgModule } from '@angular/core';
import { BscTableComponent } from './bsc-table.component';

import {Ng8MaterialModule} from 'ng8-material';
import { from } from 'rxjs';

@NgModule({
  declarations: [BscTableComponent],
  imports: [Ng8MaterialModule],
  exports: [BscTableComponent]
})
export class BscTableModule { }
