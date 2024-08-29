module.exports = {
  apps : [{
    name   : "www worker",
    script : "npm",
    args   : "run dev",
    cwd: './packages/www'
  },{
    name   : "api worker",
    script : "npm",
    args   : "run dev",
    cwd: './packages/api'
  }]
}