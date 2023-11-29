## 帧率 30fps，所需帧数
| 视角 | 音母咒   | 字母咒   | 缘起咒 |
| ---- | ------ | ------ | ------ |
| 近   | 176   | 315   | 298 |
| 远   | 30*8 | 420 | 30*170 |



## 语加持藏文字母

![err](https://v.huidengvan.com/hdv/bak/err.png)
*上面是Blender里的渲染结果，下面是word里的，试了好几种字体在Blender里都变形，最终转换编码使用非Unicode字体解决了问题*

![correct](https://v.huidengvan.com/hdv/bak/correct.png)

### 解决办法
![transcode](https://v.huidengvan.com/hdv/bak/transcode.png)
- 用[UTFC](https://v.huidengvan.com/hdv/bak/zip/UTFC.zip)转码成班智达编码，再用[BZDBT](https://v.huidengvan.com/hdv/bak/zip/BZDBT.zip)这个字体
- 转码时软件有时会转错，我输入了正确的转码为空，目前只能从带元音的字当中选一个，模型化后再把上面的元音去掉了
