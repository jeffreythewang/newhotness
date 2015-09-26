let backendFrameWorks = ['Django', 'Rails', 'Node.js', 'PHP 7', 'Rust', 'flask']
let frontendFrameWorks = ['ES8', 'React', 'vanilajs', 'ES9', 'Webasm']
let databases = ['mongosql', 'redis', 'mariaDB', 'mySQL', 'DynamoDB', 'YesSQL', 'textfiles', 'dev/null', 'excel']
let secondary = ['Node.js', 'Redis',  'Linux', 'Apache', 'Gentoo', 'GNU', 'Smalltalk', 'vimscript', 'Nginx', 'NginY', 'Docker']
$('#dank').click(() => {
    $('.equation').show()
    $('.stack-row').show()
    $('.title-bottom').show()
    let backend = backendFrameWorks[Math.floor(Math.random()*backendFrameWorks.length)]
    let frontend = frontendFrameWorks[Math.floor(Math.random()*frontendFrameWorks.length)]
    let dbs = databases[Math.floor(Math.random()*databases.length)]
    let sec = secondary[Math.floor(Math.random()*secondary.length)]
    $('.framework').html(backend)
    $('.secondary').html(sec)
    $('.database').html(dbs)
    $('.frontend').html(frontend)
    let fire = backend.substring(0, 1) + sec.substring(0, 1) + frontend.substring(0,1) + dbs.substring(0, 1)
    fire = fire.toUpperCase() + " stack"
    $('.stack-name').html(fire)
})
