// Provide an enumeration of the sysexits(3) exit codes, plus a few others.
// Cf. `man sysexits`.
module.exports = {
    // General codes.
    OK: 0,
    GENERAL: 1,
    // sysexits codes.
    USAGE: 64,
    DATAERR: 65,
    NOINPUT: 66,
    NOUSER: 67,
    NOHOST: 68,
    UNAVAILABLE: 69,
    SOFTWARE: 70,
    OSERR: 71,
    OSFILE: 72,
    CANTCREAT: 73,
    IOERR: 74,
    TEMPFAIL: 75,
    PROTOCOL: 76,
    NOPERM: 77,
    CONFIG: 78,
    // Bash error codes.
    CANNOT_EXEC: 126,
    COMMAND_NOT_FOUND: 127,
    INVALID_EXIT_ARG: 128
};

module.exports.desc = {
    0: 'successful termination',
    1: 'general error',
    64: 'command line usage error',
    65: 'data format error',
    66: 'cannot open input',
    67: 'addressee unknown',
    68: 'host name unknown',
    69: 'service unavailable',
    70: 'internal software error',
    71: 'system error (e.g., can\'t fork)',
    72: 'critical OS file missing',
    73: 'can\'t create (user) output file',
    74: 'input/output error',
    75: 'temp failure; user is invited to retry',
    76: 'remote error in protocol',
    77: 'permission denied',
    78: 'configuration error',

    126: 'command invoked cannot execute',
    127: 'command not found'
};
