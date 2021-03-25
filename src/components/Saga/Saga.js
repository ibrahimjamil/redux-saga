import { put, takeEvery,take,fork, all,call, delay, takeLatest } from 'redux-saga/effects';
import { increment,decrement,incrementAsyncc,fetchUser } from '../Actions/Actions';
import axios from 'axios'
//if you want to use take then in while if takevery then not necessary 


function* incrementAsync() {
   yield delay(1000);
   yield put(increment);
   yield delay(1000)
   yield put(decrement);
}

function* fetchuser(){
   let res=yield call(axios,'https://jsonplaceholder.typicode.com/users/1')
   console.log("hello")
   yield put(increment)
}

function* watchsaga() {
  yield takeEvery(incrementAsyncc,incrementAsync)
} 
function* watchsaga2() {
   yield takeEvery(fetchUser,fetchuser)
   while (yield take(fetchUser)) {
      yield call(fetchuser) // waits for the fetchPosts task to terminate
    }
 } 
 

export default function* rootSagas() {
   let x=yield all ([watchsaga(),watchsaga2()]);
   console.log(x)
}

