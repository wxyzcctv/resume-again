let specialTags = document.querySelectorAll('[data-x]')
    for(let i = 0;i<specialTags.length;i++){
        specialTags[i].classList.add('offset')
    }
    setTimeout(()=>{
        findCloseAndRemoveOffset()
    },300)

    window.addEventListener('scroll',function(){findCloseAndRemoveOffset()})

    function findCloseAndRemoveOffset(){
        // 如下这段是找到距离导航栏最近的一个区域
        let minit = 0
        let specialTags = document.querySelectorAll('[data-x]')
        for(let i = 1;i<specialTags.length;i++){
            if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minit].offsetTop - window.scrollY)){
                minit = i
            }
        }
        specialTags[minit].classList.remove('offset')

        for(let i = 0;i<specialTags.length;i++){
            specialTags[i].classList.remove('active')
        }
        // 滑动页面，将页面对应的内容与导航栏上的内容对应起来
        let id = specialTags[minit].id
        let a = document.querySelector('a[href="#' + id +'"]')
        let li = a.parentNode

        let liGroup = li.parentNode.children
        for(let i = 0;i<liGroup.length;i++){
            liGroup[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }