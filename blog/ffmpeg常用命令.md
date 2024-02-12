## 视频提取每帧图片
ffmpeg -i 0001-0360-zimus.mp4 %d.png

## 图片+音频合成视频
ffmpeg -loop 1 -i cs-001.jpg -t 5:12 -i 恒常念诵愿文.mp3  -pix_fmt yuv420p output4.mp4

## 合成字幕
ffmpeg -i "input.mp4" -vf subtitles="input.srt" "test.mp4"

## 图片帧合成视频（ffmpeg）
- -hwaccel cuvid：指定使用cuvid硬件加速
- -c:v h264_cuvid：使用h264_cuvid进行视频解码
- -c:v h264_nvenc：使用 h264_nvenc 进行视频编码
- -r 30 30帧每秒
- -pix_fmt yuv420p 指定图片编码，否则多数播放器不认

- 图片倒序合成
ffmpeg -r 30 -i ym-%04d.png -pix_fmt yuv420p -vcodec h264_nvenc -crf 3 -vf reverse ym2.mp4

- 指定开始序号
ffmpeg -r 30  -start_number 481 -i ym3-%04d.png -pix_fmt yuv420p -vcodec h264_nvenc -crf 3 yinmu3.mp4


## 切割音频文件
ffmpeg -i d.mp3 -vn -acodec copy -ss 00:14:30 -to 00:49:07 output.mp3
// -ss 从 小时：分：秒 处开始切割

// -t 持续时间

//-to 到小时：分：秒.毫秒 处截止

两个音频合并（会重合）

ffmpeg -i 1.mp3 -i 2.mp3 -filter_complex amix=inputs=2:duration=first:dropout_transition=2 -f mp3 3.mp3
两个音频拼接

ffmpeg -i 1.mp3 -i 2.mp3 -filter_complex '[0:0] [1:0] concat=n=2:v=0:a=1 [a]' -map [a] 3.mp3

## 视频拼接
- 准备concat.txt文件

```
file '10-1 开示四谛（一）.mp4'

file '10-2 开示四谛（二）.mp4'
```
- `ffmpeg -f concat -safe 0 -i concat.txt -c copy -y  "10-1 开示四谛（上）.mp4"`

## 字幕合成
ffmpeg -i "10-2 开示四谛（下）.mp4" -i "10-2 开示四谛（下）.srt" -c copy -c:s mov_text outfile.mp4

## 字幕提取
ffmpeg -i outfile.mp4  -map 0:s:0 subtitle.srt