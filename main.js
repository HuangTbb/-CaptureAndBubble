let n = 1
for(let i=1; i<8; i++){
    let level = document.querySelector('.level' + i)
    level.classList.add('x')
    level.addEventListener('click', (e)=>{
        const t = e.currentTarget
        setTimeout(()=>{
            t.classList.remove('x')
        }, n * 1000)
        n+=1
    },true)
    level.addEventListener('click', (e)=>{
        const t = e.currentTarget
        setTimeout(()=>{
            t.classList.add('x')
        }, n * 1000)
        n+=1
    })
}