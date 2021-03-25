const { log } = console;
log(Number.isFinite(1.5));
log(Number.isFinite(Infinity));
log(Number.isFinite('xxx'));
log(Number.isFinite(true));

log(Number.isNaN(NaN));
log(Number.isNaN(5));

log(Number.isInteger(5));
log(Number.isInteger(25.1));
log(0.1 + 0.2);

log(Number.isSafeInteger(1.2));

Math.trunc = Math.trunc || function (x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
}

Math.cbrt = Math.cbrty || function (x) {
  var y = Math.pow(Math.abs(x), 1 / 3);
  return x < 0 ? -y : y;
}
log(Math.cbrt(-1), Math.cbrt(27));

log(Math.hypot(3, 4));

log(...[1,2,3]);