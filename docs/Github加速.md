# GitHub 国内加速下载

GitHub 我们都知道是世界上最大的开源及私有软件项目的托管平台，全世界每天有海量优秀的开源软件在这里产生，而 GitHub 在国内很多时候获取到的下载链接是亚马逊的服务器。

中国因为不可言说的原因，经常抽疯或龟速。想要加快 GitHub 下载速度就需要用到 GitHub 国内加速服务，对于有条件的可以使用代理加快访问速度，而没有条件的就可以用到网上热心人士维护的加速服务了。

### GitHub hosts

https://github.com/521xueweihan/GitHub520

通过修改 hosts 加快 GitHub 访问速度，日常频率使用高的可以用这个方法。

### GitHub 镜像地址

* https://github.com.cnpmjs.org
* https://hub.fastgit.org

### GitHub 文件加速

利用 Cloudflare Workers 对 github release 、archive 以及项目文件进行加速，部署无需服务器且自带 cdn

* https://gh.api.99988866.xyz
* https://g.ioiox.com

该网站为演示站点，如无法打开可以查看开源项目：[gh-proxy-GitHub](https://hunsh.net/archives/23/) 文件加速自行部署。

### 加速你的 Github

https://github.zhlh6.cn

输入 Github 仓库地址，使用生成的地址进行 git ssh 操作即可

### GitHub 加速谷歌浏览器扩展

[GitHub 加速谷歌浏览器扩展](https://www.extfans.com/productivity/mfnkflidjnladnkldfonnaicljppahpg)

如果可以直接访问谷歌商店，可以访问[GitHub 加速谷歌商店](https://chrome.google.com/webstore/detail/github%E5%8A%A0%E9%80%9F/mfnkflidjnladnkldfonnaicljppahpg) 安装。

### GitHub 加速插件

油猴插件：[加速下载脚本](https://greasyfork.org/zh-CN/scripts/398278-github-%E9%95%9C%E5%83%8F%E8%AE%BF%E9%97%AE-%E5%8A%A0%E9%80%9F%E4%B8%8B%E8%BD%BD)

使用前请先安装：
* [暴力猴](https://545c.com/file/13811899-415771322)
* [油猴](https://545c.com/file/13811899-415772159)

如无法直接安装.crx 扩展，使用终极解决方法，把.crx 解压缩，然后在扩展中心中开启 开发者模式然后选择加载已解压的扩展程序。

### GitHub 缓存加速网站

https://gitclone.com/

为开发者服务（使用 git2.0+）只需在 git clone 命令中将 gitclone.com 嵌入到克隆地址中即可

### GitHub raw 加速

GitHub raw 域名并非 github.com 而是 raw.githubusercontent.com，上方的 GitHub 加速并不能加速这个域名，那么可以使用 Static CDN 提供的反代服务。

将 raw.githubusercontent.com 替换为 raw.staticdn.net 即可加速。

### GitHub + Jsdelivr

jsdelivr 唯一美中不足的就是它不能获取 exe 文件以及 Release 处附加的 exe 和 dmg 文件。

也就是说如果 exe 文件是附加在 Release 处但是没有在 code 里面的话是无法获取的。所以只能当作静态文件 cdn 用途，而不能作为 Release 加速下载的用途。
