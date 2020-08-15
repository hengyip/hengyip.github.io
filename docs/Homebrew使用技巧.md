# Homebrew

Homebrew是MacOS下面很受观迎的应用管理工具，可以自动安装下载macos系统下的二进制包，亦可以下载源码以及依赖编译出二进制包。但由于主要依赖Github存放配置脚本(formula)，因此国内更新非常慢，同时下载编译好的二进制也会非常慢（bottles）。幸好国内有几个镜像源，能加速访问和下载。

## 新安装Homebrew
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
> 注意：Homebrew编译依赖xcode的commandline tools.

这样安装起来会比较慢，可以使用镜像替代github源下载依赖，这里用清华镜像作为例子。
### 1. 下载 https://raw.githubusercontent.com/Homebrew/install/master/install.sh 并替换其中的：
```
BREW_REPO="https://github.com/Homebrew/brew"
# 变成：
BREW_REPO="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"
```
### 2. 运行 install.sh 以安装 Homebrew：
```
HOMEBREW_CORE_GIT_REMOTE=https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git bash install.sh
```

## Homebrew源的类型

Homebrew分别有几个git仓库放不同的formula：
### 1. core库
Homebrew核心formula库，主要是一些底层依赖，各种各样的开源包，cli命令行工具等。
### 2. cask库
主要是一些桌面应用程序的安装formula，包含开源的，闭源的，商业的。
### 3. cask-font库
故名意思，是mac下的字体包。这个是可选formula，启用方式是:
```
brew tap homebrew/cask-fonts
```
### 4. cask-drivers库
很好理解，主要是mac下面的设备驱动。这个是可选formula，启用方式是:
```
brew tap homebrew/cask-drivers
```

## Homebrew镜像

### 1. 清华大学
```
# brew 程序本身
git -C "$(brew --repo)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git

# 以下针对 mac OS 系统上的 Homebrew
git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git
git -C "$(brew --repo homebrew/cask-fonts)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask-fonts.git
git -C "$(brew --repo homebrew/cask-drivers)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask-drivers.git

# 更换后测试工作是否正常
brew update
```
> 如果网络支持 IPv6，也可以使用 https://mirrors6.tuna.tsinghua.edu.cn (仅支持 IPv6)，或许会更快些。最近北外开源软件镜像站也启用了，和清华 TUNA 如出一辙，有兴趣的可以试试，只需替换上面的相关地址为：https://mirrors.bfsu.edu.cn。

### 2. 中科大镜像
```
# brew 程序本身
git -C "$(brew --repo)" remote set-url origin https://mirrors.ustc.edu.cn/brew.git

# 以下针对 mac OS 系统上的 Homebrew
git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git

# 更换后测试工作是否正常
brew update
```
> 支持的 Tap 比清华的要少些，不过我在广东的连接速度还是挺快的。IPv6 的地址是 ipv6.mirrors.ustc.edu.cn。

### 3. 腾讯软件源
```
# brew 程序本身
git -C "$(brew --repo)" remote set-url origin https://mirrors.cloud.tencent.com/homebrew/brew.git

# 以下针对 mac OS 系统上的 Homebrew
git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.cloud.tencent.com/homebrew/homebrew-core.git
git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.cloud.tencent.com/homebrew/homebrew-cask.git
git -C "$(brew --repo homebrew/cask-fonts)" remote set-url origin https://mirrors.cloud.tencent.com/homebrew/homebrew-cask-fonts.git
git -C "$(brew --repo homebrew/cask-drivers)" remote set-url origin https://mirrors.cloud.tencent.com/homebrew/homebrew-cask-drivers.git

# 更换后测试工作是否正常
brew update
```

### 4. 阿里巴巴镜像
```
# brew 程序本身
git -C "$(brew --repo)" remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git

# 以下针对 mac OS 系统上的 Homebrew
git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git

# 更换后测试工作是否正常
brew update
```

## Homebrew Bottles 源
Homebrew 安装的软件都在 /usr/local/Cellar 目录中，其中 Cellar 意为酒窖，而 Hombrew 官方与预编译好的软件 (二进制软件包) 叫做 Bottle。Homebrew 把安装一个软件到文件夹叫作把一个酒瓶子 (Bottle) 倒入(pour) 酒窖 (Cellar)，Bottles 存放在 https://bintray.com/homebrew/bottles 网站中，国内连接速度也不理想。当所要安装的软件不在 bintray 中或从 bintray 下载失败时，Homebrew 会尝试从软件原始地址下载源文件再编译安装，这有时候比安装 Homebrew 预编译好的慢太多了。

上面提到的几个镜像站都提供 bottles 的镜像，所以不妨换上他们的源提高下载速度。

替换的方法都一样，只是提供的源地址不同罢了，这里就先以清华软件源作例子吧。

### 临时替换
在运行install或upgrade前，运行：
```
export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles
```

### 长期替换
#### bash

```
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.cloud.tencent.com/homebrew-bottles' >> ~/.bash_profile

source ~/.bash_profile
```

#### zsh
```
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.cloud.tencent.com/homebrew-bottles' >> ~/.zshrc

source ~/.zshrc
```

### 可用源
    https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles
    https://mirrors.ustc.edu.cn/homebrew-bottles
    https://mirrors.aliyun.com/homebrew/homebrew-bottles
    https://mirrors.cloud.tencent.com/homebrew-bottles
    
## 换回 Homebrew 官方源
```
# brew 程序本身
git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew.git

# 以下针对 mac OS 系统上的 Homebrew
git -C "$(brew --repo homebrew/core)" remote set-url origin https://github.com/Homebrew/homebrew-core.git
git -C "$(brew --repo homebrew/cask)" remote set-url origin https://github.com/Homebrew/homebrew-cask.git
git -C "$(brew --repo homebrew/cask-fonts)" remote set-url origin https://github.com/Homebrew/homebrew-cask-fonts.git
git -C "$(brew --repo homebrew/cask-drivers)" remote set-url origin https://github.com/Homebrew/homebrew-cask-drivers.git

# 更换后测试工作是否正常
brew update
```
> Homebrew Bottles 还原的话，只需删除 .bash_profile 或 .zshrc 中相应的那行就行。


## 卸载Homebrew

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
```