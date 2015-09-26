let backendFrameWorks = ['Django', 'Rails', 'Node.js', 'PHP 7', 'Rust', 'flask']
let frontEndFrameWorks = ['ES8', 'React', 'vanilajs']
let databases = ['mongosql'] 
$('#dank').click(() => {
    let backend = backendFrameWorks[Math.floor(Math.random()*items.length)]
    $('.framework').html(backend)
})
