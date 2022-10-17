import { delay, Observable, of, Subject, tap } from "rxjs";
import { Notification } from "../models/notification";

const notificationsSubject: Subject<Notification> = new Subject<Notification>();

function display(notification: Notification) {
    notificationsSubject.next(notification);
    of(notification).pipe(
        delay(3000),
        tap(_ => notificationsSubject.next(null))
    ).subscribe();
    
}
const value: Observable<Notification> = notificationsSubject.asObservable();

export const notification = {
    value,
    display
}