
var signals = {
  'SIGHUP': 1,
  'SIGINT': 2,
  'SIGQUIT': 3,
  'SIGILL': 4,
  'SIGTRAP': 5,
  'SIGABRT': 6,
  'SIGBUS': 7,
  'SIGFPE': 8,
  'SIGKILL': 9,
  'SIGUSR1': 10,
  'SIGSEGV': 11,
  'SIGUSR2': 12,
  'SIGPIPE': 13,
  'SIGALRM': 14,
  'SIGTERM': 15,
  'SIGCHLD': 17,
  'SIGCONT': 18,
  'SIGSTOP': 19,
  'SIGTSTP': 20,
  'SIGTTIN': 21,
  'SIGTTOU': 22,
  'SIGURG': 23,
  'SIGXCPU': 24,
  'SIGXFSZ': 25,
  'SIGVTALRM': 26,
  'SIGPROF': 27,
  'SIGWINCH': 28,
  'SIGIO': 29,
  'SIGPWR': 30,
  'SIGSYS': 31,
  'SIGRTMIN': 34
}

exports.getSignalNumber = function(name) {
  return signals[name];
};

exports.getSignalName = function(id) {
  var e;
  for (var name in signals)
    if (signals[name] === id) e = name;
  return e;
}
