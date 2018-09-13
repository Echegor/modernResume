import {NgModule} from '@angular/core';
import {TypingAnimationDirective} from "angular-typing-animation";
/*
* Module created to avoid duplicate declaration exception?
* */
@NgModule({
  imports: [],
  declarations:[TypingAnimationDirective],
  exports: [TypingAnimationDirective]
})
export class AppTypingModule { }
