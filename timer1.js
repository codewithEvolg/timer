const args = process.argv;
for(const arg of args.slice(2)){
  setTimeout(() => {
    process.stdout.write('\x07');
  }, arg * 1000)
}