let liTags = document.querySelectorAll('nav.menu > ul > li')
    // 通过选择器获取所有的元素
    for(let i = 0; i < liTags.length; i++){
        liTags[i].onmouseenter = function(x){
            x.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function(x){
            x.currentTarget.classList.remove('active')
        }
    }
    function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
    requestAnimationFrame(animate);
    // 点击导航栏中的按钮的时候，页面自动跳转到对应的内容部分
    let aTags = document.querySelectorAll('nav.menu > ul > li > a')
    for(let i = 0; i < aTags.length; i++){
        aTags[i].onclick = function(x){
            x.preventDefault()
            let a = x.currentTarget
            let href = a.getAttribute('href')
            let currentA = document.querySelector(href)

            // 通过js实现慢慢的移动(下面是通过引入了一个tween库来进行缓动)
            let currentTop = window.scrollY
            let targetTop = currentA.offsetTop - 80

            // 下面是设置运动的时间是根据距离的改变而发生改变的
            // 没100像素移动的时间是300ms，当总的运动时间大于500ms时就设置为500ms
            let distance = targetTop - currentTop
            let time = Math.abs((distance/100)*300)
            if(time>500){ time = 500 }

            const coords = { y: currentTop }; 
            const tween = new TWEEN.Tween(coords) 
                    .to({ y: targetTop }, time) 
                    .easing(TWEEN.Easing.Quadratic.InOut) 
                    .onUpdate(() => { 
                        window.scrollTo(0,coords.y)
                    })
                    .start();
        }
    }