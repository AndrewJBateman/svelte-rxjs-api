import {
	combineLatestWith,
	mergeAll,
	mergeMap,
	startWith,
	share,
	take,
	toArray,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Subject, BehaviorSubject } from 'rxjs';

const usersEndpoint = 'https://api.github.com/users';
const randomOffset = () => Math.floor(Math.random() * 100000);

// Rx Subject that we use only to trigger reloads
const reload = new Subject();

// instead of exposing subject directly we wrap it in a function
const refresh = () => reload.next(1);

// replace users with a function instead so that we return
// a new stream on every 'refresh' click
const fetchUsers = () =>
	ajax.getJSON(`${usersEndpoint}?since=${randomOffset()}`);

// call fetchUsers function when we click the refresh button
const userPool = reload.pipe(startWith(null), mergeMap(fetchUsers), share());

// helper function to get a random user
const randomUser = (users: any[]) =>
	users[Math.floor(Math.random() * users.length)];

const users = userPool.pipe(mergeAll(), take(8), toArray());

// replace user with a new one - check if already been on list
const replaceUser = (users: any[], pool: any[], login: string) => {
	const getIndex = (username: string) =>
		users.findIndex((user) => user.login === username);
	const idx = getIndex(login);

	while (true || idx !== -1) {
		let newUser = randomUser(pool);
		if (getIndex(newUser.login) === -1) {
			users.splice(idx, 1, newUser);
			break;
		}
	}
	return users;
};

const suggest = new BehaviorSubject('');

// wrap suggest stream in the helper function that we export
const replace = (username: string) => suggest.next(username);

// Main suggestions stream
const suggestions = reload.pipe(
	startWith(null),
	mergeMap(() => users),
	// this is where we handle new user suggestions
	combineLatestWith(userPool, suggest, replaceUser),
  startWith([])
);

export { users, replace, refresh, suggestions };
