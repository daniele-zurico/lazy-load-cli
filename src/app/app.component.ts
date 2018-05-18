import { LazyModule } from './lazy/lazy.module';
import { LazyComponent } from './lazy/lazy.component';
import { Observable } from 'rxjs';
import { Component, AfterViewInit, ViewChild, ViewContainerRef, NgModuleFactoryLoader, Injector, NgModuleFactory } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('testOutlet', {read: ViewContainerRef}) testOutlet: ViewContainerRef;
  constructor(
    private loader: NgModuleFactoryLoader,
    private injector: Injector) {
    }

    ngAfterViewInit(): void {
    const path = 'src/app/lazy/lazy.module#LazyModule';
    this.loader.load(path).then((moduleFactory: NgModuleFactory<any>) => {
      const entryComponent = (<any>moduleFactory.moduleType).entry;
      const moduleRef = moduleFactory.create(this.injector);

      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
      this.testOutlet.createComponent(compFactory);
  });
  }
}
