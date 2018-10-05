import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Job } from "../../../../../core/models";
import { Observable } from "rxjs";
import { JobService } from "../../../../../core/services/job.service";
import { catchError } from "rxjs/operators";

@Injectable()
export class JobpreviewResolver implements Resolve<Job>{
   
    constructor(private jobService: JobService,
    private router: Router
    ){}
    resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any>{
        return this.jobService.getJobPreview(route.params['jobId'])
        .pipe(catchError(err => this.router.navigateByUrl('/')));
    }
}