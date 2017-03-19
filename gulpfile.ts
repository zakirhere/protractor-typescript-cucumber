import {Gulpclass, Task} from "gulpfile.ts/Annotations";
import * as gulp from "gulp";
import { protractor } from 'gulp-protractor';
// import { argv } from 'yargs';

@Gulpclass()
export class Gulpfile {

   @Task('e2e')
   e2e() {
      console.log('Running protractor with CLI');
      return gulp.src(protractor({
              configFile: 'protractor.cuke.conf.ts'
          }))
          .on('error', function (e) {
             throw e;
          });
   }

   @Task()
   default() {
      console.log('Running default task');
      return ;
   }

}