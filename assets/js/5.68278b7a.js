(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{351:function(e,t,r){"use strict";r.r(t);var s=r(42),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"homebrew"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#homebrew"}},[e._v("#")]),e._v(" Homebrew")]),e._v(" "),r("p",[e._v("Homebrew是MacOS下面很受观迎的应用管理工具，可以自动安装下载macos系统下的二进制包，亦可以下载源码以及依赖编译出二进制包。但由于主要依赖Github存放配置脚本(formula)，因此国内更新非常慢，同时下载编译好的二进制也会非常慢（bottles）。幸好国内有几个镜像源，能加速访问和下载。")]),e._v(" "),r("h2",{attrs:{id:"新安装homebrew"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新安装homebrew"}},[e._v("#")]),e._v(" 新安装Homebrew")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n')])])]),r("blockquote",[r("p",[e._v("注意：Homebrew编译依赖xcode的commandline tools.")])]),e._v(" "),r("p",[e._v("这样安装起来会比较慢，可以使用镜像替代github源下载依赖，这里用清华镜像作为例子。")]),e._v(" "),r("h3",{attrs:{id:"_1-下载-https-raw-githubusercontent-com-homebrew-install-master-install-sh-并替换其中的："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载-https-raw-githubusercontent-com-homebrew-install-master-install-sh-并替换其中的："}},[e._v("#")]),e._v(" 1. 下载 https://raw.githubusercontent.com/Homebrew/install/master/install.sh 并替换其中的：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('BREW_REPO="https://github.com/Homebrew/brew"\n# 变成：\nBREW_REPO="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"\n')])])]),r("h3",{attrs:{id:"_2-运行-install-sh-以安装-homebrew："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行-install-sh-以安装-homebrew："}},[e._v("#")]),e._v(" 2. 运行 install.sh 以安装 Homebrew：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("HOMEBREW_CORE_GIT_REMOTE=https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git bash install.sh\n")])])]),r("h2",{attrs:{id:"homebrew源的类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#homebrew源的类型"}},[e._v("#")]),e._v(" Homebrew源的类型")]),e._v(" "),r("p",[e._v("Homebrew分别有几个git仓库放不同的formula：")]),e._v(" "),r("h3",{attrs:{id:"_1-core库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-core库"}},[e._v("#")]),e._v(" 1. core库")]),e._v(" "),r("p",[e._v("Homebrew核心formula库，主要是一些底层依赖，各种各样的开源包，cli命令行工具等。")]),e._v(" "),r("h3",{attrs:{id:"_2-cask库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-cask库"}},[e._v("#")]),e._v(" 2. cask库")]),e._v(" "),r("p",[e._v("主要是一些桌面应用程序的安装formula，包含开源的，闭源的，商业的。")]),e._v(" "),r("h3",{attrs:{id:"_3-cask-font库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-cask-font库"}},[e._v("#")]),e._v(" 3. cask-font库")]),e._v(" "),r("p",[e._v("故名意思，是mac下的字体包。这个是可选formula，启用方式是:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("brew tap homebrew/cask-fonts\n")])])]),r("h3",{attrs:{id:"_4-cask-drivers库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-cask-drivers库"}},[e._v("#")]),e._v(" 4. cask-drivers库")]),e._v(" "),r("p",[e._v("很好理解，主要是mac下面的设备驱动。这个是可选formula，启用方式是:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("brew tap homebrew/cask-drivers\n")])])]),r("h2",{attrs:{id:"homebrew镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#homebrew镜像"}},[e._v("#")]),e._v(" Homebrew镜像")]),e._v(" "),r("h3",{attrs:{id:"_1-清华大学"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-清华大学"}},[e._v("#")]),e._v(" 1. 清华大学")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('# brew 程序本身\ngit -C "$(brew --repo)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git\n\n# 以下针对 mac OS 系统上的 Homebrew\ngit -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git\ngit -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git\ngit -C "$(brew --repo homebrew/cask-fonts)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask-fonts.git\ngit -C "$(brew --repo homebrew/cask-drivers)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask-drivers.git\n\n# 更换后测试工作是否正常\nbrew update\n')])])]),r("blockquote",[r("p",[e._v("如果网络支持 IPv6，也可以使用 https://mirrors6.tuna.tsinghua.edu.cn (仅支持 IPv6)，或许会更快些。最近北外开源软件镜像站也启用了，和清华 TUNA 如出一辙，有兴趣的可以试试，只需替换上面的相关地址为：https://mirrors.bfsu.edu.cn。")])]),e._v(" "),r("h3",{attrs:{id:"_2-中科大镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-中科大镜像"}},[e._v("#")]),e._v(" 2. 中科大镜像")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('# brew 程序本身\ngit -C "$(brew --repo)" remote set-url origin https://mirrors.ustc.edu.cn/brew.git\n\n# 以下针对 mac OS 系统上的 Homebrew\ngit -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git\ngit -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git\n\n# 更换后测试工作是否正常\nbrew update\n')])])]),r("blockquote",[r("p",[e._v("支持的 Tap 比清华的要少些，不过我在广东的连接速度还是挺快的。IPv6 的地址是 ipv6.mirrors.ustc.edu.cn。")])]),e._v(" "),r("h3",{attrs:{id:"_3-腾讯软件源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-腾讯软件源"}},[e._v("#")]),e._v(" 3. 腾讯软件源")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('# brew 程序本身\ngit -C "$(brew --repo)" remote set-url origin https://mirrors.cloud.tencent.com/homebrew/brew.git\n\n# 以下针对 mac OS 系统上的 Homebrew\ngit -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.cloud.tencent.com/homebrew/homebrew-core.git\ngit -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.cloud.tencent.com/homebrew/homebrew-cask.git\ngit -C "$(brew --repo homebrew/cask-fonts)" remote set-url origin https://mirrors.cloud.tencent.com/homebrew/homebrew-cask-fonts.git\ngit -C "$(brew --repo homebrew/cask-drivers)" remote set-url origin https://mirrors.cloud.tencent.com/homebrew/homebrew-cask-drivers.git\n\n# 更换后测试工作是否正常\nbrew update\n')])])]),r("h3",{attrs:{id:"_4-阿里巴巴镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-阿里巴巴镜像"}},[e._v("#")]),e._v(" 4. 阿里巴巴镜像")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('# brew 程序本身\ngit -C "$(brew --repo)" remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git\n\n# 以下针对 mac OS 系统上的 Homebrew\ngit -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git\n\n# 更换后测试工作是否正常\nbrew update\n')])])]),r("h2",{attrs:{id:"homebrew-bottles-源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-bottles-源"}},[e._v("#")]),e._v(" Homebrew Bottles 源")]),e._v(" "),r("p",[e._v("Homebrew 安装的软件都在 /usr/local/Cellar 目录中，其中 Cellar 意为酒窖，而 Hombrew 官方与预编译好的软件 (二进制软件包) 叫做 Bottle。Homebrew 把安装一个软件到文件夹叫作把一个酒瓶子 (Bottle) 倒入(pour) 酒窖 (Cellar)，Bottles 存放在 https://bintray.com/homebrew/bottles 网站中，国内连接速度也不理想。当所要安装的软件不在 bintray 中或从 bintray 下载失败时，Homebrew 会尝试从软件原始地址下载源文件再编译安装，这有时候比安装 Homebrew 预编译好的慢太多了。")]),e._v(" "),r("p",[e._v("上面提到的几个镜像站都提供 bottles 的镜像，所以不妨换上他们的源提高下载速度。")]),e._v(" "),r("p",[e._v("替换的方法都一样，只是提供的源地址不同罢了，这里就先以清华软件源作例子吧。")]),e._v(" "),r("h3",{attrs:{id:"临时替换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#临时替换"}},[e._v("#")]),e._v(" 临时替换")]),e._v(" "),r("p",[e._v("在运行install或upgrade前，运行：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles\n")])])]),r("h3",{attrs:{id:"长期替换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#长期替换"}},[e._v("#")]),e._v(" 长期替换")]),e._v(" "),r("h4",{attrs:{id:"bash"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bash"}},[e._v("#")]),e._v(" bash")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.cloud.tencent.com/homebrew-bottles' >> ~/.bash_profile\n\nsource ~/.bash_profile\n")])])]),r("h4",{attrs:{id:"zsh"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zsh"}},[e._v("#")]),e._v(" zsh")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.cloud.tencent.com/homebrew-bottles' >> ~/.zshrc\n\nsource ~/.zshrc\n")])])]),r("h3",{attrs:{id:"可用源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可用源"}},[e._v("#")]),e._v(" 可用源")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles\nhttps://mirrors.ustc.edu.cn/homebrew-bottles\nhttps://mirrors.aliyun.com/homebrew/homebrew-bottles\nhttps://mirrors.cloud.tencent.com/homebrew-bottles\n")])])]),r("h2",{attrs:{id:"换回-homebrew-官方源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#换回-homebrew-官方源"}},[e._v("#")]),e._v(" 换回 Homebrew 官方源")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('# brew 程序本身\ngit -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew.git\n\n# 以下针对 mac OS 系统上的 Homebrew\ngit -C "$(brew --repo homebrew/core)" remote set-url origin https://github.com/Homebrew/homebrew-core.git\ngit -C "$(brew --repo homebrew/cask)" remote set-url origin https://github.com/Homebrew/homebrew-cask.git\ngit -C "$(brew --repo homebrew/cask-fonts)" remote set-url origin https://github.com/Homebrew/homebrew-cask-fonts.git\ngit -C "$(brew --repo homebrew/cask-drivers)" remote set-url origin https://github.com/Homebrew/homebrew-cask-drivers.git\n\n# 更换后测试工作是否正常\nbrew update\n')])])]),r("blockquote",[r("p",[e._v("Homebrew Bottles 还原的话，只需删除 .bash_profile 或 .zshrc 中相应的那行就行。")])]),e._v(" "),r("h2",{attrs:{id:"卸载homebrew"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#卸载homebrew"}},[e._v("#")]),e._v(" 卸载Homebrew")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"\n')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);