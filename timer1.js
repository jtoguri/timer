const alerts = process.argv.slice(2);

for (const time of alerts) {
  if(isNaN(Number(time)) || Number(time) < 0) {
    continue;
  }
  setTimeout(() => process.stdout.write('\x07'), Number(time) * 1000);
}