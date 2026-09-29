/* ============================================================
   data.js —— 数据维护文件
   ============================================================ */

const COLLAPSE_THRESHOLD = 5;

/* ============ 一、GitHub 作品 ============ */
const projects = [
    // { name: 'markdown-index', desc: '把零散的 markdown 笔记整理成可检索的静态索引页。', url: 'https://github.com/yourname/markdown-index', lang: 'JavaScript', langColor: '#f1e05a', stars: 128 },
    // { name: 'wechat-exporter', desc: '一键导出公众号历史文章为本地 markdown + 图片。', url: 'https://github.com/yourname/wechat-exporter', lang: 'Python', langColor: '#3572A5', stars: 342 },
    // { name: 'readwise-sync', desc: '把 Readwise 高亮同步到 Obsidian，自动生成每日笔记。', url: 'https://github.com/yourname/readwise-sync', lang: 'TypeScript', langColor: '#3178c6', stars: 56 },
    // { name: 'tiny-pomodoro', desc: '一个极简的番茄钟，支持菜单栏常驻和快捷键。', url: 'https://github.com/yourname/tiny-pomodoro', lang: 'Swift', langColor: '#F05138', stars: 89 }
];

/* ============ 二、公众号文章 ============ */
const articleCategoryMeta = {
    reverse:     {name: '📚 逆向工程'},
    writing:     {name: '✍️ 写作思考'},
    php:         {name: '⚙️ PHP'},
    java:        {name: '🧠 Java'},
    cpp:         {name: '🧠 C\C++'},
    emb:         {name: '嵌入式'},
    datastruct:  {name: '🎬 数据结构与算法'},
    review:      {name: '📦 每月复盘'},
    other:       {name: '💡 其他内容'},
    security:    {name: '软件安全'},
};

const articles = [
    {title: '查看《三国群英传2》中不让查看的武将信息', date: '2026-07-11', url: 'https://mp.weixin.qq.com/s/O6eVtuervMPVGx0R7uDfEw', category: 'reverse', tags: ['逆向工程', '单机游戏']},
    {title: '三国群英传2城市和武将的数据关系', date: '2026-07-09', url: 'https://mp.weixin.qq.com/s/oUBjw4ywwQ8lNG6f7Douxw', category: 'reverse', tags: ['逆向工程', '单机游戏']},
    {title: '因为一句话，让他和《功夫女足》结缘', date: '2026-07-08', url: 'https://mp.weixin.qq.com/s/M5kB3f3nvUMRmTav8YFDWA', category: 'other', tags: ['其他']},
    {title: '获取三国群英传2完整地图', date: '2026-07-01', url: 'https://mp.weixin.qq.com/s/gaxttXotQn7zNvKpA1GFQw', category: 'reverse', tags: ['逆向工程', '单机游戏']},
    {title: '黑客帝国中讲的是否真的会发生', date: '2026-06-28', url: 'https://mp.weixin.qq.com/s/kwpgY2zEgwYufsH1MlYwYA', category: 'other', tags: ['其他']},    
    {title: '一个字节搞定单机游戏窗口化', date: '2026-06-10', url: 'https://mp.weixin.qq.com/s/8SDd-rk2aoNEsANW-lH2fg', category: 'reverse', tags: ['逆向工程', '单机游戏']},
    {title: '从胡彦斌搞 app 看程序员的悲催', date: '2026-06-08', url: 'https://mp.weixin.qq.com/s/amcavjfSwBqCoWjTGIzI3w', category: 'other', tags: ['其他']},
    {title: '魏宗万的司马懿', date: '2026-06-06', url: 'https://mp.weixin.qq.com/s/yfctryjpXTv6GMsZrd6cTQ', category: 'other', tags: ['其他'] },    
    {title: 'PC 版生化危机 3 原版无敌', date: '2026-05-18', url: 'https://mp.weixin.qq.com/s/9MMAs65kkwTg-_Ua0iMVng', category: 'reverse', tags: ['逆向工程', '单机游戏']},    
    {title: '副业、天赋、学习、基本功、眼光', date: '2026-05-14', url: 'https://mp.weixin.qq.com/s/3uAiYhw57OpYJ-hQQdfNeg', category: 'other', tags: ['其他']},
    {title: 'AI 放大了马太定律', date: '2026-04-20', url: 'https://mp.weixin.qq.com/s/e1a4xP5BlLDtaE6geqCvJQ', category: 'other', tags: ['其他']},
            
    {title: '《寻秦记》人力乎？天命乎？', date: '2025-12-28', url: 'https://mp.weixin.qq.com/s/tLFTbcJGjC17Nktp66PPew', category: 'other', tags: ['其他']},
    
    
    {title: 'babyvm 逆向分析（乘法逆元在加密算法中的应用）', date: '2025-12-26', url: 'https://mp.weixin.qq.com/s/3vu6LamWpgUPkNPIkCfCfw', category: 'reverse', tags: ['逆向工程', 'CTF', '加密算法','VM', '软件安全']},
    {title: 'babyvm 逆向分析（三）', date: '2025-12-25', url: 'https://mp.weixin.qq.com/s/i0GYzPdeajUgoAyx-xNE5g', category: 'reverse', tags: ['逆向工程', 'CTF', 'VM', '软件安全']},
    {title: 'babyvm 逆向分析（二）', date: '2025-12-24', url: 'https://mp.weixin.qq.com/s/FuyecdD1Ap6IBQsbWuQvRg', category: 'reverse', tags: ['逆向工程', 'CTF', 'VM', '软件安全']},
    {title: 'babyvm 逆向分析（一）', date: '2025-12-23', url: 'https://mp.weixin.qq.com/s/UyuEa42LKWdcJ2sHxSORrw', category: 'reverse', tags: ['逆向工程', 'CTF', 'VM', '软件安全']},
    
    {title: '某二进制 VM 逆向分析（三）', date: '2025-12-22', url: 'https://mp.weixin.qq.com/s/y79FUInGEEl1rVBrbfwciA', category: 'reverse', tags: ['逆向工程', 'CTF','VM', '软件安全']},
    {title: '某二进制 VM 逆向分析（二）', date: '2025-12-20', url: 'https://mp.weixin.qq.com/s/w90kGQnErKRYtFK0tXhkrA', category: 'reverse', tags: ['逆向工程', 'CTF','VM', '软件安全']},
    {title: '某二进制 VM 逆向分析（一）', date: '2025-12-18', url: 'https://mp.weixin.qq.com/s/3gWOsrY6wgfBZvvKdcqIfQ', category: 'reverse', tags: ['逆向工程', 'CTF','VM', '软件安全']},
    
    {title: '看人下菜的恶意推广软件', date: '2025-11-13', url: 'https://mp.weixin.qq.com/s/RbAdpbtxwOxg6hSbdmy8Ig', category: 'other', tags: ['软件安全']},
    {title: '恶意软件 Downloader 与系统 Loader 的设计同源性', date: '2025-11-11', url: 'https://mp.weixin.qq.com/s/joG6_PKr-OJOuZUZ0r_mvQ', category: 'security', tags: ['软件安全']},
    

    {title: 'C 语言的位运算例子——解析标志寄存器', date: '2025-04-06', url: 'https://mp.weixin.qq.com/s/BtonmyPd5fhru0H_ueQbng', category: 'cpp', tags: ['C\C++'], columns: ['C\C++']},
    

    
    {title: 'IEEE 二进制浮点数的表示', date: '2019-08-12', url: 'https://mp.weixin.qq.com/s/XgptFILIDfLqYsKlaiIcgA', category: 'cpp', tags: ['C\C++'], columns: ['C\C++']},
    
    {title: 'PHP 扩展开发初探', date: '2019-08-09', url: 'https://mp.weixin.qq.com/s/18BWsg7qZ3UpTyIAZ_c3QQ', category: 'php', tags: ['php']}
];

/* ============ 三、B站视频 ============ */
const videoCategoryMeta = {
    // tutorial:  { name: '🛠️ 教程' },
    // vlog:      { name: '📹 Vlog' },
    // review:    { name: '🎞️ 影评' },
    // tech:      { name: '💻 科技' },
    // reading:   { name: '📖 读书' },
    // life:      { name: '🌱 生活' }
};

const bilibiliVideos = [
    // {title: '用 Obsidian 搭建个人知识库（上）', date: '2025-03-15', url: '#', category: 'tutorial', tags: ['Obsidian', '知识管理', '工具'], columns: ['Obsidian 系列'] },
    // {title: '用 Obsidian 搭建个人知识库（下）', date: '2025-03-22', url: '#', category: 'tutorial', tags: ['Obsidian', '知识管理', '工具'], columns: ['Obsidian 系列'] },
    // {title: '我的 2024 年度读书总结',           date: '2025-01-05', url: '#', category: 'reading',  tags: ['读书', '年度总结'],             columns: ['年度总结'] },
    // {title: '一周 Vlog：写作与生活',            date: '2025-02-08', url: '#', category: 'vlog',     tags: ['Vlog', '生活', '写作'],         columns: ['每周 Vlog'] },
    // {title: '《沙丘 2》深度解析',               date: '2024-12-10', url: '#', category: 'review',   tags: ['影评', '科幻'],                 columns: ['影视解析'] },
    // {title: '是枝裕和电影中的家庭',             date: '2024-11-05', url: '#', category: 'review',   tags: ['影评', '日本电影'],             columns: ['影视解析'] },
    // {title: 'Mac 上那些好用的效率工具',         date: '2024-10-20', url: '#', category: 'tech',     tags: ['Mac', '效率', '工具'],          columns: ['效率工具推荐'] },
    // {title: '我的 2024 效率工具年度盘点',       date: '2024-12-28', url: '#', category: 'tech',     tags: ['效率', '工具', '年度总结'],     columns: ['效率工具推荐', '年度总结'] },
    // {title: '如何做一本好看的手帐',             date: '2024-09-15', url: '#', category: 'life',     tags: ['手帐', '生活'],                 columns: [] },
    // {title: '读书笔记到底怎么做才有效',         date: '2024-08-20', url: '#', category: 'reading',  tags: ['读书', '笔记'],                 columns: ['读书方法'] },
    // {title: '一人食：简单又好吃的家常菜',       date: '2024-07-12', url: '#', category: 'life',     tags: ['生活', '美食'],                 columns: [] },
    // {title: '暑假在家做什么？我的自学清单',     date: '2024-06-25', url: '#', category: 'vlog',     tags: ['Vlog', '自学', '生活'],         columns: ['每周 Vlog'] }
];
