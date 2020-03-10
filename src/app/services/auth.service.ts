import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  loggedIn$: boolean = false;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  public async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  public async signOut() {
    await this.afAuth.auth.signOut();
    this.loggedIn$ = false;
    return this.router.navigate(['/']);
  }

  private updateUserData(user) {

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    let account = this.afs.doc<User>(`users/${user.uid}`);

    account.get().toPromise().then(x => {

      if(x.exists){
        
        account.valueChanges().subscribe(currentUser => {

          const data = {
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            address: currentUser.address,
            weight: currentUser.weight
          };
    
          this.loggedIn$ = true;
          return userRef.set(data, { merge: true });
        });

      }
      else{
        const data = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          address: Object.assign({}, user.address),     
          weight: Object.assign({}, user.weight),
        }

        this.loggedIn$ = true;

        return userRef.set(data, {merge: true});
      }
    });

  }

}
