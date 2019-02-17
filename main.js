/**
 * 
 * 
 */
function baiduSearch() {
    var text = searchText.value;
    window.open('https://www.baidu.com/s?wd='+text, '_blank');
}
searchText.addEventListener('input', function(e) {
    // 阻止document.key事件
    e.stopPropagation();
})
/**
 * 
 * 
 */
var keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]
var navHash = {
    'Q': 'qq.com',
    'W': 'weibo.com', 
    'E': 'ele.com',
    'T': 'taobao.com',
    'J': 'jd.com',
    'S': 'suning.com',
    'B': 'bilibili.com',
    'Z': 'zhihu.com',
}
for(var i = 0; i < keys.length; i++) {
    var div = document.createElement('div');
    wrapper.appendChild(div);
    for(var j = 0; j < keys[i].length; j++) {
        var kbd = document.createElement('kbd');
        kbd.className = 'keys';
        var span = document.createElement('span');
        span.innerHTML = keys[i][j];
        var btn = document.createElement('button');
        btn.className = 'btn';
        btn.title = '编辑';
        btn.innerHTML = 'E';
        btn.onclick = function(e) {
            var index1 = e.target.innerHTML;
            var newUrl = prompt('请输入新导航地址');
            navHash[index1] = newUrl;
            var img2 = e.target.nextElementSibling;
            img2.src = 'http://www.' + newUrl +'/favicon.ico'
        }
        var img = document.createElement('img');
        if(navHash[keys[i][j]]) {
            img.src = 'http://www.' + navHash[keys[i][j]] +'/favicon.ico'
        }
        kbd.appendChild(span);
        kbd.appendChild(btn);
        kbd.appendChild(img);

        div.appendChild(kbd);
    }
}

document.onkeypress = function(e) {
    if(e.key === 'Enter') {
        baiduSearch();
    } else {
        var wrapkey = e.key.toUpperCase();
        window.open('http://' +  navHash[wrapkey])
    }
}
