import { Observable, Subject } from "rxjs";

const doneSubject: Subject<boolean> = new Subject<boolean>();
const playSubject: Subject<any> = new Subject<any>();

const isFinish: Observable<boolean> = doneSubject.asObservable();
const play: Observable<any> = playSubject.asObservable();

function finish(value: boolean) {
    doneSubject.next(value);
}

function playVideo(value: any) {
    playSubject.next(value);
}
export const Video = {
    playVideo,
    finish,
    isFinish,
    play
}