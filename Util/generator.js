import sequential from "sequential-ids";

var generator = new sequential.Generator({
    digits: 3,
    restore: "000"
  });
  generator.start();

  export default generator;
