### 开始

[![q2KsVf.png](https://s1.ax1x.com/2022/03/30/q2KsVf.png)](https://imgtu.com/i/q2KsVf)
1. 下载

    ```
    $ npm i jojo-mobile-player
    ```

2. 使用

    Step 1:

    ```html
    <div id="vs"></div>
    ```
    Step 2:

    ```js
    import Player from 'jojo-mobile-player';

    const player = new Player({
        id: 'vs',
        url: 'http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4'
    })
    ```

> 新增posterBgi初始化poster背景模糊参数
    这是配置播放器最简单的方法，然后它运行视频。有关更高级的内容，请参见插件部分或文档。 [更多的配置](http://h5player.bytedance.com/config.html)
