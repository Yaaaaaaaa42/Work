// 新闻数据
const newsData = {
    zhihu: [
        { id: 1, title: '11111111', meta: '14.7万浏览', tag: '热' },
        { id: 2, title: '22222222', meta: '2.6万浏览', tag: '' },
        { id: 3, title: '33333333', meta: '42.6万浏览', tag: '' },
        { id: 4, title: '44444444', meta: '71.3万浏览', tag: '' },
        { id: 5, title: '55555555', meta: '17.7万浏览', tag: '' },
        { id: 6, title: '66666666', meta: '13.3万浏览', tag: '' },
        { id: 7, title: '77777777', meta: '5.9万浏览', tag: '' },
    ],
    weibo: [
        { id: 1, title: '11111111', meta: '热点', tag: '热' },
        { id: 2, title: '22222222', meta: '', tag: '热' },
        { id: 3, title: '33333333', meta: '', tag: '' },
        { id: 4, title: '44444444', meta: '', tag: '' },
        { id: 5, title: '55555555', meta: '', tag: '' },
        { id: 6, title: '66666666', meta: '', tag: '热' },
        { id: 7, title: '77777777', meta: '', tag: '热' },
        { id: 8, title: '88888888', meta: '', tag: '热' },
        { id: 9, title: '99999999', meta: '', tag: '热' },
        { id: 10, title: '1010101010', meta: '', tag: '热' },
        { id: 11, title: '1111111111', meta: '', tag: '热' },
        { id: 12, title: '1212121212', meta: '', tag: '热' },
        { id: 13, title: '1313131313', meta: '', tag: '' },
    ],
    kuai: [
        { id: 1, title: '11111111', meta: '热度5.72万', tag: '' },
        { id: 2, title: '22222222', meta: '8.3万热度', tag: '' },
    ],
    wallstreet: [
        { id: 1, title: '11111111', meta: '', tag: '' },
        { id: 2, title: '22222222', meta: '', tag: '' },
        { id: 3, title: '33333333', meta: '', tag: '' },
        { id: 4, title: '44444444', meta: '', tag: '' },
        { id: 5, title: '55555555', meta: '', tag: '' },
        { id: 6, title: '66666666', meta: '', tag: '' },
        { id: 7, title: '77777777', meta: '', tag: '' },
        { id: 8, title: '88888888', meta: '', tag: '' },
    ],
    douyin: [
        { id: 1, title: '11111111', meta: '', tag: '' },
        { id: 2, title: '22222222', meta: '', tag: '' },
        { id: 3, title: '33333333', meta: '', tag: '' },
        { id: 4, title: '44444444', meta: '', tag: '' },
        { id: 5, title: '55555555', meta: '', tag: '' },
        { id: 6, title: '66666666', meta: '', tag: '' },
        { id: 7, title: '77777777', meta: '', tag: '' },
        { id: 8, title: '88888888', meta: '', tag: '' },
        { id: 9, title: '99999999', meta: '', tag: '' },
        { id: 10, title: '1010101010', meta: '', tag: '' },
        { id: 11, title: '1111111111', meta: '', tag: '' },
        { id: 12, title: '1212121212', meta: '', tag: '' },
        { id: 13, title: '1313131313', meta: '', tag: '' },
    ],
    hupu: [
        { id: 1, title: '11111111', meta: '', tag: '' },
        { id: 2, title: '22222222', meta: '', tag: '' },
        { id: 3, title: '33333333', meta: '', tag: '' },
        { id: 4, title: '44444444', meta: '', tag: '' },
        { id: 5, title: '55555555', meta: '', tag: '' },
        { id: 6, title: '66666666', meta: '', tag: '' },
        { id: 7, title: '77777777', meta: '', tag: '' },
        { id: 8, title: '88888888', meta: '', tag: '' },
        { id: 9, title: '99999999', meta: '', tag: '' },
        { id: 10, title: '1010101010', meta: '', tag: '' },
    ],
    baidu: [
        { id: 1, title: '11111111', meta: '', tag: '' },
        { id: 2, title: '22222222', meta: '', tag: '' },
        { id: 3, title: '33333333', meta: '', tag: '' },
        { id: 4, title: '44444444', meta: '', tag: '' },
        { id: 5, title: '55555555', meta: '', tag: '' },
        { id: 6, title: '66666666', meta: '', tag: '' },
        { id: 7, title: '77777777', meta: '', tag: '' },
        { id: 8, title: '88888888', meta: '', tag: '' },
        { id: 9, title: '99999999', meta: '', tag: '' },
        { id: 10, title: '1010101010', meta: '', tag: '' },
        { id: 11, title: '1111111111', meta: '', tag: '' },
        { id: 12, title: '1212121212', meta: '', tag: '' },
        { id: 13, title: '1313131313', meta: '', tag: '' },
    ],
    toutiao: [
        { id: 1, title: '11111111', meta: '', tag: '' },
        { id: 2, title: '22222222', meta: '', tag: '热' },
        { id: 3, title: '33333333', meta: '', tag: '' },
        { id: 4, title: '44444444', meta: '', tag: '' },
        { id: 5, title: '55555555', meta: '', tag: '' },
        { id: 6, title: '66666666', meta: '', tag: '' },
        { id: 7, title: '77777777', meta: '', tag: '' },
        { id: 8, title: '88888888', meta: '', tag: '' },
        { id: 9, title: '99999999', meta: '', tag: '' },
        { id: 10, title: '1010101010', meta: '', tag: '热' },
        { id: 11, title: '1111111111', meta: '', tag: '' },
        { id: 12, title: '1212121212', meta: '', tag: '' },
    ],
    pengpai: [
        { id: 1, title: '11111111', meta: '', tag: '' },
        { id: 2, title: '22222222', meta: '', tag: '' },
        { id: 3, title: '33333333', meta: '', tag: '' },
        { id: 4, title: '44444444', meta: '', tag: '' },
        { id: 5, title: '55555555', meta: '', tag: '' },
        { id: 6, title: '66666666', meta: '', tag: '' },
        { id: 7, title: '77777777', meta: '', tag: '' },
    ],
    cls: [
        { id: 1, title: '11111111', meta: '', tag: '' },
        { id: 2, title: '22222222', meta: '', tag: '' },
        { id: 3, title: '33333333', meta: '', tag: '' },
        { id: 4, title: '44444444', meta: '', tag: '' },
        { id: 5, title: '55555555', meta: '', tag: '' },
        { id: 6, title: '66666666', meta: '', tag: '' },
        { id: 7, title: '77777777', meta: '', tag: '' },
        { id: 8, title: '88888888', meta: '', tag: '' },
    ]
};

// 创建新闻项元素
function createNewsItem(item) {
    const newsItem = document.createElement('div');
    newsItem.className = 'news-item';
    
    const numberDiv = document.createElement('div');
    numberDiv.className = 'news-item-number';
    numberDiv.textContent = item.id;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'news-item-content';
    
    const titleDiv = document.createElement('div');
    titleDiv.className = 'news-item-title';
    
    // 添加标签（如果有）
    if (item.tag) {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'tag tag-hot';
        tagSpan.textContent = item.tag;
        titleDiv.appendChild(tagSpan);
    }
    
    // 添加标题文本
    const titleText = document.createTextNode(item.title);
    titleDiv.appendChild(titleText);
    
    const metaDiv = document.createElement('div');
    metaDiv.className = 'news-item-meta';
    metaDiv.textContent = item.meta;
    
    contentDiv.appendChild(titleDiv);
    contentDiv.appendChild(metaDiv);
    
    newsItem.appendChild(numberDiv);
    newsItem.appendChild(contentDiv);
    
    return newsItem;
}

// 填充新闻列表
function fillNewsList(listId, items) {
    const newsList = document.getElementById(listId);
    if (!newsList) return;
    
    items.forEach(item => {
        const newsItem = createNewsItem(item);
        newsList.appendChild(newsItem);
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 填充所有新闻列表
    fillNewsList('zhihu-list', newsData.zhihu);
    fillNewsList('weibo-list', newsData.weibo);
    fillNewsList('kuai-list', newsData.kuai);
    fillNewsList('wallstreet-list', newsData.wallstreet);
    fillNewsList('douyin-list', newsData.douyin);
    fillNewsList('hupu-list', newsData.hupu);
    fillNewsList('baidu-list', newsData.baidu);
    fillNewsList('toutiao-list', newsData.toutiao);
    fillNewsList('pengpai-list', newsData.pengpai);
    fillNewsList('cls-list', newsData.cls);
    
    // 点击新闻项事件
    document.querySelectorAll('.news-item').forEach(item => {
        item.addEventListener('click', () => {
            alert('您点击了一条新闻');
        });
    });
}); 