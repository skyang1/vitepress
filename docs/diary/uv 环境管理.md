## 基础命令
### 创建虚拟环境
```
uv venv --python 3.10
```

### 安装依赖
```
uv pip install -r requeirments.txt
```

### 激活环境
```
source .venv/bin/activate
```

### 在uv环境下，无法使用modelscope命令
setuptools 库版本太高：
```haskell
uv pip install "setuptools<82.0.0" --force-reinstall
```