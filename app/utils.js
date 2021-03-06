import { PATIENT, THERAPIST, PATIENT_ROUTES,
  THERAPIST_ROUTES, THERAPIST_REGEX, PATIENT_REGEX } from './constants.js';
import moment from 'moment';

// Check whether script is being run in browser or Node
export const isBrowser = () => {
  try {
    return window;
  } catch (e) {
    return false;
  }
}

// Return formatted full name of user
export const fullName = (user, reverse) =>
  reverse ? `${user.last_name}, ${user.first_name}` : `${user.first_name} ${user.last_name}`;

// Returns the number of days between the input dates
export const daysBetween = (start, end) => {
  const oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  return Math.round(Math.abs((start.getTime() - end.getTime())/(oneDay)));
}

// Retrieves today's completed workout from the input treatment
// Returns undefined when no workout for today
export const getCompletedWorkout = workouts => {
  return workouts && workouts.find(workout =>
    moment(workout.created_at).format('MM/DD/YYYY') === moment().format('MM/DD/YYYY')
  );
}

// Redirect page for logged in user based on role
export const loginRedirect = role => {
  if (role === THERAPIST) return '/patients';
  else if (role === PATIENT) return '/plan';
  else return '/';
}

// Ensure user is seeing the appropriate side of the app (patient or therapist)
export const checkRoute = (role, route) => {
  if (role === THERAPIST && (THERAPIST_ROUTES.includes(route) || route.match(THERAPIST_REGEX)))
    return true
  if (role === PATIENT && (PATIENT_ROUTES.includes(route) || route.match(PATIENT_REGEX)))
    return true
  console.log('returning false')
  return false
}

// Format an inout amount of seconds into X min XX sec
export const formatTime = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  const padLeft = (string, pad, length) =>
    (new Array(length+1).join(pad)+string).slice(-length);

  return `${minutes ? `${minutes} min ` : ''}${seconds ? `${padLeft(seconds, '0', 2)} sec` : ''}`;
}
