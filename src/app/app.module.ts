import { BrowserModule } from '@angular/platform-browser';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { NgModule } from '@angular/core';

   // Imports the MaskedTextBox module
   import { MaskedTextBoxModule } from '@progress/kendo-angular-inputs';

   // Imports the NumericTextBox module
   import { NumericTextBoxModule } from '@progress/kendo-angular-inputs
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// Import the ButtonsModule...
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
    declarations: [
        AppComponent
    ],

    providers: [],
    bootstrap: [AppComponent],
    imports: [MaskedTextBoxModule, NumericTextBoxModule]
})
export class AppModule { }