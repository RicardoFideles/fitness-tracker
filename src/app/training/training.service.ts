import { Exercise } from './exercise.model'

export class TrainingService {
    private availableExercises: Exercise[] = [
        { id : 'crunches', name : 'Crunches', duration : 30, calories : 8},
        { id : 'touch-toes', name : 'Touch Toes', duration : 180, calories : 15},
        { id : 'side-lunges', name : 'Side Lunges', duration : 120, calories : 18},
        { id : 'burpees', name : 'Burpees', duration : 60, calories : 8}
    ]

    getAvailableExercises() {
        //create a copy of the array, so it can be afect by any changes in other components or services.
        return this.availableExercises.slice();
    }
}