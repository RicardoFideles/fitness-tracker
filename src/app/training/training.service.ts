import { Exercise } from './exercise.model'
import { Subject } from 'rxjs'
export class TrainingService {

    execiseChange = new Subject<Exercise>();

    private availableExercises: Exercise[] = [
        { id : 'crunches', name : 'Crunches', duration : 30, calories : 8},
        { id : 'touch-toes', name : 'Touch Toes', duration : 180, calories : 15},
        { id : 'side-lunges', name : 'Side Lunges', duration : 120, calories : 18},
        { id : 'burpees', name : 'Burpees', duration : 60, calories : 8}
    ]

    private runningExercise : Exercise;
    private exercises : Exercise[] = [];

    getAvailableExercises() {
        //create a copy of the array, so it can be afect by any changes in other components or services.
        return this.availableExercises.slice();
    }

    startExercise(selectorId:string) {
        this.runningExercise  = this.availableExercises.find(ex =>  ex.id == selectorId);
        this.execiseChange.next({... this.runningExercise})
    }

    getRunningExercise() {
        return {... this.runningExercise};
    }

    completeExercise() {
        this.exercises.push({ ... this.runningExercise, date : new Date(), state : 'completed'});
        this.runningExercise = null;
        this.execiseChange.next(null);
    }

    cancelExercise(progreess : number) {
        this.exercises.push({
            ... this.runningExercise, 
            duration : this.runningExercise.duration * (progreess / 100), 
            calories : this.runningExercise.calories * (progreess / 100), 
            date : new Date(), 
            state : 'cancelled'
        });
        this.runningExercise = null;
        this.execiseChange.next(null);
    }

    getExercises() {
        return this.exercises.slice()
    }
}