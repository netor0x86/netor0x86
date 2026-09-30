/* ============================================================
   data.js —— 数据维护文件
   ============================================================ */

const COLLAPSE_THRESHOLD = 3;

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
    bigdata:     {name: '大数据'},
};

const articles = [
    ////////////////////////////////////////////////////////////////////////////////
    /** 2026 **/
    /** 07 **/
    {title: '查看《三国群英传2》中不让查看的武将信息', date: '2026-07-11', url: 'https://mp.weixin.qq.com/s/O6eVtuervMPVGx0R7uDfEw', category: 'reverse', tags: ['逆向工程', '单机游戏']},
    {title: '三国群英传2城市和武将的数据关系', date: '2026-07-09', url: 'https://mp.weixin.qq.com/s/oUBjw4ywwQ8lNG6f7Douxw', category: 'reverse', tags: ['逆向工程', '单机游戏']},
    {title: '因为一句话，让他和《功夫女足》结缘', date: '2026-07-08', url: 'https://mp.weixin.qq.com/s/M5kB3f3nvUMRmTav8YFDWA', category: 'other', tags: ['其他']},
    {title: '获取三国群英传2完整地图', date: '2026-07-01', url: 'https://mp.weixin.qq.com/s/gaxttXotQn7zNvKpA1GFQw', category: 'reverse', tags: ['逆向工程', '单机游戏']},
    /** 06 **/
    {title: '黑客帝国中讲的是否真的会发生', date: '2026-06-28', url: 'https://mp.weixin.qq.com/s/kwpgY2zEgwYufsH1MlYwYA', category: 'other', tags: ['其他']},    
    {title: '一个字节搞定单机游戏窗口化', date: '2026-06-10', url: 'https://mp.weixin.qq.com/s/8SDd-rk2aoNEsANW-lH2fg', category: 'reverse', tags: ['逆向工程', '单机游戏']},
    {title: '从胡彦斌搞 app 看程序员的悲催', date: '2026-06-08', url: 'https://mp.weixin.qq.com/s/amcavjfSwBqCoWjTGIzI3w', category: 'other', tags: ['其他']},
    {title: '魏宗万的司马懿', date: '2026-06-06', url: 'https://mp.weixin.qq.com/s/yfctryjpXTv6GMsZrd6cTQ', category: 'other', tags: ['其他']},
    /** 05 **/
    {title: 'PC 版生化危机 3 原版无敌', date: '2026-05-18', url: 'https://mp.weixin.qq.com/s/9MMAs65kkwTg-_Ua0iMVng', category: 'reverse', tags: ['逆向工程', '单机游戏']},    
    {title: '副业、天赋、学习、基本功、眼光', date: '2026-05-14', url: 'https://mp.weixin.qq.com/s/3uAiYhw57OpYJ-hQQdfNeg', category: 'other', tags: ['其他']},
    /** 04 **/
    {title: 'AI 放大了马太定律', date: '2026-04-20', url: 'https://mp.weixin.qq.com/s/e1a4xP5BlLDtaE6geqCvJQ', category: 'other', tags: ['其他']},
    /** 03 **/
    /** 02 **/
    /** 01 **/
    
    ////////////////////////////////////////////////////////////////////////////////
    /** 2025 **/
    /** 12 **/
    {title: '《寻秦记》人力乎？天命乎？', date: '2025-12-28', url: 'https://mp.weixin.qq.com/s/tLFTbcJGjC17Nktp66PPew', category: 'other', tags: ['其他']},
    {title: 'babyvm 逆向分析（乘法逆元在加密算法中的应用）', date: '2025-12-26', url: 'https://mp.weixin.qq.com/s/3vu6LamWpgUPkNPIkCfCfw', category: 'reverse', tags: ['逆向工程', 'CTF', '加密算法','VM', '软件安全']},
    {title: 'babyvm 逆向分析（三）', date: '2025-12-25', url: 'https://mp.weixin.qq.com/s/i0GYzPdeajUgoAyx-xNE5g', category: 'reverse', tags: ['逆向工程', 'CTF', 'VM', '软件安全']},
    {title: 'babyvm 逆向分析（二）', date: '2025-12-24', url: 'https://mp.weixin.qq.com/s/FuyecdD1Ap6IBQsbWuQvRg', category: 'reverse', tags: ['逆向工程', 'CTF', 'VM', '软件安全']},
    {title: 'babyvm 逆向分析（一）', date: '2025-12-23', url: 'https://mp.weixin.qq.com/s/UyuEa42LKWdcJ2sHxSORrw', category: 'reverse', tags: ['逆向工程', 'CTF', 'VM', '软件安全']},    
    {title: '某二进制 VM 逆向分析（三）', date: '2025-12-22', url: 'https://mp.weixin.qq.com/s/y79FUInGEEl1rVBrbfwciA', category: 'reverse', tags: ['逆向工程', 'CTF','VM', '软件安全']},
    {title: '某二进制 VM 逆向分析（二）', date: '2025-12-20', url: 'https://mp.weixin.qq.com/s/w90kGQnErKRYtFK0tXhkrA', category: 'reverse', tags: ['逆向工程', 'CTF','VM', '软件安全']},
    {title: '某二进制 VM 逆向分析（一）', date: '2025-12-18', url: 'https://mp.weixin.qq.com/s/3gWOsrY6wgfBZvvKdcqIfQ', category: 'reverse', tags: ['逆向工程', 'CTF','VM', '软件安全']},
    /** 11 **/
    {title: '看人下菜的恶意推广软件', date: '2025-11-13', url: 'https://mp.weixin.qq.com/s/RbAdpbtxwOxg6hSbdmy8Ig', category: 'other', tags: ['软件安全']},
    {title: '恶意软件 Downloader 与系统 Loader 的设计同源性', date: '2025-11-11', url: 'https://mp.weixin.qq.com/s/joG6_PKr-OJOuZUZ0r_mvQ', category: 'security', tags: ['软件安全']},
    /** 11 **/
    /** 10 **/
    /** 09 **/
    /** 08 **/
    /** 07 **/
    /** 06 **/
    /** 05 **/
    /** 04 **/
    {title: 'C 语言的位运算例子——解析标志寄存器', date: '2025-04-06', url: 'https://mp.weixin.qq.com/s/BtonmyPd5fhru0H_ueQbng', category: 'cpp', tags: ['C\C++'], columns: ['C\C++']},
    /** 03 **/
    /** 02 **/
    /** 01 **/
    
    ////////////////////////////////////////////////////////////////////////////////
    /** 2024 **/
    /** 12 **/
    {title: 'Windows 平台下 IDA 远程调试 Linux 可执行文件', date: '2024-12-02', url: 'https://mp.weixin.qq.com/s/EBMVviVQtj4WBCHgM8kE9A', category: 'reverse', tags: ['逆向工程', 'IDA']},
    /** 11 **/
    /** 10 **/
    /** 09 **/
    /** 08 **/
    /** 07 **/
    /** 06 **/
    /** 05 **/
    /** 04 **/
    /** 03 **/
    /** 02 **/
    /** 01 **/
    
    ////////////////////////////////////////////////////////////////////////////////
    /** 2023 **/
    /** 12 **/
    {title: 'PHP 的 shuffle 函数不能用于洗牌算法？', date: '2023-12-27', url: 'https://mp.weixin.qq.com/s/qdoyN0WcaUpaMoKHs1-BaQ', category: 'php', tags: ['php']},
    /** 11 **/
    /** 10 **/
    /** 09 **/
    /** 08 **/
    /** 07 **/
    /** 06 **/
    /** 05 **/
    /** 04 **/
    /** 03 **/
    /** 02 **/
    /** 01 **/
    
    ////////////////////////////////////////////////////////////////////////////////
    /** 2022 **/
    /** 12 **/
    {title: '【JVM 札记】浅谈 JVM', date: '2022-12-19', url: 'https://mp.weixin.qq.com/s/o4skvv9yVUQZ2Tv0nD4Zcg', category: 'java', tags: ['java', 'JVM']},
    /** 11 **/
    /** 10 **/
    /** 09 **/
    /** 08 **/
    /** 07 **/
    /** 06 **/
    /** 05 **/
    /** 04 **/
    /** 03 **/
    /** 02 **/
    /** 01 **/
    
    ////////////////////////////////////////////////////////////////////////////////
    /** 2021 **/
    /** 12 **/
    /** 11 **/
    /** 10 **/
    /** 09 **/
    /** 08 **/
    /** 07 **/
    /** 06 **/
    /** 05 **/
    /** 04 **/
    /** 03 **/
    {title: '大数据 | HDFS 元数据持久化笔记', date: '2021-11-29', url: 'https://mp.weixin.qq.com/s/INxxlz6AWhzsrcebkS5aJA', category: 'bigdata', tags: ['大数据', 'HDFS']},
    /** 02 **/
    {title: 'JWT库生成Token的使用与原理', date: '2021-02-01', url: 'https://mp.weixin.qq.com/s/RJDzQvB5hOmjqGB8BV02KQ', category: 'java', tags: ['java']},
    /** 01 **/
    {title: 'BCryptPasswordEncoder的使用及原理', date: '2021-01-25', url: 'https://mp.weixin.qq.com/s/P4-y76mX70EC6ba6s_Og3A', category: 'java', tags: ['java']},
    {title: 'Java 项目中几个必不可少的小功能', date: '2021-01-18', url: 'https://mp.weixin.qq.com/s/WvwtClRqUOYrYKBaXfvNeQ', category: 'java', tags: ['java']},
    {title: 'Redis | 慢查询', date: '2021-01-11', url: 'https://mp.weixin.qq.com/s/RcifOpNdPw4WWntHNl3aeA', category: 'bigdata', tags: ['大数据', 'Redis']},
    {title: 'Redis | 事物源码阅读 —— watch', date: '2021-01-02', url: 'https://mp.weixin.qq.com/s/58_r8JxhY36FWLZemg2kRQ', category: 'bigdata', tags: ['大数据', 'Redis']},
    
    ////////////////////////////////////////////////////////////////////////////////
    /** 2020 **/
    /** 11 **/
    {title: 'Redis | Redis 的事务一', date: '2020-11-24', url: 'https://mp.weixin.qq.com/s/oV54IRXNsYmQNKjyVuaqWg', category: 'bigdata', tags: ['大数据', 'Redis']},
    /** 10 **/
    /** 09 **/
    /** 08 **/
    
    /** 07 **/
    {title: 'IDEA 下 SpringBoot 自动重启', date: '2020-07-25', url: 'https://mp.weixin.qq.com/s/3d8xrAJwOvS0ELJo-aQIxQ', category: 'other', tags: ['其他', 'java']},
    {title: 'LeetCode | 21.合并两个有序链表', date: '2020-07-25', url: 'https://mp.weixin.qq.com/s/Jr1MhdetUw7NH4oi1cha9Q', category: 'datastruct', tags: ['C\C++', '数据结构与算法', 'leetcode'], columns: ['leetcode']},
    {title: 'LeetCode | 2.两数相加', date: '2020-07-18', url: 'https://mp.weixin.qq.com/s/iQE5DZYmaR8JAWT6fBSfow', category: 'datastruct', tags: ['C\C++', '数据结构与算法', 'leetcode'], columns: ['leetcode']},
    {title: 'PHP 代码混淆处理思路', date: '2020-07-11', url: 'https://mp.weixin.qq.com/s/It9Thtz20rSQ3Z4u_3rl6g', category: 'security', tags: ['网络安全', '信息安全', '软件安全', 'php']},
    {title: 'Redis | Redis 字符串相关命令', date: '2020-07-05', url: 'https://mp.weixin.qq.com/s/dSaFCcdaajN126L5Di8OzA', category: 'bigdata', tags: ['大数据', 'Redis']},
    /** 06 **/
    {title: 'LeetCode | 1.两数之和', date: '2020-06-26', url: 'https://mp.weixin.qq.com/s/DuKBJ0_X5YDv-T_b7ZBXCQ', category: 'datastruct', tags: ['C\C++', '数据结构与算法', 'leetcode'], columns: ['leetcode']},
    {title: 'LeetCode | 703.数据流中的第K大元素', date: '2020-06-20', url: 'https://mp.weixin.qq.com/s/DexC2QQMKZVSa4JtakIXFA', category: 'datastruct', tags: ['C\C++', '数据结构与算法', 'leetcode'], columns: ['leetcode']},
    {title: 'Redis | Redis 通用命令', date: '2020-06-13', url: 'https://mp.weixin.qq.com/s/ykaC3pGUluTepBfFbrVnEw', category: 'bigdata', tags: ['大数据', 'Redis']},
    {title: 'LeetCode | 232.用栈实现队列', date: '2020-06-06', url: 'https://mp.weixin.qq.com/s/i1AFNum-EMNOog36D6tEvQ', category: 'datastruct', tags: ['C\C++', '数据结构与算法', 'leetcode'], columns: ['leetcode']},
    /** 05 **/
    {title: 'LeetCode | 225.用队列实现栈', date: '2020-05-30', url: 'https://mp.weixin.qq.com/s/mUSSg6ZkwuvoD7CbZAQS5Q', category: 'datastruct', tags: ['C\C++', '数据结构与算法', 'leetcode'], columns: ['leetcode']},
    {title: 'LeetCode | 20.有效的括号', date: '2020-05-25', url: 'https://mp.weixin.qq.com/s/51TH-l8J43RLAIwCJu4pZg', category: 'datastruct', tags: ['C\C++', '数据结构与算法', 'leetcode'], columns: ['leetcode']},
    {title: 'LeetCode | 141.环形链表', date: '2020-05-17', url: 'https://mp.weixin.qq.com/s/dRB7HWBnrFDMa9HHPC685A', category: 'datastruct', tags: ['C\C++', '数据结构与算法', 'leetcode'], columns: ['leetcode']},
    {title: 'LeetCode | 24.两两交换链表中的节点', date: '2020-05-10', url: 'https://mp.weixin.qq.com/s/lK6gCdrVhxEiLF37As0cxw', category: 'datastruct', tags: ['C\C++', '数据结构与算法', 'leetcode'], columns: ['leetcode']},
    {title: 'Redis | Redis 命令分类', date: '2020-05-07', url: 'https://mp.weixin.qq.com/s/bPVQu5Y1OUF3GZ53PWq4nQ', category: 'bigdata', tags: ['大数据', 'Redis']},
    /** 04 **/
    {title: 'LeetCode | 206.反转链表', date: '2020-04-29', url: 'https://mp.weixin.qq.com/s/UoOiL07nElh8yfoRbMw2Cg', category: 'datastruct', tags: ['C\C++', '数据结构与算法', 'leetcode'], columns: ['leetcode']},
    {title: 'Redis | Redis的帮助命令', date: '2020-04-23', url: 'https://mp.weixin.qq.com/s/sw2zCtnpHCXuKIAsiqGT4A', category: 'bigdata', tags: ['大数据', 'Redis']},
    {title: 'Redis ｜ Redis 的安装', date: '2020-04-16', url: 'https://mp.weixin.qq.com/s/bsAk7lV13IlMBRg7REX0Mw', category: 'bigdata', tags: ['大数据', 'Redis']},
    {title: '自删除的代码', date: '2020-04-07', url: 'https://mp.weixin.qq.com/s/UUhxZiRZuTQX1buseBXrQQ', category: 'reverse', tags: ['逆向工程', '软件安全', 'C\C++']},
    {title: '爆破某解压缩软件', date: '2020-04-07', url: 'https://mp.weixin.qq.com/s/l3idr1VVouhzLC0uZ14K7A', category: 'reverse', tags: ['逆向工程', '软件安全']},
    /** 03 **/
    {title: '脱Aspack手动查找IAT完成脱壳修复', date: '2020-03-31', url: 'https://mp.weixin.qq.com/s/RuBLrMxZKPguRQI39dweyQ', category: 'reverse', tags: ['逆向工程', '软件安全']},
    {title: '简单病毒样本分析', date: '2020-03-31', url: 'https://mp.weixin.qq.com/s/isgLkyce17yDFxcCuGQJ4A', category: 'reverse', tags: ['逆向工程', '软件安全']},
    {title: 'Lambda 表达式学习感受', date: '2020-03-22', url: 'https://mp.weixin.qq.com/s/t0-ruej___s8iUfh4OKcyw', category: 'java', tags: ['java']},
    {title: '设计模式学习笔记｜单例模式 Singleton', date: '2020-03-13', url: 'https://mp.weixin.qq.com/s/sVo-Wl971AxEBVhdxQRTRQ', category: 'java', tags: ['java', '设计模式']},
    {title: '传值与传地址', date: '2020-03-07', url: 'https://mp.weixin.qq.com/s/F0qXYJUuEojBQndQdSOrwQ', category: 'cpp', tags: ['C\C++']},
    /** 02 **/
    {title: 'Redis 学习心得', date: '2020-02-28', url: 'https://mp.weixin.qq.com/s/5hBsTgfZKPAFNYJYdNmy-g', category: 'other', tags: ['其他']},
    /** 01 **/
    {title: '2019 年复盘', date: '2020-01-19', url: 'https://mp.weixin.qq.com/s/r86bKITaKojr80_jxyiguA', category: 'other', tags: ['其他']},
    {title: '胡侃区块链', date: '2020-01-11', url: 'https://mp.weixin.qq.com/s/ssUXS3BUAJ9tThnVQGTKlw', category: 'other', tags: ['其他']},
    {title: 'RSA 加密算法主要公式', date: '2020-01-09', url: 'https://mp.weixin.qq.com/s/_xTGHYtYgQsboXUa7MEbbg', category: 'security', tags: ['网络安全', '信息安全', '加密算法']},
    
    ////////////////////////////////////////////////////////////////////////////////
    /** 2019 **/
    /** 12 **/
    {title: '2019 内容汇总', date: '2019-12-31', url: 'https://mp.weixin.qq.com/s/hkqdIUxGtDup44lFZntHHQ', category: 'other', tags: ['其他']},
    {title: 'AES 加密算法学习感受', date: '2019-12-29', url: 'https://mp.weixin.qq.com/s/VHHrxGQL1xieJg8ck31M9w', category: 'other', tags: ['其他']},
    {title: 'AES 加密算法小结', date: '2019-12-29', url: 'https://mp.weixin.qq.com/s/0lmqAg5TgH9iOy5P80lrwA', category: 'security', tags: ['网络安全', '信息安全', '加密算法']},
    {title: '乘法逆元的计算', date: '2019-12-24', url: 'https://mp.weixin.qq.com/s/W1uuGrkU3lxjGFYUfckaLw', category: 'security', tags: ['网络安全', '信息安全', '加密算法']},
    {title: 'MacOS 反汇编初探', date: '2019-12-22', url: 'https://mp.weixin.qq.com/s/HMjn4s8R0IBqn5KzBWdsfQ', category: 'reverse', tags: ['逆向工程', '软件安全']},
    {title: '分组密码工作模式', date: '2019-12-14', url: 'https://mp.weixin.qq.com/s/1YWizmMj50ndfwqyj78MoA', category: 'security', tags: ['网络安全', '信息安全', '加密算法']},
    {title: 'Web 防火墙的构思', date: '2019-12-03', url: 'https://mp.weixin.qq.com/s/aomD58YOspOGsHVx5JVMyQ', category: 'security', tags: ['网络安全']},
    {title: 'PHP 恶意程序简单分析', date: '2019-12-01', url: 'https://mp.weixin.qq.com/s/PXTvsFTvJBRXq5OoAYrdeQ', category: 'security', tags: ['网络安全', '信息安全', '软件安全', 'php']},
    /** 11 **/
    {title: '对服务器中恶意程序分析的收获', date: '2019-11-29', url: 'https://mp.weixin.qq.com/s/Tu0iM3UopYchZ0B3Rj_1KQ', category: 'security', tags: ['网络安全', '信息安全']},
    {title: '官网被入侵的反思', date: '2019-11-28', url: 'https://mp.weixin.qq.com/s/VC4t8dElVxt0yS_VmY64oQ', category: 'security', tags: ['网络安全', '信息安全']},
    {title: '静态链表', date: '2019-11-24', url: 'https://mp.weixin.qq.com/s/bs-_DLzZdnvuiuWOBDvIdA', category: 'datastruct', tags: ['数据结构与算法']},
    {title: '手画 DES 加密算法流程', date: '2019-11-21', url: 'https://mp.weixin.qq.com/s/fs0wlgjlCrzwyybmZWwqFw', category: 'security', tags: ['网络安全', '信息安全', '加密算法']},
    {title: '除了获取 MAC 地址还能干啥', date: '2019-11-17', url: 'https://mp.weixin.qq.com/s/GjVWyeYTUmo55TjPMXVIGA', category: 'security', tags: ['网络安全', '信息安全']},
    {title: '从源码角度看 PHP 字符串类型转换', date: '2019-11-16', url: 'https://mp.weixin.qq.com/s/SedGBDp438waPW-YuqQGwg', category: 'php', tags: ['php']},
    {title: '分享学习 PHP 源码的方法', date: '2019-11-10', url: 'https://mp.weixin.qq.com/s/QgFhXB9FGuxPVmdkmUl34w', category: 'php', tags: ['php']},
    {title: '用二进制写程序，提升装 X 境界', date: '2019-11-07', url: 'https://mp.weixin.qq.com/s/5h7G0Dwtl4eZXn_S-_BZVQ', category: 'other', tags: ['其他']},
    {title: '对学习态度的反思', date: '2019-11-02', url: 'https://mp.weixin.qq.com/s/Epma0Fy2rMa_q6y1x5UcxQ', category: 'other', tags: ['其他']},
    /** 10 **/
    {title: '站长必须要了解的网络安全法', date: '2019-10-31', url: 'https://mp.weixin.qq.com/s/uLiftv1EMQAq427BfzVEhQ', category: 'security', tags: ['网络安全', '信息安全']},
    {title: '从数据表字段 float 和 double 说起', date: '2019-10-29', url: 'https://mp.weixin.qq.com/s/u9urKw-83NtBYxS-HGwFPA', category: 'other', tags: ['其他', 'C\C++']},
    {title: 'Socket 编程', date: '2019-10-28', url: 'https://mp.weixin.qq.com/s/vJkKLJLiiGoq7pm8I8y4Vw', category: 'cpp', tags: ['C\C++', '网络编程']},
    {title: 'Web 获取 MAC 地址', date: '2019-10-25', url: 'https://mp.weixin.qq.com/s/2IytWodvfu_XrMkBAaZAfQ', category: 'other', tags: ['其他', 'C\C++']},
    {title: '一个只有十多行代码的 C 语言问题', date: '2019-10-24', url: 'https://mp.weixin.qq.com/s/al26tYGe3uhGKWPaMAn-Dg', category: 'cpp', tags: ['C\C++']},
    {title: 'PHP 管理树莓派', date: '2019-10-23', url: 'https://mp.weixin.qq.com/s/UBADOlMVABeCAyyLCX26EQ', category: 'php', tags: ['php']},
    {title: 'JeeSite | 访问控制权限', date: '2019-10-22', url: 'https://mp.weixin.qq.com/s/rs57GDGelHvUGPcbCu-SFQ', category: 'java', tags: ['java', 'JeeSite']},
    {title: 'JeeSite | 数据分页与翻页', date: '2019-10-21', url: 'https://mp.weixin.qq.com/s/16Wu7-JM4kFkIwWuaQ5Z5Q', category: 'java', tags: ['java', 'JeeSite']},
    {title: 'JeeSite 内容汇总', date: '2019-10-20', url: 'https://mp.weixin.qq.com/s/2IOhAmJHxZ3Tg2qMxk7GSA', category: 'java', tags: ['java', 'JeeSite']},
    {title: 'JeeSite | 保存信息修改记录封装', date: '2019-10-19', url: 'https://mp.weixin.qq.com/s/ak8HQC5aRB1rJR0utE9Whg', category: 'java', tags: ['java', 'JeeSite']},
    {title: '植物大战僵尸辅助', date: '2019-10-18', url: 'https://mp.weixin.qq.com/s/CE0vPdEUrX0lbZd-NfHNBg', category: 'cpp', tags: ['C\C++', '单机游戏']},
    {title: 'Wamp 下运行 CGI 笔记', date: '2019-10-16', url: 'https://mp.weixin.qq.com/s/SmIEB4HUsstEWOTdvobvjw', category: 'cpp', tags: ['C\C++']},
    {title: 'MyBatis-Generator 用法介绍', date: '2019-10-15', url: 'https://mp.weixin.qq.com/s/xW6mmpsf_37aOE17KRHgvw', category: 'java', tags: ['java', 'MyBatis']},
    {title: 'JeeSite | 保存信息修改记录', date: '2019-10-14', url: 'https://mp.weixin.qq.com/s/PCPGcdxrQU-849TbRSZvwg', category: 'java', tags: ['java', 'JeeSite']},
    {title: '在 Web 中获取 MAC 地址', date: '2019-10-13', url: 'https://mp.weixin.qq.com/s/VFtgb3Rut-mr6xMi0ZHpjA', category: 'security', tags: ['C\C++', '信息安全']},
    {title: 'STS 创建 Maven 项目填坑', date: '2019-10-12', url: 'https://mp.weixin.qq.com/s/ScoG67kUWT0V14EjTML4ww', category: 'java', tags: ['java']},
    {title: 'MyBatis 构造动态 SQL 语句', date: '2019-10-11', url: 'https://mp.weixin.qq.com/s/CB9BuzsjI7VYYgZSorL0GA', category: 'java', tags: ['java', 'MyBatis']},
    {title: 'PHP 源码学习 | 变量类型数据结构', date: '2019-10-10', url: 'https://mp.weixin.qq.com/s/Gz8lE06Aqg6KJT1vWMQwjw', category: 'php', tags: ['php']},
    {title: 'Arrays 的二分查找', date: '2019-10-09', url: 'https://mp.weixin.qq.com/s/48AxyeKzpZGxGr3lNEB8MA', category: 'java', tags: ['java']},
    {title: 'JeeSite | Excel 导入导出', date: '2019-10-08', url: 'https://mp.weixin.qq.com/s/V9sgAZheXWjlXfBqgeJofg', category: 'java', tags: ['java', 'JeeSite']},
    {title: 'LeetCode | 2 的幂', date: '2019-10-06', url: 'https://mp.weixin.qq.com/s/HD0cwzVN2Wz-xVUHgWmVgQ', category: 'datastruct', tags: ['C\C++', '数据结构与算法', 'leetcode'], columns: ['leetcode']},
    {title: 'LeetCode | 机器人能否返回原点', date: '2019-10-03', url: 'https://mp.weixin.qq.com/s/rWSqmPxiufFIGcFNkc7fCg', category: 'datastruct', tags: ['C\C++', '数据结构与算法', 'leetcode'], columns: ['leetcode']},
    {title: 'LeetCode | 实现strStr()', date: '2019-10-01', url: 'https://mp.weixin.qq.com/s/F-4fl-JSPtTey3TeZWWpLA', category: 'datastruct', tags: ['C\C++', '数据结构与算法', 'leetcode'], columns: ['leetcode']},
    /** 09 **/
    {title: '数据防泄漏 | 禁止PrintScreen键', date: '2019-09-26', url: 'https://mp.weixin.qq.com/s/gcHSKZNINcpZOuT5pXXz3w', category: 'security', tags: ['C\C++', '软件安全']},
    {title: 'JeeSite | 数据权限应用', date: '2019-09-22', url: 'https://mp.weixin.qq.com/s/xEh3L4DAnDhPqYwHZyqdHQ', category: 'java', tags: ['java', 'JeeSite']},
    {title: '绕过磊科路由器登录密码', date: '2019-09-20', url: 'https://mp.weixin.qq.com/s/ltQhsPvaHwUY77zuvI9YnA', category: 'security', tags: ['C\C++', '软件安全']},
    {title: '有效的括号', date: '2019-09-17', url: 'https://mp.weixin.qq.com/s/sn77g7cg_sy2kqQN71nziA', category: 'datastruct', tags: ['C\C++', '数据结构与算法', 'leetcode'], columns: ['leetcode']},
    {title: 'PHP 扩展与 ZEND 引擎的整合', date: '2019-09-15', url: 'https://mp.weixin.qq.com/s/EGryacmMRvZy7W5Ik3ZttQ', category: 'php', tags: ['php']},
    {title: '计算两数之和', date: '2019-09-11', url: 'https://mp.weixin.qq.com/s/vCb4Ya9gdLBUgmBemqI8Sw', category: 'datastruct', tags: ['C\C++', '数据结构与算法', 'leetcode'], columns: ['leetcode']},
    {title: 'PHP扩展开发模块开发实例', date: '2019-09-08', url: 'https://mp.weixin.qq.com/s/Cl2Ch39jZi2XLAncr2vCmg', category: 'php', tags: ['php']},
    /** 08 **/
    {title: '用 PHP 函数变量数组改变代码结构', date: '2019-08-28', url: 'https://mp.weixin.qq.com/s/jvXozCkvpBlyB2F2vUEKEg', category: 'php', tags: ['php']},
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
