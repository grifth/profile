!function() {
    let liTags = document.querySelectorAll('nav.menu > ul   >li');
    var sitewelcome = document.getElementById(' site-welcome');
    let specialTags = document.querySelectorAll('[data-x]')

    function findClosestAndRemoveOffset() {
        let specialTags = document.querySelectorAll('[  data-x]')
        let minIndex = 0
        for (let i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY))
                minIndex = i;
        }

        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode;
        let brothersAndMe = li.parentNode.children
        for (let i = 0; i < brothersAndMe.length; i++) {
            brothersAndMe[i].classList.remove('heightlight')
        }
        li.classList.add('heightlight')
    }
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.remove('active')
    }

    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }
    findClosestAndRemoveOffset()
    window.addEventListener('scroll', function(x) {
        findClosestAndRemoveOffset()
    })


    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function(x) {
            let li = x.currentTarget;
            console.log(3);

            li.classList.add('active');
        }
        liTags[i].onmouseleave = function(x) {
            let li = x.currentTarget;
            li.classList.remove('active');
        }
    }
}.call()